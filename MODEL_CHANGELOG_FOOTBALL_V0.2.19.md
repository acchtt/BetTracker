# Football Model Changelog — v0.2.19

Effective: 2026-08-01

## Change

Added a mandatory halftime-substitution gate and push-cliff penalty for early-second-half live unders.

## Triggering case

Thailand vs Malaysia:

- Thailand led 1-0;
- the model recommended Under 2 at 2.15 around minute 52;
- the user executed Under 2 at 2.14 for 0.25u;
- Thailand had already made an attacking/creative halftime substitution;
- the model relied too heavily on a quiet six-minute second-half sample;
- the halftime substitute assisted Thailand's second goal at minute 56;
- at 2-0 the wager became push-only, with any further goal causing a full loss.

## Previous weakness

The model checked current xG, shots, big chances, and score incentives but did not force explicit classification of halftime substitutions before approving an early-second-half under. It also treated whole-goal push protection as safer than warranted when one goal removed all winning upside.

## New controls

- Verify and classify every halftime and early-second-half substitution before pricing an under.
- A short quiet sample cannot override an attacking refresh by the stronger or leading team.
- Strong-team attacking refresh creates a temporary under veto until two synchronized post-substitution snapshots demonstrate suppression.
- Whole-goal unders with one-goal-to-push exposure receive a push-cliff penalty.
- Before minute 60, these bets require at least a seven-percentage-point uncertainty-adjusted edge for `OFFICIAL BET`.
- Early-second-half under recommendations must display substitution roles, elapsed time since changes, snapshot count, and separate win/push/loss probabilities.

## Expected effect

The model will reject more early-second-half unders immediately after halftime changes, especially when the stronger team introduces creativity or pace while leading narrowly.

## Possible downside

Some genuinely slow games will be missed while waiting for sufficient post-substitution evidence, and later prices may be worse.

## Case grading

Thailand vs Malaysia Under 2 at 2.14:

- execution: model-compliant;
- process grade: poor;
- model action: rule change required;
- correct v0.2.19 decision at entry: `NO BET`.
