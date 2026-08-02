# Active LoL Betting Rules — Consolidated v0.3.19

## Status and bankroll

- Active model: **LoL v0.3.19**
- 1u = **1,000,000 VND**
- Standard stake: **0.25u = 250,000 VND**
- Maximum probation exposure: **0.25u per map**
- Minimum accepted odds: **1.60**
- No correlated same-map add-ons during probation.
- A wager is official only after explicit user confirmation.
- Unplaced leans remain outside official P/L and probation.
- Verdicts begin with **OFFICIAL BET**, **LEAN**, or **NO BET**.
- Use **EXPIRED — REASSESSMENT REQUIRED** after a material state or price change.

## Live-state hierarchy

Prioritize gold and distribution, towers and map access, objectives, items and recall timing, wave state, summoners/ultimates/vision, composition function, then kills as context.

Kills plus their immediate gold are one correlated evidence cluster. A larger betting line is not evidence that the underlying thesis improved.

## Draft and item gates

Evaluate role fit, lane priority, independent damage channels, damage delivery, frontline, engage/follow-up, peel, waveclear, side lanes, objective setup, execution burden, and single-point-of-failure risk.

Before 15:00, a full item panel is optional unless an item is decision-critical. At or after 15:00, decision-critical item strength is mandatory. Do not guess unclear items.

## Moneyline

After the opening state, require one hard confirmation or two independent soft confirmations with no substantial quality disadvantage and no unresolved conversion concern. Against a substantial quality gap, at least one hard confirmation is required even for a lean.

Official underdog moneylines retain the stricter multi-confirmation gate.

## Positive underdog kill handicap — functional gate

For any lean, verify:

- item-qualified functioning return damage when required;
- credible target access, counter-engage, cleanup, or return-damage routes;
- no unresolved carry, lane, or role collapse;
- no structural or objective state forcing repeated entries into prepared terrain;
- a conservative fight-cascade stress test.

Official promotion requires two qualifying structured-fight conversions plus all functionality and structure gates.

## v0.3.19 anti-line-chasing rule

Each map has one active kill-handicap thesis. Changed lines are independently priced but do not reset thesis history.

Trigger a **line-chasing warning** when a positive-underdog handicap widens by at least 2.0 kills from the active lean.

Return **NO BET — LINE-CHASING VETO** when that warning is accompanied by at least two of:

- underdog moneyline odds worsen by at least 0.40 or implied win probability falls by at least 5 percentage points;
- gold position worsens materially, including a new or expanded deficit of roughly 1,500 gold or more;
- tower, dragon, soul-point, Herald, Baron, wave-access, or vision control shifts toward the favorite;
- the underdog loses a structured fight or fails to convert an earlier lead;
- kill production is concentrated in jungle/frontline roles while primary carries remain unproven.

A wider line, higher odds, one isolated kill, or one opponent error cannot cancel this veto.

## Revision cap

Before a full withdrawal-and-repair sequence, a positive-underdog handicap thesis may receive one initial lean and at most one non-material reassessment while the state is substantially unchanged.

A 2.0-kill line move, material moneyline move, or material state event ends the price-only reassessment allowance.

## Fight-cascade stress test

Model:

1. one clean or near-clean favorite fight;
2. the immediate objective/tower/Baron conversion;
3. the next forced setup or base-defense sequence before stabilization.

Return `NO BET` when a plausible cascade consumes at least half the remaining cushion and the underdog lacks a credible reset, waveclear, cross-map trade, or protected-carry stabilization path. Return `NO BET` automatically when the cascade can consume most of the cushion.

## Return-kill quality

Separate primary-carry damage from kills produced by low-economy engage champions or isolated skirmishes. If primary carries remain unproven and most kills are concentrated in jungle/frontline roles, downgrade a marginal positive-handicap lean to `NO BET`.

## Same-map repair

A withdrawn or vetoed thesis is locked. Re-entry requires:

1. two new qualifying structured-fight conversions;
2. structural or objective stabilization;
3. restored item-qualified damage or frontline function;
4. explicit proof that the original failure condition was repaired.

## Kill totals and duration

Kill Overs require observed two-sided structured-fight conversion or a demonstrated high-velocity window, functioning damage on both sides, enough mandatory contests, feasible remaining kills, and decision-critical items at or after 15:00.

Kill Unders require headroom, conservative fight budget, safety buffer, and explicit trailing-team return-kill analysis.

Duration Overs are not eligible for `OFFICIAL BET` during probation wagers 7–10.

## Probation

- Completed: **6/10**
- Record: **2–4**
- Net: **−665,250 VND / −0.66525u**
- Wager 7 remains unplaced.
- Selectivity is mandatory; prefer `NO BET` over a marginal pass.

## Fast output

Return the verdict first. For vetoes, state the first failed gate immediately. For actionable recommendations, state market, odds, stake, target floor, hard floor, synchronized state, and `not placed` before secondary analysis.
