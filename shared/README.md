# Shared SlipTrace Resources

This namespace documents resources shared across all betting models.

## Authoritative shared resources

- `/ledger.json` — canonical feed for ChatGPT-confirmed wagers and settlements.
- SlipTrace application files at the repository root — portfolio reporting, bankroll, exposure, synchronization, and GitHub Pages deployment.
- Shared stake or portfolio policies that explicitly apply across sports.

## Important constraint

Do not copy `ledger.json` into a model directory or into `shared/`. There must be only one authoritative ledger. The root path is preserved because the current application reads and deploys it from there.

## Model boundaries

- LoL rules and records: `models/lol/`
- Football rules and records: `models/football/`

A model may reference shared resources, but it must not redefine them inside its own namespace.
