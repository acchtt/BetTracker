# MODEL RULES — LEAGUE OF LEGENDS v0.3.39

**Status:** Active delta  
**Effective date:** 2026-08-08 20:37 UTC+7  
**Supersedes:** v0.3.38 only where stated

## Purpose

Correct inconsistent kill-handicap pricing, especially positive handicaps recommended from draft resilience alone. v0.3.39 separates **pregame, early-live, and mid/late-live handicap gates**, requires an explicit cover-probability / break-even comparison, adds a composition-driven cascade-tail penalty, requires handicap width to be evaluated relative to projected total kills, and upgrades return-kill evidence from qualitative champion-kit claims to an evidence hierarchy.

v0.3.38 Favorite Structural Margin-Expansion Ladder and the Objective-Control Handicap Veto remain fully active.

## 1. Phase separation is mandatory

Kill handicaps are not one homogeneous market. Before pricing any line, classify the state:

### A. Pregame / 0:00

Hard current-map evidence does not yet exist. Draft, side and team priors are allowed, but **draft resilience alone cannot justify a TAKE on a positive kill handicap**.

Pregame positive handicaps are **high-friction** and require all of:

- explicit projected final total-kill range;
- explicit projected final kill-margin distribution / low-central-high margin branches;
- break-even probability from the offered odds;
- modeled `P(cover)` at least **5 percentage points above break-even**;
- no major unpriced favorite cascade-tail warning;
- no reliance on the verbal logic that a line is simply “large” or “safe.”

If any element is missing => `PASS` or `HOLD`.

### B. Early live

Early live means meaningful current-map evidence exists but the map has not yet produced enough objective/structural cycles to establish repeated execution.

A handicap TAKE requires:

- synchronized gold/kills/lanes/objective state;
- projected total-kill range and final-margin branches;
- explicit `P(cover)` at least **4 percentage points above break-even**;
- observed evidence supporting or weakening the draft thesis;
- cascade stress test for the next two likely contests.

### C. Mid/late live

Once multiple objective/structure cycles are observable, current-map evidence dominates draft priors.

A handicap TAKE requires:

- exact margin arithmetic;
- objective/structure alignment;
- repeated contest/return-kill evidence;
- low/central/high future net-kill branches;
- explicit `P(cover)` at least **3 percentage points above break-even**;
- v0.3.37 Objective-Control Handicap Veto and v0.3.38 Favorite Structural Margin-Expansion Ladder where applicable.

## 2. Break-even and cover-probability gate

For every handicap considered for TAKE:

1. calculate `P_break_even = 1 / decimal_odds`;
2. estimate `P_cover` from the current phase-specific margin distribution;
3. calculate edge in percentage points: `P_cover - P_break_even`;
4. apply the phase threshold above.

Do not issue a handicap TAKE if the cover probability is not explicitly supportable. Qualitative phrases such as “should be enough,” “large cushion,” or “has return-kill tools” are not substitutes for the probability gate.

The probability estimate need not imply false precision; a bounded range is acceptable, but the **lower end of the reasonable range must still clear the required phase edge threshold**.

## 3. Handicap-to-total scaling

Every handicap evaluation must compare handicap width to projected final total kills.

Record:

- absolute handicap magnitude `H`;
- central projected final total kills `T`;
- ratio `H / T`;
- total-kill volatility / branch width.

Interpretation:

- the same +10.5 cushion is materially safer in a low-total, low-volatility map than in a high-total, repeated-fight map;
- high projected total kills and high objective density increase the number of opportunities for a favorite to create a large final margin;
- low total kills can make an extreme favorite margin arithmetically difficult even when the favorite is likely to win the map.

Never evaluate handicap width independently from expected fight volume.

## 4. Cascade-tail penalty

The favorite’s high-margin tail must be widened when its composition or state contains multiple mutually reinforcing snowball channels.

Cascade-tail factors include:

- multiple reliable engage layers;
- global or semi-global collapse tools;
- point-and-click initiation;
- reset / chase mechanics;
- strong objective forcing into prepared terrain;
- dive + follow-up combinations;
- strong front-to-back follow-up after first contact;
- safe cleanup DPS that converts won fights into additional kills/structures.

Three or more meaningful cascade factors require an explicit **favorite high-margin tail penalty** against a positive-handicap TAKE unless the underdog has strong counterevidence.

A composition can have comeback or return-kill tools while still being structurally vulnerable to a nonlinear 3-for-0 -> objective -> base-defense sequence.

## 5. Return-kill evidence hierarchy

Do not treat theoretical champion-kit tools as equivalent to demonstrated map execution.

Evidence strength, weakest to strongest:

1. **Theoretical:** draft contains engage/disengage/global/return-damage tools.
2. **Lane-state:** CS/gold parity or winning lanes show capacity to survive contact.
3. **Observed trade:** underdog repeatedly returns kills in actual skirmishes/teamfights.
4. **Objective contest:** underdog can contest or cross-map trade objectives without catastrophic losses.
5. **Repeated cycle:** return-kill/trade behavior persists across multiple objective/structure cycles.

Pregame positive-handicap TAKEs may use level 1 only as a supporting factor, never as the primary justification. Mid/late positive handicaps generally require level 3+ evidence when the opponent has aligned structural control.

## 6. Positive-handicap anti-comfort rule

A large positive line is not inherently safe.

Before TAKE, explicitly answer:

- how many net kills must the favorite gain from the current state to beat the line?
- how many realistic forced-fight sequences remain?
- can one won fight cascade into objective + structure + base-defense kills?
- what is the projected total-kill environment?
- what repeated evidence shows the underdog can interrupt the cascade?

If the thesis is mainly “+X.5 is a big cushion,” `PASS`.

## 7. Pregame favorite and underdog asymmetry

Pregame moneyline confidence does not automatically transfer to kill-margin confidence.

- A strong favorite ML can coexist with a PASS on its negative kill handicap.
- An underdog can have a poor ML yet still cover a positive handicap, but only if the margin distribution supports it.
- Do not infer positive-handicap value merely because the underdog has scaling, engage, or defensive tools.

## 8. Retained live structural controls

### Positive handicap

The v0.3.37 Objective-Control Handicap Veto remains mandatory: aligned opponent gold + meaningful neutral-objective control invalidates a positive-handicap TAKE unless affirmative repeated contest/trade/return-kill evidence exists.

### Favorite negative handicap

The v0.3.38 Favorite Structural Margin-Expansion Ladder remains mandatory: when gold + objective pressure + structural conversion are aligned, scan smaller favorite negative lines before the next kill conversion, set line-specific thresholds, prefer the least aggressive qualifying line, and do not chase after the market moves.

## 9. BLG vs EDG Game 2 calibration

Pregame at 0:00, EDG +10.5 kills @1.810 was recommended from draft return-kill logic: Olaf / Vi / Shen engage with Locke / Xerath follow-up. Final was BLG 27-16, so EDG +10.5 lost by 0.5 kill.

The key process error was not the final half-kill margin itself. The error was that the TAKE lacked a sufficiently explicit margin distribution and probability edge, while BLG had a strong cascade composition: Ambessa / Pantheon / Orianna / Xayah / Rakan provided layered engage, collapse and cleanup.

Under v0.3.39, this pregame positive handicap would be **PASS/HOLD unless an explicit projected margin distribution placed EDG cover probability at least 5 percentage points above the 55.25% break-even probability** after applying the cascade-tail penalty and total-kill scaling.

## 10. Settlement instruction retained with user override

A screenshot labeled `Live` or `Pending` is not final by itself. However, the user has explicitly established that when they state **“Final”**, that statement is authoritative final-state confirmation for the attached/latest synchronized scoreboard even if the UI still displays `Live`.

Therefore:

- user says `Final` + latest synchronized scoreboard contains the settlement statistic => settle from that state;
- user says `Final` + winner only, while the exact settlement statistic is absent from all synchronized evidence => request only the missing statistic needed for grading;
- never infer an unavailable final handicap/total statistic from winner alone.

## 11. Retained controls

All retained controls remain active:

- mandatory full checklist before every verdict;
- verdict first;
- recorded position separate from current thesis;
- executable-price confirmation before recording;
- minimum odds 1.60;
- no correlated same-map add-ons;
- no chasing or rescue lines;
- total kills and duration independent;
- official betting remains paused until explicit restoration;
- shadow default 0.25u;
- plugins/logging after live verdict.

Where this delta conflicts with earlier rules, **v0.3.39 controls**.
