# T1 Academy vs DNS Game 3 Live-Handicap Review

**Date:** 2026-08-06  
**Model at analysis:** LoL v0.3.30  
**Resulting model:** LoL v0.3.31  
**Ledger impact:** none; no placement confirmation was supplied

## Candidate reviewed

The model issued:

`DNS +11.5 kills @1.913 — 0.25u candidate`

The user did not confirm placement. The candidate was therefore not official and does not affect probation or bankroll accounting.

## State at candidate

- T1A led 10-7 kills;
- T1A led approximately 4,000 gold;
- T1A led 2-0 towers;
- T1A led 2-0 dragons;
- T1A led role gold in top, mid, bot, and support;
- DNS led only jungle gold;
- no Baron or inhibitor had been taken.

The handicap required T1A to finish at least 12 kills ahead for DNS +11.5 to lose. From a +3 current margin, T1A needed +9 future net kills.

## Final score supplied

The user reported a final kill score of 26-12 in the same T1A-DNS order used in the live analysis.

From the candidate state, the remaining kills were:

- T1A: 16;
- DNS: 5;
- future net-kill margin: T1A +11.

The final T1A kill margin was +14. DNS +11.5 would have lost by 2.5 kills.

## Review findings

### 1. False stabilization

The model reactivated the handicap after DNS added one kill and the gold deficit contracted from approximately 4.5k to 4k.

That was insufficient. DNS did not reverse an objective, take a structure, win a full teamfight, or narrow T1A's broad role-gold control.

### 2. Ignored state sequence

The relevant sequence was:

- 15:17: T1A 8-6, approximately +2.1k, 2-0 dragons;
- 16:27: T1A 10-6, approximately +4.5k, 2-0 towers, 2-0 dragons;
- later snapshot: T1A 10-7, approximately +4k, still 2-0 towers and 2-0 dragons.

The final snapshot was not a genuine trend reversal. It was a small pullback inside an established T1A dominance trend.

### 3. Role-gold breadth

T1A led four of five roles. The advantages included top, mid, and bot, so they represented a broad system advantage rather than one isolated fed player.

DNS's jungle lead was not enough to establish a stable kill floor.

### 4. Objective and fight inventory

Two dragons and two towers before 20 minutes left several forced contest and structure-defense sequences. The model treated +9 future net kills as intrinsically difficult without estimating the remaining fight inventory.

The final +11 future net-kill result shows that the favorite had enough remaining conversion opportunities.

### 5. Line movement

The line widened and then narrowed while the game state changed. The model interpreted the cushion as value instead of comparing it with the deterioration that produced the line.

The correct conclusion was that the market was pricing an active T1A cascade.

## Correct verdict

At both the 16:27 state and the later 10-7 state, the correct verdict was:

`NO BET — DOMINANCE OVERRIDE`

## Corrective action

LoL v0.3.31 adds:

- a two-map shadow-analysis circuit breaker;
- two-snapshot stabilization requirements;
- a live dominance override;
- remaining-fight inventory assessment;
- broad role-gold control rules;
- line-moved-with-dominance rejection;
- explicit prohibition on betting against the model as an automatic inverse strategy.

## Accounting state

- official probation remains 13/20;
- official record remains 7-6;
- official net remains -164,250 VND / -0.16425u;
- next official wager remains #14;
- open exposure remains 0u.
