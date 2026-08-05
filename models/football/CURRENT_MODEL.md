# Current Football Model

**Canonical namespace:** `models/football/`

- Active model: **Football v0.2.31**
- Organized loading guide: `models/football/ORGANIZED_FILE_LOADING_GUIDE.md`
- Main procedure: `models/football/procedures/FOOTBALL_BETTING_PROCEDURE.md`
- Procedure addendum: `models/football/procedures/FOOTBALL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
- Active rule directory: `models/football/rules/`
- Historical baseline: `models/LEGACY_MODEL_CHANGELOG.md`
- Authoritative betting feed: `/ledger.json`

## Required load order

Load the following in this order, applying newer rules over older conflicts:

1. `models/football/ORGANIZED_FILE_LOADING_GUIDE.md`
2. `models/LEGACY_MODEL_CHANGELOG.md` for the retained pre-v0.2.5 baseline
3. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE.md`
4. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
5. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.5.md` through `MODEL_RULES_FOOTBALL_V0.2.31.md`, in ascending version order
6. latest relevant file in `models/football/handoffs/`, when available
7. `/ledger.json` when official record, bankroll, exposure, placement, or settlement status is relevant

Do not load football rules from the repository root. Root model copies were retired during the physical cleanup.

## Active operating values

- 1u = 1,000,000 VND
- Minimum odds: 1.70
- Every executable LEAN uses exactly 0.25u = 250,000 VND
- Normal official football stake cap: 0.25u
- `LEAN — SMALL` is retired for future recommendations
- A wager is official only after confirmed placement
- Ledger writes remain on hold until explicitly approved
- Every material score, minute, line, odds, card, penalty, substitution, injury, weather, pitch, or settlement change requires independent repricing
- Every match-analysis message must include the v0.2.28 assessment-period field
- Every prematch assessment and material live reassessment must independently scan all available major market families under v0.2.29; do not anchor to the previously discussed market
- Before any pick, v0.2.30 requires both teams' relevant scoring/conceding profiles and verified or explicitly classified motivation/result utility
- xG and xGOT are supporting evidence only; future-goal assessment must use multiple independent forward-looking channels and classify the goal environment as Closed, Neutral, or Open
- v0.2.31 separates win, draw and margin utility; requires exact event-budget analysis for goal and corner unders; strengthens high-event late-under and deep-favorite handicap gates; and requires explicit `NO BET — HOLD` unlock conditions when a mandatory gate remains unresolved

## Write boundary

All new football rules, procedures, context, handoffs, and reviews must be written under `models/football/`. Shared policies belong under `shared/`. Do not create new football model files at the repository root.
