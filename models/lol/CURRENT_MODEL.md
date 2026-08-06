# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.31**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.31.md`
- Prior active deltas: `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`, `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`, `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`, `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`, and `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Latest closed handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_T1A_DNS_G2.md`
- Latest review: `models/lol/reviews/T1A_DNS_GAME3_LIVE_HANDICAP_REVIEW_2026-08-06.md`
- Active live handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_T1_DK_G1_SHADOW.md`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.31.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
5. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
6. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
7. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
8. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
9. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
10. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
11. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
12. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
13. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
14. `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
15. `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
16. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
17. `shared/STAKE_POLICY_V2.json`
18. latest relevant file in `models/lol/handoffs/`, when an active handoff exists

LoL v0.3.31 is the active delta and supersedes earlier rules only where stated. It retains v0.3.30 conversion arithmetic and current-map reset, v0.3.29 resilience safeguards, and the v0.3.28 item-verification suspension, while adding a two-map official-wager circuit breaker, multi-snapshot stabilization, dominance override, remaining-fight inventory, broad role-gold control, and line-moved-with-dominance rejection.

Do not search the repository root for LoL rules. Historical versions and reviews remain recoverable from Git history and are not part of normal startup.

## Current probation

- 13/20 settled/completed
- Settled record: 7-6
- Settled net: -164,250 VND / -0.16425u
- Next model-attributed wager number: 14
- Stake after restoration: 0.25u = 250,000 VND
- Maximum exposure after restoration: 0.25u per map
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20

## Latest official settlement

- Wager 13: T1A -7.5 kills @1.864, 0.25u — loss
- Net: -250,000 VND / -0.25u
- Latest verified state: DNS led 29-23 kills with approximately +4.2k gold, 4-3 dragons and 3-0 Barons
- Exact final game clock and explicit map-winner statement were not supplied; the user explicitly confirmed the wager loss

## Latest shadow miss

- Event: T1A vs DNS Game 3
- Candidate: DNS +11.5 kills @1.913
- Placement confirmed: no
- Ledger/probation impact: none
- Candidate state: T1A 10-7 kills, approximately +4k gold, 2-0 towers and 2-0 dragons
- User-supplied final kill score: 26-12 in T1A-DNS order
- Candidate would have lost by 2.5 kills
- Main error: false stabilization from one kill and a small gold contraction inside an unchanged T1A dominance trend

## Official-wager circuit breaker

The next **two complete LoL maps** are shadow-analysis only.

During the circuit breaker:

- all stakes are 0u;
- no market may be labeled `BET`, `OFFICIAL BET`, or an official candidate;
- exact verdicts, projections, state arithmetic, and post-map reviews remain mandatory;
- no shadow result changes probation;
- official recommendations resume only after two full-map reviews and explicit user authorization.

Do not advise betting against the model as an automatic inverse strategy.

## Live handicap control

For underdog positive handicaps of +7.5 or wider:

- require two consecutive synchronized snapshots showing real stabilization;
- one isolated kill or a gold fluctuation below 20% does not count;
- apply `NO BET — DOMINANCE OVERRIDE` when the favorite has at least +3k gold, leads at least three roles including two carry roles, leads by at least two combined towers and dragons, and the underdog has not won a full fight or major-objective contest;
- estimate remaining major fight inventory before judging future net-kill arithmetic;
- reject widened lines that merely compensate for worsening state.

## Non-model-attributed settled LoL wagers

The following user-confirmed wins are recorded in the overall ledger but remain excluded from automatic probation counting absent an explicit exception:

- Gen.G Game 1 moneyline @1.99: +247,500 VND / +0.2475u. The placed market differed from the evaluated series market.
- Gen.G Game 3 -3.5 kills @1.827: +206,750 VND / +0.20675u. No issued exact-market official recommendation or pre-settlement placement confirmation was recorded.

## Current operating status

- Active shadow map: T1 vs Dplus KIA Game 1.
- Circuit-breaker progress: shadow map 1 of 2, pending settlement and written review.
- Logged shadow leans from the synchronized 13:42 state:
  - Under 30.5 total kills @1.827 — 0u;
  - Over 29 minutes @1.856 — 0u.
- No open LoL exposure and no ledger entry for either lean.
- Official LoL betting remains paused for the next two complete maps.
- Total kills and duration must be projected as separate analytical markets.
- Duration remains official-ineligible through wager 20.
- **Item verification is suspended until explicit user restoration.**
- Unknown items are neutral and must not be guessed.
- Missing items alone do not block an otherwise valid analytical verdict.
- Role gold and observed execution must be weighted explicitly when visible.
- Every new map resets hard evidence; prior-map execution is a soft prior only.
- A correction that invalidates a verdict requires an immediate full rescan of all visible markets before repository maintenance.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews, and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
