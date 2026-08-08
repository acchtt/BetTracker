# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.40**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.40.md`
- Prior active deltas: v0.3.39 through v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Mandatory live checklist: `models/lol/procedures/LOL_LIVE_VERDICT_EXECUTION_CHECKLIST_2026-08-08.md`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Connected-stack procedure: `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Latest handoff: `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-08.md`

## Required load order

Every new chat must load these before its first LoL analysis:

1. `models/lol/CURRENT_MODEL.md`
2. v0.3.40 through v0.3.26 rule deltas
3. item-verification suspension
4. v0.3.25 consolidated rules, probation status, calibration handbook
5. mandatory live verdict execution checklist
6. live fast path
7. main betting procedure
8. connected-stack sync/recording procedure
9. both procedure addenda
10. scoreboard protocol
11. pre-match/pregame procedure
12. shared stake policy
13. latest handoff last

Where conflicts exist, **v0.3.40 controls**.

## Official probation

- 13/20 settled/completed
- Record: 7-6
- Net: -0.16425u / -164,250 VND
- Next official wager after explicit restoration: 14
- Standard/default stake after restoration: **0.25u**
- No hard aggregate per-map exposure cap
- Minimum odds: **1.60**
- Duration markets official-ineligible through wager 20
- Official betting remains **paused** until the user explicitly restores it

## Twenty-map shadow circuit breaker — completed

The required 20/20 shadow maps are complete. Completion does **not** automatically restore official wagering.

Recent breaker sequence remains:

- CB-17 TH +7.5 kills vs FNC — LOSS; triggered Objective-Control Handicap Veto.
- CB-18 TH/FNC G3 Under 26.5 thesis correct but line deteriorated before placement => NO BET / 0u.
- CB-19 T1/HLE G2 — no recorded position; conditional Under expired => NO BET / 0u.
- CB-20 T1/HLE G3 — no recorded position.

## Mandatory verdict discipline

First visible line while official wagering remains paused:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [market/selection] @[odds] — 0u.`
- `HOLD — [market/selection] @[odds] — 0u.`

Before every live verdict internally verify:

1. current-frame fingerprint;
2. recorded-position state versus current thesis state;
3. independent moneyline scan including v0.3.40 probability gate when pregame/0:00;
4. phase-aware exact kill-handicap arithmetic + probability gate + cascade test + structural controls;
5. independent total-kills low/central/high projection + v0.3.40 probability/fight-density reserve;
6. independent duration fast/central/extension projection;
7. line/price availability, minimum odds, correlation and chasing controls;
8. settlement state.

Missing decision-critical data => fail closed with `PASS` or `HOLD`.

## Executable-price rule

A `TAKE` remains **CONDITIONAL / UNRECORDED** until the user confirms the same qualifying executable line/price remained available and was accepted for tracking.

If the line locks, disappears, or deteriorates before confirmation, the recommendation becomes **NO BET / 0u** and is never graded later.

## v0.3.40 Pregame ML Calibration

For any pregame / 0:00 moneyline TAKE:

- construct baseline map `P_win` range before draft;
- separate series prior from map prior;
- apply verified side adjustment;
- apply disciplined draft/composition adjustment;
- apply supported execution/form adjustment;
- calculate `P_break_even = 1 / odds`;
- require the **lower end** of final `P_win` range to clear break-even by **at least +3 percentage points**.

Draft alone normally moves a map prior by **0–4pp**. A >4pp move requires at least three independent material matchup advantages. One attractive interaction cannot justify a large move by itself.

### NAVI vs SK G1 calibration

SK ML @2.239 was confirmed as a separate 0.25u shadow bet and lost; final NAVI 27-12 at 30:14. The stated SK range of 47–50% had a lower-bound edge of only about +2.34pp over 44.66% break-even, which **fails v0.3.40**. The model overvalued Sylas ult access/return-engage and undervalued NAVI's repeatable Nocturne/Shen -> Orianna/MF initiation package.

## v0.3.40 Early Total-Kills Calibration

For total-kills TAKEs:

- early live: lower end of selection probability range must clear break-even by **+4pp**;
- mid/late live: lower end must clear by **+3pp**.

High early fight-density is active with >=8 kills by 8:00, >=10 by 10:00, repeated early multi-player skirmishes, or multiple globals/engage chains coming online.

If high fight-density is active and at least three meaningful future fight windows remain, assign the high-kill branch at least **25–30% probability mass** absent strong suppression evidence.

If both drafts collectively contain four or more meaningful fight-creation channels, apply an additional volatility penalty against early Unders.

NAVI vs SK G1: Under 32.5 @2.827 at 6:51 was unconfirmed and therefore NO BET / 0u; final total was 39. It is calibration evidence that the high branch was underweighted. Later Under 43.5 @2.480 and Over 29m @2.008 were also unconfirmed/NO BET despite favorable finals.

## v0.3.39 Phase-Aware Kill-Handicap Calibration retained

Kill handicaps must first be classified as pregame/0:00, early live, or mid/late live.

For any handicap TAKE calculate break-even and a reasonable `P_cover` range; require the **lower end** to clear break-even by:

- +5pp for pregame positive handicaps;
- +4pp for early-live handicaps;
- +3pp for mid/late-live handicaps.

Pregame positive handicaps are high-friction. Draft resilience alone is insufficient. Require projected total kills, final-margin branches, H/T scaling, explicit probability edge and cascade-tail assessment.

## Retained Objective-Control Handicap Veto

For a positive kill handicap, aligned opponent **gold lead + meaningful neutral-objective control** cannot be dismissed because the current kill margin is small or the cushion is wide.

Without affirmative repeated contest/trade/return-kill evidence, `PASS` the positive handicap.

## Retained v0.3.38 Favorite Structural Margin-Expansion Ladder

When a leader has aligned **gold + objective pressure + structural conversion/access**, scan smaller favorite negative kill handicaps **before** the next kill conversion. Price each relevant line independently, prefer the least aggressive qualifying line, and do not chase after conversion.

## Total Kills and Duration remain separate

Total Kills requires current kills, whole kills to line, unresolved fight inventory, objective-density reserve, low/central/high branches, and v0.3.40 probability/fight-density controls.

Duration requires fast-close, central and extension branches plus structure/base route, stall evidence and terminal-access/methodical-control checks.

Retained duration corrections remain mandatory: no Over before 10:00 without two genuine stall signals beyond towerlessness; >=6 kills by 8:00 widens fast-finish risk; >=14 kills by 16:00 prevents 0-0 towers from confirming an Over; around 20:00 a >=+5k gold and +2-tower leader invalidates short Overs absent exceptional counterevidence; comeback tools widen distribution; Grubs alone do not prove completed acceleration; kill suppression does not equal time compression.

## Settlement verification

A screenshot marked `Live` or `Pending` is never final evidence by itself. However, the user has established a standing instruction: when they state **`Final`**, treat the attached/latest synchronized scoreboard as authoritative final-state evidence even if the UI still says `Live`.

If `Final` is stated but the exact statistic required to grade the market is absent from all synchronized evidence, request only the missing grading statistic.

## Retained controls

- 1u = 1,000,000 VND.
- Default individual shadow size while official wagering is paused: 0.25u simulated.
- No hard aggregate LoL per-map exposure cap.
- No automatic stake escalation, martingale behavior, or loss chasing.
- No correlated same-map add-ons.
- Multiple same-map shadow positions require materially distinct theses, synchronized state and qualifying prices.
- Current-map hard evidence resets every map; prior execution is only a soft prior.
- Item verification remains suspended until explicit restoration; unknown items are neutral and never guessed.
- Apply dominance override, multi-snapshot stabilization, role-gold breadth, observed-execution scoring, late objective-density kill reserves, soul-cascade routing, Baron acquisition/conversion separation, comeback-shape correction and settlement-verification correction.
- For active live maps: checklist -> verdict -> logging/plugins.

## Connected-stack authority

- GitHub is authoritative for model/rule policy.
- Airtable tracks maps, snapshots and positions.
- Google calibration workbook mirrors completed maps and rule changes.
- If stack records disagree, run the startup sync audit; do not silently merge conflicting states.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs belong under `models/lol/`. Shared policies belong under `shared/`.
