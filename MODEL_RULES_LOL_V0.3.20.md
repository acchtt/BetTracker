# League of Legends Model Rules v0.3.20

**Status:** Active immediately  
**Effective date:** 2026-08-02 18:57 UTC+7  
**Purpose:** Improve lean-label integrity, live-state verification, moneyline durability, series-spread screening, kill-Under line selection, and positive-handicap repair without weakening the v0.3.19 anti-line-chasing controls.

This version supersedes v0.3.19 where conflicting. All stricter bankroll, placement-confirmation, probation, item-timing, expiry, and market-specific official-promotion rules remain active.

## 1. Review evidence

The prior all-lean review contained 44 explicit lean/watch snapshots with a 21-23 record and -1.1455u at hypothetical 0.25u equal stakes. Subsequent explicit `LEAN` snapshots added 13 graded outcomes: 7 wins and 6 losses. The combined tracked snapshot record is therefore 28-29 across 57 snapshots. Exact combined hypothetical P/L is unavailable because the TT vs WE Game 1 +9.5 odds were not preserved.

The recent explicit sample separated into:

- positive kill handicaps: 6-4, including four correlated TT vs WE Game 2 losses from one deteriorating chased thesis;
- live moneylines: 1-1, slightly negative at known prices;
- series -1.5 map spreads: 0-1;
- ambiguous `closest watch` or `forced pick` outputs: excluded from the formal lean record and retained only as calibration evidence.

The review supports retaining v0.3.19 line-chasing protection, improving repair recognition, and tightening moneyline and series-spread durability.

## 2. Recommendation taxonomy

Only the exact verdict `LEAN` creates a trackable lean snapshot from v0.3.20 onward.

- `LEAN`: formal unplaced recommendation eligible for shadow grading.
- `WATCH ONLY`: informational candidate, not a lean and not included in the formal lean record.
- `FORCED PICK`: hypothetical answer to a forced-choice question, not model-approved and not included in the lean record.
- `NO BET`: rejected market.
- `OFFICIAL BET`: model-approved recommendation, still not placed until explicit user confirmation.

Do not use phrases such as `closest watch`, `provisional watch`, or `secondary lean` without one of the exact verdict labels above. One synchronized snapshot may have at most one formal recommendation per market family.

## 3. State-direction verification gate

Before issuing a new live `LEAN` after a prior snapshot, identify the direction of the material change:

- which team secured the intervening kills;
- which team secured each new tower or objective;
- whether the gold direction improved or deteriorated;
- whether the displayed team orientation is unchanged.

If the owner of a material score change is uncertain, return:

`NO BET — STATE DIRECTION UNVERIFIED`

A later correction of score ownership automatically invalidates the earlier recommendation and its rationale, even if the quoted market ultimately wins.

## 4. Moneyline durability and objective-conflict gate

The existing hard/soft confirmation hierarchy remains active. In addition, a moneyline lean must survive conflicting structural evidence.

Treat the following as **objective conflict**:

- the proposed side trails by at least two dragons or the opponent is on soul point;
- the proposed side has only a small gold or tower edge;
- the opponent has an item-qualified protected primary carry or clearly superior front-to-back scaling;
- the proposed side has not demonstrated control of the next neutral-objective setup.

When objective conflict exists, a moneyline `LEAN` requires at least one durable repair confirmation after the conflict became visible:

1. a post-reset structured-fight win;
2. denial or capture of the next major neutral objective;
3. a distributed gold lead of roughly 3,000 or more that survives one lost skirmish;
4. a two-tower structural lead with maintained wave and vision access to the next objective; or
5. a clear item-qualified primary-carry advantage plus reliable frontline delivery.

Without one of these, return `NO BET`. A small gold edge plus towers cannot override dragon debt, scaling disadvantage, and a stronger protected carry.

## 5. Series -1.5 map-spread gate

A pre-series or in-series sweep lean requires:

- confirmed starting lineup and roles;
- no unresolved substitution, debut, or role-swap uncertainty;
- a meaningful team-quality edge across more than one lane or map phase;
- adequate fearless-draft or cross-map champion depth when applicable;
- no known first-map draft that materially favors the opponent's core win condition.

If a pre-series -1.5 thesis exists and Game 1 draft materially opposes the sweep thesis, mark it:

`EXPIRED — REASSESSMENT REQUIRED`

Do not retain it as a watch merely because the favorite remains favored to win the series. Team reputation and a low series moneyline are insufficient for a sweep lean.

## 6. Positive-underdog handicap continuity

The v0.3.19 line-chasing warning, hard veto, revision cap, and fight-cascade stress test remain active.

A widening positive handicap after deterioration is still the same thesis and cannot be treated as fresh value.

A smaller positive handicap after genuine underdog improvement is not line chasing. It may be reassessed independently while preserving thesis history, provided the current state passes all functional, structural, and price gates.

## 7. Tiered same-map repair

The official-bet repair gate remains strict: two new qualifying structured-fight conversions, structural stabilization, restored item-qualified function, and explicit repair of the original failure.

For lean-level re-entry only, one **provisional repair pathway** is permitted once per map after a withdrawal or veto. Every condition below is required:

1. at least one new qualifying structured-fight conversion after withdrawal;
2. the gold deficit improves by roughly 1,500 or returns to within roughly 2,000;
3. tower parity, meaningful objective compensation, or restored wave access is visible;
4. at least one primary carry is item-qualified and demonstrated damage in the repair sequence;
5. the favorite fight-objective-follow-up cascade consumes less than half the current cushion;
6. the original failure condition is explicitly identified and shown to be repaired.

The permitted verdict is:

`LEAN — REPAIRED WATCH`

A wider line, one isolated kill, or item icons without demonstrated delivery do not qualify. This pathway cannot produce an `OFFICIAL BET` and cannot be used more than once in the map.

## 8. Kill-Under timing and line selection

Before issuing a formal kill-Under lean:

- wait until the first meaningful objective cycle is complete or 8:00 game time, whichever is later, unless there are at most one total kill and both drafts have low forced-engage density;
- calculate current kills, line-specific headroom, whole kills required to lose, remaining mandatory contests, conservative fight budget, and a safety buffer;
- require at least a three-kill buffer above the conservative remaining fight budget;
- identify whether the likely close is one clean sequence or repeated Baron, soul, Elder, and base-defense contests.

When multiple Under lines are available, issue at most one formal lean. Prefer the line with greater headroom when it adds at least two kills of protection and still offers at least 1.80, unless a documented fair-price calculation shows the lower line has materially better expected value.

Do not label multiple Under numbers as separate leans from the same synchronized state.

## 9. Draft and roster uncertainty

Draft theory remains a fair-price input, not proof. When a champion identity, role assignment, or starting-player status is uncertain, do not build an actionable thesis on assumed mechanics or reputation. Mark the uncertainty and cap the output at `WATCH ONLY` or `NO BET` until resolved.

## 10. Tracking rules

Report four separate records:

1. exact `LEAN` snapshots issued under the current taxonomy;
2. legacy tracked lean/watch snapshots and thesis-level outcomes, with correlated same-map revisions grouped;
3. non-lean calibration candidates such as `WATCH ONLY` and `FORCED PICK`;
4. official placed wagers.

Never merge these records. A winning recommendation based on an incorrect state read is graded as a settlement win and a process failure.

## 11. Probation wagers 7-10

Controls remain unchanged:

- 1u = 1,000,000 VND;
- standard stake = 0.25u = 250,000 VND;
- maximum exposure = 0.25u per map;
- minimum odds = 1.60;
- no correlated same-map add-ons;
- duration Overs are not eligible for `OFFICIAL BET`;
- official only after explicit placement confirmation;
- prefer `NO BET` over a marginal pass.

Probation remains 6/10, 2-4, -665,250 VND / -0.66525u. Wager 7 remains unplaced.

## 12. Fast output protocol

Return the verdict first.

For a formal recommendation, use exactly one of:

- `OFFICIAL BET — ...`
- `LEAN — ...`
- `LEAN — REPAIRED WATCH — ...`
- `WATCH ONLY — ...`
- `NO BET — ...`

Include synchronized time, score, gold, structures, objectives, relevant items, odds, target floor, hard floor, and placement status when actionable.
