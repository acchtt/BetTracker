# League of Legends Model Rules v0.3.3

**Effective date:** 2026-07-29  
**Status:** Active operational restriction and evaluation rule  
**Related documents:** `LOL_BETTING_PROCEDURE.md`, `MODEL_CHANGELOG.md`, and `ledger.json`

## Scope

This rule applies to live League of Legends underdog positive kill handicaps. It supplements the v0.3.2 asymmetric kill-margin and clean-close model.

## Triggering review

Nongshim RedForce defeated KIWOOM DRX 28-13 in Game 1. KRX +14.5 kills was placed at 1.872 for 0.25u and lost by 0.5 kills because the final deficit was 15.

The analyzed snapshot was KRX 8-13 NS at 12:23, KRX down approximately 3.2k gold, towers 0-0, KRX with three Void Grubs and NS with first dragon. The displayed candidate was +14.5 at 2.082, but execution occurred at 1.872 without a fresh synchronized map-state snapshot.

From the analyzed state, future kills were NS 15-5 KRX, the exact +10 future net-kill swing required to defeat the handicap. The model underweighted repeated one-sided objective fights, chase kills and base-defense deaths.

## Active rules

1. **Synchronized-state gate**
   - Any changed line, price, kill, tower, neutral objective or major item event expires the prior recommendation.
   - A changed price cannot be called independently reassessed without a fresh state showing clock, kills, gold, towers and objectives.
   - Execution at a different price or after a state change must be tagged `unsynchronized-execution` or `stale-state-execution`.

2. **Early-map information gate**
   - Before 15:00, or before the first tower plus at least two meaningful neutral-objective results, an underdog positive kill handicap cannot be `OFFICIAL BET` unless role-level gold, major completed items, recent fight-trade quality and next-objective setup are visible.

3. **Handicap-ladder stop**
   - Do not repeatedly follow +5.5, +10.5, +12.5, +14.5 or similar larger lines while the favorite's structural position keeps improving.
   - After two consecutive worsening synchronized states, return `NO BET` until a stabilization event.

4. **Stabilization event**
   - A stabilization event requires a clearly won or traded full fight, a tower or major objective, a material gold-gap reduction, a documented item breakpoint, or verified next-objective positional control.

5. **Future net-kill stress test**
   - Calculate the adverse future net kills required to lose the handicap.
   - When that number is 10 or fewer and the favorite leads by at least 2.5k gold before 15:00 with reliable engage, chase or global reinforcement, flag a material `runaway-state` tail.
   - Stress-test ordinary trades, one-sided objective fight plus chase, and objective fight followed by base-defense deaths.

6. **Objective and scaling interpretation**
   - Void Grubs are tower-pressure assets, not immediate kill-floor protection.
   - “Better scaling” protects a kill handicap only when the team can realistically reach the relevant item breakpoints with functional frontline, formation and damage access.

7. **Decision threshold**
   - A live underdog positive kill handicap requires all information gates plus at least a seven-percentage-point uncertainty-adjusted edge over breakeven for `OFFICIAL BET`.
   - Missing role gold, items, vision or next-objective setup blocks official status.

8. **Current-series restriction**
   - For the remainder of Nongshim RedForce vs KIWOOM DRX on 2026-07-29, positive underdog kill handicaps are `NO BET`.
   - Other markets require a new completed draft and independent pricing.

## Review threshold

Review after the next 10 fully documented live underdog kill-handicap assessments, with at least five official wagers if available. Split results by official versus shadow, synchronized versus unsynchronized execution, pre-15 versus post-15 entry, adverse future-net-kill requirement, runaway-state flag and stabilization-gate status.
