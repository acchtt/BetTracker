# Current Football Model

**Canonical namespace:** `models/football/`

- Active model: **Football v0.2.34**
- Organized loading guide: `models/football/ORGANIZED_FILE_LOADING_GUIDE.md`
- Main procedure: `models/football/procedures/FOOTBALL_BETTING_PROCEDURE.md`
- Procedure addendum: `models/football/procedures/FOOTBALL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
- Active rule directory: `models/football/rules/`
- Active cross-chat handoff: `models/football/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`
- Historical baseline: `models/LEGACY_MODEL_CHANGELOG.md`
- Authoritative betting feed: `/ledger.json`

## Required load order

Load the following in this order, applying newer rules over older conflicts:

1. `models/football/ORGANIZED_FILE_LOADING_GUIDE.md`
2. `models/LEGACY_MODEL_CHANGELOG.md` for the retained pre-v0.2.5 baseline
3. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE.md`
4. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
5. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.5.md` through `MODEL_RULES_FOOTBALL_V0.2.34.md`, in ascending version order
6. `models/football/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`
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
- v0.2.32 applies full model parity to reminders, automations and secondary threads; prohibits unsupported precise probabilities and informal executable labels; enforces one-best-expression and combined-exposure controls across all surfaces; and treats user-reported cross-thread placements as official positions with ticket details pending
- v0.2.33 adds regime-persistence, directional-switch, candidate-oscillation, one-event binary-market and substitution-cluster controls; invalidating one side never automatically confirms the opposite side
- v0.2.34 requires competition-format verification, separates regulation and shootout utility, adds dual-value tie and pressure-to-urgency gates, strengthens tied-state side switching and further de-emphasizes xG/xGOT

## Response scope and brevity

- Keep live reassessments brief and decision-first.
- Assess recent relevant H2H and home/away form only in the prematch preview.
- Do not repeat H2H or team-form sections during live reassessments unless the user explicitly requests them.

## Active handoff state

- Immediate match: Jagiellonia Białystok vs Rangers
- Official model LEAN placed: Jagiellonia Białystok DNB @1.94 decimal
- Expected model stake: 0.25u; ticket details remain pending
- Current live score, clock, events, and prices must not be assumed; refresh from the latest user evidence
- Same-match executable exposure remaining under the normal cap: 0u
- Ledger write remains unauthorized

## Write boundary

All new football rules, procedures, context, handoffs, and reviews must be written under `models/football/`. Shared policies belong under `shared/`. Do not create new football model files at the repository root.
