# Football Model Rules v0.2.6

**Effective date:** 2026-07-30  
**Status:** Active evaluation rule  
**Supersedes:** `MODEL_RULES_FOOTBALL_V0.2.5.md` where knockout chase intensity, next-goal state transitions, correlated live evidence, or halftime multi-goal totals conflict.

## Trigger

The Gornik Zabrze vs Fenerbahce Over 3.5 assessment at 1-1 and 45:40 exposed a process defect independent of final settlement. Gornik needed one goal to level the aggregate and force extra time, while the wager required two more regulation-time goals. The model priced the next-goal incentive too strongly and did not adequately price the lower-urgency state after a possible aggregate equalizer. It also treated overlapping xG, xGOT, big-chance, shot, box-shot, and box-touch indicators as more independent than they were.

## Active rules

### 1. Goals-required tier

Before applying any knockout chase uplift, classify the trailing team as:

- `single-goal-to-level`: one goal levels the aggregate or forces extra time;
- `single-goal-to-qualify`: one goal moves the team ahead or qualifies it;
- `multi-goal-chase`: at least two goals remain necessary;
- `no-chase`: the current state creates no rational need for increased attacking risk.

The strong late multi-goal-tail uplift applies only to a behaviorally confirmed `multi-goal-chase`. A team needing one goal to force extra time does not automatically create a strong two-goal remaining tail.

### 2. Mandatory next-goal state tree

For any live total or team total requiring two or more additional goals, price three branches:

1. trailing team scores next;
2. leading team scores next;
3. no goal through the next material checkpoint.

After each branch, recalculate aggregate score, goals still needed, extra-time availability, attacking urgency, transition exposure, and the probability of the subsequent goal required by the wager.

### 3. Aggregate-reset branch

When a trailing-team goal levels the aggregate and extra time becomes available, apply `aggregate-reset`:

- reduce immediate combined scoring intensity for the next 5-10 minutes unless observed behavior supports continued regulation aggression;
- do not assume both teams will continue chasing a regulation winner;
- widen the probability interval;
- price the second required goal separately when the market still needs another goal.

### 4. Correlated evidence

Treat xG, xGOT, big chances, shots on target, box shots, and box touches as partially correlated.

- Group overlapping indicators from the same passage into a `chance cluster`.
- High xG with materially lower xGOT requires regression unless the missed chances are clearly repeatable.
- Low-xG shots on target do not carry the same forward scoring value as high-quality shots on target.
- A static halftime screenshot receives a persistence penalty unless the previous 10-15 minutes or multiple snapshots confirm continuing chance creation.

### 5. Halftime multi-goal total gate

For halftime or early-second-half totals requiring at least two additional goals:

- require an independently supported pathway to the second goal, not only a strong next-goal case;
- when the trailing team is `single-goal-to-level` and the first goal could trigger an aggregate reset, require the normal five-point edge plus an additional two-point buffer;
- under the active restriction, this normally means at least seven percentage points over breakeven for `OFFICIAL BET` status;
- cap at `LEAN` when the thesis supports only one goal to force extra time;
- prefer whole-goal protection when reasonably priced.

### 6. Branch weighting

Do not make the forced-chase branch dominant solely because the fixture is a knockout tie. Increase it only when supported by at least two of:

- multiple goals still needed;
- attacking substitutions;
- advanced fullbacks or wingbacks;
- reduced defensive numbers;
- repeated transition chances;
- persistent high-quality chances;
- defensive fatigue or cards.

### 7. Required output

Applicable knockout recommendations must show:

- `Goals-required tier`
- `Next-goal state tree`
- `Aggregate-reset risk`
- `Chance-quality and correlation check`
- `Late-game and stoppage-time branch`
- `Market implication`

Use tags `single-goal-to-level`, `multi-goal-chase`, `aggregate-reset`, and `chance-cluster-adjusted` when applicable.

## Expected benefit

Improve knockout-total calibration, reduce double-counting, and avoid overstating two-goal tails when only one goal is strongly incentivized.

## Possible downside

The added branching may slow live analysis and produce more passed opportunities.

## Review threshold

Review after the next 10 settled official football totals assessed under v0.2.6, including at least five knockout totals if available. Separate single-goal-to-level from multi-goal-chase states, one-goal from two-or-more-goal requirements, aggregate-reset occurrence, closing-line quality, calibration, ROI, and process accuracy.
