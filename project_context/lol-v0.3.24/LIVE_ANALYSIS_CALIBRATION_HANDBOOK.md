# LoL v0.3.24 Live Analysis Calibration Handbook

**Status:** Active operating context  
**Purpose:** Preserve the practical reasoning, response format, correction discipline, and calibrated examples that are not fully captured by the model rules alone.

This handbook supplements `MODEL_RULES_LOL_V0.3.24.md` and `ACTIVE_RULES_CONSOLIDATED.md`. It does not weaken or replace either file. When a conflict exists, the stricter model rule controls.

## 1. Why this handbook exists

The same model version can produce different live-analysis quality when a new chat loads only the formal rules but lacks the accumulated examples and operating habits from prior matches.

This file preserves the tacit calibration that must carry into every new chat:

- verdict-first output;
- synchronized-state verification before reasoning;
- explicit correction of clocks, objectives, score direction, and roster labels;
- representative-thesis continuity across reprices;
- exact calculations for handicap and total lines;
- separation of winner confidence from margin confidence;
- comparison of all four market families before selecting an official wager;
- preference for `NO BET` over a marginal pass;
- concise explanations that still expose the first failed gate.

## 2. New-chat startup procedure

At the beginning of a new chat, fetch and load all of the following before issuing a live verdict:

1. `MODEL_RULES_LOL_V0.3.24.md`
2. `project_context/lol-v0.3.24/ACTIVE_RULES_CONSOLIDATED.md`
3. `project_context/lol-v0.3.24/PROBATION_STATUS.md`
4. `project_context/lol-v0.3.24/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
5. the latest active match handoff, when one exists

Then state only the active version and current probation status. Do not restate the full rules unless asked.

## 3. Evidence hierarchy

Use this order when sources disagree:

1. explicit user correction in the current chat;
2. synchronized live scoreboard supplied by the user;
3. betting-market screenshot timestamped near the scoreboard;
4. secondary telemetry panel;
5. earlier state or prior inference.

Examples:

- If the user says the game clock is 25:00 while telemetry displays 32:29, use 25:00 and explicitly mark the telemetry clock as stale.
- If the user corrects dragons to 1-1, withdraw any prior objective assumption immediately.
- If the player board and market board are not synchronized, return `NO BET — STATE DIRECTION UNVERIFIED` for state-sensitive markets.

Never preserve a prior assumption merely because the settlement later happens to win.

## 4. Screenshot-reading checklist

Before calculating a market, extract and verify:

- game and series identity;
- blue and red sides;
- game clock;
- kills and orientation;
- total gold and gold difference;
- towers;
- dragons, including soul point;
- Grubs or Herald where relevant;
- Baron, Elder, inhibitors, and base access;
- player K/D/A, CS, gold difference, and decision-critical items;
- exact market line, price, and whether the market is open, suspended, or delayed.

Do not guess unclear item icons after 15:00. If a decision-critical item cannot be verified, cap the market at `WATCH ONLY` or return `NO BET`.

## 5. Mandatory live-response structure

Use this order.

### A. Verdict first

Begin with one exact label and exact line:

- `OFFICIAL BET — ... — not placed`
- `LEAN — ... — not placed`
- `WATCH ONLY — ... — not placed`
- `NO BET — [first failed gate]`

When the market is locked or delayed, include that in the first line.

### B. Synchronized state

State clock, kills, gold, towers, dragons, Baron, inhibitors, and any user-supplied correction.

### C. State direction

When a prior snapshot exists, identify exactly what changed:

- who won intervening kills;
- gold movement;
- towers or objectives gained;
- item-function changes;
- whether the prior thesis improved, deteriorated, expired, or merely repriced.

### D. Thesis status

State:

- thesis ID;
- `new representative thesis`, `reprice update`, or `expired`;
- why a material transition did or did not occur.

### E. Market calculation

For a handicap, show:

- current margin;
- required final margin;
- additional future net kills required;
- plausible cascade consumption;
- stabilization or repair status.

For a total, show:

- current kills;
- additional kills needed to win or lose;
- conservative remaining fight budget;
- central projected range;
- safety buffer;
- validated return-kill channels;
- clean-close veto status.

### F. Four-family scan

Always assess:

1. moneyline;
2. kill handicap;
3. kill total;
4. duration.

If absent, state `MARKET UNAVAILABLE/LOCKED`.

### G. Placement status

End with one sentence confirming whether anything was placed and which probation wager remains.

## 6. Response style

The user prefers:

- verdict first;
- concise but complete analysis;
- exact calculations rather than generic confidence language;
- immediate correction when a score, clock, objective, roster, or champion is misread;
- no unnecessary background during a live map;
- one best eligible market, not several competing official suggestions;
- explicit distinction between `WATCH ONLY`, `LEAN`, and `OFFICIAL BET`;
- `NO BET` when the evidence is marginal.

Do not use ambiguous phrases such as `closest watch`, `secondary lean`, or `provisional watch`.

## 7. Representative-thesis continuity

A displayed price change alone is a reprice update. Do not create a new thesis for every bookmaker movement.

Open a new representative thesis after a material transition such as:

- net two-kill swing;
- approximately 1.5k gold movement;
- tower or inhibitor change;
- Baron, soul point, soul, or Elder change;
- decision-critical item breakpoint;
- verified change in return-kill functionality, base access, or wave control.

When a prior official recommendation becomes stale because the state changed, explicitly say it expired. A later line with the same direction is not automatically the same recommendation.

## 8. Market-family calibration

### Moneyline

Moneyline is strongest when the proposed side has independent structural confirmation, at least two functioning conversion channels, and superior protection or access.

Do not infer a large negative handicap from a valid moneyline thesis.

Calibration example: FNC versus MKOI Game 2.

- FNC moneyline was correct after FNC held kills, first tower, and a 2-0 dragon stack with functional Rumble/Orianna/Xayah-style multi-channel protection and an impaired opponent carry.
- FNC -12.5 was too aggressive despite the correct winner thesis.

Lesson: winner confidence and margin confidence are separate.

### Positive kill handicap

Wide cushions have been more reliable than tight cushions.

Always calculate how many additional future net kills the favorite must add to defeat the line. Two kills of extra cushion are material.

Do not transfer a +8.5 or +9.5 thesis to +5.5 or +6.5 without a fresh calculation.

When the line widens after deterioration, apply the anti-line-chasing veto unless the state has genuinely repaired.

### Negative kill handicap

Require evidence that specifically creates future net-kill separation:

- structural leverage;
- repeated clean conversion;
- impaired enemy return-kill access;
- near-terminal objective or base pressure.

Five or more additional future net kills is normally at most `LEAN`.

### Kill Over

Nominal damage is not enough. The trailing side needs executable return-kill channels with damage plus delivery, engage, peel, frontline, access, or protection.

A late Over must be rejected when the leader can close cleanly and the trailing side cannot reliably trade kills.

Calibration example: MKOI versus FNC Game 3.

- Over 36.5 was promoted too far because unresolved objectives were treated as automatic future fights.
- MKOI had a one-sided close branch while FNC lacked reliable return-kill delivery.
- Correct treatment after the structural transition: `NO BET — CLEAN-CLOSE/RETURN-KILL SUPPRESSION VETO`.

### Kill Under

Do not issue an early Under merely because the current pace is low. Large unresolved map inventory can create several later fights.

A strong Under appears when:

- the leader has a credible controlled-close route;
- the trailing side has no more than one validated return-kill channel;
- the line has meaningful headroom over the conservative kill budget;
- the clean-close veto blocks the opposite Over.

Calibration example: KC versus Team Heretics Game 2.

At the accepted 25:00 state:

- KC led 8-3, approximately +5.3k gold, 3-0 towers, and 3-1 dragons;
- KC had a 5/5 one-sequence close score;
- TH had only one clearly validated return-kill channel;
- Under 22.5 was recommended and placed at an improved execution price of 1.894;
- wager 11 won for +223,500 VND / +0.2235u.

Lesson: the strongest Under evidence came from return-kill suppression and a compressed close path, not raw low pace alone.

### Duration

Duration remains analysis-only through wager 20.

Do not confuse unresolved towers with guaranteed time extension. At 20:00+, apply the one-sequence close score and explicitly test whether the leader can move from objective to inhibitor or Nexus before another full neutral cycle.

## 9. State-correction protocol

When the user corrects a fact:

1. acknowledge the corrected value;
2. replace the earlier value in the active state;
3. identify which recommendation or rationale changes;
4. expire any recommendation that depended on the wrong value;
5. do not count the corrected and uncorrected versions as separate theses unless a real state transition occurred.

Examples:

- Clock correction: use the user-confirmed clock for duration and item-timing analysis.
- Dragon correction: recalculate soul-point pressure and mandatory contest inventory.
- Kill-direction correction: invalidate any handicap rationale based on the reversed score.
- Champion or roster correction: recalculate draft, scaling, engage, and item-function assumptions.

## 10. Official-promotion checklist

Before `OFFICIAL BET`, verify all of the following:

- exact line and odds are visible;
- odds are at least 1.60;
- state is synchronized;
- state direction is verified;
- item-critical information is known after 15:00;
- the market independently passes its family gate;
- no active veto applies;
- the recommendation is the best safety-adjusted eligible market;
- no correlated same-map exposure exists;
- proposed stake is 0.25u;
- placement is still unconfirmed.

After the user confirms placement, record the exact execution odds from the bet slip rather than the recommendation price.

## 11. Settlement and review procedure

After settlement:

- grade the placed official wager first;
- calculate exact net profit and gross return;
- update probation progress, record, and net result;
- grade unplaced official verdicts, representative leans, and WATCH ONLY candidates separately;
- do not combine correlated snapshots into the official win rate;
- record process errors even when the bet happened to win;
- record execution quality separately from recommendation quality.

## 12. Common failure modes to prevent

1. **Reading the score orientation backward.** Verify team labels before reasoning.
2. **Using stale telemetry time.** User-confirmed clock overrides stale panels.
3. **Treating every reprice as a new model trial.** Use representative theses.
4. **Promoting a market because the price improved.** Price is not state evidence.
5. **Transferring winner confidence to margin confidence.** Recalculate the handicap independently.
6. **Counting farmed carries as return-kill channels without delivery or protection.** Require executable function.
7. **Assuming every remaining objective creates a two-sided fight.** Test the clean-close branch.
8. **Issuing early Unders with large unresolved inventory.** Require line-specific headroom.
9. **Continuing a recommendation after a user correction invalidates its rationale.** Expire and reassess.
10. **Offering multiple correlated official bets.** Select one best eligible market.

## 13. Compact handoff block for a new chat

Use this block when moving chats:

> Continue the LoL live-betting project from GitHub repository `acchtt/SlipTrace`. Fetch `MODEL_RULES_LOL_V0.3.24.md`, `project_context/lol-v0.3.24/ACTIVE_RULES_CONSOLIDATED.md`, `project_context/lol-v0.3.24/PROBATION_STATUS.md`, and `project_context/lol-v0.3.24/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`. Use verdict-first output, exact taxonomy, synchronized-state verification, representative-thesis tracking, four-family market scans, and explicit placement confirmation. Duration is analysis-only through wager 20.

## 14. Current operating status

- Active model: LoL v0.3.24
- Probation: 11/20 completed
- Official record: 7-4
- Net: +335,750 VND / +0.33575u
- Wagers 12-20 remain
- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Duration markets official-ineligible through wager 20

### Latest official wager

- Wager 11: KC vs Team Heretics Game 2 Under 22.5 kills @1.894
- Stake: 250,000 VND / 0.25u
- Result: won
- Net: +223,500 VND / +0.2235u

This handbook should be updated after major process corrections, model reviews, or user-identified quality differences between chats.