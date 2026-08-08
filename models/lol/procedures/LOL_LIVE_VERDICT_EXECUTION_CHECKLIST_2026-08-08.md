# LoL Live Verdict Execution Checklist — 2026-08-08

**Status:** Mandatory  
**Authority:** LoL v0.3.41  
**Purpose:** mechanical pre-verdict gate for every live League of Legends snapshot.

This checklist must be completed internally before every live verdict. The user-facing reply remains brief.

## A. Current-frame fingerprint

Verify from newest synchronized evidence:

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

Do not carry forward a prior state field unless immutable or explicitly reconciled.

## B. Position-state check

Set exactly one:

- `RECORDED POSITION: NONE`
- `CONDITIONAL / UNRECORDED`
- `RECORDED SHADOW POSITION`

Separately set current thesis state when a position exists: `ACTIVE / DEGRADED / INVALIDATED / CONFIRMED`.

### B1. Position-blind reassessment

On every material new snapshot, and whenever the user explicitly asks to reassess draft/compositions, recompute the current thesis from scratch.

Do **not** use the recorded entry, prior recommendation, sunk stake, desire for consistency, or adverse sportsbook movement as supporting evidence.

For the original selection:

- ACTIVE: lower-bound probability still clears original entry break-even by the required phase buffer and no hard veto is active;
- DEGRADED: lower bound is above break-even but no longer clears the phase buffer;
- INVALIDATED: lower bound is at/below break-even or a hard veto is active;
- CONFIRMED: materially strengthened thesis only.

A position remains recorded even when thesis state is INVALIDATED.

Mandatory reassessment triggers include: explicit user request; >=2k meaningful gold swing; tower differential change >=2; first Baron/Elder; inhibitor/base access; material dragon/soul alignment change; >=2 net-kill swing; repeated failure of a theoretical defensive mechanism; demonstrated pick-to-objective cascade.

## C. Moneyline gate

For all ML:

- odds >= 1.60;
- current-map confirmation sufficient;
- map prior distinct from series prior;
- no transfer from generic team strength alone;
- no automatic transfer to handicap confidence.

### C1. Pregame / 0:00 ML probability gate

Before a pregame ML TAKE construct:

1. baseline map `P_win` range before draft;
2. side adjustment;
3. draft/composition adjustment;
4. supported execution/form adjustment;
5. final reasonable `P_win` range;
6. `P_break_even = 1 / decimal_odds`.

The **lower end** of the final `P_win` range must clear break-even by at least **+3 percentage points**.

Draft alone normally moves the baseline by **0–4pp**. A move >4pp requires at least three independent material matchup advantages. One attractive interaction cannot by itself justify a large probability move.

Failure => `PASS` or `HOLD`.

## D. Kill-handicap gate

### D1. Phase classification

Set exactly one:

- `PREGAME / 0:00`
- `EARLY LIVE`
- `MID/LATE LIVE`

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

For any handicap TAKE calculate `P_break_even`, estimate a reasonable `P_cover` range, and require the **lower end** to clear break-even by:

- **+5pp** for pregame positive handicaps;
- **+4pp** for early-live handicaps;
- **+3pp** for mid/late-live handicaps.

If not supportable => `PASS`/`HOLD`.

### D4. Pregame positive-handicap high-friction rule

Draft resilience, scaling, engage/disengage/global tools, or a visually large cushion are insufficient by themselves. Require projected total kills, final-margin distribution, probability edge and cascade-tail assessment.

### D5. Cascade-tail penalty

Widen the favorite high-margin branch for layered engage, globals, point-and-click initiation, reset/chase, objective forcing, dive/follow-up and safe cleanup DPS. Three or more meaningful factors require an explicit penalty against a positive-handicap TAKE unless strong counterevidence exists.

Do not model repeatable cascade fights as independent events. A successful `pick -> numbers advantage -> objective/structure -> vision denial -> second pick` sequence increases subsequent margin-expansion probability.

### D6. Return-kill evidence hierarchy

1. theoretical draft tools;
2. lane-state survival/parity;
3. observed repeated return kills;
4. objective contest/cross-map trade;
5. repeated multi-cycle resistance.

Pregame level-1 evidence is supporting only. Mid/late positive handicaps generally require level 3+ when the opponent has aligned structural control.

### D7. Mechanistic positive-handicap resilience

Explicitly evaluate the positive-handicap composition for:

1. safe range;
2. disengage/reset;
3. waveclear/base defense;
4. anti-dive/peel;
5. objective-contest access;
6. return-kill reliability.

`Scaling`, `late game`, `teamfight`, and `multiple carries` are not resilience unless they translate into these mechanisms. A short-range scaling draft may have strong win-condition scaling but poor kill-margin resilience.

### Objective-Control Handicap Veto

If the opponent of the positive-handicap side has aligned gold + meaningful neutral-objective control, the cushion alone is not evidence. Without affirmative repeated contest/trade/return-kill evidence, `PASS`.

### Draft Cascade-Structure Veto — v0.3.41

For a positive handicap, `PASS` unless strong counterevidence exists when all are true:

- opponent leads gold;
- opponent leads structures or has demonstrated repeatable structure access;
- opponent has at least three meaningful pick/cascade components: reliable engage, layered CC, ranged conversion/cleanup, chase/global reinforcement, objective-zone denial, dive continuation;
- positive-handicap side lacks demonstrated level-3+ return-kill/contest evidence or at least three credible mechanistic resilience categories.

Split neutral-objective control does **not** cancel this veto.

### Favorite Structural Margin-Expansion Ladder

When a leader has aligned gold + objective pressure + structural conversion/access, scan smaller favorite negative handicaps **before** the next kill conversion. Price independently, set thresholds when possible, prefer the least aggressive qualifying line, and do not chase after conversion.

Never describe a line as widened/tightened unless the prior same-map line was verified.

## E. Total-kills gate

Calculate:

- current total kills;
- additional whole kills to cross the line;
- unresolved major fight triggers;
- low / central / high remaining-kill branches;
- objective-density reserve;
- clean-close / return-kill suppression state;
- global / engage / cascade fight-creation channels on both teams.

### E1. Probability edge

For a total-kills TAKE:

- calculate `P_break_even = 1 / decimal_odds`;
- estimate a reasonable probability range for the selection;
- require the **lower end** to clear break-even by **+4pp in early live** and **+3pp in mid/late live**.

If not supportable => `PASS`/`HOLD`.

### E2. Early fight-density reserve

High early fight-density is active if any of the following holds:

- >=8 kills by 8:00;
- >=10 kills by 10:00;
- repeated multi-player skirmishes before objective cycles mature;
- both teams have multiple globals / semi-globals / point-and-click engage / layered follow-up coming online.

If high early fight-density is active and at least three meaningful fight windows remain, assign the high-kill branch at least **25–30% probability mass** absent strong suppression evidence.

If the two drafts collectively have **four or more meaningful fight-creation channels**, apply an additional volatility penalty against an early Under.

A later larger Under line may still become value; reprice every new line independently. Never resurrect an expired earlier line.

Total Kills is never inferred from Duration.

## F. Duration gate

Calculate separately:

- fast-close branch;
- central branch;
- extension branch;
- fastest realistic structure-to-Nexus route;
- genuine stall/anti-conversion signals;
- terminal access / resets / methodical-control tax.

Mandatory retained corrections:

- no Over before 10:00 without two genuine stall signals beyond towerlessness;
- >=6 kills by 8:00 widens fast-finish branch;
- >=14 kills by 16:00 means 0-0 towers is not confirming Over evidence;
- around 20:00, >=+5k gold and +2 towers invalidates short Overs absent exceptional counterevidence;
- comeback tools widen distribution;
- Grubs alone do not prove completed structure acceleration;
- kill suppression != duration compression.

## G. Execution and correlation gate

Before `TAKE`:

- exact line and odds are executable;
- price clears minimum and market-specific threshold;
- no correlated prohibited add-on;
- no chase / wider-line rescue;
- state synchronized.

A `TAKE` is `CONDITIONAL / UNRECORDED` until user confirms the same qualifying line/price was available and accepted for tracking.

If price/line locks, disappears, or deteriorates before confirmation => `PASS — NO BET / 0u`. Never grade later.

If a recorded position becomes INVALIDATED:

- do not add to it;
- do not rescue with a wider same-side line;
- do not automatically flip to the opposite handicap as repair/chasing;
- continue scanning genuinely independent markets normally.

## H. Settlement gate

- `Live` screenshot alone => do not settle;
- `Pending` screenshot alone => do not settle;
- verified final/result state or separate explicit user confirmation required;
- standing user instruction: when the user states `Final`, treat the attached/latest synchronized scoreboard as authoritative final-state evidence even if UI still says `Live`;
- if `Final` is stated but exact grading statistic is absent from all synchronized evidence, request only that statistic;
- unavailable/unconfirmed recommendations remain NO BET even if final result would have won.

## I. Output gate

First line must be one of:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [selection/market] @[odds] — 0u.`
- `HOLD — [selection/market] @[odds] — 0u.`

When a recorded position exists and a mandatory reassessment is triggered, include the current thesis label separately from the recorded-position status.

Then keep support brief unless detail is requested.

## J. Fail-closed rule

If any decision-critical input or calculation is unavailable, ambiguous, or incomplete, output `PASS` or `HOLD`. Never fill a missing gate with intuition.

## K. Tool order

For a live map:

1. checklist;
2. verdict;
3. logging / GitHub / Airtable / Sheets / other connector work.

No connected-stack operation may delay the live verdict.
