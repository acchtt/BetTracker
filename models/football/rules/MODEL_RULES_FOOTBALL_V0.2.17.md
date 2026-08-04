# Football Model Rules v0.2.17

**Effective date:** 2026-08-01  
**Status:** Active immediately  
**Supersedes:** v0.2.16 wherever persistent low-event evidence conflicts with a red-card escalation state. All other active football rules remain in force, including the 1.70 minimum odds rule and 0.25u official football cap.

## Trigger

Laos vs Philippines: Laos led 1-0 after scoring early, then received a red card at 14'. At approximately 33', Philippines had about 77% possession, six corners, eleven opposition-box touches, five shots, 0.24 xG, and no big chances. The model recommended Under 3.5 at 1.89 and the user executed at 1.87. Philippines then scored three times and the wager lost. The final score branch exposed a process error: the model treated low current xG as stronger evidence than the forward scoring pressure created by a materially stronger team chasing against ten men for more than an hour.

## 1. Hard red-card under veto

A live full-match under cannot be `OFFICIAL BET` when all of the following are true:

- one team has a red-card advantage;
- the numerically stronger team is materially stronger by pre-match or lineup prior;
- that team is trailing or level and therefore retains attacking incentive;
- at least 35 minutes plus expected stoppage time remain;
- the disadvantaged team is defending deep or losing territorial control;
- the proposed under has no more than two-goal protection from the current total.

In this state, the default is `NO BET` on the under. Low xG, zero big chances, poor finishing, or sterile corners do not clear the veto by themselves.

## 2. Red-card forward-pressure model

After a red card, estimate future scoring separately from accumulated xG. The assessment must include:

- minutes remaining plus expected stoppage time;
- relative team strength and bench depth;
- whether the stronger side is trailing, level, or leading;
- possession share after the card;
- box entries, box touches, blocked shots, corners, second balls, and goalkeeper workload;
- defensive fatigue and substitution constraints for the ten-man side;
- own-goal, rebound, penalty, and repeated-cross variance;
- whether the attacking side can sustain width, aerial pressure, and rest defense.

Accumulated xG is backward-looking and must not be used as a sufficient proxy for post-card scoring intensity.

## 3. Territorial pressure reclassification after a red card

Under v0.2.16, possession and corners can be classified as sterile when they do not create immediate xG. After a red card, repeated territorial pressure has additional cumulative value because it can produce:

- fatigue-related marking errors;
- own goals and deflections;
- second-ball chances;
- penalties and handballs;
- late defensive substitutions that reduce counter threat;
- sustained set-piece volume;
- stoppage-time expansion.

Therefore, a large post-card possession, box-touch, blocked-shot, or corner advantage cannot be treated as neutral merely because current xG remains low.

## 4. Required protection for any red-card under lean

A red-card under may be considered only when the hard veto is not active and all of the following hold:

- the numerically stronger team is already leading comfortably or has little incentive to continue attacking;
- the disadvantaged team offers minimal counter or set-piece threat;
- at least two post-card synchronized snapshots show declining rather than rising pressure;
- no attacking substitutions or shape changes increase scoring capacity;
- the line provides at least three-goal protection from the current total, or a whole-goal push materially reduces tail risk;
- odds are at least 1.70 and the uncertainty-adjusted edge clears the active threshold.

Even then, the maximum classification is normally `LEAN — SMALL` unless the remaining-time and incentive branches are unusually favorable.

## 5. Post-card snapshot requirement

Pre-card evidence expires immediately after a red card. A recommendation requires at least two synchronized post-card snapshots separated by meaningful game time. The model must not combine pre-card low-event evidence with post-card pressure as if they were the same regime.

Any goal, penalty, second card, major attacking substitution, or tactical change expires the assessment again.

## 6. Goal-state escalation

When the numerically stronger team scores while still chasing or only narrowly leading:

- treat the goal as confirmation that pressure can convert;
- reprice the probability of another goal upward;
- do not rely on low total xG to preserve an earlier under thesis;
- cancel any prior under recommendation unless a fresh independent assessment supports the new line.

Rapid successive goals, own goals, or repeated defensive errors are escalation signals even when xG remains modest.

## 7. Stake and execution discipline

- Official football stake remains capped at 0.25u.
- User-added exposure above 0.25u must be recorded separately and cannot be described as model-approved stake.
- A recommendation is not placed until user confirmation.
- Odds below 1.70 are automatic `NO BET`.

## 8. Required output fields

Every live-total assessment after a red card must state:

- card minute and team reduced;
- score and current minute;
- pre-match strength prior;
- post-card snapshot times;
- post-card possession, box touches, shots, blocked shots, corners, xG and xGOT;
- current incentives for both teams;
- estimated fatigue, own-goal, rebound, penalty, and stoppage-time branches;
- veto status;
- exact line, odds, fair price and settlement outcomes;
- recommendation and stake cap.

## 9. Review

Review after the next 12 live football total assessments involving a red card. Track official bets, leans and no-bets separately, including card minute, score at card, stronger-team prior, post-card pressure metrics, line protection, odds, final score, closing line, standardized 0.25u result, actual result, and whether the hard veto prevented a false under.