(() => {
  if (globalThis.__edgeLogClvAnalytics || !globalThis.EdgeLogCLV || typeof bets === "undefined") return;
  globalThis.__edgeLogClvAnalytics = true;

  const style = document.createElement("style");
  style.textContent = `
    .clv-analytics-panel {
      margin-bottom: 16px;
      padding: 21px 22px 16px;
    }
    .clv-analytics-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 18px;
    }
    .clv-analytics-heading h2 { margin: 3px 0 0; }
    .clv-formula-note {
      max-width: 440px;
      padding: 10px 12px;
      border: 1px solid var(--line);
      border-radius: 11px;
      background: var(--panel-soft);
      color: var(--muted);
      font-size: .73rem;
      line-height: 1.45;
    }
    .clv-summary-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 11px;
      margin-bottom: 17px;
    }
    .clv-summary-card {
      padding: 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
    }
    .clv-summary-card span {
      display: block;
      color: var(--muted);
      font-size: .66rem;
      font-weight: 820;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .clv-summary-card strong {
      display: block;
      margin-top: 8px;
      font-size: 1.18rem;
      letter-spacing: -.035em;
    }
    .clv-summary-card small {
      display: block;
      margin-top: 5px;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.4;
    }
    .clv-table { min-width: 790px; }
    .clv-table th,
    .clv-table td { padding: 12px 13px; }
    .clv-verdict {
      display: inline-flex;
      align-items: center;
      min-height: 25px;
      padding: 4px 8px;
      border-radius: 999px;
      font-size: .68rem;
      font-weight: 820;
      white-space: nowrap;
    }
    .clv-verdict--positive { background: var(--green-soft); color: var(--green); }
    .clv-verdict--negative { background: var(--red-soft); color: var(--red); }
    .clv-verdict--neutral { background: var(--panel-soft); color: var(--muted); }
    .clv-empty td {
      padding: 28px 16px;
      color: var(--muted);
      text-align: center;
    }
    @media (max-width: 1100px) {
      .clv-summary-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 700px) {
      .clv-analytics-panel { padding: 17px; }
      .clv-analytics-heading { flex-direction: column; }
      .clv-formula-note { max-width: none; }
      .clv-summary-grid { grid-template-columns: 1fr; }
    }
  `;
  document.head.append(style);

  function ensurePanel() {
    let panel = document.querySelector("#clvAnalyticsPanel");
    if (panel) return panel;
    const tables = document.querySelector(".analytics-tables-grid");
    if (!tables?.parentNode) return null;
    panel = document.createElement("section");
    panel.id = "clvAnalyticsPanel";
    panel.className = "panel clv-analytics-panel";
    panel.innerHTML = `
      <div class="clv-analytics-heading">
        <div>
          <p class="panel-kicker">MARKET QUALITY</p>
          <h2>Closing-line value</h2>
          <p class="panel-copy">Measure whether your entry price was better than the final market price.</p>
        </div>
        <div class="clv-formula-note"><strong>CLV formula:</strong> (entry odds ÷ closing odds − 1) × 100. A positive result means your entry beat the closing price.</div>
      </div>
      <div class="clv-summary-grid">
        <div class="clv-summary-card"><span>Average CLV</span><strong id="clvAverage">—</strong><small id="clvAverageMeta">No closing prices recorded</small></div>
        <div class="clv-summary-card"><span>Stake-weighted CLV</span><strong id="clvWeighted">—</strong><small>Higher-stake entries have more influence</small></div>
        <div class="clv-summary-card"><span>Beat-close rate</span><strong id="clvBeatRate">—</strong><small id="clvBeatRateMeta">0 tracked bets</small></div>
        <div class="clv-summary-card"><span>Implied probability edge</span><strong id="clvProbabilityEdge">—</strong><small>Average percentage-point advantage</small></div>
      </div>
      <div class="table-wrap">
        <table class="clv-table">
          <thead><tr><th>Event</th><th>Entry</th><th>Open</th><th>Close</th><th>CLV</th><th>Probability edge</th><th>Verdict</th></tr></thead>
          <tbody id="clvAnalyticsBody"></tbody>
        </table>
      </div>`;
    tables.parentNode.insertBefore(panel, tables);
    return panel;
  }

  function selectedSettled() {
    const items = bets.filter((bet) => bet.status !== "pending").slice().reverse();
    const period = document.querySelector("#analyticsPeriod")?.value || "all";
    if (period === "10") return items.slice(-10);
    if (period === "25") return items.slice(-25);
    return items;
  }

  function tone(element, value) {
    if (!element) return;
    element.classList.toggle("positive", value > 0.05);
    element.classList.toggle("negative", value < -0.05);
    element.classList.toggle("neutral-text", Math.abs(value) <= 0.05);
  }

  function setMetric(id, value, toneValue = null) {
    const element = document.querySelector(`#${id}`);
    if (!element) return;
    element.textContent = value;
    if (toneValue !== null) tone(element, toneValue);
  }

  function formatSigned(value, digits = 1, suffix = "%") {
    if (!Number.isFinite(value)) return "—";
    return `${value > 0 ? "+" : ""}${value.toFixed(digits)}${suffix}`;
  }

  function renderClvAnalytics() {
    if (!ensurePanel()) return;
    const tracked = selectedSettled().filter((bet) => EdgeLogCLV.clvPercent(bet) !== null);
    const body = document.querySelector("#clvAnalyticsBody");

    if (!tracked.length) {
      setMetric("clvAverage", "—");
      setMetric("clvWeighted", "—");
      setMetric("clvBeatRate", "—");
      setMetric("clvProbabilityEdge", "—");
      const averageMeta = document.querySelector("#clvAverageMeta");
      const rateMeta = document.querySelector("#clvBeatRateMeta");
      if (averageMeta) averageMeta.textContent = "Add closing odds when editing a bet";
      if (rateMeta) rateMeta.textContent = "0 tracked bets";
      if (body) body.innerHTML = '<tr class="clv-empty"><td colspan="7">No settled bets in this period have closing odds yet.</td></tr>';
      return;
    }

    const clvValues = tracked.map((bet) => EdgeLogCLV.clvPercent(bet));
    const average = clvValues.reduce((sum, value) => sum + value, 0) / tracked.length;
    const totalStake = tracked.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
    const weighted = totalStake
      ? tracked.reduce((sum, bet) => sum + EdgeLogCLV.clvPercent(bet) * Number(bet.stakeVnd || 0), 0) / totalStake
      : average;
    const beatCount = tracked.filter((bet) => EdgeLogCLV.verdict(bet).key === "positive").length;
    const beatRate = (beatCount / tracked.length) * 100;
    const probabilityEdges = tracked.map((bet) => EdgeLogCLV.impliedProbabilityEdge(bet)).filter(Number.isFinite);
    const probabilityEdge = probabilityEdges.reduce((sum, value) => sum + value, 0) / Math.max(1, probabilityEdges.length);

    setMetric("clvAverage", formatSigned(average), average);
    setMetric("clvWeighted", formatSigned(weighted), weighted);
    setMetric("clvBeatRate", `${beatRate.toFixed(1)}%`, beatRate - 50);
    setMetric("clvProbabilityEdge", formatSigned(probabilityEdge, 2, " pp"), probabilityEdge);
    const averageMeta = document.querySelector("#clvAverageMeta");
    const rateMeta = document.querySelector("#clvBeatRateMeta");
    if (averageMeta) averageMeta.textContent = `${tracked.length} closing price${tracked.length === 1 ? "" : "s"} recorded`;
    if (rateMeta) rateMeta.textContent = `${beatCount} of ${tracked.length} entries beat the close`;

    if (body) {
      body.innerHTML = tracked.slice().reverse().map((bet) => {
        const clv = EdgeLogCLV.clvPercent(bet);
        const probability = EdgeLogCLV.impliedProbabilityEdge(bet);
        const result = EdgeLogCLV.verdict(bet);
        return `<tr>
          <td><strong>${escapeHtml(bet.event)}</strong><small>${escapeHtml(bet.bet)}</small></td>
          <td>${formatOdds(bet.odds)}</td>
          <td>${bet.openingOdds > 1 ? formatOdds(bet.openingOdds) : "—"}</td>
          <td>${formatOdds(bet.closingOdds)}</td>
          <td class="${clv > 0.05 ? "positive" : clv < -0.05 ? "negative" : "neutral-text"}"><strong>${EdgeLogCLV.formatClv(clv)}</strong></td>
          <td class="${probability > 0.005 ? "positive" : probability < -0.005 ? "negative" : "neutral-text"}">${formatSigned(probability, 2, " pp")}</td>
          <td><span class="clv-verdict clv-verdict--${result.key}">${escapeHtml(result.label)}</span></td>
        </tr>`;
      }).join("");
    }
  }

  const previousRenderAnalytics = typeof renderAnalytics === "function" ? renderAnalytics : () => {};
  renderAnalytics = function clvAwareAnalytics(...args) {
    const result = previousRenderAnalytics(...args);
    renderClvAnalytics();
    return result;
  };

  document.querySelector("#analyticsPeriod")?.addEventListener("change", renderClvAnalytics);
  globalThis.renderEdgeLogClvAnalytics = renderClvAnalytics;
  renderClvAnalytics();
})();