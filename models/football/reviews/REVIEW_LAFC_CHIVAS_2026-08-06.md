# Match Review — LAFC vs Chivas

Date: 2026-08-06  
Competition: Leagues Cup  
Regulation result: LAFC 1-1 Chivas  
Shootout result: LAFC won 5-4  
Ledger impact: none confirmed

## 1. Review scope

This review evaluates recommendation process rather than using the final score as proof of a betting edge.

The principal questions were:

- whether the model over-weighted xG and xGOT;
- whether Chivas territorial pressure justified switching from LAFC DNB to Chivas -0.25;
- whether the tournament format was incorporated early enough;
- whether one-event total markets were correctly rejected;
- whether HOLD gates prevented unsupported execution.

## 2. Positive process findings

- No wager was promoted to LEAN.
- The model correctly reset after the two first-half goals.
- The model required post-halftime evidence before acting.
- Chivas pressure was recognized across multiple intervals rather than from one isolated burst.
- Chivas -0.25 remained HOLD because the scoring route was not decisive and a level remaining segment would half-lose.
- Over 2.5 and Under 2.5 were both rejected as fragile one-event markets.
- Penalty-shootout goals were correctly excluded from ordinary regulation settlement.

## 3. Calibration errors

### 3.1 xG framing

The halftime wording emphasized that two goals came from only 0.35-0.53 xG. That risked treating the goals as statistical noise.

The correct emphasis was:

- both teams had independent scoring routes;
- LAFC led the big-chance count;
- Chivas had greater shot volume and territorial possession;
- the 1-1 state changed regulation incentives;
- the competition format preserved value in a tie.

xG and xGOT should have remained supporting diagnostics only.

### 3.2 Format verification arrived too late

The competition awarded material value to a regulation tie through a direct penalty shootout and points allocation. Therefore, “both teams want to win” was incomplete.

The correct decomposition was:

- regulation-win utility: high;
- regulation-draw utility: meaningful;
- shootout route: meaningful;
- margin utility: low;
- late risk tolerance: selective rather than unlimited.

This should have been established before interpreting late Chivas pressure.

### 3.3 Pressure versus urgency

Chivas sustained territorial pressure, box access and shot volume. That was enough to weaken LAFC DNB as the leading candidate, but not enough to prove Chivas would accept the transition risk required to win in regulation.

The side switch from LAFC DNB toward Chivas -0.25 therefore required stronger evidence than was available.

## 4. Market grading

### LAFC DNB

- Process: reasonable initial WATCH based on transition and high-value routes.
- Later status: reasonable to invalidate as the leading candidate after persistent Chivas control.
- Counterfactual settlement: push at 1-1.
- Lesson: invalidation did not require immediate reversal to Chivas.

### Chivas -0.25

- Process: correctly kept on HOLD.
- Counterfactual settlement: half-loss because regulation remained level.
- Lesson: pressure and large price were insufficient without verified regulation-goal urgency and repeatable finishing routes.

### Over 2.5

- Process: correctly rejected as a one-event binary wager.
- Counterfactual settlement: loss.
- Lesson: territorial pressure without decisive chance persistence is insufficient.

### Under 2.5

- Process: correctly rejected as too fragile while Chivas pressed.
- Counterfactual settlement: win.
- Lesson: a winning result does not mean the rejected position had sufficient ex-ante edge.

## 5. Model changes derived

The following changes were promoted into Football v0.2.34:

- mandatory competition-format verification before motivation-based promotion;
- separate regulation-win, regulation-draw, shootout and margin utility;
- dual-value tie classification;
- stronger pressure-to-urgency conversion gate;
- stronger side-switch gate in tied matches;
- further de-emphasis of xG and xGOT;
- explicit regulation-versus-shootout settlement discipline;
- stricter one-event market control in ties that retain tournament value.

## 6. Final process grade

- Final verdict quality: good — NO BET was correct procedurally.
- HOLD-gate quality: good — prevented a Chivas half-loss and Over loss.
- Candidate-direction quality: mixed — LAFC DNB weakening was valid, but Chivas pressure was initially interpreted too close to regulation-win urgency.
- Format handling: late and incomplete until corrected.
- xG/xGOT discipline: below required standard at halftime.
- Ledger impact: none confirmed; no write authorized.
