# LoL Model Changelog v0.3.15

**Effective:** 2026-08-01 23:05 UTC+7

- Replaced the first-meaningful-recall trigger with a fixed 15:00 game-time threshold.
- Before 15:00, item snapshots are optional and missing items do not independently block a recommendation.
- Before 15:00, visible items may still be used, but raw gold must be described as economy or tempo rather than confirmed item strength.
- At or after 15:00, v0.3.14 item inventory, concentration, damage-versus-durability, and unknown-item veto rules apply in full.
- Objective extraction, market gates, execution rules, and verdict-first latency rules are unchanged.
- Probation record and official P/L are unchanged.