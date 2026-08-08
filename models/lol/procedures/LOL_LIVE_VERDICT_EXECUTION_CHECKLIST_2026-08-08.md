# LoL Live Verdict Execution Checklist — 2026-08-08

**Status:** Mandatory  
**Authority:** LoL v0.3.39  
**Purpose:** mechanical pre-verdict gate for every live League of Legends snapshot.

This checklist must be completed internally before every live verdict. The user-facing reply remains brief.

## A. Current-frame fingerprint

Verify from the newest synchronized evidence:

- event / game / sides;
- game clock;
- kills and orientation;
- gold lead and direction;
- towers / inhibitors / base access;
- dragons / soul point / soul;
- Void Grubs / Herald;
- Baron / Elder;
- exact market line and odds;
- market open / locked / delayed status.

Do not carry forward a prior state field unless it is immutable or explicitly reconciled.

## B. Position-state check

Set exactly one:

- `RECORDED POSITION: NONE`
- `CONDITIONAL / UNRECORDED`
- `RECORDED SHADOW POSITION`

Then separately set current thesis state when a position exists:

- active;
- degraded;
- invalidated;
- confirmed.

## C. Moneyline gate

- odds >= 1.60;
- current-map confirmation sufficient;
- no transfer from generic team strength alone;
- no automatic transfer to handicap confidence.

Failure => `PASS`.

## D. Kill-handicap gate

### D1. Phase classification

Set exactly one:

- `PREGAME / 0:00`
- `EARLY LIVE`
- `MID/LATE LIVE`

Do not use one phase's evidentiary standard for another.

### D2. Exact arithmetic and distribution

Calculate:

1. current kill margin;
2. exact final margin required;
3. exact future net-kill swing required;
4. projected final total-kill low / central / high range;
5. low / central / high final kill-margin branches;
6. handicap magnitude `H`, central projected total kills `T`, and `H/T`;
7. next two likely forced-fight / objective sequences;
8. gold / tower / neutral-objective alignment;
9. return-kill evidence level;
10. line-chasing / repair / dominance state.

### D3. Break-even / cover-probability gate

For any handicap TAKE:

- calculate `P_break_even = 1 / decimal_odds`;
- estimate a reasonable `P_cover` range from the margin distribution;
- the **lower end** of the reasonable `P_cover` range must clear break-even by:
  - **+5 percentage points** for pregame positive handicaps;
  - **+4 percentage points** for early-live handicaps;
  - **+3 percentage points** for mid/late-live handicaps.

If the probability edge is not explicitly supportable => `PASS` or `HOLD`.

### D4. Pregame positive-handicap high-friction rule

At 0:00, draft resilience alone is insufficient. A positive handicap may not be promoted merely because:

- the cushion looks large;
- the underdog has scaling;
- the underdog has engage/disengage/global tools;
- the favorite is unlikely to win by an intuitive margin.

Require projected total kills, final-margin distribution, probability edge and cascade-tail assessment.

### D5. Cascade-tail penalty

Widen the favorite's high-margin branch when it has several reinforcing factors such as:

- layered engage;
- globals / semi-globals;
- point-and-click initiation;
- reset / chase mechanics;
- objective forcing;
- dive + follow-up;
- safe cleanup DPS.

Three or more meaningful cascade factors require an explicit penalty against a positive-handicap TAKE unless strong counterevidence exists.

### D6. Return-kill evidence hierarchy

Classify evidence:

1. theoretical draft tools;
2. lane-state survival / parity;
3. observed repeated return kills;
4. objective contest / cross-map trade;
5. repeated multi-cycle resistance.

Pregame level-1 evidence is supporting only, never primary justification. Mid/late positive handicaps generally require level 3+ when the opponent has aligned structural control.

### Objective-Control Handicap Veto

If the opponent of the positive-handicap side has aligned gold + meaningful neutral-objective control, the cushion alone is not evidence. Without affirmative repeated contest/trade/return-kill evidence, `PASS` the positive handicap.

### Favorite Structural Margin-Expansion Ladder

When a leader has aligned gold + objective pressure + structural conversion/access, scan smaller favorite negative handicaps **before** the next kill conversion. Price each line independently, set thresholds when possible, prefer the least aggressive qualifying line, and do not chase after conversion.

Never describe a line as widened/tightened unless the prior same-map line was verified.

## E. Total-kills gate

Calculate:

- current total kills;
- additional whole kills to cross the line;
- unresolved major fight triggers;
- low / central / high remaining-kill branches;
- objective-density reserve;
- clean-close / return-kill suppression state.

Total Kills is never inferred from the Duration thesis.

## F. Duration gate

Calculate separately:

- fast-close branch;
- central branch;
- extension branch;
- fastest realistic structure-to-Nexus route;
- genuine stall/anti-conversion signals;
- terminal access / resets / methodical-control tax when clock requires.

Mandatory retained corrections:

- no Over before 10:00 without two genuine stall signals beyond ordinary towerlessness;
- >=6 kills by 8:00 widens fast-finish branch;
- >=14 kills by 16:00 means 0-0 towers is not confirming Over evidence;
- around 20:00, >=+5k gold and +2 towers invalidates short Overs absent exceptional counterevidence;
- comeback tools widen distribution;
- Grubs alone do not prove completed structure acceleration;
- kill suppression != duration compression.

## G. Execution and correlation gate

Before `TAKE`:

- exact line and odds are currently executable;
- price clears minimum and market-specific threshold;
- no correlated prohibited add-on;
- no chase / wider-line rescue;
- state is synchronized.

A `TAKE` is `CONDITIONAL / UNRECORDED` until user confirms the same qualifying line/price was available and accepted for tracking.

If price/line locks, disappears, or deteriorates before confirmation => `PASS — NO BET / 0u`. Never grade the thesis as a bet afterward.

## H. Settlement gate

- `Live` screenshot alone => do not settle from screenshot;
- `Pending` screenshot alone => do not settle from screenshot;
- verified final/result state or separate explicit user confirmation required;
- **standing user instruction:** when the user states `Final`, treat the attached/latest synchronized scoreboard as authoritative final-state evidence even if the UI still says `Live`;
- if `Final` is stated but the exact statistic required to grade the market is absent from all synchronized evidence, request only that missing statistic;
- unavailable or unconfirmed recommendations remain NO BET even if final result would have won.

## I. Output gate

First line must be exactly one family of format:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [selection/market] @[odds] — 0u.`
- `HOLD — [selection/market] @[odds] — 0u.`

Then no more than approximately three short support lines unless the user asks for detail.

## J. Fail-closed rule

If any required decision-critical input or calculation is unavailable, ambiguous, or not completed, output `PASS` or `HOLD`. Never fill a missing gate with intuition.

## K. Tool order

For a live map:

1. checklist;
2. verdict;
3. logging / GitHub / Airtable / Sheets / other connector work.

No connected-stack operation may delay the live verdict.
