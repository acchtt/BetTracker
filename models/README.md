# Betting Model Namespaces

SlipTrace uses one repository with strict model boundaries.

## Canonical model entry points

- League of Legends: `models/lol/CURRENT_MODEL.md`
- Football: `models/football/CURRENT_MODEL.md`

## Ownership rules

- LoL-only files belong under `models/lol/`.
- Football-only files belong under `models/football/`.
- Cross-sport bankroll, ledger, application, and portfolio policy remain shared.
- New model updates must not write into another model's namespace.
- Legacy root files remain for compatibility but are not canonical for new work.

The repository remains a monorepo so the SlipTrace application and authoritative portfolio ledger can remain centralized without duplicated sources of truth.
