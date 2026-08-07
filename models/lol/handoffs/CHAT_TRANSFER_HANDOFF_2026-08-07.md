# LoL Cross-Chat Transfer Handoff — 2026-08-07

**Prepared:** 2026-08-07 15:02 UTC+7
**Repository:** `acchtt/SlipTrace`
**Active model:** **LoL v0.3.35**

## Required load order

Load `models/lol/CURRENT_MODEL.md`, then v0.3.35 through v0.3.26 deltas, the item-verification suspension, v0.3.25 consolidated rules/probation/calibration handbook, live fast path, main procedure plus addenda and scoreboard protocol, pre-match procedure, shared stake policy, then this handoff.

## Current operating state

- Circuit breaker requirement: **13 complete reviewed maps**.
- Complete/reviewed: **7/13**.
- **Map 8/13 — EDG vs JDG Game 1 — remains live/incomplete at the latest supplied frame.**
- Map-8 position **Over 32 minutes @1.803, simulated 0.25u** is mathematically settled **WIN, +0.20075u** because the verified live clock reached 40:41.
- A mathematically settled duration market does not make the map complete; final-state verification plus review are still required.
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
- NS blue draft: K'Sante / Jarvan IV / Anivia / Jhin / Camille.
- KT red: Rumble / Naafiri / Cassiopeia / Corki / Shen.
- NS ML @1.880, simulated 0.25u — **WIN +0.22000u**.
- User-confirmed final: NS won 29-9 at 30:09.

### Map 7 — NS Academy vs KT Challengers Game 2
- NS blue: Olaf / Vi / Locke / Yunara / Lulu.
- KT red: Jayce / Nocturne / Sylas / Lucian / Milio.
- NS ML @1.795, simulated 0.25u — **WIN +0.19875u**.
- User-confirmed final: NS won 32-7 at 23:05.

### Map 8 — EDG vs JDG Game 1 — ACTIVE/INCOMPLETE
- EDG blue: Ambessa / Jarvan IV / Ryze / Lucian / Milio.
- JDG red: Gnar / Vi / Akali / Xayah / Rakan.
- At 12:31: 0-0 kills, JDG +59 gold, 0-0 towers, JDG 1-0 dragons.
- Entry: **Over 32 min @1.803**, simulated 0.25u.
- Latest supplied frame at 40:41: 6-6 kills, JDG about +2.3k, towers EDG 1-2 JDG, dragons EDG 1-2 JDG, 0-0 Barons, 0-0 inhibitors, still marked Live.
- Position result: **WIN +0.20075u**; map itself not yet complete.

## Shadow accounting

- Prior through map 5: 4-4, -0.13325u.
- After map 6: 5-4, +0.08675u.
- After map 7: 6-4, +0.28550u.
- Including mathematically settled map-8 duration position: **7-4, +0.48625u / +486,250 VND**.
- Actual exposure/P&L remains 0u / 0 VND.

## Circuit-breaker extension

User explicitly extended the prior eight-map breaker by **five additional complete reviewed maps**.

- New total requirement: **13 maps**.
- Maps 9-13 are additional shadow-analysis maps.
- Improving simulated results does not shorten the breaker.
- Official recommendations do not resume automatically after map 13.

## Mandatory controls through map 13

- Verdict first; logging after verdict.
- Default one primary shadow lean per map; second only for materially distinct thesis with synchronized state.
- `NO LEAN` is acceptable.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Six+ kills by 8:00 activates wider fast-ending branch.
- Fourteen+ kills by 16:00 prevents 0-0 towers from counting as confirming duration evidence.
- Around 20:00, +5k gold plus two-tower lead invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; do not automatically raise expected duration.
- Positive handicap invalidation needs small cushion plus credible structural/Baron/base conversion.
- Recorded position state and current thesis state remain separate.
- Do not chase failing positions with wider correlated lines.
- Kill Unders retain v0.3.33 late-objective-density reserves/invalidation rules.
- Current-map hard evidence resets every map; prior execution is soft prior only.
- Live-labelled screenshots are not final map settlement evidence unless the user explicitly confirms winner + exact final clock/score; mathematically determined props may be graded independently.
