# League of Legends Model Rules v0.3.18

**Status:** Active immediately  
**Effective date:** 2026-08-02 11:02 UTC+7  
**Purpose:** Improve lean/watch calibration, positive-underdog kill-handicap screening, kill-total timing, and same-map thesis control for probation wagers 7–10.

This rule supersedes earlier LoL lean/watch and same-map re-entry language where conflicting. The stricter v0.3.17 underdog-moneyline official gate, v0.3.16 draft evaluation, v0.3.15 item timing, v0.3.14 item-strength rules, v0.3.13 duration controls, v0.3.12 late kill-Under controls, expiry rules, stake policy, and status-language rules remain active where not superseded.

## 1. Triggering review

The probation-period lean/watch review produced 44 graded snapshots at a hypothetical 0.25u each: 21 wins, 23 losses, and -1.1455u. These are not independent bets because many are revisions of one evolving map thesis.

The strongest positive pattern was late kill Overs supported by observed two-sided fight velocity and functioning damage items. The weakest patterns were:

- live moneyline leans based on draft edge plus soft early evidence;
- repeated positive-underdog kill-handicap leans after the underdog's damage or map function had collapsed;
- draft-only or early-state kill Overs without demonstrated pace;
- treating revised lines on the same map as independent model evidence.

## 2. Moneyline lean gate

After the opening state, draft edge alone is a fair-price input and cannot support a live moneyline lean by itself.

A live moneyline may be `LEAN — 0u watch` only when one of the following is present:

1. at least one hard current-map confirmation under v0.3.17; or
2. at least two genuinely independent soft confirmations, with no substantial team-quality disadvantage and no unresolved conversion-reliability concern.

Against a substantial pre-match or observed team-quality gap, at least one hard confirmation is required even for a moneyline lean.

Kills plus their immediate gold, or kills plus Void Grubs without structural conversion, remain one soft evidence cluster. Attractive price does not repair a missing confirmation gate.

The v0.3.17 official-moneyline gate remains stricter and unchanged.

## 3. Positive-underdog kill-handicap functional gate

Before issuing any positive-underdog kill-handicap lean, verify all of the following:

- at least one primary damage source is currently functional and item-qualified when the clock requires an item check;
- the underdog has credible target access, counter-engage, cleanup, or return-damage routes;
- no unresolved carry, lane, or role collapse makes return kills unreliable;
- the structural and objective deficit does not imply repeated forced entries into prepared terrain;
- the cushion remains credible under a conservative next-fight stress test.

### Next-fight stress test

Model one plausible clean favorite fight before evaluating the cushion. Use the current compositions and state to estimate a realistic negative kill swing rather than assuming a neutral 5v5.

Return `NO BET` when one plausible clean favorite fight would consume most of the cushion and the underdog lacks a reliable post-fight stabilization path.

A larger handicap number or higher odds cannot replace functioning damage, space creation, target access, or structured-fight conversion.

The existing official positive-underdog handicap gate remains active: two qualifying structured-fight conversions plus the full damage, structure, and reliability checks are required.

## 4. Same-map thesis withdrawal and re-entry lockout

Each map may have only one active thesis per market family: moneyline, kill handicap, kill total, or duration.

When a thesis is withdrawn because of functional collapse, failed damage delivery, lost objective control, or invalidated conversion assumptions, it is locked out for the same map.

Re-entry requires all of the following:

1. two new qualifying structured-fight conversions after the withdrawal;
2. clear structural or objective stabilization;
3. restored item-qualified damage or frontline function;
4. explicit evidence that the original failure condition has been repaired.

A wider line, improved odds, one isolated kill, or one opponent error does not unlock re-entry.

## 5. Kill-Over lean gate

Champion engage density, draft volatility, or theoretical damage alone cannot justify a kill-Over lean.

A kill Over may be `LEAN — 0u watch` only when:

- observed play has produced a genuine two-sided structured-fight conversion or a clearly demonstrated high-velocity kill window;
- both teams retain functioning damage and realistic access to future kills;
- enough mandatory contests, objective cycles, or base-defense sequences remain;
- the required additional kills are feasible under a conservative pace projection;
- at or after 15:00, decision-critical item strength is known.

For official promotion, require an additional independent pace confirmation and the existing market-specific safety gates. One isolated fight spike is insufficient.

## 6. Kill-Under return-kill production check

The existing v0.3.12 headroom, safety-buffer, fight-budget, and one-fight-close rules remain mandatory.

In addition, explicitly score the trailing team's return-kill production:

- usable damage and item state;
- access to the leading carries;
- forced-entry and hard-engage density;
- number of likely mandatory contests remaining;
- whether the expected finish is a clean objective sequence or repeated contested fights;
- whether the leading team can close without giving multiple base-defense opportunities.

Structural control is not automatically kill suppression. A clean, one-sided close can support an Under, while a contested comeback or repeated base-defense path can invalidate it.

## 7. Thesis-level performance tracking

Track each market family as one independent thesis per map.

- Store changed lines and prices as revisions beneath the active thesis.
- Reassess every changed line independently for actionability.
- Grade quoted lines individually for execution review, but do not count repeated snapshots as independent model evidence.
- Report both snapshot performance and thesis-level performance.
- Keep unplaced leans, unplaced official recommendations, placed-from-lean wagers, and strict model-approved official wagers separate.

## 8. Probation wagers 7–10

For the remaining four wagers in the current ten-wager LoL probation:

- duration Overs are not eligible for `OFFICIAL BET`;
- standard stake remains 0.25u = 250,000 VND;
- maximum exposure remains 0.25u per map with no correlated add-ons;
- minimum accepted odds remain 1.60;
- selectivity is mandatory and `NO BET` is preferred over a marginal gate pass;
- each official recommendation must pass the current market-specific gate at the synchronized state and accepted price;
- user-directed placements from a lean continue to count in the user-defined probation only after confirmation, while remaining excluded from strict model-approved performance.

## 9. Fast output protocol

Return the verdict first.

For a veto, state the first failed gate immediately. For actionable recommendations, provide market, odds, stake, target floor, hard floor, synchronized state, and `not placed` status before secondary analysis.

## 10. Review schedule

Review v0.3.18 after probation wager 10 settles. Do not change stakes or relax gates to recover the current probation deficit.

Active probation at activation: **6/10, 2-4, -665,250 VND (-0.66525u)**.