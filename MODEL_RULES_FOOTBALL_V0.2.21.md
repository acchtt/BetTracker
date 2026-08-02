# MODEL RULES — FOOTBALL v0.2.21

Effective: 2026-08-02

This version supplements v0.2.20 and all active football procedures. Existing controls remain unchanged:

- 1u = 1,000,000 VND
- minimum accepted football odds = 1.70
- official football stake cap = 0.25u
- LEAN — SMALL cap = 0.125u
- every material live-state change requires independent repricing
- a wager is official only after confirmed execution
- ledger.json remains the authoritative betting record

## 1. Separate execution, recommendation, and shadow performance

Every reviewed market must be assigned to exactly one category:

1. confirmed placed wager;
2. unplaced LEAN;
3. watch-only market;
4. withdrawn or invalidated thesis;
5. NO BET rejection.

Rules:

- Only confirmed placed wagers affect bankroll P/L.
- Unplaced leans and watch markets may be graded as shadow outcomes, but must remain separate from official performance.
- A winning watch market must not be retroactively promoted to an official bet.
- A losing watch market that was correctly withheld is not an execution error.
- A withdrawn thesis must be graded on the quality and timing of the withdrawal, not only the final score.
- Repeated prices for the same event, market, score state, and thesis are one model selection unless a material score, personnel, tactical, or statistical change created a genuinely new thesis.

## 2. Side-market chance-quality gate

Territorial dominance alone is insufficient for a live favorite handicap.

Before recommending a favorite side, assess:

- interval and cumulative xG;
- xGOT and shots on target;
- big-chance differential;
- opposition-box touches and inside-box shots;
- transition exposure and opponent chance quality;
- score incentive;
- substitutions and defensive structure;
- exact live-handicap settlement from the entry score.

A favorite side is capped at LEAN — SMALL when any of the following apply:

- xGOT materially trails territorial dominance;
- big chances are level or nearly level;
- the opponent has a credible transition route;
- the favorite needs a late goal but has not converted pressure into repeatable high-quality chances;
- the expected edge depends heavily on a penalty, deflection, set piece, or stoppage-time event.

Do not upgrade a side merely because the favorite later wins through a late penalty or isolated event.

## 3. Level-score favorite handicap rule

For a live favorite -0.5 entered at a level score:

- verify whether the market settles on the full final score or only the remaining-match segment;
- explicitly state the score required for a win;
- price the opponent's transition and counterattack threat;
- cap the recommendation at LEAN — SMALL if the favorite leads volume and territory but does not clearly lead big chances;
- prohibit correlated add-ons if the favorite later falls behind unless a completely new independent edge is established.

A later comeback does not erase the entry-time transition risk.

## 4. Territorial siege with weak finishing-quality rule

When one team dominates possession, corners, box touches, and inside-box attempts but has modest xGOT:

- describe the position as territorial dominance, not clinical dominance;
- prefer 0.125u LEAN — SMALL over a 0.25u official stake;
- require a second synchronized snapshot before upgrading;
- treat goalkeeper resistance, blocked shots, and poor shot placement as real uncertainty;
- do not use a late winning goal as evidence that the finishing edge was stronger than shown at entry.

## 5. Chasing-favorite market selection: side versus over

When a stronger team trails, compare the favorite side with the total rather than assuming the comeback handicap is the best expression.

The over may be preferable when:

- the favorite must chase;
- the underdog has already created credible xG, xGOT, big chances, or transition opportunities;
- the favorite improves attacking personnel or territory;
- both teams retain independent scoring routes;
- the pitch is normal and no weather downgrade applies.

The favorite side should be rejected or downgraded when:

- cumulative xGOT and big chances still favor the underdog;
- the favorite's improvement is mainly possession, shots, or box touches without new shots on target or big chances;
- attacking substitutions weaken rest defense;
- the underdog remains dangerous enough that another concession materially damages the handicap.

For a halftime over requiring two additional goals, classify it as WATCH or LEAN — SMALL unless the estimated probability exceeds breakeven by the required uncertainty buffer and halftime substitutions are confirmed.

## 6. Red-card totals matrix

A red card is not an automatic over or under signal. Reprice according to:

- which team received the card;
- whether that team is leading, level, or trailing;
- relative team strength;
- substitutions after the card;
- two synchronized snapshots of xG, xGOT, shots on target, big chances, and box access;
- the leading team's incentive to attack or manage the game;
- the trailing team's actual ability to chase with ten players.

A live under may remain viable when the trailing red-card team shows no material attacking response across two synchronized snapshots and the leading team shifts toward control.

An under must be downgraded when the stronger or leading team continues attacking aggressively, the match becomes transition-heavy, or the total has a severe push cliff.

## 7. Same-scope snapshot requirement

Do not subtract a full-match snapshot from a second-half-only snapshot, or compare different stat tabs as if synchronized.

When the statistical scope changes:

- label the mismatch explicitly;
- use the new scope as a fresh baseline;
- wait for another same-scope snapshot before computing interval deltas;
- avoid promoting a side or total from one short new-scope sample.

After a material substitution, normally require 8–12 minutes and at least two same-scope snapshots before upgrading a watch market, unless a goal, red card, penalty, or injury creates an immediate veto.

## 8. Actual weather and pitch gate

Weather forecasts are context, not proof of playing conditions.

Before applying a weather adjustment, verify:

- visible rainfall;
- standing water or ball drag;
- slipping and first-touch quality;
- wind effect;
- warm-up and early-match passing speed.

A confirmed dry, normal pitch removes the wet-field downgrade but does not create positive betting value by itself.

## 9. Penalty and late-event grading

Penalties, deflections, goalkeeper errors, and stoppage-time goals must be separated from the entry process.

Review questions:

- Was the team repeatedly reaching dangerous zones before the event?
- Was the penalty a plausible result of sustained box pressure or a low-frequency isolated incident?
- Did the wager require an extreme late event to survive?
- Would the same evidence justify the same stake before the result was known?

A good process may win late, and a poor process may also win late. Outcome alone does not determine the grade.

## 10. Morning card review — 2026-08-02

### Confirmed placed LEAN — SMALL wagers

| Event | Market | Entry | Odds | Stake | Result | Net P/L | Process grade |
|---|---|---|---:|---:|---|---:|---|
| FC Cincinnati vs San Jose | FC Cincinnati -0.5 | 1-1 | 2.06 | 0.125u | Won 4-2 | +0.1325u | Good, but transition risk justified reduced stake |
| León vs Pachuca | Under 1.75 | 1-0 around 69' | 1.89 | 0.125u | Won 1-0 | +0.11125u | Good; two-snapshot suppression after the red card |
| Colorado Rapids vs Austin FC | Colorado -0.5 | 0-0 at halftime | 1.84 | 0.125u | Won 1-0 | +0.105u | Good lean, high variance; low xGOT prevented upgrade |

Placed total:

- record: 3 wins, 0 losses;
- stake: 0.375u;
- net profit: +0.34875u.

### Unplaced leans and watch markets

| Event | Market | Status at decision | Final outcome | Process review |
|---|---|---|---|---|
| LA Galaxy vs FC Dallas | Dallas 0 / DNB at 1.75–1.90 | Lean withdrawn after Galaxy improved between snapshots | 0-0, hypothetical push | Correct withdrawal; cumulative Dallas edge had become stale |
| Portland vs Seattle | Under 3 at 2.15 | Watch only at 0-1 around 33' | Final 2-1, push | Correctly withheld after only one short post-goal sample |
| Portland vs Seattle | Seattle +0.25 at 1.84 | Watch only after a short second-half sample | Portland won 2-1, loss | Correctly withheld; sample and substitution window were too short |
| Cruz Azul vs Atlante | Over 2.5 at 1.81 | Watch only at halftime, 0-1 | Final 2-3, win | Strong market identification; WATCH/LEAN — SMALL at most because two more goals were required and halftime changes were unconfirmed |
| Cruz Azul vs Atlante | Cruz Azul -0.5 remaining match at 2.00/1.97 | Watch thesis; never promoted and later invalidated by a penalty | Remaining segment 1-1, loss | Correct non-entry; territorial improvement lacked sufficient chance-quality conversion |

Deduplicated watch-thesis result at standard 0.25u evaluation stakes:

- 1 win, 2 losses, 2 pushes;
- theoretical P/L: -0.2975u;
- bankroll P/L: 0u because none were placed.

## 11. Required review output

A full session review must report separately:

1. confirmed placed wagers and actual P/L;
2. unplaced leans;
3. watch-only markets;
4. withdrawn or invalidated theses;
5. deduplicated shadow results;
6. process grade independent of outcome;
7. model-rule changes supported by repeated evidence;
8. ledger status and whether any authoritative write occurred.

Do not combine official bankroll performance with shadow P/L into one headline result.