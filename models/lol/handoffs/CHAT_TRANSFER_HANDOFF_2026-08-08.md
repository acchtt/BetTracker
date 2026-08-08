# LoL Cross-Chat Transfer Handoff — 2026-08-08

**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.37**  
**Purpose:** enforce mandatory live-verdict compliance across future chats and preserve the current circuit-breaker/live state.

## 1. Required load order

1. `models/lol/CURRENT_MODEL.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.37.md`
3. retained deltas v0.3.36 through v0.3.26
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

Where conflicts exist, **v0.3.37 controls**.

## 2. Mandatory operating behavior

Every live trigger must complete the v0.3.37 checklist before the verdict. Brevity is presentation-only.

First line must be one of:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [market/selection] @[odds] — 0u.`
- `HOLD — [market/selection] @[odds] — 0u.`

Do not run GitHub/Airtable/Sheets logging before the live verdict.

Mandatory internal sequence:

1. newest-frame fingerprint;
2. recorded-position vs thesis state;
3. ML gate;
4. exact handicap arithmetic + cascade test + Objective-Control Handicap Veto;
5. total-kills current/required/low-central-high projection;
6. duration fast/central/extension projection;
7. price availability, minimum odds, correlation/chasing checks;
8. settlement-state verification.

Missing decision-critical data => `PASS` or `HOLD`; never infer.

## 3. Executable-line rule

A `TAKE` is **CONDITIONAL / UNRECORDED** until the user confirms that the same qualifying line/price remained executable and was accepted for tracking.

If the line locks, disappears, or deteriorates before confirmation:

- status becomes **NO BET / 0u**;
- do not record the position;
- do not later grade it as a win/loss;
- a correct thesis with an unavailable price is not a model win.

CB-18 and T1-HLE Game 2 are explicit calibration examples of this rule.

## 4. Objective-Control Handicap Veto

For positive kill handicaps, opponent **aligned gold + meaningful neutral-objective control** cannot be dismissed merely because the kill margin is small or the cushion is wide.

Without affirmative repeated contest/trade/return-kill evidence from the positive-handicap side, `PASS` the positive handicap.

Never claim line widening/tightening without a verified prior same-map line.

## 5. Circuit-breaker state

Official probation remains unchanged:

- 13/20 official wagers completed;
- record 7-6;
- net -0.16425u / -164,250 VND;
- next official wager after eventual restoration: 14;
- official betting paused through CB-20 and requires explicit restoration afterward.

Recent breaker sequence supplied/confirmed in chat:

- **CB-17:** TH +7.5 kills vs FNC — LOSS; triggered Objective-Control Handicap Veto correction.
- **CB-18:** TH vs FNC Game 3 Under 26.5 thesis finished with 25 kills, but line deteriorated before placement => **NO BET / 0u**, not a win.
- User then stated **CB-19 was next**.
- **CB-19:** T1 vs HLE Game 2 — complete/reviewed, no recorded position. Final HLE 12-9 T1 at 33:59. Conditional Under 23.5 @1.894 was never confirmed before line movement => **NO BET / 0u**.
- **CB-20:** T1 vs HLE Game 3 is active/next at handoff time.

Do not assert a cumulative simulated CB record/net beyond the last fully synchronized connected-stack audit without syncing the tracker first.

## 6. T1 vs HLE series context

Game 1 live statistics were reported bugged; do not use that feed for model settlement or calibration.

Game 2 verified final:

- HLE won at **33:59**;
- kills HLE 12-9 T1;
- towers HLE 7-3 T1;
- dragons T1 4-2 HLE;
- Barons 1-1;
- inhibitors HLE 1-0 T1;
- no recorded shadow position.

## 7. Active T1 vs HLE Game 3 state at latest synchronized snapshot

**Screenshot status:** `Live` — never settle this state.

At **9:51**:

- HLE 6-3 T1 kills;
- HLE +1.5k gold;
- towers 0-0;
- HLE 1-0 dragons;
- HLE 3 Void Grubs (user explicitly confirmed);
- Baron 0-0;
- inhibitors 0-0.

Draft:

- HLE: Cho'Gath / Nafiri / Ahri / Ezreal / Karma
- T1: Rumble / Nocturne / Viktor / Varus / Bard

Displayed markets near this snapshot:

- HLE ML 1.255 / T1 ML 3.792
- duration 31: Over 1.726 / Under 2.079
- total kills 33.5: Over 1.822 / Under 1.956
- HLE -10.5 kills 1.854 / T1 +10.5 kills 1.902

Correct strict-model status at this snapshot: **PASS all markets; RECORDED POSITION: NONE.**

Reasoning controls:

- HLE ML below 1.60 minimum => automatic PASS.
- HLE leads current kills by +3; HLE -10.5 requires +8 additional future net kills to cover, too demanding without stronger structural conversion.
- T1 +10.5 cannot be promoted from cushion alone because HLE has aligned gold + dragon + 3-Grub control; Objective-Control Handicap Veto active absent affirmative T1 contest/trade evidence.
- 9 kills at 9:51; total 33.5 requires +25 additional kills. Must run low/central/high fight-inventory branches before any future total verdict.
- Duration 31 must remain separate. At 9:51 the pre-10:00 Over restriction applies; HLE Grubs/early kills widen fast-close risk while 0 towers means completed structural acceleration is not yet proven.

## 8. Settlement verification

A screenshot marked `Live` or `Pending` is never final evidence by itself. Do not settle Game 3 until a verified final/result state or separate exact user confirmation is supplied under the evidence hierarchy.

## 9. Recorded-position discipline

At handoff time:

- T1-HLE Game 3 recorded position: **NONE**.
- No prior unconfirmed/expired line may be resurrected.
- Every new screenshot is a fresh synchronized state.

## 10. Future-chat instruction

Start by loading `CURRENT_MODEL.md`, v0.3.37, the mandatory checklist, retained rules/procedures, and this handoff. Then use the newest user-supplied state. If repository/connected-stack state conflicts with an explicit newer user correction, the user correction controls and the discrepancy must be logged after the verdict.
