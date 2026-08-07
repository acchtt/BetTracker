# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.35**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.35.md`
- Prior active deltas: v0.3.34 through v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Connected-stack sync/recording procedure: `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Current cross-chat handoff: `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.35.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.34.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.33.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.32.md`
5. `models/lol/rules/MODEL_RULES_LOL_V0.3.31.md`
6. `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
7. `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`
8. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
9. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
10. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
11. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
12. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
13. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
14. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
15. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
16. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
17. `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`
18. both procedure addenda
19. scoreboard protocol
20. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
21. `shared/STAKE_POLICY_V2.json`
22. `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`

## Current probation

- 13/20 settled/completed
- Record: 7-6
- Net: -164,250 VND / -0.16425u
- Next official wager after eventual restoration: 14
- Standard stake after restoration: 0.25u = 250,000 VND
- Maximum official exposure after restoration: 0.25u per map
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20

## Thirteen-map shadow circuit breaker

- Required complete reviewed maps: **13**
- Complete/reviewed: **12**
- Next complete reviewed map: **shadow map 13/13**
- CB-12 — Top Esports vs Bilibili Gaming Game 1 — is complete/reviewed
- Verified final: **TES won at 40:52, 34-31 kills**
- Final structure: **TES 9-6 towers, 3-3 dragons, TES 1-2 BLG Barons, TES 1-0 inhibitors**
- Maps 9-13 are additional shadow maps requested by the user on 2026-08-07
- Actual stake/exposure: **0u**
- Default logged shadow stake: simulated **0.25u**
- No shadow result changes official ledger or probation
- No official recommendations resume automatically after map 13; explicit user restoration is required

## Corrected shadow accounting

- Through map 7: **6-4, +0.28550u**
- CB-08: Over 32 minutes @1.803 — **LOSS -0.25u**
- CB-09: no recorded position; no P/L impact
- CB-10: BRO +6.5 kills @2.056 — **WIN +0.264u**; Under 33.5 kills @1.744 — **WIN +0.186u**
- CB-11: Over 30.5 kills @1.710 — **WIN +0.1775u**
- CB-12: TES ML @2.468 — **WIN +0.3670u**
- Current settled shadow market record: **10-5**
- Nominal simulated net: **+1.03000u / +1,030,000 VND**
- Actual exposure/P&L: **0u / 0 VND**

## Retained calibration lessons

### CB-08 duration correction

The Over 32 entry should have been rejected: 0-0 kills, 0-0 towers and near-even gold were one correlated quiet-state cluster; no observed anti-conversion event supported the Over; the model itself contained a 30:00-32:00 fast-close branch; and JDG had a credible one-fight acceleration route. Conflicting telemetry caused a false settlement that was reversed after verified correction.

### CB-09 recording/dominance correction

A conditional KT +7.5 @1.983 lean was never price-resynchronized or persisted, so it remained **CONDITIONAL / UNRECORDED**. At 21:45 Gen.G led 8-2, +9.7k, 5-0 towers and 2-0 dragons, correctly triggering dominance override. Final: Gen.G 12-2 at 25:13. Draft resilience alone is not enough for a positive handicap without synchronized price and current-map execution evidence.

### CB-10 independent-market lesson

BRO +6.5 @2.056 and Under 33.5 @1.744 both won. Kill handicap, Total Kills and Duration are distinct analytical market families. The second position was an explicit one-map exposure override only; it did not change the global stake policy.

### CB-11 delayed-telemetry lesson

Over 30.5 @1.710 won. The thesis degraded correctly at 9:14 after a 1-1 start but was not invalidated because both drafts retained substantial forced-fight inventory. The user explicitly confirmed the 36:38 BRO 25-16 frame was final despite the stale `Live` flag, and that explicit correction properly overrode delayed telemetry.

### CB-12 post-draft underdog repricing lesson

CB-12 — TES blue vs BLG red, Game 1.

Draft:
- TES: Rumble / Vi / Ahri / Jhin / Alistar.
- BLG: Ambessa / Jarvan IV / Lissandra / Corki / Camille.

Post-draft prices:
- BLG ML 1.526 / TES ML 2.468;
- Over/Under 32m 2.166 / 1.671;
- Over/Under 31.5 kills 1.738 / 2.063;
- BLG -6.5 1.746 / TES +6.5 2.031.

Preview baseline favored BLG, but the completed draft materially improved TES: Vi-Ahri-Alistar supplied reliable pick access, Rumble punished BLG's dive stack, and BLG Camille support increased execution variance. TES was repriced to roughly 42-44% versus a 40.5% raw break-even and **TES ML @2.468** was recorded for 0.25u simulated.

Verified final: **TES won at 40:52, 34-31 kills**. Position result: **WIN +0.367u simulated**. No material process error recorded. The unrecorded Over 31.5 analytical lean is not part of accounting.

## Connected-stack synchronization status

Synchronization is current through **CB-12**.

- **GitHub:** authoritative through completed/reviewed CB-12.
- **Airtable Maps:** CB-01 through CB-12 are present and complete/reviewed; CB-04 preserves unknown final details rather than inventing them.
- **Airtable Positions:** all **15** actual recorded shadow market positions through CB-12 are persisted and settled as applicable.
- **Airtable Snapshots:** synchronized evidence is mirrored from CB-05 through CB-12. Earlier CB-01 through CB-04 snapshot detail was not fully reconstructable and was deliberately not invented.
- **Google calibration workbook Maps:** synchronized through CB-12.
- **Google calibration workbook Positions:** synchronized through CB-12.
- **Google calibration workbook Snapshots:** mirrored from CB-05 through CB-12.
- **Google Rule Changes:** includes v0.3.35, the mandatory 2026-08-07 connected-stack procedure, independent Total-Kills/Duration handling, and compact-live-response guidance.
- There is **no tracker lag through CB-12**.

Every future chat must still run the startup sync audit. A previously synchronized stack can become stale again.

## Active calibration controls through map 13

- Verdict first; logging after verdict.
- Live responses should be compact by default, but brevity is presentation-only and never bypasses full model/rule checks.
- Default to one primary shadow lean per map; a second requires a materially distinct thesis and synchronized state, unless the user explicitly authorizes a one-map exposure override.
- `NO LEAN` is acceptable.
- Recorded-position state and current analytical thesis state are separate.
- `CONDITIONAL / UNRECORDED` and `RECORDED SHADOW POSITION` are distinct states; chat wording alone never creates a recorded position.
- Total Kills and Duration are separate analytical market families and receive independent verdicts; side/kill-handicap analysis does not suppress either family.
- Exposure policy remains separate from market-family classification; no global stake increase has been authorized.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Correlated quiet indicators remain one cluster after 10:00; absence of action is not itself anti-conversion evidence.
- If a realistic fast-close branch reaches or beats the duration line, reject the Over unless that route has already been demonstrably resisted.
- Six or more total kills by 8:00 activates a wider fast-ending branch.
- Fourteen or more total kills by 16:00 prevents 0-0 towers from being confirming duration evidence.
- Around 20 minutes, a leader with at least +5k gold and a two-tower advantage invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; they do not automatically increase expected duration.
- Positive kill-handicap invalidation requires both a small remaining cushion and credible structural/Baron/base conversion control.
- Draft handicap resilience is insufficient by itself for entry; synchronized price and current-map execution evidence are required.
- Apply dominance override, multi-snapshot stabilization, role-gold breadth, observed-execution scoring, current-map evidence reset, late objective-density kill reserves, soul-cascade routing, and Baron acquisition/conversion separation from retained deltas.
- Do not chase failing positions with wider correlated lines.
- Explicit user correction or verified final evidence immediately overrides stale/conflicting telemetry and reverses derived settlement/accounting when necessary.
- Item verification remains suspended until explicit restoration; unknown items are neutral and never guessed.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs belong under `models/lol/`. Shared policies belong under `shared/`.