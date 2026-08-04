# MODEL RULES — FOOTBALL v0.2.26

Effective: 2026-08-04

This version supplements v0.2.25 and all active football procedures. Existing bankroll, stake, minimum-odds and ledger-hold controls remain active unless explicitly changed below.

## 1. Promotion threshold under the 0.25u LEAN policy

Every executable LEAN still uses exactly **0.25u = 250,000 VND**. Because this equals the normal official football stake cap, the promotion threshold must be materially stricter than it was under the former 0.125u tier.

A candidate must remain **NO BET** unless:

- the fair-price edge is robust to reasonable uncertainty in the inputs;
- the preferred market remains superior after exact quarter-line or half-line settlement is modeled;
- the evidence is supported by at least two synchronized snapshots, unless a major event creates an exceptional and immediately measurable state;
- no material odds, score, card, penalty, substitution, injury, weather or pitch change has occurred since the last price;
- the recommendation does not depend mainly on one isolated chance, one penalty sequence, or extreme finishing variance.

A small or fragile estimated edge is not promotable merely because the offered odds exceed 1.70.

## 2. Execution-freshness gate

A recommendation is valid only for the exact synchronized state and quoted market used in the analysis.

Mandatory reprice triggers include:

- any line change;
- any odds change of 0.03 or more;
- any change of at least 1.5 percentage points in implied probability;
- more than 120 seconds between the final synchronized snapshot and acceptance in a live football market;
- any goal, penalty, red card, second yellow, major injury, substitution or tactical change;
- any material weather or pitch change.

A better price is not automatically positive evidence. It may reflect adverse information. If a trigger occurs without a fresh synchronized state, record the wager as placed but **execution-invalid for model attribution**.

## 3. Entry-clock and sportsbook-clock reconciliation

Record separately:

- sportsbook placement timestamp;
- sportsbook displayed match clock;
- independently observed live match clock;
- score at acceptance;
- last synchronized evidence time.

When clocks conflict, do not silently replace one with another. Preserve both and identify the clock used for model validation. The true entry state must be supported by screenshots or user confirmation.

## 4. Sequence-adjusted chance quality

Do not treat cumulative xG, xGOT, shots, shots on target or big chances as fully independent observations.

Before using cumulative totals, decompose them when possible into:

- open-play sequences;
- penalties;
- rebounds or follow-ups from the same attack;
- set pieces;
- isolated long shots;
- repeated independent box entries.

A penalty, saved penalty and immediate rebound may create several recorded events but only one underlying attacking sequence. Fair-price estimates must not count the sequence multiple times as repeatable pressure.

## 5. Over-market evidence gate

An over cannot be promoted from cumulative xG and nominal line resilience alone.

At least one of the following must be present:

- meaningful xGOT or multiple shots on target;
- two or more independent big-chance sequences;
- repeatable high-value inside-box creation across synchronized intervals;
- a clear two-sided scoring route supported by chance quality, not box touches alone;
- a major regime change whose scoring effect is independently priced.

Box touches, corners, blocked shots and possession are supporting indicators. They do not replace xGOT, shots on target, big chances or high-quality shot locations.

## 6. Quantified line-resilience requirement

Do not call a total line resilient merely because it fell slowly by visual inspection.

A resilience claim must compare the observed movement with a reference appropriate to:

- league;
- score;
- minute;
- pre-match total;
- favorite strength;
- red-card and penalty state.

Until a reliable reference sample exists, describe the trajectory as observed but do not assign directional over value from the trajectory alone.

## 7. Halftime comeback and remaining-match side gate

For a trailing team or favorite remaining-match handicap, require evidence that the side can outscore the opponent from entry onward, not merely that it dominated the completed interval.

Mandatory checks:

- post-goal or post-halftime interval production;
- xGOT, shots on target and independent big-chance sequences;
- attacking substitutions and available bench quality;
- the leader's counterattacking route;
- the probability of a remaining-segment draw;
- exact settlement of -0.25, -0.5, -0.75 or draw-no-bet.

For a remaining-match **-0.25**, display estimated probabilities of:

- selection wins the remaining segment;
- remaining segment is drawn;
- selection loses the remaining segment.

The draw branch is a half loss and must be included explicitly in expected value.

## 8. Late-under and stoppage-time reserve

Every late under must reserve for:

- likely stoppage time;
- the current card and injury environment;
- substitutions;
- the trailing team's chase intensity;
- the leader's counterattacking route;
- goalkeeper or defensive errors under fatigue.

Prefer whole-goal or quarter-line protection when a single late goal is a material branch. A quiet regulation interval is insufficient if the match state supports extended added time or desperate chasing.

## 9. Settlement-scope confirmation

Never infer that a live Asian handicap is full-match or remaining-match from layout alone.

Before promotion, confirm settlement scope through at least one of:

- explicit sportsbook market label;
- ticket wording;
- house rules;
- a previously verified identical market format.

If scope is uncertain, verdict is NO BET. Record any historical scope-assumption error separately rather than retroactively changing the bookmaker settlement.

## 10. Correlated-market selection

When side and total candidates express the same thesis, select one primary market unless the combined exposure has been separately priced and remains within the cap.

Compare:

- side win probability and margin distribution;
- total-goal distribution;
- settlement protection;
- dependence on the opponent contributing;
- downside under the most likely adverse branch.

Do not add a second correlated position merely because the first remains open.

## 11. Sample-size and anti-overfitting control

A single win or loss may reveal a process flaw but cannot validate a broad rule by itself.

Model changes must distinguish:

- arithmetic or settlement corrections, which can be immediate;
- execution-control failures, which can be corrected immediately;
- predictive calibration changes, which require repeated evidence or a clearly identified logical error.

Case notes may be retained, but they must not override general evidence across leagues and match states.

## 12. Ticket verification and deduplication standard

Use the following unique-key priority for performance accounting:

1. settlement ID;
2. bet or slip ID;
3. event + market + odds + stake + accepted timestamp.

Multiple records with the same ticket key are one wager. A settled record supersedes a stale pending record. Never count both.

Verification must separate:

- result verification;
- payout arithmetic;
- model-recommendation validity;
- execution validity;
- ledger inclusion.

A winning result does not repair an invalid execution, and a losing result does not by itself prove the recommendation was invalid.

## 13. Lessons from the 2026-08-04 settled pair

### Celtic vs Dundee FC — Over 2.75 at 1.88

The entry thesis over-weighted cumulative xG, box activity and an unquantified resilience interpretation while both teams had zero xGOT and zero shots on target at the principal recommendation snapshot. The accepted price also moved materially from the quoted price without a fresh synchronized reprice.

Process correction:

- the original candidate should have remained WATCH/NO BET;
- an over requires stronger conversion-quality evidence;
- a favorable odds move still triggers the execution-freshness gate.

### Sarmiento Junín vs Independiente Rivadavia — Independiente -0.25 remaining match at 1.95

Independiente's cumulative dominance was real, but part of the chance profile came from one penalty sequence. The recommendation gave insufficient weight to the remaining-segment draw, Sarmiento's low-block protection and the need to verify halftime tactical changes.

Process correction:

- decompose penalty-driven cumulative statistics;
- price the draw half-loss explicitly;
- require fresh post-halftime evidence or confirmed attacking changes before a maximum-stake remaining-match side.

## 14. Existing controls unchanged

All previous controls remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable LEAN uses 0.25u;
- normal official football stake cap = 0.25u;
- synchronized two-team snapshots;
- league-relative calibration from v0.2.25;
- exact settlement and goal-cliff analysis;
- a wager is official only after confirmed placement;
- ledger.json remains authoritative;
- ledger updates remain on hold until explicitly approved.

This update does not modify ledger.json or retroactively change any recorded wager.