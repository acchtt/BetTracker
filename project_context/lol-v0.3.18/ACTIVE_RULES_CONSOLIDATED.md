# Active LoL Betting Rules — Consolidated v0.3.18

This is the portable operating version for a new ChatGPT project.

## Status and bankroll rules

- Active model: **LoL v0.3.18**
- 1u = **1,000,000 VND**
- Standard stake: **0.25u = 250,000 VND**
- Maximum probation exposure: **0.25u per map**
- Minimum accepted odds: **1.60**
- No correlated same-map add-ons during probation.
- A wager is official only after the user confirms placement.
- Unavailable or unconfirmed wagers must never be described as placed.
- Recommendations begin with **OFFICIAL BET**, **LEAN**, or **NO BET**.
- Every changed line is reassessed independently.
- Use **EXPIRED — REASSESSMENT REQUIRED** after a material state or price change.

## Live-state hierarchy

Prioritize:
1. gold and gold distribution;
2. towers and map access;
3. dragons, Grubs, Herald, Baron, Elder and soul state;
4. item completions and recall timing;
5. wave and side-lane state;
6. summoner spells, ultimates, vision and setup;
7. composition functionality at the current clock;
8. kills as context rather than the primary lead indicator.

Kills plus their immediate gold are one correlated evidence cluster. Grubs without structure conversion are soft evidence.

## Draft gate

Evaluate:
- role fit and lane priority;
- independent damage channels;
- safe damage delivery;
- frontline against the opponent's actual damage;
- engage and follow-up geometry;
- peel, disengage and carry protection;
- waveclear, side-lane and objective setup;
- execution burden and single-point-of-failure risk.

Do not call a composition stable merely because it has a tank, engage and scaling.

## Item timing

Before 15:00, a separate full item panel is optional. Do not call raw gold a completed-item advantage.

At or after 15:00, decision-critical items are mandatory. Do not guess unclear items. If item strength can reverse the decision and cannot be read, return `NO BET`.

## Moneyline lean gate

After the opening state:
- one hard confirmation; or
- two independent soft confirmations with no substantial team-quality disadvantage and no unresolved conversion concern.

Against a substantial quality gap, at least one hard confirmation is required even for a lean.

## Underdog moneyline official gate

Require:
- two independent current-map confirmations;
- at least one hard confirmation;
- credible next-two-sequence conversion;
- explicit favorite comeback and throw branches;
- functional composition and items;
- acceptable lead-conversion reliability.

Against a large quality gap: two hard confirmations, or one hard plus two additional independent confirmations including post-reset conversion.

## Positive underdog kill handicap

A pre-game or post-draft positive underdog handicap cannot be official during probation.

For a lean, verify:
- functioning return damage;
- target access, counter-engage or cleanup;
- no unresolved carry or role collapse;
- structural and objective context;
- cushion survives a conservative clean-favorite-fight stress test.

Official live promotion requires two qualifying structured-fight conversions plus all functionality and structure gates.

## Same-map re-entry lockout

A withdrawn thesis is locked. Re-entry requires:
1. two new qualifying structured-fight conversions;
2. structural or objective stabilization;
3. restored item-qualified damage or frontline;
4. explicit proof the original failure condition was repaired.

Better odds, a wider line, one kill or one opponent mistake do not unlock it.

## Kill Over

No lean from draft engage density alone.

Require:
- observed two-sided structured-fight conversion or demonstrated high-velocity window;
- functioning damage on both sides;
- sufficient mandatory contests;
- feasible remaining kill requirement;
- decision-critical items at or after 15:00.

Official promotion requires another independent pace confirmation.

## Kill Under

Calculate:
- current kills;
- line and headroom;
- whole kills required to lose;
- remaining mandatory contests;
- conservative kill budget;
- safety buffer.

At or after 24:00:
- 10 or fewer headroom: normally no bet unless immediate ending sequence;
- 11–13 headroom with two-sided damage: at most lean unless one-fight-close gate passes;
- official bet requires at least a three-kill buffer above the conservative fight budget.

Also assess trailing-team return-kill production, engage density, target access, and whether the finish is clean or repeatedly contested.

## Duration

Duration Overs are not official-bet eligible for probation wagers 7–10.

## Execution and expiry

Immediate price-only tolerance applies only when:
- exact event, map, market and line are unchanged;
- no material state event occurred;
- original recommendation was `OFFICIAL BET`;
- accepted odds remain at or above hard floor and 1.60;
- odds move is less than 0.10;
- implied-probability move is less than 3 percentage points;
- stake and exposure are compliant.

Otherwise reassess.

## Probation

- Completed: 6/10
- Record: 2-4
- Net: -665,250 VND / -0.66525u
- Remaining: wagers 7–10
- Duration Overs prohibited as official recommendations for the remaining sequence.
