# LoL Review — T1 Academy vs DNS Game 2 Kill Handicap

**Date:** 2026-08-06  
**Model reviewed:** LoL v0.3.29  
**Resulting model:** LoL v0.3.30  
**Official wager:** T1A -7.5 kills @1.864, 0.25u  
**Settlement:** Loss

## Verified settlement state

The user explicitly confirmed the wager lost. The latest supplied scoreboard showed:

- kills: DNS 29-23 T1A;
- gold: DNS approximately +4.2k;
- towers: T1A 7-6;
- dragons: DNS 4-3;
- Barons: DNS 3-0;
- inhibitors: T1A 2-1.

The exact final game clock and explicit map-winner statement were not supplied. The handicap settlement is nevertheless verified by the user's confirmation and the visible six-kill DNS lead.

## Role-gold reconciliation

The visible role-gold deltas reconciled to approximately DNS +4.2k:

- T1A top approximately +2,899;
- DNS jungle approximately +398;
- T1A mid approximately +493;
- DNS bot approximately +5,525;
- DNS support approximately +1,653.

DNS bot and support created the decisive economy. T1A's top and mid advantages were insufficient to establish the expected pick-and-cascade margin.

## Drafts

DNS blue:

- Olaf;
- Pantheon;
- Cassiopeia;
- Aphelios;
- Lulu.

T1A red:

- Gnar;
- Nocturne;
- Syndra;
- Yunara;
- Blitzcrank.

## What the model expected

The v0.3.29 thesis expected T1A to create repeatable access through Blitzcrank pick, Nocturne delivery, and Syndra burst. It classified DNS's Cassiopeia-Aphelios core as carrying active two-carry collapse risk and used Game 1 execution as supporting evidence for margin expansion.

The projection was T1A direction, 30-35 total kills, and a central duration range of 31-35 minutes.

## What actually failed

### 1. The market arithmetic was incompatible with the recommendation

The displayed Game 2 moneyline was approximately T1A 1.542 and DNS 2.400.

After removing margin, T1A's map-win probability was approximately 60.9%.

The accepted -7.5 price of 1.864 required a break-even cover probability of approximately 53.6%.

Therefore the bet required T1A to cover -7.5 in approximately 88.1% of its projected map wins.

That conversion requirement was structurally implausible. The bet should have been vetoed before narrative draft factors were considered.

### 2. Game 1 evidence was over-transferred

Game 1 showed T1A executing a one-sided cascade. That was historical series information, not current-map confirmation.

The new map changed:

- champions;
- lane interactions;
- target access;
- defensive tools;
- objective damage;
- adaptation incentives.

The model treated the prior blowout as positive margin evidence instead of applying a full current-map reset and adaptation discount.

### 3. The model whipsawed after its previous correction

LoL v0.3.29 correctly added a veto against blindly taking DNS +7.5 in Game 1 conditions. It then allowed that correction to justify T1A -7.5 in Game 2.

A rule that invalidates one side does not automatically validate the opposite side. The model moved from underdog-handicap optimism to favorite-handicap optimism without an independent conversion check.

### 4. DNS resilience was undercounted

Cassiopeia and Aphelios were immobile, but DNS was not helpless against access.

DNS had multiple independent resilience mechanisms:

- Olaf crowd-control immunity and frontline pressure;
- Pantheon point-and-click response and map access;
- Cassiopeia grounding and anti-dive control;
- Lulu shielding, speed, health amplification, and protection;
- Aphelios sustained teamfight and objective damage.

The model treated Lulu dependence as fragility while failing to credit the complete protection-and-counter-engage system.

### 5. T1A's access route was double-counted

Blitzcrank hook, Nocturne delivery, and Syndra burst were presented as several strengths. In practice, they were connected components of one pick-and-collapse route.

When that route failed or became difficult to repeat, T1A lacked enough independent margin mechanisms to support -7.5.

### 6. Bot-lane downside was not stress-tested

The decisive role result was DNS bot approximately +5.5k and DNS support approximately +1.65k.

The model focused on whether DNS's carries could survive access, but did not adequately test whether Aphelios-Lulu could win or stabilize the lane and then convert objective fights. That failure invalidated the projected two-carry collapse.

## Resulting model changes

LoL v0.3.30 adds:

- a favorite-win-to-cover conversion calculation for every negative kill handicap;
- a hard veto when the required cover share exceeds 70% for pregame -5.5 or wider lines;
- a full current-map evidence reset;
- a same-series anti-whipsaw rule;
- explicit adaptation uncertainty after a blowout;
- stronger credit for anti-dive, grounding, crowd-control immunity, and protection systems;
- an access reliability and failure-cost test;
- a temporary suspension of pregame kill handicaps at absolute lines of 7.5 or wider through wager 15;
- a mandatory negative-handicap output line.

## Probation accounting

After settlement:

- completed: 13/20;
- record: 7-6;
- net: -164,250 VND / -0.16425u;
- next model-attributed wager: 14;
- standard stake: 0.25u;
- maximum exposure: 0.25u per map;
- duration remains official-ineligible through wager 20.

No stake increase is authorized.
