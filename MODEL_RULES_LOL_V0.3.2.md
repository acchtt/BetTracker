# League of Legends Model Rules v0.3.2

**Status:** Active evaluation addendum  
**Effective date:** 2026-07-31  
**Applies to:** LoL prematch, post-draft, and live betting  
**Read with:** `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.1.md`, `MODEL_CHANGELOG_LOL_V0.3.2.md`, and `ledger.json`

This addendum strengthens execution discipline and evidence gates. It does not relax the v0.3.1 team-strength or rapid cross-market rules.

## 1. Performance attribution tiers

Every placed LoL wager must be assigned to exactly one tier:

1. `model-approved exact`: current state synchronized, exact market and line approved, accepted odds at or above cutoff, and stake at or below the recommended 0.25u.
2. `synchronized lean execution`: same market and line, state still current, accepted price remains valid, and stake does not exceed 0.25u.
3. `user-executed deviation`: changed line, stale or missing state, material unpriced odds move, stake above recommendation, or no exact model approval.

Report results separately by tier. Wins from deviations do not validate the probability model, and losses from deviations do not automatically invalidate it; both remain part of execution-process review.

## 2. Hard execution lock

A recommendation is executable only while all of the following remain true:

- same event, map, market, line, and settlement basis;
- no intervening kill, tower, major objective, meaningful fight, substitution, draft change, or material gold-state change;
- accepted odds remain at or above the stated minimum;
- stake remains at or below 0.25u;
- existing correlated exposure has not materially changed.

A changed line always requires a fresh assessment, even when the new line appears more protective.

A price move of at least 0.10 decimal odds or at least three implied-probability points requires a fresh price and state assessment. Minor price drift may remain valid only when the line is unchanged, no meaningful game event occurred, and the accepted price remains above cutoff.

## 3. Positive underdog kill-handicap gate

Before recommending an underdog positive kill handicap, verify:

- role-level gold and item resilience;
- realistic target access and damage conversion;
- evidence of actual kill trading, not only theoretical scaling;
- next-objective vision and setup;
- future net-kill stress test under one and two consecutive lost fights.

Before 15:00, a material team-strength disadvantage plus a gold deficit around 2,500 or more normally caps the output at `LEAN` or `NO BET` unless structural compensation is clearly visible.

After two consecutive worsening snapshots, stop moving farther up the positive-handicap ladder until the underdog stabilizes through gold, objectives, items, towers, or a clearly favorable fight trade.

## 4. Duration-over evidence gate

Scaling, wave-clear, an even early kill score, or zero towers alone are insufficient for an `OFFICIAL BET` duration over.

An official duration over normally requires at least two independent stall indicators, such as:

- tower progression has remained stalled across multiple snapshots;
- defensive item breakpoints are completed;
- stable wave-clear prevents siege conversion;
- objectives are traded without decisive fights;
- neither team has a credible immediate soul, Baron, or base-close route;
- the leading team has repeatedly failed to convert advantages.

Fast engage, pick volatility, soul-point pressure, or a clean Baron setup must be priced as explicit short-game branches.

## 5. Series-moneyline robustness

A series moneyline must remain valid across realistic side, draft, and substitution branches.

- Academy, challenger, and volatile-roster series require an explicit substitution branch.
- If one plausible roster change materially destroys the edge, cap the recommendation at `LEAN`.
- Do not let prior head-to-head records override current roster quality, early-game strength, and lead-conversion evidence.

## 6. Rapid market-selection scorecard

Continue the v0.3.1 parallel scan of moneyline, kill handicap, total kills, and duration. Rank each candidate quickly on:

1. fit with the dominant projected game script;
2. uncertainty-adjusted edge;
3. settlement protection;
4. execution robustness to one state change;
5. correlation with existing exposure.

Select the highest-ranked market rather than the first plausible market. Normally recommend only one correlated official position.

## 7. Stake discipline

The active LoL evaluation cap is 0.25u per wager. Confidence does not increase stake automatically.

Any execution above 0.25u is recorded as a user-executed deviation and excluded from model-approved stake and ROI reporting, even when it wins.

## 8. Review threshold

Review after the next 10 settled LoL wagers that meet the `model-approved exact` or `synchronized lean execution` definitions.

Report separately by recommendation tier, market, prematch/post-draft/live timing, team-strength alignment, state synchronization, and whether the selected market matched the realized game script.