# Current Football Model

**Canonical namespace:** `models/football/`

- Active model: **Football v0.2.37**
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
5. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.5.md` through `MODEL_RULES_FOOTBALL_V0.2.37.md`, in ascending version order
6. `models/football/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`
7. `/ledger.json` when official record, bankroll, exposure, placement or settlement status is relevant

Do not load football rules from the repository root. Root model copies were retired during the physical cleanup.

## Active operating values

- 1u = 1,000,000 VND
- Minimum odds: 1.70
- Every executable LEAN uses exactly 0.25u = 250,000 VND
- No fixed cumulative same-match exposure cap under v0.2.37
- Each additional same-match position requires a fresh synchronized assessment, independent edge, correlation disclosure, cumulative-exposure statement and incremental maximum-loss statement
- `One best expression` applies to each reassessment; issue no more than one new executable selection per decision point
- `LEAN — SMALL` is retired for future recommendations
- A wager is official only after confirmed placement
- Ledger writes remain on hold until explicitly approved
- Every material score, minute, line, card, penalty, substitution, injury, weather, pitch or settlement change requires independent repricing
- Same-state accepted-odds drift of up to 0.08 is permitted under v0.2.36 when the line, settlement scope, score, minute and material state are unchanged, acceptance is within 120 seconds and odds remain at least 1.70
- A decimal-odds move greater than 0.08 requires a fresh synchronized reprice
- The former 1.5-percentage-point implied-probability sub-trigger does not independently invalidate a same-state execution inside the 0.08 tolerance
- Every match-analysis message must include the v0.2.28 assessment-period field
- Every prematch assessment and material live reassessment must independently scan all available major market families under v0.2.29; do not anchor to the previously discussed market
- Before any pick, v0.2.30 requires both teams' relevant scoring/conceding profiles and verified or explicitly classified motivation/result utility
- xG and xGOT are supporting evidence only; future-goal assessment must use multiple independent forward-looking channels and classify the goal environment as Closed, Neutral or Open
- v0.2.31 separates win, draw and margin utility; requires exact event-budget analysis for goal and corner unders; strengthens high-event late-under and deep-favorite handicap gates; and requires explicit `NO BET — HOLD` unlock conditions when a mandatory gate remains unresolved
- v0.2.32 applies full model parity to reminders, automations and secondary threads; prohibits unsupported precise probabilities and informal executable labels; enforces one-best-expression controls across all surfaces; and treats user-reported cross-thread placements as official positions with ticket details pending
- v0.2.33 adds regime-persistence, directional-switch, candidate-oscillation, one-event binary-market and substitution-cluster controls; invalidating one side never automatically confirms the opposite side
- v0.2.34 requires competition-format verification, separates regulation and shootout utility, adds dual-value tie and pressure-to-urgency gates, strengthens tied-state side switching and further de-emphasizes xG/xGOT
- v0.2.35 requires a fresh LEAN-or-NO-BET decision once a stated HOLD unlock is satisfied and mandates side-versus-one-goal-over comparison when persistent pressure develops in a tied match
- v0.2.36 increases same-state execution odds tolerance to 0.08 and retires the independent implied-probability sub-trigger inside that range
- v0.2.37 removes the fixed same-match exposure cap while preserving 0.25u per executable LEAN, one new selection per reassessment and explicit correlation/exposure controls

## Response scope and brevity

- Keep live reassessments brief and decision-first.
- Assess recent relevant H2H and home/away form only in the prematch preview.
- Do not repeat H2H or team-form sections during live reassessments unless the user explicitly requests them.

## Active position and reconciliation state

- Current match focus: Club América vs San Diego FC.
- Official position: San Diego FC +1.5 @1.89, placed from a model LEAN. Expected stake 0.25u; ticket ID, actual stake and placement timestamp remain pending.
- Chicago Fire vs Necaxa official position remains active: Necaxa +0.5 @1.89, expected stake 0.25u; ticket ID, actual stake, placement timestamp and exact acceptance score/minute remain pending.
- Jagiellonia Białystok DNB @1.94: user confirmed win; expected stake 0.25u, ticket details pending, ledger not updated.
- Shanghai Port -0.5 @1.83: user confirmed loss; ledger reconciliation required.
- Laos vs Philippines Under 3.5 @1.87: user confirmed loss; ledger reconciliation required.
- Do not assume any current score, clock, event, lineup or market state without fresh user evidence.
- Ledger write remains unauthorized.

## Write boundary

All new football rules, procedures, context, handoffs and reviews must be written under `models/football/`. Shared policies belong under `shared/`. Do not create new football model files at the repository root.
