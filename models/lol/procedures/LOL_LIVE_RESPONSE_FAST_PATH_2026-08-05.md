# LoL Live Response Fast Path — 2026-08-05

**Status:** Active immediately  
**Applies to:** synchronized live LoL screenshots and user corrections

## Required output order

The first visible line must be:

`VERDICT — market @ odds — stake/status`

Then include only:

1. verified state and state direction;
2. total-kill projection: low, central, high, point estimate;
3. duration projection: fast, central, extension, point estimate;
4. one promotion or rejection trigger;
5. placement and exposure status when relevant.

Do not front-load background discussion.

## Immediate-response rule

For an active map, the verdict must be sent before any repository read, repository write, web search, historical lookup, or extended model narration when the screenshot and user correction already contain enough synchronized state.

The default first response must be compact:

- first line: verdict;
- second line: stake/status and whether the position is official or shadow;
- no more than three short supporting lines unless the state is ambiguous;
- repository logging and detailed review occur only after the visible verdict has been delivered.

When no market qualifies, use:

`NO LEAN — reason — 0u`

Do not delay a negative verdict while searching for an alternative market.

## Mandatory market coverage

When displayed or requested, always report:

- moneyline;
- kill handicap;
- kill total;
- duration.

Use `MARKET UNAVAILABLE/LOCKED` when necessary.

Mandatory market coverage may be supplied after the immediate verdict. It must not delay the first visible line.

## Mandatory objective inventory

Before projecting kills or time, verify or mark unknown:

- game clock;
- kills and gold direction;
- towers and inhibitor depth;
- dragons and soul point;
- Void Grubs;
- Herald;
- Baron and Elder;
- next major neutral objective.

A user correction overrides the prior read immediately.

## Latency discipline

During an active map:

- give the verdict before repository work;
- avoid web browsing when screenshots contain sufficient state;
- do not repeat stable model rules;
- calculate only the current best eligible market;
- keep the default response compact;
- expand only when the state is ambiguous or the user asks;
- do not announce repository work before the verdict;
- do not wait for file synchronization to answer;
- treat a fast `NO LEAN` as preferable to a late speculative lean.

## Duration branch minimum

After 18:00, report:

- fast-close branch;
- central branch;
- extension branch;
- point estimate.

When a team is on soul point, include a soul-cascade branch and state whether Grubs improve post-fight structure conversion.

Duration remains analysis-only through probation wager 20.
