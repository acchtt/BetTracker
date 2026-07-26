# Bet Tracker

A static, local-first betting tracker designed for GitHub Pages.

## Features

- Automatically parses pasted Vietnamese and English betslip text.
- Detects event, league, market, odds, stake, event date, status, result, and payout.
- Converts VND stakes to units using a configurable unit value (default: 500,000 VND).
- Calculates win, half-win, loss, half-loss, void, pending exposure, and total net P/L.
- Saves data locally in the browser using `localStorage`.
- Manual add/edit/delete.
- Search and status filtering.
- JSON backup/restore and CSV export.
- Includes the user's four current tracker entries as starter data.

## Important privacy behavior

All data stays inside the browser. GitHub Pages does not receive or store the bet history. Clearing browser site data will remove the tracker unless a JSON backup was exported.

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. The included workflow deploys the site after every push to `main`.

The expected URL is:

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
