# LoL Live Verdict Execution Checklist — 2026-08-08

**Status:** Mandatory  
**Authority:** LoL v0.3.37  
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

Calculate:

1. current kill margin;
2. exact final margin required;
3. exact future net-kill swing required;
4. next-fight cascade risk;
5. gold / tower / neutral-objective alignment;
6. repeated contest/trade and return-kill routes;
7. line-chasing / repair / dominance state.

### Objective-Control Handicap Veto

If the opponent of the positive-handicap side has aligned gold + meaningful neutral-objective control, the cushion alone is not evidence. Without affirmative repeated contest/trade/return-kill evidence, `PASS` the positive handicap.

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

- `Live` screenshot => do not settle from screenshot;
- `Pending` screenshot => do not settle from screenshot;
- verified final/result state or separate explicit exact user confirmation required;
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
