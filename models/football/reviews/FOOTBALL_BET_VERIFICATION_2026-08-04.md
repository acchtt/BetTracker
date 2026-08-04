# Football Bet Verification Audit — 2026-08-04

## Scope

This audit reconciles:

1. `ledger.json` as fetched from the repository, version `2026-08-01T13:41:00Z`;
2. the five later football tickets confirmed in the active project conversation while ledger updates were on hold;
3. ticket arithmetic, settlement structure, execution validity and duplicate risk.

`ledger.json` was not modified.

## Repository-level findings

- The fetched ledger contains **82 records** across all sports.
- The audit identified **34 football records** representing **33 unique historical football tickets**.
- One confirmed duplicate exists for Shanghai Port vs Shandong Taishan, slip `871372429284040704`:
  - one record is settled as a loss;
  - one older record remains pending/open;
  - these must count as one wager, with the settled record superseding the stale pending record.
- Five later confirmed football tickets are absent because the ledger hold remained active.
- A certified all-time football total must not be published until the duplicate is removed and the five missing tickets are added or explicitly excluded.

## Post-hold tickets verified from supplied slips and results

| Event | Market | Odds | Stake | Settlement | Net |
|---|---:|---:|---:|---|---:|
| FC Cincinnati vs San Jose Earthquakes | Cincinnati -0.5 live, entry 1-1 | 2.06 | 0.125u | Full win, final 4-2 | +0.1325u |
| Club León vs Pachuca | Under 1.75 live, entry 1-0 around 69' | 1.89 | 0.125u | Full win, final 1-0 | +0.11125u |
| Colorado Rapids vs Austin FC | Colorado -0.5 live, entry 0-0 at halftime | 1.84 | 0.125u | Full win, final 1-0 | +0.105u |
| Celtic vs Dundee FC | Over 2.75 live, entry 0-0 at 23:26 | 1.88 | 0.25u | Full loss, final 1-0 | -0.25u |
| CA Sarmiento vs Independiente Rivadavia | Independiente -0.25 remaining match, entry 2-1 at halftime | 1.95 | 0.25u | Remaining segment 0-0; half loss | -0.125u |

Post-hold subtotal:

- stake: **0.875u = 875,000 VND**;
- return: **0.84875u = 848,750 VND**;
- net: **-0.02625u = -26,250 VND**;
- result notation: 3 full wins, 1 full loss, 1 half loss.

## Execution-verification findings

### Celtic vs Dundee FC

The recommendation snapshot was approximately 21:46 at Over 2.75 around 1.78. The ticket was accepted at 1.88 at 23:26.

Findings:

- exact market and line matched;
- stake matched the active 0.25u policy;
- accepted odds moved by 0.10 without a fresh synchronized reprice;
- the recommendation evidence had cumulative xG and box activity but zero xGOT and zero shots on target at the principal snapshot.

Classification:

- official placed and settled wager;
- execution-invalid for strict model attribution under v0.2.26;
- recommendation process grade: poor; should have remained WATCH/NO BET.

### Sarmiento vs Independiente Rivadavia

The halftime recommendation used Independiente's strong cumulative profile, including 1.16 xG, 1.74 xGOT, 11 shots, five shots on target and three big chances.

Findings:

- part of the cumulative chance profile came from one penalty sequence;
- the remaining-match -0.25 draw branch was a half loss and carried substantial probability;
- no fresh post-halftime production was available before entry;
- accepted odds moved from 1.98 to 1.95.

Classification:

- official placed and settled wager;
- thesis was directionally defensible but the estimated edge was too fragile for a mandatory 0.25u stake;
- recommendation process grade: borderline; should have remained NO BET without tactical confirmation or fresh second-half evidence.

## Historical ledger controls requiring cleanup

### Duplicate and stale state

- Shanghai Port vs Shandong Taishan, slip `871372429284040704`, appears twice.
- The settled loss must supersede the stale pending record.

### Settlement-scope risk

- FK Tukums 2000 vs FC RFS records a live RFS -1 wager that the sportsbook settled as a loss despite a final 0-1 score.
- The historical assumption about live-handicap scope was incorrect or insufficiently verified.
- Future live-handicap tickets require explicit full-match versus remaining-match confirmation.

### Execution-policy deviations preserved historically

Historical tickets include stakes or accepted prices outside later policy limits. These must remain recorded under the policy active at placement and must not be silently rewritten. Examples include:

- Laos vs Philippines Under 3.5 at 0.30u, above the later 0.25u cap;
- Puebla vs Chivas at 338,000 VND, above 0.25u;
- Vietnam vs Singapore tickets at larger historical stakes;
- San José vs Universitario first-half Under 0.75 accepted below the model cutoff;
- Zaglebie vs Piast Under 1.5 at 1.66, below the current 1.70 minimum.

These are execution or policy-context flags, not grounds for altering settled bookmaker outcomes.

## Verification standard adopted

For future audits, use this unique-key priority:

1. settlement ID;
2. bet or slip ID;
3. event + market + odds + stake + accepted timestamp.

Verify each ticket across five independent fields:

- bookmaker result and settlement;
- payout arithmetic;
- recommendation validity;
- execution validity;
- ledger inclusion and deduplication.

## Required ledger actions when the hold is lifted

1. Remove or supersede the stale Shanghai pending duplicate.
2. Add the five post-hold tickets with exact IDs, entry states, settlement and execution-validity flags.
3. Recompute the all-time football totals from unique ticket keys only.
4. Preserve historical policy deviations rather than normalizing them to the current rules.
5. Add separate fields for `resultVerified`, `executionValid`, `modelAttributed` and `dedupeKey`.

## Model action

The lessons from this audit are implemented in `MODEL_RULES_FOOTBALL_V0.2.26.md`.
