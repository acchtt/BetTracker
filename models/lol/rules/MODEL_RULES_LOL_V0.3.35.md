# MODEL RULES — LEAGUE OF LEGENDS v0.3.35

**Status:** Active delta  
**Effective date:** 2026-08-07 15:02 UTC+7  
**Supersedes:** v0.3.34 only where stated

## Purpose

Extend the official-wager circuit breaker by five additional complete reviewed maps at the user's explicit request after the eighth-map calibration sequence reached its final map.

## 1. Thirteen-map circuit breaker

1. The circuit breaker now requires **13 complete reviewed maps** in total.
2. Maps 9 through 13 are additional shadow-analysis maps beyond the prior eight-map requirement.
3. During the entire circuit breaker:
   - actual stake and actual exposure remain **0u**;
   - no market may be labeled `BET`, `OFFICIAL BET`, or an official candidate;
   - a logged shadow lean defaults to simulated **0.25u** unless explicitly stated otherwise;
   - shadow results do not change `ledger.json`, official P/L, or official probation;
   - exact settlement and a post-map review remain required for a map to count as complete.
4. Official LoL recommendations do **not** resume automatically after map 13. Restoration requires explicit user authorization after all 13 maps are complete and reviewed.
5. The extension cannot be shortened merely because simulated results improve.

## 2. Current transition state

At activation:

- maps **1-7 are complete and reviewed**;
- **map 8 — EDG vs JDG Game 1 — is still live/incomplete** at the latest supplied frame;
- the map-8 position **Over 32 minutes @1.803**, simulated 0.25u, is already mathematically settled as a **win** because the verified live clock reached 40:41;
- map 8 does not count as complete until a final state is verified and its review is recorded;
- current settled shadow market record including the map-8 duration position is **7-4**;
- current nominal simulated net is **+0.48625u / +486,250 VND**;
- actual exposure and actual P/L remain **0u / 0 VND**.

## 3. Retained maps 6-13 calibration controls

All v0.3.34 and handoff corrections remain active through map 13:

- default to one primary shadow lean per map;
- a second lean requires a materially different thesis and synchronized state;
- `NO LEAN` is acceptable;
- no duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness;
- six or more total kills by 8:00 activates a wider fast-ending branch;
- fourteen or more total kills by 16:00 prevents 0-0 towers from counting as confirming duration evidence;
- around 20:00, a leader with at least +5k gold and a two-tower advantage invalidates short-line duration Overs unless exceptional counterevidence exists;
- comeback tools widen the duration distribution rather than automatically increasing expected duration;
- positive kill-handicap invalidation requires both a small cushion and credible structural/Baron/base conversion control;
- do not chase a failing position with a wider correlated line;
- recorded-position state and current thesis state remain separate;
- a screenshot still marked `Live` is not final settlement evidence for map-result markets;
- verdict first; logging after verdict.

## 4. Settlement distinction

A market whose outcome is already mathematically determined by a verified live state may be graded before the map itself is final. Example: an Over 32-minute position is won once the verified clock exceeds 32:00 under the stated settlement basis.

This does **not** make the map complete for circuit-breaker accounting. A complete map still requires verified final-state evidence and review.

## 5. Retained model controls

All non-conflicting v0.3.33 through v0.3.26 controls remain active, including:

- late objective-density kill reserves and kill-Under invalidation thresholds;
- dominance override and multi-snapshot stabilization;
- current-map hard-evidence reset;
- role-gold breadth and carry-concentration treatment;
- observed execution conversion scoring;
- soul-cascade and Grub-assisted structure routing;
- Baron acquisition versus Baron conversion separation;
- winner versus margin separation;
- item verification suspension until explicit restoration;
- duration markets remain official-ineligible through official probation wager 20.

## 6. Official probation remains unchanged

- completed: **13/20**;
- record: **7-6**;
- net: **-0.16425u / -164,250 VND**;
- next official wager after eventual restoration: **14**;
- standard stake after restoration: **0.25u = 250,000 VND**;
- maximum official exposure after restoration: **0.25u per map**;
- minimum odds: **1.60**;
- no stake increase authorized.

## Review requirement after map 13

Produce a combined review covering:

- all shadow market results and simulated P/L;
- performance by market family;
- entry-time versus update-time errors;
- calibration by game phase;
- duration calibration after the map-5 corrections;
- handicap invalidation and dominance performance;
- whether any market family is suitable for limited restoration;
- whether the circuit breaker should end, narrow, or continue.
