# Current League of Legends Model

**Canonical namespace:** `models/lol/`

- Active model: **LoL v0.3.35**
- Active rules: `models/lol/rules/MODEL_RULES_LOL_V0.3.35.md`
- Prior active deltas: v0.3.34 through v0.3.26 under `models/lol/rules/`
- Portable baseline context: `models/lol/context/lol-v0.3.25/`
- Item-verification suspension: `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
- Live fast path: `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
- Main procedure: `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
- Connected-stack sync/recording procedure: `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`
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
17. `models/lol/procedures/LOL_CONNECTED_STACK_SYNC_AND_RECORDING_PROCEDURE_2026-08-07.md`
18. both procedure addenda
19. scoreboard protocol
20. `models/lol/context/lol-v0.3.25/PREMATCH_PREGAME_PROCEDURE.md`
21. `shared/STAKE_POLICY_V2.json`
22. `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`

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
- Complete/reviewed: **11**
- Next complete reviewed map: **shadow map 12/13**
- CB-11 — Hanjin BRION vs BNK FEARX Game 2 — is complete/reviewed
- User-confirmed final despite delayed telemetry: **BRO won at 36:38, 25-16 kills**
- Final structure: **BRO 9-3 towers, 4-1 dragons, 2-0 Barons, 1-0 inhibitors**
- Maps 9-13 are additional shadow maps requested by the user on 2026-08-07
- Actual stake/exposure: **0u**
- Default logged shadow stake: simulated **0.25u**
- No shadow result changes official ledger or probation
- No official recommendations resume automatically after map 13; explicit user restoration is required

## Corrected shadow accounting

- Through map 7: **6-4, +0.28550u**
- Map 8 — EDG vs JDG Game 1: **Over 32 minutes @1.803 LOST -0.25u**
- CB-09 had no recorded position and therefore no P/L impact
- CB-10: **BRO +6.5 kills @2.056 WON +0.264u** and **Under 33.5 kills @1.744 WON +0.186u**
- CB-11: **Over 30.5 kills @1.710 WON +0.1775u**
- Current settled shadow market record: **9-5**
- Nominal simulated net: **+0.66300u / +663,000 VND**
- Actual exposure/P&L: **0u / 0 VND**

## Map-8 correction lesson

The duration entry should have been rejected under existing rules:

- 0-0 kills, 0-0 towers and near-even gold were one correlated quiet-state cluster, not independent stall evidence;
- no observed post-cycle anti-conversion event supported the Over;
- the analysis itself contained a 30:00-32:00 fast-close branch, which contradicted an Over 32 entry;
- JDG's Vi-Rakan-Akali access plus Xayah/Gnar conversion created a credible one-fight acceleration branch;
- an earlier conflicting clock read caused a false win settlement and has been reversed.

## Map-9 review

CB-09 draft:

- Gen.G blue: Olaf / Lee Sin / Galio / Ezreal / Leona.
- KT red: Zaahen / Skarner / Orianna / Kai'Sa / Nautilus.

A conditional **KT +7.5 @1.983** lean was discussed from the last quoted pregame price, but the exact price was not re-synchronized after draft and no Airtable `Positions` record was written. Under the connected-stack procedure it remained **CONDITIONAL / UNRECORDED** and never entered shadow P/L.

At 21:45 Gen.G led **8-2 kills, +9.7k gold, 5-0 towers, 2-0 dragons**. This correctly triggered dominance override and invalidated the KT handicap-resilience thesis. The verified final at 25:13 was Gen.G **12-2**.

No new predictive rule is promoted from this single unrecorded lean. Existing controls are enforced more strictly: draft resilience is not enough for a positive handicap without synchronized price plus current-map confirmation, and broad structural/economic dominance overrides theoretical comeback shape.

## Map-10 review

CB-10 — Hanjin BRION vs BNK FEARX Game 1:

- Preview prior treated BRO as materially closer than the opening market because of prior matchup evidence and current execution profile.
- At 10:36 the live state was **2-2 kills, near-even gold, 0-0 towers, BFX 1-0 dragons**.
- **BRO +6.5 kills @2.056** was recorded and later won; final kill score was **BRO 14-17 BFX**.
- At 17:26, **Under 33.5 kills @1.744** independently qualified. The user explicitly instructed it to be recorded despite the existing map position; this was treated as a one-map exposure override, not a global stake-policy change.
- Verified final: **BRO won at 38:35**, 31 total kills.
- Both positions won for **+0.450u** combined simulated P/L.

Calibration lesson: kill handicap, total kills, and duration are distinct analytical market families. A map-winner result does not determine kill-handicap validity, and independent market evaluation must remain separate from aggregate exposure policy.

## Map-11 review

CB-11 — Hanjin BRION vs BNK FEARX Game 2:

Draft:

- BRO blue: Rumble / Pantheon / Cassiopeia / Kai'Sa / Leona.
- BFX red: Ambessa / Vi / Syndra / Ziggs / Rell.

Post-draft odds:

- BFX ML 1.648 / BRO 2.205;
- Over/Under 32m 1.711 / 2.101;
- Over/Under 30.5 kills 1.710 / 2.081;
- BFX -5.5 1.867 / BRO +5.5 1.906.

**Over 30.5 kills @1.710**, simulated 0.25u, was recorded pregame because both drafts retained repeatable engage and re-engage routes. At 9:14 the map was only **1-1 kills**, so the thesis was correctly marked **DEGRADED**, not invalidated. The position later became mathematically won when the live frame reached 41 kills.

The scoreboard still displayed `Live` at 36:38, but the user explicitly confirmed this was the final state and that result telemetry was delayed. Under the connected-stack discrepancy hierarchy, the explicit user correction overrides the stale `Live` flag.

Final accepted state:

- **BRO won at 36:38**;
- **25-16 kills** (41 total);
- **BRO +11k gold**;
- **BRO 9-3 towers**;
- **BRO 4-1 dragons**;
- **BRO 2-0 Barons**;
- **BRO 1-0 inhibitors**.

Position settlement: **WIN +0.1775u simulated**. No material process error is recorded.

## Connected-stack synchronization status

Synchronization is current through **CB-11**.

- **GitHub:** authoritative through completed/reviewed CB-11.
- **Airtable Maps:** CB-01 through CB-11 are present and complete/reviewed; CB-04 preserves unknown final details rather than inventing them.
- **Airtable Positions:** all **14** actual recorded shadow market positions through CB-11 are persisted and settled as applicable.
- **Airtable Snapshots:** synchronized evidence is mirrored from CB-05 through CB-11. Earlier CB-01 through CB-04 snapshot detail was not fully reconstructable and was deliberately not invented.
- **Google calibration workbook Maps:** synchronized through CB-11.
- **Google calibration workbook Positions:** synchronized through CB-11.
- **Google calibration workbook Snapshots:** mirrored from CB-05 through CB-11.
- **Google Rule Changes:** includes v0.3.35, the mandatory 2026-08-07 connected-stack procedure, independent Total-Kills/Duration handling, and compact-live-response presentation guidance.
- There is **no tracker lag through CB-11**.

Every future chat must still run the startup sync audit. A previously synchronized stack can become stale again.

## Active calibration controls through map 13

- Verdict first; logging after verdict.
- Live responses should be compact by default, but brevity is presentation-only and never bypasses full model/rule checks.
- Default to one primary shadow lean per map; a second requires a materially distinct thesis and synchronized state, unless the user explicitly authorizes a one-map exposure override.
- `NO LEAN` is acceptable.
- Recorded-position state and current analytical thesis state are separate.
- `CONDITIONAL / UNRECORDED` and `RECORDED SHADOW POSITION` are distinct states; chat wording alone never creates a recorded position.
- Total Kills and Duration are separate analytical market families and receive independent verdicts; side/kill-handicap analysis does not suppress either family.
- Exposure policy remains separate from market-family classification; no global stake increase has been authorized.
- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- Correlated quiet indicators remain one cluster after 10:00; absence of action is not itself anti-conversion evidence.
- If a realistic fast-close branch reaches or beats the duration line, reject the Over unless that route has already been demonstrably resisted.
- Six or more total kills by 8:00 activates a wider fast-ending branch.
- Fourteen or more total kills by 16:00 prevents 0-0 towers from being confirming duration evidence.
- Around 20 minutes, a leader with at least +5k gold and a two-tower advantage invalidates short-line duration Overs unless exceptional counterevidence exists.
- Comeback tools widen duration distribution; they do not automatically increase expected duration.
- Positive kill-handicap invalidation requires both a small remaining cushion and credible structural/Baron/base conversion control.
- Draft handicap resilience is insufficient by itself for entry; synchronized price and current-map execution evidence are required.
- Apply dominance override, multi-snapshot stabilization, role-gold breadth, observed-execution scoring, current-map evidence reset, late objective-density kill reserves, soul-cascade routing, and Baron acquisition/conversion separation from retained deltas.
- Do not chase failing positions with wider correlated lines.
- Explicit user correction or verified final evidence immediately overrides stale/conflicting telemetry and reverses derived settlement/accounting when necessary.
- Item verification remains suspended until explicit restoration; unknown items are neutral and never guessed.
- No stake increase is authorized.

## Write boundary

All new LoL rules, procedures, context, reviews and handoffs belong under `models/lol/`. Shared policies belong under `shared/`.