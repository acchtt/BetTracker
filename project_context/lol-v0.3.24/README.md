# LoL v0.3.24 Project Context

This directory is the portable context package for the active League of Legends live-betting model.

## Active version

- Model: LoL v0.3.24
- Activated: 2026-08-03 02:45 UTC+7
- Root rules: `MODEL_RULES_LOL_V0.3.24.md`
- Consolidated rules: `project_context/lol-v0.3.24/ACTIVE_RULES_CONSOLIDATED.md`
- Live calibration handbook: `project_context/lol-v0.3.24/LIVE_ANALYSIS_CALIBRATION_HANDBOOK.md`
- Probation status: `project_context/lol-v0.3.24/PROBATION_STATUS.md`
- Triggering review: `reviews/LOL_LEC_FIVE_MAP_MODEL_UPDATE_2026-08-03.md`

## Required new-chat load order

Before issuing a live verdict in a new chat, fetch:

1. root rules;
2. consolidated rules;
3. probation status;
4. live calibration handbook;
5. latest active-match handoff, when one exists.

The calibration handbook preserves the practical response template, correction discipline, screenshot-reading checklist, representative-thesis continuity, good and bad decision examples, and common failure modes that formal rules alone do not fully capture.

## Main changes

- Track representative theses rather than counting every live reprice as an independent observation.
- Separate moneyline confidence from kill-margin confidence.
- Require validated return-kill channels for late Kill Overs.
- Add `NO BET — CLEAN-CLOSE/RETURN-KILL SUPPRESSION VETO`.
- Tighten Kill Over projection margins in leader-controlled states.
- Restrict early or thin Kill Unders when unresolved map inventory remains large.
- Make all duration markets analysis-only through probation wager 20.
- Add a one-sequence close score after 20:00.
- Persist the accumulated live-analysis calibration across chats.

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

## LEC official subset

Placed official LEC wagers now include:

- SK +9.5 @1.854
- G2-SK Game 2 Over 49.5 @1.740
- MKOI-FNC Game 1 Over 37.5 @1.665
- FNC Game 2 moneyline @1.851
- KC-TH Game 2 Under 22.5 @1.894

LEC placed subset: 5-0, +1,001,000 VND / +1.001u. This subset does not authorize a stake increase.

## Operating rule

Every synchronized live state must display moneyline, kill handicap, kill total, and duration. Also state representative-thesis status, validated return-kill channels, clean-close veto status, one-sequence close score when relevant, official eligibility, and placement status.