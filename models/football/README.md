# Football Model Namespace

This directory is the canonical home for football model operations.

## Structure

- `CURRENT_MODEL.md` — authoritative startup pointer and current operating values.
- `rules/` — versioned football model rules.
- `context/` — future consolidated procedures and status packages.
- `reviews/` — football-only settlement and model-review records.
- `handoffs/` — active-match handoffs when one exists.

## Boundary

New football files must remain inside `models/football/`. Shared bankroll and application data remain outside this namespace. The authoritative betting feed remains `/ledger.json`.

Legacy root football rules are retained for compatibility and history, but are not canonical for future writes.
