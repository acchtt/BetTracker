# League of Legends Model Rules v0.3.15

**Status:** Active immediately
**Effective date:** 2026-08-01 23:05 UTC+7

This rule supersedes only the timing language in v0.3.14.

## Item snapshot threshold

Before 15:00 game time, item snapshots are optional. A missing item panel does not by itself block a live recommendation. Use the current synchronized state: clock, kills, gold, CS, levels, towers, dragons, Void Grubs, Herald, wave state, observed fights, recalls, positioning, and current market price.

Do not call raw gold a completed-item advantage unless the items are visible. Before 15:00, describe supported leads as economy or tempo advantages.

At or after 15:00, v0.3.14 applies in full. Item state must be assessed for both teams in Top / Jungle / Mid / ADC / Support order when decision-critical. Readable primary damage and relevant frontline or engage items are required for an official live recommendation. Unreadable decision-critical items require NO BET.

Before 15:00, do not delay the verdict solely to obtain or decode an item panel. All moneyline confirmation, kill-handicap conversion, kill-total, duration, objective-reading, pricing, expiry, and stake rules remain unchanged.

At the first new assessment at or after 15:00, apply the full item gate and reassess the current line independently.

The mandatory current-frame fingerprint remains:

clock | kills | gold | towers | dragons | Void Grubs | Herald/Baron/Elder/soul state | current odds

Probation remains 4 of 10, 1-3, -601,250 VND.