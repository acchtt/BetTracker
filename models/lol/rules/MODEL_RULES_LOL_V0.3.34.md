# MODEL RULES — LEAGUE OF LEGENDS v0.3.34

**Status:** Active delta  
**Effective date:** 2026-08-06  
**Supersedes:** v0.3.33 only where stated

## Purpose

Extend the official-wager circuit breaker because the first four-map calibration block produced lackluster results and exposed unresolved duration and late-game projection errors.

## 1. Eight-map circuit breaker

1. The circuit breaker now requires **eight complete reviewed maps** in total.
2. The current WE vs AL Game 1 remains shadow map 4 and does not count as complete until the final map state and post-map review are recorded.
3. After map 4 is completed and reviewed, maps 5 through 8 are also shadow-analysis only.
4. During all remaining circuit-breaker maps:
   - actual stake and exposure are 0u;
   - no market may be labeled `BET`, `OFFICIAL BET`, or an official candidate;
   - logged shadow leans default to a nominal simulated stake of 0.25u unless explicitly stated otherwise;
   - no shadow result changes the official ledger or probation;
   - exact settlement and written post-map review remain mandatory.
5. Official recommendations do not resume automatically after map 8. Restoration still requires explicit user authorization after all eight maps are settled and reviewed.

## 2. Calibration block for maps 5 through 8

For the next four complete maps after WE vs AL Game 1:

- Default to **one primary shadow lean per map**.
- A second shadow lean is allowed only when it expresses a materially different market thesis and is supported by a current synchronized state.
- Correlated duration and kill-total positions must be explicitly identified during review.
- No lean is required; `NO LEAN` is acceptable when edge is insufficient.

## 3. Draft-only duration restriction

For maps 5 through 8:

- A pregame or 0:00 duration Under may not be promoted from theoretical draft acceleration alone.
- Before logging a duration Under, require at least one synchronized live snapshot showing actual conversion evidence through gold, towers, Grubs, dragons, tempo, or role-gold breadth.
- A duration Over near the current clock still requires at least a two-minute point-estimate buffer above the line.
- Opposing stall, waveclear, disengage, counter-engage, and base-defense tools must be counted explicitly before any duration lean.

## 4. Evidence timing integrity

Every live review must distinguish:

- entry-time evidence;
- later confirming or contradicting evidence;
- settlement evidence.

Later objectives, including Grubs, dragons, Baron, Elder, towers, or inhibitors, must not be retroactively presented as part of the original entry rationale.

## 5. Retained controls

All v0.3.33 controls remain active:

- recorded position state and current thesis state are separate;
- kill-Under invalidation thresholds;
- late objective-density kill reserve;
- Baron-expiry interpretation;
- soul-adjusted moneyline control;
- deciding-map volatility modifier;
- verdict-first response order;
- item verification remains suspended;
- duration markets remain official-ineligible through wager 20.

## Review requirement after map 8

Produce a combined review covering:

- shadow record and nominal simulated P&L;
- performance by market family;
- entry-time versus live-update errors;
- calibration quality by game phase;
- whether any market family is suitable for limited restoration;
- whether the circuit breaker should end, narrow, or continue.
