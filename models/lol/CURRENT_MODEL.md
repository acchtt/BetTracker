# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.34**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.34.md`
- Prior active deltas: v0.3.33, v0.3.32, v0.3.31, v0.3.30, v0.3.29, v0.3.28, v0.3.27 and v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Current cross-chat handoff: `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`
- Prior match handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_WE_AL_SHADOW.md`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.34.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.33.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.32.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.31.md`
5. `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
6. `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`
7. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
8. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
9. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
10. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
11. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
12. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
13. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
14. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
15. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
16. both procedure addenda
17. scoreboard protocol
18. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
19. `shared/STAKE_POLICY_V2.json`
20. `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`

LoL v0.3.34 extends the official-wager circuit breaker to eight complete reviewed maps. The cross-chat handoff contains the latest map-5 operating corrections and supersedes stale live-status statements in earlier handoffs.

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
- Probation and ledger remain unchanged by all shadow analysis

## Eight-map shadow circuit breaker

- Required complete reviewed maps: **8**
- Completed and reviewed: **5**
- Next: **shadow map 6**
- Maps still required: **3**
- Actual stake and exposure: **0u**
- Logged shadow leans default to simulated **0.25u** unless stated otherwise
- No shadow result changes the official ledger or probation
- No market may be labeled `BET`, `OFFICIAL BET`, or an official candidate during the circuit breaker
- Official recommendations do not resume automatically after map 8; explicit user authorization remains required

### Completed shadow maps

**Map 1 — T1 vs Dplus KIA Game 1**

- Final: T1 won 20-4 at 28:24
- Under 30.5 kills @1.827 — win
- Over 29 minutes @1.856 — loss
- Simulated map net: -0.04325u

**Map 2 — T1 vs Dplus KIA Game 2**

- Final: T1 won 17-7 at 36:57
- Under 31.5 kills @1.811 — win
- Over 34 minutes @1.863 — win
- Simulated map net: +0.41850u

**Map 3 — NIP vs IG Game 3**

- Final: NIP won; final kills NIP 16-21 IG
- Under 27.5 kills @2.066 — loss
- Simulated map net: -0.25000u
- Main error: late objective-density kill inventory was understated and the live thesis should have been invalidated earlier

**Map 4 — WE vs AL Game 1**

- Under 31 minutes @2.018 — loss
- Entry was post-draft at or near 0:00, before AL secured three Grubs
- Three Grubs were later evidence and are not part of the entry rationale
- Simulated map net: -0.25000u
- Exact final scoreboard was not captured and must not be invented

**Map 5 — WE vs AL Game 2**

- Final: WE won at 31:02 despite trailing 16-26 kills
- Over 32 minutes @1.868 — loss
- WE +14.5 kills @1.966 — win
- Simulated map net: -0.00850u
- Main errors: ordinary early towerlessness was overweighted as stall confirmation; comeback capacity was treated as automatically duration-positive; the 19:56 duration thesis was not invalidated strongly enough; the kill-handicap thesis was invalidated too aggressively; a live-labelled screenshot was initially misread as final

## Current shadow accounting

- Settled shadow market record: **4-4**
- Nominal simulated net: **-0.13325u / -133,250 VND**
- Actual exposure and official P&L: **0u / 0 VND**

## Maps 6 through 8 calibration controls

- Default to one primary shadow lean per map.
- A second lean requires a materially different market thesis and a current synchronized state.
- `NO LEAN` is acceptable and should not be overridden merely to create a sample.
- No draft-only duration Under may be promoted from theoretical acceleration alone.
- A duration Under requires synchronized live conversion evidence.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Six or more total kills by 8:00 activates a wider fast-ending branch.
- Fourteen or more total kills by 16:00 prevents 0-0 towers from being classified as confirming duration evidence.
- Around 20 minutes, a leader with at least +5k gold and a two-tower lead invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen the duration distribution; they do not automatically increase expected duration.
- Positive kill-handicap invalidation requires both a small cushion and credible structural, Baron, or base conversion control.
- A screenshot still marked `Live` cannot be treated as final.
- Entry-time evidence, later live evidence, and settlement evidence must be timestamped and kept separate.

## Retained live controls

- Recorded position state and current analytical thesis state remain separate.
- Apply the dominance override when the favorite has broad role-gold, objective and structure control.
- Estimate remaining fight inventory before judging future net-kill arithmetic.
- Reject widened lines that merely compensate for a worsening state.
- Baron acquisition and Baron conversion are separate states.
- Grubs, role-gold breadth and siege access must be used to estimate structure acceleration.
- Kill Unders remain subject to v0.3.33 invalidation thresholds and late objective-density reserves.
- Baron expiry without an inhibitor supports duration extension but may increase future kill inventory.
- Dragon soul materially modifies live moneyline probability.
- Total kills and duration receive separate projections and verdicts.
- First-line verdict precedes logging and extended narration.

## Current operating status

- Circuit breaker progress: **5 of 8 complete maps reviewed; map 6 next**.
- Official LoL betting: paused.
- No open actual LoL exposure.
- Duration remains official-ineligible through wager 20.
- Item verification remains suspended until explicit restoration.
- Unknown items are neutral and must not be guessed.
- Every new map resets hard evidence; prior-map execution is a soft prior only.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
