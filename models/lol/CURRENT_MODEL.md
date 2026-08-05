# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.28**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
- Prior active deltas: `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md` and `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Latest closed handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_GENG_HLE_G3.md`
- Latest review: `models/lol/reviews/GENG_HLE_GAME3_EXECUTION_REVIEW_2026-08-05.md`
- Active live handoff: **none**

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
2. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
5. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
6. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
7. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
8. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
9. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
10. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
11. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
12. `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
13. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
14. `shared/STAKE_POLICY_V2.json`
15. latest relevant file in `models/lol/handoffs/`, only when an active handoff exists

LoL v0.3.28 is the active delta and supersedes earlier rules only where stated. It keeps v0.3.27 role-weighted gold and v0.3.26 soul-cascade calibration, adds observed-execution scoring and correction-triggered full market rescans, and suspends item verification until the user explicitly restores it.

Do not search the repository root for LoL rules. Historical versions and reviews remain recoverable from Git history and are not part of normal startup.

## Current probation

- 11/20 completed
- Record: 7-4
- Net: +335,750 VND / +0.33575u
- Wager 12 next for model-attributed probation
- Stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20

## Non-model-attributed settled LoL wagers

The following user-confirmed wins are recorded in the overall ledger but remain excluded from automatic probation counting absent an explicit exception:

- Gen.G Game 1 moneyline @1.99: +247,500 VND / +0.2475u. The placed market differed from the evaluated series market.
- Gen.G Game 3 -3.5 kills @1.827: +206,750 VND / +0.20675u. No issued exact-market official recommendation or pre-settlement placement confirmation was recorded.

## Current operating status

- No active LoL match handoff.
- No open LoL exposure.
- **Item verification is suspended until explicit user restoration.**
- Unknown items are neutral and must not be guessed.
- Missing items alone do not block an otherwise valid verdict.
- Role gold and observed execution must be weighted explicitly when visible.
- A correction that invalidates a verdict requires an immediate full rescan of all visible markets before repository maintenance.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews, and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
