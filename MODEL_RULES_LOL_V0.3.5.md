# League of Legends Model Rules v0.3.5

**Status:** Active evaluation addendum  
**Effective date:** 2026-07-31  
**Applies to:** LoL prematch, post-draft, and live moneylines, kill handicaps, totals, duration, and objective markets  
**Read with:** `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.2.md`, `MODEL_RULES_LOL_V0.3.4.md`, the corresponding changelogs, and `ledger.json`

This addendum strengthens team-strength calibration, deciding-map macro analysis, live-trigger quality, positive kill-handicap selection, and execution discipline. It does not relax the 1.60 minimum odds, 0.25u evaluation cap, changed-line reassessment, or engage-to-damage conversion gate.

## 1. Mandatory team-strength preview before every actionable recommendation

Before every `OFFICIAL BET` or `LEAN`, explicitly assess the current team-strength prior. The internal assessment must cover:

- top, jungle, mid, bot, and support player quality and current role fit;
- lane pressure and stability;
- jungle-support coordination;
- objective setup and vision control;
- macro decision quality and side-lane management;
- lead conversion and comeback ability;
- champion proficiency for the completed draft;
- current-series evidence with the same five players.

Classify the gap as `material`, `moderate`, or `near-even`.

The visible recommendation must include a concise team-strength statement. Draft theory may modify the prior, but it must not erase a material player or coordination gap without concrete champion-proficiency evidence and an execution-compatible path.

## 2. Current-series macro update

After every completed map, update the next-map prior using more than the map winner.

Record:

- lane control and gold distribution;
- first objective setup and cross-map trades;
- tower conversion and map access;
- vision timing around dragon, Herald, Baron, and soul point;
- side-lane response and teleport coordination;
- lead conversion, failed closes, and comeback structure;
- whether the draft win condition was executed cleanly.

In a deciding map with unchanged lineups, observed current-series macro and coordination receive at least equal consideration to generic pre-series reputation. A single map win does not automatically reverse the strength prior, but repeated clean objective and map-control execution must materially update it.

## 3. Price-only live-trigger prohibition

A live price reaching a preset threshold is not, by itself, a betting trigger.

An `OFFICIAL BET` live moneyline requires at least one favorable structural confirmation beyond price movement, such as:

- lane priority or favorable gold distribution;
- first objective setup or superior vision timing;
- a relevant item breakpoint;
- opposing summoner-spell or ultimate disadvantage;
- demonstrated execution of the projected fight or macro path;
- evidence that the opponent's theoretical composition advantage is not converting.

A neutral score, equal gold, and no objectives do not count as positive confirmation.

When odds move against a team by at least 0.10 in a neutral state without an explained game event, treat the move as adverse market information. Reassess rather than automatically buying the larger price.

## 4. Deciding-map global and macro-control gate

Before a deciding-map moneyline, score both teams on:

1. global and semi-global pressure;
2. side-lane response and wave control;
3. objective arrival and first-move advantage;
4. vision and pick creation;
5. Baron and soul-point setup;
6. execution difficulty at the current player level.

Compositions built around coordinated global pressure, such as Nocturne, Shen, Ryze, Twisted Fate, Galio, or equivalent map-movement systems, receive a separate macro-control adjustment. Do not reduce them to ordinary teamfight compositions.

When the opponent has the clearer global-control system, a neutral pre-level-six or pre-first-objective state is normally insufficient to back the nominally stronger team. Wait for evidence that the global system is being denied or misexecuted.

## 5. Positive underdog kill-handicap structural veto

The v0.3.4 engage-to-damage conversion gate remains mandatory. In addition, apply a structural-state veto.

A live underdog positive kill handicap is normally `NO BET` when the favorite has both:

- a material gold advantage, approximately 1,500 or more after 12:00; and
- a two-tower or greater structural advantage,

unless all of the following are present:

- two observed successful kill trades or proportionate damage conversions;
- item parity or a near-term breakpoint on at least two credible damage roles;
- realistic target access and frontline kill speed;
- a forced upcoming contest that prevents the favorite from closing only through low-risk macro;
- no evidence of repeated one-sided fight chains.

A lead around 3,000 gold or more plus clear tower and objective control creates a stronger veto. Do not approve a positive handicap merely because the displayed number has become larger.

## 6. Pregame and post-draft positive handicap restriction

Against a materially stronger roster, a pregame or post-draft underdog positive kill handicap is capped at `LEAN` unless:

- the underdog passes every v0.3.4 damage-conversion check;
- at least two proven carry threats are on comfort or high-proficiency champions;
- the favorite lacks a clean frontline, disengage, or low-risk macro close path;
- the handicap has a clear margin buffer under both a normal loss and one lost late objective fight.

Engage access, crowd control, wave-clear, or a large plus number alone are insufficient.

## 7. Live conversion evidence requirement

For an `OFFICIAL BET` positive kill handicap, require at least two independent observations of practical conversion when the wager is live. Examples include:

- two separate engages producing kills or near-equal damage trades;
- sustained carry uptime in two objective fights;
- repeated meaningful damage to the opposing frontline;
- a completed damage breakpoint followed by successful target access.

One isolated trade is not enough when the underdog remains behind in gold, towers, objectives, or player strength.

## 8. Execution lock and stake enforcement

The following rules are absolute:

- any changed line requires a fresh assessment;
- an odds move of at least 0.10 or three implied-probability points requires a fresh state and price assessment;
- no fresh synchronized state means no model-approved execution;
- the active evaluation cap is 0.25u;
- a stake above 0.25u is a `user-executed deviation` even when the market and line match;
- an accepted wager below the quoted price is model-approved only when the new price was explicitly revalidated.

The assistant must not describe an expired or unsynchronized wager as model-approved after placement. Record it accurately as a deviation.

## 9. Duration-market rule retained

The v0.3.2 two-stall-indicator rule remains active.

Do not expand duration exposure from one successful result. An official duration over still requires at least two independent stall indicators and explicit pricing of fast-close branches, including objective acceleration, pick volatility, soul pressure, Baron speed, and base-breaking tools.

## 10. Market-selection order

At every snapshot, scan moneyline, kill handicap, total kills, and duration independently.

When an underdog positive kill handicap fails either the damage-conversion gate or structural veto:

- do not ladder to a larger plus number automatically;
- assess the favorite moneyline and favorite kill margin independently;
- assess total kills and duration using their own evidence;
- return `NO BET` when no market has a robust edge.

## 11. Performance attribution

Continue to report placed bets separately as:

- `model-approved exact`;
- `synchronized lean execution`;
- `user-executed deviation`.

Market-level conclusions must also be split by attribution tier. A market should not be suspended solely because deviations lost while synchronized executions performed differently.

## 12. Review threshold

Review after the next 10 settled synchronized LoL wagers.

Track for each wager:

- team-strength gap classification;
- current-series macro adjustment;
- market and timing;
- price-trigger type: structural or price-only;
- global-control score for deciding maps;
- v0.3.4 conversion-gate result;
- structural-veto result for positive handicaps;
- exact execution tier;
- result and net units.

Do not loosen these rules from a single win. Require repeated evidence across leagues and market types.