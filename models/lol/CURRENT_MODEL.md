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
- Latest closed handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_T1_DK_G2_SHADOW.md`
- Latest review: `models/lol/reviews/T1_DK_GAME2_SHADOW_REVIEW_2026-08-06.md`
- Active live handoff: **none**

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

## Completed two-map shadow circuit breaker

The two required complete shadow maps have been settled and reviewed.

### Shadow Map 1 — T1 vs Dplus KIA Game 1

- Final: T1 won 20-4 at 28:24
- Final total kills: 24
- Under 30.5 kills @1.827 — shadow win
- Over 29 minutes @1.856 — shadow loss
- Shadow record: 1-1
- Main calibration: kill-total projection was accurate; duration overvalued theoretical DK waveclear and underweighted T1's three-Grub structure acceleration and broad role-gold control

### Shadow Map 2 — T1 vs Dplus KIA Game 2

- Final: T1 won 17-7 at 36:57
- Final total kills: 24
- Final objectives: T1 10-3 towers, DK 3-2 dragons, T1 2-0 Barons and T1 1-0 inhibitors
- Under 31.5 kills @1.811 — shadow win, simulated 0.25u, +0.20275u
- Over 34 minutes @1.863 — shadow win, simulated 0.25u, +0.21575u
- Shadow record: 2-0
- Nominal simulated exposure: 0.50u
- Simulated net: +0.41850u / +418,500 VND
- Actual exposure and official P&L: 0u / 0 VND
- Main calibration: the original duration point estimate of 36:15 was accurate within 42 seconds; expiration of T1's first Baron without an inhibitor was valid observed stall confirmation

### Combined circuit-breaker result

- Complete maps reviewed: **2 of 2**
- Combined shadow record: **3-1**
- Ledger/probation impact: none

The circuit breaker is complete, but official LoL betting does **not** resume automatically. It remains paused until explicit user authorization.

## Shadow stake convention

- Logged shadow leans default to a nominal simulated stake of **0.25u** unless explicitly stated otherwise.
- Nominal stakes are used only for shadow performance tracking.
- Actual shadow stake, exposure and ledger impact remain **0u**.
- Multiple shadow leans may be tracked on one map because they are not placed wagers; correlations must still be identified during review.

## Live handicap control

For underdog positive handicaps of +7.5 or wider:

- require two consecutive synchronized snapshots showing real stabilization;
- one isolated kill or a gold fluctuation below 20% does not count;
- apply `NO BET — DOMINANCE OVERRIDE` when the favorite has at least +3k gold, leads at least three roles including two carry roles, leads by at least two combined towers and dragons, and the underdog has not won a full fight or major-objective contest;
- estimate remaining major fight inventory before judging future net-kill arithmetic;
- reject widened lines that merely compensate for worsening state.

## Duration calibration retained after the shadow circuit breaker

- An Over-duration lean near the current clock requires at least a two-minute point-estimate buffer above the line at issuance.
- When the leader has three or more Grubs, at least +4k gold and four or more winning role-gold matchups, theoretical enemy waveclear alone is not stall confirmation.
- Require one observed successful inner-tower, Baron-expiry or base-defense cycle after the first major structure conversion before upgrading an extension branch.
- Dragon stacks can preserve future fight inventory and duration even when the opponent leads gold and towers.
- A successful Baron defense can improve duration Over probability while simultaneously strengthening a kill Under thesis.

## Total-kill calibration retained after the shadow circuit breaker

- A structurally even map with no towers down can still support a kill Under when both teams can advance through siege, zone control and objective pressure without repeated two-sided fights.
- Late-map kill projections must reserve a cleanup-fight allowance when a second Baron and base defense remain available.
- Total kills and duration are separate market families and must receive separate projections and verdicts.

## Non-model-attributed settled LoL wagers

The following user-confirmed wins are recorded in the overall ledger but remain excluded from automatic probation counting absent an explicit exception:

- Gen.G Game 1 moneyline @1.99: +247,500 VND / +0.2475u. The placed market differed from the evaluated series market.
- Gen.G Game 3 -3.5 kills @1.827: +206,750 VND / +0.20675u. No issued exact-market official recommendation or pre-settlement placement confirmation was recorded.

## Current operating status

- No active live handoff.
- Circuit breaker: **complete, 2 of 2 maps reviewed**.
- Official LoL betting: **paused pending explicit user authorization**.
- Probation remains 13/20, record 7-6, net -164,250 VND / -0.16425u.
- No open LoL exposure.
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
