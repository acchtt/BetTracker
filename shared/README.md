# Shared SlipTrace Resources

This namespace contains resources genuinely shared across betting models.

## Authoritative shared resources

- `/ledger.json` — canonical feed for confirmed wagers and settlements.
- `shared/STAKE_POLICY_V2.json` — shared unit and stake conversion policy where applicable.
- `shared/LEDGER_UPDATE_FAST_PATH.md` — controlled ledger-update operating procedure.
- SlipTrace application files at the repository root — portfolio reporting, bankroll, exposure, synchronization, and GitHub Pages deployment.

## Constraints

- There must be only one `ledger.json`; do not copy it into `shared/` or a model namespace.
- Do not write to `/ledger.json` without explicit approval.
- A recommendation becomes official only after confirmed placement.
- Sport-specific rules must not be redefined inside `shared/`.

## Model boundaries

- LoL: `models/lol/`
- Football: `models/football/`

The repository root is not a model-loading location after the physical cleanup.
