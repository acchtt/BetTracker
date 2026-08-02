# League of Legends Model Rules v0.3.22

**Status:** Active immediately  
**Effective date:** 2026-08-02 21:05 UTC+7  
**Purpose:** Correct favorite kill-handicap evaluation when the cover can be produced across several linked post-Baron and objective sequences rather than one immediate ending fight.

This version supersedes v0.3.21 where conflicting. All stricter bankroll, explicit-placement, probation, state-direction, item-confirmation, anti-line-chasing, expiry, and one-thesis-per-map rules remain active.

## 1. Triggering review

KT vs HLE Game 3 exposed a second favorite-margin error.

At 25:24 KT led 16-11 kills, roughly 49.8k-46.2k gold, 3-2 towers, held first Baron, and had two Infernal dragons. KT -8.5 was available at 1.642. The market required KT to gain only four additional future net kills.

Composition and economy were strongly asymmetric:

- HLE had no durable frontline and little reliable initiation;
- Varus was materially behind and functionally weak as a primary carry;
- Yunara was already functional and continued scaling;
- KT had Gnar, Annie, and a heavily accelerated Naafiri for backline access;
- HLE still had to clear waves, contest vision, defend dragon, and later contest or concede the next Baron cycle.

Final result: KT won 23-11. From the snapshot onward KT gained seven unanswered kills and covered -8.5 by three kills.

The correction is not to assume first Baron means an immediate end. It is to value the full linked opportunity horizon created by first Baron, lane pressure, vision denial, wave exposure, dragon timing, and the next Baron or base-defense sequence.

## 2. Immediate cascade versus cumulative sequence horizon

Evaluate two separate horizons.

### Immediate cascade

The current Baron siege, objective contest, or base-defense sequence only.

A normal first-Baron push should usually be budgeted as:

- 0-2 net kills in a controlled uncontested siege;
- 1-3 net kills when the defender lacks frontline, safe vision access, or reliable disengage;
- 4+ net kills only with explicit near-terminal evidence.

First Baron alone is not an automatic terminal-cascade signal.

### Cumulative sequence horizon

The linked sequences before the game materially resets, normally through the next Baron cycle or a decisive base state:

1. first-Baron siege or pick;
2. post-Baron wave pushes and vision catches;
3. mandatory dragon or soul-point setup;
4. second-Baron setup, inhibitor defense, or ending attempt.

A favorite handicap may be supported by the cumulative horizon even when no single sequence is expected to cover the full remaining margin.

## 3. Remaining net-kill requirement is primary

Always calculate:

- current kill margin;
- final margin required to cover;
- additional future net kills required.

Do not classify a live -8.5 line as inherently large. A team already leading by five needs only four additional net kills.

The remaining requirement, not the printed handicap alone, determines whether the market is modest, aggressive, or excessive.

## 4. Between-objective attrition evidence

Between first and second Baron, count credible pick and attrition windows when the trailing team must:

- push exposed side waves;
- face-check or contest river and jungle vision;
- rotate through narrowed map access;
- defend dragon, soul point, inhibitor, or Baron setup;
- protect a materially behind carry without a durable frontline.

These are not independent guaranteed fights. Build a single conservative cumulative range and avoid double-counting the same map-pressure chain.

Increase projected favorite net kills when all of the following interact:

- favorite has reliable engage, flank, global access, or direct backline reach;
- opponent lacks a durable frontline or stable peel layer;
- at least one opposing primary carry is materially behind or repeatedly dying;
- favorite has a second functioning or scaling carry, so the lead is not one-champion fragile;
- multiple mandatory map exposures remain.

## 5. `OFFICIAL BET — CUMULATIVE FAVORITE MARGIN` gate

During probation, a negative kill handicap may be promoted to an official recommendation when every condition below is met:

1. favorite already leads by at least four kills;
2. the line requires no more than four additional future net kills;
3. offered odds are at least 1.60;
4. favorite has first Baron, equivalent immediate map-control leverage, or a secured objective state that forces repeated defensive exposure;
5. favorite has at least two functioning damage or conversion channels, including one item-qualified or clearly scaling carry;
6. favorite has reliable access to the opposing backline;
7. opponent lacks a durable frontline, reliable disengage, or a protected-carry stabilization route;
8. at least one opposing primary carry is materially behind, nonfunctional, or repeatedly exposed;
9. at least three linked opportunities remain across Baron siege, wave/vision pressure, dragon, next Baron, inhibitor, or base defense;
10. the conservative cumulative sequence range projects the required future net kills plus at least a one-kill buffer;
11. no current item, waveclear, split-map, or objective-trade path credibly restores parity;
12. all decision-critical items and state direction are verified.

Use the exact verdict:

`OFFICIAL BET — CUMULATIVE FAVORITE MARGIN — [market] @ [odds] — 0.25u — not placed`

If the market is suspended or delayed, append:

`MARKET LOCKED/DELAYED — NOT PLACED`

The model verdict and market executability must be recorded separately.

## 6. First-Baron non-terminal rule

Do not require the favorite to attempt an immediate end after first Baron.

A controlled reset after taking towers, one to three kills, or map access can strengthen the cumulative-margin thesis because the trailing team must later leave base, push waves, or contest objectives from a worse vision state.

Therefore:

- failure to end with first Baron is not thesis failure;
- an orderly Baron reset is neutral or positive if structures, waves, vision, or objective timing remain controlled;
- the thesis weakens only if the trailing team clears Baron without meaningful loss and restores farm, vision, item function, or objective parity.

## 7. Positive-handicap inverse treatment

When the cumulative favorite-margin official gate is satisfied, the opposing positive handicap is:

`NO BET — CUMULATIVE ATTRITION VETO`

A large positive number is not value merely because the favorite has not yet covered. The trailing side must first demonstrate stabilization through at least one of:

- surviving the Baron cycle without losing structures or net kills;
- restoring safe wave access and vision;
- winning a structured fight;
- bringing the deficit within roughly 2k;
- restoring a protected, item-qualified primary carry.

Without stabilization, do not promote the trailing handicap from a wider line or higher price.

## 8. Counterfactual KT-HLE classification

At 25:24:

- current margin: KT +5;
- line: KT -8.5;
- additional net kills required: 4;
- odds: 1.642;
- first Baron: KT;
- remaining opportunities: first-Baron siege, post-Baron wave/vision picks, dragon fight, next Baron/base sequence;
- HLE frontline: none durable;
- HLE primary carry state: Varus materially behind;
- KT conversion: Gnar-Annie-Naafiri access plus scaling Yunara.

Correct verdict:

`OFFICIAL BET — CUMULATIVE FAVORITE MARGIN — KT -8.5 kills @ 1.642 — 0.25u — MARKET LOCKED/DELAYED — NOT PLACED`

HLE +8.5 @ 2.145 should have been:

`NO BET — CUMULATIVE ATTRITION VETO`

Final: KT 23-11. The official recommendation would have won, but it was not executable and was never placed.

## 9. Anti-overfit controls

Do not activate this gate from Baron ownership alone.

Return to LEAN or NO BET when:

- more than four additional net kills are required;
- favorite relies on one fragile or easily isolated carry;
- opponent has durable frontline, strong disengage, protected scaling, or safe waveclear access;
- fewer than three linked exposure windows remain;
- the gold lead is cosmetic and not reflected in item or map access;
- the market price is below 1.60;
- the state or items are uncertain.

Track this gate separately and review after five qualifying cumulative-margin theses.

## 10. Probation and accounting

Probation remains unchanged:

- completed: 6/10;
- record: 2-4;
- net: -665,250 VND / -0.66525u;
- wager 7 remains unplaced;
- standard stake: 0.25u = 250,000 VND;
- minimum odds: 1.60;
- no correlated same-map add-ons;
- official only after explicit placement confirmation.

A locked or delayed official recommendation does not count as a placed wager, does not settle official P/L, and does not advance probation.