# League of Legends Model Rules v0.3.12

**Status:** Active immediately  
**Effective date:** 2026-08-01 18:43 UTC+7  
**Applies to:** Live LoL kill totals, especially kill-total unders from 20:00 onward  
**Read with:** `MODEL_RULES_LOL_V0.3.11.md`, `MODEL_RULES_LOL_V0.3.10.md`, `MODEL_RULES_LOL_V0.3.9.md`, earlier unsuperseded LoL rules, `LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`, `LOL_BETTING_PROCEDURE.md`, `MODEL_CHANGELOG_LOL_V0.3.12.md`, and `STAKE_POLICY_V2.json`

This revision follows the unplaced DK vs Gen.G Game 1 Under 32.5 kills recommendation. At 26:12, DK led 11-9 in kills, approximately 52.8k-47.8k in gold, and 5-2 in towers. The model promoted Under 32.5 at 1.712 because DK appeared structurally capable of closing. The selection later lost. No wager was placed, so the result does not affect official P/L or probation, but the process exposed a missing late-game fight-budget gate.

The core error was treating a structural lead as kill suppression. The state still contained two functional damage systems, multiple reliable engage and target-access tools, a trailing Gen.G composition forced to contest, and no verified one-fight ending window. Twenty kills had already occurred, leaving only 12 kills of headroom.

## 1. Probation continuity

The active ten-wager probation continues without reset.

- Qualifying record remains **2 of 10, 1-1, -51,250 VND, -0.05125u**.
- The DK vs Gen.G Under 32.5 selection was not placed and is excluded from official P/L and probation.
- The next eight qualifying wagers use v0.3.12 plus all earlier rules where not superseded.

## 2. Remaining-kill budget is mandatory

For every live kill-total under, calculate and display:

- current total kills;
- market line;
- remaining kill headroom: `line - current kills`;
- estimated number of remaining mandatory contests;
- conservative expected kills from those contests;
- explicit safety buffer.

An under cannot be `OFFICIAL BET` merely because the leader has a gold, tower, objective, or map-control advantage.

## 3. Conservative fight-budget framework

Before promoting an under, inventory the likely remaining events through the end of the map.

Use the following conservative planning ranges unless current-map evidence supports a higher estimate:

- full mandatory 5v5 objective contest: **4-6 additional kills**;
- contested inhibitor or base defense: **3-5 additional kills**;
- pre-objective catch, flank, or side-lane collapse: **1-3 additional kills**;
- chase or cleanup after a won major fight: **1-3 additional kills**.

Do not automatically count overlapping events twice, but do not collapse clearly separate future contests into one event.

For an `OFFICIAL BET`, remaining kill headroom must exceed the conservative expected kill budget by at least **three kills**. If the budget is uncertain, use the higher reasonable estimate or return `NO BET`.

## 4. Late-game headroom vetoes

At or after 24:00:

- If remaining headroom is **10 kills or fewer**, the default is `NO BET` unless the map is already in a verified immediate ending sequence.
- If remaining headroom is **11-12 kills** and both teams retain at least two functional damage sources or reliable layered engage, the maximum is `LEAN — 0u watch` unless the one-fight close gate in Section 5 is fully satisfied.
- A high current kill count is not neutralized by a leader holding a 4k-7k gold lead or a three-tower advantage.
- A shortened price does not substitute for the missing fight-budget evidence.

## 5. One-fight close gate

A late-game under may be promoted only when the model can justify that no more than one full structured fight is likely before the Nexus falls.

At least three of the following must be currently verified, including one item from the first two bullets:

- Baron, Elder, or an equivalent ending buff is already secured by the leading team;
- an inhibitor is down, exposed, or the defending base is under synchronized multi-wave pressure;
- the leader has a currently usable 7k+ gold or decisive multi-item advantage rather than a distributed theoretical edge;
- the defender's functional waveclear, frontline, engage, or primary damage delivery is materially broken;
- death timers, teleport status, map position, and wave state support an immediate siege after the next won interaction;
- the next lost contest would realistically end the game without another neutral-objective cycle.

A 5-2 tower lead by itself does not pass this gate.

## 6. Mandatory-contest and forced-fight veto

A kill-total under is `NO BET` when two or more meaningful full contests are still likely before the game can end and either team can initiate them.

Count the following explicitly:

- current or next Baron cycle;
- soul-point, soul, Elder, or other forced dragon contest;
- inhibitor defense;
- Baron-powered base siege;
- side-lane collapse required to unlock the base.

The trailing team's incentives matter. When the trailing team must contest to avoid losing the map, its desperation engage, flank, steal attempt, and post-objective chase branches increase kill variance even if its win probability is low.

## 7. Two-sided functional-damage veto

Structural control does not imply low future kills when both compositions can still return damage.

Downgrade or veto an under when:

- both teams retain at least two functional current damage sources;
- both teams have reliable engage, flank, or target access;
- frontline kill speed is adequate on both sides;
- carries have completed major items and can participate in the next objective fight;
- recent fights produced kills for both teams rather than clean zero-return conversions.

An under requires evidence of fight suppression, not merely evidence that one team is favored to win.

## 8. Recent kill-velocity and conversion check

For a late-game under, record kills added during approximately the previous five minutes and the outcome of the last two meaningful interactions.

An `OFFICIAL BET` normally requires both:

- no more than four kills during the previous five minutes; and
- no repeated two-sided conversion pattern in the last two structured interactions.

A slower recent window may support the thesis but cannot override the mandatory-contest, functional-damage, or one-fight-close vetoes.

## 9. Required late-under execution block

Every actionable late-game kill under must state, before reasoning:

- exact line and quoted odds;
- current kills and remaining headroom;
- expected remaining full contests;
- conservative additional-kill budget;
- safety buffer;
- one-fight close gate status;
- two-sided functional-damage status;
- recent kill velocity;
- target floor, hard execution floor, stake, and placement status.

If any of these fields cannot be established from synchronized evidence, use `NO BET`.

## 10. Same-series thesis lockout

The DK vs Gen.G Game 1 process miss activates a same-series lockout on late-game kill-total unders derived mainly from leader control.

For the next map in the same series, such an under cannot become `OFFICIAL BET` without:

- a verified one-fight close state;
- a passed conservative fight budget with a three-kill safety buffer; and
- two independent current-map fight-suppression confirmations.

## 11. Outcome-neutral application

Apply this rule before knowing the result.

- A future under that satisfies every gate remains a model selection even if it loses.
- A future under that fails a gate remains `NO BET` even if it later wins.
- Unplaced recommendations remain outside official P/L and probation.
- Do not loosen the rule because this triggering selection lost or tighten it only for teams involved in this match.

## 12. Expected benefit

- Prevent tower and gold leads from being misclassified as kill suppression.
- Force explicit accounting for Baron, dragon, inhibitor, and base-defense fights.
- Price trailing-team desperation and two-sided late-game damage.
- Reduce official unders with insufficient remaining-kill cushion.

## 13. Possible downside

- The model will pass some winning late-game unders where the leading team closes cleanly.
- Waiting for a verified one-fight close may leave only short odds or suspended markets.
- Conservative fight budgets may overestimate kills in highly controlled professional games.

These costs are acceptable during probation because late-game kill totals have high state-change and execution risk.

## 14. Review threshold

Review this rule after the earlier of:

- five settled, synchronized LoL kill-total unders assessed at or after 20:00; or
- completion of the overall ten-wager probation.

Track entry time, current kills, line, headroom, remaining contest count, expected kill budget, safety buffer, one-fight close status, functional damage, recent kill velocity, final kills, result, closing-line quality, VND, and units.
