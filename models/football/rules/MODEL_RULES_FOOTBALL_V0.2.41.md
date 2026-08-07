# MODEL RULES — FOOTBALL v0.2.41

Effective: 2026-08-07

This version supplements v0.2.40 and all active football procedures. All earlier staking, minimum-odds, synchronization, reset, motivation, market-scan, exposure, settlement, circuit-breaker, Airtable and ledger controls remain active unless strengthened below.

## 1. Protected-underdog burden escalation

A large positive handicap is not a low-risk default. When taking an underdog against a material or deep favourite, especially +1.0, +1.25, +1.5 or larger, the model must establish affirmative evidence that the favourite's multi-goal margin probability is overstated at the exact line and price.

For a prematch protected-underdog candidate against a material/deep favourite, require at least two independent **margin-suppression** channels. At least one must directly address the favourite's ability to create or convert repeated high-value chances, and at least one must directly address the underdog's ability to resist or recover from adverse game state.

Valid margin-suppression channels include:

- strong underdog away/neutral resistance against comparable or stronger opposition;
- verified tactical/player evidence that specifically suppresses central box access or repeated big chances;
- meaningful favourite lineup degradation or demonstrated difficulty converting dominance into two-goal margins;
- robust underdog scoring/counter route capable of restoring handicap protection after conceding;
- independently supported market dislocation from a stronger price reference;
- venue/environment evidence that materially reduces the favourite's expected margin.

The following do **not** count as margin-suppression channels by themselves:

- the existence of +1.5 or another large handicap;
- a defensive formation label such as 5-3-2;
- generic possession/counterattack narratives;
- one isolated close loss;
- friendly/exhibition H2H;
- raw recent results without opponent-quality context.

If fewer than two valid suppression channels exist, the candidate fails validation.

## 2. Favourite-first-goal branch test

Before any prematch protected-underdog bet against a material/deep favourite can pass, explicitly test the branch in which the favourite scores first.

The model must answer:

1. What prevents the favourite from reaching a second goal after taking the lead?
2. Does the underdog have a credible scoring route to restore handicap protection?
3. Does the score state increase the underdog's need to open up and therefore increase transition/margin risk?
4. Does the competition reward additional margin or goals, reducing the favourite's incentive to settle for a one-goal win?
5. Does the venue, fatigue or personnel profile create late defensive fragility for the underdog?

If there is no affirmative evidence supporting resistance to the second-goal/multi-goal branch, `Favorite First-Goal Branch = Fail` and the protected-underdog candidate must be `NO BET`.

This branch test is required even when the underdog + handicap appears superficially attractive because a one-goal loss still wins.

## 3. Exact tiebreak-order propagation

Competition-format verification must identify the **exact order** of relevant tiebreakers, not merely whether goal difference exists somewhere in the rules.

When regulation wins, goal difference, goals scored or other margin-sensitive criteria appear early in the tiebreak order, propagate their relative priority into margin and conservation utility.

Do not overstate goal-difference utility if another criterion ranks ahead of it, but do not erase margin utility merely because regulation-win utility is primary.

For short group/phase formats with few matches, early margin-sensitive tiebreakers materially weaken any assumption that a strong favourite will automatically conserve after taking the lead.

The Airtable field `Margin Incentive Propagated` must be checked whenever these competition incentives materially affect the candidate. If not, validation cannot pass.

## 4. Deep-favourite market prior and contradiction requirement

When the market prices a favourite around -1.5 at near-even money, treat the two-goal-margin branch as a material prior, not as an extreme tail.

To oppose that prior with +1.5, the model must document at least two independent contradiction channels under Section 1 and pass the favourite-first-goal branch under Section 2.

The correct comparison is not simply "can the underdog avoid losing by two?" It is whether the offered +1.5 price materially underestimates the favourite's two-or-more-goal branch after accounting for venue, lineup, competition utility and adverse-score dynamics.

If the evidence is mixed, narrative-heavy or based mainly on settlement protection, return `NO BET`.

## 5. Club América vs San Diego FC final review

The prematch `San Diego FC +1.5 @1.89` selection is confirmed as a **model-attributed selection error** independent of the eventual 3-1 result.

The pre-kickoff evidence did not satisfy the burden needed to oppose an approximately -1.5 near-even favourite:

- San Diego's nominal 5-3-2 shape was treated as protection without verified evidence that it could suppress América's central/box access;
- the June 2025 3-0 friendly H2H was irrelevant to competitive margin pricing and should have carried near-zero weight;
- an isolated recent one-goal away loss was overused while San Diego's broader away defensive tail included materially heavier defeats;
- the market's two-goal-margin prior was not confronted with two independent contradiction channels;
- the favourite-first-goal branch was not explicitly tested, so the model failed to ask what would prevent América from scoring the second after going 1-0 up;
- competition utility was incompletely propagated. In 2026 Leagues Cup Phase One, regulation wins are the first standings tiebreaker, goal difference is second, and goals scored is third. This preserves meaningful margin/scoring utility after a lead rather than supporting a simple one-goal-conservation assumption;
- América's Mexico City home hosting status was a real venue advantage granted to a top-ranked Liga MX club and should have strengthened, not weakened, respect for the deep-favourite prior.

Correct non-hindsight prematch verdict: `NO BET` unless two independent margin-suppression channels and the favourite-first-goal branch could be verified.

The final 3-1 score confirms settlement of the wager as a loss, but the process classification does not depend on that outcome.

## 6. Airtable enforcement additions

The Football Decision States table now includes:

- `Margin Incentive Propagated`;
- `Underdog Suppression Evidence Count`;
- `Favorite First-Goal Branch`.

For a protected-underdog candidate against a material/deep favourite:

- `Underdog Suppression Evidence Count` must be at least 2;
- `Favorite First-Goal Branch` must equal `Pass`;
- `Margin Incentive Propagated` must be true whenever the competition has relevant margin-sensitive incentives.

Failure of any applicable condition is an automatic validator `FAIL`.

## 7. Existing controls remain active

- 1u = 1,000,000 VND.
- Minimum accepted odds = 1.70.
- Every executable or shadow `LEAN` uses exactly 0.25u.
- Same-state accepted-odds drift tolerance remains 0.08.
- Official football betting remains paused under the four-match circuit breaker, currently 0/4 unless later updated.
- No fixed cumulative same-match exposure cap under v0.2.37 outside circuit-breaker restrictions.
- A wager becomes official only after confirmed placement and only when official betting is enabled.
- Ledger writes remain on hold until explicitly approved.
