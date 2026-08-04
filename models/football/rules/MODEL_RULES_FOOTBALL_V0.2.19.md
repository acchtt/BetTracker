# MODEL RULES — FOOTBALL v0.2.19

Effective: 2026-08-01

This version supplements all active football procedures and model rules. Existing controls remain unchanged:

- 1u = 1,000,000 VND
- minimum accepted football odds = 1.70
- official football stake cap = 0.25u
- LEAN — SMALL cap = 0.125u
- every material live-state change requires independent repricing
- a wager is official only after confirmed execution

## 1. Halftime-substitution gate for live unders

Before recommending any live under between halftime and minute 60, the model must verify all substitutions made at halftime and after the restart.

Each substitution must be classified as one of:

- attacking upgrade;
- creative upgrade;
- pace/transition upgrade;
- defensive/game-management change;
- like-for-like;
- injury-forced change;
- uncertain role change.

A quiet 3–8 minute second-half statistical sample cannot override an attacking or creative halftime substitution by the stronger or leading team.

## 2. Strong-team attacking-refresh veto

A live under is capped at `NO BET` when all of the following are true:

- the stronger team leads by one goal;
- that team introduces a creator, winger, striker, advanced midfielder, or aggressive fullback at halftime;
- the total provides no more than one goal of winning protection before becoming push-only or loss-only;
- fewer than 15 post-substitution minutes have elapsed;
- no two-snapshot evidence shows the attacking refresh has failed to improve territory, progression, box access, or transition threat.

The veto may be removed only after at least two synchronized post-substitution snapshots, normally spanning 8–12 minutes, show suppressed chance quality and no meaningful tactical effect from the change.

## 3. Push-cliff penalty

For whole-goal unders where one additional goal removes all winning potential and leaves only a push:

- apply an explicit `push-cliff penalty` to expected value;
- separate probability of full win, push, and full loss;
- do not describe push protection as sufficient safety when the stronger team retains active attacking personnel and the opponent may later chase;
- require at least a seven-percentage-point uncertainty-adjusted edge over breakeven for an `OFFICIAL BET` before minute 60;
- otherwise return `LEAN` or `NO BET`.

## 4. Personnel state outranks short quiet samples

From halftime through minute 60, evidence priority is:

1. substitutions and role changes;
2. score incentive and team-strength differential;
3. tactical shape and transition exposure;
4. repeatable chance quality across multiple snapshots;
5. raw xG, shots, and possession from the first few minutes after the restart.

A 0.00–0.05 xG second-half opening over only a few minutes is not a reliable low-event signal when a meaningful attacking substitution has already occurred.

## 5. Thailand vs Malaysia review

Official wager:

- Thailand vs Malaysia live Under 2 at 2.14
- stake 0.25u
- entry score 1-0 around minute 52

Relevant pre-entry state:

- Thailand had introduced Worachit Kanitsribampen at halftime;
- the substitution was attacking/creative rather than defensive;
- Thailand were the materially stronger team;
- the initial second-half sample was quiet, but too short to establish suppression;
- one additional goal converted the wager from a possible win into push-only;
- Kanitsribampen assisted Thailand's second goal at minute 56.

Process classification: **poor**.

Model error: the recommendation over-weighted the quiet 46'–52' statistical sample and under-weighted the already completed attacking halftime substitution, stronger-team quality, and push-cliff risk.

Correct decision under v0.2.19: **NO BET**.

## 6. Required recommendation fields for early-second-half unders

Every live-under recommendation from halftime through minute 60 must state:

- all halftime and early-second-half substitutions;
- role classification for each change;
- whether the stronger team improved attacking personnel;
- elapsed minutes since each substitution;
- number and timing of synchronized post-substitution snapshots;
- full-win, push, and full-loss probabilities;
- push-cliff assessment;
- opponent chase and stronger-team counterattack branches.
