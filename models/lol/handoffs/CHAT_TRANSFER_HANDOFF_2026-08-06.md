# LoL Cross-Chat Transfer Handoff — 2026-08-06

**Prepared:** 2026-08-06 22:38 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.34**  
**Canonical namespace:** `models/lol/`  
**Purpose:** preserve all transferable operating logic, decisions, evidence, calibration findings, and current state for continuation in a new chat.

## 1. Required load order

1. `models/lol/CURRENT_MODEL.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.34.md`
3. `models/lol/rules/MODEL_RULES_LOL_V0.3.33.md`
4. `models/lol/rules/MODEL_RULES_LOL_V0.3.32.md`
5. `models/lol/context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
6. `models/lol/context/lol-v0.3.25/PROBATION_STATUS.md`
7. `models/lol/context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
8. `models/lol/procedures/LOL_ITEM_VERIFICATION_SUSPENSION_2026-08-05.md`
9. `models/lol/procedures/LOL_LIVE_RESPONSE_FAST_PATH_2026-08-05.md`
10. `models/lol/procedures/LOL_BETTING_PROCEDURE.md`
11. both procedure addenda and the scoreboard-reading protocol
12. this handoff

## 2. Current operating state

- Eight-map shadow circuit breaker: **5/8 complete and reviewed**.
- Next complete map is **shadow map 6/8**.
- Official LoL betting remains paused.
- Official recommendations do not resume automatically after map 8; explicit user authorization is required.
- Actual LoL exposure: **0u**.
- Default logged shadow stake: **simulated 0.25u**.
- No shadow result changes `ledger.json`, official P/L, or probation.
- Item verification remains suspended until the user explicitly restores it.
- Unknown items are neutral and must never be guessed.

## 3. Official probation remains unchanged

- Completed: **13/20**
- Record: **7-6**
- Net: **-0.16425u / -164,250 VND**
- Next official wager number after restoration: **14**
- Standard stake: **0.25u = 250,000 VND**
- Maximum official exposure after restoration: **0.25u per map**
- Minimum odds: **1.60**
- Duration markets remain official-ineligible through wager 20.

## 4. Shadow circuit-breaker accounting

### Map 1 — T1 vs Dplus KIA Game 1

- Final: T1 20-4 DK, 28:24
- Under 30.5 kills @1.827 — win, +0.20675u
- Over 29 minutes @1.856 — loss, -0.25u
- Map record: 1-1
- Map net: **-0.04325u**

### Map 2 — T1 vs Dplus KIA Game 2

- Final: T1 17-7 DK, 36:57
- Under 31.5 kills @1.811 — win, +0.20275u
- Over 34 minutes @1.863 — win, +0.21575u
- Map record: 2-0
- Map net: **+0.41850u**

### Map 3 — NIP vs IG Game 3

- Final: NIP won; final kills NIP 16-21 IG
- Under 27.5 kills @2.066 — loss, -0.25u
- Map record: 0-1
- Map net: **-0.25000u**
- Main error: late objective-density kill inventory was understated; the Under thesis should have been invalidated earlier.

### Map 4 — WE vs AL Game 1

- Draft: AL blue Olaf / Naafiri / Ahri / Ziggs / Shen; WE red Mundo / Pantheon / Ryze / Jhin / Neeko.
- Under 31 minutes @2.018 — loss, -0.25u.
- Entry was at or near 0:00, before AL secured three Grubs.
- The Grubs were later evidence and cannot be cited as entry rationale.
- Main error: theoretical AL acceleration was overweighted and WE stall tools were underweighted.
- The map is accepted as complete for the circuit-breaker because the series progressed to Game 2, but exact final clock, winner, and final scoreboard were not captured in chat. Do not invent them.
- Map record: 0-1
- Map net: **-0.25000u**

### Map 5 — WE vs AL Game 2

Confirmed draft:

- WE blue: Renekton / Nidalee / Corki / Varus / Nautilus
- AL red: Gnar / Jarvan IV / Sylas / Xerath / Camille

Positions:

1. Over 32 minutes @1.868, entered 7:45, simulated 0.25u — **loss, -0.25u**.
2. WE +14.5 kills @1.966, entered 15:43, simulated 0.25u — **win, +0.24150u**.

Final:

- WE won at **31:02**.
- Final kills: **WE 16-26 AL**.
- Final displayed gold: AL about +1.8k.
- Towers: 6-6.
- Dragons: WE 2-3 AL.
- Barons: WE 1-0 AL.
- Inhibitors: 1-1.
- Map record: 1-1
- Map net: **-0.00850u**

### Cumulative shadow performance after map 5

- Market record: **4-4**
- Simulated net: **-0.13325u / -133,250 VND**
- Actual exposure and actual P/L: **0u / 0 VND**

## 5. WE vs AL Game 2 evidence timeline

### Pregame / 0:00

- No lean.
- WE ML watch trigger was 2.30+ if WE were even or ahead around 8-12 minutes.
- Duration required live confirmation; no draft-only duration position was allowed.

### 7:45 — Over 32 entry

- Kills: 3-3
- Gold: WE +283
- Towers: 0-0
- Dragons: WE 1-0 AL
- Grubs: WE 3-0 AL
- Entry: Over 32 @1.868, shadow 0.25u.

### 15:43 — handicap entry

- Kills: WE 4-10 AL
- Gold: AL +2.3k
- Towers: 0-0
- Dragons: 1-1
- Entry: WE +14.5 kills @1.966, shadow 0.25u.

### 19:56 — major contradiction

- Kills: WE 5-16 AL
- Gold: AL +6.5k
- Towers: WE 1-3 AL
- Dragons: WE 1-2 AL
- Barons: 0-0
- The Over thesis was only marked degraded, but should have been invalidated.
- The WE +14.5 thesis was marked invalidated, but this was too severe; it should have been severely degraded because AL still lacked Baron/base conversion and WE retained a comeback/trading route.
- WE +19.5 was correctly rejected as a correlated widened re-entry.

### 30:38 — live, not final

- Kills: WE 15-24 AL
- Gold: AL +1.6k
- Towers: WE 3-6 AL
- Dragons: WE 2-3 AL
- Barons: WE 1-0 AL
- Inhibitors: WE 0-1 AL
- This screenshot was incorrectly settled as final at first. It still showed `Live` and therefore was only a checkpoint.

### 31:02 — confirmed final

- WE won despite trailing 16-26 in kills and about 1.8k gold.
- Over 32 lost by 58 seconds.
- WE +14.5 won; final kill margin was 10.
- AL had led by +6.5k at 19:56 before conceding Baron and losing.

## 6. What went wrong on map 5

### Duration entry error

Zero towers at 7:45 was treated as meaningful stall evidence. It was not. Six kills had already occurred, and both drafts contained multiple initiation and pick tools. Ordinary early towerlessness cannot carry a duration Over thesis.

The 32:30-36:30 projection with a 34:20 point estimate was too narrow and too high. A more defensible range was approximately 29:30-34:30, producing no qualifying edge on Over 32.

### Anchoring error at 15:43

Fourteen total kills and an AL +2.3k lead mattered more than temporary 0-0 towers. The model anchored on `no structural conversion` and failed to price the possibility that one additional fight would create a rapid tower/objective cascade.

### Invalidation error at 19:56

AL's +6.5k gold lead, 11-kill lead, and two-tower advantage before 20 minutes created substantial sub-32 probability even without Baron. The correct wording was:

`Position remains recorded, but the Over 32 thesis is invalidated — no fresh Over recommendation.`

### Comeback-shape error

WE's Corki-Varus poke and comeback capacity were treated as duration-positive. Comeback capacity actually widens the duration distribution. A comeback may stall the game, or it may produce one decisive fight, Baron, and a rapid reverse finish. The second path occurred.

### Handicap-state error

WE +14.5 was a defensible entry at 15:43 and ultimately won. At 19:56, however, cushion-only logic caused an excessive invalidation. A positive kill handicap should not be fully invalidated solely because the remaining margin cushion is small. Structural conversion, Baron control, base access, team closing reliability, and the underdog's remaining fight/trade tools must also be considered.

### Settlement-control error

A screenshot labeled by the user as final was initially settled even though the interface still visibly showed `Live`. Final settlement requires at least one of:

- a visible victory/result indicator;
- an updated series score or postgame state;
- explicit user confirmation of winner plus exact final clock and score.

A live-labelled screenshot is always provisional.

## 7. Mandatory operating corrections for maps 6-8

1. No duration Over before 10:00 unless at least two genuine stall signals exist beyond ordinary towerlessness.
2. Six or more total kills by 8:00 activates a wider fast-ending branch.
3. Fourteen or more total kills by 16:00 prevents `0-0 towers` from being classified as confirming duration evidence.
4. Around 20 minutes, a leader with at least +5k gold and a two-tower advantage invalidates short-line duration Overs even without Baron, unless exceptional counterevidence exists.
5. Comeback tools widen the duration distribution; they do not automatically increase expected duration.
6. Positive kill-handicap invalidation requires both a small remaining cushion and credible structural/Baron/base conversion control.
7. Team closing reliability is a soft prior only. AL's Game 2 collapse should reduce confidence in clean AL conversion, but every new map resets hard evidence.
8. Do not chase a failing position with a wider correlated line.
9. Keep recorded-position status separate from current thesis status.
10. A screenshot still marked `Live` cannot be treated as final.
11. Verdict first; logging happens after the verdict.
12. `NO LEAN` is acceptable and should never be overridden merely to create a sample.

## 8. Retained model controls

- Kill Unders use v0.3.33 late-objective-density reserves and invalidation thresholds.
- Soul, Elder, Baron, inhibitor defense, and repeated objective contests increase remaining fight inventory.
- Failed Baron conversion may extend duration while increasing later kill inventory.
- Baron acquisition and Baron conversion are separate states.
- Grubs indicate potential structure acceleration only when supported by synchronized gold, tower, lane-pressure, and tempo evidence.
- Dragon soul materially changes moneyline probability.
- Total kills and duration require separate projections and separate verdicts.
- No correlated same-map official add-ons; shadow second picks require a materially distinct thesis and synchronized state.
- Every map resets hard evidence. Prior execution is only a soft prior.

## 9. Response format for the next chat

First line must be immediately actionable:

- `VERDICT — NO LEAN — shadow map 6/8; actual 0u.`
- `VERDICT — [selection] @[odds] — shadow 0.25u; actual 0u.`
- `VERDICT — position remains recorded, but thesis invalidated; no fresh entry.`

Then provide no more than approximately three short support lines unless the user requests a full review.

Do not delay the verdict for GitHub, Airtable, or Sheets logging.

## 10. Connected analytical stack

### GitHub — authoritative

- Repository: `acchtt/SlipTrace`
- Canonical rules, procedures, reviews, handoffs, and official ledger.
- All LoL writes go under `models/lol/`; shared policies go under `shared/`.

### Airtable — live structured tracker

- Base: `SlipTrace LoL Live Tracker`
- Base ID: `appcx61bVBssnwvVd`
- Tables: Maps, Snapshots, Positions.
- Map 5 and its checkpoints/positions are recorded and settled.

### Google Drive / Sheets — calibration dataset

- Folder: `SlipTrace LoL Model Lab`
- Folder ID: `1evL9ZdPRooxdWGL9XdG1JT8kQ2F71uYX`
- Workbook ID: `1xH470veJt0XL1af1Z_B8QvsPoak0jTxoCDI7oHk0cj8`
- Workbook purpose: Dashboard, Maps, Snapshots, Positions, Rule Changes.
- GitHub remains authoritative if any discrepancy appears.

## 11. Next action

Continue with **shadow map 6/8**. Confirm the current event, series score, game number, blue/red sides, full draft, and current prices before issuing a position.

Do not assume WE vs AL Game 3 or a 1-1 series score without user confirmation.

## 12. Paste into the new chat

Continue the League of Legends live-betting project from GitHub repository `acchtt/SlipTrace`.

Load `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-06.md` after the required files listed inside it.

Active model: LoL v0.3.34.

Circuit breaker: 5/8 complete; shadow map 6 is next. Shadow record 4-4, simulated net -0.13325u. Actual exposure 0u. Official betting remains paused and requires explicit restoration after map 8.

Use verdict-first live responses, keep recorded positions separate from current thesis state, do not settle screenshots still marked Live, and apply all map-5 duration/handicap corrections from the handoff.

Ask me for the current event, series score, game number, sides, complete draft, and odds.
