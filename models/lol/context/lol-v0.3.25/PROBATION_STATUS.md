# LoL v0.3.25 Probation Status

**Effective:** 2026-08-06 14:30 UTC+7  
**Status:** Active with official-wager circuit breaker

## Current state

- Settled/completed: 13/20
- Settled official record: 7-6
- Settled net result: -164,250 VND / -0.16425u
- Wager 13: **T1A -7.5 kills @1.864, 0.25u — loss**
- Next model-attributed wager number: 14
- Wagers 14-20 remain
- Open LoL exposure: 0u

## Official-wager circuit breaker

The next **two complete LoL maps** are shadow-analysis only under LoL v0.3.31.

During the circuit breaker:

- no official wager may be issued;
- all analytical stakes are 0u;
- no shadow result changes the probation count, record, or net;
- each map must be tracked through settlement and receive a post-map calibration review;
- official LoL recommendations resume only after both reviews and explicit user authorization.

Do not recommend betting against the model as an automatic inverse strategy. A calibration failure does not prove that the opposite side has positive expected value.

## Triggering shadow miss

- Event: T1 Esports Academy vs DN SOOPers Challengers — Game 3
- Candidate: DNS +11.5 kills @1.913
- Placement confirmed: no
- Official status: not official
- Ledger impact: none
- Probation impact: none

Candidate state:

- T1A led 10-7 kills;
- T1A led approximately 4,000 gold;
- T1A led 2-0 towers;
- T1A led 2-0 dragons;
- T1A led role gold in top, mid, bot, and support;
- DNS led only jungle gold.

The user reported a final kill score of 26-12 in T1A-DNS order. From the candidate state, T1A won the remaining kills 16-5, producing +11 future net kills. DNS +11.5 would have lost by 2.5 kills.

## Shadow-miss lesson

The model incorrectly treated one DNS kill and a small reduction in the gold deficit as stabilization.

The broader trend remained T1A-dominant:

- broad four-role gold control;
- two-dragon lead;
- two-tower lead;
- several remaining forced objective and base-defense fights;
- no DNS full-teamfight or major-objective reversal.

LoL v0.3.31 adds:

- two-snapshot stabilization requirements;
- a dominance override;
- remaining-fight inventory assessment;
- broad role-gold control treatment;
- line-moved-with-dominance rejection;
- a two-map shadow-analysis circuit breaker.

## Settled wager 13

- Event: T1 Esports Academy vs DN SOOPers Challengers — Game 2
- Series state at placement: T1A led 1-0
- Market: T1A -7.5 kills
- Odds: 1.864
- Assessed odds: 1.897
- Stake: 0.25u = 250,000 VND
- Result: loss
- Net: -250,000 VND / -0.25u
- Ticket ID: 1151540402
- Placement confirmed: 2026-08-06 12:58 UTC+7
- Result confirmed: 2026-08-06 13:41 UTC+7
- Model at placement: LoL v0.3.29
- Resulting calibration: LoL v0.3.30
- Attribution: model-attributed

Latest supplied state showed DNS leading 29-23 kills with approximately +4.2k gold, 4-3 dragons and 3-0 Barons. The exact final game clock and explicit map-winner statement were not supplied, but the user explicitly confirmed the handicap loss.

## Settled wager 12

- Event: T1 Esports Academy vs DN SOOPers Challengers — Game 1
- Market: DNS +7.5 kills
- Odds: 1.981
- Stake: 0.25u = 250,000 VND
- Result: loss
- Net: -250,000 VND / -0.25u
- Ticket ID: 1151528505
- Model at placement: LoL v0.3.28
- Resulting calibration: LoL v0.3.29

## Exposure rules after circuit-breaker restoration

- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Official only after explicit placement confirmation
- All duration markets are official-ineligible through wager 20

## Official wagers 7-13

- Wager 7: SK +9.5 kills @1.854 — won +213,500 VND
- Wager 8: Over 49.5 kills @1.740 — won +185,000 VND
- Wager 9: Over 37.5 kills @1.665 — won +166,250 VND
- Wager 10: FNC moneyline @1.851 — won +212,750 VND
- Wager 11: KC vs Team Heretics Game 2 Under 22.5 kills @1.894 — won +223,500 VND
- Wager 12: DNS +7.5 kills @1.981 — lost -250,000 VND
- Wager 13: T1A -7.5 kills @1.864 — lost -250,000 VND

## Staking review

No stake increase is authorized. Review staking after wager 20 unless explicitly requested earlier.
