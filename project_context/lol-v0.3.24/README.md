# LoL v0.3.24 Project Context

This directory is the portable context package for the active League of Legends live-betting model.

## Active version

- Model: LoL v0.3.24
- Activated: 2026-08-03 02:45 UTC+7
- Root rules: `MODEL_RULES_LOL_V0.3.24.md`
- Consolidated rules: `project_context/lol-v0.3.24/ACTIVE_RULES_CONSOLIDATED.md`
- Probation status: `project_context/lol-v0.3.24/PROBATION_STATUS.md`
- Triggering review: `reviews/LOL_LEC_FIVE_MAP_MODEL_UPDATE_2026-08-03.md`

## Main changes

- Track representative theses rather than counting every live reprice as an independent observation.
- Separate moneyline confidence from kill-margin confidence.
- Require validated return-kill channels for late Kill Overs.
- Add `NO BET — CLEAN-CLOSE/RETURN-KILL SUPPRESSION VETO`.
- Tighten Kill Over projection margins in leader-controlled states.
- Restrict early or thin Kill Unders when unresolved map inventory remains large.
- Make all duration markets analysis-only through probation wager 20.
- Add a one-sequence close score after 20:00.

## Current probation

- 10/20 completed
- Official record: 6-4
- Net: +112,250 VND / +0.11225u
- Wagers 11-20 remain
- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Duration markets cannot be official through wager 20

## LEC subset

The reviewed five-map LEC sample produced four placed official wins:

- SK +9.5 @1.854
- G2-SK Game 2 Over 49.5 @1.740
- MKOI-FNC Game 1 Over 37.5 @1.665
- FNC Game 2 moneyline @1.851

LEC placed subset: 4-0, +777,500 VND / +0.7775u. This subset does not authorize a stake increase.

## Operating rule

Every synchronized live state must display moneyline, kill handicap, kill total, and duration. Also state representative-thesis status, validated return-kill channels, clean-close veto status, and one-sequence close score when relevant.