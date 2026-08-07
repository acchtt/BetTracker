# LoL Cross-Chat Transfer Handoff — 2026-08-07

**Prepared:** 2026-08-07 15:02 UTC+7  
**Corrected / synchronized:** 2026-08-07 21:45 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.35**

## Required load order

Load `models/lol/CURRENT_MODEL.md`, then v0.3.35 through v0.3.26 deltas, item-verification suspension, v0.3.25 consolidated rules/probation/calibration handbook, live fast path, main betting procedure, `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`, procedure addenda and scoreboard protocol, pre-match procedure, shared stake policy, then this handoff.

The connected-stack procedure is mandatory. Future chats must audit GitHub + Airtable + calibration Sheets before calling the stack synchronized. A lean is not recorded unless the exact entry exists in Airtable Positions or the user explicitly confirms recording and the tracker is synchronized.

Live responses should be brief by default, but brevity is presentation-only: full model/rule checks still apply before every verdict.

## Current operating state

- Circuit breaker requirement: **20 complete reviewed shadow maps**.
- Complete/reviewed: **12/20**.
- Remaining: **8 maps — CB-13 through CB-20**.
- Next map: **CB-13**.
- CB-12 — Top Esports vs Bilibili Gaming Game 1 — complete/reviewed.
- Verified CB-12 final: **TES won at 40:52, 34-31 kills**.
- Final structure: **TES 9-6 towers, 3-3 dragons, BLG 2-1 Barons, TES 1-0 inhibitors**.
- Official LoL betting remains paused through CB-20 and requires explicit user restoration afterward.
- Actual exposure/P&L: **0u / 0 VND**.
- Item verification remains suspended; unknown items are neutral and never guessed.

## Circuit-breaker extension history

- Original requirement: 8 complete reviewed maps.
- First user extension on 2026-08-07: +5 maps -> 13 total.
- Second user extension after CB-12 on 2026-08-07: **+7 maps beyond the 13-map endpoint -> 20 total**.
- Improving simulated results does not shorten the breaker.
- Official recommendations do not resume automatically after CB-20.

## Official probation — unchanged

- 13/20 completed; record 7-6; net -0.16425u / -164,250 VND.
- Next official wager after eventual restoration: 14.
- Standard stake after restoration: 0.25u = 250,000 VND.
- Minimum odds 1.60; max official exposure 0.25u/map.
- Duration remains official-ineligible through wager 20.

## Corrected shadow accounting through CB-12

- Through map 7: **6-4, +0.28550u**.
- CB-08: Over 32m @1.803 — LOSS -0.25u.
- CB-09: no recorded position; no P/L impact.
- CB-10: BRO +6.5 kills @2.056 — WIN +0.264u; Under 33.5 kills @1.744 — WIN +0.186u.
- CB-11: Over 30.5 kills @1.710 — WIN +0.1775u.
- CB-12: TES ML @2.468 — WIN +0.3670u.
- Current settled shadow market record: **10-5**.
- Current nominal simulated net: **+1.03000u / +1,030,000 VND**.
- Actual exposure/P&L: **0u / 0 VND**.

## Connected-stack status — SYNCHRONIZED THROUGH CB-12

- GitHub: authoritative through completed/reviewed CB-12 and carries the 20-map requirement.
- Airtable Maps: CB-01 through CB-12 complete/reviewed; CB-04 intentionally preserves unknown final details.
- Airtable Positions: all 15 recorded shadow positions through CB-12 are persisted and settled as applicable.
- Airtable Snapshots: synchronized from CB-05 through CB-12; earlier unreconstructable detail was not invented.
- Google calibration workbook Maps / Positions / Snapshots: synchronized through CB-12.
- Google Rule Changes: includes v0.3.35, connected-stack procedure, independent Total-Kills/Duration handling, brief-live-response guidance, and the **20-map circuit-breaker extension**.
- There is no completed-map tracker lag through CB-12.

The startup sync audit remains mandatory in every future chat.

## Retained key corrections

### CB-08 — EDG vs JDG Game 1
Over 32m @1.803 should have been rejected because 0-0 kills/0-0 towers/near-even gold were one correlated quiet-state cluster and the analysis itself contained a 30:00-32:00 fast-close branch. A false settlement from bad telemetry was reversed. Final: JDG won 20-7 at 30:43.

### CB-09 — KT Rolster vs Gen.G Game 2
A conditional KT +7.5 @1.983 lean was never price-resynchronized or persisted, so it remained CONDITIONAL / UNRECORDED. Gen.G dominance at 21:45 correctly invalidated the thesis. Final: Gen.G 12-2 at 25:13.

### CB-10 — Hanjin BRION vs BNK FEARX Game 1
BRO +6.5 @2.056 and Under 33.5 @1.744 were both recorded and won. The second entry was an explicit one-map exposure override only. Kill handicap, Total Kills and Duration are separate analytical market families.

### CB-11 — Hanjin BRION vs BNK FEARX Game 2
Over 30.5 @1.710 was recorded and won. The thesis degraded at 9:14 after a 1-1 start but was not invalidated. User confirmation of the 36:38 final state correctly overrode delayed `Live` telemetry.

### CB-12 — Top Esports vs Bilibili Gaming Game 1
TES blue: Rumble / Vi / Ahri / Jhin / Alistar. BLG red: Ambessa / Jarvan IV / Lissandra / Corki / Camille. Preview favored BLG, but the completed draft materially improved TES through reliable pick access, Rumble anti-dive value, and higher BLG execution variance from Camille support. TES ML @2.468 was recorded for 0.25u simulated and won. Final: TES 34-31 at 40:52. No material process error.

## Mandatory controls through CB-20

- Verdict first; logging after verdict.
- Live replies compact by default, but never skip model/rule checks for brevity.
- `NO LEAN` is acceptable.
- Recorded-position state and current thesis state are separate.
- `CONDITIONAL / UNRECORDED` and `RECORDED SHADOW POSITION` are separate transitions.
- Total Kills and Duration are separate analytical market families and each gets an independent verdict; side/kill-handicap analysis does not suppress them.
- Exposure policy is separate from market-family classification. No global stake increase is authorized.
- Default one primary shadow lean per map; a second requires a materially distinct thesis and synchronized state unless the user explicitly authorizes a one-map exposure override.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Correlated quiet indicators remain one cluster after 10:00.
- If a realistic fast-close branch reaches or beats the duration line, reject the Over unless that route has demonstrably been resisted.
- Six+ kills by 8:00 activates a wider fast-ending branch.
- Fourteen+ kills by 16:00 prevents 0-0 towers from counting as confirming duration evidence.
- Around 20:00, +5k gold plus two-tower lead invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; do not automatically raise expected duration.
- Positive handicap invalidation needs small cushion plus credible structural/Baron/base conversion.
- Draft handicap resilience alone is insufficient; synchronized price and current-map execution evidence are required.
- Kill Unders retain v0.3.33 late-objective-density reserves/invalidation rules.
- Current-map hard evidence resets every map; prior execution is soft prior only.
- Do not chase failing positions with wider correlated lines.
- Explicit user correction tied to the current map/result overrides delayed or stale telemetry and can close the map when the user clearly confirms the displayed state is final.
- Connected-stack procedure governs startup audit, tracker writes, settlement synchronization and discrepancy handling.
- **After CB-20, official betting remains paused until the user explicitly restores it.**
