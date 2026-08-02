# LoL Live Betting Context v0.3.19

This directory contains the portable active-rule summary and source index for LoL model v0.3.19.

Primary change from v0.3.18:

- prevent repeated positive-underdog kill-handicap leans from chasing progressively wider lines;
- preserve thesis history across changed lines;
- treat adverse moneyline and state movement as diagnostic evidence;
- stress-test a favorite fight plus objective conversion and the next forced sequence;
- require strict same-map repair before re-entry.

Canonical model source: `MODEL_RULES_LOL_V0.3.19.md`.

Live-match handoffs are updated only after the match when the user requests that workflow. During the match, analysis remains in chat.
