# Football Model Changelog — v0.2.17

**Date:** 2026-08-01  
**Status:** Active immediately  
**Detailed rule:** `MODEL_RULES_FOOTBALL_V0.2.17.md`

## Sport and markets affected

Football live full-match totals after a red card, especially unders involving a materially stronger team chasing against ten players.

## Triggering evidence

Laos vs Philippines: Laos led 1-0 and were reduced to ten men at 14'. At approximately 33', Philippines had about 77% possession, six corners, eleven box touches and only 0.24 xG. The model recommended Under 3.5 at 1.89; the user executed at 1.87 for 0.30u. Philippines scored three times and the wager lost. The model over-weighted accumulated low xG and under-weighted forward pressure, defensive fatigue, own-goal/deflection risk and sustained attacking incentives.

## Previous rule

v0.2.16 required active under pricing in persistent low-event states and correctly separated sterile corners from productive pressure. It did not sufficiently distinguish ordinary sterile pressure from cumulative pressure by a stronger eleven-player side attacking ten men for a long remaining period.

## New rule

- Pre-card evidence expires immediately after a red card.
- Apply a hard `NO BET` veto to unders when a materially stronger team has the numerical advantage, is trailing or level, has at least 35 minutes plus stoppage time remaining, and is sustaining territorial pressure.
- Low xG or zero big chances cannot clear the veto alone.
- Price fatigue, own goals, deflections, penalties, rebounds, blocked shots, repeated crosses, set pieces and stoppage-time expansion.
- Require two synchronized post-card snapshots before any fresh recommendation.
- A goal by the numerically stronger chasing side escalates the scoring branch and expires the earlier under thesis.
- Red-card unders normally require at least three-goal protection or material whole-goal push protection and are capped at `LEAN — SMALL` unless incentives clearly decline.
- Official football cap remains 0.25u; the extra 0.05u on the Laos–Philippines execution is user-added exposure.

## Expected benefit

Reduce false live unders caused by treating backward-looking xG as sufficient evidence when numerical superiority, strength mismatch, sustained pressure and defensive fatigue create a large forward scoring tail.

## Possible downside

The veto may miss some profitable unders where a stronger side dominates harmlessly against a compact ten-man block. This cost is acceptable until post-card calibration improves.

## Review threshold

Review after the next 12 red-card live-total assessments. Track the card minute, score at card, team-strength prior, post-card pressure, line protection, odds, recommendation, final score, closing line and standardized 0.25u result.