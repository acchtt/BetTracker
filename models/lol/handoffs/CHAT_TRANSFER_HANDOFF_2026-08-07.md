# LoL Cross-Chat Transfer Handoff — 2026-08-07

**Prepared:** 2026-08-07 15:02 UTC+7  
**Corrected:** 2026-08-07 16:01 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.35**

## Required load order

Load `models/lol/CURRENT_MODEL.md`, then v0.3.35 through v0.3.26 deltas, item-verification suspension, v0.3.25 consolidated rules/probation/calibration handbook, live fast path, main procedure plus addenda and scoreboard protocol, pre-match procedure, shared stake policy, then this handoff.

## Current operating state

- Circuit breaker requirement: **13 complete reviewed maps**.
- Complete/reviewed: **8/13**.
- Next complete reviewed map: **shadow map 9/13**.
- Official LoL betting remains paused through all 13 maps and requires explicit user restoration after map 13.
- Actual exposure/P&L: **0u / 0 VND**.
- Item verification remains suspended; unknown items are neutral and never guessed.

## Official probation unchanged

- 13/20 completed; record 7-6; net -0.16425u / -164,250 VND.
- Next official wager after eventual restoration: 14.
- Standard stake after restoration: 0.25u = 250,000 VND.
- Minimum odds 1.60; max official exposure 0.25u/map.
- Duration remains official-ineligible through wager 20.

## Shadow maps 6-8

### Map 6 — NS Academy vs KT Challengers Game 1
- NS blue: K'Sante / Jarvan IV / Anivia / Jhin / Camille.
- KT red: Rumble / Naafiri / Cassiopeia / Corki / Shen.
- NS ML @1.880, simulated 0.25u — **WIN +0.22000u**.
- User-confirmed final: NS won 29-9 at 30:09.

### Map 7 — NS Academy vs KT Challengers Game 2
- NS blue: Olaf / Vi / Locke / Yunara / Lulu.
- KT red: Jayce / Nocturne / Sylas / Lucian / Milio.
- NS ML @1.795, simulated 0.25u — **WIN +0.19875u**.
- User-confirmed final: NS won 32-7 at 23:05.

### Map 8 — EDG vs JDG Game 1 — CORRECTED FINAL
- EDG blue: Ambessa / Jarvan IV / Ryze / Lucian / Milio.
- JDG red: Gnar / Vi / Akali / Xayah / Rakan.
- Entry at 12:31: **Over 32 min @1.803**, simulated 0.25u.
- Entry state: 0-0 kills, JDG +59 gold, 0-0 towers, JDG 1-0 dragons.
- Corrected final: **JDG won 20-7 at 30:43**.
- Position: **LOSS -0.25u**.
- Final shown: JDG 9-3 towers, 4-1 dragons, 1-0 Baron, 1-0 inhibitors.
- Earlier telemetry was misread as a 40:41 state and caused a false win settlement. User correction plus final scoreboard overrides it.

## Map-8 process review

The Over 32 entry should have been rejected under existing rules:

1. 0-0 kills, 0-0 towers and near-even gold were one correlated quiet-state cluster, not independent stall evidence.
2. No observed anti-conversion event supported the Over after the first objective cycle; JDG had actually converted the first dragon.
3. The analysis itself included a **30:00-32:00 fast-close branch**. A realistic branch at or before the line should have vetoed the Over.
4. JDG's Vi-Rakan-Akali initiation/access, Xayah safety and Gnar follow-up created a credible one-fight acceleration route.
5. The false mathematical settlement from the bad clock read has been fully reversed.

No new predictive rule is promoted from one result; existing duration and evidence-integrity rules are being enforced more strictly.

## Corrected shadow accounting

- Through map 7: **6-4, +0.28550u**.
- Map 8: **loss -0.25u**.
- Current market record: **6-5**.
- Current nominal simulated net: **+0.03550u / +35,500 VND**.
- Actual exposure/P&L: **0u / 0 VND**.

## Circuit-breaker extension

User explicitly extended the prior eight-map breaker by **five additional complete reviewed maps**.

- Total requirement: **13 maps**.
- Maps 9-13 are additional shadow-analysis maps.
- Improving simulated results does not shorten the breaker.
- Official recommendations do not resume automatically after map 13.

## Mandatory controls through map 13

- Verdict first; logging after verdict.
- Default one primary shadow lean per map; second only for materially distinct thesis with synchronized state.
- `NO LEAN` is acceptable.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Correlated quiet indicators remain one cluster after 10:00; absence of action is not independent anti-conversion evidence.
- If the model's realistic fast-close branch reaches or beats the duration line, reject the Over unless the defending team has already resisted that route.
- Six+ kills by 8:00 activates wider fast-ending branch.
- Fourteen+ kills by 16:00 prevents 0-0 towers from counting as confirming duration evidence.
- Around 20:00, +5k gold plus two-tower lead invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; do not automatically raise expected duration.
- Positive handicap invalidation needs small cushion plus credible structural/Baron/base conversion.
- Recorded position state and current thesis state remain separate.
- Do not chase failing positions with wider correlated lines.
- Kill Unders retain v0.3.33 late-objective-density reserves/invalidation rules.
- Current-map hard evidence resets every map; prior execution is soft prior only.
- Explicit user correction or verified final state overrides stale/conflicting telemetry immediately and reverses settlement/accounting when required.

## Current live focus

Focus has switched to **KT Rolster vs Gen.G Game 2**. Latest supplied draft:

- Gen.G blue: Olaf / Lee Sin / Galio / Ezreal / Leona.
- KT red: Zaahen / Skarner / Orianna / Kai'Sa / Nautilus.
- Last quoted prices before draft: Gen.G ML 1.430, KT 2.771; Gen.G -7.5 @1.799, KT +7.5 @1.983; O/U 28.5 @1.884/1.871; Over/Under 32 min @1.747/2.049.
- Shadow lean issued: **KT +7.5 kills @1.983**, simulated 0.25u, conditional on price remaining synchronized; actual 0u.
- Series score was not explicitly confirmed in chat at issuance, so no deciding-map modifier was applied.