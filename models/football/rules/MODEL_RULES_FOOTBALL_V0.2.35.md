# MODEL RULES — FOOTBALL v0.2.35

Effective: 2026-08-07

This version supplements v0.2.34 and all active football procedures. All earlier bankroll, staking, minimum-odds, assessment-period, synchronization, reset, settlement, market-scan, motivation, correlation, exposure and ledger controls remain active unless strengthened below.

## 1. HOLD unlock must produce a fresh decision

`NO BET — HOLD` is temporary and must name a concrete unlock condition.

When the stated unlock condition is later satisfied, the model must immediately reprice the market and return one of:

- `LEAN` when every active gate clears at the current price and state; or
- `NO BET` with a specific value, settlement or risk reason.

Do not continue HOLD through vague caution after the required synchronized snapshots, persistence evidence and market data are available.

## 2. Persistent-pressure conversion gate

After the latest goal, red card, penalty, halftime or substitution reset, persistent pressure may support an executable market when:

1. two comparable post-reset snapshots support the same direction;
2. at least two independent forward-looking channels persist, such as shots on target, repeated box access, central entries, transition creation, goalkeeper workload, set-piece pressure or defensive degradation;
3. the current line and odds remain synchronized and above the active minimum;
4. no unresolved event, substitution or tactical reset remains;
5. exact settlement and late-event risk have been priced.

Cumulative xG or raw shot volume alone cannot clear this gate.

## 3. Mandatory side-versus-one-goal-over comparison

When one team is applying persistent pressure in a tied match, compare the leading side market with the available one-goal over before issuing the final verdict.

Prefer the over when it:

- wins through either team scoring;
- avoids draw or first-leg regulation-tie utility that weakens the side;
- covers both dominant-team pressure and opponent counterattack routes;
- has similar or better uncertainty-adjusted value;
- does not create prohibited correlated exposure.

Prefer the side only when the selected team has the clearly stronger scoring route and the opponent contribution is more likely to damage the total thesis than help it.

A one-goal over remains subject to the v0.2.33 binary-market gate, but two persistent post-reset snapshots plus multiple independent scoring channels can satisfy that gate.

## 4. Hradec Králové vs Beşiktaş process note

At approximately 70:53 with the score 0-0, the post-substitution evidence showed persistent Beşiktaş pressure across two comparable snapshots. The available candidates included Beşiktaş -0.25 and Over 0.5 around 1.85.

The model continued HOLD even though its stated persistence unlock had effectively cleared. The better market expression was the one-goal over because it covered a Beşiktaş breakthrough and a Hradec response while avoiding first-leg draw utility and side-specific settlement risk.

This is recorded as a missed-promotion process correction, not a retroactive wager or model win. The later red card and Beşiktaş goal do not by themselves validate the entry; the correction is based on the synchronized state available before those events.

## 5. Existing controls remain active

- 1u = 1,000,000 VND.
- Minimum accepted odds = 1.70.
- Every executable `LEAN` uses exactly 0.25u.
- Normal same-match exposure cap = 0.25u.
- One best expression only.
- Every material event or execution-freshness trigger requires independent repricing.
- A wager becomes official only after confirmed placement.
- `ledger.json` remains authoritative and ledger writes remain on hold until explicitly approved.
