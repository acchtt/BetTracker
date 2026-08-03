# LoL v0.3.25 Live Analysis Calibration Handbook

**Status:** Active operating context  
**Purpose:** Preserve the practical reasoning, response format, correction discipline, and calibrated examples required for consistent live analysis across chats.

This handbook supplements `MODEL_RULES_LOL_V0.3.25.md` and `ACTIVE_RULES_CONSOLIDATED.md`. The stricter rule controls if any conflict exists.

## 1. New-chat startup

Fetch before issuing a live verdict:

1. `MODEL_RULES_LOL_V0.3.25.md`
2. `project_context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
3. `project_context/lol-v0.3.25/PROBATION_STATUS.md`
4. `project_context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
5. the latest active-match handoff, when one exists

State only the active model and current probation status unless the user asks for the rules.

## 2. Evidence hierarchy

Use this order when sources disagree:

1. explicit user correction;
2. synchronized live scoreboard;
3. near-synchronized market screenshot;
4. secondary telemetry;
5. earlier state or inference.

A user-confirmed clock overrides stale telemetry. A corrected objective, score direction, champion, or roster value immediately replaces the earlier assumption. Expire any recommendation that depended on the wrong fact.

## 3. Screenshot checklist

Verify before calculating:

- match, game, and side identity;
- clock;
- kill orientation;
- gold and gold difference;
- towers;
- dragons and soul point;
- Grubs, Herald, Baron, Elder, inhibitors, and base access;
- K/D/A, CS, gold distribution, and decision-critical items;
- exact line, price, and open/locked/delayed status.

Do not guess critical items after 15:00.

## 4. Live-response order

1. Exact verdict and line first.
2. Synchronized state and corrections.
3. State direction since the prior snapshot.
4. Representative-thesis status.
5. Exact market calculation.
6. Moneyline, handicap, total, and duration scan.
7. Placement and probation status.

Prefer one best eligible market. Use `NO BET` for marginal passes.

## 5. Exact calculations

### Handicap

State:

- current margin;
- required final margin;
- additional future net kills required;
- cascade stress test;
- repair or stabilization status.

### Kill total

State:

- current kills;
- additional kills to win or lose;
- conservative remaining fight budget;
- central and outer ranges;
- safety buffer;
- validated leader conversion channels;
- validated trailing return-kill channels;
- clean-close veto status.

### Duration

After 20:00 state:

- verified clock;
- time remaining to line;
- `TERMINAL ACCESS: YES/NO`;
- capped one-sequence close score;
- exact route to Nexus;
- resets required;
- whether another full neutral cycle is required;
- structure and wave depth;
- methodical-control time tax;
- earliest, central, and extension finish ranges.

## 6. Representative-thesis continuity

Price changes alone are reprices. Open a new thesis only after a meaningful state transition such as a two-kill swing, about 1.5k gold movement, structure or major objective change, item breakpoint, or verified change in wave, base, protection, or return-kill function.

Do not count every displayed line as an independent trial.

## 7. Market calibration

### Moneyline versus margin

A correct winner thesis does not imply a large negative kill handicap. Recalculate future net-kill separation independently.

### Positive handicaps

Wide cushions are materially different from tight cushions. Two kills of extra width matter. Apply the line-chasing veto after adverse deterioration unless the state has genuinely repaired.

### Kill Over

The trailing side needs executable return-kill channels, not merely farmed damage. Reject late Overs when the leader can close cleanly and the trailer lacks access or protection.

### Kill Under

Strong late Unders come from line headroom plus suppressed return-kill capacity and a controlled-close route. Do not issue early Unders solely from low pace while large map inventory remains.

### Duration

Duration remains analysis-only through wager 20.

The central v0.3.25 lesson is:

**Kill suppression does not equal time compression.**

A leader may allow few return kills while still needing several resets, objective waits, wave alignments, inner towers, Baron, and inhibitor setup.

## 8. Terminal-access calibration

Use `TERMINAL ACCESS: YES` only with an explicit inhibitor-or-Nexus route, normally:

- active or freshly secured Baron with usable wave and healthy siege;
- inhibitor turret down or immediately exposed with controllable wave;
- base already breached;
- ace or at least three defenders dead with sufficient timers and wave;
- another equally explicit route requiring no full neutral cycle.

Do not treat soul point, Grubs, a large gold lead, outer towers, strong control, or an impaired enemy carry as terminal access by themselves.

Without terminal access, cap the one-sequence score at 3/5.

## 9. Methodical-control time tax

Activate the two-to-four-minute time tax when the leader suppresses kills through control, disengage, range, or waveclear but lacks terminal access and still needs setup through inner or inhibitor structures.

The live state—not champion names alone—must show resets, wave alignment, vision control, or objective waiting.

This is especially important for compositions that can dominate safely while converting slowly.

## 10. Calibration example: KC vs Team Heretics Game 2

At the corrected 25:00 state:

- KC led 8-3 kills, about +5.3k gold, 3-0 towers, and 3-1 dragons;
- Team Heretics had one clear return-kill channel;
- Under 22.5 was recommended and placed at 1.894;
- final was KC 16-5, 21 kills, 34:29.

Correct interpretation:

- Kill Under: valid and won.
- Duration Under 30: invalid.
- Terminal access: `NO` because KC lacked Baron, inhibitor exposure, base access, and a live death-timer finish window.
- One-sequence score: capped at 3/5, not 5/5.
- Methodical-control time tax: active.

The map demonstrates that a low-kill close can still take more than nine minutes.

## 11. Common failure modes

1. Reading score orientation backward.
2. Using stale telemetry time.
3. Treating reprices as separate trials.
4. Promoting because price improved.
5. Transferring winner confidence to margin confidence.
6. Counting nominal damage as executable return-kill function.
7. Assuming every remaining objective creates a two-sided fight.
8. Issuing early Unders without line-specific headroom.
9. Continuing after a user correction invalidates the rationale.
10. Offering multiple correlated official bets.
11. Treating kill suppression as proof of a fast finish.
12. Assigning a 4/5 or 5/5 close score without terminal access.

## 12. Official-promotion checklist

Before `OFFICIAL BET`, verify:

- exact line and odds;
- odds at least 1.60;
- synchronized state and verified direction;
- critical items known after 15:00;
- family-specific gate passed;
- no active veto;
- best safety-adjusted eligible market;
- no correlated same-map exposure;
- 0.25u stake;
- placement still unconfirmed.

Duration cannot be official through wager 20.

## 13. Settlement procedure

After settlement:

- grade the placed wager first;
- calculate exact net and gross return;
- update probation;
- grade unplaced official, representative leans, and watches separately;
- record process errors even when settlement wins;
- separate execution quality from recommendation quality.

## 14. Compact new-chat handoff

> Continue the LoL live-betting project from GitHub repository `acchtt/SlipTrace`. Fetch `MODEL_RULES_LOL_V0.3.25.md`, `project_context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`, `project_context/lol-v0.3.25/PROBATION_STATUS.md`, and `project_context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`. Use verdict-first output, exact taxonomy, synchronized-state verification, representative-thesis tracking, four-family scans, terminal-access gating, methodical-control time adjustment, and explicit placement confirmation. Duration is analysis-only through wager 20.

## 15. Current status

- Active model: LoL v0.3.25
- Probation: 11/20
- Record: 7-4
- Net: +335,750 VND / +0.33575u
- Wagers 12-20 remain
- Stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Duration official-ineligible through wager 20
