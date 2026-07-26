(() => {
  if (globalThis.__edgeLogReviewAnalytics || typeof bets === "undefined") return;
  globalThis.__edgeLogReviewAnalytics = true;

  const GRADE_LABELS = { good: "Good decision", mixed: "Mixed decision", poor: "Poor decision", unreviewed: "Unreviewed" };
  const MISTAKE_LABELS = {
    none: "No mistake", "bad-read": "Bad read", "bad-price": "Bad price", "late-entry": "Late entry",
    overstake: "Overstaked", chasing: "Chasing", tilt: "Tilt", execution: "Execution error", other: "Other mistake"
  };

  const style = document.createElement("style");
  style.textContent = `
    .review-analytics-panel {
      margin-bottom: 16px;
      padding: 21px 22px 17px;
    }
    .review-analytics-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 17px;
    }
    .review-analytics-heading h2 { margin: 3px 0 0; }
    .review-analytics-note {
      max-width: 450px;
      padding: 10px 12px;
      border: 1px solid var(--line);
      border-radius: 11px;
      background: var(--panel-soft);
      color: var(--muted);
      font-size: .73rem;
      line-height: 1.45;
    }
    .review-summary-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 11px;
      margin-bottom: 17px;
    }
    .review-summary-card {
      min-width: 0;
      padding: 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
    }
    .review-summary-card span {
      display: block;
      color: var(--muted);
      font-size: .66rem;
      font-weight: 820;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .review-summary-card strong {
      display: block;
      margin-top: 8px;
      font-size: 1.16rem;
      letter-spacing: -.035em;
    }
    .review-summary-card small {
      display: block;
      margin-top: 5px;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.4;
    }
    .review-analytics-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(340px, .85fr);
      gap: 16px;
    }
    .review-subpanel {
      min-width: 0;
      padding: 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
    }
    .review-subpanel h3 { margin: 0; font-size: .96rem; }
    .review-subpanel > p {
      margin: 5px 0 13px;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.45;
    }
    .review-table { min-width: 620px; }
    .review-table th,
    .review-table td { padding: 11px 12px; }
    .review-grade-pill {
      display: inline-flex;
      align-items: center;
      min-height: 24px;
      padding: 4px 8px;
      border-radius: 999px;
      font-size: .67rem;
      font-weight: 820;
      white-space: nowrap;
    }
    .review-grade-pill--good { background: var(--green-soft); color: var(--green); }
    .review-grade-pill--mixed { background: color-mix(in srgb, var(--amber) 12%, var(--panel)); color: var(--amber); }
    .review-grade-pill--poor { background: var(--red-soft); color: var(--red); }
    .review-grade-pill--unreviewed { background: var(--panel); color: var(--muted); }
    .review-mistake-list {
      display: grid;
      gap: 8px;
      margin-top: 14px;
    }
    .review-mistake-item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 10px;
      align-items: center;
      padding: 10px 11px;
      border: 1px solid var(--line);
      border-radius: 11px;
      background: var(--panel);
    }
    .review-mistake-item span { font-size: .75rem; font-weight: 760; }
    .review-mistake-item strong { color: var(--red); font-size: .78rem; }
    .review-empty {
      padding: 26px 14px;
      color: var(--muted);
      text-align: center;
      font-size: .76rem;
    }
    @media (max-width: 1100px) {
      .review-summary-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .review-analytics-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 700px) {
      .review-analytics-panel { padding: 17px; }
      .review-analytics-heading { flex-direction: column; }
      .review-analytics-note { max-width: none; }
      .review-summary-grid { grid-template-columns: 1fr; }
      .review-subpanel { padding: 13px; }
    }
  `;
  document.head.append(style);

  function confidenceValue(value) {
    const parsed = Number(value || 0);
    return Number.isInteger(parsed) && parsed >= 1 && parsed <= 5 ? parsed : null;
  }

  function canonicalGrade(value) {
    const text = normalize(value || "").toLowerCase();
    return ["good", "mixed", "poor"].includes(text) ? text : "";
  }

  function canonicalMistake(value) {
    const text = normalize(value || "").toLowerCase();
    return text || "";
  }

  function reviewFor(bet = {}) {
    if (globalThis.EdgeLogReview?.reviewFor) return globalThis.EdgeLogReview.reviewFor(bet);
    const confidence = confidenceValue(bet.confidence);
    const processGrade = canonicalGrade(bet.processGrade);
    const mistakeType = canonicalMistake(bet.mistakeType);
    const postReview = String(bet.postReview || "").trim();
    return {
      confidence,
      processGrade,
      mistakeType,
      postReview,
      reviewed: Boolean(processGrade || postReview || (mistakeType && mistakeType !== "none"))
    };
  }

  function selectedSettled() {
    const items = bets.filter((bet) => bet.status !== "pending").slice().reverse();
    const period = document.querySelector("#analyticsPeriod")?.value || "all";
    if (period === "10") return items.slice(-10);
    if (period === "25") return items.slice(-25);
    return items;
  }

  function clvFor(bet) {
    if (globalThis.EdgeLogCLV?.clvPercent) return globalThis.EdgeLogCLV.clvPercent(bet);
    const entry = Number(bet.odds || 0);
    const close = Number(bet.closingOdds || 0);
    return entry > 1 && close > 1 ? ((entry / close) - 1) * 100 : null;
  }

  function ensurePanel() {
    let panel = document.querySelector("#reviewAnalyticsPanel");
    if (panel) return panel;
    const tables = document.querySelector(".analytics-tables-grid");
    if (!tables?.parentNode) return null;
    panel = document.createElement("section");
    panel.id = "reviewAnalyticsPanel";
    panel.className = "panel review-analytics-panel";
    panel.innerHTML = `
      <div class="review-analytics-heading">
        <div>
          <p class="panel-kicker">DECISION QUALITY</p>
          <h2>Confidence and post-bet review</h2>
          <p class="panel-copy">Separate the quality of the decision from the result and identify repeated execution mistakes.</p>
        </div>
        <div class="review-analytics-note"><strong>Process first:</strong> a losing bet can still be a good decision, while a winning bet can still expose poor sizing, timing, or price discipline.</div>
      </div>
      <div class="review-summary-grid">
        <div class="review-summary-card"><span>Review coverage</span><strong id="reviewCoverage">0.0%</strong><small id="reviewCoverageMeta">0 of 0 settled bets reviewed</small></div>
        <div class="review-summary-card"><span>Average confidence</span><strong id="reviewAverageConfidence">—</strong><small id="reviewAverageConfidenceMeta">No confidence scores</small></div>
        <div class="review-summary-card"><span>Good-decision rate</span><strong id="reviewGoodRate">—</strong><small id="reviewGoodRateMeta">No graded decisions</small></div>
        <div class="review-summary-card"><span>Mistakes flagged</span><strong id="reviewMistakeCount">0</strong><small id="reviewMistakeMeta">No recurring mistake yet</small></div>
      </div>
      <div class="review-analytics-grid">
        <div class="review-subpanel">
          <h3>Confidence calibration</h3>
          <p>Compare stated confidence with actual results, profit, and closing-line value.</p>
          <div class="table-wrap">
            <table class="review-table">
              <thead><tr><th>Confidence</th><th>Bets</th><th>Win rate</th><th>Avg odds</th><th>P/L</th><th>ROI</th><th>Avg CLV</th></tr></thead>
              <tbody id="reviewConfidenceBody"></tbody>
            </table>
          </div>
        </div>
        <div class="review-subpanel">
          <h3>Decision grades and mistakes</h3>
          <p>Track whether the process was good, mixed, or poor regardless of the outcome.</p>
          <div class="table-wrap">
            <table class="review-table">
              <thead><tr><th>Grade</th><th>Bets</th><th>Win rate</th><th>P/L</th><th>ROI</th></tr></thead>
              <tbody id="reviewGradeBody"></tbody>
            </table>
          </div>
          <div id="reviewMistakeList" class="review-mistake-list"></div>
        </div>
      </div>`;
    tables.parentNode.insertBefore(panel, tables);
    return panel;
  }

  function toneClass(value, tolerance = 0) {
    return value > tolerance ? "positive" : value < -tolerance ? "negative" : "neutral-text";
  }

  function formatClv(value) {
    if (!Number.isFinite(value)) return "—";
    return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
  }

  function setMetric(id, value, meta, tone = null) {
    const valueElement = document.querySelector(`#${id}`);
    const metaElement = document.querySelector(`#${id}Meta`);
    if (valueElement) {
      valueElement.textContent = value;
      if (tone !== null) {
        valueElement.classList.toggle("positive", tone > 0.05);
        valueElement.classList.toggle("negative", tone < -0.05);
        valueElement.classList.toggle("neutral-text", Math.abs(tone) <= 0.05);
      }
    }
    if (metaElement) metaElement.textContent = meta;
  }

  function renderSummary(items) {
    const reviewed = items.filter((bet) => reviewFor(bet).reviewed);
    const confidenceBets = items.filter((bet) => reviewFor(bet).confidence !== null);
    const graded = items.filter((bet) => reviewFor(bet).processGrade);
    const mistakeBets = items.filter((bet) => {
      const mistake = reviewFor(bet).mistakeType;
      return mistake && mistake !== "none";
    });
    const coverage = items.length ? (reviewed.length / items.length) * 100 : 0;
    const averageConfidence = confidenceBets.length
      ? confidenceBets.reduce((sum, bet) => sum + reviewFor(bet).confidence, 0) / confidenceBets.length
      : null;
    const goodCount = graded.filter((bet) => reviewFor(bet).processGrade === "good").length;
    const goodRate = graded.length ? (goodCount / graded.length) * 100 : null;
    const mistakeCounts = new Map();
    mistakeBets.forEach((bet) => {
      const key = reviewFor(bet).mistakeType;
      mistakeCounts.set(key, (mistakeCounts.get(key) || 0) + 1);
    });
    const topMistake = [...mistakeCounts.entries()].sort((a, b) => b[1] - a[1])[0];

    setMetric("reviewCoverage", `${coverage.toFixed(1)}%`, `${reviewed.length} of ${items.length} settled bet${items.length === 1 ? "" : "s"} reviewed`, coverage - 50);
    setMetric("reviewAverageConfidence", averageConfidence === null ? "—" : `${averageConfidence.toFixed(2)}/5`, confidenceBets.length ? `${confidenceBets.length} confidence score${confidenceBets.length === 1 ? "" : "s"}` : "No confidence scores");
    setMetric("reviewGoodRate", goodRate === null ? "—" : `${goodRate.toFixed(1)}%`, graded.length ? `${goodCount} of ${graded.length} graded decisions` : "No graded decisions", goodRate === null ? null : goodRate - 50);
    setMetric("reviewMistakeCount", String(mistakeBets.length), topMistake ? `${MISTAKE_LABELS[topMistake[0]] || topMistake[0]} appears ${topMistake[1]} time${topMistake[1] === 1 ? "" : "s"}` : "No recurring mistake yet", mistakeBets.length ? -1 : 0);
  }

  function renderConfidence(items) {
    const body = document.querySelector("#reviewConfidenceBody");
    if (!body) return;
    const rows = [1, 2, 3, 4, 5].map((confidence) => {
      const group = items.filter((bet) => reviewFor(bet).confidence === confidence);
      const stake = group.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
      const pl = group.reduce((sum, bet) => sum + Number(profitLoss(bet) || 0), 0);
      const wins = group.filter((bet) => ["win", "half-win"].includes(bet.status)).length;
      const clvValues = group.map(clvFor).filter(Number.isFinite);
      return {
        confidence,
        count: group.length,
        winRate: group.length ? (wins / group.length) * 100 : 0,
        averageOdds: group.length ? group.reduce((sum, bet) => sum + Number(bet.odds || 0), 0) / group.length : 0,
        stake,
        pl,
        roi: stake ? (pl / stake) * 100 : 0,
        averageClv: clvValues.length ? clvValues.reduce((sum, value) => sum + value, 0) / clvValues.length : null
      };
    }).filter((row) => row.count);

    if (!rows.length) {
      body.innerHTML = '<tr><td class="review-empty" colspan="7">Add confidence scores to settled bets to build calibration data.</td></tr>';
      return;
    }
    body.innerHTML = rows.map((row) => `<tr>
      <td><strong>${row.confidence}/5</strong></td>
      <td>${row.count}</td>
      <td>${row.winRate.toFixed(1)}%</td>
      <td>${row.averageOdds.toFixed(2)}</td>
      <td class="${toneClass(row.pl)}"><strong>${formatUnits(row.pl, true)}</strong></td>
      <td class="${toneClass(row.roi, .05)}">${row.roi >= 0 ? "+" : ""}${row.roi.toFixed(1)}%</td>
      <td class="${row.averageClv === null ? "neutral-text" : toneClass(row.averageClv, .05)}">${formatClv(row.averageClv)}</td>
    </tr>`).join("");
  }

  function renderGrades(items) {
    const body = document.querySelector("#reviewGradeBody");
    const mistakeList = document.querySelector("#reviewMistakeList");
    if (!body || !mistakeList) return;
    const order = ["good", "mixed", "poor", "unreviewed"];
    const rows = order.map((grade) => {
      const group = items.filter((bet) => (reviewFor(bet).processGrade || "unreviewed") === grade);
      const stake = group.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
      const pl = group.reduce((sum, bet) => sum + Number(profitLoss(bet) || 0), 0);
      const wins = group.filter((bet) => ["win", "half-win"].includes(bet.status)).length;
      return { grade, count: group.length, winRate: group.length ? (wins / group.length) * 100 : 0, stake, pl, roi: stake ? (pl / stake) * 100 : 0 };
    }).filter((row) => row.count);

    if (!rows.length) {
      body.innerHTML = '<tr><td class="review-empty" colspan="5">No settled bets in this period.</td></tr>';
    } else {
      body.innerHTML = rows.map((row) => `<tr>
        <td><span class="review-grade-pill review-grade-pill--${row.grade}">${GRADE_LABELS[row.grade]}</span></td>
        <td>${row.count}</td>
        <td>${row.winRate.toFixed(1)}%</td>
        <td class="${toneClass(row.pl)}"><strong>${formatUnits(row.pl, true)}</strong></td>
        <td class="${toneClass(row.roi, .05)}">${row.roi >= 0 ? "+" : ""}${row.roi.toFixed(1)}%</td>
      </tr>`).join("");
    }

    const counts = new Map();
    items.forEach((bet) => {
      const mistake = reviewFor(bet).mistakeType;
      if (!mistake || mistake === "none") return;
      counts.set(mistake, (counts.get(mistake) || 0) + 1);
    });
    const mistakes = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    mistakeList.innerHTML = mistakes.length
      ? mistakes.map(([key, count]) => `<div class="review-mistake-item"><span>${escapeHtml(MISTAKE_LABELS[key] || key)}</span><strong>${count}</strong></div>`).join("")
      : '<div class="review-empty">No mistakes have been flagged in this period.</div>';
  }

  function renderReviewAnalytics() {
    if (!ensurePanel()) return;
    const items = selectedSettled();
    renderSummary(items);
    renderConfidence(items);
    renderGrades(items);
  }

  const previousRenderAnalytics = typeof renderAnalytics === "function" ? renderAnalytics : () => {};
  renderAnalytics = function reviewAwareAnalytics(...args) {
    const result = previousRenderAnalytics(...args);
    renderReviewAnalytics();
    return result;
  };

  document.querySelector("#analyticsPeriod")?.addEventListener("change", renderReviewAnalytics);
  globalThis.renderEdgeLogReviewAnalytics = renderReviewAnalytics;
  renderReviewAnalytics();
})();