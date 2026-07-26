# EdgeLog

**Log bets. Gain edge.**

EdgeLog is a local-first betting journal designed for GitHub Pages. It helps track units, exposure, results, profit/loss, and bankroll cash flow while keeping manual browser entries local.

## Features

- Automatically parses pasted Vietnamese and English betslip text.
- Reads betslip screenshots with browser-based OCR.
- Detects event, league, market, odds, stake, event date, status, result, payout, bookmaker, timing, and strategy tags.
- Converts VND stakes to units using a configurable unit value (default: 500,000 VND).
- Calculates win, half-win, loss, half-loss, void, pending exposure, and total net P/L.
- Tracks starting bankroll, deposits, withdrawals, current balance, and available balance after exposure.
- Displays cumulative profit and bankroll curves plus breakdowns by sport and odds range.
- Automatically displays sport-category icons for esports, soccer, basketball, baseball, and other supported sports.
- Saves data locally in the browser using `localStorage`.
- Automatically checks `ledger.json` for new ChatGPT-tracked entries every 10 seconds while the page is open.
- Refreshes immediately when the tab regains focus or the connection comes back online.
- Preserves locally edited bets instead of replacing them during remote synchronization.
- Manual add, edit, delete, and one-click settlement controls.
- Search and filters for sport, status, bookmaker, market, timing, and tags.
- Full JSON backup/restore and detailed CSV export.

## Full backup and restore

The Settings page exports a versioned EdgeLog JSON backup containing:

- all bets and bet metadata
- unit size and starting bankroll settings
- bankroll deposits and withdrawals
- theme preference
- locally hidden synchronized bet IDs

Import supports current full backups, older `{ settings, bets }` backups, and legacy backups containing only a bets array. Before an import or full tracker reset, EdgeLog stores a temporary safety snapshot and offers an Undo action for 12 seconds.

## Detailed CSV export

The Settings page also exports an Excel-compatible UTF-8 CSV containing one row per bet. Columns include sport, bookmaker, market, live/pre-match timing, strategy tags, decimal odds, VND and unit stakes, potential payout, result, profit/loss, ROI, event and settlement timestamps, notes, and synchronization identifiers.

Text cells beginning with spreadsheet formula characters are escaped before export.

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

Manual entries, edits, settings, bankroll values, and cash-ledger entries remain in browser `localStorage` unless exported by the user.

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

The **thousands of VND** switch is enabled by default, so a displayed stake of `773.00 VND` is interpreted as `773,000 VND`.