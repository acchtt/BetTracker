# LoL Review — T1 Academy vs DNS Game 1 Positive Handicap

**Date:** 2026-08-06  
**Model reviewed:** LoL v0.3.28  
**Resulting model:** LoL v0.3.29  
**Competition:** LCK CL 2026 Rounds 3-4  
**Official wager:** probation wager 12

## Wager

- Selection: DN SOOPers Challengers +7.5 kills
- Odds: 1.981
- Stake: 250,000 VND / 0.25u
- Ticket ID: 1151528505
- Result: loss
- Net: -250,000 VND / -0.25u

The user confirmed the loss.

## Latest supplied state

At 28:35, the scoreboard showed:

- T1A 27-8 DNS kills;
- T1A approximately +12k gold;
- T1A 9-1 towers;
- T1A 3-1 dragons;
- T1A 1-0 Barons;
- T1A 2-0 inhibitors.

The kill margin was 19, twelve kills beyond the largest margin DNS +7.5 could tolerate.

## Role-gold reconciliation

Visible role deltas reconciled to approximately T1A +12k:

- DNS top approximately +2,293;
- T1A jungle approximately +888;
- T1A mid approximately +4,737;
- T1A bot approximately +6,304;
- T1A support approximately +2,351.

The user's diagnosis of a DNS bot and jungle difference is directionally useful, but the economic evidence shows the primary collapse was bot and mid. Jungle and support created a facilitator execution advantage that amplified those carry gaps.

## Draft review

DNS blue:

- Rumble / Jarvan IV / Ryze / Ezreal / Neeko

T1A red:

- Ornn / Vi / Akali / Lucian / Milio

The pregame assessment correctly identified:

- T1A had the lower execution burden;
- T1A had the only durable frontline;
- Ornn and Vi supplied reliable initiation;
- Milio improved Lucian protection;
- T1A held a slight-to-moderate draft edge.

The error was approving the opposite-side positive kill handicap despite those findings.

## What failed in the thesis

### 1. Theoretical return-kill tools were treated as a stable floor

Jarvan-Neeko-Rumble supplied a strong coordinated fight combination, but the model treated that combination as if it guaranteed repeated return kills.

It did not sufficiently test what happened when:

- DNS lost first entry;
- Ryze and Ezreal fell behind;
- Jarvan or Neeko died during initiation;
- T1A protected Lucian while Vi and Akali accessed DNS carries;
- DNS had to contest objectives from poor terrain.

The combo required multiple pieces to function simultaneously. It was not an independent kill floor.

### 2. Heavy-favorite status was underweighted

The post-draft Game 1 moneyline priced T1A as a heavy favorite. After removing bookmaker margin, DNS was approximately a one-third map winner.

A +7.5 line can still be valuable against a heavy favorite, but not from line cushion alone when the favorite also has simpler execution and stronger carry protection.

### 3. Two-carry collapse risk was missed

DNS depended heavily on Ryze and Ezreal for sustained follow-up. T1A had direct access through Vi and Akali and superior protection through Ornn and Milio.

The map ended with approximately:

- T1A mid +4,737;
- T1A bot +6,304.

The positive handicap thesis should have been vetoed by the risk that both primary DNS carries could fail together.

### 4. Facilitator impact was reduced to raw gold

T1A jungle's visible gold advantage was only approximately 888, but Vi's access was much more important than the raw number. Milio's protection and 23 assists further amplified the carry gaps.

The correct model variable is facilitator function, not facilitator gold alone.

### 5. Improved price was allowed to reinforce a weak thesis

The accepted odds improved from 1.941 to 1.981. That was favorable execution, but price improvement cannot repair an invalid structural thesis.

## Resulting correction

LoL v0.3.29 adds:

- a heavy-favorite positive-handicap veto;
- an underdog kill-floor resilience test;
- a two-carry collapse risk check;
- a facilitator execution multiplier;
- a mandatory positive-handicap cascade stress test;
- a required handicap-resilience output line;
- a rule preventing better price from repairing invalid structure.

Under v0.3.29, this wager would have returned:

`NO BET — HEAVY-FAVORITE CASCADE RISK`

T1A's heavy-favorite status, lower execution burden, point-and-click access, protected carry structure, and DNS two-carry collapse risk were not offset by two strong independent underdog resilience signals.

## Probation impact

After settlement:

- completed: 12/20;
- official record: 7-5;
- net: +85,750 VND / +0.08575u;
- next wager: 13;
- no stake increase authorized.
