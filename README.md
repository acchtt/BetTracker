# EdgeLog

**Log bets. Gain edge.**

EdgeLog is a local-first betting journal designed for GitHub Pages. It helps track units, exposure, results, profit/loss, bankroll cash flow, closing-line value, and configurable risk limits while keeping manual browser entries local.

## Features

- Automatically parses pasted Vietnamese and English betslip text.
- Reads betslip screenshots with browser-based OCR.
- Detects event, league, market, odds, stake, event date, status, result, payout, bookmaker, timing, and strategy tags.
- Records entry, opening, and closing decimal odds and calculates closing-line value automatically.
- Converts VND stakes to units using a configurable unit value (default: 500,000 VND).
- Calculates win, half-win, loss, half-loss, void, pending exposure, and total net P/L.
- Tracks starting bankroll, deposits, withdrawals, current balance, and available balance after exposure.
- Displays cumulative profit and bankroll curves plus breakdowns by sport, odds range, market, timing, bookmaker, and strategy tag.
- Displays average CLV, stake-weighted CLV, beat-close rate, and implied-probability edge.
- Provides configurable warnings for maximum stake, pending exposure, and daily settled loss.
- Automatically displays sport-category icons for esports, soccer, basketball, baseball, and other supported sports.
- Saves data locally in the browser using `localStorage`.
- Automatically checks `ledger.json` for new ChatGPT-tracked entries every 10 seconds while the page is open.
- Refreshes immediately when the tab regains focus or the connection comes back online.
- Preserves locally edited bets instead of replacing them during remote synchronization.
- Manual add, edit, delete, and one-click settlement controls.
- Search and filters for sport, status, bookmaker, market, timing, and tags.
- Full JSON backup/restore and detailed CSV export.

## Risk guardrails

The Settings page includes warning limits for:

- maximum stake per pending bet, measured in units
- maximum total pending exposure as a percentage of current bankroll
- maximum daily settled loss, measured in units

Current bankroll is calculated from the starting bankroll, cash-ledger adjustments, and settled betting P/L. Daily P/L uses the settlement timestamp and falls back to the event date when a settlement timestamp is unavailable.

The guardrails are warnings rather than automatic blocks. When a new pending bet exceeds an enabled limit, EdgeLog shows the reasons and asks for confirmation before saving. An individual limit can be disabled by setting it to `0`, or all pre-save warnings can be turned off from Settings.

## Closing-line value

The main **Odds** field is the price taken when the bet was placed. Opening and closing odds are optional fields available in the Add/Edit Bet dialog.

EdgeLog calculates decimal-odds CLV as:

`(entry odds / closing odds - 1) * 100`

For example, an entry at `2.10` and a closing price of `1.90` produces positive CLV because the entry secured a better payout than the final market price. The Analytics page also reports the implied-probability difference in percentage points.

## Full backup and restore

The Settings page exports a versioned EdgeLog JSON backup containing:

- all bets and bet metadata, including opening and closing odds
- unit size, starting bankroll, and risk-guardrail settings
- bankroll deposits and withdrawals
- theme preference
- locally hidden synchronized bet IDs

Import supports current full backups, older `{ settings, bets }` backups, and legacy backups containing only a bets array. Before an import or full tracker reset, EdgeLog stores a temporary safety snapshot and offers an Undo action for 12 seconds.

## Live ledger workflow

`ledger.json` is the canonical feed for entries added or updated through ChatGPT.

For each change:

1. Add or update the bet using a stable `syncId`.
2. Change the top-level `version` timestamp.
3. Commit the file to `main`.
4. After GitHub Pages deploys the commit, open EdgeLog tabs detect the new version automatically and update without a page refresh.

The browser checks every 10 seconds while visible and every 30 seconds while hidden. GitHub Pages deployment time still applies before the new feed becomes publicly available.

## Brand

- Product name: **EdgeLog**
- Tagline: **Log bets. Gain edge.**
- Primary colors: electric blue, cyan, and violet on a dark navy foundation.
- Sidebar lockup: `assets/edgelog-horizontal-dark.svg`
- App icon: `assets/edgelog-app-icon.svg`

## Privacy behavior

Manual entries, edits, settings, bankroll values, cash-ledger entries, and risk limits remain in browser `localStorage` unless exported by the user.

Entries intentionally added through ChatGPT synchronization are stored in the public repository's `ledger.json` file so GitHub Pages can deliver them to the open website. Do not place private account details, personal identifiers, or sportsbook credentials in synchronized notes.

Clearing browser site data removes local-only tracker data unless a JSON backup was exported.

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. The included workflow deploys the site after every push to `main`.

Current project URL:

`https://acchtt.github.io/BetTracker/`

## Supported Vietnamese labels

The parser recognizes common labels including:

- `Tỷ lệ cược`
- `Loại cược`
- `Sự kiện`
- `Ngày sự kiện`
- `Giải đấu`
- `Tiền cược`
- `Tiền trả về`
- `Trạng thái`
- `Kết quả`
- `Tỷ lệ mở cửa`
- `Tỷ lệ đóng cửa`

The **thousands of VND** switch is enabled by default, so a displayed stake of `773.00 VND` is interpreted as `773,000 VND`.