# Football Betting Procedure Addendum — 2026-08-01

**Status:** Active immediately  
**Controls over:** conflicting fixed rules or live-total guidance in `FOOTBALL_BETTING_PROCEDURE.md` and older football rule files.

## Active operating rules

- 1 unit = 1,000,000 VND.
- Minimum accepted odds for every football wager are 1.70.
- Official football stake cap is 0.25u = 250,000 VND.
- `LEAN — SMALL` is capped at 0.125u = 125,000 VND.
- Every recommendation begins with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- A wager is placed only after user confirmation.
- Every changed score, minute, line, price, card, substitution, injury, penalty, weather state, or settlement basis requires independent repricing.
- User execution above the stake cap is recorded as user-added exposure and is not model-approved stake.

## Active football rule chain

Read and apply in this order before any football recommendation:

1. `FOOTBALL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
2. `FOOTBALL_BETTING_PROCEDURE.md`
3. `MODEL_RULES_FOOTBALL_V0.2.17.md`
4. `MODEL_RULES_FOOTBALL_V0.2.16.md`
5. `MODEL_RULES_FOOTBALL_V0.2.15.md`
6. all earlier football rule files where not superseded
7. `MODEL_CHANGELOG.md`
8. authoritative `ledger.json`

Newer rules control conflicts.

## Red-card total gate

A live under is a hard `NO BET` when a materially stronger team has an 11-v-10 advantage, is trailing or level, retains attacking incentive, at least 35 minutes plus stoppage time remain, the ten-man side is pinned deep, and the line provides no more than two goals of protection.

After any red card:

- all pre-card evidence expires;
- accumulated xG cannot stand in for forward scoring intensity;
- require two synchronized post-card snapshots;
- explicitly price fatigue, own goals, deflections, rebounds, penalties, repeated crosses, set pieces, substitutions, and added time;
- a goal, second card, penalty, or major tactical change expires the assessment again.

## Persistent low-event gate

Outside an active red-card escalation state, two synchronized snapshots showing persistently low xG, shots on target, big chances, and box-shot quality require active pricing of available unders. Raw possession or corner dominance cannot block under evaluation when those corners remain sterile.

The red-card gate takes precedence over the persistent-low-event gate.

## Required recommendation record

For every actionable football candidate state:

- exact event, competition, market and settlement basis;
- score and minute;
- current line and odds;
- minimum accepted odds;
- fair-price range and uncertainty-adjusted edge;
- stake in units and VND;
- cards, substitutions, injuries, weather and pitch state;
- expected stoppage time and late-game incentive branch;
- status: `not placed` until execution confirmation.
