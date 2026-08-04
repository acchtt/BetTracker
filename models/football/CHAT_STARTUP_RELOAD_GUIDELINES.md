# Football Chat Startup and Reload Guidelines

**Status:** Active immediately  
**Effective:** 2026-08-04 11:45 UTC+7  
**Canonical namespace:** `models/football/`

## 1. Purpose

These guidelines keep every football-analysis chat synchronized with the active model after repository reorganizations, model updates, procedure changes, and handoff changes.

The chat must use the canonical `models/football/` namespace. Legacy root football files are historical compatibility sources and must not be treated as the active entry point.

## 2. When a reload is required

Reload the football model before the next recommendation when any of the following occurs:

1. the chat is new;
2. the chat has not yet loaded the `models/football/` namespace after the repository reorganization;
3. `models/football/CURRENT_MODEL.md` changes;
4. an active football rule, procedure, context file, review-derived amendment, or handoff is added or changed;
5. the active model version changes;
6. the current chat refers to missing, moved, or legacy root paths;
7. the user explicitly requests a reload or verification.

A reload is not required for every message. After a successful reload, continue using the loaded model until one of the triggers above occurs.

## 3. Required reload sequence

Always begin with:

1. `models/football/CURRENT_MODEL.md`

Then follow the exact load order stated in that file. At the current version, load:

2. `models/football/CHAT_STARTUP_RELOAD_GUIDELINES.md`
3. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.24.md`
4. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.23.md`
5. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.22.md`
6. earlier active football procedures or rules only where the current files explicitly retain them;
7. the latest file in `models/football/handoffs/`, when available;
8. `/ledger.json` when official record, bankroll, exposure, placement, or settlement status is needed.

Do not assume a remembered load order when `CURRENT_MODEL.md` is available. The pointer controls.

## 4. Rule precedence

Apply precedence in this order:

1. explicit user correction in the current chat;
2. current synchronized match and market evidence;
3. the newest active football rule or amendment;
4. earlier retained football rules and procedures;
5. legacy root files and historical reviews.

When rules conflict, the newer active rule controls. When a newer file says earlier controls remain unchanged, retain those earlier controls only where they do not conflict.

Historical review outcomes explain why a rule exists but do not override the active model.

## 5. State preservation during reload

A model reload refreshes rules and paths. It does not automatically erase reliable current-match information.

Preserve:

- explicit user-confirmed score, minute, cards, substitutions, injuries, weather, pitch, line, and odds;
- confirmed wager placement and exact execution details;
- the latest synchronized match state when it remains current;
- open thesis history where no material match-state change has occurred.

Expire or reassess:

- recommendations based on superseded rules;
- prices or lines that are no longer executable;
- conclusions tied to legacy paths or incomplete model context;
- any thesis invalidated by a material match-state change.

## 6. Ledger handling

`/ledger.json` remains the single authoritative betting record.

- Read it when official P/L, placement, settlement, bankroll, or portfolio exposure is relevant.
- Do not duplicate it inside `models/football/` or `shared/`.
- Do not write to it unless the user explicitly approves the ledger update.
- A recommendation becomes official only after confirmed placement.
- An unplaced recommendation must not change official P/L or record.

## 7. Required reload acknowledgment

After a successful reload, respond with a compact status block containing:

- `FOOTBALL MODEL RELOADED`;
- active model version;
- canonical namespace;
- files loaded;
- current minimum odds and stake policy;
- latest handoff status, if any;
- ledger status: authoritative and write-held unless explicitly approved.

Do not restate the full rules unless asked.

## 8. Failure handling

If an active required file cannot be loaded, do not issue an executable recommendation.

Use:

`NO BET — MODEL CONTEXT INCOMPLETE`

State the missing path and continue only after the required context is restored. Do not silently substitute a legacy root file for a missing canonical file.

If the latest handoff is absent, state that no active match handoff is loaded and wait for a current pre-match or live state.

## 9. Operating boundary after reload

All new football rules, context, reviews, procedures, and handoffs must be written under `models/football/`.

Use the root repository only for genuinely shared application resources and `/ledger.json`. Do not write new football model files at the repository root.

## 10. Compact prompt for the football chat

> Reload the football betting model from GitHub repository `acchtt/SlipTrace`. Open `models/football/CURRENT_MODEL.md` first, then follow its exact load order, including `models/football/CHAT_STARTUP_RELOAD_GUIDELINES.md`, active rule files, retained procedures, the latest football handoff when available, and `/ledger.json` when record or exposure is relevant. Use canonical `models/football/` paths only. Preserve explicit user-confirmed match and placement information, apply newer active rules over older ones, and do not write to the ledger without explicit approval. Return a compact reload status before resuming analysis.
