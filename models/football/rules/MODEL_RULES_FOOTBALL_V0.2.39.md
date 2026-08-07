# MODEL RULES — FOOTBALL v0.2.39

Effective: 2026-08-07

This version supplements v0.2.38 and all active football procedures. All earlier staking, minimum-odds, synchronization, reset, motivation, market-scan, exposure, settlement and ledger controls remain active unless strengthened below.

## 1. Prematch material-favourite fade gate

When the market makes one side a material favourite, especially around -1.25, -1.5 or deeper on the Asian handicap, the model must not oppose that favourite merely because the underdog receives a large protected line.

Before recommending the underdog side prematch, require independent evidence that the protection is mispriced at the exact offered line and odds.

At minimum, assess all of the following:

1. favourite margin profile at the relevant venue and competition level;
2. underdog resistance profile in comparable away or neutral matches;
3. underdog scoring route and ability to punish an aggressive favourite;
4. favourite lineup quality and availability relative to its normal attacking level;
5. underdog defensive personnel and structural suitability;
6. whether recent margin tails contradict the proposed protection;
7. whether the current market line itself is materially stronger than the model's evidence justifies.

A large positive handicap is settlement protection, not evidence of value by itself.

If the evidence is mixed, incomplete or mainly narrative, return `NO BET`.

## 2. Formation and possession narrative veto

A defensive formation such as 5-3-2, 5-4-1 or a low block must not be treated as proof that the underdog can keep the margin small.

Similarly, possession potential, two counterattacking outlets, nominal compactness or a theoretical transition route are weak priors until supported by player quality, recent resistance, tactical execution or live high-value access.

Formation labels describe starting structure; they do not establish defensive effectiveness.

## 3. Favourite margin-risk accounting

When the favourite is priced around -1.25, -1.5 or deeper, the model must explicitly separate:

- probability of the favourite winning;
- probability of the favourite winning by exactly one;
- probability of the favourite winning by two or more;
- underdog probability of scoring;
- underdog probability of avoiding sustained territorial collapse.

Do not infer that high regulation-win utility means low margin utility. A favourite may have both high win utility and high margin capability.

If the underdog has recent multi-goal away defeats or repeated low-quality defensive performances, that tail must be treated as direct evidence against large positive-handicap bets.

## 4. Market-respect gate for deep favourites

A deep favourite market is not automatically correct, but fading it requires affirmative edge evidence.

When the market is approximately -1.5 at near-even money, the model must treat that as a strong prior that a two-goal margin is plausible. The underdog +1.5 side can become executable only if at least two independent channels materially contradict that prior.

Valid contradiction channels include:

- strong recent underdog away resistance against comparable opposition;
- demonstrated favourite difficulty converting territorial dominance into multi-goal margins;
- meaningful favourite lineup degradation;
- tactical matchup evidence that specifically suppresses central box access;
- market dislocation supported by an independently stronger price reference.

A friendly H2H, generic formation argument, or isolated one-goal away loss cannot by itself clear this gate.

## 5. H2H weighting refinement

Recent H2H remains preview-only and may be used only when competitively relevant.

Friendly or exhibition H2H must carry near-zero decision weight unless the personnel, tactical context and incentives are unusually comparable and independently verified.

A friendly result must never be a deciding reason for an executable selection.

## 6. Club América vs San Diego FC process correction

The prematch `San Diego FC +1.5 @1.89` LEAN was a model-attributed selection error.

The model overvalued settlement protection and San Diego's nominal 5-3-2 shape while underweighting the market's strong two-goal-margin prior and San Diego's volatile away defensive tail.

The June 2025 3-0 friendly H2H carried too much narrative weight despite being an exhibition.

The correct non-hindsight prematch decision was `NO BET` unless independent evidence could demonstrate that América's multi-goal margin probability was materially overstated.

This correction is based on the information available before kickoff, not on the later 3-0 score.

## 7. Four-match football circuit breaker

Official football betting is paused for the next four model-qualified matches.

Circuit-breaker state begins at `0/4 complete` after activation of v0.2.39.

A match counts toward the four only when:

1. the model receives enough synchronized information to make a normal decision;
2. an executable `LEAN` would otherwise clear all active rules at odds at least 1.70;
3. the model designates exactly one primary shadow selection for that match;
4. that shadow selection is later settled or its result is otherwise verified.

During the circuit breaker:

- do not issue `OFFICIAL BET` for any new football position;
- label an otherwise executable selection `SHADOW LEAN — DO NOT PLACE`;
- use the normal 0.25u stake only for simulated accounting;
- allow at most one counted shadow selection per match;
- `NO BET` matches do not consume a circuit-breaker slot;
- existing official positions may settle normally;
- ledger writes remain on hold unless explicitly authorized;
- do not restore official betting automatically after 4/4; perform a four-match review first and require explicit user approval to restore official execution.

For each counted shadow match, record the selection, line, odds, assessment state, result, simulated P/L and whether the underlying process was valid independent of outcome.

## 8. Existing controls remain active

- 1u = 1,000,000 VND.
- Minimum accepted odds = 1.70.
- Every executable or shadow `LEAN` uses exactly 0.25u.
- Same-state accepted-odds drift tolerance remains 0.08.
- No fixed cumulative same-match exposure cap under v0.2.37, though the circuit breaker permits only one counted primary shadow position per match.
- A wager becomes official only after confirmed placement and only when official betting is enabled.
- Ledger writes remain on hold until explicitly approved.
