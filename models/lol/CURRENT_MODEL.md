# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.36**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.36.md`
- Prior active deltas: v0.3.35 through v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Connected-stack procedure: `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Prior full handoff: `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`
- Current handoff amendment: `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07_2325.md`

## Required load order

1. v0.3.36 through v0.3.26 rule deltas
2. item-verification suspension
3. v0.3.25 consolidated rules, probation status, calibration handbook
4. live fast path
5. main betting procedure
6. connected-stack sync/recording procedure
7. both procedure addenda
8. scoreboard protocol
9. pre-match/pregame procedure
10. shared stake policy
11. prior full 2026-08-07 handoff
12. current 23:25 amendment last

Where conflicts exist, **v0.3.36 controls**.

## Official probation

- 13/20 settled/completed
- Record: 7-6
- Net: -0.16425u / -164,250 VND
- Next official wager after eventual restoration: 14
- Standard/default stake after restoration: **0.25u**
- **No hard aggregate per-map exposure cap from v0.3.36 onward**
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20
- Official betting remains paused until the circuit breaker is complete and the user explicitly restores it

## Twenty-map shadow circuit breaker

- Required complete reviewed maps: **20**
- Complete/reviewed: **14/20**
- Next map: **CB-15**
- Remaining: CB-15 through CB-20
- Actual stake/exposure remains **0u** throughout the breaker
- Default logged shadow position size remains simulated **0.25u** unless separately justified
- Shadow results never change the official probation ledger
- Improving simulated results never shortens the breaker
- No official recommendations resume automatically after CB-20; explicit user restoration is required

## Settled shadow accounting through CB-14

- Settled shadow market record: **11-7**
- Nominal simulated net: **+0.8590u / +859,000 VND**
- Actual exposure/P&L: **0u / 0 VND**

## CB-14 settlement — Shifters vs GIANTX Game 2

- Final: **Shifters won, 17-11 kills, 35:34**.
- `CB-14-P01` — **Under 30.5 kills @2.316**, simulated 0.25u, **WIN +0.329u**, actual 0u.
- `CB-14-P02` — **GX +3.5 kills @1.781**, simulated 0.25u, **LOSS -0.25u**, actual 0u.
- CB-14 net: **+0.079u**.
- Earlier 22:38 gold-lead attribution was corrected: **GX**, not SHFT, held the +1.9k lead.
- Final evidence/user confirmation overrides the scoreboard tile that still displayed `FINAL RESULT PENDING`.

## v0.3.36 stake-policy change

Effective 2026-08-07 23:25 UTC+7, the user explicitly removed the prior **0.25u per-map aggregate exposure cap**.

- There is now **no hard aggregate LoL per-map exposure ceiling**.
- Standard/default individual position size remains **0.25u** unless separately justified.
- Removal of the cap does not authorize automatic stake escalation, martingale behavior, or loss chasing.
- During the circuit breaker actual exposure remains **0u**.
- Total Kills, Duration, map moneyline and kill handicap remain independently priced market families.
- The **no correlated same-map add-on** rule remains active.
- A second or later same-map position requires a materially distinct thesis, synchronized current state, qualifying price, and compliance with correlation/chasing rules.
- Do not convert a PASS/WATCH into an entry merely because the aggregate map cap is gone.

## Active calibration controls through CB-20

- Verdict first; logging after verdict.
- Live replies compact by default; brevity is presentation-only and never bypasses full model/rule checks.
- `NO LEAN` is acceptable.
- Recorded-position state and current thesis state are separate.
- `CONDITIONAL / UNRECORDED` and `RECORDED SHADOW POSITION` are distinct states.
- Total Kills and Duration are separate analytical market families and each receives an independent verdict.
- Current-map hard evidence resets every map; prior execution is a soft prior only.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Correlated quiet indicators remain one cluster; absence of action is not itself anti-conversion evidence.
- If a realistic fast-close branch reaches or beats the duration line, reject the Over unless that route has already been demonstrably resisted.
- Six or more total kills by 8:00 activates a wider fast-ending branch.
- Fourteen or more total kills by 16:00 prevents 0-0 towers from being confirming duration evidence.
- Around 20:00, a leader with at least +5k gold and a two-tower advantage invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; they do not automatically increase expected duration.
- Positive kill-handicap invalidation requires both a small remaining cushion and credible structural/Baron/base conversion control.
- Positive kill-handicap confirmation must not rely on shallow early kill/gold parity alone when the opponent has materially stronger scaling/objective conversion; require evidence that the underdog can repeatedly contest or trade through objective cycles.
- Draft handicap resilience alone is insufficient; synchronized price and current-map execution evidence are required.
- Apply dominance override, multi-snapshot stabilization, role-gold breadth, observed-execution scoring, current-map evidence reset, late objective-density kill reserves, soul-cascade routing, and Baron acquisition/conversion separation.
- Do not chase failing positions with wider or directionally correlated lines.
- Explicit user correction or verified final evidence overrides stale/conflicting telemetry and can reverse settlement/accounting.
- Item verification remains suspended until explicit restoration; unknown items are neutral and never guessed.

## Connected-stack status

- Completed-map synchronization is authoritative through **CB-14**.
- CB-15 is next; no active shadow position is open.
- GitHub is authoritative for model/rule policy.
- Airtable tracks maps, snapshots and positions.
- Google calibration workbook mirrors completed maps and rule changes; any discrepancy defers to GitHub.
- Every future chat must run the startup sync audit before claiming the stack is synchronized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs belong under `models/lol/`. Shared policies belong under `shared/`.
