(() => {
  if (globalThis.__edgeLogClvTracking || typeof bets === "undefined") return;
  globalThis.__edgeLogClvTracking = true;

  const TOLERANCE = 0.05;

  const style = document.createElement("style");
  style.textContent = `
    .bet-meta-chip--clv-positive {
      border-color: color-mix(in srgb, var(--green) 34%, var(--line));
      background: var(--green-soft);
      color: var(--green);
    }
    .bet-meta-chip--clv-negative {
      border-color: color-mix(in srgb, var(--red) 34%, var(--line));
      background: var(--red-soft);
      color: var(--red);
    }
    .bet-meta-chip--clv-neutral {
      border-color: color-mix(in srgb, var(--muted) 30%, var(--line));
      background: var(--panel-soft);
      color: var(--muted);
    }
    .clv-form-help {
      grid-column: 1 / -1;
      margin: -3px 0 0;
      color: var(--muted);
      font-size: .75rem;
      line-height: 1.45;
    }
  `;
  document.head.append(style);

  function optionalOdds(value) {
    const parsed = Number(value || 0);
    return Number.isFinite(parsed) && parsed > 1 ? parsed : null;
  }

  function clvPercent(bet = {}) {
    const entry = optionalOdds(bet.odds);
    const close = optionalOdds(bet.closingOdds);
    if (!entry || !close) return null;
    return ((entry / close) - 1) * 100;
  }

  function impliedProbabilityEdge(bet = {}) {
    const entry = optionalOdds(bet.odds);
    const close = optionalOdds(bet.closingOdds);
    if (!entry || !close) return null;
    return ((1 / close) - (1 / entry)) * 100;
  }

  function openingMovePercent(bet = {}) {
    const opening = optionalOdds(bet.openingOdds);
    const close = optionalOdds(bet.closingOdds);
    if (!opening || !close) return null;
    return ((opening / close) - 1) * 100;
  }

  function verdict(bet = {}) {
    const clv = clvPercent(bet);
    if (clv === null) return { key: "untracked", label: "Not tracked" };
    if (clv > TOLERANCE) return { key: "positive", label: "Beat close" };
    if (clv < -TOLERANCE) return { key: "negative", label: "Missed close" };
    return { key: "neutral", label: "Matched close" };
  }

  function formatClv(value) {
    if (value === null || !Number.isFinite(value)) return "—";
    return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
  }

  globalThis.EdgeLogCLV = {
    optionalOdds,
    clvPercent,
    impliedProbabilityEdge,
    openingMovePercent,
    verdict,
    formatClv
  };

  if (typeof parseBetslip === "function") {
    const originalParseBetslip = parseBetslip;
    parseBetslip = function clvParseBetslip(text, thousandsMode) {
      const parsed = originalParseBetslip(text, thousandsMode);
      if (!parsed?.bet) return parsed;
      const entries = typeof lineEntries === "function" ? lineEntries(text) : null;
      if (!entries || typeof valueFor !== "function") return parsed;
      const opening = valueFor(entries, [
        "Opening odds", "Open odds", "Opening price", "Odds mở cửa", "Ty le mo cua", "Tỷ lệ mở cửa"
      ]);
      const closing = valueFor(entries, [
        "Closing odds", "Close odds", "Closing price", "Odds đóng cửa", "Ty le dong cua", "Tỷ lệ đóng cửa"
      ]);
      parsed.bet.openingOdds = optionalOdds(typeof parseNumber === "function" ? parseNumber(opening) : opening);
      parsed.bet.closingOdds = optionalOdds(typeof parseNumber === "function" ? parseNumber(closing) : closing);
      return parsed;
    };
  }

  if (typeof renderDetected === "function") {
    const originalRenderDetected = renderDetected;
    renderDetected = function clvRenderDetected(confidence = 0) {
      const result = originalRenderDetected(confidence);
      const list = document.querySelector("#detectedFields");
      if (!list || !detectedBet) return result;
      const clv = clvPercent(detectedBet);
      const values = [
        ["Opening odds", optionalOdds(detectedBet.openingOdds)],
        ["Closing odds", optionalOdds(detectedBet.closingOdds)],
        ["CLV", clv === null ? "" : `${formatClv(clv)} · ${verdict(detectedBet).label}`]
      ].filter(([, value]) => value !== null && value !== "");
      values.forEach(([label, value]) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(typeof value === "number" ? formatOdds(value) : value)}</dd>`;
        list.append(wrapper);
      });
      return result;
    };
  }

  function chip(label, className, title = "") {
    return `<span class="bet-meta-chip ${className}"${title ? ` title="${escapeHtml(title)}"` : ""}>${escapeHtml(label)}</span>`;
  }

  if (typeof betRow === "function") {
    const originalBetRow = betRow;
    betRow = function clvBetRow(bet, index, actions = true) {
      let html = originalBetRow(bet, index, actions);
      const opening = optionalOdds(bet.openingOdds);
      const closing = optionalOdds(bet.closingOdds);
      const clv = clvPercent(bet);
      if (!opening && !closing) return html;

      const chips = [];
      if (opening) chips.push(chip(`Open ${formatOdds(opening)}`, "bet-meta-chip--clv-neutral"));
      if (closing) chips.push(chip(`Close ${formatOdds(closing)}`, "bet-meta-chip--clv-neutral"));
      if (clv !== null) {
        const result = verdict(bet);
        chips.push(chip(
          `CLV ${formatClv(clv)}`,
          `bet-meta-chip--clv-${result.key}`,
          `${result.label}. Entry ${formatOdds(bet.odds)} versus close ${formatOdds(closing)}.`
        ));
      }

      const markup = chips.join("");
      if (!markup) return html;
      if (html.includes('<div class="bet-meta">')) {
        return html.replace('<div class="bet-meta">', `<div class="bet-meta">${markup}`);
      }

      const marker = `<td><div class="bet-copy"><strong>${escapeHtml(bet.bet)}</strong>`;
      if (html.includes(marker)) {
        html = html.replace(marker, `${marker}<div class="bet-meta">${markup}</div>`);
      }
      return html;
    };
  }

  if (typeof renderTables === "function") renderTables();
})();