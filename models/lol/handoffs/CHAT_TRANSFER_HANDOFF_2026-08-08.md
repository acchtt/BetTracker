# LoL Cross-Chat Transfer Handoff — 2026-08-08

**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.38**  
**Purpose:** preserve mandatory live-verdict compliance, completed circuit-breaker state, and the favorite pre-conversion handicap-ladder correction.

## 1. Required load order

1. `models/lol/CURRENT_MODEL.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.38.md`
3. retained deltas v0.3.37 through v0.3.26
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

Where conflicts exist, **v0.3.38 controls**.

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
4. exact handicap arithmetic + cascade test + Objective-Control Handicap Veto + v0.3.38 favorite ladder scan;
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

## 4. Objective-Control Handicap Veto

For positive kill handicaps, opponent **aligned gold + meaningful neutral-objective control** cannot be dismissed merely because the kill margin is small or the cushion is wide.

Without affirmative repeated contest/trade/return-kill evidence from the positive-handicap side, `PASS` the positive handicap.

Never claim line widening/tightening without a verified prior same-map line.

## 5. v0.3.38 Favorite Structural Margin-Expansion Ladder

When the leader has aligned **gold + objective pressure + structural conversion/access**, the model must scan smaller favorite negative kill handicaps **before** waiting for the next kill conversion.

For every plausible favorite line:

- calculate current margin, required final margin and exact future net kills needed;
- project the next two contest/cascade sequences;
- evaluate objective-to-structure/base conversion;
- evaluate trailer return-kill routes;
- build low/central/high future margin branches;
- set line-specific fair price and minimum execution threshold;
- prefer the least aggressive qualifying line.

After a favorite conversion, do not chase a materially larger line merely because the thesis was confirmed. Reprice from scratch; `PASS — EDGE MOVED WITH STATE` is valid.

## 6. Circuit-breaker state — complete

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

The required **20/20 breaker maps are complete**. Official betting remains **paused** and does not resume automatically. The user must explicitly restore official wagering.

## 7. T1 vs HLE Game 3 calibration

At 19:31 HLE led 7-4 with approximately +3.3k gold, 3-0 towers, 3-0 dragons and 3 Grubs.

Correct v0.3.38 interpretation:

- T1 +10.5: correctly PASS under Objective-Control Handicap Veto;
- HLE -10.5: still not automatically a TAKE because +8 additional future net kills were required and no Baron/base access existed;
- the model should nevertheless have scanned smaller HLE negative lines (-6.5/-7.5/-8.5 when available) and set executable thresholds before the next conversion;
- waiting for another HLE conversion without a ladder risks becoming commercially late.

Final 28-13 is calibration evidence only; no unavailable line receives retroactive win credit.

## 8. Settlement verification

A screenshot marked `Live` or `Pending` is never final evidence by itself. Settle only from a verified final/result state or separate exact user confirmation sufficient under the evidence hierarchy.

## 9. Recorded-position discipline

At handoff time:

- no T1-HLE Game 3 position was recorded;
- no prior unconfirmed/expired line may be resurrected;
- every new map resets current-map hard evidence.

## 10. Next scheduled LCK series

After T1 vs HLE on 2026-08-08, the next scheduled LCK series is **Nongshim RedForce vs DN SOOPers**, scheduled for 18:00 UTC+7 / 19:00 KST, BO3, Rise Group.

Pre-series analysis must verify current starters/side information and use current prices before any actionable threshold is treated as executable.

## 11. Future-chat instruction

Start by loading `CURRENT_MODEL.md`, v0.3.38, the mandatory checklist, retained rules/procedures, and this handoff. Then use the newest user-supplied state. If repository/connected-stack state conflicts with an explicit newer user correction, the user correction controls and the discrepancy must be logged after the verdict.
