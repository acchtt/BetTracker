# MODEL RULES — LEAGUE OF LEGENDS v0.3.38

**Status:** Active delta  
**Effective date:** 2026-08-08 17:46 UTC+7  
**Supersedes:** v0.3.37 only where stated

## Purpose

Correct a confirmation-lag problem in live favorite kill-handicap pricing. A model that waits for the favorite's next visible kill conversion can become structurally correct but commercially too late because the bookmaker may immediately move the handicap several kills or collapse the price. v0.3.38 therefore adds a mandatory **Favorite Structural Margin-Expansion Ladder** that evaluates smaller negative kill handicaps before the next conversion when the favorite already owns aligned structural and neutral-objective control.

This is the favorite-side mirror of the Objective-Control Handicap Veto. It does not weaken the veto, margin arithmetic, no-chasing, executable-price, or circuit-breaker rules.

## 1. Pre-conversion favorite margin-expansion scan

When the current-map leader has a verified package of:

- a meaningful gold lead;
- meaningful neutral-objective control or pressure (dragons/soul point, Grubs/Herald, Baron/Elder, or equivalent);
- structural conversion or credible structure-conversion access;
- at least one validated way to force the next contest or base-defense sequence;

then the model must scan the **favorite negative kill-handicap ladder before waiting for the next kill conversion**.

Do not require the kill margin itself to expand first. Structural state may lead kill-margin repricing.

## 2. Mandatory ladder construction

For every displayed favorite negative handicap that is plausibly relevant, calculate:

1. current kill margin;
2. exact final margin required;
3. exact additional future net kills required;
4. next two forced or highly probable contest sequences;
5. objective-to-structure/base cascade potential;
6. opponent return-kill channels and whether they are repeatable;
7. low / central / high future net-kill margin expansion;
8. fair price and minimum acceptable execution price for that exact line.

The goal is to identify the **smallest negative line that is already supported by current structural evidence**, not to wait for the market to print a larger line after the favorite converts again.

## 3. Structural Margin-Expansion Trigger

A favorite handicap may be promoted before another kill swing only when all of the following are true:

- gold lead and objective control are aligned;
- at least one meaningful structure has already fallen **or** the leader has a verified immediate structure-conversion route from current objective pressure;
- the next objective or base-defense sequence is likely to force the trailer into contesting prepared terrain;
- the favorite has at least two credible kill/conversion channels across those sequences;
- the trailer lacks enough repeated contest/trade evidence to neutralize the expected margin expansion;
- the exact displayed line has sufficient arithmetic cushion under the conservative branch;
- odds meet the model floor and the line is executable now.

This trigger supports **pre-conversion entry at a smaller line**. It does not justify a large handicap merely because the leader is likely to win.

## 4. Preferred-line rule

When several favorite negative handicaps are available, prefer the **least aggressive line that still carries a qualifying edge**.

Example logic:

- if -6.5 and -8.5 are both offered and the model's conservative margin branch supports -6.5 but only the central branch supports -8.5, prefer -6.5 even if -8.5 pays more;
- a -10.5 or larger line still requires strong independent margin evidence under retained rules;
- do not transfer a TAKE from one handicap line to another without fresh arithmetic.

## 5. Pre-commitment price ladder

Before the next major contest, the model should define one or more **action thresholds** for the currently displayed favorite lines when sufficient data exist.

Example format:

- `TAKE HLE -6.5 at >=1.78`
- `TAKE HLE -8.5 at >=1.88 only if current structural state remains unchanged`
- `PASS HLE -10.5 unless terminal/base-control or additional margin evidence appears`

These are line-specific thresholds, not standing orders. A material state change requires reassessment.

## 6. No-chase after conversion

If the favorite converts the next fight/objective and the bookmaker moves the line beyond the pre-committed acceptable ladder:

- do not chase the new larger handicap solely because the state thesis was confirmed;
- reprice the new line from scratch;
- a move from a previously acceptable smaller line to a materially larger line is not an improvement;
- confirmation can reduce state uncertainty while simultaneously destroying price value.

The correct result may therefore be `PASS — EDGE MOVED WITH STATE` even when the favorite's thesis strengthened.

## 7. Relationship to Objective-Control Handicap Veto

The two rules are asymmetric mirrors:

- **Positive-handicap side:** aligned opponent gold + objective control is a veto unless the underdog shows affirmative repeated contest/return-kill evidence.
- **Favorite negative-handicap side:** the same aligned gold + objective + structural package requires an early scan for margin-expansion value before the kill margin visibly widens.

Do not simultaneously claim that structural control invalidates the underdog handicap while refusing to evaluate any smaller favorite handicap until after another conversion.

## 8. T1 vs HLE Game 3 calibration example

At 19:31, HLE led T1 7-4 kills with approximately +3.3k gold, 3-0 towers, 3-0 dragons, 3 Grubs, no Baron and no inhibitor.

Correct v0.3.38 interpretation:

- T1 +10.5: PASS under Objective-Control Handicap Veto;
- HLE -10.5: still not automatically a TAKE because HLE required +8 additional future net kills and lacked Baron/base access;
- however, the model should have actively scanned **smaller HLE negative lines such as -6.5/-7.5/-8.5** and set executable price thresholds before the next conversion;
- waiting for another HLE conversion without a pre-priced ladder risked becoming several kills late to the market.

Final was HLE 28-13 at 34:49. The final result is calibration evidence only; it does not retroactively convert any unavailable/unoffered line into a model win.

## 9. Retained v0.3.37 enforcement

All v0.3.37 mandatory execution controls remain active:

- full checklist before every live verdict;
- TAKE / PASS / HOLD exact first-line format;
- fail closed on missing decision-critical data;
- recorded position separated from thesis state;
- executable-price confirmation before a TAKE becomes recorded;
- total kills and duration priced independently;
- settlement verification;
- logging/plugins after live verdict;
- circuit-breaker actual exposure 0u;
- no correlated same-map add-ons and no chasing.

Where this delta conflicts with earlier rules, **v0.3.38 controls**.
