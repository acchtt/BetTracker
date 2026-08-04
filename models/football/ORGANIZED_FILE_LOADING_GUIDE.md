# Football Organized Repository Loading Guide

**Status:** Active immediately  
**Effective:** 2026-08-04 11:50 UTC+7  
**Repository:** `acchtt/SlipTrace`  
**Canonical namespace:** `models/football/`

## 1. Purpose

This guide explains how a football-analysis chat must navigate and load the reorganized SlipTrace repository.

The repository is now divided into:

- `models/football/` — football model files;
- `models/lol/` — League of Legends model files;
- `shared/` — documentation for genuinely shared resources;
- repository root — SlipTrace application files and the authoritative `/ledger.json`.

A football chat must load the football namespace only, plus explicitly required shared resources. It must not scan or load the LoL namespace.

## 2. Entry point

Always open this file first:

`models/football/CURRENT_MODEL.md`

This is the authoritative pointer for:

- the active football model version;
- the current load order;
- active operating values;
- the latest handoff location;
- the football write boundary.

Do not begin by searching the repository root for the newest football-looking filename. Do not reconstruct the load order from memory. The current-model pointer controls.

## 3. Canonical folder meanings

### `models/football/rules/`

Contains active and historical football rule versions.

Load only:

1. the rule files listed by `models/football/CURRENT_MODEL.md`;
2. earlier rule files explicitly retained or referenced by those active files.

Do not load every file in `rules/` automatically. A higher version number controls where rules conflict.

### `models/football/context/`

Contains current-version operating context, status, checklists, or portable chat context when present.

Load only the current context files identified by `CURRENT_MODEL.md` or an active rule. Ignore obsolete version folders unless needed for a historical audit.

### `models/football/handoffs/`

Contains match-specific state transferred between chats.

Load the latest relevant active handoff only when one exists. Do not combine multiple stale handoffs. A handoff never overrides explicit user corrections or newer synchronized match evidence.

### `models/football/reviews/`

Contains post-match reviews and model-development evidence.

Reviews are not part of normal startup unless `CURRENT_MODEL.md` or an active rule explicitly references one. Reviews explain why rules changed; they do not independently override active rules.

### `models/football/`

Contains the model pointer and operating guides. Load `CURRENT_MODEL.md` first, then any guide it lists.

### `models/lol/`

Do not load this directory in a football chat. LoL rules, handoffs, reviews, probation data, and procedures are unrelated model context.

### `shared/`

Load a shared file only when `CURRENT_MODEL.md`, an active football rule, or the current task requires it. Shared documentation must not replace football-specific rules.

### Repository root

The root contains the application and legacy compatibility files.

The only routinely relevant root file for football analysis is:

`/ledger.json`

Read it when official record, bankroll, exposure, placement, or settlement status matters. Do not duplicate it inside a model folder.

Legacy root football model files are read-only historical compatibility sources. Do not treat them as the active entry point when a canonical namespaced copy exists.

## 4. Current loading sequence

For the present Football v0.2.24 setup:

1. open `models/football/CURRENT_MODEL.md`;
2. open `models/football/ORGANIZED_FILE_LOADING_GUIDE.md`;
3. load `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.24.md`;
4. load `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.23.md`;
5. load `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.22.md`;
6. load earlier football rules only when the active chain explicitly preserves or references them;
7. load the latest relevant file in `models/football/handoffs/`, when available;
8. load `/ledger.json` only when official accounting or exposure is relevant.

When `CURRENT_MODEL.md` changes, follow its new sequence instead of this example.

## 5. Duplicate and legacy-file rule

During migration, the same document may exist at both a legacy root path and a canonical namespaced path.

Apply this rule:

- canonical `models/football/` copy = active source;
- legacy root copy = compatibility or audit source only;
- never load both copies as separate rules;
- never count duplicated text twice;
- never let an older root copy override the namespaced copy.

If the canonical copy is missing, report the missing path. Do not silently substitute a legacy copy for executable analysis.

Use:

`NO BET — MODEL CONTEXT INCOMPLETE`

until the canonical requirement is restored.

## 6. Active versus historical material

Classify files before using them:

- **Active pointer:** `CURRENT_MODEL.md`;
- **Active rules:** files listed by the pointer;
- **Retained dependencies:** earlier files explicitly preserved by active rules;
- **Active handoff:** latest relevant current-match handoff;
- **Shared authoritative record:** `/ledger.json`;
- **Historical material:** old versions, reviews, retired handoffs, legacy root copies.

Historical material may support audits and model development but must not be mixed into the live rule stack unless explicitly retained.

## 7. Minimal loading principle

Load the smallest complete set required for the task.

For a new general football chat:

- pointer;
- organized-file guide;
- active rule chain.

For a live match:

- general set above;
- latest active handoff;
- current synchronized user evidence.

For bankroll, official record, or settlement:

- relevant model files;
- `/ledger.json`.

For a historical review:

- active model for current interpretation;
- specifically relevant review and historical files.

Do not load unrelated app source files, LoL files, every historical football version, or every review.

## 8. Precedence after loading

Use this order when information conflicts:

1. explicit user correction in the current chat;
2. current synchronized match and market evidence;
3. newest active football rule or amendment;
4. earlier explicitly retained football rule;
5. active handoff;
6. historical reviews and legacy files.

For official accounting, `/ledger.json` is authoritative unless the user provides newer confirmed placement or settlement information that has not yet been written.

## 9. Write locations

Write new files according to purpose:

- rules and amendments: `models/football/rules/`;
- portable context and status: `models/football/context/`;
- match handoffs: `models/football/handoffs/`;
- post-match or model reviews: `models/football/reviews/`;
- football operating guides: `models/football/`;
- shared cross-sport documentation: `shared/`;
- authoritative wager records: `/ledger.json`, only after explicit approval.

Do not create new football model files at the repository root.

## 10. Required load acknowledgment

After loading, return a compact block containing:

- `FOOTBALL FILES LOADED`;
- active model version;
- canonical namespace;
- active files loaded;
- handoff loaded or `NO ACTIVE HANDOFF`;
- ledger loaded or `LEDGER NOT REQUIRED`;
- any missing canonical path.

Do not restate every rule unless requested.

## 11. Prompt for the football chat

> Load the organized football model from GitHub repository `acchtt/SlipTrace`. Open `models/football/CURRENT_MODEL.md` first and follow its exact canonical load order. Use `models/football/` as the active namespace, load only explicitly listed active rules and retained dependencies, load the latest relevant football handoff when present, and read `/ledger.json` only when official accounting or exposure is relevant. Do not load `models/lol/`, do not treat legacy root football files as active, and do not double-count duplicate migrated files. Return a compact `FOOTBALL FILES LOADED` status before analysis.
