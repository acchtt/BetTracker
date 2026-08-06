# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.32**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.32.md`
- Prior active deltas: v0.3.31, v0.3.30, v0.3.29, v0.3.28, v0.3.27 and v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Latest closed handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_T1_DK_G2_SHADOW.md`
- Latest review: `models/lol/reviews/T1_DK_GAME2_SHADOW_REVIEW_2026-08-06.md`
- Active live handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_NIP_IG_G3_SHADOW.md`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.32.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.31.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`
5. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
6. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
7. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
8. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
9. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
10. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
11. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
12. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
13. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
14. both procedure addenda
15. scoreboard protocol
16. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
17. `shared/STAKE_POLICY_V2.json`
18. latest relevant handoff when one exists

LoL v0.3.32 extends the v0.3.31 circuit breaker from two to four complete reviewed maps. All earlier controls remain active unless explicitly superseded.

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
- Completed and reviewed: **2**
- Active: **map 3 — NIP vs IG Game 3**
- Remaining after the active map: **1**
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

**Map 2 — T1 vs Dplus KIA Game 2**

- Final: T1 won 17-7 at 36:57
- Under 31.5 kills @1.811 — win, simulated +0.20275u
- Over 34 minutes @1.863 — win, simulated +0.21575u
- Shadow record: 2-0
- Simulated map net: +0.41850u

**Current combined settled shadow record:** 3-1.

## Active shadow map 3

- Event: NIP vs IG Game 3, series tied 1-1
- NIP blue: Poppy / Skarner / Sylas / Sivir / Karma
- IG red: Jax / Wukong / Viktor / Ezreal / Seraphine
- Logged lean: Under 27.5 total kills @2.066, simulated 0.25u
- Actual exposure: 0u
- Initial kill projection: central 25-29, point 26
- Initial duration projection: central 33-37 minutes, point 35
- Moneylines and kill handicap: no lean

## Shadow stake convention

- Logged shadow leans default to a nominal simulated stake of **0.25u** unless explicitly stated otherwise.
- Nominal stakes are used only for shadow performance tracking.
- Actual shadow stake, exposure and ledger impact remain **0u**.
- Multiple shadow leans may be tracked on one map because they are not placed wagers; correlations must still be identified during review.

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

## Duration calibration retained after the first two shadow maps

- An Over-duration lean near the current clock requires at least a two-minute point-estimate buffer above the line at issuance.
- When the leader has three or more Grubs, at least +4k gold and four or more winning role-gold matchups, theoretical enemy waveclear alone is not stall confirmation.
- Require one observed successful inner-tower, Baron-expiry or base-defense cycle after the first major structure conversion before upgrading an extension branch.
- Dragon stacks can preserve future fight inventory and duration even when the opponent leads gold and towers.
- A successful Baron defense can improve duration Over probability while simultaneously strengthening a kill Under thesis.

## Total-kill calibration retained after the first two shadow maps

- A structurally even map with no towers down can still support a kill Under when both teams can advance through siege, zone control and objective pressure without repeated two-sided fights.
- Late-map kill projections must reserve a cleanup-fight allowance when a second Baron and base defense remain available.
- Total kills and duration are separate market families and must receive separate projections and verdicts.

## Current operating status

- Circuit breaker progress: **2 of 4 complete maps reviewed; map 3 active**.
- Official LoL betting: paused.
- No open actual LoL exposure.
- Duration remains official-ineligible through wager 20.
- Item verification remains suspended until explicit restoration.
- Unknown items are neutral and must not be guessed.
- Every new map resets hard evidence; prior-map execution is a soft prior only.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
