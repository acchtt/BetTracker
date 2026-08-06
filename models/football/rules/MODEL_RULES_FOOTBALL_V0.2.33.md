# MODEL RULES — FOOTBALL v0.2.33

Effective: 2026-08-06

This version supplements v0.2.32 and all active football procedures. Every earlier bankroll, staking, minimum-odds, assessment-period, synchronization, execution-freshness, settlement, market-scan, motivation, defensive-baseline, HOLD, automation-parity, correlation and ledger control remains active unless this file explicitly strengthens it.

## 1. Invalidation is not confirmation of the opposite side

Evidence that weakens or invalidates an Under does not automatically support an Over. Evidence that weakens or invalidates an Over does not automatically support an Under.

The same applies to:

- favorite versus underdog handicaps;
- team-total Over versus Under;
- BTTS Yes versus No;
- corner Over versus Under;
- remaining-match side positions.

When the previous thesis fails, the default transition is:

`NO BET — HOLD`

The opposite market must pass its own independent promotion gates.

## 2. Regime-persistence gate

A market direction may become `LEAN` only when the forward-looking regime is persistent rather than a single noisy interval.

Except after an exceptional independently measurable major event, require:

1. at least two comparable synchronized snapshots after the latest goal, penalty, red card, halftime, tactical change or material substitution cluster;
2. the same directional evidence across both intervals;
3. at least two independent forward-looking channels, such as repeated box access, shots on target, transition frequency, width/crossing pressure, defensive shape, substitutions, fatigue, motivation or line resilience;
4. a current price and line that still clear all value and freshness gates.

One burst, one big chance, one high-xG shot, one goalkeeper error, one corner sequence or one short possession spell cannot by itself establish a new regime.

## 3. Directional-switch gate

Switching the leading candidate from Under to Over, Over to Under, favorite to underdog, or underdog to favorite requires more evidence than merely maintaining an existing candidate.

A directional switch requires:

- explicit statement that the prior candidate is invalidated;
- identification of the new causal regime rather than only new cumulative statistics;
- two post-reset synchronized snapshots supporting the new direction;
- evidence that the new direction is likely to persist for the remaining match time;
- a fresh event-budget and settlement analysis;
- confirmation that the new market is not simply a one-event binary wager without sufficient edge.

Until all conditions are met, use `NO BET — HOLD` or `NO BET` and keep `Best expression: none`.

## 4. Candidate-oscillation control

If the leading direction changes twice within 15 match minutes without separate major events explaining both changes, classify the market as unstable.

For an unstable market:

- no `LEAN` is permitted;
- stop alternating recommendations;
- require at least two further synchronized intervals showing the same regime;
- normally wait at least five match minutes after the latest directional switch;
- widen uncertainty and prefer `Best expression: none`.

This rule prevents sequence chasing and overreaction to recent intervals.

## 5. Candidate lifecycle labels

Each leading candidate must be treated as one of:

- `ACTIVE WATCH` — directionally plausible but not executable;
- `NO BET — HOLD` — a defined mandatory gate remains unresolved;
- `INVALIDATED` — a material event, contradictory interval or price change removed the prior thesis;
- `LEAN` — every active gate is satisfied at the current synchronized price and state.

An `INVALIDATED` candidate cannot be silently recycled at a new line. It must be rebuilt from the new state.

## 6. Cumulative versus interval discipline

Do not let cumulative totals conceal a regime change or let one recent interval erase the broader match structure.

Every material reassessment must distinguish:

- cumulative match production;
- production since the latest reset;
- production in the most recent comparable interval;
- whether the latest event was isolated or repeatable.

A large cumulative xG, shot or corner total may be stale. A short recent spike may be noise. The recommendation must reconcile both timescales.

## 7. One-event binary-market gate

When a market wins or loses entirely on one additional goal, corner or scoring event, it requires stronger evidence than a protected Asian line.

For one-event binary positions, require:

- persistent directional evidence over two comparable snapshots;
- explicit late-event and stoppage-time treatment;
- no unresolved substitution or tactical reset;
- sufficient price edge after uncertainty widening;
- no candidate oscillation in the preceding 15 match minutes.

If these conditions are absent, return `NO BET` even when the direction appears slightly more likely than not.

## 8. Substitution-cluster reset

Two or more tactical substitutions within a short period, or substitutions that materially change pace, width, striker profile or defensive structure, create a post-substitution reset.

After such a reset:

- the previous total or handicap direction is invalidated unless clearly unaffected;
- the first snapshot is observational only;
- normally require a second synchronized snapshot before a new direction can become `LEAN`;
- do not infer that fresh attackers automatically support an Over or that defensive substitutions automatically support an Under.

## 9. Review and calibration rule

Post-match review must grade separately:

- final verdict quality;
- candidate-direction quality;
- HOLD-gate quality;
- execution timing;
- price quality;
- whether candidate oscillation occurred;
- whether the final result merely favored or opposed the thesis by chance.

A correct final `NO BET` can coexist with poor intermediate candidate selection. HOLD gates that prevent execution of weak candidates are process successes, but repeated directional oscillation remains a calibration issue that must be corrected.

## 10. Required compact output additions

When a leading candidate changes, include:

- `Prior candidate:` active, invalidated or unchanged;
- `Switch status:` confirmed, HOLD or none;
- `Regime persistence:` one snapshot, two snapshots, or unstable;
- `Best expression:` exact market or none.

These fields may be compressed for live speed but cannot be silently omitted during a directional switch.

## 11. Existing controls remain active

All earlier rules remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable `LEAN` uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- the 0.125u tier remains retired;
- full model parity across main chat, reminders and automations;
- mandatory full-market reassessment;
- scoring/conceding and decomposed-motivation requirements;
- xG and xGOT as supporting evidence only;
- exact event-budget analysis;
- high-event late-under and corner-under gates;
- synchronized snapshots and event resets;
- settlement-scope confirmation;
- execution-freshness repricing;
- one-best-expression and combined-exposure control;
- official status only after placement confirmation;
- `ledger.json` as the authoritative record;
- ledger writes remain on hold until explicitly approved.
