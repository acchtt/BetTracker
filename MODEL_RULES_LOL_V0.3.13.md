# League of Legends Model Rules v0.3.13

**Status:** Active immediately  
**Effective date:** 2026-08-01 19:47 UTC+7  
**Applies to:** Live LoL duration overs during the active ten-wager probation  
**Read with:** `MODEL_RULES_LOL_V0.3.12.md`, `MODEL_RULES_LOL_V0.3.11.md`, `MODEL_RULES_LOL_V0.3.10.md`, earlier unsuperseded LoL rules, `LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`, `LOL_BETTING_PROCEDURE.md`, and `STAKE_POLICY_V2.json`

This revision follows the first four user-defined probation wagers. Three were duration overs and all three lost:

1. AL vs TT Game 1 Over 32 minutes at 1.999 for 0.25u, entered at 4:58, final duration 21:50.
2. TES vs LGD Game 3 Over 33 minutes at 2.117 for 0.25u, entered from a 16:43 state, exact final duration not supplied.
3. DK vs Gen.G Game 2 Over 33 minutes at 2.021 for 0.30u, entered from a 17:10 state, exact final duration not supplied.

The sample is too small to prove that duration overs have no edge. It is sufficient to identify a repeated process failure: low kill pace, modest gold separation, low tower count, and nominal waveclear were repeatedly treated as evidence that the game would survive the offered line, without a complete inventory of the fastest realistic ending paths.

## 1. Probation status and attribution

The user-defined probation record is **4 of 10, 1-3, -601,250 VND, -0.60125u**.

- All four official LoL wagers remain included by user instruction.
- TES vs LGD Game 3 and DK vs Gen.G Game 2 remain execution exceptions; their material price-move and stake deviations are not erased.
- Strict model-approved execution performance must continue to be reported separately from the user-defined all-official probation view.

## 2. Same-day duration-over suspension

For the remainder of **2026-08-01**, a live LoL duration over cannot be promoted to `OFFICIAL BET`.

The maximum classification is `LEAN — 0u watch`.

This temporary suspension prevents immediate thesis-chasing after three duration-over losses and gives the model time to enforce the finish-path framework below. Duration unders and other markets remain available only under their independent current-state rules.

## 3. Complete synchronized state is mandatory

After the same-day suspension expires, an actionable duration over requires a synchronized block containing:

- current game clock and kill score;
- normalized gold and relevant completed-item distribution;
- exact tower count and which structures remain;
- dragon, Grub, Herald, Baron, soul-point, and next-objective status;
- current wave position and structure depth;
- functional waveclear and safe wave access;
- major engage, pick, dive, and tower-acceleration tools;
- the next two realistic objective or siege sequences;
- the earliest credible finish window for each team;
- the offered duration line, quoted odds, target floor, hard execution floor, stake, and placement status.

If any required field is unavailable, output `NO BET`.

## 4. Durable anti-conversion requirement

An `OFFICIAL BET` duration over requires at least **two independent observed anti-conversion events after the first objective cycle**.

At least one must have occurred during approximately the previous five minutes and must have resisted actual pressure rather than simple mutual disengagement.

Qualifying events include:

- a pressured siege cleared without losing a meaningful structure;
- a defended dive or engage that prevents objective or tower conversion;
- a structured objective contest disengaged or traded without material structural loss;
- a side-lane or cross-map response that demonstrably delays grouping and base access.

Low kills, stable gold, no recent tower, and nominal waveclear are one correlated quiet-state cluster. They cannot be counted as multiple independent stall indicators.

## 5. Fastest-finish-path inventory

Before promoting a duration over, enumerate the fastest realistic closing branches for both teams.

At minimum assess:

- one won objective fight into Baron or equivalent ending buff;
- one pick or flank into two structures or inhibitor access;
- Herald or Grub-assisted tower compression;
- direct base access through an exposed lane;
- whether the favorite can end without Baron;
- whether death timers, teleport availability, wave position, and current item spikes permit a one-fight close.

If either team has a realistic single-fight branch that can end at or before the offered line, the duration over is `NO BET` unless the defending team has already demonstrated resistance against that exact pressure route.

## 6. Finish-window margin

Calculate a conservative earliest credible finish time from the synchronized state.

For an `OFFICIAL BET` duration over:

- the conservative earliest credible finish must be at least **3:00 later** than the offered line;
- a margin greater than 1:00 but less than 3:00 is at most `LEAN — 0u watch`;
- a margin of 1:00 or less is `NO BET`.

The margin must be based on current structures, objective timing, wave travel, recall timing, death timers, and actual composition execution. It cannot be based only on average professional-game duration or a low current kill rate.

## 7. One-fight compression veto

A duration over is `NO BET` when one won structured fight can plausibly create all of the following before the line:

- a major objective or uncontested map reset;
- at least two meaningful structures, an inhibitor, or direct Nexus access;
- sufficient death-timer or wave-state support to prevent a full defensive reset.

This veto applies even when kills are tied, the gold lead is modest, and the map has looked slow.

## 8. Functional defense, not nominal defense

Waveclear, frontline, disengage, and scaling count only when they are functional against the opponent's current access tools.

The model must verify:

- adequate items, levels, mana, and cooldowns;
- safe access to the next pressured wave;
- enough structure depth to convert waveclear into actual time;
- no reliable dive, flank, or zone-control pattern that removes the defending carries from the wave;
- at least one recent successful defensive sequence under pressure.

Champion names alone cannot satisfy the gate.

## 9. Execution remains a hard gate

The v0.3.11 execution rules remain unchanged.

- A decimal-odds move of 0.10 or more requires fresh reassessment.
- An implied-probability move of three percentage points or more requires fresh reassessment.
- A material state or line change requires fresh reassessment.
- The active per-map exposure cap remains 0.25u.
- Immediate same-state timing does not waive a triggered material threshold.

A user-confirmed wager can remain an official real wager while being tagged as an execution exception. The deviation must not be hidden when reviewing model performance.

## 10. Required actionable duration block

Every actionable duration over must display, before the supporting explanation:

- exact event, map, market, line, and quoted odds;
- current clock, kills, gold, towers, objectives, and key items;
- two verified anti-conversion events;
- functional-defense status;
- fastest finish branch for each team;
- conservative earliest credible finish;
- finish-window margin relative to the line;
- one-fight compression veto status;
- quoted odds, target floor, hard floor, stake, and placement status;
- explicit expiry triggers.

If the full block cannot be completed, return `NO BET`.

## 11. Review threshold

Review the duration-over framework after the earlier of:

- three additional synchronized duration-over assessments under v0.3.13, including passed markets; or
- completion of the ten-wager probation.

Track entry time, line, final duration, objective state, structures, anti-conversion count, fastest finish branch, conservative finish time, margin to line, price movement, execution compliance, VND, and units.

Do not loosen the rule because a passed duration over later wins, and do not tighten it solely because another result loses.