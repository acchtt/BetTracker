# Model Changelog Addendum — LoL v0.3.7

**Date:** 2026-08-01  
**Status:** Active immediately  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.7.md`

## Sport and markets affected

League of Legends live positive kill handicaps, comeback moneylines, kill totals, duration, and objective markets.

## Triggering evidence

- Team Heretics vs Vitality Game 2: the model treated layered engage and utility as adequate damage conversion despite insufficient sustained output and frontline kill speed against a stronger multi-carry composition.
- Movistar KOI vs Shifters Game 2: SHFT +7.5 kills at 1.927 lost. The model described Naafiri, Orianna, and Ezreal as three credible damage sources without verifying current item readiness, first-target access, frontline kill speed, carry uptime, or the soul-point objective timer.
- The same process error therefore occurred twice and requires a hard veto rather than another soft reminder.

## Previous rule

The model required real damage conversion and distinguished engage from damage, but the rule remained too qualitative. Nominal champion roles and future scaling could still be counted as current functional damage, allowing wide positive handicaps to override a composition-level failure.

## New rule

- Replace nominal damage-source count with a current functional-damage classification.
- Count a source only when it passes target access, frontline kill speed, carry uptime, item readiness, damage-profile, and survival checks.
- Require two current functional damage sources, including reliable sustained damage or demonstrated frontline kill speed, for an official positive kill-handicap recommendation.
- Activate a repeated-error veto when the underdog has zero or one functional source, the opponent has multiple reliable threats plus access denial, and a forced objective arrives before the underdog's next breakpoint.
- Lines from +7.5 through +10.5 cannot override the veto by price or width alone.
- Clear the veto only after two independent observed damage conversions.
- Compare the next forced objective timer with the underdog's item timing; soul point and Baron pressure downgrade theoretical future scaling.
- Require an explicit frontline-interaction table and functional-damage block in every positive live kill-handicap recommendation.
- Missing information requires `NO BET`.

## Expected benefit

Prevent repeated selection of apparently protected underdog kill handicaps when the underdog cannot return meaningful damage during forced fights. Improve distinction between engage, utility, future scaling, poke, conditional burst, and current sustained conversion.

## Possible downside

The model will pass more wide underdog handicaps and may miss cases where a composition unexpectedly reaches its item window or wins through isolated picks despite weak sustained damage.

## Review threshold

Review after the next 10 settled synchronized LoL wagers. Track functional source count, observed conversions, objective timer versus item timing, final kill margin, closing-line quality, and net VND/units.
