# MODEL RULES — FOOTBALL v0.2.29

Effective: 2026-08-04

This version supplements v0.2.28 and all active football procedures. Existing bankroll, stake, minimum-odds, assessment-period, execution, settlement and ledger controls remain unchanged.

## 1. Mandatory full-market reassessment

Every football prematch assessment and every material live reassessment must independently scan all available and relevant markets. The scan must not be limited to the market discussed in the previous message or to the direction of the previous thesis.

When displayed and settlement-verifiable, review:

- 1X2;
- Asian handicaps;
- full-match goal totals;
- first-half and second-half goal totals;
- team totals;
- remaining-match or remaining-period markets;
- corner totals, team corners and corner handicaps;
- both teams to score;
- next-goal markets;
- cards and other displayed football markets when reliable inputs and settlement rules are available.

A mandatory scan does not require a wager. Each market may independently resolve to LEAN or NO BET.

## 2. No thesis anchoring

A previous under, over, side, handicap or corner thesis must not narrow the next reassessment.

After every new synchronized snapshot or material event:

1. invalidate any market whose price or state has expired;
2. reprice each available market independently;
3. compare the strongest candidates across market families;
4. identify the single best expression of the current state, or return NO BET on all markets.

Examples:

- a previously watched under does not prevent a later over, side or corner market from becoming the best expression;
- a strong favorite-pressure thesis does not automatically justify both the favorite handicap and the over;
- a goal, card, penalty, substitution or tactical change may make a different market preferable even when the original directional read remains broadly correct.

## 3. Market-by-market verification

For each market considered, verify the inputs required by that market:

- exact line and current odds;
- full-match, half, team or remaining-match settlement scope;
- score and true match minute;
- cards, penalties, substitutions, injuries and tactical changes;
- relevant synchronized statistics;
- exact win, half-win, push, half-loss and loss branches where applicable;
- minimum odds and execution-freshness status.

Missing data or unclear settlement blocks that market only. It must not automatically block analysis of other independently verifiable markets.

## 4. Best-expression comparison

When more than one market has a plausible edge, compare:

- uncertainty-adjusted expected value;
- settlement protection;
- number of plausible winning score paths;
- dependence on one team or both teams contributing;
- exposure to draw, push-cliff, late-goal and stoppage-time branches;
- correlation with any existing position;
- data quality and execution freshness.

Normally select one primary market. Do not recommend correlated additions unless each has an independent quantified edge and combined exposure remains within the active cap.

## 5. Required compact output

Every football reassessment must include a concise market scan after the verdict and Assessment period line.

Minimum format:

- `1X2: LEAN/NO BET — reason`
- `Asian handicap: LEAN/NO BET — reason`
- `Goals: LEAN/NO BET — reason`
- `Team/period totals: LEAN/NO BET — reason`, when available
- `Corners: LEAN/NO BET — reason`
- `Other displayed markets: LEAN/NO BET — reason`, when relevant
- `Best expression: exact market`, or `Best expression: none`

The output may be compressed for live speed, but no displayed major market family may be silently omitted.

## 6. Existing controls unchanged

All previous controls remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable LEAN uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- mandatory Assessment period line;
- synchronized two-team snapshot and interval comparison requirements;
- fixed penalty value = 0.79 xG;
- league-relative calibration;
- exact settlement and goal-cliff analysis;
- every material event or price change requires independent repricing;
- a wager is official only after confirmed placement;
- `ledger.json` remains authoritative.
