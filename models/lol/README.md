# League of Legends Model Namespace

Canonical entry point: `models/lol/CURRENT_MODEL.md`

## Structure

- `rules/` — active model rule file
- `procedures/` — operational procedures, addenda, and scoreboard-reading protocol
- `context/` — consolidated active rules, probation status, calibration handbook, and pre-match/pre-game procedure
- `handoffs/` — current match-state transfers between chats
- `reviews/` — current model-development evidence when retained

## Active version

LoL v0.3.25. Normal startup uses the active v0.3.25 rule, consolidated context, procedures, shared stake policy, and the latest relevant handoff. Historical rule versions and old reviews are available through Git history rather than duplicated in the current tree.

## Boundaries

- New LoL files must stay inside `models/lol/`.
- Root application files are not LoL model context.
- `models/football/` must not be loaded by a LoL chat.
- `/ledger.json` remains the sole authoritative betting record.
