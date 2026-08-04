# Football Model Namespace

Canonical entry point: `models/football/CURRENT_MODEL.md`

## Structure

- `rules/` — cumulative football amendments v0.2.5 through the active version
- `procedures/` — operational betting procedures and active addenda
- `context/` — portable operating context and status files
- `handoffs/` — current match-state transfers between chats
- `reviews/` — audits and model-development evidence
- `ORGANIZED_FILE_LOADING_GUIDE.md` — repository navigation and loading rules

## Active version

Football v0.2.28. The model is cumulative: load the retained baseline and procedures, then apply v0.2.5 through v0.2.28 in ascending order.

## Boundaries

- New football files must stay inside `models/football/`.
- Root application files are not football model context.
- `models/lol/` must not be loaded by a football chat.
- `/ledger.json` remains the sole authoritative betting record and is written only after explicit approval.
