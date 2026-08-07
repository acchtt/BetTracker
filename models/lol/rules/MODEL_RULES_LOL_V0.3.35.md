# MODEL RULES — LEAGUE OF LEGENDS v0.3.35

**Status:** Active delta  
**Effective date:** 2026-08-07 15:02 UTC+7  
**Corrected:** 2026-08-07 16:01 UTC+7  
**Supersedes:** v0.3.34 only where stated

## Purpose

Extend the official-wager circuit breaker by five additional complete reviewed maps at the user's explicit request. This correction also records the verified EDG vs JDG Game 1 settlement and enforces pre-existing duration and settlement controls after an erroneous clock read.

## 1. Thirteen-map circuit breaker

1. The circuit breaker requires **13 complete reviewed maps** in total.
2. Maps 9 through 13 are additional shadow-analysis maps beyond the prior eight-map requirement.
3. During the circuit breaker actual stake/exposure remain **0u**. Logged shadow leans default to simulated **0.25u** unless stated otherwise.
4. Shadow results do not change the official ledger, official P/L, or probation.
5. Official recommendations do not resume automatically after map 13; explicit user restoration is required.

## 2. Corrected map-8 settlement

**Map 8 — EDG vs JDG Game 1**

- EDG blue: Ambessa / Jarvan IV / Ryze / Lucian / Milio.
- JDG red: Gnar / Vi / Akali / Xayah / Rakan.
- Entry at 12:31: **Over 32 minutes @1.803**, simulated 0.25u.
- Entry state: 0-0 kills, JDG +59 gold, 0-0 towers, JDG 1-0 dragons.
- Corrected final: **JDG won 20-7 at 30:43**.
- Final structures/objectives shown: JDG 9-3 towers, 4-1 dragons, 1-0 Baron, 1-0 inhibitors.
- Position result: **LOSS, -0.25u**.

An earlier third-party frame was read as 40:41 and caused a false mathematical win settlement. The later explicit user correction plus final scoreboard overrides that state. The false settlement is reversed.

## 3. Map-8 process review

The Over 32 entry should have been rejected under already-active rules.

1. **Quiet-state clustering error:** 0-0 kills, 0-0 towers, and near-even gold were treated as multiple stall signals. They are one correlated quiet-state cluster, not independent anti-conversion evidence.
2. **No observed anti-conversion event:** JDG had already converted the first dragon. There was no verified failed siege, resisted objective-to-structure sequence, or other post-cycle anti-conversion event supporting a duration Over.
3. **Fast-branch contradiction:** the issued analysis itself contained a 30:00-32:00 fast-close branch. A realistic branch at or before the 32-minute line should have vetoed the Over under the retained duration rules.
4. **Draft acceleration underweighted:** JDG's Vi-Rakan-Akali engage/access plus Xayah safety and Gnar follow-up created a credible one-fight cascade once the game left the quiet opening phase.
5. **Settlement-control error:** a visible clock from a conflicting telemetry state was treated as decisive without later reconciliation. Any corrected final scoreboard or explicit user correction reverses such a settlement immediately.

No new predictive rule is promoted from this single result. The correction is stricter enforcement of existing duration and evidence-integrity rules.

## 4. Required duration enforcement through map 13

All v0.3.34 and earlier duration controls remain active. In particular:

- No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
- After 10:00, correlated quiet indicators such as low kills, near-even gold, and zero towers remain one cluster; they do not become independent stall confirmations merely because more time has elapsed.
- An Over requires observed anti-conversion evidence, not just absence of action.
- If the model's own realistic fast-close branch reaches or beats the offered duration line, the Over is `NO LEAN` unless the defending team has already demonstrated resistance to that exact route.
- Six or more kills by 8:00 activates a wider fast-ending branch.
- Fourteen or more kills by 16:00 prevents 0-0 towers from confirming an Over.
- Around 20:00, a leader with at least +5k gold and a two-tower edge invalidates short-line Overs absent exceptional counterevidence.
- Comeback tools widen the distribution; they do not automatically increase expected duration.

## 5. Settlement-correction control

When explicit user correction or verified final evidence contradicts an earlier state or settlement:

1. corrected/final evidence controls immediately;
2. reverse the prior shadow settlement and all derived accounting;
3. preserve the original entry rationale and timestamp;
4. record the discrepancy as state-extraction, telemetry, or settlement-verification error;
5. resynchronize cumulative shadow statistics before further model evaluation.

A mathematically determined prop may be graded from a live state only when the underlying clock/state itself is reliable and correctly associated with the event/map.

## 6. Corrected shadow state after map 8

- Complete/reviewed: **8/13**.
- Shadow market record: **6-5**.
- Nominal simulated net: **+0.03550u / +35,500 VND**.
- Actual exposure/P&L: **0u / 0 VND**.
- Next complete reviewed map: **shadow map 9/13**.

## 7. Retained model controls

All non-conflicting v0.3.34 through v0.3.26 controls remain active, including:

- verdict first;
- recorded-position state separate from current thesis state;
- dominance override and multi-snapshot stabilization;
- current-map hard-evidence reset;
- role-gold breadth and observed-execution scoring;
- late objective-density kill reserves and kill-Under invalidation thresholds;
- soul-cascade and Grub-assisted structure routing;
- Baron acquisition versus Baron conversion separation;
- winner versus margin separation;
- no chasing failing positions with wider correlated lines;
- item verification suspended until explicit restoration;
- duration markets official-ineligible through official probation wager 20.

## 8. Official probation unchanged

- completed: **13/20**;
- record: **7-6**;
- net: **-0.16425u / -164,250 VND**;
- next official wager after eventual restoration: **14**;
- standard stake after restoration: **0.25u = 250,000 VND**;
- maximum official exposure after restoration: **0.25u per map**;
- minimum odds: **1.60**;
- no stake increase authorized.

## Review requirement after map 13

Produce a combined review covering shadow record/P&L, performance by market family, entry-time versus update-time errors, duration calibration after maps 5 and 8, handicap invalidation/dominance performance, and whether restoration should end, narrow, or continue.