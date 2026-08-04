# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.25**
- Rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.25.md`
- Portable context: `models/lol/context/lol-v0.3.25/`
- Calibration handbook: `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
- Pre-match/pre-game procedure: `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
- Probation status: `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
- Latest model review: `models/lol/reviews/LOL_KC_TH_G2_DURATION_MODEL_UPDATE_2026-08-04.md`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.25.md`
2. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
3. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
4. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
5. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
6. latest file in `models/lol/handoffs/`, when available

## Current probation

- 11/20 completed
- Record: 7-4
- Net: +335,750 VND / +0.33575u
- Wager 12 next
- Stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20

## Write boundary

All new LoL rules, context, reviews, and handoffs must be written under `models/lol/`. Legacy root and `project_context/lol-*` paths remain read-only compatibility sources.
