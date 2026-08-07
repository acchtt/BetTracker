# LoL Cross-Chat Transfer Handoff — 2026-08-07

**Prepared:** 2026-08-07 15:02 UTC+7  
**Corrected / synchronized:** 2026-08-07 18:54 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.35**

## Required load order

Load `models/lol/CURRENT_MODEL.md`, then v0.3.35 through v0.3.26 deltas, item-verification suspension, v0.3.25 consolidated rules/probation/calibration handbook, live fast path, main betting procedure, **`models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`**, procedure addenda and scoreboard protocol, pre-match procedure, shared stake policy, then this handoff.

The connected-stack procedure is mandatory. Future chats must audit GitHub + Airtable + calibration Sheets before describing the stack as synchronized. A lean is not `recorded` unless the exact entry exists in Airtable `Positions` or the user explicitly confirms recording and the tracker is synchronized.

Live responses should be **brief by default**, but brevity is presentation-only: full model/rule checks still apply before every verdict.

## Current operating state

- Circuit breaker requirement: **13 complete reviewed maps**.
- Complete/reviewed: **11/13**.
- Next complete reviewed map: **shadow map 12/13**.
- CB-11 — Hanjin BRION vs BNK FEARX Game 2 — complete/reviewed.
- Final accepted state: **BRO won at 36:38, 25-16 kills**.
- Final structure: **BRO 9-3 towers, 4-1 dragons, 2-0 Barons, 1-0 inhibitors**.
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
- CB-08: Over 32m @1.803 — **LOSS -0.25u**; corrected final JDG 20-7 at 30:43.
- CB-09: no recorded position; no P/L impact.
- CB-10: BRO +6.5 kills @2.056 — **WIN +0.264u**; Under 33.5 kills @1.744 — **WIN +0.186u**.
- CB-11: Over 30.5 kills @1.710 — **WIN +0.1775u**.
- Current settled shadow market record: **9-5**.
- Current nominal simulated net: **+0.66300u / +663,000 VND**.
- Actual exposure/P&L: **0u / 0 VND**.

## Circuit-breaker extension

User explicitly extended the prior eight-map breaker by five additional complete reviewed maps.

- Total requirement: **13 maps**.
- Maps 9-13 are additional shadow-analysis maps.
- Improving simulated results does not shorten the breaker.
- Official recommendations do not resume automatically after map 13.

## Connected-stack status — SYNCHRONIZED THROUGH CB-11

- **GitHub:** authoritative through completed/reviewed CB-11.
- **Airtable Maps:** CB-01 through CB-11 present and complete/reviewed; CB-04 intentionally preserves unknown final winner/clock/score.
- **Airtable Positions:** all **14** actual recorded shadow positions through CB-11 are persisted.
- **Airtable Snapshots:** synchronized evidence present from CB-05 through CB-11; earlier unreconstructable detail was not invented.
- **Google calibration workbook Maps:** synchronized through CB-11.
- **Google calibration workbook Positions:** synchronized through CB-11.
- **Google calibration workbook Snapshots:** synchronized through CB-11.
- **Google Rule Changes:** includes v0.3.35, connected-stack procedure, independent Total-Kills/Duration handling, and brief-live-response guidance.
- There is **no tracker lag through CB-11**.

The startup sync audit remains mandatory in every future chat.

## CB-08 process correction retained

EDG vs JDG Game 1: Over 32m @1.803 should have been rejected because 0-0 kills/0-0 towers/near-even gold were one correlated quiet-state cluster, not independent stall evidence. The analysis itself contained a 30:00-32:00 fast-close branch. User correction and verified final evidence reversed an earlier false settlement. Final: JDG won 20-7 at 30:43.

## CB-09 — KT Rolster vs Gen.G Game 2

Draft:

- Gen.G blue: Olaf / Lee Sin / Galio / Ezreal / Leona.
- KT red: Zaahen / Skarner / Orianna / Kai'Sa / Nautilus.

A conditional **KT +7.5 @1.983** lean was discussed, but price was not re-synchronized after draft and no Airtable position existed. It remained **CONDITIONAL / UNRECORDED** and never entered P/L.

At 21:45 Gen.G led 8-2, +9.7k, 5-0 towers, 2-0 dragons; dominance override invalidated the thesis. Final: Gen.G 12-2 at 25:13.

## CB-10 — Hanjin BRION vs BNK FEARX Game 1

At 10:36: BRO 2-2 BFX, near-even gold, 0-0 towers, BFX 1-0 dragons.

Recorded:

- **BRO +6.5 kills @2.056**, 0.25u simulated — WIN +0.264u.
- **Under 33.5 kills @1.744**, 0.25u simulated — WIN +0.186u.

The second entry was explicitly authorized by the user despite the existing map position. Treat this as a **one-map exposure override only**, not a global stake-policy change.

Final: **BRO won at 38:35, 14-17 kills**. Combined CB-10 simulated P/L: **+0.450u**.

Calibration: kill handicap, Total Kills and Duration are separate analytical market families. Independent market verdicts do not automatically change the aggregate exposure cap.

## CB-11 — Hanjin BRION vs BNK FEARX Game 2

Draft:

- BRO blue: Rumble / Pantheon / Cassiopeia / Kai'Sa / Leona.
- BFX red: Ambessa / Vi / Syndra / Ziggs / Rell.

Post-draft odds:

- BFX ML 1.648 / BRO 2.205;
- Over/Under 32m 1.711 / 2.101;
- Over/Under 30.5 kills 1.710 / 2.081;
- BFX -5.5 1.867 / BRO +5.5 1.906.

Recorded:

- **Over 30.5 kills @1.710**, 0.25u simulated.

At 9:14 the state was 1-1 kills, BRO +379g, 0-0 towers, BFX 1-0 dragons, BRO 2-1 grubs. The Over thesis was marked **DEGRADED**, not invalidated, because the opening pace contradicted the pregame central branch but both drafts retained substantial forced-fight inventory.

At 36:38 the screen still displayed `Live`, but showed BRO 25-16 BFX, BRO +11k, 9-3 towers, 4-1 dragons, 2-0 Barons and 1-0 inhibitors. The user explicitly confirmed this was the final state and that telemetry/result labels were late.

Under the discrepancy hierarchy, the explicit user correction overrides the stale `Live` flag. Accepted final: **BRO won at 36:38, 25-16**.

Position settlement: **WIN +0.1775u simulated**. No material process error recorded.

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
