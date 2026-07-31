#!/usr/bin/env python3
"""Merge official bet records from pending JSON files into ledger.json.

The merge is idempotent and uses syncId as the authoritative record key.
Shadow reviews and other non-bet objects are intentionally excluded.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
LEDGER_PATH = ROOT / "ledger.json"
PENDING_DIR = ROOT / "pending"


def parse_timestamp(value: Any) -> datetime | None:
    if not value:
        return None
    text = str(value).strip()
    if not text:
        return None
    if text.endswith("Z"):
        text = f"{text[:-1]}+00:00"
    try:
        parsed = datetime.fromisoformat(text)
    except ValueError:
        return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc)


def iso_z(value: datetime) -> str:
    return value.astimezone(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def record_time(record: dict[str, Any]) -> datetime:
    for key in ("updatedAt", "settledAt", "addedAt", "createdAt", "placedAt"):
        parsed = parse_timestamp(record.get(key))
        if parsed:
            return parsed
    return datetime.min.replace(tzinfo=timezone.utc)


def added_time(record: dict[str, Any], container_created_at: str | None) -> str:
    for key in ("addedAt", "createdAt", "placedAt", "sourceAddedAt"):
        parsed = parse_timestamp(record.get(key))
        if parsed:
            return iso_z(parsed)

    status = str(record.get("status", "")).lower()
    updated = parse_timestamp(record.get("updatedAt"))
    container = parse_timestamp(container_created_at)

    # Open records added to an existing pending file should use their own
    # update time; settled records use the file's original creation time so
    # settlement does not make an old wager look newly added.
    if status in {"open", "pending"} and updated and (not container or updated > container):
        return iso_z(updated)
    if container:
        return iso_z(container)
    if updated:
        return iso_z(updated)
    return iso_z(datetime.now(timezone.utc))


def normalize_record(record: dict[str, Any], container_created_at: str | None) -> dict[str, Any]:
    normalized = dict(record)
    if str(normalized.get("status", "")).lower() == "open":
        normalized["status"] = "pending"
    normalized.setdefault("addedAt", added_time(normalized, container_created_at))
    normalized.setdefault("createdAt", normalized["addedAt"])
    return normalized


def is_single_bet_record(payload: Any) -> bool:
    """Accept a root-level record only when it clearly represents a wager.

    This keeps review-only, reconciliation, and model metadata JSON files out of
    the authoritative ledger while supporting the repository's newer
    one-record-per-file pending format.
    """
    if not isinstance(payload, dict):
        return False

    required = ("syncId", "event", "bet", "status")
    if any(not str(payload.get(key) or "").strip() for key in required):
        return False

    has_price_or_stake = payload.get("odds") is not None or payload.get("stakeVnd") is not None
    return has_price_or_stake


def main() -> None:
    ledger = json.loads(LEDGER_PATH.read_text(encoding="utf-8"))
    existing_bets = ledger.get("bets")
    if not isinstance(existing_bets, list):
        raise ValueError("ledger.json must contain a bets array")

    order: list[str] = []
    by_sync_id: dict[str, dict[str, Any]] = {}
    without_sync_id: list[dict[str, Any]] = []

    for raw in existing_bets:
        if not isinstance(raw, dict):
            continue
        record = normalize_record(raw, None)
        sync_id = str(record.get("syncId") or "").strip()
        if not sync_id:
            without_sync_id.append(record)
            continue
        if sync_id not in by_sync_id:
            order.append(sync_id)
            by_sync_id[sync_id] = record
        elif record_time(record) > record_time(by_sync_id[sync_id]):
            by_sync_id[sync_id] = record

    merged_count = 0
    updated_count = 0
    source_files: list[str] = []

    for path in sorted(PENDING_DIR.glob("*.json")):
        try:
            payload = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as exc:
            raise ValueError(f"Could not read {path.relative_to(ROOT)}: {exc}") from exc

        records: list[Any] | None = None
        container_created_at: str | None = None

        if isinstance(payload, dict) and isinstance(payload.get("bets"), list):
            records = payload["bets"]
            container_created_at = payload.get("createdAt")
        elif is_single_bet_record(payload):
            records = [payload]
            container_created_at = payload.get("createdAt")

        if records is None:
            continue

        source_files.append(str(path.relative_to(ROOT)))

        for raw in records:
            if not isinstance(raw, dict):
                continue
            record = normalize_record(raw, container_created_at)
            sync_id = str(record.get("syncId") or "").strip()
            if not sync_id:
                continue

            existing = by_sync_id.get(sync_id)
            if existing is None:
                by_sync_id[sync_id] = record
                order.append(sync_id)
                merged_count += 1
                continue

            if record_time(record) >= record_time(existing):
                preserved_added = existing.get("addedAt") or record.get("addedAt")
                preserved_created = existing.get("createdAt") or record.get("createdAt") or preserved_added
                combined = {**existing, **record}
                if preserved_added:
                    combined["addedAt"] = preserved_added
                if preserved_created:
                    combined["createdAt"] = preserved_created
                by_sync_id[sync_id] = normalize_record(combined, container_created_at)
                updated_count += 1

    merged_bets = list(by_sync_id.values()) + without_sync_id
    merged_bets.sort(
        key=lambda record: (
            parse_timestamp(record.get("addedAt"))
            or parse_timestamp(record.get("createdAt"))
            or parse_timestamp(record.get("updatedAt"))
            or datetime.min.replace(tzinfo=timezone.utc)
        ),
        reverse=True,
    )

    latest = parse_timestamp(ledger.get("version")) or datetime.min.replace(tzinfo=timezone.utc)
    for record in merged_bets:
        latest = max(latest, record_time(record))

    ledger["version"] = iso_z(latest)
    ledger["bets"] = merged_bets
    ledger["mergeMetadata"] = {
        "strategy": "syncId-latest-update",
        "pendingSources": source_files,
        "officialRecordsAdded": merged_count,
        "officialRecordsUpdated": updated_count,
    }

    LEDGER_PATH.write_text(
        json.dumps(ledger, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(
        f"Merged {merged_count} new and {updated_count} updated official records; "
        f"ledger now has {len(merged_bets)} bets at version {ledger['version']}."
    )


if __name__ == "__main__":
    main()
