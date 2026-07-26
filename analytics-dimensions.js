(() => {
  if (globalThis.__edgeLogDimensionAnalytics || typeof bets === "undefined") return;
  globalThis.__edgeLogDimensionAnalytics = true;

  const DIMENSIONS = {
    market: { label: "Market", empty: "Unspecified market" },
    timing: { label: "Timing", empty: "Unspecified timing" },
    bookmaker: { label: "Bookmaker", empty: "Unspecified bookmaker" },
    tags: { label: "Strategy tags", empty: "Untagged" }
  };

  let activeDimension = "market";

  const style = document.createElement("style");
  style.textContent = `
    .dimension-analytics-panel {
      margin-bottom: 16px;
      padding: 21px 22px 16px;
    }
    .dimension-analytics-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 16px;
    }
    .dimension-tabs {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 5px;
      padding: 4px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: var(--panel-soft);
    }
    .dimension-tabs button {
      min-height: 32px;
      padding: 7px 11px;
      border: 0;
      border-radius: 9px;
      background: transparent;
      color: var(--muted);
      font-size: .73rem;
      font-weight: 800;
      white-space: nowrap;
    }
    .dimension-tabs button.is-active {
      background: var(--panel);
      color: var(--text);
      box-shadow: 0 2px 8px rgba(12, 20, 44, .08);
    }
    .dimension-summary-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 11px;
      margin-bottom: 17px;
    }
    .dimension-summary-card {
      min-width: 0;
      padding: 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
    }
    .dimension-summary-card span {
      display: block;
      color: var(--muted);
      font-size: .66rem;
      font-weight: 820;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .dimension-summary-card strong {
      display: block;
      margin-top: 8px;
      overflow: hidden;
      font-size: 1rem;
      line-height: 1.25;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dimension-summary-card small {
      display: block;
      margin-top: 5px;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.4;
    }
    .dimension-table { min-width: 850px; }
    .dimension-table th,
    .dimension-table td { padding: 12px 13px; }
    .dimension-segment-cell strong { display: block; }
    .dimension-segment-cell small {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: .69rem;
    }
    .dimension-volume-track {
      width: 92px;
      height: 6px;
      margin-top: 6px;
      overflow: hidden;
      border-radius: 999px;
      background: var(--panel-soft);
    }
    .dimension-volume-fill {
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--blue), var(--purple));
    }
    .dimension-sample {
      display: inline-flex;
      align-items: center;
      min-height: 24px;
      padding: 4px 8px;
      border-radius: 999px;
      background: var(--panel-soft);
      color: var(--muted);
      font-size: .66rem;
      font-weight: 800;
      white-space: nowrap;
    }
    .dimension-sample--developing { background: var(--blue-soft); color: var(--blue); }
    .dimension-sample--strong { background: var(--green-soft); color: var(--green); }
    .dimension-empty td {
      padding: 28px 16px;
      color: var(--muted);
      text-align: center;
    }
    .dimension-footnote {
      margin: 12px 0 0;
      color: var(--muted);
      font-size: .71rem;
      line-height: 1.45;
    }
    @media (max-width: 1100px) {
      .dimension-summary-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 760px) {
      .dimension-analytics-panel { padding: 17px; }
      .dimension-analytics-heading { flex-direction: column; }
      .dimension-tabs { width: 100%; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .dimension-tabs button { width: 100%; }
      .dimension-summary-grid { grid-template-columns: 1fr; }
    }
  `;
  document.head.append(style);

  function ensurePanel() {
    let panel = document.querySelector("#dimensionAnalyticsPanel");
    if (panel) return panel;
    const tables = document.querySelector(".analytics-tables-grid");
    if (!tables?.parentNode) return null;

    panel = document.createElement("section");
    panel.id = "dimensionAnalyticsPanel";
    panel.className = "panel dimension-analytics-panel";
    panel.innerHTML = `
      <div class="dimension-analytics-heading">
        <div>
          <p class="panel-kicker">EDGE BREAKDOWN</p>
          <h2>Performance dimensions</h2>
          <p class="panel-copy">Compare results by market, bet timing, bookmaker, and your own strategy tags.</p>
        </div>
        <div class="dimension-tabs" role="tablist" aria-label="Performance dimension">
          ${Object.entries(DIMENSIONS).map(([key, dimension]) => `<button type="button" role="tab" data-dimension="${key}" class="${key === activeDimension ? "is-active" : ""}">${dimension.label}</button>`).join("")}
        </div>
      </div>
      <div class="dimension-summary-grid">
        <div class="dimension-summary-card"><span>Most active</span><strong id="dimensionMostActive">—</strong><small id="dimensionMostActiveMeta">No settled bets</small></div>
        <div class="dimension-summary-card"><span>Best observed P/L</span><strong id="dimensionBestPl">—</strong><small id="dimensionBestPlMeta">No settled bets</small></div>
        <div class="dimension-summary-card"><span>Best observed ROI</span><strong id="dimensionBestRoi">—</strong><small id="dimensionBestRoiMeta">No settled bets</small></div>
        <div class="dimension-summary-card"><span>Best average CLV</span><strong id="dimensionBestClv">—</strong><small id="dimensionBestClvMeta">No closing prices</small></div>
      </div>
      <div class="table-wrap">
        <table class="dimension-table">
          <thead><tr><th id="dimensionColumnHeading">Market</th><th>Bets</th><th>Win rate</th><th>Avg odds</th><th>Stake</th><th>P/L</th><th>ROI</th><th>Avg CLV</th><th>Sample</th></tr></thead>
          <tbody id="dimensionAnalyticsBody"></tbody>
        </table>
      </div>
      <p id="dimensionFootnote" class="dimension-footnote">Observed results describe your recorded sample; they are not a prediction of future performance.</p>`;
    tables.parentNode.insertBefore(panel, tables);

    panel.querySelector(".dimension-tabs")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-dimension]");
      if (!button || !DIMENSIONS[button.dataset.dimension]) return;
      activeDimension = button.dataset.dimension;
      panel.querySelectorAll("[data-dimension]").forEach((item) => item.classList.toggle("is-active", item === button));
      renderDimensionAnalytics();
    });
    return panel;
  }

  function selectedSettled() {
    const items = bets.filter((bet) => bet.status !== "pending").slice().reverse();
    const period = document.querySelector("#analyticsPeriod")?.value || "all";
    if (period === "10") return items.slice(-10);
    if (period === "25") return items.slice(-25);
    return items;
  }

  function metadataFor(bet = {}) {
    if (globalThis.EdgeLogMetadata?.metadataFor) return globalThis.EdgeLogMetadata.metadataFor(bet);
    return {
      bookmaker: String(bet.bookmaker || "").trim(),
      marketType: String(bet.marketType || "").trim(),
      timing: String(bet.timing || "").trim(),
      tags: Array.isArray(bet.tags) ? bet.tags : String(bet.tags || "").split(/[,;#]/).map((tag) => tag.trim()).filter(Boolean)
    };
  }

  function dimensionLabels(bet, dimension) {
    const meta = metadataFor(bet);
    if (dimension === "market") return [meta.marketType || DIMENSIONS.market.empty];
    if (dimension === "bookmaker") return [meta.bookmaker || DIMENSIONS.bookmaker.empty];
    if (dimension === "timing") {
      const label = meta.timing === "live" ? "Live" : meta.timing === "prematch" ? "Pre-match" : DIMENSIONS.timing.empty;
      return [label];
    }
    const tags = Array.isArray(meta.tags) ? meta.tags.map((tag) => String(tag).trim()).filter(Boolean) : [];
    return tags.length ? [...new Set(tags)] : [DIMENSIONS.tags.empty];
  }

  function clvFor(bet) {
    return globalThis.EdgeLogCLV?.clvPercent ? globalThis.EdgeLogCLV.clvPercent(bet) : null;
  }

  function groupItems(items, dimension) {
    const groups = new Map();
    items.forEach((bet) => {
      dimensionLabels(bet, dimension).forEach((label) => {
        const key = normalize(label).toLowerCase() || DIMENSIONS[dimension].empty.toLowerCase();
        const row = groups.get(key) || {
          label,
          bets: 0,
          wins: 0,
          stake: 0,
          pl: 0,
          oddsTotal: 0,
          clvTotal: 0,
          clvCount: 0
        };
        const clv = clvFor(bet);
        row.bets += 1;
        row.wins += ["win", "half-win"].includes(bet.status) ? 1 : 0;
        row.stake += Number(bet.stakeVnd || 0);
        row.pl += Number(profitLoss(bet) || 0);
        row.oddsTotal += Number(bet.odds || 0);
        if (Number.isFinite(clv)) {
          row.clvTotal += clv;
          row.clvCount += 1;
        }
        groups.set(key, row);
      });
    });

    return [...groups.values()].map((row) => ({
      ...row,
      winRate: row.bets ? (row.wins / row.bets) * 100 : 0,
      averageOdds: row.bets ? row.oddsTotal / row.bets : 0,
      roi: row.stake ? (row.pl / row.stake) * 100 : 0,
      averageClv: row.clvCount ? row.clvTotal / row.clvCount : null
    })).sort((a, b) => b.pl - a.pl || b.bets - a.bets || a.label.localeCompare(b.label));
  }

  function toneClass(value, tolerance = 0) {
    return value > tolerance ? "positive" : value < -tolerance ? "negative" : "neutral-text";
  }

  function sampleLabel(count) {
    if (count >= 10) return { label: "Stronger sample", className: "dimension-sample--strong" };
    if (count >= 5) return { label: "Developing", className: "dimension-sample--developing" };
    return { label: "Small sample", className: "" };
  }

  function setSummary(id, value, meta, toneValue = null) {
    const valueElement = document.querySelector(`#${id}`);
    const metaElement = document.querySelector(`#${id}Meta`);
    if (valueElement) {
      valueElement.textContent = value;
      if (toneValue !== null) {
        valueElement.classList.toggle("positive", toneValue > 0.05);
        valueElement.classList.toggle("negative", toneValue < -0.05);
        valueElement.classList.toggle("neutral-text", Math.abs(toneValue) <= 0.05);
      } else {
        valueElement.classList.remove("positive", "negative", "neutral-text");
      }
    }
    if (metaElement) metaElement.textContent = meta;
  }

  function renderSummaries(rows) {
    if (!rows.length) {
      setSummary("dimensionMostActive", "—", "No settled bets");
      setSummary("dimensionBestPl", "—", "No settled bets");
      setSummary("dimensionBestRoi", "—", "No settled bets");
      setSummary("dimensionBestClv", "—", "No closing prices");
      return;
    }

    const mostActive = rows.slice().sort((a, b) => b.bets - a.bets || b.stake - a.stake)[0];
    const bestPl = rows.slice().sort((a, b) => b.pl - a.pl)[0];
    const eligibleRoi = rows.filter((row) => row.bets >= 2);
    const bestRoi = (eligibleRoi.length ? eligibleRoi : rows).slice().sort((a, b) => b.roi - a.roi)[0];
    const clvRows = rows.filter((row) => row.averageClv !== null);
    const bestClv = clvRows.slice().sort((a, b) => b.averageClv - a.averageClv)[0];

    setSummary("dimensionMostActive", mostActive.label, `${mostActive.bets} bet${mostActive.bets === 1 ? "" : "s"} · ${formatUnits(mostActive.stake)} staked`);
    setSummary("dimensionBestPl", bestPl.label, `${formatUnits(bestPl.pl, true)} · ${bestPl.bets} bet${bestPl.bets === 1 ? "" : "s"}`, bestPl.pl);
    setSummary("dimensionBestRoi", bestRoi.label, `${bestRoi.roi >= 0 ? "+" : ""}${bestRoi.roi.toFixed(1)}% across ${bestRoi.bets} bet${bestRoi.bets === 1 ? "" : "s"}`, bestRoi.roi);
    if (bestClv) {
      setSummary("dimensionBestClv", bestClv.label, `${EdgeLogCLV.formatClv(bestClv.averageClv)} across ${bestClv.clvCount} closing price${bestClv.clvCount === 1 ? "" : "s"}`, bestClv.averageClv);
    } else {
      setSummary("dimensionBestClv", "—", "No closing prices in this view");
    }
  }

  function renderDimensionAnalytics() {
    const panel = ensurePanel();
    if (!panel) return;
    const rows = groupItems(selectedSettled(), activeDimension);
    const body = panel.querySelector("#dimensionAnalyticsBody");
    const heading = panel.querySelector("#dimensionColumnHeading");
    const footnote = panel.querySelector("#dimensionFootnote");
    if (heading) heading.textContent = DIMENSIONS[activeDimension].label;
    if (footnote) {
      footnote.textContent = activeDimension === "tags"
        ? "A bet with multiple strategy tags contributes to each matching tag. Observed results are descriptive, not predictive."
        : "Observed results describe your recorded sample; they are not a prediction of future performance.";
    }
    renderSummaries(rows);

    if (!body) return;
    if (!rows.length) {
      body.innerHTML = `<tr class="dimension-empty"><td colspan="9">No settled bets in this period.</td></tr>`;
      return;
    }

    const maxBets = Math.max(...rows.map((row) => row.bets), 1);
    body.innerHTML = rows.map((row) => {
      const sample = sampleLabel(row.bets);
      return `<tr>
        <td class="dimension-segment-cell"><strong>${escapeHtml(row.label)}</strong><small>${row.clvCount ? `${row.clvCount} closing price${row.clvCount === 1 ? "" : "s"}` : "No closing price data"}</small></td>
        <td><strong>${row.bets}</strong><div class="dimension-volume-track"><div class="dimension-volume-fill" style="width:${(row.bets / maxBets) * 100}%"></div></div></td>
        <td>${row.winRate.toFixed(1)}%</td>
        <td>${row.averageOdds ? row.averageOdds.toFixed(2) : "—"}</td>
        <td>${formatUnits(row.stake)}</td>
        <td class="${toneClass(row.pl)}"><strong>${formatUnits(row.pl, true)}</strong></td>
        <td class="${toneClass(row.roi, .05)}">${row.roi >= 0 ? "+" : ""}${row.roi.toFixed(1)}%</td>
        <td class="${row.averageClv === null ? "neutral-text" : toneClass(row.averageClv, .05)}">${row.averageClv === null ? "—" : EdgeLogCLV.formatClv(row.averageClv)}</td>
        <td><span class="dimension-sample ${sample.className}">${sample.label}</span></td>
      </tr>`;
    }).join("");
  }

  const previousRenderAnalytics = typeof renderAnalytics === "function" ? renderAnalytics : () => {};
  renderAnalytics = function dimensionAwareAnalytics(...args) {
    const result = previousRenderAnalytics(...args);
    renderDimensionAnalytics();
    return result;
  };

  document.querySelector("#analyticsPeriod")?.addEventListener("change", renderDimensionAnalytics);
  globalThis.renderEdgeLogDimensionAnalytics = renderDimensionAnalytics;
  renderDimensionAnalytics();
})();