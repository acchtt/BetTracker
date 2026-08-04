# Football Model Rules v0.2.15

**Effective date:** 2026-08-01  
**Status:** Active immediately  
**Supersedes:** Every older football minimum-odds rule where it conflicts. All other active football procedures and restrictions remain in force.

## Trigger

Football markets contain substantial residual risk from weather, pitch condition, officiating, penalties, red cards, injuries, substitutions, tactical changes, stoppage time, and live execution latency. The previous universal minimum of 1.60 did not provide enough price margin for football-specific uncertainty.

## New hard minimum

- The minimum accepted decimal odds for any football `OFFICIAL BET` or staked `LEAN — SMALL` are **1.70**.
- Odds below 1.70 are an automatic `NO BET`, regardless of estimated win probability, apparent safety, handicap protection, or market popularity.
- The 1.70 floor applies to prematch and live football, including Asian handicaps, draw-no-bet, totals, team totals, corners, cards, and other football markets.
- A recommendation issued at 1.70 or higher expires if execution falls below 1.70. It must not be described as model-approved at the accepted price.
- A bet confirmed below 1.70 may be recorded in `ledger.json`, but must be tagged as a user execution outside model limits and excluded from synchronized model-approved performance.
- Market-specific rules may require odds higher than 1.70; the stricter threshold controls.
- Other sports retain their active sport-specific minimum odds unless separately changed.

## Recommendation format requirement

Every actionable football recommendation must state:

- displayed odds;
- hard minimum accepted odds of at least 1.70;
- any higher market-specific cutoff;
- expiry if the price falls below the stated cutoff;
- status `not placed` until user confirmation.

## Review

Review after the next 20 settled, synchronized, model-approved football wagers. Track:

- recommendation odds;
- execution odds;
- whether execution remained at or above 1.70;
- closing-line movement;
- market type;
- prematch/live classification;
- weather and pitch state;
- result and net VND/units.

Do not lower the football minimum below 1.70 without a documented review showing that the additional price margin is unnecessary.