# League of Legends Model Namespace

This directory is the canonical home for League of Legends model operations.

## Structure

- `CURRENT_MODEL.md` — authoritative startup pointer and current status.
- `rules/` — versioned LoL model rules.
- `context/` — active version packages, probation state, procedures, and calibration handbooks.
- `reviews/` — LoL-only settlement and model-review records.
- `handoffs/` — active-match handoffs when one exists.

## Boundary

New LoL files must remain inside `models/lol/`. Shared bankroll and application data remain outside this namespace. In particular, the authoritative betting feed remains `/ledger.json` until the SlipTrace application is deliberately migrated.

Legacy root LoL files and `project_context/lol-*` are retained for compatibility and history, but are not canonical for future writes.
