# Football v1.0 — Cross-Chat Transfer Handoff

**Created:** 2026-08-06 23:32 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Canonical namespace:** `models/football/`  
**Active model:** **Football v0.2.34**  
**Immediate match:** Jagiellonia Białystok vs Rangers  
**Current official position:** **Jagiellonia Białystok DNB @1.94 decimal**

---

## 1. Purpose and reasoning boundary

This file preserves the complete operational state needed to continue the Football v1.0 project in another chat:

- canonical loading order;
- active rules and procedures;
- evidence hierarchy;
- model corrections;
- market and candidate history;
- current official wager and attribution;
- exposure and ledger restrictions;
- live continuation protocol;
- prior match lessons that materially changed the model;
- a ready-to-paste bootstrap prompt.

It preserves auditable decision logic: the evidence considered, how it was weighted, why candidates were promoted, held, invalidated, or rejected, and which uncertainty gates remain active. It does not contain private hidden chain-of-thought or internal scratchpad text.

---

## 2. Canonical loading order

Open and apply the following in order. Newer rules control where they conflict; earlier rules remain active where preserved.

1. `models/football/CURRENT_MODEL.md`
2. `models/football/ORGANIZED_FILE_LOADING_GUIDE.md`
3. `models/LEGACY_MODEL_CHANGELOG.md` — football baseline only
4. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE.md`
5. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
6. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.5.md` through `MODEL_RULES_FOOTBALL_V0.2.34.md` in ascending order
7. This handoff: `models/football/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`
8. `/ledger.json` only when accounting, bankroll, exposure, placement, or settlement is relevant

Do not load `models/lol/`. Do not use retired football copies from the repository root.

After loading, acknowledge:

- `FOOTBALL FILES LOADED`
- active version: Football v0.2.34
- canonical namespace: `models/football/`
- procedures loaded
- rule range v0.2.5–v0.2.34 loaded
- this handoff loaded
- ledger status: loaded or `LEDGER NOT REQUIRED`
- any missing canonical path

If a required canonical file is missing, use:

`NO BET — MODEL CONTEXT INCOMPLETE`

---

## 3. Active operating rules

- 1u = 1,000,000 VND.
- Minimum accepted decimal odds = 1.70.
- Every executable `LEAN` uses exactly 0.25u = 250,000 VND.
- Normal official football stake cap = 0.25u.
- The 0.125u tier and `LEAN — SMALL` are retired.
- A wager becomes official only after confirmed placement.
- Every new match-analysis message begins with exactly one of:
  - `OFFICIAL BET`
  - `LEAN`
  - `NO BET`
- Immediately below the verdict, include:
  - `**Assessment period:** [match phase] — [quality classification]`
- Missing mandatory inputs require `NO BET`.
- Every prematch review and material live reassessment must scan all available major market families. Do not anchor only to the previously discussed market.
- Every proposed bet requires both teams’ relevant scoring and conceding profiles plus decomposed motivation.
- One best expression only. Do not add correlated positions.
- Combined same-match exposure may not exceed 0.25u without later explicit user authorization.
- `ledger.json` is the authoritative record, but all ledger writes remain on hold until explicit approval.

### Mandatory motivation decomposition

Assess separately:

1. regulation-win utility;
2. regulation-draw utility;
3. shootout-win utility, when applicable;
4. shootout-loss utility, when applicable;
5. qualification or table utility;
6. margin or extra-goal utility;
7. loss-avoidance utility;
8. energy, injury, and card-conservation utility.

### Goal-environment classification

Classify the current environment as:

- Closed;
- Neutral;
- Open.

Relative cooling is not equivalent to Closed.

---

## 4. Evidence and synchronization controls

- Use the same provider and same metric interval for both teams where possible.
- Separate cumulative match state from interval production.
- Major events reset the state:
  - goal;
  - penalty;
  - red card;
  - substitution cluster;
  - injury;
  - verified tactical change;
  - meaningful weather or pitch change.
- After a reset, the first snapshot is normally observational.
- A 0.25u live LEAN normally requires two synchronized, same-scope post-reset snapshots.
- Regime persistence requires two comparable snapshots and at least two independent forward-looking evidence channels.
- A single burst, big chance, high-xG shot, or corner sequence cannot establish a new regime.
- Invalidating one side does not confirm the opposite side.
- A directional switch requires:
  - explicit invalidation of the prior candidate;
  - a new causal regime;
  - two post-reset snapshots;
  - a fresh remaining-event budget;
  - persistent evidence;
  - adequate settlement protection.
- If the leading direction changes twice within 15 match minutes without separate causal events, activate unstable-market lockout and issue no LEAN.

### Candidate lifecycle

Use only:

- `ACTIVE WATCH`
- `NO BET — HOLD`
- `INVALIDATED`
- `LEAN`

When the candidate changes, state:

- **Prior candidate:**
- **Switch status:**
- **Regime persistence:**
- **Best expression:**

### Execution freshness

Reprice after any of:

- line movement;
- odds move of at least 0.03;
- implied probability change of at least 1.5 percentage points;
- more than 120 seconds;
- any material match event.

Settlement scope must be verified rather than inferred from screen layout.

User-specific sportsbook clarification:

- BTi live Asian handicaps are treated as remaining-match markets.
- BTi full-match totals are full match unless explicitly labeled otherwise.

---

## 5. xG and xGOT correction

The user correctly identified that the model was still overvaluing xG and xGOT. Football v0.2.34 formalizes the correction.

### Required treatment

- xG and xGOT are secondary diagnostics only.
- Together they count as one evidence channel.
- They may describe shot location, placement, finishing, or goalkeeper outcomes.
- They cannot be the headline reason for a recommendation.
- Do not use low cumulative xG as the principal reason for an Under.
- Do not dismiss observed goals as unsustainable merely because provider xG was low.
- Do not use one xG or xGOT spike to establish an Open regime.
- Do not allow xG/xGOT to override visible defensive errors, repeated box access, transitions, goalkeeper vulnerability, tactical state, or competition-format motivation.
- Do not give precise future-goal probabilities from xG without a transparent calibrated model.

### Primary forward-looking channels

Before promoting a goal market, assess at least four when available:

1. independent attacking sequences;
2. shots on target and goalkeeper workload;
3. central versus wide box access;
4. transition frequency and defensive recovery;
5. defensive spacing, errors, and duel losses;
6. width, crosses, and cutbacks;
7. set-piece pressure;
8. substitutions and bench profiles;
9. fatigue, cards, and injuries;
10. score state and competition-format utility;
11. leader’s counterattacking route;
12. trailing team’s chase quality;
13. pitch and weather effects;
14. remaining time and stoppage-time risk.

Observed goals are evidence because they change score state, incentives, tactical risk, and settlement. Evaluate whether the route can repeat instead of explaining the goal away through xG.

---

## 6. Competition-format controls from v0.2.34

Before assigning motivation or promoting a side, total, or team total, verify the relevant format:

- league or group points;
- remaining fixtures;
- two-leg aggregate state;
- away-goals rule or absence of it;
- regulation-draw value;
- extra-time and shootout consequences;
- tiebreaker order;
- market settlement at 90 minutes, remaining match, qualification, extra time, or penalties.

If a material format element is unverified, use `NO BET — HOLD` and state the exact missing element.

### Dual-value tie

When a tied regulation score preserves points, qualification control, or a shootout route, classify it as a `dual-value tie`.

In a dual-value tie:

- territorial pressure does not automatically mean maximum regulation-goal urgency;
- a team can press selectively while protecting the tie;
- late substitutions may prioritize control, fatigue management, or shootout readiness;
- the final phase may remain Neutral rather than Open;
- side handicaps and one-goal totals require wider uncertainty.

### Pressure-to-urgency gate

Before converting pressure into a side or Over recommendation, require at least two of:

- repeated central or high-value box access;
- multiple independent shots on target or major chances;
- persistent transition creation;
- opponent defensive degradation or inability to exit;
- verified attacking substitutions;
- clear regulation-win necessity;
- continued risk-taking after failed attacks;
- supporting market movement not explained only by clock decay.

When material, include:

- `Format state:`
- `Regulation-win utility:`
- `Regulation-draw utility:`
- `Margin utility:`
- `Pressure-to-urgency conversion:`
- `Market settlement:`

---

## 7. Fixed penalty treatment

Every penalty is assigned 0.79 xG.

`NPxG = raw xG − 0.79 × penalties`

After a penalty, report:

- raw xG;
- penalty count;
- NPxG;
- rebound sequence;
- post-event interval.

A penalty causes a regime reset. Do not automatically subtract penalty value from xGOT.

---

## 8. Immediate match — Jagiellonia Białystok vs Rangers

### Known state

- Scheduled kickoff: 23:00 Vietnam time on 2026-08-06.
- Confirmed lineups and prematch odds were supplied in the prior chat.
- Both teams appeared in broadly functional 4-2-3-1 structures.
- Neither lineup appeared heavily rotated or deliberately defensive.
- No post-kickoff score, clock, card, substitution, or live-market state is preserved in this handoff.

The continuation chat must not assume the current score, minute, match state, or available prices. Ask for or read the newest screenshot before live analysis.

### Competition and motivation baseline

The match was assessed as a European qualifying first leg.

Baseline interpretation:

- Jagiellonia had high home-win utility.
- Rangers had meaningful draw and loss-avoidance utility with the return leg to follow.
- Neither team needed to settle the tie in the first leg.
- Margin utility was limited.
- This supported draw protection rather than an unprotected home win.

The new chat should verify the exact competition and two-leg settlement details from the canonical/current source before relying on motivation again.

### Lineup interpretation

- Rangers selected sufficient attacking personnel that the Under thesis did not deserve promotion.
- Jagiellonia retained a credible central striker and supporting attackers.
- The protected home side was structurally preferable to either total.
- The lineups did not establish Rangers as sufficiently superior to justify an away handicap.

---

## 9. Home and away evidence used

The prior chat used the following 2025/26 league venue splits:

| Team | Home record | Home goals | Away record | Away goals |
|---|---:|---:|---:|---:|
| Jagiellonia | 9-3-5 | 34-24 | 6-8-3 | 22-17 |
| Rangers | 11-5-3 | 39-21 | 9-7-3 | 37-22 |

Interpretation:

### Jagiellonia

- stronger attacking output at home;
- approximately 2.00 scored and 1.41 conceded per home match;
- meaningful home advantage, but not defensive dominance.

### Rangers

- limited venue deterioration;
- approximately 1.95 scored and 1.16 conceded per away match;
- only three away league defeats but seven draws;
- the draw frequency supported protection rather than an outright Jagiellonia win.

### Market implication

- venue data supported Jagiellonia with draw protection;
- Rangers could not be treated as a weak away side;
- the data did not create a strong Under signal;
- historical averages were descriptive rather than standalone predictions.

Reverify these figures before citing them as current facts in another chat.

---

## 10. Prematch market history

### Earlier snapshot

Displayed prices included approximately:

- Jagiellonia +0.25 @1.72
- Jagiellonia DNB @2.02
- Rangers DNB @1.80
- Rangers -0.25 @2.11
- Over 2.5 @2.00
- Under 2.5 @1.80
- Over 2.25 @1.73
- Under 2.25 @2.07

Initial reasoning:

- Jagiellonia +0.25 was the leading protected-side candidate.
- Jagiellonia DNB was a viable alternative with less draw protection.
- Rangers side markets were rejected because away superiority was not sufficiently established.
- Under 2.5 remained a HOLD because both lineups contained viable attacking personnel.
- Over markets lacked enough evidence for an Open prematch classification.

### Immediate pre-kickoff snapshot

The market moved materially toward Jagiellonia:

- Jagiellonia DNB approximately 2.02 → 1.90
- Jagiellonia +0.25 approximately 1.72 → 1.64
- Rangers DNB approximately 1.80 → 1.92
- Rangers -0.25 approximately 2.11 → 2.21

Interpretation:

- Jagiellonia +0.25 fell below the 1.70 minimum and could not be chased.
- The movement supported the original home-side direction while removing value from that exact line.
- DNB remained above the minimum-odds floor.
- The user later corrected the record that a missing verdict had stated Jagiellonia DNB as the executable LEAN.

---

## 11. Authoritative current position

**OFFICIAL BET — model LEAN: Jagiellonia Białystok DNB @1.94 decimal.**

### Attribution

Under the explicit user correction, this must be treated as a model-recommended LEAN, not a user-initiated deviation.

A visible response had incorrectly characterized the final approved expression as only Jagiellonia +0.25 and later described the DNB as outside the final model recommendation. Those classifications were withdrawn after the user stated that one missing verdict had explicitly made DNB the LEAN.

Current precedence therefore is:

1. explicit user correction;
2. this handoff;
3. older conflicting chat summaries.

### Settlement

- Jagiellonia win: full win.
- Regulation draw: stake returned.
- Rangers win: full loss.

### Placement details

- Accepted odds: 1.94 decimal.
- Model stake: 0.25u = 250,000 VND.
- Actual stake: presumed 0.25u but not yet confirmed by ticket.
- Ticket ID: not supplied.
- Placement timestamp: not supplied.
- Settlement: unknown.
- Ledger write: not authorized.

Use this status until the user supplies newer ticket or settlement evidence:

`OFFICIAL BET — PLACED, DETAILS PENDING`

---

## 12. Live continuation protocol

The existing DNB position consumes the normal 0.25u same-match cap.

Therefore:

- do not add another correlated position;
- do not issue another executable same-match LEAN without explicit authorization to exceed the cap;
- continue to scan all markets for analytical completeness, but mark add-ons non-executable under current exposure;
- focus on position health, thesis changes, settlement scope, and post-match review;
- discuss cash-out only if the user explicitly asks.

At each live update:

1. Confirm score and clock.
2. Identify every major event since the prior snapshot.
3. Reset after goals, penalties, red cards, injuries, substitution clusters, or tactical changes.
4. Separate cumulative data from the newest interval.
5. Use non-xG forward-looking channels first.
6. Assess both teams’ scoring and conceding routes.
7. Reassess motivation under the verified first-leg state.
8. Assess whether the DNB thesis is:
   - structurally healthy;
   - weakened but intact;
   - materially invalidated.
9. Do not treat one Rangers burst as complete invalidation.
10. Do not treat invalidation of Jagiellonia’s edge as automatic confirmation of Rangers.

Primary DNB health indicators:

- Jagiellonia territorial access;
- central and wide box-entry routes;
- midfield progression;
- set-piece pressure;
- ability to prevent Rangers transition dominance;
- defensive recovery after turnovers;
- goalkeeper workload;
- whether Rangers’ away control becomes repeatable rather than episodic.

Recommended first live response format:

**OFFICIAL BET — Jagiellonia Białystok DNB @1.94 remains active.**  
**Assessment period:** [current interval] — [quality classification].

Then state:

- events/reset status;
- cumulative state;
- latest interval;
- scoring/conceding routes;
- format and motivation;
- goal environment;
- position health;
- full-market scan;
- exposure restriction.

---

## 13. Prior calibration lessons that remain active

### LAFC vs Chivas

Final result:

- regulation 1-1;
- LAFC won the shootout 5-4.

No bet was confirmed.

Main lessons:

- low xG could not be used to dismiss the two first-half goals or imply a Closed match;
- independent scoring routes, box access, transitions, and score-state effects mattered more;
- sustained Chivas territory did not automatically prove regulation-goal urgency because a tied regulation score retained tournament value;
- LAFC DNB could be invalidated without confirming Chivas -0.25;
- Over 2.5 and Under 2.5 were both fragile one-event binary markets;
- the final NO BET was correct;
- this review directly motivated v0.2.34’s competition-format, dual-value-tie, pressure-to-urgency, and xG-de-emphasis rules.

### Myanmar vs Laos

- First half ended 4-2.
- The match eventually produced at least nine goals and more than twelve corners.
- Proposed Under 8.5 and Under 12-corners directions would have lost.
- Error: “less open than the first half” was treated as “closed enough for an Under.”
- Repair: require exact remaining-event budgets and structural shutdown; relative cooling is not Closed.

### Thailand vs Philippines

- Thailand won 1-0.
- Thailand -1.5 would have lost.
- Error: win motivation was conflated with margin motivation.
- Correct decomposition:
  - win utility high;
  - draw acceptable;
  - margin utility low;
  - energy conservation meaningful.
- Correct prematch verdict should have been NO BET.

### Bolívar vs Oriente Petrolero

Final score: Bolívar 2-1 Oriente Petrolero. No placement confirmed.

Key lesson:

- candidate direction oscillated from handicap to Over to Under to Over to none;
- recent bursts were overweighted;
- v0.2.33 now requires persistence, reset discipline, and directional-switch controls.

### AGF vs Sabah cross-thread incident

A reminder chat improperly used informal executable language and unsupported probability estimates. The user placed two bets, producing 0.50u same-match exposure above the normal cap.

Process lessons:

- full model parity applies in reminder chats, automations, and secondary threads;
- informal labels cannot function as hidden picks;
- user-confirmed placements become official even when recommendation process was invalid;
- model attribution and execution validity must be separated;
- ledger writes still require explicit approval.

---

## 14. Ledger and accounting state

- `/ledger.json` is authoritative.
- Ledger writes remain on hold.
- Do not invent all-time totals, bankroll, P/L, or exposure.
- The Jagiellonia DNB position is official from user confirmation but remains outside the ledger until explicitly approved.
- Missing ticket fields:
  - actual stake;
  - ticket ID;
  - placement timestamp.
- Settlement is unknown.

---

## 15. Response style

Use direct, compact football-trading language.

For every material match update:

1. verdict first;
2. assessment period second;
3. reset/event status;
4. scoring and conceding profiles;
5. format-aware motivation;
6. non-xG forward-looking channels;
7. goal-environment classification;
8. full-market reassessment;
9. candidate lifecycle fields when direction changes;
10. exact event budgets for Under or corner candidates;
11. exposure restriction and one-best-expression control.

Do not provide unsupported exact probabilities. Do not make xG/xGOT the headline. Do not reopen settled attribution corrections unless the user supplies contradictory primary evidence.

---

## 16. Ready-to-paste bootstrap prompt

> Continue the Football v1.0 live-betting project from GitHub repository `acchtt/SlipTrace`.
>
> Open `models/football/CURRENT_MODEL.md` first and follow its exact load order. Load the organized guide, the retained football baseline, both football procedures, the complete Football v0.2.5–v0.2.34 rule chain in ascending order, and `models/football/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`. Load `/ledger.json` only if accounting, exposure, placement, or settlement is relevant. Do not load `models/lol/` or retired root football copies.
>
> Return `FOOTBALL FILES LOADED`, the active version, loaded rule range, handoff status, and ledger status before analysis.
>
> Authoritative current position: **OFFICIAL BET — model LEAN: Jagiellonia Białystok DNB @1.94 decimal**. Model stake is 0.25u = 250,000 VND, but actual stake, ticket ID, and placement timestamp remain pending. This is not a user deviation; the user corrected that a missing verdict had stated DNB as the LEAN. No ledger write is authorized.
>
> Do not assume the current score, minute, cards, substitutions, match state, or odds. Ask for or read the newest screenshot. Use verdict-first responses, separate cumulative state from interval production, apply event resets, assess all displayed markets, and enforce the existing 0.25u same-match exposure cap. Treat xG/xGOT as secondary diagnostics only. Verify competition format and separate regulation-win, regulation-draw, shootout, margin, loss-avoidance, and conservation utility.

---

## 17. Final authoritative state

- Active model: **Football v0.2.34**.
- Active handoff: `models/football/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md`.
- Current position: **OFFICIAL BET — Jagiellonia Białystok DNB @1.94 decimal**.
- Attribution: model LEAN under explicit user correction.
- Expected stake: 0.25u; actual ticket details pending.
- Current live match state: unknown; must be refreshed.
- Same-match available executable exposure: 0u under the normal cap.
- Ledger write: not authorized.
