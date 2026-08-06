# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.30**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
- Prior active deltas: `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`, `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`, `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`, and `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Latest closed handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_T1A_DNS_G2.md`
- Latest review: `models/lol/reviews/T1A_DNS_GAME2_HANDICAP_REVIEW_2026-08-06.md`
- Active live handoff: **none**

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
4. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
5. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
6. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
7. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
8. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
9. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
10. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
11. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
12. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
13. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
14. `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
15. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
16. `shared/STAKE_POLICY_V2.json`
17. latest relevant file in `models/lol/handoffs/`, when an active handoff exists

LoL v0.3.30 is the active delta and supersedes earlier rules only where stated. It retains the v0.3.29 resilience and cascade safeguards and the v0.3.28 item-verification suspension, while adding favorite-win-to-cover conversion arithmetic, a full current-map evidence reset, same-series anti-whipsaw protection, resilience-credit correction, access failure-cost testing, and a temporary pregame wide-handicap suspension.

Do not search the repository root for LoL rules. Historical versions and reviews remain recoverable from Git history and are not part of normal startup.

## Current probation

- 13/20 settled/completed
- Settled record: 7-6
- Settled net: -164,250 VND / -0.16425u
- Next model-attributed wager number: 14
- Stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20

## Latest official settlement

- Wager 13: T1A -7.5 kills @1.864, 0.25u — loss
- Net: -250,000 VND / -0.25u
- Latest verified state: DNS led 29-23 kills with approximately +4.2k gold, 4-3 dragons and 3-0 Barons
- Exact final game clock and explicit map-winner statement were not supplied; the user explicitly confirmed the wager loss

## Temporary handicap control

Until probation wager 15 is settled:

- pregame kill handicaps at absolute lines of 7.5 or wider are analysis-only;
- those lines may become official only live after current-map clock, gold, fight conversion, objective/structure and exact-margin confirmation;
- moneylines, smaller kill handicaps and kill totals remain eligible under normal gates.

For every negative handicap, calculate the favorite's no-vig map-win probability, the handicap break-even probability, and the required share of favorite wins that must cover.

## Non-model-attributed settled LoL wagers

The following user-confirmed wins are recorded in the overall ledger but remain excluded from automatic probation counting absent an explicit exception:

- Gen.G Game 1 moneyline @1.99: +247,500 VND / +0.2475u. The placed market differed from the evaluated series market.
- Gen.G Game 3 -3.5 kills @1.827: +206,750 VND / +0.20675u. No issued exact-market official recommendation or pre-settlement placement confirmation was recorded.

## Current operating status

- No active LoL handoff.
- No open LoL exposure.
- The T1A vs DNS Game 2 handicap is settled; the exact map winner was not explicitly confirmed.
- Total kills and duration must be projected as separate analytical markets.
- Separate analysis does not create separate exposure allowances.
- Duration remains official-ineligible through wager 20.
- **Item verification is suspended until explicit user restoration.**
- Unknown items are neutral and must not be guessed.
- Missing items alone do not block an otherwise valid verdict.
- Role gold and observed execution must be weighted explicitly when visible.
- Every new map resets hard evidence; prior-map execution is a soft prior only.
- A correction that invalidates a verdict requires an immediate full rescan of all visible markets before repository maintenance.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews, and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
