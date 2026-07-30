# LoL Model Changelog Addendum

## v0.3.2 — 2026-07-31

### Execution synchronization, evidence gates, and performance attribution

**Status:** Active evaluation rule  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.2.md`

## Reviewed sample

Fourteen confirmed LoL wagers from the start of the dedicated chat on 2026-07-29 through JD Gaming vs Thunder Talk Gaming Game 3 on 2026-07-30.

Overall record: 8 wins, 6 losses, +329,125 VND, +0.65825u.

The aggregate result concealed a material process split:

- `model-approved exact`: 2-1, +384,500 VND, +0.769u;
- `synchronized lean execution`: 4-1, +375,000 VND, +0.75u;
- `user-executed deviation`: 2-4, -430,375 VND, -0.86075u.

This sample remains too small to validate market probabilities, but it is sufficient to tighten deterministic execution and evidence rules.

## What worked

- KT Rolster Game 1 moneyline at 3.196: the post-draft anti-dive and counter-engage read created a direct moneyline edge at a large price.
- Dplus KIA Challengers series moneyline at 2.88: confirmed rosters and a price well above the minimum produced a robust series position.
- BFX vs DNS Under 22.5 kills: low fight pace, controlled gold state, and wave-clear supported the selected total rather than relying on kills alone.
- DK and DKC positive kill handicaps won when the underdog had credible engage, protection, damage access, and realistic fight-trading tools.
- The clean same-line execution group performed better than the unsynchronized group, supporting strict state and price discipline.

## What failed

- KRX series moneyline: the model was too aggressive relative to Nongshim's early-game and lead-conversion strength and was not robust to a map-to-map substitution.
- KRX +14.5 kills: the model followed the positive-handicap ladder through a worsening state and approved a changed price without a synchronized snapshot.
- BLG vs LGD Game 1 Under 37.5 kills: the executed line and state differed from the assessed wager, and the stake doubled to 0.5u.
- BLG vs LGD Game 2 Over 32 minutes: scaling and zero towers were overweighted while fast engage, objective acceleration, and a clean close path were underweighted.
- DK Game 2 moneyline: a move from 2.194 to 1.993 materially changed breakeven probability and was not freshly assessed.
- TT +6.5 kills: theoretical tank shredding and late kill trading were overweighted against a materially stronger JDG side with easier execution and clean-conversion ability.
- DK Game 3 moneyline won, but the exact state and price were unsynchronized; the result cannot validate the model.

## Previous rule

The model required changed-line reassessment, prioritized game state over kills, and used a 0.25u standard stake. In practice, exact performance attribution was inconsistent, some changed prices or lines were carried forward without a fresh state, duration overs lacked a hard stall-evidence gate, and series roster robustness was not always stress-tested.

## New rule

- Classify every placed LoL wager as `model-approved exact`, `synchronized lean execution`, or `user-executed deviation`.
- Report results separately by attribution tier.
- Enforce a hard execution lock on event, map, market, line, state, cutoff price, stake, and correlated exposure.
- Reassess every changed line, regardless of whether it appears more favorable.
- Require a fresh assessment after a move of at least 0.10 decimal odds or three implied-probability points.
- Keep the LoL evaluation cap at 0.25u; larger stakes are deviations and excluded from model-approved ROI.
- Strengthen positive underdog kill-handicap gates with role gold, items, target access, objective setup, future net-kill stress testing, and a two-worsening-state stop.
- Require at least two independent stall indicators for official duration overs.
- Require series-moneyline robustness across realistic side, draft, and substitution branches.
- Rank moneyline, kill handicap, total kills, and duration by script fit, edge, protection, execution robustness, and exposure before selecting a market.

## Expected benefit

Reduce losses caused by stale state, changed lines, shortened prices, and oversized stakes; improve duration and positive-handicap calibration; preserve the strong parts of post-draft moneyline and low-event total analysis.

## Possible downside

The stricter rules will create more `NO BET` decisions, may miss prices during rapid live movement, and may reject some profitable user deviations. These costs are acceptable because deviation outcomes cannot be reliably attributed to the model.

## Review threshold

Review after the next 10 settled LoL wagers classified as `model-approved exact` or `synchronized lean execution`. Separate results by market, timing, team-strength alignment, synchronization quality, and market-script fit.