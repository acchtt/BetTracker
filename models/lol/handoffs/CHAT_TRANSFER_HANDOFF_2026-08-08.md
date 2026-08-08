# LoL Cross-Chat Transfer Handoff — 2026-08-08

**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.41**  
**Purpose:** preserve mandatory live-verdict compliance, completed circuit-breaker state, phase-aware handicap rules, favorite pre-conversion handicap ladder, v0.3.40 ML/total corrections, and v0.3.41 position-blind handicap reassessment plus Draft Cascade-Structure Veto.

## 1. Required load order

1. `models/lol/CURRENT_MODEL.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.41.md`
3. retained deltas v0.3.40 through v0.3.26
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

Where conflicts exist, **v0.3.41 controls**.

## 2. Mandatory operating behavior

Every live trigger must complete the full checklist before verdict. Brevity is presentation-only.

First line while official wagering remains paused:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [market/selection] @[odds] — 0u.`
- `HOLD — [market/selection] @[odds] — 0u.`

Do not run GitHub/Airtable/Sheets logging before a live verdict.

Mandatory internal sequence:

1. newest-frame fingerprint;
2. recorded-position vs **position-blind current thesis** state;
3. ML gate including v0.3.40 pregame lower-bound probability edge;
4. phase-aware handicap classification + exact arithmetic + margin distribution + break-even/cover-probability gate + cascade test + v0.3.41 mechanistic resilience + Draft Cascade-Structure Veto + Objective-Control Handicap Veto + v0.3.38 favorite ladder scan;
5. total-kills current/required/low-central-high projection + v0.3.40 probability/fight-density reserve;
6. duration fast/central/extension projection;
7. price availability, minimum odds, correlation/chasing checks;
8. settlement-state verification.

Missing decision-critical data => `PASS` or `HOLD`; never infer.

## 3. Executable-line rule

A `TAKE` is **CONDITIONAL / UNRECORDED** until the user confirms the same qualifying line/price remained executable and was accepted for tracking.

If line locks, disappears or deteriorates before confirmation => **NO BET / 0u**. Never retro-grade it.

## 4. v0.3.41 Position-Blind Reassessment

Recorded position and current thesis are separate state objects.

On every material new snapshot — and whenever the user explicitly asks to reassess drafts/compositions — recompute the thesis from scratch without using the recorded entry, previous recommendation, sunk stake, desire for consistency, or adverse sportsbook movement as evidence.

For the original recorded selection:

- **ACTIVE:** current lower-bound probability still clears original entry break-even by the applicable phase buffer and no hard veto is active;
- **DEGRADED:** lower bound is above break-even but no longer clears the phase buffer;
- **INVALIDATED:** lower bound is at/below break-even or a hard veto applies;
- **CONFIRMED:** materially stronger thesis only.

The ledger position remains recorded when thesis state becomes INVALIDATED.

Mandatory reassessment triggers include explicit user request, >=2k meaningful gold swing, tower differential change >=2, first Baron/Elder, inhibitor/base access, meaningful dragon/soul alignment change, >=2 net-kill swing, demonstrated failure of a theoretical defensive mechanism, or demonstrated pick-to-objective cascade.

## 5. v0.3.41 Mechanistic Positive-Handicap Resilience

Do not use generic `scaling`, `late game`, `teamfight`, or `multiple carries` as kill-margin resilience.

Explicitly evaluate:

1. safe range;
2. disengage/reset;
3. waveclear/base defense;
4. anti-dive/peel;
5. objective-contest access;
6. return-kill reliability.

A short-range scaling draft can have strong win-condition scaling but poor kill-margin resilience.

### Draft Cascade-Structure Veto

For a positive handicap, `PASS` unless strong counterevidence exists when the opponent has:

- current gold lead;
- structural lead or demonstrated repeatable structure access;
- at least three meaningful cascade components among reliable engage, layered CC, ranged conversion/cleanup, chase/global reinforcement, objective-zone denial, dive continuation;
- while the positive-handicap side lacks demonstrated level-3+ return-kill/contest evidence or at least three credible resilience mechanisms.

Split neutral-objective control does **not** cancel this veto.

Repeatable `first contact -> conversion -> numbers advantage -> objective/structure -> second pick` sequences require a widened favorite high-margin branch because future fights are serially dependent.

## 6. NAVI vs SK Game 2 calibration — critical

Recorded position: **NAVI +5.5 kills @1.886, 0.25u shadow** at 14:51.

Entry state:

- SK 8-7 NAVI;
- SK +1.9k gold;
- SK 1-0 towers;
- SK 2-1 Grubs;
- NAVI 1-0 dragons.

Drafts:

- NAVI: Ambessa / Lee Sin / Ryze / Viktor / Alistar
- SK: Gnar / Pantheon / Syndra / Varus / Leona

Final: **SK 18-8 NAVI**, so NAVI +5.5 **LOSS -0.25u shadow**.

The 58-63% entry cover estimate was too high. The model overvalued NAVI's generic extended-fight scaling and underweighted NAVI's short range into Varus/Syndra, Pantheon/Leona first-contact reliability, Gnar zone control, ranged conversion, and SK's existing gold + structural initiative.

Under v0.3.41 the Draft Cascade-Structure Veto would have made NAVI +5.5 a **PASS at entry** absent stronger observed return-kill evidence.

The user then explicitly requested a draft reassessment. The response incorrectly defended the position as still viable. Under v0.3.41 that reassessment must be position-blind. By 19:51, SK 10-8, +3.0k gold and 3-1 towers with the same demonstrated cascade architecture required the current NAVI +5.5 thesis to be **INVALIDATED**, even with dragons tied.

## 7. v0.3.40 Pregame / 0:00 Moneyline Gate retained

Before any pregame ML TAKE:

- construct baseline map `P_win` range before draft;
- keep map prior distinct from series prior;
- apply verified side adjustment;
- apply disciplined draft adjustment;
- apply supported execution/form adjustment;
- calculate `P_break_even = 1 / odds`;
- require the **lower end** of final `P_win` range to exceed break-even by **at least +3pp**.

Draft alone normally changes the baseline by **0–4pp**. A >4pp move requires at least three independent material matchup advantages.

## 8. v0.3.40 Early Total-Kills Gate retained

For total-kills TAKEs:

- early live: lower end of selection probability range must clear break-even by **+4pp**;
- mid/late live: lower end must clear by **+3pp**.

High early fight-density triggers include >=8 total kills by 8:00, >=10 by 10:00, repeated early multi-player skirmishes, or multiple globals/engage chains coming online.

If high fight-density is active and at least three meaningful fight windows remain, high-kill branch gets at least **25–30% probability mass** absent strong suppression evidence.

## 9. v0.3.39 Phase-Aware Kill-Handicap Calibration retained

Before pricing a kill handicap classify pregame/0:00, early live, or mid/late live.

For every handicap TAKE calculate break-even and reasonable `P_cover` range; lower end must clear by:

- +5pp pregame positive handicap;
- +4pp early-live handicap;
- +3pp mid/late-live handicap.

Pregame positive handicaps remain high-friction. Draft resilience alone is insufficient.

## 10. Objective-Control Handicap Veto retained

For positive kill handicaps, aligned opponent **gold + meaningful neutral-objective control** cannot be dismissed because the kill margin is small or cushion wide. Without affirmative repeated contest/trade/return-kill evidence => `PASS`.

## 11. v0.3.38 Favorite Structural Margin-Expansion Ladder retained

When leader has aligned **gold + objective pressure + structural conversion/access**, scan smaller favorite negative handicaps before next kill conversion, price independently, prefer least aggressive qualifying line, and do not chase after conversion.

## 12. Circuit-breaker and official state

Official probation remains:

- 13/20 official wagers completed;
- record 7-6;
- net -0.16425u / -164,250 VND;
- next official wager after explicit restoration: 14.

20/20 shadow breaker maps are complete. Official betting remains **paused** until explicit user restoration.

## 13. Post-breaker recorded shadow sequence

- DNS +1.5 maps @1.913 vs NS — WIN — +0.22825u.
- DNS Game 2 ML @1.979 vs NS — WIN — +0.24475u.
- EDG +10.5 kills @1.810 vs BLG Game 2 — LOSS — -0.25u.
- SK Game 1 ML @2.239 vs NAVI — LOSS — -0.25u.
- NAVI +5.5 kills @1.886 vs SK Game 2 — LOSS — -0.25u.

Current post-breaker shadow sequence: **2-3, -0.27700u**. Actual exposure remains **0u**.

## 14. Settlement verification and standing user `Final` instruction

A `Live`/`Pending` screenshot is not final by itself. However, when user states **`Final`**, treat attached/latest synchronized scoreboard as authoritative final-state evidence even if UI still displays `Live`.

If exact grading statistic is absent from all synchronized evidence, request only the missing statistic.

## 15. Immediate next state

NAVI vs SK series is **1-1** after SK won Game 2. Move to **Game 3** with v0.3.41 active.

Before Game 3 analysis request/verify:

- blue side;
- complete draft;
- 0:00/current state;
- executable ML;
- kill handicap;
- total kills;
- duration line/odds.

Do not carry Game 2 hard evidence into Game 3. SK's Game 2 execution is a soft prior only.

## 16. Future-chat instruction

Start by loading `CURRENT_MODEL.md`, v0.3.41, mandatory checklist, retained rules/procedures, and this handoff. Then use newest user-supplied state. If connected-stack state conflicts with an explicit newer user correction, user correction controls and discrepancy must be logged after verdict.
