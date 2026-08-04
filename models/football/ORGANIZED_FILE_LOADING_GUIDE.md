# Football Organized Repository Loading Guide

**Status:** Active immediately  
**Effective:** 2026-08-04 17:55 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Canonical namespace:** `models/football/`

## 1. Entry point

Always open:

`models/football/CURRENT_MODEL.md`

The pointer controls the active version and exact load order. Do not search the repository root for football-looking filenames and do not reconstruct the model from memory.

## 2. Repository map

```text
models/
  LEGACY_MODEL_CHANGELOG.md
  football/
    CURRENT_MODEL.md
    ORGANIZED_FILE_LOADING_GUIDE.md
    rules/
    procedures/
    context/
    handoffs/
    reviews/
  lol/
shared/
ledger.json
```

A football chat uses `models/football/`, the retained baseline in `models/LEGACY_MODEL_CHANGELOG.md`, explicitly required shared files, and `/ledger.json` when accounting is relevant. It must not load `models/lol/`.

## 3. Folder rules

### `models/football/rules/`

Contains the complete retained amendment chain. For Football v0.2.30, load v0.2.5 through v0.2.30 in ascending order. Newer versions control where they conflict; earlier rules remain active where later files preserve them.

Do not load only the highest-numbered file. The football model is cumulative.

### `models/football/procedures/`

Contains operational procedures. Load the main procedure and active addenda listed by `CURRENT_MODEL.md` before issuing a recommendation.

### `models/football/context/`

Contains current portable context or status files when present. Load only files identified by `CURRENT_MODEL.md` or an active rule.

### `models/football/handoffs/`

Load only the latest relevant active-match handoff. Do not merge stale handoffs. Explicit user corrections and newer synchronized evidence override a handoff.

### `models/football/reviews/`

Reviews are audit and development evidence. They are not part of normal startup unless an active rule or the current task specifically requires one.

### `models/LEGACY_MODEL_CHANGELOG.md`

Retains the pre-v0.2.5 model baseline referenced by early football amendments. Load its football baseline before the versioned amendment chain. Its historical LoL material does not belong in football analysis.

### `shared/`

Contains cross-sport policies and ledger operating documentation. Load a shared file only when the pointer, an active rule, or the task requires it.

### `/ledger.json`

This is the single authoritative betting record. Read it for official P/L, placement, settlement, bankroll, or portfolio exposure. Do not duplicate it and do not write to it without explicit approval.

### Repository root

The root is reserved for the SlipTrace application, deployment/configuration files, and `/ledger.json`. It is no longer a model-loading location.

## 4. Current exact sequence

1. `models/football/CURRENT_MODEL.md`
2. `models/football/ORGANIZED_FILE_LOADING_GUIDE.md`
3. `models/LEGACY_MODEL_CHANGELOG.md` — football baseline only
4. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE.md`
5. `models/football/procedures/FOOTBALL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`
6. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.5.md`
7. Continue sequentially through each version to `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.30.md`
8. Latest relevant `models/football/handoffs/` file, when present
9. `/ledger.json` only when accounting or exposure is relevant

## 5. Minimal loading by task

- General football analysis: pointer, guide, baseline, procedures, complete active rule chain.
- Live match: general set plus latest active handoff and current synchronized evidence.
- Settlement or bankroll: relevant model set plus `/ledger.json`.
- Historical review: active model plus only the specifically relevant review or historical evidence.

Do not load LoL files, application source, unrelated reviews, pending ledger payloads, or GitHub workflow files as model context.

## 6. Precedence

1. Explicit user correction in the current chat
2. Current synchronized match and market evidence
3. Newest active football rule
4. Earlier retained football rule or procedure
5. Active handoff
6. Review evidence and historical material

For official accounting, `/ledger.json` is authoritative unless the user supplies newer confirmed placement or settlement evidence not yet written.

## 7. Missing-file rule

If a required canonical file is missing, do not substitute a deleted root path or an unrelated historical copy. Use:

`NO BET — MODEL CONTEXT INCOMPLETE`

State the missing canonical path and resume only after it is restored.

## 8. Required acknowledgment

After loading, return:

- `FOOTBALL FILES LOADED`
- active version
- canonical namespace
- procedures and rule range loaded
- handoff status
- ledger loaded or `LEDGER NOT REQUIRED`
- any missing canonical path

## 9. Compact prompt

> Load the football model from `acchtt/SlipTrace`. Open `models/football/CURRENT_MODEL.md` first and follow its exact canonical load order. Load the retained baseline, football procedures, and the complete v0.2.5–v0.2.30 rule chain in ascending order. Use only `models/football/`, required shared files, and `/ledger.json` when accounting is relevant. Do not load `models/lol/` or search the repository root for model files. Return `FOOTBALL FILES LOADED` before analysis.
