# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.35**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.35.md`
- Prior active deltas: v0.3.34 through v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Procedure addenda: `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md` and `models/lol/procedures/LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-02.md`
- Scoreboard protocol: `models/lol/procedures/LOL_LIVE_SCOREBOARD_READING_PROTOCOL_2026-08-01.md`
- Shared stake policy: `shared/STAKE_POLICY_V2.json`
- Current cross-chat handoff: `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`

## Required load order

1. `models/lol/rules/MODEL_RULES_LOL_V0.3.35.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.34.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.33.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.32.md`
5. `models/lol/rules/MODEL_RULES_LOL_V0.3.31.md`
6. `models/lol/rules/MODEL_RULES_LOL_V0.3.30.md`
7. `models/lol/rules/MODEL_RULES_LOL_V0.3.29.md`
8. `models/lol/rules/MODEL_RULES_LOL_V0.3.28.md`
9. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
10. `models/lol/rules/MODEL_RULES_LOL_V0.3.27.md`
11. `models/lol/rules/MODEL_RULES_LOL_V0.3.26.md`
12. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
13. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
14. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
15. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
16. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
17. both procedure addenda
18. scoreboard protocol
19. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
20. `shared/STAKE_POLICY_V2.json`
21. `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`

## Current probation

- 13/20 settled/completed
- Record: 7-6
- Net: -164,250 VND / -0.16425u
- Next official wager after eventual restoration: 14
- Standard stake after restoration: 0.25u = 250,000 VND
- Maximum official exposure after restoration: 0.25u per map
- Minimum odds: 1.60
- Duration markets official-ineligible through wager 20

## Thirteen-map shadow circuit breaker

- Required complete reviewed maps: **13**
- Complete/reviewed: **7**
- Current map: **shadow map 8/13 — EDG vs JDG Game 1 — live/incomplete at latest state**
- Maps 9-13 are additional shadow maps requested by the user on 2026-08-07
- Actual stake/exposure: **0u**
- Default logged shadow stake: simulated **0.25u**
- No shadow result changes official ledger or probation
- No official recommendations resume automatically after map 13; explicit user restoration is required

## Current shadow accounting

- Through map 7: **6-4, +0.28550u**
- Map-8 Over 32 minutes @1.803 is mathematically settled **WIN +0.20075u** because the verified live clock reached 40:41
- Including that settled prop: **7-4, +0.48625u / +486,250 VND**
- Map 8 itself remains incomplete until final-state verification and review
- Actual exposure/P&L: **0u / 0 VND**

## Active calibration controls through map 13

- Verdict first; logging after verdict.
- Default to one primary shadow lean per map; a second requires a materially distinct thesis and synchronized state.
- `NO LEAN` is acceptable.
- Recorded-position state and current analytical thesis state are separate.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Six or more total kills by 8:00 activates a wider fast-ending branch.
- Fourteen or more total kills by 16:00 prevents 0-0 towers from being confirming duration evidence.
- Around 20 minutes, a leader with at least +5k gold and two-tower advantage invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; they do not automatically increase expected duration.
- Positive kill-handicap invalidation requires both a small remaining cushion and credible structural/Baron/base conversion control.
- Apply dominance override, multi-snapshot stabilization, role-gold breadth, observed-execution scoring, current-map evidence reset, late objective-density kill reserves, soul-cascade routing, and Baron acquisition/conversion separation from retained deltas.
- Do not chase failing positions with wider correlated lines.
- Live-labelled screenshots are not final map settlement evidence without a valid final-state confirmation; mathematically determined props may be graded independently.
- Item verification remains suspended until explicit restoration; unknown items are neutral and never guessed.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs belong under `models/lol/`. Shared policies belong under `shared/`.
