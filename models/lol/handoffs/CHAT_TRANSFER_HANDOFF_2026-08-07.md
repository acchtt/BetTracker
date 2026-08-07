# LoL Cross-Chat Transfer Handoff — 2026-08-07

**Prepared:** 2026-08-07 15:02 UTC+7  
**Corrected / synchronized:** 2026-08-07 21:41 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.35**

## Required load order

Load `models/lol/CURRENT_MODEL.md`, then v0.3.35 through v0.3.26 deltas, item-verification suspension, v0.3.25 consolidated rules/probation/calibration handbook, live fast path, main betting procedure, **`models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`**, procedure addenda and scoreboard protocol, pre-match procedure, shared stake policy, then this handoff.

The connected-stack procedure is mandatory. Future chats must audit GitHub + Airtable + calibration Sheets before describing the stack as synchronized. A lean is not `recorded` unless the exact entry exists in Airtable `Positions` or the user explicitly confirms recording and the tracker is synchronized.

Live responses should be **brief by default**, but brevity is presentation-only: full model/rule checks still apply before every verdict.

## Current operating state

- Circuit breaker requirement: **13 complete reviewed maps**.
- Complete/reviewed: **12/13**.
- Next complete reviewed map: **shadow map 13/13**.
- CB-12 — Top Esports vs Bilibili Gaming Game 1 — complete/reviewed.
- Verified final: **TES won at 40:52, 34-31 kills**.
- Final structure: **TES 9-6 towers, 3-3 dragons, TES 1-2 BLG Barons, TES 1-0 inhibitors**.
- Official LoL betting remains paused through all 13 maps and requires explicit user restoration after map 13.
- Actual exposure/P&L: **0u / 0 VND**.
- Item verification remains suspended; unknown items are neutral and never guessed.

## Official probation unchanged

- 13/20 completed; record 7-6; net -0.16425u / -164,250 VND.
- Next official wager after eventual restoration: 14.
- Standard stake after restoration: 0.25u = 250,000 VND.
- Minimum odds 1.60; max official exposure 0.25u/map.
- Duration remains official-ineligible through wager 20.

## Corrected shadow accounting

- Through map 7: **6-4, +0.28550u**.
- CB-08: Over 32m @1.803 — **LOSS -0.25u**.
- CB-09: no recorded position; no P/L impact.
- CB-10: BRO +6.5 kills @2.056 — **WIN +0.264u**; Under 33.5 kills @1.744 — **WIN +0.186u**.
- CB-11: Over 30.5 kills @1.710 — **WIN +0.1775u**.
- CB-12: TES ML @2.468 — **WIN +0.3670u**.
- Current settled shadow market record: **10-5**.
- Current nominal simulated net: **+1.03000u / +1,030,000 VND**.
- Actual exposure/P&L: **0u / 0 VND**.

## Circuit-breaker extension

User explicitly extended the prior eight-map breaker by five additional complete reviewed maps.

- Total requirement: **13 maps**.
- Maps 9-13 are additional shadow-analysis maps.
- Improving simulated results does not shorten the breaker.
- Official recommendations do not resume automatically after map 13.

## Connected-stack status — SYNCHRONIZED THROUGH CB-12

- **GitHub:** authoritative through completed/reviewed CB-12.
- **Airtable Maps:** CB-01 through CB-12 present and complete/reviewed; CB-04 intentionally preserves unknown final winner/clock/score.
- **Airtable Positions:** all **15** actual recorded shadow positions through CB-12 are persisted and settled as applicable.
- **Airtable Snapshots:** synchronized evidence present from CB-05 through CB-12; earlier unreconstructable detail was not invented.
- **Google calibration workbook Maps:** synchronized through CB-12.
- **Google calibration workbook Positions:** synchronized through CB-12.
- **Google calibration workbook Snapshots:** synchronized through CB-12.
- **Google Rule Changes:** includes v0.3.35, connected-stack procedure, independent Total-Kills/Duration handling, and brief-live-response guidance.
- There is **no tracker lag through CB-12**.

The startup sync audit remains mandatory in every future chat.

## Retained key corrections

### CB-08 — EDG vs JDG Game 1
Over 32m @1.803 should have been rejected because 0-0 kills/0-0 towers/near-even gold were one correlated quiet-state cluster and the analysis itself contained a 30:00-32:00 fast-close branch. A false settlement from bad telemetry was reversed. Final: JDG won 20-7 at 30:43.

### CB-09 — KT Rolster vs Gen.G Game 2
A conditional KT +7.5 @1.983 lean was never price-resynchronized or persisted, so it remained **CONDITIONAL / UNRECORDED**. Gen.G dominance at 21:45 correctly invalidated the thesis. Final: Gen.G 12-2 at 25:13.

### CB-10 — Hanjin BRION vs BNK FEARX Game 1
Recorded BRO +6.5 @2.056 and Under 33.5 @1.744; both won. The second entry was an explicit one-map exposure override only. This map established that kill handicap, Total Kills and Duration are separate analytical market families.

### CB-11 — Hanjin BRION vs BNK FEARX Game 2
Recorded Over 30.5 @1.710. The thesis degraded at 9:14 after a 1-1 start but was not invalidated. The user explicitly confirmed the 36:38 BRO 25-16 frame was final despite delayed `Live` telemetry. Position won +0.1775u.

## CB-12 — Top Esports vs Bilibili Gaming Game 1

**Sides:** TES blue, BLG red.

Draft:
- TES: Rumble / Vi / Ahri / Jhin / Alistar.
- BLG: Ambessa / Jarvan IV / Lissandra / Corki / Camille.

Post-draft odds:
- BLG ML 1.526 / TES ML 2.468;
- Over/Under 32m 2.166 / 1.671;
- Over/Under 31.5 kills 1.738 / 2.063;
- BLG -6.5 1.746 / TES +6.5 2.031.

Preview prior favored BLG, but the completed draft materially improved TES: Vi-Ahri-Alistar gave reliable pick access, Rumble punished BLG's dive stack, and BLG Camille support raised execution variance. Model moved TES to roughly 42-44% versus 40.5% raw break-even.

Recorded:
- **TES ML @2.468**, 0.25u simulated; actual 0u.

Verified final:
- **TES won at 40:52**;
- **34-31 kills**;
- **TES 9-6 towers**;
- **3-3 dragons**;
- **TES 1-2 BLG Barons**;
- **TES 1-0 inhibitors**.

Settlement: **WIN +0.3670u simulated**. No material process error. The secondary analytical Over 31.5 lean was never recorded and does not enter P/L.

## Mandatory controls through map 13

- Verdict first; logging after verdict.
- Live replies compact by default, but never skip model/rule checks for brevity.
- `NO LEAN` is acceptable.
- Recorded-position state and current thesis state are separate.
- `CONDITIONAL / UNRECORDED` and `RECORDED SHADOW POSITION` are separate transitions.
- Total Kills and Duration are separate analytical market families and each gets an independent verdict; side/kill-handicap analysis does not suppress them.
- Exposure policy is separate from market-family classification. No global stake increase is authorized.
- Default one primary shadow lean per map; second only with materially distinct thesis and synchronized state, unless user explicitly authorizes a one-map exposure override.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Correlated quiet indicators remain one cluster after 10:00.
- If a realistic fast-close branch reaches or beats the duration line, reject the Over unless that route has demonstrably been resisted.
- Six+ kills by 8:00 activates wider fast-ending branch.
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
- After CB-13, official betting remains paused until the user explicitly restores it.