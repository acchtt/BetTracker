# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.35**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.35.md`
- Prior active deltas: v0.3.34 through v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Connected-stack procedure: `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Current handoff: `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`

## Required load order

1. v0.3.35 through v0.3.26 rule deltas
2. item-verification suspension
3. v0.3.25 consolidated rules, probation status, calibration handbook
4. live fast path
5. main betting procedure
6. connected-stack sync/recording procedure
7. both procedure addenda
8. scoreboard protocol
9. pre-match/pregame procedure
10. shared stake policy
11. current handoff

## Official probation — unchanged

- 13/20 settled/completed
- Record: 7-6
- Net: -0.16425u / -164,250 VND
- Next official wager after eventual restoration: 14
- Standard stake after restoration: 0.25u = 250,000 VND
- Maximum official exposure after restoration: 0.25u per map
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20

## Twenty-map shadow circuit breaker

On 2026-08-07, after CB-12, the user judged the 13-map sample insufficient and explicitly added **7 additional maps beyond the existing 13-map endpoint**.

- Required complete reviewed maps: **20**
- Complete/reviewed: **13/20**
- Remaining: **7 maps — CB-14 through CB-20**
- Next map: **CB-14 / shadow map 14 of 20**
- CB-13 — Shifters vs GIANTX Game 1 — complete/reviewed
- Verified CB-13 final: **GIANTX won at 36:23, 16-10 kills**
- Final structure: **GX 9-3 towers, GX 4-1 dragons, GX 1-0 Baron, GX 2-0 inhibitors**
- Actual stake/exposure remains **0u**
- Default logged shadow stake remains simulated **0.25u**
- Shadow results never change the official probation ledger
- Improving simulated results never shortens the breaker
- **No official recommendations resume automatically after CB-20; explicit user restoration is still required**

Extension history:
- Original circuit breaker: 8 complete reviewed maps
- First extension: +5 maps -> 13 total
- Second extension after CB-12: +7 maps beyond the 13-map endpoint -> **20 total**

## Corrected shadow accounting through CB-13

- Through map 7: **6-4, +0.28550u**
- CB-08: Over 32 minutes @1.803 — LOSS -0.25u
- CB-09: no recorded position; no P/L impact
- CB-10: BRO +6.5 kills @2.056 — WIN +0.264u; Under 33.5 kills @1.744 — WIN +0.186u
- CB-11: Over 30.5 kills @1.710 — WIN +0.1775u
- CB-12: TES ML @2.468 — WIN +0.3670u
- CB-13: SHFT +3.5 kills @1.886 — LOSS -0.25u
- Current settled shadow market record: **10-6**
- Nominal simulated net: **+0.78000u / +780,000 VND**
- Actual exposure/P&L: **0u / 0 VND**

## Retained calibration lessons

### CB-08 duration correction
Over 32 should have been rejected: 0-0 kills, 0-0 towers and near-even gold were one correlated quiet-state cluster; there was no observed anti-conversion event; the forecast itself contained a 30:00-32:00 fast-close branch; JDG had a credible one-fight acceleration route. A false settlement caused by conflicting telemetry was reversed after verified correction.

### CB-09 recording/dominance correction
KT +7.5 @1.983 remained CONDITIONAL / UNRECORDED because the exact price was not re-synchronized and no position record existed. Gen.G dominance at 21:45 correctly invalidated the thesis. Draft resilience alone is insufficient for a positive handicap without synchronized price and current-map execution evidence.

### CB-10 independent-market lesson
BRO +6.5 and Under 33.5 both won. Kill handicap, Total Kills and Duration are distinct analytical market families. The second position was a one-map user-authorized exposure override only; it did not change the global stake policy.

### CB-11 delayed-telemetry lesson
Over 30.5 won. The thesis degraded at 9:14 after a 1-1 start but was not invalidated because both drafts retained forced-fight inventory. Explicit user confirmation of the final state correctly overrode stale `Live` telemetry.

### CB-12 post-draft underdog repricing lesson
TES blue: Rumble / Vi / Ahri / Jhin / Alistar. BLG red: Ambessa / Jarvan IV / Lissandra / Corki / Camille. Preview favored BLG, but the completed draft improved TES via reliable pick access, anti-dive Rumble value, and higher BLG execution variance from Camille support. TES ML @2.468 was recorded and won at 40:52, 34-31. No material process error.

### CB-13 positive-handicap confirmation lesson
SHFT +3.5 kills @1.886 was recorded after SHFT led 1-0 kills and +1.1k gold at 8:27, then still held +619g at 1-1 kills by 9:27. That confirmation was too shallow relative to GX's cleaner Ornn/Jarvan/Orianna/Ezreal/Shen scaling, objective control and conversion structure. By 36:23 GX led 16-10 kills, 9-3 towers, 4-1 dragons, 1-0 Baron and 2-0 inhibitors. Future positive kill-handicap confirmation must distinguish temporary early parity from durable map-control evidence; shallow gold/kill leads alone are insufficient when the opposing composition has superior objective and front-to-back conversion.

## Connected-stack synchronization status

Synchronization is current through **CB-13**.

- GitHub: authoritative through completed/reviewed CB-13 and carries the **20-map circuit-breaker requirement**
- Airtable Maps: CB-01 through CB-13 complete/reviewed; CB-04 preserves unknown final details rather than inventing them
- Airtable Positions: all 16 actual recorded shadow positions through CB-13 persisted and settled as applicable
- Airtable Snapshots: synchronized from CB-05 through CB-13; unreconstructable CB-01 through CB-04 detail was not invented
- Google calibration workbook Maps / Positions / Snapshots: synchronized through CB-13
- Google Rule Changes: includes v0.3.35, connected-stack procedure, independent Total-Kills/Duration handling, compact live-response guidance, and **CB20 extension policy**
- There is no completed-map tracker lag through CB-13

Every future chat must still run the startup sync audit.

## Active calibration controls through CB-20

- Verdict first; logging after verdict.
- Live replies compact by default, but brevity is presentation-only and never bypasses full model/rule checks.
- `NO LEAN` is acceptable.
- Recorded-position state and current thesis state are separate.
- `CONDITIONAL / UNRECORDED` and `RECORDED SHADOW POSITION` are distinct states; chat wording alone does not create a recorded position.
- Total Kills and Duration are separate analytical market families and each receives an independent verdict; side/kill-handicap analysis does not suppress either family.
- Exposure policy is separate from market-family classification; no global stake increase is authorized.
- Default one primary shadow lean per map; a second requires a materially distinct thesis and synchronized state unless the user explicitly authorizes a one-map exposure override.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Correlated quiet indicators remain one cluster after 10:00; absence of action is not itself anti-conversion evidence.
- If a realistic fast-close branch reaches or beats the duration line, reject the Over unless that route has already been demonstrably resisted.
- Six or more total kills by 8:00 activates a wider fast-ending branch.
- Fourteen or more total kills by 16:00 prevents 0-0 towers from being confirming duration evidence.
- Around 20:00, a leader with at least +5k gold and a two-tower advantage invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; they do not automatically increase expected duration.
- Positive kill-handicap invalidation requires both a small remaining cushion and credible structural/Baron/base conversion control.
- Positive kill-handicap confirmation must not rely on shallow early kill/gold parity alone when the opponent has materially stronger scaling/objective conversion; require evidence that the underdog can repeatedly contest or trade through objective cycles.
- Draft handicap resilience alone is insufficient; synchronized price and current-map execution evidence are required.
- Apply dominance override, multi-snapshot stabilization, role-gold breadth, observed-execution scoring, current-map evidence reset, late objective-density kill reserves, soul-cascade routing, and Baron acquisition/conversion separation.
- Do not chase failing positions with wider correlated lines.
- Explicit user correction or verified final evidence overrides stale/conflicting telemetry and can reverse settlement/accounting.
- Item verification remains suspended until explicit restoration; unknown items are neutral and never guessed.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs belong under `models/lol/`. Shared policies belong under `shared/`.