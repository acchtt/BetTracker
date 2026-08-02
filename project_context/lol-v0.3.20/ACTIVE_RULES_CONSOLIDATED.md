# Active LoL Betting Rules — Consolidated v0.3.20

## Status and bankroll

- Active model: **LoL v0.3.20**
- 1u = **1,000,000 VND**
- Standard stake: **0.25u = 250,000 VND**
- Maximum probation exposure: **0.25u per map**
- Minimum accepted odds: **1.60**
- No correlated same-map add-ons during probation.
- A wager is official only after explicit user confirmation.
- Duration Overs are not eligible for official probation wagers 7–10.
- Probation remains **6/10, 2–4, −665,250 VND / −0.66525u**; wager 7 remains unplaced.

## Exact verdict taxonomy

- `OFFICIAL BET`: model-approved, not placed until user confirmation.
- `LEAN`: formal unplaced recommendation and shadow-graded snapshot.
- `LEAN — REPAIRED WATCH`: one permitted lean-level re-entry after strict repair; never official by itself.
- `WATCH ONLY`: informational candidate, excluded from the lean record.
- `FORCED PICK`: hypothetical forced-choice answer, excluded from the lean record.
- `NO BET`: rejected market.

Do not use ambiguous phrases such as closest watch or secondary lean without an exact verdict label.

## Live-state hierarchy and verification

Prioritize gold distribution, towers/map access, objectives, items and recall timing, waves, summoners/ultimates/vision, current composition function, then kills.

Before a new live lean after a prior snapshot, verify which team secured every intervening kill, tower, and objective and whether gold direction improved or deteriorated. If material score ownership is uncertain, return `NO BET — STATE DIRECTION UNVERIFIED`.

At or after 15:00, decision-critical item strength is mandatory. Do not guess unclear item icons.

## Moneylines

Retain the existing hard/soft confirmation hierarchy. Add an objective-conflict veto when the proposed side:

- trails by at least two dragons or the opponent is on soul point;
- holds only a small gold or tower edge;
- faces an item-qualified protected carry or superior front-to-back scaling; and
- has not shown control of the next objective setup.

A lean under objective conflict requires a durable repair: post-reset fight win, next-objective denial/capture, roughly 3k distributed gold lead, two-tower lead with maintained access, or clear primary-carry item advantage plus reliable frontline.

## Series -1.5 maps

Require confirmed lineup and roles, no unresolved substitution or debut uncertainty, cross-map depth, and a quality edge across multiple phases. A materially adverse Game 1 draft expires a pre-series sweep thesis even if the favorite remains favored to win the series.

## Positive underdog kill handicaps

The v0.3.19 anti-line-chasing rules remain active:

- changed lines preserve thesis history;
- widening by at least 2 kills triggers a warning;
- warning plus two adverse state, market, structure, conversion, or carry-function signals triggers `NO BET — LINE-CHASING VETO`;
- model a fight, immediate objective conversion, and the next forced sequence;
- a larger cushion is not positive evidence by itself.

A smaller positive handicap after genuine underdog improvement is not line chasing and may be reassessed independently.

## Tiered repair

Official re-entry still requires two new qualifying structured-fight conversions plus stabilization, restored item-qualified function, and explicit repair.

One lean-only `LEAN — REPAIRED WATCH` is permitted per map when all are present:

1. one new qualifying structured-fight conversion after withdrawal;
2. gold deficit improves by roughly 1.5k or returns within roughly 2k;
3. tower parity, objective compensation, or restored wave access;
4. an item-qualified primary carry demonstrates damage;
5. the favorite cascade consumes less than half the cushion;
6. the original failure is explicitly repaired.

## Kill totals

Kill Overs still require observed two-sided conversion or a demonstrated high-velocity window, functioning damage, sufficient mandatory contests, feasible remaining kills, and known decision-critical items after 15:00.

For kill Unders:

- wait until the first meaningful objective cycle or 8:00, whichever is later, except extreme low-kill/low-engage cases;
- calculate line-specific headroom and whole kills required to lose;
- require a three-kill buffer above the conservative remaining fight budget;
- model Baron, soul, Elder, and base-defense contests;
- select at most one Under line per synchronized state;
- prefer at least two extra kills of protection when odds remain 1.80 or higher unless the lower line has documented superior expected value.

## Tracking

Report separately:

1. explicit `LEAN` snapshots;
2. correlated thesis-level outcomes;
3. `WATCH ONLY` and `FORCED PICK` calibration outcomes;
4. official placed wagers.

A winning settlement produced by an incorrect state read remains a process failure.

## Fast output

Return verdict first. For actionable recommendations, include market, odds, stake, target floor, hard floor, synchronized state, and `not placed` status.
