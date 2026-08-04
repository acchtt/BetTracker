# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.25**
- Rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.25.md`
- Portable context: `models/lol/context/lol-v0.3.25/`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.25.md`
2. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
3. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
4. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
5. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
6. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
7. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
8. `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
9. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
10. `shared/STAKE_POLICY_V2.json`
11. latest relevant file in `models/lol/handoffs/`, when available

Do not search the repository root for LoL rules. Historical versions and reviews remain recoverable from Git history and are not part of normal startup.

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

All new LoL rules, procedures, context, reviews, and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
