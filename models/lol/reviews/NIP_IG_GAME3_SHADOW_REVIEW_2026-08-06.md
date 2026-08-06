# NIP vs IG Game 3 — Shadow Review

**Date:** 2026-08-06  
**Model at issuance:** LoL v0.3.32  
**Competition:** LPL 2026 Split 3  
**Circuit breaker:** Shadow map 3 of 4  
**Actual exposure:** 0u

## Settlement

- Final winner: NIP
- Final kills: NIP 16-21 IG
- Final total kills: 37
- Logged shadow lean: Under 27.5 kills @2.066, simulated 0.25u
- Result: loss
- Simulated P&L: -0.25u / -250,000 VND
- IG ML was discussed late but never logged; no second shadow position existed.

## What was correct

1. The pregame draft correctly identified a plausible low-action structure through NIP disengage and IG ranged control.
2. The model avoided correlated Under add-ons at 26.5 despite higher prices.
3. The model recognized that IG's late gold and kill lead was fragile because NIP owned dragon soul and retained objective access.
4. The model required a fresh synchronized state before considering IG ML at long odds, preventing an unlogged stale-snapshot entry.
5. Role-gold breadth, objective ownership and Baron conversion were tracked separately.

## What failed

### 1. Position state was confused with thesis state

The response continued to say `RETAIN Under 27.5` after the assumptions supporting the Under had broken. The position remained recorded, but the analytical thesis should have been declared invalidated.

### 2. Late fight inventory was understated

At 28:23, the game already had 18 kills while NIP was on soul point, the first Baron cycle had not closed the game, another Baron was available, and both bases remained defendable. The model left only a modest cleanup reserve when the actual state contained several mandatory contest points.

### 3. Baron expiry was interpreted asymmetrically

The first Baron expiring without an inhibitor correctly supported duration extension, but the model also treated it as favorable to the kill Under. In reality, the failed close created more objective cycles and therefore more kill opportunities.

### 4. Soul was underweighted in live moneyline probability

IG's gold and kill lead was treated too optimistically even though NIP owned soul and retained Elder/Baron access. The later IG price was interesting, but the estimated IG win probability was too high for the objective state.

### 5. Deciding-map variance was not widened enough

Game 3 pressure and repeated late objectives produced multiple two-sided fights. The high-kill branch should have expanded earlier.

## Required corrections

The following controls are adopted in LoL v0.3.33:

- separate recorded position state from current thesis state;
- invalidate an Under with nine or fewer kills of cushion when two major fight triggers remain;
- invalidate an Under with five or fewer kills of cushion when any major fight trigger remains;
- reserve 8-14 central late kills when soul/Elder and another major objective remain contestable;
- treat failed Baron conversion as duration evidence but also as additional kill inventory;
- apply a material moneyline penalty to a gold leader facing enemy soul;
- widen the late high branch in deciding maps when both teams retain contest access.

## Circuit-breaker accounting

- Map 1: 1-1, simulated net -0.04325u
- Map 2: 2-0, simulated net +0.41850u
- Map 3: 0-1, simulated net -0.25000u
- Combined record: 3-2
- Combined simulated net: +0.12525u / +125,250 VND
- Actual exposure: 0u
- Official probation and ledger: unchanged
- Remaining: one complete shadow map
