# LoL v0.3.25 Project Context

This directory is the portable context package for the active League of Legends live-betting model.

## Active version

- Model: LoL v0.3.25
- Activated: 2026-08-04 02:36 UTC+7
- Root rules: `MODEL_RULES_LOL_V0.3.25.md`
- Consolidated rules: `project_context/lol-v0.3.25/ACTIVE_RULES_CONSOLIDATED.md`
- Calibration handbook: `project_context/lol-v0.3.25/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
- Probation status: `project_context/lol-v0.3.25/PROBATION_STATUS.md`
- Triggering review: `reviews/LOL_KC_TH_G2_DURATION_MODEL_UPDATE_2026-08-04.md`

## Required new-chat load order

Before issuing a live verdict:

1. root rules;
2. consolidated rules;
3. probation status;
4. calibration handbook;
5. latest active-match handoff, when one exists.

## Main v0.3.25 change

Kill suppression and duration compression are now modeled separately.

- A Kill Under can qualify even when Duration Under does not.
- One-sequence close scores above 3 require verified terminal access.
- Soul point, Grubs, outer-tower leads, large gold leads, and impaired enemy protection do not establish terminal access alone.
- Methodical control can reduce future kills while adding two to four minutes through resets, wave setup, vision control, and objective waiting.
- Every Duration Under analysis after 20:00 must state terminal access, exact finish route, resets, neutral-cycle requirements, structure depth, wave state, and finish ranges.

## Current probation

- 11/20 completed
- Official record: 7-4
- Net: +335,750 VND / +0.33575u
- Wagers 12-20 remain
- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Duration markets cannot be official through wager 20

## Latest calibration

KC defeated Team Heretics 16-5 in 34:29.

The placed Under 22.5 kills @1.894 won at 21 total kills. Duration Under 30 was incorrect because KC lacked Baron, inhibitor exposure, base access, and a live death-timer finish window. The corrected close score was capped at 3/5 and the methodical-control time tax should have been active.

## Operating rule

Every synchronized state must assess moneyline, kill handicap, kill total, and duration. After 20:00, also state terminal-access status, capped one-sequence score, methodical-control tax, exact duration route, and separate conclusions for kill suppression and time compression.
