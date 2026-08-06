# League of Legends Model Rules v0.3.29

**Status:** Active immediately  
**Effective date:** 2026-08-06 12:40 UTC+7  
**Purpose:** Correct pregame positive kill-handicap calibration after T1 Academy vs DNS Game 1.

This version supplements v0.3.28 and supersedes earlier rules only where stated. All bankroll, placement, probation, exposure, item-suspension, role-gold, execution-conversion, correction-rescan, objective-inventory, duration-eligibility, and anti-line-chasing rules remain active.

## 1. Triggering result

Official probation wager 12 was DNS +7.5 kills at 1.981 against T1 Academy in Game 1.

The user confirmed the wager lost. The latest supplied state at 28:35 showed:

- kills: T1A 27-8 DNS;
- gold: T1A approximately +12k;
- towers: T1A 9-1;
- dragons: T1A 3-1;
- Baron: T1A 1-0;
- inhibitors: T1A 2-0.

Visible role gold reconciled to approximately T1A +12k:

- DNS top approximately +2,293;
- T1A jungle approximately +888;
- T1A mid approximately +4,737;
- T1A bot approximately +6,304;
- T1A support approximately +2,351.

The decisive economic failure was concentrated in DNS mid and bot. Jungle and support execution amplified the carry gap even though the jungle gold delta alone was modest.

## 2. What the model missed

The wager thesis treated DNS's Jarvan IV, Neeko, and Rumble combination as a reliable return-kill floor. That was too optimistic.

A theoretical multi-champion combo is not a stable kill floor when:

- the underdog lacks durable frontline or disengage after the initial entry;
- its damage follow-up comes from lanes vulnerable to losing priority or economy;
- the favorite has simpler point-and-click access;
- the favorite has protected carries and lower execution burden;
- the underdog must coordinate multiple ultimates merely to trade kills;
- a failed first engage exposes the entire composition to a counter-cascade.

T1A's Ornn-Vi-Akali access and Lucian-Milio protection were easier to repeat than DNS's Jarvan-Neeko-Rumble layering. The model correctly identified T1A's lower execution burden but did not let that finding veto the positive-handicap bet.

## 3. Heavy-favorite positive-handicap veto

For a post-draft pregame positive kill handicap, estimate the no-vig map win probability from the available moneyline.

When the favorite's no-vig map win probability is at least **67%**, the underdog's positive handicap of **+7.5 kills or smaller** cannot be an official bet from draft and line cushion alone if the favorite also has the lower execution burden.

Promotion then requires at least two strong underdog resilience signals from section 4 and no active two-carry collapse risk from section 5.

If those conditions are not met, return:

`NO BET — HEAVY-FAVORITE CASCADE RISK`

This rule applies even when the offered positive-handicap odds appear generous.

## 4. Underdog kill-floor resilience test

A positive kill-handicap thesis must identify how the underdog continues producing kills after falling behind.

Strong resilience signals are:

1. at least one protected or self-sufficient damage carry with low target-access burden;
2. reliable return-kill initiation that does not require three coordinated ultimates;
3. durable frontline, peel, or disengage that survives the favorite's first engage;
4. neutral or favorable expected lane integrity in at least two of top, mid, and bot;
5. independent pick threat from range or point-and-click control;
6. objective contest tools that remain functional without first entry;
7. multiple damage channels that do not fail together when one carry lane loses.

A theoretical wombo combination counts as only one resilience signal unless the components can also function independently.

For an official pregame underdog positive handicap against a heavy favorite, require at least two strong signals, including at least one from items 1, 3, 4, or 7.

## 5. Two-carry collapse risk

A **two-carry collapse risk** exists when the favorite can plausibly win or directly access both the opposing mid and bot damage roles, and those roles supply most of the underdog's sustained damage or follow-up.

Indicators include:

- favorite point-and-click or long-range access into both carries;
- superior protection for the favorite's own carry pair;
- underdog mid and bot lacking reliable self-peel;
- underdog frontline unable to separate the favorite's dive from its backline;
- the underdog's return-kill thesis depending on the same two carries remaining even.

When active, downgrade the underdog positive-handicap cover probability materially. A +7.5 or smaller line cannot be official against a heavy favorite unless the underdog has verified compensating resilience.

Top-lane strength does not neutralize two-carry collapse risk by raw gold arithmetic alone.

## 6. Facilitator execution multiplier

Jungle and support impact must not be measured by gold alone.

A small facilitator gold lead can create a large margin effect when paired with:

- repeated successful initiation;
- high kill participation;
- low death exposure;
- carry protection;
- objective control;
- clean resets and denied counter-trades.

Required assessment:

`FACILITATOR FUNCTION — engage/protection advantage; participation; death exposure; objective conversion`

In the triggering map, T1A jungle held only a modest visible gold advantage, but Vi's access and Milio's protection helped convert the much larger mid and bot advantages into a 19-kill margin.

## 7. Positive-handicap cascade stress test

Before approving an underdog positive kill handicap, explicitly test the favorite's clean cascade:

1. favorite wins first engage or pick;
2. underdog loses access to one or both primary carries;
3. favorite converts objective or structure;
4. underdog is forced to contest from poor entry;
5. the same target-access pattern repeats;
6. kill margin expands faster than the underdog can trade.

State:

- current starting margin;
- final margin required to defeat the handicap;
- favorite's simplest repeated access pattern;
- underdog's independent return-kill mechanisms;
- two-carry collapse status;
- facilitator execution advantage;
- whether the handicap survives the clean cascade branch.

If the line fails this branch and the thesis relies mainly on coordinated wombo execution, return `NO BET`.

## 8. Market-price interaction

Do not infer value solely because the positive-handicap price is longer than an initial fair estimate.

When a heavy-favorite veto or two-carry collapse risk is active:

- widen the uncertainty interval;
- reduce the estimated cover probability;
- do not promote merely because the accepted price improves;
- prefer live reassessment after lane integrity and first-objective execution are observed.

Better execution price cannot repair an invalid pregame thesis.

## 9. Draft output requirement

For every post-draft positive kill-handicap candidate, include one compact line:

`HANDICAP RESILIENCE — heavy-favorite status; independent kill-floor signals; two-carry collapse risk; cascade verdict`

The positive handicap cannot become official until this line is completed.

## 10. Probation update

After settlement of wager 12:

- completed: 12/20;
- official record: 7-5;
- net: +85,750 VND / +0.08575u;
- next wager: 13;
- standard stake: 0.25u = 250,000 VND;
- maximum exposure: 0.25u per map;
- minimum odds: 1.60;
- duration remains official-ineligible through wager 20;
- no stake increase is authorized.

## 11. Review trigger

Review this calibration after the earlier of:

- three additional official positive kill-handicap wagers;
- probation wager 15 settlement;
- another loss caused by two-carry collapse or favorite cascade;
- explicit user request.
