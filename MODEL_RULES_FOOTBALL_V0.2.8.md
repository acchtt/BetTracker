# Football Model Rules v0.2.8

**Effective date:** 2026-07-31  
**Status:** Active evaluation addendum  
**Supersedes:** `MODEL_RULES_FOOTBALL_V0.2.7.md` only where recommendation labels, quote freshness, state-change invalidation, under-tail calibration, or pressure-quality gates conflict. v0.2.6 remains the active knockout state-tree and chance-correlation layer; v0.2.7 remains the active market-implied distribution and adjacent-line pricing layer.

## Trigger

The first eight ledgered football wagers produced a mixed but informative sample. The clearest process defects were not one common side bias; they were inconsistent actionability of `LEAN`, stale live prices, insufficient tail expansion after destabilizing knockout events, and excessive reliance on territorial pressure when chance quality was incomplete.

Relevant examples:

- Kairat team total Over 1.5 lost despite extreme shot and possession volume because blocked and low-quality pressure did not produce a second goal.
- Gornik-Fenerbahce Over 3.5 lost after the model over-weighted a single-goal-to-level chase and correlated chance indicators.
- Ferencvaros-Twente Under 3 lost after a red card, attacking halftime substitutions and a genuine multi-goal chase created a high-variance second half.
- PAOK-Dynamo Under 2.25 produced a half win, but the actionable price moved below the stated cutoff before the recommendation was delivered.
- Bragantino-Sporting Cristal Under 1.25 won half, but final chance volume showed that the low-event edge had been overstated.

The sample is too small for broad parameter re-fitting, so v0.2.8 promotes only process rules supported by repeated or structurally clear evidence.

## Active rules

### 1. Recommendation labels are execution contracts

- `OFFICIAL BET` is actionable only at or above the stated minimum odds, at the stated line, score, minute and stake.
- `LEAN` is watchlist-only and carries a default stake of `0u`. Required output: `Do not place unless upgraded to OFFICIAL BET.`
- `NO BET` is non-actionable.
- A user-confirmed wager placed from a `LEAN` remains an official ledger entry because it was actually placed, but it is reported separately from model-approved official performance.

### 2. Live quote freshness and expiry

Every live recommendation must show an expiry condition.

- Standard validity: 60 seconds from the observed odds screen.
- High-volatility validity: 30 seconds after a goal, red card, penalty/VAR event, from minute 75 onward, or when the line is visibly moving.
- Any score change, card, major substitution, line change, settlement change, or price below cutoff immediately expires the recommendation.
- The actionable decision must appear before the explanation: label, market, odds, cutoff, stake, score and minute first.
- If the displayed price has already moved below the cutoff, output `NO BET` immediately and do not complete a long assessment using the expired quote.

### 3. State-change invalidation for unders

Any existing under thesis must be repriced from zero after:

- a goal;
- a red card;
- two or more clearly attacking substitutions;
- a transition from single-goal-to-level into multi-goal-chase;
- a material tactical shape change;
- a goalkeeper injury or replacement.

Do not carry the pre-event expected-goal rate forward mechanically. Rebuild the next-goal tree and the full remaining-goal distribution.

### 4. Destabilization index for knockout unders

Count the following active destabilizers:

- trailing team needs at least two goals;
- red card to the aggregate-leading team;
- two or more attacking substitutions by the chasing team;
- repeated transition chances for the leading team;
- persistent box pressure or high-quality chances over at least 10 minutes;
- late-game stoppage-time incentive with qualification still live.

Rules:

- 0-1 destabilizers: normal under threshold.
- 2 destabilizers: require at least seven percentage points of uncertainty-adjusted edge for `OFFICIAL BET`.
- 3 or more destabilizers: cap new unders at `LEAN` unless at least 10 minutes of post-change suppression is verified and the edge remains at least nine percentage points.
- Never add to an existing under merely because the nominal total line has risen after the destabilizing event.

### 5. Branch-overdispersion, not a single Poisson mean

For knockout totals, use a scenario mixture:

1. controlled game branch;
2. aggregate-reset branch;
3. multi-goal-chase branch;
4. red-card/open-transition branch.

Estimate the goal distribution within each branch and combine them by branch probability. Do not price high-variance states from one average remaining-goal mean. Team strength must affect both the mean and the right tail.

### 6. Team-strength tail adjustment

When the stronger team leads while the weaker team must chase:

- increase the stronger team's counterattacking scoring probability;
- increase the chance of repeated goals after the first chase goal;
- do not assume the stronger side will simply close the match;
- widen the under probability interval.

When the stronger team is the chasing side, increase sustained-pressure persistence, but still require chance-quality evidence before upgrading an over.

### 7. Pressure-quality gate for overs and team totals

Possession, attacks, dangerous attacks, corners, blocked shots and raw shot count are secondary evidence.

An `OFFICIAL BET` over or team total normally requires:

- current xG or an equivalent quality estimate; and
- at least two independent quality confirmations from big chances, inside-box shots, xGOT/shots on target, opposition-box touches, repeatable set-piece threat, or persistent high-quality sequences across multiple snapshots.

Apply a strong discount when:

- most attempts are blocked or from outside the box;
- shots on target are low relative to total attempts;
- the opponent is in a compact low block;
- extra time is an acceptable outcome for both sides;
- the evidence comes from one static screenshot.

If xG, big chances and box-entry data are all missing, cap at `LEAN` unless the edge exceeds the normal threshold by at least three additional percentage points.

### 8. Post-goal cluster hazard

After a goal in a knockout chase, do not assume immediate regression to the pre-goal rate.

- Price an 8-12 minute elevated transition window when the goal changes qualification incentives.
- A goal plus a red card or attacking substitutions creates a correlated cluster hazard.
- If an existing under becomes one goal away from full loss, issue a risk alert and evaluate current cash-out or hedge prices when supplied; do not recommend a hedge without pricing it independently.

### 9. Whole-goal and quarter-line selection

The v0.2.7 adjacent-line rule remains active. Additional rule for volatile knockout unders:

- when expected values are within three percentage points, prefer the whole-goal line;
- choose the quarter line only when its settlement-weighted expected value advantage exceeds the protection value lost at the most likely boundary score.

### 10. Performance segmentation

Report separately:

- model-approved official bets executed at or above cutoff;
- model-approved official bets affected by assistant timing failure;
- user-placed leans;
- user overrides;
- pre-match versus live;
- knockout versus group-stage;
- overs, unders and team totals;
- clean process, mixed process and bad process.

Do not use user-placed lean results to alter official-bet calibration without showing the separate segment.

## Required live output order

1. `OFFICIAL BET`, `LEAN`, or `NO BET`.
2. Exact market, odds, cutoff, stake, score, minute and expiry.
3. Settlement in one line.
4. State tier and next-goal tree.
5. Chance-quality and correlation check.
6. Team-strength and destabilization adjustment.
7. Adjacent-line and over-price check.

## Expected benefit

Reduce accidental execution of non-actionable leans, prevent stale-price recommendations, improve knockout under-tail calibration after goals/cards/substitutions, and stop raw territorial pressure from being mistaken for repeatable scoring quality.

## Possible downside

The stricter expiry and destabilization gates will produce more `NO BET` decisions and may miss some fast-moving value. This is acceptable until a larger sample demonstrates that looser thresholds are profitable.

## Review threshold

Review after 12 additional settled model-approved official football bets or 25 fully documented live football assessments under v0.2.8, whichever occurs first. Track quote age, cutoff compliance, state changes within five minutes of entry, destabilization count, branch distribution, closing-line quality, settlement bucket, process grade and realized ROI.
