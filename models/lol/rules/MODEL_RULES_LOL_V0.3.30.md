# League of Legends Model Rules v0.3.30

**Status:** Active immediately  
**Effective date:** 2026-08-06 13:41 UTC+7  
**Purpose:** Correct negative kill-handicap conversion, reset cross-map evidence, prevent same-series calibration whipsaw, and temporarily suspend wide pregame kill handicaps.

This version supplements v0.3.29 and supersedes earlier rules only where stated. All stricter bankroll, placement, exposure, probation, minimum-odds, duration-ineligibility, item-suspension, role-gold, objective-inventory, execution-scoring, correction-rescan, and anti-line-chasing rules remain active.

## 1. Triggering result

Official probation wager 13 was T1 Esports Academy -7.5 kills at 1.864 against DN SOOPers Challengers in Game 2.

The user explicitly confirmed the wager lost. The latest supplied state showed:

- kills: DNS 29-23 T1A;
- gold: DNS approximately +4.2k;
- towers: T1A 7-6;
- dragons: DNS 4-3;
- Barons: DNS 3-0;
- inhibitors: T1A 2-1.

Visible role gold reconciled to approximately DNS +4.2k:

- T1A top approximately +2,899;
- DNS jungle approximately +398;
- T1A mid approximately +493;
- DNS bot approximately +5,525;
- DNS support approximately +1,653.

The decisive economy was concentrated in DNS bot and support. T1A's top and mid advantages did not produce the projected kill-margin cascade.

## 2. What the model missed

LoL v0.3.29 was created after Game 1 to veto an underdog positive handicap against a heavy favorite. The Game 2 recommendation then overcorrected in the opposite direction.

The miss had five components:

1. Game 1 execution was treated as current-map margin evidence instead of a small historical prior.
2. The negative-handicap break-even probability was not reconciled with T1A's map-win probability.
3. DNS resilience was understated because immobility was treated as equivalent to helplessness.
4. T1A's Blitzcrank-Nocturne-Syndra access was treated as reliably repeatable despite meaningful failure and isolation costs.
5. A calibration designed to veto DNS +7.5 was allowed to justify T1A -7.5 in the next map, creating a same-series model whipsaw.

## 3. Favorite-win-to-cover conversion gate

For every favorite negative kill-handicap candidate, calculate:

- `Pwin`: no-vig probability that the favorite wins the map;
- `Pcover`: break-even probability at the offered handicap odds, equal to `1 / decimal odds`;
- `CoverShare`: `Pcover / Pwin`.

`CoverShare` is the minimum share of the favorite's map wins that must also cover the handicap for the bet to break even.

### Mandatory interpretation

For a pregame negative handicap of -5.5 kills or wider:

- if `CoverShare > 0.70`, return `NO BET — NEGATIVE-HANDICAP CONVERSION VETO`;
- if `CoverShare` is 0.60-0.70, require at least three independent current-map margin signals and no strong underdog resilience cluster;
- if `CoverShare < 0.60`, continue through all normal draft, execution, price, and exposure gates.

Do not reduce `CoverShare` with prior-map execution evidence.

### Triggering arithmetic

The displayed Game 2 moneyline was approximately T1A 1.542 and DNS 2.400.

After removing margin, T1A's map-win probability was approximately 60.9%.

At the accepted -7.5 price of 1.864, the break-even cover probability was approximately 53.6%.

Therefore the wager required T1A to cover in approximately 88.1% of its projected map wins. That requirement was structurally implausible and should have vetoed the bet before draft interpretation was used.

## 4. Current-map evidence reset

Every new map resets live evidence.

A prior map may contribute only a soft team-execution prior. It cannot count as:

- a current-map fight conversion;
- current-map role-gold confirmation;
- current-map objective control;
- current-map margin evidence;
- one of the independent confirmations required to promote a handicap.

A prior-map blowout increases adaptation uncertainty. It does not create a presumption that the same kill margin will repeat.

At 0:00, all hard confirmations must come from the current draft, current market structure, and current-map information only.

## 5. Same-series anti-whipsaw rule

A calibration created after one map may veto a repeated structural error in the next map, but it cannot by itself justify betting the opposite side or opposite handicap family.

After a model loss in a series:

1. reset the map state;
2. evaluate the new draft independently;
3. run market arithmetic before narrative comparison;
4. treat adaptation as an uncertainty increase;
5. require current-map evidence before moving from a veto of one side to an official bet on the other.

Required output when the previous map materially influences analysis:

`CROSS-MAP EVIDENCE — soft prior only; adaptation risk; no current-map confirmation credit`

## 6. Resilience-credit correction

Immobile carries do not automatically create two-carry collapse risk.

Assess the entire protection and anti-access system. Strong independent resilience mechanisms include:

- crowd-control immunity or unstoppable frontline access;
- grounding, anti-dash zones, or anti-dive ultimates;
- point-and-click counter-engage;
- shields, speed, displacement, invulnerability, or health amplification;
- a second threat that can punish isolated dive;
- objective damage that forces the favorite to enter rather than wait for picks.

In the triggering draft, DNS had several independent resilience mechanisms:

- Olaf crowd-control immunity and frontline pressure;
- Pantheon point-and-click access and response;
- Cassiopeia grounding and anti-dive control;
- Lulu protection and reset denial;
- Aphelios sustained objective and teamfight damage.

These mechanisms should have materially reduced the T1A negative-handicap projection.

## 7. Access reliability and failure-cost test

A favorite's pick or dive route counts as a margin mechanism only when it is repeatable and low-cost.

For each claimed access route, state:

- target reliability;
- range and setup burden;
- protection against counter-engage;
- whether the initiator becomes isolated;
- whether a missed pick loses objective position;
- whether the route works against the opponent's full defensive system.

Blitzcrank pick, Nocturne delivery, and Syndra burst were three connected parts of one route, not three independent margin mechanisms.

Do not double-count connected components of one sequence.

## 8. Temporary wide-handicap suspension

Until probation wager 15 is settled, all **pregame** kill handicaps with an absolute line of 7.5 kills or wider are analysis-only.

This applies to both favorite negative handicaps and underdog positive handicaps.

They may become official only live, after the current map supplies:

- a verified clock;
- role-gold or aggregate-gold direction;
- at least one independent fight or pick conversion;
- at least one objective or structure confirmation;
- exact future-margin arithmetic;
- odds of at least 1.60;
- available map exposure.

The suspension does not affect moneylines, smaller kill handicaps, or kill totals, which remain subject to their normal rules.

Duration remains official-ineligible through wager 20.

## 9. Negative-handicap output requirement

For every negative kill-handicap candidate, include:

`NEGATIVE HANDICAP CONVERSION — no-vig win%; break-even cover%; required cover share; current-map margin signals; resilience verdict`

A negative handicap cannot be official until this line is completed.

## 10. Market-family discipline

A correct winner direction does not imply a correct kill handicap.

Separate:

- map-win probability;
- expected kill margin conditional on winning;
- total-kill environment;
- duration environment.

Do not use a winner edge to justify a wide handicap without explicit conversion arithmetic.

## 11. Probation update

After settlement of wager 13:

- completed: 13/20;
- official record: 7-6;
- net: -164,250 VND / -0.16425u;
- next wager: 14;
- standard stake: 0.25u = 250,000 VND;
- maximum exposure: 0.25u per map;
- minimum odds: 1.60;
- duration remains official-ineligible through wager 20;
- no stake increase is authorized.

## 12. Review trigger

Review v0.3.30 after the earlier of:

- probation wager 15 settlement;
- two additional official kill-handicap decisions;
- another pregame handicap loss caused by conversion or cross-map anchoring;
- explicit user request.
