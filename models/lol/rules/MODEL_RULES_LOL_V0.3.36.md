# MODEL RULES — LEAGUE OF LEGENDS v0.3.36

**Status:** Active delta  
**Effective date:** 2026-08-07 23:25 UTC+7  
**Supersedes:** v0.3.35 only where stated

## Purpose

Apply the user's explicit instruction to remove the LoL **per-map exposure cap** from now on while preserving the model's analytical discipline, default stake sizing, correlation controls, circuit breaker, and placement-confirmation rules.

## 1. Per-map exposure cap removed

1. The prior LoL rule limiting total exposure to **0.25u per map** is removed effective immediately.
2. There is **no hard aggregate per-map exposure ceiling** for LoL recommendations after this change.
3. This change applies to shadow analysis during the circuit breaker and to official LoL betting if/when official betting is later restored.
4. During the active circuit breaker, actual exposure remains **0u**. Removal of the cap changes only how many independently justified shadow positions may be logged on the same map.

## 2. Stake sizing is not globally increased

1. The standard/default position size remains **0.25u** unless a separate model rule or explicit user instruction supports another size.
2. Removing the aggregate map cap does **not** authorize automatic stake escalation, martingale behavior, loss chasing, or larger sizing solely because multiple markets are available.
3. Minimum accepted odds remain **1.60** unless a market-specific rule requires a higher price.
4. Official wagers, if restored later, still require explicit placement confirmation before becoming official ledger exposure.

## 3. Independent-market and correlation controls remain active

1. Total Kills, Duration, map moneyline, and kill handicap remain analytically separate market families and must each receive an independent verdict.
2. The prior **no correlated same-map add-on** rule remains active. Removing the exposure cap does not make correlated positions automatically eligible.
3. A second or later same-map position is allowed only when it has a materially distinct thesis, synchronized current state, qualifying price, and does not violate the correlation/chasing controls.
4. Do not use the absence of an exposure cap as a reason to convert a `PASS`, `WATCH`, or weak edge into a recorded position.
5. Do not chase a failing position with a wider or directionally correlated line.

## 4. Circuit breaker unchanged

1. The circuit breaker still requires **20 complete reviewed shadow maps**.
2. Official LoL betting remains paused through CB-20 and does not resume automatically afterward.
3. Explicit user restoration is still required after CB-20.
4. Actual circuit-breaker exposure/P&L remains **0u / 0 VND**.

## 5. Interpretation example

If one map already has a recorded Total Kills position, a separate kill-handicap or moneyline position is no longer blocked merely because aggregate simulated map exposure would exceed 0.25u. It must still pass its own model edge, price, state-synchronization, and correlation checks.

Conversely, if a candidate is rejected because its margin requirement is too extreme, its edge is insufficient, or it is materially correlated with the existing position, removing the exposure cap does not change that rejection.

## 6. Retained rules

All non-conflicting v0.3.35 through v0.3.26 rules remain active, including verdict-first responses, compact presentation with full internal rule checks, settlement verification, recorded-position versus thesis-state separation, current-map hard-evidence reset, duration corrections, positive-handicap confirmation corrections, dominance override, late objective-density reserves, and connected-stack synchronization.
