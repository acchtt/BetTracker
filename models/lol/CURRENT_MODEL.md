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
- Latest closed handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_NIP_IG_G3_SHADOW.md`
- Latest review: `models/lol/reviews/NIP_IG_GAME3_SHADOW_REVIEW_2026-08-06.md`
- Active live handoff: `models/lol/handoffs/CURRENT_LIVE_HANDOFF_WE_AL_SHADOW.md`

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
20. latest relevant handoff when one exists

LoL v0.3.34 extends the official-wager circuit breaker to eight complete reviewed maps and adds a tighter four-map calibration block after WE vs AL Game 1. All earlier controls remain active unless explicitly superseded.

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
- Completed and reviewed: **3**
- Active: **map 4 — Team WE vs Anyone's Legend Game 1**
- Maps 5 through 8: pending after map 4 is completed and reviewed
- Complete maps still required, including the active map: **5**
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
- Shadow record: 1-1
- Simulated map net: -0.04325u

**Map 2 — T1 vs Dplus KIA Game 2**

- Final: T1 won 17-7 at 36:57
- Under 31.5 kills @1.811 — win
- Over 34 minutes @1.863 — win
- Shadow record: 2-0
- Simulated map net: +0.41850u

**Map 3 — NIP vs IG Game 3**

- Final: NIP won; final kills NIP 16-21 IG
- Under 27.5 kills @2.066 — loss
- Shadow record: 0-1
- Simulated map net: -0.25000u
- Main error: late objective-density kill inventory was understated and the live thesis should have been invalidated earlier

## Active shadow map 4

- Event: Team WE vs Anyone's Legend Game 1
- Draft: AL blue Olaf / Naafiri / Ahri / Ziggs / Shen; WE red Mundo / Pantheon / Ryze / Jhin / Neeko
- Under 31 minutes @2.018 — settled loss after the clock passed 31:00
- The lean was issued post-draft at or near 0:00, before AL secured three Grubs
- Three Grubs are later live evidence and are not part of the original entry rationale
- No second shadow pick was entered
- The map itself remains incomplete for circuit-breaker accounting until the final map state and review are recorded

## Current shadow accounting

- Settled shadow market record: **3-3**
- Nominal simulated net: **-0.12475u / -124,750 VND**
- Actual exposure and official P&L: **0u / 0 VND**

## Maps 5 through 8 calibration controls

- Default to one primary shadow lean per map.
- A second lean requires a materially different market thesis and a current synchronized state.
- `NO LEAN` is acceptable and should not be overridden merely to create a sample.
- No pregame or 0:00 duration Under may be promoted from theoretical draft acceleration alone.
- A duration Under requires at least one synchronized live snapshot showing actual conversion evidence.
- Entry-time evidence, later live evidence, and settlement evidence must be timestamped and kept separate.
- Opposing stall, waveclear, disengage, counter-engage and base-defense tools must be counted explicitly.

## Retained live controls

- Recorded position state and current analytical thesis state remain separate.
- Positive kill handicaps of +7.5 or wider require two synchronized stabilization snapshots.
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

- Circuit breaker progress: **3 of 8 complete maps reviewed; map 4 active**.
- Official LoL betting: paused.
- No open actual LoL exposure.
- Duration remains official-ineligible through wager 20.
- Item verification remains suspended until explicit restoration.
- Unknown items are neutral and must not be guessed.
- Every new map resets hard evidence; prior-map execution is a soft prior only.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs must be written under `models/lol/`. Shared policies belong under `shared/`. Do not create new LoL model files at the repository root.
