# MODEL RULES — FOOTBALL v0.2.25

Effective: 2026-08-04

This version supplements v0.2.24 and all active football procedures. Existing stake, execution, repricing and ledger controls remain unchanged.

## 1. League-relative total calibration

A total line must be interpreted relative to the scoring environment of the specific league, teams and match, not against a universal football baseline.

Before treating a total as unusually low or high, record when available:

- league and competition phase;
- opening total and both-side prices;
- each team’s recent scoring and conceding distribution;
- expected lineup strength and attacking absences;
- home/away context;
- current score, minute and live total trajectory.

A nominal total such as 2.0 or 2.25 can be normal in a low-scoring competition. Its numerical size alone does not create over value. Likewise, a live total of 4.0 or higher is not automatically an under when major match events have created an open regime.

Do not compare an Argentine Liga Profesional total directly with a Liga MX, MLS, Scottish Premiership or other league total without league-relative calibration.

## 2. Argentine Liga Profesional baseline note

Argentine top-flight matches commonly open with lower totals than many higher-scoring leagues. The model must treat 1.75, 2.0 and 2.25 as potentially normal market baselines rather than automatic anomalies.

For Argentine matches:

- do not recommend an over merely because the opening total appears low in absolute terms;
- do not recommend an under merely because the league has a low-scoring reputation;
- require match-specific evidence and a fair-price estimate for either direction;
- prefer whole-goal protection when the probability mass around exactly two goals is material;
- compare the offered line with other Argentine matches of similar team strength, score state and minute when a reference sample exists.

The league prior explains the opening line. It does not determine the live result.

## 3. League prior versus live-match evidence

Use a dynamic weighting rule:

- pre-match and in the opening minutes, league and team priors carry substantial weight;
- after multiple synchronized live snapshots, direct match evidence gains weight;
- goals, penalties, red cards, major injuries and tactical changes sharply reduce the relevance of the original league prior;
- after a clear regime change, independently price the new state rather than anchoring to the competition’s usual scoring level.

A low-scoring league prior must not override:

- repeated big chances;
- high xGOT;
- penalties or dangerous set-piece sequences;
- sustained inside-box attempts;
- two-sided box access;
- a trailing team forced to chase;
- a leading team retaining a credible counterattacking route.

Conversely, early goals created by extreme finishing efficiency do not prove that the remaining match will stay open. Separate realized scoring from repeatable chance production.

## 4. Mandatory baseline-versus-regime statement

Every total recommendation in a league with a distinctive scoring baseline must explicitly state:

1. what the league baseline suggests;
2. what the current match evidence suggests;
3. whether the match remains in the baseline regime or has shifted into a new regime;
4. which evidence is being given greater weight and why.

If the model cannot reconcile the league prior with the live state, the verdict must remain NO BET.

## 5. Low nominal total is not automatic over value

A low opening total can still be efficiently priced or expensive on the over side.

Examples:

- Over 2.0 may require three goals for a win and only push at exactly two;
- Over 2.25 loses half at exactly two;
- a short over price can already include the league’s low baseline and the teams’ attacking profiles.

For any over on a low line, state separately the estimated probabilities of:

- zero or one goal;
- exactly two goals;
- three or more goals.

Do not use the minimum accepted odds of 1.70 as evidence that a low-line over has value.

## 6. High live total is not automatic under value

When a low-scoring league match becomes open, the live total may rise substantially. Do not oppose that rise solely because it looks high relative to the pre-match league norm.

Before recommending an under after an event-driven line increase, determine whether the new total is supported by:

- current score and remaining time;
- penalty or red-card effects;
- big chances and xGOT for both teams;
- the trailing team’s attacking incentives;
- counterattacking space for the leader;
- substitutions and available attacking depth.

The correct comparison is the offered live line versus the new match regime, not versus the league’s normal pre-match total.

## 7. Sarmiento Junín vs Independiente Rivadavia case note — 2026-08-04

### Halftime state

- Score: Sarmiento Junín 2-1 Independiente Rivadavia.
- Major event: Independiente Rivadavia penalty sequence around 31 minutes.
- Sarmiento scored twice from limited underlying production.
- Independiente Rivadavia produced the stronger repeatable chance profile.

Halftime synchronized statistics:

- xG: Sarmiento 0.17, Independiente Rivadavia 1.16;
- xGOT: Sarmiento 0.37, Independiente Rivadavia 1.74;
- shots: 2-11;
- shots on target: 2-5;
- big chances: 0-3;
- inside-box shots: 1-7;
- opposition-box touches: approximately 8-11;
- corners: 0-4.

The 2-1 score did not reflect Sarmiento control. Independiente Rivadavia retained the stronger chance-quality and chasing routes, while Sarmiento retained counterattacking space.

### Halftime market

Observed totals included approximately:

- Over 4.0 at 1.62 / Under 4.0 at 2.35;
- Over 4.25 at 2.08 / Under 4.25 at 1.81;
- Over 4.5 at 2.45 / Under 4.5 at 1.57.

The elevated live total was justified by the event-driven match state and could not be dismissed because the Argentine league normally carries a low scoring baseline.

At the same time, the three first-half goals included substantial conversion asymmetry, so the live evidence did not justify automatically projecting another high-scoring half.

Correct process lesson:

> Use the Argentine low-scoring baseline to interpret the opening line, then reduce its weight once penalties, three first-half goals, multiple big chances and a forced chasing state create a new regime. Price the halftime market from the new state and exact settlement, not from league reputation.

## 8. Data-collection requirement

Build a league-specific reference set containing:

- opening total;
- closing pre-match total;
- live total by score and minute;
- both-side prices;
- final score;
- xG, xGOT and big-chance state when available;
- red cards, penalties and major substitutions.

Do not impose a universal normal-decay curve until enough league-specific observations exist. Tag Argentine Liga Profesional observations separately from other competitions.

## 9. Existing controls unchanged

All prior controls remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable LEAN uses 0.25u;
- normal official football stake cap = 0.25u;
- every material live-state change requires independent repricing;
- synchronized two-team snapshots;
- exact settlement and goal-cliff analysis;
- a wager is official only after confirmed placement;
- ledger.json remains authoritative;
- ledger updates remain on hold until explicitly approved.

This update does not modify ledger.json or any official or shadow performance record.
