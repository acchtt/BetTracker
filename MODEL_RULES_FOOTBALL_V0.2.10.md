# Football Model Rules v0.2.10

**Effective date:** 2026-07-31  
**Status:** Active evaluation addendum  
**Supersedes:** `MODEL_RULES_FOOTBALL_V0.2.8.md` where `LEAN` is automatically fixed at 0u, and all older football rules where recommendation-tier definitions conflict. `MODEL_RULES_FOOTBALL_V0.2.9.md` remains active for timing, quote freshness, executable bands, and latency attribution. Knockout-state, chance-correlation, adjacent-line, over-price, destabilization, stoppage-time, and settlement rules remain active.

## Trigger

Recent results showed that the previous three-label system was too coarse:

- Caracas vs Santa Fe produced two correct model leans: Over 2.25 and Santa Fe handicap.
- Ferencvaros vs Twente Under 3 was a user-placed lean and lost.
- Several official recommendations had stronger evidence but still produced mixed outcomes, including Central Cordoba vs Atletico Tucuman Under 1.5 losing to a stoppage-time second goal.

These outcomes do not prove that leans should be treated as official bets. They show that `LEAN` was combining two different states: a modest positive edge that may justify reduced exposure, and a watchlist opinion that should remain 0u.

## Active rules

### 1. Recommendation labels and subtypes

Every football recommendation must still begin with exactly one of `OFFICIAL BET`, `LEAN`, or `NO BET`.

Use the following meanings:

- `OFFICIAL BET`: robust actionable recommendation at the stated line, executable odds band, state, and stake. Standard football stake remains 0.25u.
- `LEAN — SMALL`: actionable reduced-stake recommendation at 0.125u when the edge is positive but not robust enough for 0.25u.
- `LEAN — WATCH`: directional or price-monitoring opinion at 0u. Required wording: `Do not place unless upgraded or reissued as LEAN — SMALL or OFFICIAL BET.`
- `NO BET`: no actionable positive edge after uncertainty, settlement, and state-transition adjustments.

A wager becomes an official ledger entry only after the user confirms placement. A placed `LEAN — SMALL` remains classified as a lean recommendation for performance segmentation even though the wager itself is official after confirmation.

### 2. OFFICIAL BET gate

An `OFFICIAL BET` recommendation normally requires all of the following:

- minimum accepted odds of 1.60 or higher, subject to stricter market rules;
- settlement-weighted midpoint expected ROI of at least +6%;
- uncertainty-adjusted lower-bound expected ROI of at least +2%;
- mandatory event, competition, lineup, market, state, and settlement verification completed;
- no unresolved major data-quality issue;
- the edge survives stoppage-time, score-state, substitution, card, tactical, team-strength, and adjacent-line adjustments;
- the market remains inside the stated executable price band.

Existing stricter thresholds remain controlling. Knockout destabilization, first-half Under 0.75, halftime multi-goal totals, missing-data penalties, and other restricted markets can require substantially more than the normal gate.

### 3. LEAN — SMALL gate

A `LEAN — SMALL` recommendation may be issued at 0.125u only when all of the following are satisfied:

- minimum odds are at least 1.60;
- settlement-weighted midpoint expected ROI is at least +3%;
- uncertainty-adjusted lower-bound expected ROI is non-negative;
- event, market, line, score, minute, and settlement are verified;
- there is no recent goal, red card, penalty/VAR event, goalkeeper change, or unresolved major tactical change;
- the state is sufficiently stable for the v0.2.9 executable band;
- no more than one material evidence gap remains;
- the recommendation is not blocked by a stricter market-specific rule.

`LEAN — SMALL` is not available merely because an outcome seems likely. It requires positive expected value at the offered price.

### 4. LEAN — WATCH gate

Use `LEAN — WATCH` at 0u when the direction is plausible but any of the following applies:

- midpoint expected ROI is below +3%;
- lower-bound expected ROI is negative;
- the current price is close to fair;
- lineups, current odds, chance quality, substitutions, cards, or settlement details are incomplete;
- the state is high volatility or rapidly changing;
- the recommendation depends mainly on one static screenshot or one correlated chance cluster;
- the model has a directional preference but cannot establish a robust executable band.

A winning `LEAN — WATCH` does not become a missed official bet through hindsight.

### 5. Correlated exposure control

- Do not recommend two full `LEAN — SMALL` positions on positively correlated markets in the same match.
- Choose the highest uncertainty-adjusted EV market, or split a combined maximum of 0.125u.
- If an official position already exists in the match, all additional correlated exposure must keep combined football exposure at or below 0.25u unless a separate explicit exception is approved.
- A handicap and over driven by the same multi-goal-chase branch must be treated as correlated, even when both are individually positive EV.

### 6. Upgrade and downgrade rules

- `LEAN — WATCH` can upgrade to `LEAN — SMALL` or `OFFICIAL BET` only after a better price or new evidence clears the relevant gate.
- `LEAN — SMALL` can upgrade to `OFFICIAL BET` only when the robust lower-bound gate clears.
- Prior lean exposure counts toward the match exposure cap; do not automatically add a fresh full stake after an upgrade.
- Any score, line, settlement, card, major substitution, or tactical-state change invalidates the prior classification and requires independent repricing.

### 7. Performance tracking

Track separately:

- model-approved official recommendations at 0.25u;
- `LEAN — SMALL` recommendations at 0.125u;
- `LEAN — WATCH` directional calls at 0u;
- user-placed watchlist leans;
- user overrides;
- target-price, robust-band, and timing-affected executions.

Only confirmed wagers enter betting profit/loss. Unplaced leans may be evaluated for directional accuracy, hypothetical timestamp ROI, closing-line quality, and calibration, but never merged into official betting returns.

Do not retroactively reclassify Caracas vs Santa Fe as official bets because both leans won. Do not treat the Ferencvaros lean loss as evidence that all leans are invalid. Evaluate the tiers prospectively.

### 8. Required compact output

Use one of these opening formats:

`OFFICIAL BET — market @ target odds | Executable at minimum odds+ | 0.25u`

`LEAN — SMALL — market @ target odds | Executable at minimum odds+ | 0.125u`

`LEAN — WATCH — market/angle | 0u | Do not place unless upgraded or reissued.`

`NO BET — reason in one line`

Then show score/minute, validity, invalidation conditions, and compressed settlement before detailed analysis.

## Expected benefit

Preserve selectivity while allowing disciplined reduced exposure on modest positive edges, prevent successful watchlist opinions from being confused with missed official bets, and keep official recommendations reserved for robust edges.

## Possible downside

A reduced-stake lean tier can increase bet frequency and may add low-quality marginal positions if probability intervals are too narrow. Strict lower-bound EV, correlation, state-stability, and performance-segmentation rules are therefore mandatory.

## Review threshold

Review after 20 settled `LEAN — SMALL` wagers and 20 settled model-approved official football wagers, or after 40 fully documented football recommendations under v0.2.10, whichever produces a usable comparison first. Compare ROI, calibration, closing-line quality, maximum drawdown, process grade, and performance by market, competition, pre-match/live, and volatility state.