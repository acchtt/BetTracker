# Football Model Rules v0.2.7

**Effective date:** 2026-07-30  
**Status:** Active evaluation rule  
**Supersedes:** `MODEL_RULES_FOOTBALL_V0.2.6.md` only where total-market price extraction, over-value detection, adjacent-line comparison, or market-implied goal distributions conflict. v0.2.6 remains the active knockout-state and chance-correlation layer.

## Trigger

Live total screens can offer an over price that is materially longer than the state-based fair price, particularly after a quiet period, a low current score, or market anchoring to recent under outcomes. The existing procedure required independent line pricing but did not force the model to extract the bookmaker's implied remaining-goal distribution, compare adjacent lines, or quantify when an over price was unusually generous.

## Active rules

### 1. Discrete remaining-goal distribution

For every live total assessment, estimate the probability of each relevant remaining-goal bucket through regulation stoppage time:

- `P0`: no additional goals;
- `P1`: exactly one additional goal;
- `P2`: exactly two additional goals;
- `P3`: exactly three additional goals;
- `P4+`: four or more additional goals.

Do not price an over from a single expected-goals mean alone. The distribution must incorporate score state, effective time remaining, lineups, substitutions, cards, chance quality, persistence, competition incentives, aggregate state, and likely stoppage time.

### 2. Exact settlement-weight expected value

For each displayed Asian total, calculate expected value across all settlement outcomes rather than using only `1 / odds`.

Let `o` be decimal odds and let each goal bucket have settlement profit `r_k(o)` per unit staked. Then:

`EV(o) = sum(Pk * r_k(o))`

The fair price is the value of `o` for which `EV(o) = 0`.

Examples for an over on additional goals:

- Over 0.75: `EV = (o-1) * (P2+ + 0.5*P1) - P0`;
- Over 1.25: `EV = (o-1) * P2+ - P0 - 0.5*P1`;
- Over 1.75: `EV = (o-1) * (P3+ + 0.5*P2) - (P0+P1)`;
- Over 2.0: `EV = (o-1) * P3+ - (P0+P1)` with `P2` a push;
- Over 2.25: `EV = (o-1) * P3+ - (P0+P1) - 0.5*P2`.

Use the equivalent exact payout matrix for every other quarter, half, or whole line.

### 3. Same-line no-vig market reference

When both over and under prices are visible at the same line, calculate a quick no-vig market reference:

- `q_over = 1 / over_odds`;
- `q_under = 1 / under_odds`;
- `p_over_market = q_over / (q_over + q_under)`;
- `p_under_market = q_under / (q_over + q_under)`.

For whole-goal and quarter-goal lines, this normalized pair is only a market reference because pushes, half wins, and half losses require the full settlement distribution.

### 4. Adjacent-line coherence check

Compare all available adjacent lines, normally the nearest quarter, half, and three-quarter totals.

- Infer the goal distribution implied by the neighboring prices when enough lines are available.
- Use a Poisson or state-adjusted count model only as a consistency benchmark, not as the final probability model.
- Check that implied over probabilities decrease coherently as the total rises.
- Flag a line when its offered over odds are materially longer than both the model fair price and the neighboring-line structure imply.
- Reprice every changed line independently; do not transfer value from one total to another.

### 5. Over-price value fields

Whenever an over is considered, report:

- offered over odds;
- model fair odds;
- same-line no-vig market reference when available;
- exact expected ROI after settlement weighting;
- offered-price premium versus model fair price;
- adjacent-line comparison;
- the most efficient over line and the reason it is preferred.

Use the label `over-price value` only when the offered price is longer than the model fair price and the edge survives uncertainty, settlement, and state-transition adjustments.

### 6. High odds are not evidence

A large decimal price does not create value by itself. An over remains `NO BET` when the long price correctly reflects weak chance quality, limited time, compact defending, aggregate-reset risk, missing data, or poor persistence.

The active five-percentage-point official edge threshold remains in force. Stricter market-specific and knockout thresholds still apply.

### 7. Adjacent-line selection

Price each available over line separately. Select the line with the best uncertainty-adjusted expected value, not automatically the highest odds.

When adjacent lines have expected values within approximately two percentage points, prefer the line with better protection in the most likely adverse goal bucket. This extends the Bragantino adjacent-line review without treating that single result as proof of a universal preference.

### 8. Required output and tags

For total-goal recommendations where an over is available, include an `Over-price check` section.

Use tags when applicable:

- `over-price-check`;
- `market-implied-distribution`;
- `adjacent-line-value`;
- `settlement-weighted-ev`.

## Expected benefit

Detect overs whose prices are too long relative to the modeled goal distribution, reduce an unintended bias toward unders after quiet periods, and improve line selection across quarter, half, and whole totals.

## Possible downside

Live prices can move before the calculation is complete. Sparse adjacent lines, bookmaker margin, state changes, and Poisson misspecification can create false dislocation signals. The faster live format should therefore show the actionable decision first and the pricing table immediately afterward.

## Review threshold

Review after 20 fully documented football over opportunities assessed under v0.2.7 or after 10 settled official football over wagers, whichever occurs first. Track model fair odds, offered odds, no-vig market reference, expected ROI, adjacent-line residual, closing-line quality, settlement bucket, calibration, and realized ROI.
