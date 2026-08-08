# LoL Cross-Chat Transfer Handoff — 2026-08-08

**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.40**  
**Purpose:** preserve mandatory live-verdict compliance, completed circuit-breaker state, phase-aware handicap rules, favorite pre-conversion handicap ladder, post-draft ML calibration, and early total-kill fight-density correction.

## 1. Required load order

1. `models/lol/CURRENT_MODEL.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.40.md`
3. retained deltas v0.3.39 through v0.3.26
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

Where conflicts exist, **v0.3.40 controls**.

## 2. Mandatory operating behavior

Every live trigger must complete the full checklist before verdict. Brevity is presentation-only.

First line while official wagering remains paused:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [market/selection] @[odds] — 0u.`
- `HOLD — [market/selection] @[odds] — 0u.`

Do not run GitHub/Airtable/Sheets logging before a live verdict.

Mandatory internal sequence:

1. newest-frame fingerprint;
2. recorded-position vs thesis state;
3. ML gate including v0.3.40 pregame lower-bound probability edge;
4. phase-aware handicap classification + exact arithmetic + margin distribution + break-even/cover-probability gate + cascade test + Objective-Control Handicap Veto + v0.3.38 favorite ladder scan;
5. total-kills current/required/low-central-high projection + v0.3.40 probability/fight-density reserve;
6. duration fast/central/extension projection;
7. price availability, minimum odds, correlation/chasing checks;
8. settlement-state verification.

Missing decision-critical data => `PASS` or `HOLD`; never infer.

## 3. Executable-line rule

A `TAKE` is **CONDITIONAL / UNRECORDED** until the user confirms the same qualifying line/price remained executable and was accepted for tracking.

If line locks, disappears or deteriorates before confirmation => **NO BET / 0u**. Never retro-grade it.

## 4. v0.3.40 Pregame / 0:00 Moneyline Gate

Before any pregame ML TAKE:

- construct baseline map `P_win` range before draft;
- keep map prior distinct from series prior;
- apply verified side adjustment;
- apply disciplined draft adjustment;
- apply supported execution/form adjustment;
- calculate `P_break_even = 1 / odds`;
- require the **lower end** of final `P_win` range to exceed break-even by **at least +3pp**.

Draft alone normally changes the baseline by **0–4pp**. A >4pp move requires at least three independent material matchup advantages. Do not overweight a single attractive interaction such as Sylas ultimate access.

### NAVI vs SK G1 calibration

SK ML @2.239 was confirmed as a separate 0.25u shadow bet. Stated SK range was 47–50% versus 44.66% break-even; lower-bound edge only ~+2.34pp. Final NAVI 27-12 at 30:14 => **SK ML LOSS -0.25u**.

Under v0.3.40 this pregame ML would be `PASS/HOLD` because the lower-bound edge does not clear +3pp.

NAVI draft was Olaf / Nocturne / Orianna / Miss Fortune / Shen; SK was Kled / Vi / Sylas / Corki / Rell. The analysis overvalued SK's Sylas/return-engage interaction and undervalued NAVI's repeatable Nocturne/Shen delivery into Orianna/MF with Olaf front pressure.

## 5. v0.3.40 Early Total-Kills Gate

For total-kills TAKEs:

- **early live:** lower end of selection probability range must clear break-even by **+4pp**;
- **mid/late live:** lower end must clear by **+3pp**.

High early fight-density triggers include:

- >=8 total kills by 8:00;
- >=10 by 10:00;
- repeated early multi-player skirmishes;
- multiple globals/semi-globals/point-and-click engage/layered follow-up coming online.

If high fight-density is active and at least three meaningful fight windows remain, high-kill branch gets at least **25–30% probability mass** absent strong suppression evidence.

If the two drafts collectively contain four or more meaningful fight-creation channels, apply an additional volatility penalty against an early Under.

### NAVI vs SK G1 total calibration

- Under 32.5 @2.827 at 6:51 was recommended but **never confirmed**; final total 39 => remains **NO BET / 0u**, calibration only. High branch was underweighted.
- Under 43.5 @2.480 at 13:21 was also unconfirmed => NO BET / 0u despite final 39.
- Over 29m @2.008 at 18:41 was unconfirmed => NO BET / 0u despite final 30:14.

Each later line must be repriced independently; no expired recommendation is resurrected.

## 6. v0.3.39 Phase-Aware Kill-Handicap Calibration retained

Before pricing a kill handicap classify: pregame/0:00, early live, or mid/late live.

For every handicap TAKE calculate break-even and reasonable `P_cover` range; lower end must clear by:

- +5pp pregame positive handicap;
- +4pp early-live handicap;
- +3pp mid/late-live handicap.

Pregame positive handicaps remain high-friction. Draft resilience alone is insufficient.

## 7. Objective-Control Handicap Veto retained

For positive kill handicaps, aligned opponent **gold + meaningful neutral-objective control** cannot be dismissed because the kill margin is small or cushion wide. Without affirmative repeated contest/trade/return-kill evidence => `PASS`.

## 8. v0.3.38 Favorite Structural Margin-Expansion Ladder retained

When leader has aligned **gold + objective pressure + structural conversion/access**, scan smaller favorite negative handicaps before next kill conversion, price independently, prefer least aggressive qualifying line, and do not chase after conversion.

## 9. Circuit-breaker and official state

Official probation remains:

- 13/20 official wagers completed;
- record 7-6;
- net -0.16425u / -164,250 VND;
- next official wager after explicit restoration: 14.

20/20 shadow breaker maps are complete. Official betting remains **paused** until explicit user restoration.

## 10. Post-breaker recorded shadow sequence

- DNS +1.5 maps @1.913 vs NS — WIN — +0.22825u.
- DNS Game 2 ML @1.979 vs NS — WIN — +0.24475u.
- EDG +10.5 kills @1.810 vs BLG Game 2 — LOSS — -0.25u.
- SK Game 1 ML @2.239 vs NAVI — LOSS — -0.25u.

Net across these four recorded post-breaker shadow positions: **-0.02700u**. Actual exposure remains **0u**.

## 11. Settlement verification and standing user `Final` instruction

A `Live`/`Pending` screenshot is not final by itself. However, when user states **`Final`**, treat attached/latest synchronized scoreboard as authoritative final-state evidence even if UI still displays `Live`.

If exact grading statistic is absent from all synchronized evidence, request only the missing statistic.

## 12. Recorded-position discipline

- recorded positions and current thesis are separate;
- no unconfirmed/expired line may be resurrected;
- every new map resets hard evidence;
- series-level and separate map bets do not suppress normal predictions unless actual correlation rules apply.

## 13. Immediate next state

NAVI leads SK **1-0** after Game 1. Move to **Game 2** with v0.3.40 active. Request/verify Game 2 side assignment, complete draft, 0:00/current state, and executable ML / kill handicap / total kills / duration odds before analysis.

## 14. Future-chat instruction

Start by loading `CURRENT_MODEL.md`, v0.3.40, mandatory checklist, retained rules/procedures, and this handoff. Then use newest user-supplied state. If connected-stack state conflicts with an explicit newer user correction, user correction controls and discrepancy must be logged after verdict.
