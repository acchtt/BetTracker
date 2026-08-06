# Current Live Handoff — Team WE vs Anyone's Legend Shadow

**Opened:** 2026-08-06 20:17 UTC+7  
**Updated:** 2026-08-06 21:26 UTC+7  
**Active model:** LoL v0.3.34  
**Competition:** LPL 2026 Split 3  
**Series:** Team WE vs Anyone's Legend  
**Active map:** Game 1  
**Circuit-breaker status:** Shadow map 4 of 8 active; map not yet complete  
**Actual exposure:** 0u

## Confirmed sequence

1. AL blue side and WE red side were confirmed.
2. The complete draft and post-draft prices were supplied at or near 0:00.
3. **Under 31 minutes @2.018** was issued from the post-draft state.
4. AL secured 3 Void Grubs later in the map.
5. The game clock passed 31:00, settling the duration Under as a loss.
6. The map itself remained in progress when the duration result was reported.
7. The user extended the circuit breaker because the calibration results were lackluster.

The three-Grub state was **not part of the original entry rationale** and must not be used as a causal explanation for issuing the Under.

## Confirmed draft

### Anyone's Legend — blue

- Top: Olaf
- Jungle: Naafiri
- Mid: Ahri
- Bot: Ziggs
- Support: Shen

### Team WE — red

- Top: Mundo
- Jungle: Pantheon
- Mid: Ryze
- Bot: Jhin
- Support: Neeko

## Captured post-draft markets

- AL map moneyline: 1.395
- WE map moneyline: 2.830
- Over 31 minutes: 1.740
- Under 31 minutes: 2.018
- Over 29.5 kills: 1.687
- Under 29.5 kills: 2.094
- AL -6.5 kills: 1.686
- WE +6.5 kills: 2.074

## Settled shadow position

- **Under 31 minutes @2.018**
- Issuance state: post-draft, at or near 0:00, before the Grubs were secured
- Simulated stake: **0.25u**
- Actual stake and exposure: **0u**
- Result: **LOSS**
- Simulated P/L: **-0.25u / -250,000 VND**
- Settlement basis: game clock passed 31:00

## Correct calibration finding

The loss came from the **draft-only duration estimate**, not from the later Grub update.

The model correctly identified AL's theoretical acceleration through Olaf, Naafiri, Ahri, Shen and Ziggs, but it assigned too much probability to a clean sub-31 close before observing any synchronized conversion state. It underweighted WE's stall profile:

- Mundo front-line durability;
- Ryze waveclear and map movement;
- Neeko counter-engage and defensive fight threat;
- Jhin long-range wave and objective control;
- Pantheon pick pressure capable of disrupting clean siege sequencing.

The later three-Grub state only increased AL's potential tower pressure. Without synchronized gold, towers, dragons and tempo, it did not confirm that the original fast-close thesis was succeeding.

## v0.3.34 extension

- The circuit breaker now requires **eight complete reviewed maps**.
- This WE vs AL Game 1 remains shadow map 4 and counts only after the final map state and post-map review are recorded.
- Maps 5 through 8 remain shadow-only with actual stake and exposure fixed at 0u.
- Official recommendations do not resume automatically after map 8.
- Maps 5 through 8 default to one primary shadow lean per map.
- A pregame or 0:00 duration Under is ineligible during maps 5 through 8 unless at least one synchronized live snapshot confirms actual conversion evidence.
- Entry-time, later live, and settlement evidence must be separated explicitly.

## Additional-pick status

- No second shadow pick was entered on this map.
- Actual exposure remained 0u.

## Circuit-breaker accounting

- Complete maps reviewed before this map: **3 of 8**
- Shadow map 4: **active, not complete**
- Maps 5 through 8: pending
- Complete maps still required including this map: **5**
- Settled shadow market record including this duration result: **3-3**
- Nominal simulated net including this duration result: **-0.12475u / -124,750 VND**
- Actual exposure: **0u**
- Official ledger and probation: unchanged

Official recommendations remain paused. Supply the final Game 1 state to complete shadow map 4 review.
