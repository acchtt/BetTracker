# EdgeLog

**Log bets. Gain edge.**

EdgeLog is a static, local-first betting journal designed for GitHub Pages. It helps track units, exposure, results, and profit/loss without sending betting history to a server.

## Features

- Automatically parses pasted Vietnamese and English betslip text.
- Detects event, league, market, odds, stake, event date, status, result, and payout.
- Converts VND stakes to units using a configurable unit value (default: 500,000 VND).
- Calculates win, half-win, loss, half-loss, void, pending exposure, and total net P/L.
- Automatically displays sport-category icons for esports, soccer, basketball, baseball, and other supported sports.
- Saves data locally in the browser using `localStorage`.
- Manual add, edit, and delete controls.
- Search and status filtering.
- JSON backup/restore and CSV export.

## Brand

- Product name: **EdgeLog**
- Tagline: **Log bets. Gain edge.**
- Primary colors: electric blue, cyan, and violet on a dark navy foundation.
- Logo asset: `assets/edgelog-mark.svg`

## Important privacy behavior

All data stays inside the browser. GitHub Pages does not receive or store the bet history. Clearing browser site data will remove the tracker unless a JSON backup was exported.

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
