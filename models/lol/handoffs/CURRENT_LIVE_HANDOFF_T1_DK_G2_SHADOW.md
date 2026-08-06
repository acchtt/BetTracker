# Closed Live Handoff — T1 vs Dplus KIA Game 2 Shadow

**Closed:** 2026-08-06 18:53 UTC+7  
**Active model:** LoL v0.3.31  
**Competition:** LCK 2026 Rounds 3-4  
**Series:** T1 vs Dplus KIA  
**Series result:** T1 won 2-0  
**Circuit-breaker status:** Shadow map 2 of 2 complete and reviewed  
**Actual exposure:** 0u

## Draft

- T1 blue: Jayce / Sejuani / Ryze / Lucian / Milio
- Dplus KIA red: Olaf / Jarvan IV / Syndra / Caitlyn / Lux

## Final supplied state

At **36:57**, T1 defeated Dplus KIA.

- Kills: **T1 17-7 DK**
- Gold: **T1 approximately +10k**
- Towers: **T1 10-3 DK**
- Dragons: **DK 3-2 T1**
- Barons: **T1 2-0 DK**
- Inhibitors: **T1 1-0 DK**

## Settled shadow leans

Each lean carried a nominal simulated stake of **0.25u**. Actual stake and exposure remained **0u**.

1. **Under 31.5 total kills @1.811 — WIN**
   - Final total: 24 kills
   - Simulated profit: **+0.20275u / +202,750 VND**

2. **Over 34 minutes @1.863 — WIN**
   - Final duration: 36:57
   - Simulated profit: **+0.21575u / +215,750 VND**

### Map result

- Shadow record: **2-0**
- Nominal simulated exposure: **0.50u**
- Simulated net: **+0.41850u / +418,500 VND**
- Official ledger/probation impact: none

## Calibration summary

- The initial lower-kill read was correct; final total was seven kills below the line.
- The original duration point estimate of 36:15 was accurate to within 42 seconds.
- At 24:39, T1's Baron and broad role-gold control impaired the Over 34 thesis.
- T1's first Baron then expired without an inhibitor or finish, supplying the observed defensive confirmation required to restore the extension branch.
- The 24:39 kill point estimate was too low because it insufficiently reserved kills for a second Baron and final base defense.

## Circuit-breaker conclusion

Both required shadow maps are complete and reviewed.

- Game 1 shadow record: 1-1
- Game 2 shadow record: 2-0
- Combined shadow record: **3-1**

Official LoL betting remains paused until explicit user authorization. Probation remains 13/20, record 7-6, net -164,250 VND / -0.16425u.

## Review

See `models/lol/reviews/T1_DK_GAME2_SHADOW_REVIEW_2026-08-06.md`.

## Continuing constraints

- Shadow leans default to a nominal simulated stake of 0.25u unless specified otherwise.
- Actual shadow exposure remains 0u.
- Duration remains official-ineligible through wager 20.
- Item verification remains suspended until explicit restoration.
