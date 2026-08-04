# SlipTrace Model Namespaces

## Canonical entry points

- League of Legends: `models/lol/CURRENT_MODEL.md`
- Football: `models/football/CURRENT_MODEL.md`
- Shared resources: `shared/README.md`
- Retained pre-namespace baseline: `models/LEGACY_MODEL_CHANGELOG.md`

## Clean-root policy

The repository root is reserved for the SlipTrace application, deployment/configuration files, and the authoritative `/ledger.json`.

Sport-specific model files belong only under:

- `models/lol/`
- `models/football/`

Cross-sport policies and ledger operating documentation belong under `shared/`.

Historical model files removed from the working tree remain available in Git history. They should not be restored to the root or loaded during normal analysis unless a historical audit specifically requires them.
