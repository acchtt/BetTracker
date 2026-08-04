# Football Model Rules v0.2.16

**Effective date:** 2026-08-01  
**Status:** Active immediately  
**Supersedes:** Older football rules where they allow territorial pressure or raw corner volume to block active under pricing despite persistent low chance quality. All other active football procedures, v0.2.14 weather rules, and the v0.2.15 minimum-odds rule remain in force.

## Trigger

Atlético San Luis vs Club Tijuana finished 0-0. The model observed multiple synchronized live snapshots showing persistent chance suppression but remained at `NO BET` rather than actively pricing the under.

Relevant snapshots included:

- around 22': combined xG approximately 0.20, zero combined shots on target, one big chance, and low box-shot volume;
- around 42': combined xG approximately 0.32, one combined shot on target, no new big-chance escalation, and San Luis leading corners 4-1;
- around 47': combined xG approximately 0.44, one combined shot on target, low shot quality, and San Luis leading corners 5-1.

The model over-weighted territorial control and corner accumulation while under-weighting the persistence of low chance quality. The final 0-0 result does not by itself validate an under, but the synchronized process evidence shows that the market required active under pricing rather than passive rejection.

## 1. Persistent low-event state

Classify a match as a `persistent-low-event-state` when at least two synchronized snapshots separated by meaningful game time support most of the following:

- combined xG remains low relative to the minute, normally no more than 0.50 by the opening phase of the second half;
- no more than one combined shot on target;
- no new big chance during the latest 8-15 minute window;
- low shots-inside-box volume or low average shot quality;
- no repeated dangerous transition sequence;
- no red card, penalty sequence, major defensive injury, or attacking substitution that materially raises scoring intensity;
- observed tempo and ball progression remain controlled rather than chaotic.

The numerical levels are guides, not automatic bets. League, score, minute, lineups, weather, stoppage time, and market settlement still require pricing.

## 2. Mandatory active under pricing

When a `persistent-low-event-state` is present, the model must independently price the available live unders. It may not dismiss the total solely because one team has possession, territorial control, or a corner advantage.

The assessment must compare at least:

- the nearest whole-goal under;
- the nearest quarter-goal or half-goal under;
- the protection gained or lost between those lines;
- the probability of zero, exactly one, and two or more additional goals;
- expected stoppage time and late-game incentive branches.

If no under qualifies, explain the explicit veto rather than defaulting to generic caution.

## 3. Corner-quality decoupling

Corners are not independent proof of goal pressure.

Classify corner sequences as either:

- `productive corners`: create meaningful xG, shots on target, big chances, dangerous second balls, repeated goalmouth actions, or visible defensive breakdown;
- `sterile corners`: result mainly from blocked crosses, routine clearances, poor deliveries, harmless recycled possession, or no measurable increase in chance quality.

Rules:

- Raw corner count cannot override persistent low xG and low shots-on-target evidence.
- A large corner advantage with no corresponding chance-quality increase is neutral or mildly supportive of an under.
- Corners should raise expected scoring only when the delivery quality, aerial mismatch, second-ball pressure, goalkeeper difficulty, or repeated chance conversion is demonstrated.
- Do not count multiple corners from one attacking passage as multiple independent confirmations.

## 4. Side-market separation

A team may dominate territory without creating a side-market edge.

When one team controls possession and corners but chance quality remains low:

- the favorite or live side may remain `NO BET`;
- the total must still be priced independently;
- do not assume that rejecting the side also requires rejecting the under;
- do not convert territorial dominance into an automatic future scoring uplift.

## 5. Early-second-half live-under gate

For 0-0 matches between approximately 46' and 60', actively evaluate Under 1.5, Under 1.75, Under 2, or nearby protected lines when:

- at least two synchronized snapshots confirm suppression;
- combined xG is normally no more than 0.50;
- combined shots on target are no more than one;
- there has been no recent big chance or repeated high-quality chance cluster;
- no major attacking substitution, red card, penalty, severe fatigue signal, or tactical opening has occurred;
- weather and pitch conditions do not create abnormal rebound, handling, or defensive-error risk;
- the price is at least the active football minimum of 1.70 and clears the uncertainty-adjusted edge threshold.

This is a pricing obligation, not an automatic recommendation.

## 6. Late-game vetoes

A persistent low-event state must be downgraded or cancelled when any of the following occurs:

- a goal changes incentives;
- a red card or penalty materially changes scoring rates;
- both teams introduce attacking substitutions;
- the trailing side must chase;
- repeated dangerous transitions emerge;
- xG, xGOT, big chances, box shots, or shots on target accelerate materially;
- expected stoppage time becomes unusually high;
- weather or pitch deterioration raises handling, rebound, or defensive-error variance.

Every material change requires independent repricing.

## 7. Recommendation classification

For live unders under this rule:

- at least a five-percentage-point uncertainty-adjusted edge over breakeven is required for `OFFICIAL BET`;
- three to five points is `LEAN`;
- below three points is `NO BET`;
- odds below 1.70 are an automatic `NO BET` under v0.2.15;
- the football stake cap remains 0.25u;
- `LEAN — SMALL` remains capped at 0.125u;
- status remains `not placed` until user confirmation.

## 8. Required output fields

Every live-under assessment in a possible persistent-low-event state must state:

- current score and minute;
- synchronized snapshot times;
- combined xG and recent-window xG where available;
- shots on target, big chances, and box-shot quality;
- corner classification: productive or sterile;
- substitutions, cards, penalties, injuries, and weather/pitch state;
- expected stoppage-time branch;
- zero, one, and two-plus remaining-goal probabilities;
- displayed odds and minimum accepted odds;
- fair-price range and uncertainty-adjusted edge;
- exact settlement outcomes;
- recommendation status.

## 9. Review

Review after the next 15 qualifying persistent-low-event assessments, including official bets, leans, and no-bets.

Track:

- league and match;
- snapshot minutes;
- xG, shots on target, big chances, box shots, and corners at each snapshot;
- productive-versus-sterile corner classification;
- live total and odds observed;
- recommendation type;
- whether a veto occurred later;
- closing line;
- final score;
- standardized result at 0.25u for official candidates;
- actual result for confirmed wagers;
- false-under rate, missed-under rate, and calibration of zero/one/two-plus remaining goals.

Do not treat a 0-0 final score alone as proof that an under should have been official. Grade the decision using the information and price available at the checkpoint.