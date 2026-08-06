# MODEL RULES — FOOTBALL v0.2.34

Effective: 2026-08-06

This version supplements v0.2.33 and all active football procedures. Every earlier bankroll, staking, minimum-odds, assessment-period, synchronization, execution-freshness, settlement, market-scan, motivation, defensive-baseline, HOLD, automation-parity, correlation, regime-persistence, candidate-oscillation and ledger control remains active unless this file explicitly strengthens it.

## 1. Competition-format verification gate

Before assigning motivation or promoting any side, total or team-total market, verify the competition format relevant to the current match.

The assessment must distinguish, where applicable:

- normal league points;
- group-stage qualification rules;
- number of remaining fixtures;
- two-leg aggregate state;
- away-goals or no-away-goals rules;
- regulation draw value;
- extra-time or penalty-shootout consequences;
- whether a regulation tie awards points;
- whether a shootout awards additional points;
- tiebreaker order, including goal difference, wins, goals scored or head-to-head;
- whether the displayed betting market settles at 90 minutes, remaining match, qualification, extra time or penalties.

If the format is unverified or materially uncertain, motivation-based promotion is blocked:

`NO BET — HOLD`

State exactly which format element must be verified.

## 2. Result-utility decomposition for non-standard formats

In competitions where a regulation draw retains material value, motivation must not be summarized only as “both teams want to win.”

Separate:

1. regulation-win utility;
2. regulation-draw utility;
3. shootout-win utility;
4. shootout-loss utility;
5. qualification or table utility;
6. goal-difference or margin utility;
7. loss-avoidance utility;
8. energy, injury and card-conservation utility.

A team may have high regulation-win utility while also having meaningful regulation-draw utility. That combination normally supports selective attacking rather than unrestricted late attacking.

## 3. Dual-value tie-state rule

When a tied regulation score still guarantees a point, preserves qualification control, creates a penalty-shootout route or otherwise retains material tournament value, classify the state as a `dual-value tie`.

In a dual-value tie:

- territorial pressure does not automatically imply maximum regulation-goal urgency;
- a team may press for a winner while still protecting the tie;
- late substitutions may target shootout readiness, control or fatigue management rather than immediate scoring;
- the final 10–15 minutes may become selectively aggressive, not necessarily Open;
- regulation side handicaps and one-goal totals require additional uncertainty widening.

A dual-value tie must be explicitly stated in the motivation section when material.

## 4. Pressure is not the same as scoring urgency

Possession, final-third entries, box touches, shots, corners and field tilt can demonstrate territorial control. They do not by themselves prove that a team will accept the transition risk required to score before regulation ends.

Before converting pressure into a side or Over recommendation, require evidence of at least two of the following:

- repeated central or high-value box access;
- multiple independent shots on target or major chances;
- persistent transition creation;
- opponent defensive degradation or inability to exit;
- attacking substitutions whose tactical role is verified;
- clear regulation-win necessity rather than merely preference;
- continued risk-taking after failed attacks;
- line movement that remains consistent with the observed state and is not solely clock decay.

Pressure without these confirmations may invalidate the opposing side but does not establish the pressured team as a bet.

## 5. Side-market persistence under tied states

In a tied match, especially a dual-value tie, switching from one side to the other requires more than territorial superiority.

A favorite, underdog, DNB or -0.25/+0.25 candidate may switch sides only when:

- the previous side is explicitly invalidated;
- two synchronized post-reset intervals support the new side;
- the new side demonstrates a repeatable scoring route, not only volume;
- the opponent’s counter or finishing route has materially weakened;
- the competition format supports regulation-goal urgency;
- draw settlement and half-win/half-loss branches are displayed;
- the current price remains executable after uncertainty widening.

Otherwise use `NO BET — HOLD` and `Best expression: none`.

## 6. xG and xGOT de-emphasis strengthened

xG and xGOT remain secondary diagnostics. They may describe chance location, shot placement or provider-assessed quality, but they cannot be the headline reason for a recommendation.

The following are prohibited:

- using low cumulative xG as the main reason to back an Under;
- treating goals as unsustainable merely because xG is low;
- using one xG or xGOT spike to establish an Open regime;
- rejecting a scoring route solely because the provider assigns low xG;
- using xG/xGOT to override visible defensive errors, transition frequency, repeated box access, goalkeeper vulnerability, motivation or tactical state;
- presenting precise future-goal probabilities derived from xG without a transparent calibrated model.

Every total-market assessment must first describe the non-xG forward-looking channels. xG and xGOT may then be added as supporting context.

## 7. Required non-xG forward-looking channels

Before promoting a goal market, assess at least four of these channels when data are available:

- independent attacking sequences;
- shots on target and goalkeeper workload;
- central versus wide box access;
- transition frequency and defensive recovery;
- defensive spacing, errors and duel losses;
- width, crosses and cutbacks;
- set-piece pressure;
- substitutions and bench profiles;
- fatigue, cards and injury constraints;
- score-state and competition-format utility;
- leader counterattacking route;
- trailing-team chase quality;
- pitch and weather effects;
- remaining time and stoppage-time risk.

No single metric can substitute for this multi-channel assessment.

## 8. Observed goals are evidence, not noise to be explained away

A scored goal may be low probability before the shot, but after it occurs it changes score state, motivation, tactical risk and market settlement.

Do not dismiss a goal as “against xG” or “unsustainable” without separately evaluating:

- whether the scoring route can repeat;
- whether the goal changes one or both teams’ incentives;
- whether the conceding team must chase;
- whether the leader can counter;
- whether the goal came from a penalty, set piece, transition, error or repeatable open-play pattern;
- whether the event caused substitutions or structural changes.

The score-state effect often matters more than the pre-shot probability estimate.

## 9. Regulation versus shootout settlement rule

Penalty-shootout goals do not count toward ordinary 90-minute match totals, Asian handicaps or 1X2 markets unless the market label and bookmaker rules explicitly include qualification, extra time or penalties.

For competitions that proceed directly to penalties after a regulation tie:

- assess regulation markets using regulation incentives and settlement only;
- assess qualification markets separately;
- do not use expected shootout strength to justify a regulation handicap unless it changes regulation tactics and that tactical effect is evidenced;
- explicitly state whether the market excludes penalties.

## 10. Late one-goal market rule in dual-value ties

When the match is tied and one additional goal decides a total or side market, the position is a one-event binary market under v0.2.33.

In a dual-value tie, promotion additionally requires:

- two synchronized intervals of persistent scoring pressure;
- verified regulation-win necessity or demonstrated willingness to risk the tie;
- no unresolved substitution cluster;
- at least one repeatable high-value route for the selected side or Over;
- explicit treatment of the possibility that both teams protect the tie late;
- a price edge strong enough to survive widened uncertainty.

Without these conditions, both Over and Under may correctly be `NO BET`.

## 11. Match review lesson — LAFC versus Chivas

The LAFC–Chivas review establishes the following calibration:

- Chivas’ sustained territorial pressure did not automatically create sufficient regulation-goal urgency because a 90-minute tie retained tournament value and led to a points-bearing shootout.
- LAFC DNB could be invalidated as a leading candidate without confirming Chivas -0.25 as executable.
- Chivas -0.25 at a large price remained correctly on HOLD because a level remaining segment produced a half-loss and the regulation tie still had value.
- Over 2.5 and Under 2.5 were both fragile one-event binary positions; rejecting both was valid.
- The final 1-1 result does not prove an Under edge, but it confirms the importance of format-aware uncertainty and the distinction between pressure and urgency.
- xG and xGOT should not have been used to frame the two first-half goals as less meaningful; the correct focus was independent scoring routes and score-state change.

## 12. Required compact output additions

When competition format materially affects motivation, include:

- `Format state:` standard, two-leg, knockout, group-stage or dual-value tie;
- `Regulation-win utility:` low, moderate or high;
- `Regulation-draw utility:` low, moderate or high;
- `Margin utility:` low, moderate or high;
- `Pressure-to-urgency conversion:` confirmed, partial or unconfirmed;
- `Market settlement:` regulation, remaining match, qualification or other verified scope.

These may be compressed for live speed but cannot be omitted when they are material to the recommendation.

## 13. Existing controls remain active

All earlier rules remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable `LEAN` uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- the 0.125u tier remains retired;
- full model parity across main chat, reminders and automations;
- mandatory full-market reassessment;
- scoring/conceding and decomposed-motivation requirements;
- exact event-budget analysis;
- synchronized snapshots and all event resets;
- regime-persistence and directional-switch gates;
- candidate-oscillation control;
- one-event binary-market control;
- settlement-scope confirmation;
- execution-freshness repricing;
- one-best-expression and combined-exposure control;
- official status only after placement confirmation;
- `ledger.json` as the authoritative record;
- ledger writes remain on hold until explicitly approved.
