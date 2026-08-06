# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.33**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.33.md`
- Prior active deltas: v0.3.32, v0.3.31, v0.3.30, v0.3.29, v0.3.28, v0.3.27 and v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Latest closed handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_NIP_IG_G3_SHADOW.md`
- Latest review: `models/lol/reviews/NIP_IG_GAME3_SHADOW_REVIEW_2026-08-06.md`
- Active live handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_WE_AL_SHADOW.md`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.33.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.32.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.31.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
5. `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`
6. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
7. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
8. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
9. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
10. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
11. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
12. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
13. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
14. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
15. both procedure addenda
16. scoreboard protocol
17. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
18. `shared/STAKE_POLICY_V2.json`
19. latest relevant handoff when one exists

LoL v0.3.33 adds late-objective kill reserves, explicit thesis invalidation, corrected Baron-expiry interpretation and soul-adjusted live moneyline controls. The four-map circuit breaker from v0.3.32 remains active.

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
- Probation and ledger remain unchanged by all shadow analysis

## Extended four-map shadow circuit breaker

- Required complete reviewed maps: **4**
- Completed and reviewed: **3**
- Active: **map 4 — Team WE vs Anyone's Legend, synchronized map pending**
- Remaining after the active map: **0**
- Actual stake and exposure: **0u**
- Logged shadow leans default to **simulated 0.25u** unless stated otherwise
- No shadow result changes the official ledger or probation
- No market may be labeled `BET`, `OFFICIAL BET`, or an official candidate during the circuit breaker
- Official recommendations do not resume automatically after map four; explicit user authorization is still required

### Completed shadow maps

**Map 1 — T1 vs Dplus KIA Game 1**

- Final: T1 won 20-4 at 28:24
- Under 30.5 kills @1.827 — win
- Over 29 minutes @1.856 — loss
- Shadow record: 1-1
- Simulated map net: -0.04325u

**Map 2 — T1 vs Dplus KIA Game 2**

- Final: T1 won 17-7 at 36:57
- Under 31.5 kills @1.811 — win, simulated +0.20275u
- Over 34 minutes @1.863 — win, simulated +0.21575u
- Shadow record: 2-0
- Simulated map net: +0.41850u

**Map 3 — NIP vs IG Game 3**

- Final: NIP won; final kills NIP 16-21 IG
- Under 27.5 kills @2.066 — loss
- Shadow record: 0-1
- Simulated map net: -0.25000u
- Primary error: late objective-density kill inventory was understated and the thesis should have been invalidated before settlement

**Current combined settled shadow record:** 3-2.  
**Current combined simulated net:** +0.12525u / +125,250 VND.

## Active shadow map 4

- Event: Team WE vs Anyone's Legend
- Current series score and game number: awaiting synchronized user input
- Draft and sides: awaiting synchronized user input
- Logged lean: none
- Actual exposure: 0u
- Handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_WE_AL_SHADOW.md`

## Shadow stake convention

- Logged shadow leans default to a nominal simulated stake of **0.25u** unless explicitly stated otherwise.
- Nominal stakes are used only for shadow performance tracking.
- Actual shadow stake, exposure and ledger impact remain **0u**.
- Multiple shadow leans may be tracked on one map because they are not placed wagers; correlations must still be identified during review.

## Position and thesis states

- Recorded position state: issued, settled win, settled loss or void.
- Current analytical thesis state: active, degraded, invalidated or confirmed.
- An issued position remains recorded, but it must not be described as retained after the live thesis is invalidated.

## Retained live controls

- Positive kill handicaps of +7.5 or wider require two synchronized stabilization snapshots.
- One isolated kill or minor gold movement is not stabilization.
- Apply the dominance override when the favorite has broad role-gold, objective and structure control.
- Estimate remaining fight inventory before judging future net-kill arithmetic.
- Reject widened lines that merely compensate for a worsening state.
- Baron acquisition and Baron conversion are separate states.
- Grubs, role-gold breadth and siege access must be used to estimate structure acceleration.
- Late total-kill projections must reserve cleanup-fight allowance when another Baron or base defense remains.
- Total kills and duration receive separate projections and verdicts.
- First-line verdict precedes logging and extended narration.

## v0.3.33 late-objective controls

- Invalidate an existing kill Under when its cushion is nine kills or fewer and at least two major fight triggers remain.
- Invalidate an existing kill Under when its cushion is five kills or fewer and at least one major fight trigger remains.
- Soul point, Elder, live or respawning Baron, second Baron after a failed close, and inhibitor/Nexus defense are major fight triggers.
- When soul/Elder and another major objective remain contestable, central late kill reserve should normally be at least 8-14 kills unless one team has lost contest access.
- Baron expiry without an inhibitor supports duration extension but can increase future kill inventory by creating another objective cycle.
- A gold leader facing enemy soul receives a material live-moneyline probability penalty.
- Deciding maps widen the late high-kill branch when both teams retain contest access.

## Duration calibration retained

- An Over-duration lean near the current clock requires at least a two-minute point-estimate buffer above the line at issuance.
- When the leader has three or more Grubs, at least +4k gold and four or more winning role-gold matchups, theoretical enemy waveclear alone is not stall confirmation.
- Require one observed successful inner-tower, Baron-expiry or base-defense cycle after the first major structure conversion before upgrading an extension branch.
- Dragon stacks can preserve future fight inventory and duration even when the opponent leads gold and towers.
- A successful Baron defense can improve duration Over probability, but it does not automatically strengthen a kill Under.

## Current operating status

- Circuit breaker progress: **3 of 4 complete maps reviewed; map 4 pending synchronized WE vs AL input**.
- Official LoL betting: paused.
- No open actual LoL exposure.
- Duration remains official-ineligible through wager 20.
- Item verification remains suspended until explicit restoration.
- Unknown items are neutral and must not be guessed.
- Every new map resets hard evidence; prior-map execution is a soft prior only.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
