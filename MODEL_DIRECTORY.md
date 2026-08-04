# SlipTrace Model Directory

## Canonical entry points

- League of Legends: `models/lol/CURRENT_MODEL.md`
- Football: `models/football/CURRENT_MODEL.md`
- Shared-resource policy: `shared/README.md`

## Repository organization

```text
models/
  lol/
    CURRENT_MODEL.md
    rules/
    context/
    reviews/
    handoffs/
  football/
    CURRENT_MODEL.md
    rules/
    context/
    reviews/
    handoffs/
shared/
  README.md
ledger.json
```

The application and `ledger.json` remain at the repository root. Historical model files remain in their existing locations to preserve links and audit history.

## Rules for future changes

1. Write sport-specific files only inside that sport's namespace.
2. Update the namespace's `CURRENT_MODEL.md` with every active-version change.
3. Keep shared portfolio and ledger resources centralized.
4. Do not create duplicate ledgers or duplicate active-model pointers.
5. Root compatibility pointers may be updated, but new operational content belongs under `models/`.
