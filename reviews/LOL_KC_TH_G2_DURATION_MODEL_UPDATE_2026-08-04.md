# KC vs Team Heretics Game 2 — Duration Model Review

**Date:** 2026-08-04  
**Trigger:** User-requested model update after settlement review  
**Final:** KC 16-5 Team Heretics, 21 total kills, 34:29

## Official result

- Wager 11: Under 22.5 kills @1.894
- Stake: 0.25u / 250,000 VND
- Result: won
- Net: +223,500 VND / +0.2235u

## Correct calls

- Wide Team Heretics positive kill handicaps were valid: +12.5 covered by 1.5 kills and +11.5 covered by 0.5.
- KC negative 12.5 watches were correctly not promoted and lost by 1.5 kills.
- The late Kill Under progression was correct: Under 24.5, Under 23.5, and the placed Under 22.5 all won.
- Return-kill suppression was correctly identified. Team Heretics produced only two additional kills from the 8-3 assessment and finished with five.

## Main process error

The model treated kill suppression as evidence of immediate time compression.

At the user-corrected 25:00 state, KC led 8-3 kills, about 5.3k gold, 3-0 towers, and 3-1 dragons. The model assigned a 5/5 one-sequence close score and leaned Duration Under 30. KC did not finish until 34:29.

The state supported a controlled low-kill close, but did not support a fast close because:

- KC had no Baron;
- no inhibitor turret or inhibitor was exposed;
- no base siege was established;
- no live ace or decisive death-timer window existed;
- Anivia, Ashe, and Seraphine enabled safe control but also encouraged resets, wave setup, and objective waiting;
- three towers of advantage did not equal terminal access.

## Model lesson

Kill suppression and duration compression are separate dimensions.

A leader can suppress return kills while still taking several minutes to convert objectives, align waves, secure Baron, or breach the base. Low expected future kills can support a Kill Under without supporting a Duration Under.

## Required correction

1. Add a verified terminal-access gate before assigning a one-sequence close score of 4 or 5.
2. Cap the close score at 3 when the leader lacks Baron-enabled siege, exposed inhibitor/base access, or a live death-timer finish window.
3. Add a methodical-control time tax when the leader wins through zone control and wave management rather than immediate structure DPS.
4. Require every Duration Under thesis to state the exact remaining route and number of resets or neutral cycles required.
5. Preserve duration quarantine through wager 20.

## Accounting

- Official probation after settlement: 11/20
- Record: 7-4
- Net: +335,750 VND / +0.33575u
- No stake increase authorized
