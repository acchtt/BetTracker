# Football Model Rules v0.2.9

**Effective date:** 2026-07-31  
**Status:** Active evaluation addendum  
**Supersedes:** `MODEL_RULES_FOOTBALL_V0.2.8.md` only where live recommendation delivery timing, quote expiry, execution-price bands, and latency attribution conflict. All knockout-state, chance-correlation, adjacent-line, over-price, destabilization, and performance-segmentation rules remain active.

## Trigger

The Central Cordoba vs Atletico Tucuman Under 1.5 assessment was delivered about 1.4 minutes after the odds screenshot. The recommendation then used a 60-second expiry measured from the screenshot and a single 1.90 cutoff, while the accepted same-line price was 1.88 with the score still 0-0. This made the recommendation effectively expired before delivery and created an impractically narrow execution contract.

The PAOK vs Dynamo Kyiv assessment had already exposed the same structural problem: the line moved while the assistant was still calculating. The issue is assistant latency and quote-contract design, not user execution discipline.

## Active rules

### 1. Decision-first delivery

For live betting assessments, output the actionable header before extended reasoning:

1. label;
2. exact market and line;
3. target odds;
4. minimum executable odds;
5. stake;
6. score and minute;
7. state-based invalidation conditions.

The first actionable block should be produced as soon as the essential state, settlement, and price comparison are known. Full probability tables and reasoning follow afterward.

### 2. Expiry begins at delivery

Quote validity begins when the recommendation is delivered to the user, not when the screenshot was captured.

- Stable first-half or halftime state: normally valid for 90 seconds after delivery.
- Stable second-half state before minute 75: normally valid for 60 seconds after delivery.
- High-volatility state: 30 seconds after delivery.

High-volatility includes a recent goal, red card, penalty/VAR event, minute 75 onward, visibly moving line, multiple attacking substitutions, or an active multi-goal chase.

Time validity never overrides state validity. Any goal, red card, penalty, major substitution, material tactical change, market-line change, or settlement change immediately expires the recommendation.

### 3. Price ladder, not a single brittle cutoff

Every actionable live recommendation must distinguish:

- `target odds`: the displayed or preferred price used for the main edge estimate;
- `minimum executable odds`: the lowest price that remains acceptable after uncertainty and settlement weighting;
- `no-bet below`: any lower price.

Do not use an arbitrary fixed tick allowance. Derive the minimum executable odds from the probability interval and exact settlement-weighted EV.

When the accepted price is within 0.03 decimal odds of the stated cutoff, the line and score are unchanged, and the recalculated midpoint EV remains at least +3% with lower-bound EV non-negative, classify it as `acceptable same-state drift`, not a user deviation.

If lower-bound EV becomes negative but midpoint EV remains positive, classify the execution as `timing-affected marginal edge`; retain the official ledger record after confirmation, but separate it from fully robust cutoff-compliant performance.

### 4. Latency refresh rule

If more than 45 seconds have elapsed during analysis:

- do not present the original displayed price as if it is current;
- present a price ladder and require the same score, line, cards, substitutions, and tactical state;
- state that any price inside the executable band is acceptable without a new full assessment;
- reprice from zero if the line, settlement, or state changed.

### 5. User execution attribution

A same-market, same-line, same-score execution that moved because the assistant took too long is not a user execution error.

Record:

- exact accepted odds;
- quote-to-execution delay when known;
- assistant latency attribution;
- whether accepted odds remained inside the executable band;
- actual expected ROI range at execution.

Do not add a user deviation tag unless the user changed the market, line, stake beyond the cap, or knowingly executed below the explicit no-bet floor after receiving it.

### 6. Current Central Cordoba example

For the 0-0 state around 24-30 minutes, the prior model range assigned approximately 55%-57% to Under 1.5.

At 1.88:

- breakeven probability is approximately 53.19%;
- expected ROI range is approximately +3.4% to +7.2%;
- midpoint expected ROI is approximately +5.3%.

Therefore the accepted 1.88 price retains positive midpoint value but has a thinner lower-bound margin than 1.96. It is classified as a timing-affected same-state execution, not a user error. This example does not retroactively prove that 1.88 should be a universal cutoff.

### 7. Required live output format

Use this compact opening block:

`OFFICIAL BET — market @ target odds`

`Executable at: minimum odds or better | No bet below: floor`

`Stake | Score/minute | Valid until: delivery time + window`

`Expires immediately on: listed state changes`

Then provide settlement and compressed reasoning.

## Expected benefit

Prevent recommendations from expiring before the user receives them, reduce unnecessary missed entries from one- or two-tick moves, preserve exact EV discipline, and attribute latency failures correctly.

## Possible downside

A wider executable band can admit weaker edges when the probability interval is poorly calibrated. The band must therefore be derived from settlement-weighted EV rather than convenience, and performance must remain segmented by target-price, robust-band, and timing-affected executions.

## Review threshold

Review after 15 timing-sensitive live recommendations or 10 settled live executions under v0.2.9. Track delivery latency, quote age, target odds, minimum executable odds, accepted odds, state synchronization, actual EV range, closing-line quality, settlement, and ROI by execution band.