# LoL Cross-Chat Transfer Handoff — 2026-08-08

**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.39**  
**Purpose:** preserve mandatory live-verdict compliance, completed circuit-breaker state, favorite pre-conversion handicap-ladder logic, and phase-aware kill-handicap calibration.

## 1. Required load order

1. `models/lol/CURRENT_MODEL.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.39.md`
3. retained deltas v0.3.38 through v0.3.26
4. item-verification suspension
5. v0.3.25 consolidated rules / probation / calibration handbook
6. `models/lol/procedures/LOL_LIVE_VERDICT_EXECUTION_CHECKLIST_2026-08-08.md`
7. live fast path
8. main betting procedure
9. connected-stack sync/recording procedure
10. both procedure addenda
11. scoreboard protocol
12. pre-match/pregame procedure
13. shared stake policy
14. this handoff last

Where conflicts exist, **v0.3.39 controls**.

## 2. Mandatory operating behavior

Every live trigger must complete the full checklist before the verdict. Brevity is presentation-only.

First line while official wagering remains paused:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [market/selection] @[odds] — 0u.`
- `HOLD — [market/selection] @[odds] — 0u.`

Do not run GitHub/Airtable/Sheets logging before the live verdict.

Mandatory internal sequence:

1. newest-frame fingerprint;
2. recorded-position vs thesis state;
3. ML gate;
4. phase-aware handicap classification + exact arithmetic + projected margin distribution + break-even/cover-probability gate + cascade test + Objective-Control Handicap Veto + v0.3.38 favorite ladder scan;
5. total-kills current/required/low-central-high projection;
6. duration fast/central/extension projection;
7. price availability, minimum odds, correlation/chasing checks;
8. settlement-state verification.

Missing decision-critical data => `PASS` or `HOLD`; never infer.

## 3. Executable-line rule

A `TAKE` is **CONDITIONAL / UNRECORDED** until the user confirms the same qualifying line/price remained executable and was accepted for tracking.

If the line locks, disappears, or deteriorates before confirmation:

- status becomes **NO BET / 0u**;
- do not record the position;
- do not later grade it as a win/loss;
- a correct thesis with an unavailable price is not a model win.

## 4. v0.3.39 Phase-Aware Kill-Handicap Calibration

Before pricing a kill handicap, classify it as:

- **pregame / 0:00**;
- **early live**;
- **mid/late live**.

### Required probability edge

For every handicap TAKE:

- calculate `P_break_even = 1 / decimal_odds`;
- build a reasonable `P_cover` range from projected final kill-margin branches;
- require the **lower end** of that range to clear break-even by:
  - **+5 percentage points** for pregame positive handicaps;
  - **+4 percentage points** for early-live handicaps;
  - **+3 percentage points** for mid/late-live handicaps.

If the probability edge is not explicitly supportable, `PASS`/`HOLD`.

### Pregame positive handicaps are high-friction

Draft resilience alone is insufficient. Require:

- projected final total-kill low/central/high range;
- projected final kill-margin low/central/high branches;
- handicap-to-total scaling (`H/T`);
- explicit cover-probability edge;
- favorite cascade-tail penalty.

A large cushion is never sufficient justification.

### Cascade-tail penalty

Layered engage, globals/semi-globals, point-and-click initiation, reset/chase, objective forcing, dive/follow-up and safe cleanup DPS widen the favorite’s high-margin tail. Three or more meaningful factors require an explicit penalty against a positive-handicap TAKE unless strong counterevidence exists.

### Return-kill evidence hierarchy

Theoretical draft tools < lane-state survival < observed repeated return kills < objective contest/trade < repeated multi-cycle resistance. Pregame theory is supporting evidence only. Mid/late positive handicaps generally require observed level-3+ evidence when the opponent owns aligned structural control.

### BLG vs EDG Game 2 calibration

EDG +10.5 kills @1.810 was a confirmed shadow TAKE at 0:00 and lost 16-27. The recommendation over-relied on Olaf/Vi/Shen theoretical return-kill tools without a sufficiently explicit final-margin distribution or probability edge, while BLG Ambessa/Pantheon/Orianna/Xayah/Rakan carried strong layered cascade potential.

Under v0.3.39 this line would be `PASS/HOLD` unless post-penalty `P_cover` cleared the 55.25% break-even probability by at least 5 percentage points.

## 5. Objective-Control Handicap Veto retained

For positive kill handicaps, opponent **aligned gold + meaningful neutral-objective control** cannot be dismissed because the kill margin is small or the cushion is wide.

Without affirmative repeated contest/trade/return-kill evidence from the positive-handicap side, `PASS`.

Never claim line widening/tightening without a verified prior same-map line.

## 6. v0.3.38 Favorite Structural Margin-Expansion Ladder retained

When the leader has aligned **gold + objective pressure + structural conversion/access**, scan smaller favorite negative kill handicaps **before** waiting for the next kill conversion.

For every plausible favorite line:

- calculate current margin, required final margin and exact future net kills needed;
- project next two contest/cascade sequences;
- evaluate objective-to-structure/base conversion;
- evaluate trailer return-kill routes;
- build low/central/high future margin branches;
- set line-specific fair price and minimum execution threshold;
- prefer the least aggressive qualifying line.

After a favorite conversion, do not chase a materially larger line merely because the thesis was confirmed. Reprice from scratch; `PASS — EDGE MOVED WITH STATE` is valid.

## 7. Circuit-breaker state — complete

Official probation remains unchanged:

- 13/20 official wagers completed;
- record 7-6;
- net -0.16425u / -164,250 VND;
- next official wager after explicit restoration: 14.

Recent breaker sequence:

- **CB-17:** TH +7.5 kills vs FNC — LOSS; triggered Objective-Control Handicap Veto.
- **CB-18:** TH/FNC Game 3 Under 26.5 thesis finished at 25 kills, but line deteriorated before placement => **NO BET / 0u**.
- **CB-19:** T1/HLE Game 2 — HLE won 12-9 at 33:59. No recorded position. Conditional Under 23.5 @1.894 expired before confirmation => **NO BET / 0u**.
- **CB-20:** T1/HLE Game 3 — HLE won 28-13 at 34:49. No recorded position. Under 26.5 @1.60 was PASS; HLE -10.5 and T1 +10.5 were PASSes.

The required **20/20 breaker maps are complete**. Official betting remains **paused** and does not resume automatically.

## 8. Post-breaker shadow sequence

Recorded shadow positions since CB completion:

- **DNS +1.5 maps @1.913 vs NS — WIN — +0.22825u**.
- **DNS Game 2 ML @1.979 vs NS — WIN — +0.24475u**.
- **EDG +10.5 kills @1.810 vs BLG Game 2 — LOSS — -0.25u**.

Net across these three recorded post-breaker shadow positions: **+0.22300u**. Actual exposure remains **0u**.

## 9. Settlement verification and standing user `Final` instruction

A screenshot marked `Live` or `Pending` is never final evidence by itself. However, the user has explicitly established the standing instruction:

> when the user says **`Final`**, treat the attached/latest synchronized scoreboard as final even if the UI still displays `Live`.

Therefore:

- `Final` + latest synchronized scoreboard includes the required grading statistic => settle immediately;
- `Final` + winner only, and the grading statistic is absent from all synchronized evidence => request only that missing statistic;
- never infer a handicap/total statistic from winner alone.

## 10. Recorded-position discipline

- recorded positions and current thesis are separate;
- no unconfirmed/expired line may be resurrected;
- every new map resets current-map hard evidence;
- series-level positions remain separate from map-level positions and do not suppress normal map predictions unless correlation rules actually apply.

## 11. Future-chat instruction

Start by loading `CURRENT_MODEL.md`, v0.3.39, the mandatory checklist, retained rules/procedures, and this handoff. Then use the newest user-supplied state. If repository/connected-stack state conflicts with an explicit newer user correction, the user correction controls and the discrepancy must be logged after the verdict.
