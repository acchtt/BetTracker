# League of Legends Betting Procedure

**Status:** Active operational procedure  
**Effective date:** 2026-07-29  
**Applies to:** League of Legends prematch, pre-draft, post-draft, and live betting analysis in the Betting model project  
**Related records:** `MODEL_CHANGELOG.md` and `ledger.json`

`ledger.json` remains the authoritative betting record. This procedure controls how LoL opportunities are researched, analyzed, recommended, confirmed, recorded, settled, and reviewed.

---

## 1. Fixed project rules

- 1 unit = 500,000 VND.
- Minimum accepted odds are 1.60 unless a market-specific rule requires a higher price.
- Standard evaluation stake is 0.25u = 125,000 VND.
- Maximum stake is normally 0.5u, but 0.25u remains the default while the model is being evaluated.
- Every recommendation must begin with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- An `OFFICIAL BET` recommendation is actionable but must still state `not placed` until the user confirms execution.
- A wager becomes an official placed bet only after the user confirms placement.
- Every changed line, odds move, roster update, side-selection change, completed draft, map score, or live game state must be reassessed independently.
- Prefer selectivity over action. `NO BET` is a valid and often preferred output.
- Do not describe an unavailable, rejected, missed, or unconfirmed wager as placed.
- For LoL, prioritize gold, towers, objectives, items, scaling, lane states, vision, and map control over kills alone.

---

## 2. Required source hierarchy

Use current sources and state uncertainty when reliable information is unavailable.

1. Official Riot, league, tournament, team, and player announcements.
2. Official schedules, rulebooks, patch notes, standings, rosters, and side-selection information.
3. Current Korean-language sources for LCK and LCK CL roster moves, interviews, substitutions, team news, and local context.
4. Current Chinese-language sources for translated interviews, meta discussion, roster news, and regional analysis when the information is attributable and cross-checked.
5. Reliable statistical databases for match, map, player, champion, side, objective, gold, and duration data.
6. Bookmaker screenshots or user-provided screens for the exact market, odds, map, score, and live state.
7. Secondary previews and odds aggregators only as supporting evidence.

Do not rely on stale roster pages, outdated player names, old patch data, unverified social posts, or generic team reputation as the main basis for a bet.

Chinese or Korean sources must not receive extra weight merely because they are local-language sources. Their information must still be current, attributable, and consistent with official records.

---

## 3. Match verification gate

Before pricing any market, verify:

- exact teams and team labels;
- competition, season, split, stage, and group;
- date and scheduled start time;
- best-of format;
- current series score when live;
- patch used for the match;
- online or offline environment when relevant;
- starting side or side-selection rules when available;
- qualification, playoff, elimination, seeding, or relegation implications;
- bookmaker and exact market settlement basis;
- whether the wager is series, map, kills, handicap, duration, tower, dragon, Baron, or another prop market.

For academy leagues, also verify whether the team name refers to the current academy roster, challengers roster, global academy roster, or another development squad.

When any material item cannot be confirmed, apply an uncertainty penalty or return `NO BET`.

---

## 4. Tournament importance and schedule context

Competition importance must be assessed before producing fair odds.

Evaluate:

- standings and current qualification position;
- direct playoff, play-in, seeding, or elimination implications;
- whether a team benefits from a 2-0 rather than only a series win;
- recent and upcoming schedule congestion;
- travel, offline-event adaptation, and turnaround time;
- first-team call-ups or academy substitutions;
- whether the team is testing players or protecting a roster;
- whether one team has less incentive because its position is already secured.

Motivation cannot be treated as a simple positive adjustment. High urgency can improve focus, but it can also increase draft risk, early-game forcing, objective contests, and throw probability.

Translate tournament context into numerical changes to series win probability, 2-0 probability, map variance, and live comeback or throw rates.

Every recommendation must display:

- `Competition context`
- `Roster certainty`
- `Patch/meta context`
- `Draft/side state`
- `Market implication`

---

## 5. Roster confirmation gate

Before issuing a prematch or pre-draft actionable candidate, verify the expected five-player roster.

Assess:

- top, jungle, mid, bot, and support starters;
- substitutes and recent rotations;
- first-team call-ups or demotions;
- role swaps and emergency substitutions;
- recent games played together as the same five;
- player form on the current or closely related patch;
- shot-calling and jungle-support continuity;
- whether listed players are current rather than legacy roster entries.

For LCK CL and other academy leagues, roster uncertainty receives an additional penalty because substitutions, promotions, and development priorities can change quickly.

If a material roster position is uncertain:

- cap a prematch series opinion at `LEAN`;
- avoid map-specific or player-specific markets;
- wait for the official lineup or live lobby where possible.

After any roster announcement, reassess the full match and every affected line independently.

---

## 6. Patch and meta procedure

Before using recent data, confirm whether it came from the same patch or a sufficiently similar meta.

Assess:

- champion changes and system-item changes;
- objective, lane-swap, turret, bounty, and neutral-monster changes;
- priority champions by role;
- engage, poke, split-push, scaling, and early-game archetypes favored by the patch;
- blue-side and red-side draft advantages;
- flex-pick value and counterpick importance;
- whether a team’s recent strengths came from champions or systems that have changed;
- whether the current patch increases variance or rewards stable macro.

Do not transfer old-patch win rates directly into current projections without an uncertainty adjustment.

When a patch is new or the sample is small:

- widen fair-price ranges;
- reduce confidence in champion and side statistics;
- prefer post-draft or live markets over blind prematch positions;
- use `LEAN` or `NO BET` when the edge is not robust.

---

## 7. Team-strength decomposition

Use a decomposed team model rather than series record or KDA alone.

Assess:

- opponent-adjusted game and series strength;
- early-game gold differential;
- gold differential at 10, 15, and 20 minutes when available;
- lane-level CS and experience performance;
- first turret and turret differential;
- Void Grub, dragon, Herald, Baron, and Elder control;
- objective setup quality rather than objective count alone;
- vision control around upcoming objectives;
- gold conversion after gaining a lead;
- comeback rate when behind;
- throw rate when ahead;
- game duration distribution;
- side-specific performance;
- draft flexibility and champion-pool depth;
- damage distribution and carry concentration;
- engage, peel, frontline, wave-clear, and damage sufficiency;
- macro consistency and decision quality after 20 minutes.

Kills are supporting evidence. A kill lead without corresponding gold, towers, objectives, item advantages, or map control must not be treated as a strong game lead.

Recent record is supporting evidence, not a standalone model.

---

## 8. Player and lane matchup procedure

Analyze every role before the series and update after the draft.

### Top lane

Assess:

- blind-pick reliability;
- weak-side stability;
- carry threat;
- side-lane management;
- teleport timing;
- matchup-specific scaling and teamfight value.

### Jungle

Assess:

- pathing and early pressure;
- farm versus gank balance;
- objective setup and smite reliability;
- interaction with pushing lanes;
- champion-pool fit with the patch;
- coordination with support and mid.

### Mid lane

Assess:

- lane control and priority;
- roaming and objective access;
- wave-clear;
- carry versus facilitation role;
- scaling and side-lane safety;
- champion-pool flexibility.

### Bot lane

Assess:

- laning strength;
- push and plate pressure;
- scaling curve;
- damage reliability;
- positioning and survivability;
- whether the composition depends excessively on one bot carry.

### Support

Assess:

- engage and disengage quality;
- roaming and vision timing;
- lane protection;
- jungle coordination;
- champion-pool fit;
- shot-calling continuity.

The matchup conclusion must be translated into series, map, kill, objective, or duration probabilities. Do not list player names without changing the numerical or market conclusion when the matchup materially matters.

---

## 9. Side-selection procedure

Blue and red side must be treated as separate game states.

Assess:

- confirmed or likely Game 1 side;
- tournament side-selection rules;
- loser’s choice or other map-to-map selection procedures;
- team-specific blue and red performance on the current patch;
- first-pick power versus counterpick value;
- role most likely to receive counterpick;
- whether side selection increases draft stability or variance.

A series opinion must not be copied automatically into an individual-map bet when side selection changes.

After each completed map, update the next-map projection for:

- side selection;
- draft adaptation;
- exposed champion pools;
- bans likely to change;
- player confidence or tilt only when supported by observable evidence.

---

## 10. Draft checkpoint

Every map requires a new post-draft assessment.

Evaluate both compositions for:

- lane priority by role;
- early skirmish strength;
- jungle access and objective setup;
- engage reliability;
- disengage and peel;
- frontline durability;
- physical and magic damage balance;
- sustained damage and burst damage;
- range and siege;
- wave-clear;
- side-lane pressure;
- scaling at one, two, three, and four items;
- execution difficulty;
- comeback tools;
- Baron and dragon fighting;
- champion familiarity and player proficiency;
- interaction with the selected side.

Draft labels such as “better scaling” or “more engage” are insufficient by themselves. Explain whether the composition has enough damage, target access, frontline, wave control, and realistic execution paths.

A pre-draft opinion must be reassessed after the completed draft. Do not preserve the earlier recommendation automatically.

Official map bets should normally wait for the full draft unless the market is explicitly a series market and the edge remains robust across realistic draft outcomes.

---

## 11. Prematch and series market pricing

Price each series market independently:

- series moneyline;
- map handicap;
- correct series score;
- total maps;
- Game 1 moneyline when side and roster information are adequate.

For each candidate:

- estimate series win probability;
- estimate 2-0, 2-1, 1-2, and 0-2 branches for a best-of-three;
- adjust for roster certainty, patch uncertainty, side selection, and academy variance;
- state the fair-price range;
- state the displayed odds;
- state the uncertainty-adjusted edge;
- identify the minimum acceptable odds;
- compare protected and aggressive alternatives.

Do not treat a strong favorite moneyline as automatically supporting a -1.5 map handicap. The sweep probability must be modeled separately.

Do not treat a close series as automatically supporting Over 2.5 maps. Two volatile teams can still produce a 2-0 through snowballing or draft mismatch.

---

## 12. Map-specific market pricing

After the draft, independently price:

- map moneyline;
- kill handicap;
- total kills;
- first blood;
- first to a kill threshold;
- first turret;
- total towers;
- dragon, Herald, Baron, or objective markets;
- map duration;
- team-specific props when settlement is clear.

Do not transfer a map-moneyline opinion automatically into kill, duration, or objective markets.

Examples:

- A scaling favorite may have a strong map win probability but poor early-kill value.
- A composition with strong engage can win fights without covering a large kill handicap if the opponent trades objectives and avoids repeated combat.
- A split-push or siege composition can win with a low kill total.
- A losing team that must contest soul or Baron can create high late-kill variance even when its map win probability is low.

---

## 13. Live-map evidence hierarchy

For live LoL analysis, prioritize:

1. current gold difference and gold distribution by role;
2. towers, turret plates, and map access;
3. completed and upcoming neutral objectives;
4. item completions and recall timing;
5. lane states, wave position, and side-lane pressure;
6. summoner spells and ultimate availability;
7. vision control and setup around the next objective;
8. composition scaling and execution at the current item breakpoints;
9. shutdowns, objective bounties, and comeback mechanics;
10. player deaths, respawn timers, and immediate map consequences;
11. kills as context rather than the primary state variable.

A kill score can be misleading. Always ask:

- Which team owns the gold lead?
- Where is the gold concentrated?
- Which towers and objectives were converted?
- Which composition benefits from the current clock?
- Which team controls the next objective area?
- Are item breakpoints complete?
- Is the apparent lead stable or reversible?

A single early gold difference before meaningful objectives or item completions should be treated cautiously. Sub-three-minute or similarly tiny early leads are usually noise unless created by a major structural event.

---

## 14. Live game-state branching

For every live map, construct at least two realistic branches.

### Leading-team conversion branch

Assess whether the leading team can:

- maintain lane priority;
- secure vision first;
- force or threaten the next objective;
- use item timings;
- avoid overextending;
- convert towers and map control rather than only kills.

### Comeback or throw branch

Assess whether the trailing team has:

- superior scaling;
- shutdown access;
- objective bounties;
- strong engage or pick tools;
- wave-clear and stall;
- a realistic soul, Baron, or Elder contest;
- side-lane or teleport pressure;
- item breakpoints that narrow the gap.

Increase variance when:

- the next objective is mandatory for the trailing team;
- both compositions have reliable engage;
- vision is poor;
- one team depends on a single carry;
- the leading team has previously failed to convert similar states;
- the gold lead is concentrated on a low-impact role or fragile champion.

---

## 15. Kill-market restrictions

Kill markets require stricter discipline because kills are less stable than map outcomes.

Before recommending a kill handicap or total, assess:

- map win probability;
- expected game duration;
- both teams’ fight frequency;
- objective-contest incentives;
- composition engage and disengage;
- damage sufficiency;
- snowball potential;
- surrender or very fast-ending risk when relevant;
- whether the trailing team can collect kills while still losing the map;
- whether the favorite can win through macro with a small kill margin.

Do not use an early kill lead as a substitute for gold, objectives, items, or map control.

For live underdog kill handicaps:

- confirm that the underdog has realistic damage and target access;
- confirm that the favorite is likely to keep fighting rather than close cleanly through macro;
- account for the possibility of a late one-sided Baron or Elder fight;
- require a wider uncertainty buffer when the handicap is based on a very early game state.

Record kill-handicap performance separately from map-moneyline performance.

---

## 16. Duration and objective-market restrictions

### Duration markets

Assess:

- scaling and wave-clear;
- early snowball ability;
- Baron-taking speed;
- siege and base-breaking tools;
- likelihood of soul, Elder, or repeated Baron cycles;
- whether the underdog can stall without winning fights;
- whether the favorite historically closes efficiently from comparable leads.

A low-kill composition can still produce a short game through towers and macro. A high-kill composition can still produce a long game if neither side can siege.

### Objective markets

Assess setup and priority rather than historical objective count alone.

For dragons, Herald, Void Grubs, or Baron, price:

- lane priority;
- jungle pathing;
- vision timing;
- smite availability;
- teleport timing;
- composition strength in the objective pit;
- willingness to trade cross-map.

Do not infer objective control from kills alone.

---

## 17. Independent pricing and decision thresholds

Every market and changed line must be priced independently.

For each candidate:

- estimate the full outcome distribution;
- state the fair-price range;
- state displayed odds;
- state uncertainty sources;
- apply roster, patch, side, draft, and academy-volatility adjustments;
- identify minimum acceptable odds;
- compare nearby safer and more aggressive alternatives;
- reject the bet when the edge disappears after uncertainty adjustments.

Operating classification:

- `OFFICIAL BET`: clear uncertainty-adjusted edge, all required gates complete, and odds at or above the cutoff.
- `LEAN`: possible edge, but one or more important elements remain incomplete or the price is only marginal.
- `NO BET`: no robust edge, unclear settlement, insufficient roster or draft information, stale data, or a game state that is too unstable.

A series recommendation must not be upgraded solely because it later wins. A losing result does not automatically invalidate a sound process.

---

## 18. Recommendation format

Every recommendation must begin with exactly one classification.

### `OFFICIAL BET`

Before confirmation, include:

- exact event and game or series number;
- competition, stage, and patch;
- exact market and settlement basis;
- roster status;
- side and draft status;
- odds and minimum acceptable odds;
- recommended stake;
- fair-price range;
- concise model evidence;
- main risks;
- status: `not placed`.

For live bets, also include:

- game time;
- kill score;
- gold score and difference;
- towers;
- dragons, Grubs, Heralds, Barons, and other relevant objectives;
- major item completions;
- next objective and likely setup;
- why the line is mispriced despite the current map state.

After the user confirms placement, change the status to `official/open` and record the execution details.

### `LEAN`

Use when a possible edge exists but one or more of the following remains insufficient:

- roster certainty;
- patch sample;
- side selection;
- completed draft;
- source quality;
- edge size;
- market definition;
- live-state stability;
- price.

State the required price or information that would upgrade the lean.

### `NO BET`

Use when the edge is absent, too uncertain, below the required price, contradicted by the draft or map state, or not robust across realistic branches.

State the main rejection reason without forcing an alternative.

---

## 19. Execution and confirmation procedure

When the user sends a confirmed bet slip, verify:

- exact event;
- series or map number;
- exact market and line;
- odds;
- stake in VND and units;
- potential payout;
- slip ID;
- prematch, post-draft, or live timing;
- game time and map state for live bets;
- roster and draft used in the recommendation;
- whether execution met the recommended cutoff and stake.

Record deviations honestly:

- below-cutoff execution;
- stake above model recommendation;
- changed line;
- entry after the analyzed state changed;
- wrong map or series number;
- uncertain settlement basis;
- roster or draft change after recommendation.

A winning result does not validate a below-cutoff price, oversized stake, or stale recommendation.

---

## 20. Ledger procedure

After placement confirmation, record in `ledger.json`:

- stable `syncId`;
- event and competition;
- series or map number;
- exact market and odds;
- stake in VND;
- status;
- result;
- event date;
- market type;
- prematch, post-draft, or live timing;
- slip ID;
- roster status;
- side and draft summary;
- live game time and state when applicable;
- model fair price and minimum acceptable odds;
- potential payout;
- reasoning and risks;
- relevant tags.

Useful LoL tags include:

- `official`
- `model-generated`
- `roster-confirmed`
- `patch-confirmed`
- `side-confirmed`
- `draft-read`
- `prematch`
- `post-draft`
- `live-read`
- `series-moneyline`
- `map-moneyline`
- `map-handicap`
- `kill-handicap`
- `kill-total`
- `objective-market`
- `duration-market`
- `academy-volatility`
- `below-model-cutoff`
- `stake-above-model-cap`
- `model-review`

Do not modify settled status or profit/loss without a user-confirmed or otherwise verified result.

---

## 21. Settlement and review procedure

For every settled wager:

1. Confirm the official map or series result and bookmaker settlement.
2. Calculate payout and net profit/loss in VND and units.
3. Separate outcome quality from decision quality.
4. Review whether the price met the cutoff.
5. Review whether the stake followed the recommendation.
6. Review roster, patch, side, draft, and live-state assumptions.
7. Review whether gold, towers, objectives, items, and scaling were weighted correctly relative to kills.
8. Identify whether the result was normal variance, bad data, stale roster information, draft error, settlement misunderstanding, or model-process error.
9. Record honest lessons without rewriting the original reasoning.
10. Do not promote a new rule from one result alone.
11. Review performance separately by league, competition, market, prematch/post-draft/live timing, recommendation type, side, roster confirmation, and strategy tags.

For LCK CL and other academy competitions, separately track:

- roster-confirmed versus uncertain-roster bets;
- series versus map markets;
- pre-draft versus post-draft bets;
- kill markets versus map-result markets;
- games where the predicted draft or macro branch occurred versus games where it did not.

Use closing-line quality where available and compare estimated probabilities with actual outcomes over an adequate sample.

---

## 22. Ready-to-paste LoL chat starter

**Suggested chat title:** `LoL Betting Model — LCK, LCK CL & Esports`

Paste this as the first message in a new chat inside the Betting model project:

> This chat is only for League of Legends betting analysis and EdgeLog ledger work. Follow `LOL_BETTING_PROCEDURE.md` and `MODEL_CHANGELOG.md` before every recommendation. Begin every recommendation with OFFICIAL BET, LEAN, or NO BET. Verify the exact event, competition, stage, start time, best-of format, patch, standings implications, current roster, side-selection rules, bookmaker market, and settlement basis. Use official sources first, then current Korean and Chinese sources for roster news, interviews, substitutions, and local context, while rejecting stale roster pages. Before prematch recommendations, assess opponent-adjusted team strength, early gold, towers, objectives, conversion, comeback and throw rates, side performance, player and lane matchups, champion pools, and schedule importance. Reassess every map after the full draft for lane priority, engage, peel, frontline, damage balance, scaling, execution difficulty, side lanes, wave-clear, and objective control. For live bets, prioritize gold, towers, objectives, items, lane states, vision, scaling, and map control over kills alone. Price every changed line independently. Minimum odds are 1.60, the standard stake is 0.25u, and 0.5u is exceptional. An OFFICIAL BET recommendation is not placed until I confirm execution. After confirmation, record the exact event, series or map, market, odds, stake, status, payout, slip ID, roster, draft, live state, reasoning, and tags in EdgeLog `ledger.json`. Review every settled bet honestly, separating result from process.

---

## 23. Pre-recommendation checklist

Before sending any LoL recommendation, confirm that all applicable boxes are complete:

- [ ] Exact match, competition, stage, format, and start time verified
- [ ] Patch verified
- [ ] Standings and qualification importance assessed
- [ ] Current five-player roster confirmed or explicit uncertainty penalty applied
- [ ] Korean and Chinese source checks completed when relevant
- [ ] Recent data filtered or adjusted for patch changes
- [ ] Team strength decomposed beyond series record and KDA
- [ ] Early gold, towers, objectives, conversion, comeback, and throw rates assessed
- [ ] Player and lane matchups assessed
- [ ] Side selection verified or uncertainty applied
- [ ] Full draft reassessed for map-specific bets
- [ ] Damage, engage, peel, frontline, scaling, wave-clear, and execution assessed
- [ ] Live gold, towers, objectives, items, lane states, and vision assessed
- [ ] Kills treated as context rather than the primary state variable
- [ ] Each changed line priced independently
- [ ] Market settlement basis verified
- [ ] Fair price, cutoff, uncertainty, and risks stated
- [ ] Recommendation stake follows project limits
- [ ] Status clearly says placed or not placed
- [ ] Ledger update occurs only after confirmed execution
