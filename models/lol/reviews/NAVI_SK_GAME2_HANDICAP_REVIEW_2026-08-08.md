# NAVI vs SK Game 2 Handicap Review — 2026-08-08

## Position

- Market: NAVI +5.5 kills
- Odds: 1.886
- Shadow stake: 0.25u
- Entry: 14:51
- Entry state: SK 8-7 NAVI; SK +1.9k gold; SK 1-0 towers; SK 2-1 Grubs; NAVI 1-0 dragons
- Final: SK 18-8 NAVI
- Result: LOSS -0.25u shadow

## Drafts

NAVI: Ambessa / Lee Sin / Ryze / Viktor / Alistar  
SK: Gnar / Pantheon / Syndra / Varus / Leona

## Primary process error

The entry estimate of 58-63% NAVI +5.5 cover was too optimistic. The model treated NAVI's scaling and extended-fight potential as kill-margin resilience without sufficiently testing how NAVI would safely enter fights against SK's pick/range/control architecture.

SK had a repeatable margin-expansion route:

Pantheon/Leona first contact -> Syndra/Varus ranged conversion -> Gnar objective-zone control -> numbers advantage -> structure/objective -> reduced NAVI access -> second pick.

This sequence is serially dependent, so the high-margin branch should have been wider than an independent-fight model implied.

## Failed reassessment

The user explicitly requested a composition reassessment after the position was recorded. The response remained anchored to the original position and said the thesis was still defensible.

Correct process: recorded position stays on the ledger, but current thesis must be recomputed position-blind.

By 19:51 SK led 10-8, +3.0k gold and 3-1 towers. Even with dragons 1-1, SK had gold + structural initiative plus demonstrated pick-cascade architecture. The current NAVI +5.5 thesis should have been INVALIDATED.

## Model corrections

Implemented in LoL v0.3.41:

1. position-blind reassessment;
2. mandatory ACTIVE / DEGRADED / INVALIDATED / CONFIRMED thesis labels;
3. mandatory reassessment triggers;
4. mechanistic positive-handicap resilience score: safe range, disengage/reset, waveclear/base defense, anti-dive/peel, objective-contest access, return-kill reliability;
5. Draft Cascade-Structure Veto;
6. serial pick-cascade margin-expansion penalty;
7. split neutral control does not cancel a gold + structure + cascade veto.

## Counterfactual verdict

Under v0.3.41, NAVI +5.5 @1.886 at 14:51 is **PASS**, absent stronger observed level-3+ return-kill/contest evidence.
