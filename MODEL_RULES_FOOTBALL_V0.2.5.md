# Football Model Rules v0.2.5

**Effective date:** 2026-07-29  
**Status:** Active evaluation rule  
**Base:** This addendum extends the rules in `MODEL_CHANGELOG.md` and takes precedence where aggregate-state or competition-context handling conflicts with an earlier interpretation.

## Competition importance and asymmetric aggregate-state model

### Sport and markets affected

Football prematch and live 1X2, Asian handicap and totals markets, with special emphasis on continental or regional competitions, knockout ties and second legs.

### Triggering evidence

- Santos vs Universidad Central de Venezuela, live Universidad Central +1.25 at halftime: the full-match score was 1-1 and Santos led 5-2 on aggregate. The wager lost after Santos won the second half 3-1, with the handicap-breaking goal arriving in regulation-time stoppage time.
- The review correctly identified Santos' reduced need to force sustained attacks, but applied the large aggregate cushion too one-directionally. It underweighted Universidad Central's forced chase, attacking substitutions, defensive exposure and the resulting Santos counterattack tail.
- Recent continental and regional-cup assessments showed that competition strength, stage and importance were being used qualitatively rather than as consistent probability inputs.
- The user requested an explicit model update incorporating league or competition importance and the asymmetric effects of a large aggregate score.

### Previous rule

Competition format, aggregate score, motivation and schedule context could be discussed manually, but they were not a mandatory calibrated module. A large aggregate lead could be treated mainly as reducing the favourite's attacking urgency, which risked lowering projected goals and favourite margin without separately increasing forced-chase and transition variance.

## Active rules

### 1. Mandatory competition-context module

For every football assessment, run a `competition-context` module before producing probabilities or fair odds.

- Separate **competition strength and data reliability** from **fixture importance and incentives**. They are different variables.
- Record the competition and its relevant scoring environment, the teams' underlying league strength, and whether cross-league priors are reliable.
- Do not transfer domestic-league scoring or team-strength estimates into continental or regional play without an uncertainty adjustment.
- Identify the stage explicitly: domestic league, domestic cup, group stage, first leg, second leg or single-match knockout.
- Confirm the qualification and tiebreak conditions that shape incentives.
- Account for rotation, schedule congestion, travel, home conditions, motivation, bench quality and expected substitution patterns.
- An unfamiliar or low-data competition receives a wider probability interval and an uncertainty penalty. When the edge is not robust after that penalty, return `LEAN` or `NO BET`.
- Translate context into numerical changes to team scoring rates, draw probability, expected tempo and outcome variance. Context must not appear only as narrative commentary.

### 2. Aggregate-state decomposition

For knockout ties and aggregate states:

- Model the aggregate-leading team's **sustained attacking urgency** separately from its **transition scoring opportunity**.
- A large lead can reduce possession risk and deliberate attacking volume while leaving counterattack scoring unchanged or higher.
- Model the aggregate-trailing team's required chase separately: goals still needed, time remaining, attacking substitutions, fullback height, defensive numbers, cards, fatigue and willingness to accept transition risk.
- Do not assume that a large aggregate cushion makes the match low scoring.
- When the trailing side must chase multiple goals, the central mean can fall slightly while the multi-goal tail and variance rise. Totals and handicaps must use the full outcome distribution rather than only the central projection.
- Treat an aggregate gap of three or more goals at the assessment point as a `large-aggregate-gap` state.
- In a `large-aggregate-gap` state, create at least two explicit branches:
  1. **Controlled branch:** the leading team manages territory and the trailing team cannot sustain pressure.
  2. **Forced-chase/open-transition branch:** the trailing team commits numbers and increases both its own attacking rate and the leading team's counterattack rate.

### 3. Late-game and stoppage-time handling

- From minute 60 onward, if the trailing side still needs two or more goals, increase the favourite's transition-goal rate and the probability of two or more remaining goals unless observed substitutions and match behaviour clearly contradict the chase scenario.
- Reassess after attacking substitutions, defensive substitutions, cards, injuries, fatigue or a change in the number of goals required.
- Extend the probability horizon through expected stoppage time.
- Late goals in stoppage time remain regulation-time events and must be included in handicap and totals settlement risk.

### 4. Market restrictions

- A large aggregate lead alone can never justify an underdog handicap, an under or a short favourite fade.
- For positive live underdog handicaps against a materially stronger aggregate-leading favourite, require the normal uncertainty-adjusted edge plus an additional two-percentage-point buffer when the trailing team is forced to chase.
- Under the current v0.2.3 restriction, this normally means at least a seven-point edge over breakeven for an `OFFICIAL BET` candidate.
- Calculate Asian quarter-line value across full win, half win, push, half loss and loss outcomes under both the controlled and forced-chase branches.
- Prefer `NO BET` or a protected favourite market when the underdog's qualification need creates a clear transition mismatch.

### 5. Required recommendation output

Every qualifying football recommendation must show:

- `Competition context`
- `Aggregate state`
- `Late-game branch`
- `Market implication`

Tag official bets using this module with `competition-context`. Add `aggregate-state`, `large-aggregate-gap` and `forced-chase` when applicable so results can be reviewed separately.

## Expected benefit

Prevent one-directional interpretations of motivation, improve cross-competition calibration, and better price the high-scoring and multi-goal-margin tail created when a trailing knockout team must attack despite the favourite having little need to dominate possession.

## Possible downside

The added uncertainty and branch analysis will produce more `NO BET` decisions, may reduce responsiveness to fast live markets, and can overstate transition risk when a trailing team does not actually chase as expected.

## Review threshold

Review after the next 10 settled official football bets tagged `competition-context`, including at least five knockout or aggregate-state bets if available. Report separately by competition, totals versus handicaps, aggregate gap below three versus three or more, and whether the forced-chase branch occurred. Compare estimated tail probabilities, closing-line quality, ROI and qualitative game-state accuracy.
