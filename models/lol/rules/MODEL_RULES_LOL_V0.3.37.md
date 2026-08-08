# MODEL RULES — LEAGUE OF LEGENDS v0.3.37

**Status:** Active delta  
**Effective date:** 2026-08-08 17:11 UTC+7  
**Supersedes:** v0.3.36 only where stated

## Purpose

Prevent live-analysis procedure drift. Brevity is presentation-only: every live verdict must pass the full mandatory execution checklist before it is shown. If a required check cannot be completed, the model must fail closed with `PASS` or `HOLD` rather than infer.

## 1. Mandatory pre-verdict execution gate

Before every live verdict, complete all applicable checks below internally. None may be skipped merely to answer faster.

1. **Current-frame fingerprint**
   - event, game number, side orientation;
   - verified clock;
   - kills and kill orientation;
   - gold lead and direction;
   - towers and inhibitor/base depth;
   - dragons and soul/soul-point state;
   - Void Grubs and Herald;
   - Baron and Elder;
   - exact current market line, price, and open/locked status.
2. **Position state**
   - recorded position state and current analytical thesis state are separate;
   - explicitly determine whether there is no position, a conditional/unrecorded recommendation, or a recorded shadow position.
3. **Four-family scan**
   - moneyline;
   - kill handicap;
   - total kills;
   - duration;
   - each family is priced independently even if only one is shown prominently.
4. **Execution controls**
   - minimum odds and market-specific gates;
   - line/price availability;
   - correlation and chasing checks;
   - current-map hard-evidence reset;
   - no invented prior line, state direction, item, objective, or settlement fact.
5. **Settlement state**
   - determine whether the evidence is `Live`, `Pending`, or final before any grading.

If any decision-critical field is missing or ambiguous, use `PASS` or `HOLD`. Do not substitute intuition for a missing mandatory field.

## 2. Required live verdict taxonomy

The first visible line must use one of these forms:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [market/selection] @[odds] — 0u.`
- `HOLD — [market/selection] @[odds] — 0u.`

During the circuit breaker, `TAKE` is a shadow recommendation only. It is never an official wager and actual exposure remains 0u.

### TAKE recording gate

A `TAKE` remains **CONDITIONAL / UNRECORDED** until the user confirms that the same executable line and qualifying price remained available and was taken/accepted for shadow tracking.

If the line locks, disappears, or deteriorates below the model threshold before confirmation:

- convert the candidate to `PASS — NO BET / 0u`;
- do not record it as a position;
- do not grade it as a win or loss later;
- a correct underlying thesis does not count as a model win when the executable recommendation was unavailable.

Price-only deterioration cannot be retroactively ignored.

## 3. Moneyline mandatory gate

1. Minimum accepted odds remain **1.60** unless a stricter market rule applies.
2. Odds below 1.60 are an immediate `PASS` regardless of directional confidence.
3. Current-map confirmation requirements from prior rules remain active.
4. Moneyline confidence never transfers automatically to kill-margin confidence.

## 4. Kill-handicap mandatory arithmetic

For every evaluated kill handicap, calculate before verdict:

- current kill margin;
- required final margin;
- exact additional future net kills required for the favorite to cover or for the positive-handicap side to fail;
- next-fight/objective cascade risk;
- structural and neutral-objective state;
- validated return-kill/contest routes;
- line-chasing or repair status where applicable.

Do not use phrases such as `widening line`, `improving cushion`, or `deteriorating line` unless a verified prior line from the same map is available.

## 5. Objective-Control Handicap Veto

This veto is mandatory for positive kill handicaps.

When the opponent of the positive-handicap side has a verified **gold lead aligned with meaningful neutral-objective control** — including dragons, soul pressure, Grubs/Herald conversion potential, Baron, Elder, or a comparable objective-control package — the positive handicap may not be promoted merely because the current kill margin is small or the numerical cushion is wide.

Promotion requires affirmative current-map evidence that the positive-handicap side can survive the next cascade and repeatedly contest, trade, or generate return kills through upcoming objective cycles.

If aligned gold + neutral-objective control exists and that affirmative evidence is absent, verdict is `PASS` on the positive handicap.

The veto supplements, rather than replaces, dominance override, multi-snapshot stabilization, structural-control, line-chasing, and positive-handicap repair rules.

## 6. Total-kills mandatory projection

Total Kills is independent from Duration.

Before verdict, calculate:

- current total kills;
- whole additional kills required to cross the exact line;
- unresolved fight inventory;
- low, central, and high remaining-kill branches;
- objective-density reserve from dragons, soul, Baron, Elder, inhibitor/base defense, and repeated major-objective cycles;
- clean-close/return-kill suppression state when relevant.

The visible response may summarize these calculations, but they must be completed before the verdict.

## 7. Duration mandatory projection

Duration is independent from Total Kills.

Before verdict, construct:

- fast-close branch;
- central branch;
- extension branch;
- point estimate or central finish range;
- fastest realistic structure/base route;
- stall/anti-conversion evidence;
- terminal-access and methodical-control checks when required by clock.

Retained corrections remain mandatory:

- no duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness;
- six or more total kills by 8:00 activates a wider fast-ending branch;
- fourteen or more total kills by 16:00 prevents 0-0 towers from confirming a duration Over;
- around 20:00, at least +5k gold plus a two-tower lead invalidates short-line Overs absent exceptional counterevidence;
- comeback tools widen the duration distribution and do not automatically increase expected duration;
- Grubs alone are only potential acceleration, not proof of completed structural conversion;
- kill suppression does not equal time compression.

Duration remains official-ineligible through official probation wager 20.

## 8. Recorded position vs thesis state

Always keep these separate:

- **Recorded position state:** none / conditional-unrecorded / recorded shadow / settled.
- **Current thesis state:** active / degraded / invalidated / confirmed.

A recorded position can remain recorded while its thesis becomes degraded or invalidated. A conditional/unrecorded candidate can expire without ever becoming a position.

## 9. Settlement verification

1. A screenshot visibly marked `Live` or `Pending` is never final settlement evidence by itself.
2. Do not settle from a live/pending image even if the apparent score looks terminal.
3. Settlement requires a verified final/result state, or a separate explicit user confirmation of the exact final winner/result sufficient to override stale telemetry under the evidence hierarchy.
4. Never turn an unavailable/unconfirmed recommendation into a graded win solely because the final outcome would have covered.

## 10. Plugin and logging order

For active live maps:

1. complete the model checks;
2. show the verdict immediately;
3. only then perform GitHub/Airtable/Sheets logging or other connected-stack work.

Plugin/logging latency may never delay a live verdict. Conversely, compact presentation may never waive a model gate.

## 11. Non-compliance recovery

If a prior answer omitted a mandatory gate, invented state history, or failed exact arithmetic:

- classify that response as **procedure-noncompliant**;
- recompute from the last verified synchronized snapshot;
- do not preserve the old verdict merely for consistency;
- document any material model correction in the next handoff/review.

## 12. Future-chat startup enforcement

Every new chat must load, before its first LoL analysis:

1. `models/lol/CURRENT_MODEL.md`;
2. this v0.3.37 delta and retained earlier deltas;
3. consolidated rules, probation/circuit-breaker status, calibration handbook;
4. `models/lol/procedures/LOL_LIVE_VERDICT_EXECUTION_CHECKLIST_2026-08-08.md`;
5. live fast path, main procedure, addenda, scoreboard protocol, connected-stack procedure;
6. latest handoff.

Where a prior file conflicts with this delta, **v0.3.37 controls**.

## 13. Retained controls

All non-conflicting v0.3.36 through v0.3.26 controls remain active, including the 20-map circuit breaker, actual exposure 0u during the breaker, default individual shadow size 0.25u, no hard aggregate per-map cap, no correlated same-map add-ons, no chasing, item-verification suspension, current-map evidence reset, objective-density kill reserves, Baron acquisition/conversion separation, and explicit restoration requirement after CB-20.
