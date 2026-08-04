# MODEL RULES — FOOTBALL v0.2.18

Effective: 2026-08-01

This version supplements all active football rules and the 2026-08-01 procedure addendum. Existing controls remain unchanged:

- 1u = 1,000,000 VND
- minimum accepted football odds = 1.70
- official football stake cap = 0.25u
- LEAN — SMALL cap = 0.125u
- every material live-state change requires independent repricing
- a wager is official only after confirmed execution

## 1. Post-match process grading is mandatory

Every settled official football wager must receive two separate grades:

1. **Result grade:** win, loss, half-win, half-loss, push, void, or cash-out.
2. **Process grade:** good, acceptable, marginal, or poor.

The result must never be used as the sole evidence that a recommendation was correct or incorrect.

## 2. Dominant-process loss classification

A losing side or handicap may be classified as a **dominant-process variance loss** only when the final evidence materially supports the original thesis. Relevant evidence includes:

- decisive xG and xGOT superiority;
- substantially more shots, shots on target, big chances, box entries, and attacking territory;
- missed penalty, goal disallowed, woodwork, or exceptional opposing goalkeeper performance;
- no contradictory tactical event that invalidated the original entry thesis.

For a halftime comeback or trailing-favorite bet, a dominant-process variance loss normally requires multiple aligned indicators rather than possession alone.

## 3. No automatic model downgrade after variance losses

A single loss must not trigger a directional rule change when:

- the entry price still appears to have been above fair value;
- the post-entry match developed in the recommended side's favor;
- the loss was primarily caused by finishing variance, goalkeeper variance, a missed penalty, or a disallowed goal.

Such cases are logged for calibration but do not justify weakening an otherwise sound rule.

## 4. No hindsight inflation

Post-match xG cannot be treated as if it was fully known at entry. Review must distinguish:

- information available when the wager was recommended;
- information created after entry;
- whether the later match state supports or contradicts the entry model.

A strong final xG profile validates process direction, but it does not prove that the quoted odds were automatically mispriced at entry.

## 5. Trailing-favorite handicap gate

For a live bet on a favorite trailing by one goal, especially at halftime, the model must explicitly price:

- probability of equalizing;
- probability of winning after equalizing;
- counterattack and second-goal risk;
- remaining attacking personnel and bench options;
- current chance quality, not possession alone;
- market protection difference between 0, -0.25, and -0.5.

The model must prefer the most efficient protected line when its price remains acceptable. A -0.5 selection requires a clear win-probability edge; avoiding defeat is not sufficient.

## 6. Shanghai Port vs Shandong Taishan review

Official wager:

- Shanghai Port -0.5 live at 1.83
- stake 0.25u
- entry score 0-1
- result: loss, 0-1 full time

Final evidence:

- xG 2.22-0.41
- xGOT 2.09-0.92
- shots 19-8
- shots on target 8-4
- big chances 4-1
- box touches 33-9
- Shanghai Port missed a penalty and had a goal disallowed
- Shandong Taishan later received a red card

Classification: **result loss; process grade good; dominant-process variance loss.**

No directional model downgrade is warranted from this match alone. The case must remain in calibration data for trailing-favorite -0.5 bets and finishing-conversion variance.
