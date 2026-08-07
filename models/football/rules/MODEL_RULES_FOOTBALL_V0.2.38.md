# MODEL RULES — FOOTBALL v0.2.38

Effective: 2026-08-07

This version supplements v0.2.37 and all active football procedures. All earlier staking, minimum-odds, synchronization, reset, motivation, market-scan, exposure, settlement and ledger controls remain active unless strengthened below.

## 1. Protected-line preservation

When a watched protected handicap falls below the active minimum odds, the model must not automatically move to a less-protected line merely to preserve executable price.

Examples include moving from +0.75 to +0.5, +0.5 to +0.25, or +0.25 to draw-no-bet when the original line becomes unavailable or falls below 1.70.

A less-protected line requires a fresh independent edge assessment at its exact settlement terms. If that assessment does not clear every active gate, return `NO BET`.

## 2. Favourite-fade gate

Opposing a material prematch favourite requires evidence strong enough to overcome the prematch baseline.

Before recommending the underdog or protected underdog side, require:

1. at least two comparable synchronized live snapshots in the same post-reset regime;
2. at least two independent forward-looking attacking-quality channels for the underdog;
3. at least one of those channels must involve high-value access, such as repeated central box entries, clear chances, big chances, dangerous cutbacks, transition breaks, sustained set-piece pressure or verified defensive degradation by the favourite;
4. no unresolved substitution, injury, tactical or event reset;
5. the exact protected line must retain sufficient settlement value at current odds.

Possession, pass volume, raw shots or shots on target alone cannot clear this gate.

## 3. Shot-quality veto

Shots on target are goalkeeper-workload evidence, not automatic scoring superiority.

A shots-on-target advantage cannot support an executable side by itself when it is not corroborated by box access, central entries, clear chances, dangerous transitions, set-piece threat or another independent high-value channel.

Repeated low-value accurate shots must be treated as weak evidence, especially when the opponent leads penalty-area access or territorial pressure.

## 4. Directional-switch strengthening

A live switch against the prematch favourite requires persistent evidence that materially exceeds a brief early contradiction of the baseline.

The model must explicitly compare:

- prematch strength and price;
- current protected-line settlement;
- box and central access;
- chance quality;
- defensive degradation;
- whether the observed advantage is stable or merely an early sample.

If the evidence only shows that the favourite has not yet produced an accurate shot, return `NO BET` rather than inferring that the favourite lacks a scoring route.

## 5. Chicago Fire vs Necaxa process correction

At approximately 21:40 with the score 0-0, Necaxa led shots on target but had not established superior high-value access. Chicago retained comparable or better box threat and entered as a substantial prematch favourite.

The prior watched line was Necaxa +0.75. When that price fell below the minimum, the model incorrectly promoted Necaxa +0.5 instead of rejecting the reduced protection.

The correct non-hindsight verdict was `NO BET`.

This is recorded as a model-attributed market-promotion error, not an execution error. The accepted price drift remained valid; the underlying selection did not clear the strengthened favourite-fade and shot-quality gates.

## 6. Existing controls remain active

- 1u = 1,000,000 VND.
- Minimum accepted odds = 1.70.
- Every executable `LEAN` uses exactly 0.25u.
- Same-state accepted-odds drift tolerance remains 0.08.
- No fixed cumulative same-match exposure cap, subject to v0.2.37 additional-position controls.
- A wager becomes official only after confirmed placement.
- Ledger writes remain on hold until explicitly approved.
