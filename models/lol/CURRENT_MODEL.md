# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.37**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.37.md`
- Prior active deltas: v0.3.36 through v0.3.26 under `models/lol/rules/`
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
2. v0.3.37 through v0.3.26 rule deltas
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

Where conflicts exist, **v0.3.37 controls**.

## Official probation

- 13/20 settled/completed
- Record: 7-6
- Net: -0.16425u / -164,250 VND
- Next official wager after eventual restoration: 14
- Standard/default stake after restoration: **0.25u**
- No hard aggregate per-map exposure cap
- Minimum odds: **1.60**
- Duration markets official-ineligible through wager 20
- Official betting remains paused until the 20-map circuit breaker is complete and the user explicitly restores it

## Twenty-map shadow circuit breaker — current chat state

User-confirmed recent sequence:

- **CB-17:** TH +7.5 kills vs FNC — LOSS; this triggered the Objective-Control Handicap Veto patch.
- **CB-18:** TH vs FNC Game 3 Under 26.5 thesis was directionally correct with 25 final kills, but the executable line deteriorated before placement. Correct status: **NO BET / 0u**, not a win.
- The user explicitly stated **CB-19 was next** before the T1 vs HLE sequence.
- **CB-19:** T1 vs HLE Game 2 is treated as the next complete reviewed map. Final: HLE won 12-9 kills at 33:59. No position was recorded. Under 23.5 @1.894 was recommended conditionally but not confirmed before the line moved; therefore **NO BET / 0u** and no graded market result.
- **CB-20:** T1 vs HLE Game 3 is the active/next breaker map in the current chat unless the user supplies a newer correction.

Actual stake/exposure remains **0u** throughout the breaker. Shadow results do not change official probation. Official recommendations do not resume automatically after CB-20; explicit user restoration remains mandatory.

Do not reconstruct cumulative shadow record/net from partial chat history. Run the connected-stack startup sync audit before asserting a cumulative CB total beyond the last fully synchronized record.

## v0.3.37 mandatory execution discipline

### Verdict format

The first visible line must be one of:

- `TAKE — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `PASS — [market/selection] @[odds] — 0u.`
- `HOLD — [market/selection] @[odds] — 0u.`

Live responses remain brief, but brevity never bypasses model gates.

### Pre-verdict checklist is compulsory

Before every live verdict, internally verify:

1. current-frame fingerprint;
2. recorded-position state versus current thesis state;
3. independent moneyline scan;
4. exact kill-handicap arithmetic and cascade test;
5. independent total-kills low/central/high projection;
6. independent duration fast/central/extension projection;
7. line/price availability, minimum odds, correlation and chasing controls;
8. Live/Pending/final settlement state.

Missing decision-critical data => fail closed with `PASS` or `HOLD`. Never fill a missing gate with intuition.

### Executable-price rule

A `TAKE` remains **CONDITIONAL / UNRECORDED** until the user confirms the same qualifying executable line/price remained available and was accepted for tracking.

If the line locks, disappears, or deteriorates before confirmation, the recommendation becomes **NO BET / 0u**. It is never graded as a win or loss later, even if the underlying thesis would have been correct.

### Objective-Control Handicap Veto

For a positive kill handicap, aligned opponent **gold lead + meaningful neutral-objective control** cannot be dismissed merely because the current kill margin is small or the cushion is wide.

Without affirmative current-map evidence that the handicap side can survive the next cascade and repeatedly contest/trade or generate return kills through objective cycles, the positive handicap is a **PASS**.

### Exact handicap arithmetic

Every evaluated handicap must calculate:

- current margin;
- required final margin;
- exact additional future net kills required;
- cascade stress test;
- objective/structural alignment;
- return-kill and contest routes;
- repair/line-chasing state when applicable.

Never claim a line widened/tightened without a verified prior same-map line.

### Total Kills and Duration are separate

Total Kills requires current kills, whole kills to line, unresolved fight inventory, objective-density reserve and low/central/high branches.

Duration requires fast-close, central and extension branches plus structure/base route, stall evidence, and terminal-access/methodical-control checks when applicable.

Retained duration corrections remain mandatory: no Over before 10:00 without two genuine stall signals beyond towerlessness; >=6 kills by 8:00 widens fast-finish risk; >=14 kills by 16:00 prevents 0-0 towers from confirming an Over; around 20:00 a >=+5k gold and +2-tower leader invalidates short Overs absent exceptional counterevidence; comeback tools widen the distribution; Grubs alone do not prove completed acceleration; kill suppression does not equal time compression.

### Settlement verification

A screenshot marked `Live` or `Pending` is never final settlement evidence by itself. Settle only from a verified final/result state or a separate explicit exact user confirmation sufficient under the evidence hierarchy.

### Plugin/logging order

For active live maps:

1. complete model checklist;
2. show verdict immediately;
3. then perform GitHub/Airtable/Sheets logging or other connected-stack work.

Logging/plugin work never delays the live verdict.

## Retained controls

- 1u = 1,000,000 VND.
- Default individual shadow size: 0.25u.
- No hard aggregate LoL per-map exposure cap.
- No automatic stake escalation, martingale behavior, or loss chasing.
- No correlated same-map add-ons.
- Multiple same-map shadow positions require materially distinct theses, synchronized state and qualifying prices.
- Current-map hard evidence resets every map; prior execution is only a soft prior.
- Item verification remains suspended until explicit restoration; unknown items are neutral and never guessed.
- Apply dominance override, multi-snapshot stabilization, role-gold breadth, observed-execution scoring, late objective-density kill reserves, soul-cascade routing, Baron acquisition/conversion separation, comeback-shape correction and settlement-verification correction.

## Connected-stack authority

- GitHub is authoritative for model/rule policy.
- Airtable tracks maps, snapshots and positions.
- Google calibration workbook mirrors completed maps and rule changes.
- If stack records disagree, run the startup sync audit; do not silently merge conflicting states.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs belong under `models/lol/`. Shared policies belong under `shared/`.
