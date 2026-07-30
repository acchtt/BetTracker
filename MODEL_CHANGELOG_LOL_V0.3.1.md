# LoL Model Changelog Addendum

## v0.3.1 — 2026-07-30

### Team-strength retention, cross-market selection, confidence display, and fast output

**Status:** Active evaluation rule  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.1.md`

**Sport and markets affected**

League of Legends map moneylines, kill handicaps, total kills, and duration markets, especially post-draft and live decisions.

**Triggering evidence**

- JD Gaming vs Thunder Talk Gaming Game 3: the model selected TT +6.5 kills at 1.828 after emphasizing TT's tank shredding and theoretical kill-trading.
- JDG was the materially stronger team and also held the easier execution profile through Malphite-Trundle-Galio-Ezreal-Seraphine.
- Under 30.5 total kills better matched a plausible clean JDG conversion branch than an underdog kill handicap that required TT to trade kills.
- At 12 minutes JDG led 5-0 and by roughly 5,000 gold. The early state exposed the process weakness but is not treated as proof from one final result.
- The user identified that recommendations were concentrating on one market and arriving too slowly after the line screenshot.

**Previous rule**

The procedure required independent pricing of map moneyline, kill handicap, total kills, duration, and other markets, but the practical workflow often stopped after finding one plausible candidate. Team strength was assessed before draft, yet draft theory could receive too much weight in the final market choice. Confidence was not displayed consistently, and the response format could be too long for moving markets.

**New rule**

- Carry the opponent-adjusted team-strength prior into every post-draft market.
- Draft theory may adjust but must not erase a material strength gap without concrete lane, player, proficiency, or execution evidence.
- Draft-only probability adjustments above five percentage points require an explicit decisive-mismatch explanation.
- Classify the favorite's likely win path as `clean-macro`, `fight-heavy`, or `mixed` before selecting a market.
- Run a rapid parallel scan of map moneyline, kill handicap, total kills, and duration after roster, side, draft, and prices are confirmed.
- Select the market that best expresses the dominant game script rather than the first plausible edge.
- For every underdog positive kill handicap, compare the total-kills alternative. Prefer the under or pass when the favorite can win cleanly and the handicap relies mainly on underdog kill-trading.
- Theoretical tank shredding or scaling alone cannot justify an underdog kill handicap against a materially stronger team.
- Every recommendation must display `Confidence: X/10`.
- Use the compact decision format in `MODEL_RULES_LOL_V0.3.1.md`; detailed reasoning is deferred unless needed.
- Normally recommend only one correlated official wager.

**Expected benefit**

Improve team-strength calibration, identify the market that best fits the projected game script, reduce kill-handicap overuse, and return actionable decisions before prices move.

**Possible downside**

The model may underweight genuinely decisive draft counters, overprefer unders against low-risk favorites, or miss some prices while scanning multiple markets.

**Review threshold**

Review after the next 10 settled LoL map wagers. Track the selected market and strongest unselected core-market alternative without treating the alternative as a bet. Report closing-line quality, market fit, realized game script, calibration, ROI, and whether team strength or draft theory was overweighted, separated by moneyline, kill handicap, total kills, and duration.
