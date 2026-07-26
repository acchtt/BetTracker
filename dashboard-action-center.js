(() => {
  if (globalThis.__edgeLogActionCenter || typeof bets === "undefined") return;
  globalThis.__edgeLogActionCenter = true;

  const STALE_AFTER_MS = 6 * 60 * 60 * 1000;

  const style = document.createElement("style");
  style.textContent = `
    .action-center-panel {
      margin-bottom: 16px;
      padding: 20px 22px;
    }
    .action-center-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 15px;
    }
    .action-center-heading h2 { margin: 3px 0 0; }
    .action-center-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 11px;
    }
    .action-center-card {
      display: block;
      min-width: 0;
      padding: 14px 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
      color: inherit;
      text-decoration: none;
      transition: transform .16s ease, border-color .16s ease;
    }
    .action-center-card:hover {
      border-color: color-mix(in srgb, var(--blue) 34%, var(--line));
      transform: translateY(-1px);
    }
    .action-center-card span {
      display: block;
      color: var(--muted);
      font-size: .66rem;
      font-weight: 820;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .action-center-card strong {
      display: block;
      margin-top: 8px;
      font-size: 1.08rem;
      letter-spacing: -.025em;
    }
    .action-center-card small {
      display: block;
      margin-top: 5px;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.4;
    }
    .action-center-card--alert strong { color: var(--red); }
    .action-center-card--warning strong { color: var(--amber); }
    .action-center-list {
      display: grid;
      gap: 8px;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid var(--line);
    }
    .action-center-item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 14px;
      padding: 11px 12px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: var(--panel);
    }
    .action-center-item strong {
      display: block;
      overflow: hidden;
      font-size: .8rem;
      line-height: 1.35;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .action-center-item small {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: .7rem;
      line-height: 1.4;
    }
    .action-center-reasons {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .action-center-reason {
      display: inline-flex;
      align-items: center;
      min-height: 22px;
      padding: 3px 7px;
      border-radius: 999px;
      background: var(--blue-soft);
      color: var(--blue);
      font-size: .63rem;
      font-weight: 800;
    }
    .action-center-reason--alert { background: var(--red-soft); color: var(--red); }
    .action-center-reason--warning { background: color-mix(in srgb, var(--amber) 12%, var(--panel)); color: var(--amber); }
    .action-center-item .button { min-height: 32px; padding: 7px 10px; }
    .action-center-empty {
      padding: 18px;
      color: var(--muted);
      font-size: .78rem;
      text-align: center;
    }
    .attention-filter-field { min-width: 164px; }
    @media (max-width: 1100px) {
      .action-center-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 700px) {
      .action-center-panel { padding: 17px; }
      .action-center-heading { flex-direction: column; }
      .action-center-grid { grid-template-columns: 1fr; }
      .action-center-item { grid-template-columns: 1fr; }
      .action-center-item .button { width: 100%; }
      .attention-filter-field { width: 100%; min-width: 0; }
    }
  `;
  document.head.append(style);

  function reviewFor(bet = {}) {
    if (globalThis.EdgeLogReview?.reviewFor) return globalThis.EdgeLogReview.reviewFor(bet);
    const processGrade = String(bet.processGrade || "").trim();
    const mistakeType = String(bet.mistakeType || "").trim();
    const postReview = String(bet.postReview || "").trim();
    return { reviewed: Boolean(processGrade || postReview || (mistakeType && mistakeType !== "none")) };
  }

  function validClosingOdds(bet) {
    const odds = Number(bet?.closingOdds || 0);
    return Number.isFinite(odds) && odds > 1;
  }

  function isStalePending(bet, now = Date.now()) {
    if (bet?.status !== "pending" || !bet.eventDate) return false;
    const timestamp = Date.parse(bet.eventDate);
    return Number.isFinite(timestamp) && timestamp <= now - STALE_AFTER_MS;
  }

  function needsReview(bet) {
    return bet?.status !== "pending" && !reviewFor(bet).reviewed;
  }

  function needsClosingOdds(bet) {
    return bet?.status !== "pending" && !validClosingOdds(bet);
  }

  function counts() {
    return {
      pending: bets.filter((bet) => bet.status === "pending").length,
      stale: bets.filter((bet) => isStalePending(bet)).length,
      review: bets.filter(needsReview).length,
      clv: bets.filter(needsClosingOdds).length
    };
  }

  function ensureAttentionFilter() {
    const filters = document.querySelector(".filters");
    if (!filters || document.querySelector("#attentionFilter")) return;
    const reset = document.querySelector("#resetFilters");
    const label = document.createElement("label");
    label.className = "filter-field attention-filter-field";
    label.innerHTML = `<select id="attentionFilter" aria-label="Filter bets requiring attention">
      <option value="all">All attention states</option>
      <option value="pending">Pending bets</option>
      <option value="stale">Needs settlement</option>
      <option value="review">Needs review</option>
      <option value="clv">Missing closing odds</option>
    </select>`;
    filters.insertBefore(label, reset || null);
    label.querySelector("select").addEventListener("change", renderTables);
    reset?.addEventListener("click", () => {
      const select = document.querySelector("#attentionFilter");
      if (select) select.value = "all";
      renderTables();
    });
  }

  function attentionMatches(bet, mode) {
    if (mode === "pending") return bet.status === "pending";
    if (mode === "stale") return isStalePending(bet);
    if (mode === "review") return needsReview(bet);
    if (mode === "clv") return needsClosingOdds(bet);
    return true;
  }

  function applyAttentionFilter() {
    const body = document.querySelector("#betsTableBody");
    if (!body) return;
    const mode = document.querySelector("#attentionFilter")?.value || "all";
    [...body.querySelectorAll("tr")].forEach((row) => {
      if (row.hidden) return;
      const id = row.querySelector("[data-id]")?.dataset.id;
      const bet = bets.find((item) => item.id === id);
      if (!bet || !attentionMatches(bet, mode)) row.hidden = true;
    });
  }

  if (typeof renderTables === "function") {
    const previousRenderTables = renderTables;
    renderTables = function attentionAwareTables(...args) {
      const result = previousRenderTables(...args);
      ensureAttentionFilter();
      applyAttentionFilter();
      return result;
    };
  }

  function taskItems() {
    return bets.map((bet, index) => {
      const reasons = [];
      if (isStalePending(bet)) reasons.push({ label: "Needs settlement", tone: "alert" });
      if (needsReview(bet)) reasons.push({ label: "Needs review", tone: "warning" });
      if (needsClosingOdds(bet)) reasons.push({ label: "Closing odds missing", tone: "" });
      if (!reasons.length) return null;
      return {
        bet,
        reasons,
        priority: isStalePending(bet) ? 0 : needsReview(bet) ? 1 : 2,
        index
      };
    }).filter(Boolean).sort((a, b) => a.priority - b.priority || a.index - b.index).slice(0, 6);
  }

  function taskMeta(bet) {
    if (isStalePending(bet)) {
      const hours = Math.max(0, Math.floor((Date.now() - Date.parse(bet.eventDate)) / 3600000));
      return `Event started about ${hours}h ago · ${formatUnits(bet.stakeVnd)} pending`;
    }
    if (bet.settledAt || bet.eventDate) return `Settled entry · ${formatDate(bet.settledAt || bet.eventDate)}`;
    return `${statusLabel(bet.status)} · ${formatUnits(profitLoss(bet), true)}`;
  }

  function ensureDashboardPanel() {
    const shell = document.querySelector(".dashboard-shell");
    if (!shell) return null;
    let panel = document.querySelector("#dashboardActionCenter");
    if (panel) return panel;
    panel = document.createElement("section");
    panel.id = "dashboardActionCenter";
    panel.className = "panel action-center-panel";
    panel.innerHTML = `<div class="action-center-heading"><div><p class="panel-kicker">ACTION CENTER</p><h2>Items that need attention</h2><p class="panel-copy">Settle completed events, review decisions, and complete missing closing-line data.</p></div><a class="button secondary" href="bets.html">Open bet history</a></div><div id="actionCenterGrid" class="action-center-grid"></div><div id="actionCenterList" class="action-center-list"></div>`;
    const anchor = document.querySelector("#riskDashboardPanel") || shell.querySelector(".summary-grid");
    if (anchor?.nextSibling) shell.insertBefore(panel, anchor.nextSibling);
    else shell.prepend(panel);
    return panel;
  }

  function renderDashboardPanel() {
    const panel = ensureDashboardPanel();
    if (!panel) return;
    const summary = counts();
    const grid = panel.querySelector("#actionCenterGrid");
    grid.innerHTML = `
      <a class="action-center-card" href="bets.html?attention=pending"><span>Pending bets</span><strong>${summary.pending}</strong><small>Open entries awaiting a result</small></a>
      <a class="action-center-card ${summary.stale ? "action-center-card--alert" : ""}" href="bets.html?attention=stale"><span>Needs settlement</span><strong>${summary.stale}</strong><small>Events pending more than six hours after start</small></a>
      <a class="action-center-card ${summary.review ? "action-center-card--warning" : ""}" href="bets.html?attention=review"><span>Needs review</span><strong>${summary.review}</strong><small>Settled bets without a process review</small></a>
      <a class="action-center-card" href="bets.html?attention=clv"><span>Missing closing odds</span><strong>${summary.clv}</strong><small>Settled bets without closing-line data</small></a>`;

    const list = panel.querySelector("#actionCenterList");
    const tasks = taskItems();
    list.innerHTML = tasks.length ? tasks.map(({ bet, reasons }) => `<div class="action-center-item"><div><strong>${escapeHtml(bet.event)} — ${escapeHtml(bet.bet)}</strong><small>${escapeHtml(taskMeta(bet))}</small><div class="action-center-reasons">${reasons.map((reason) => `<span class="action-center-reason ${reason.tone ? `action-center-reason--${reason.tone}` : ""}">${escapeHtml(reason.label)}</span>`).join("")}</div></div><a class="button secondary" href="bets.html?edit=${encodeURIComponent(bet.id)}">Open</a></div>`).join("") : '<div class="action-center-empty">Nothing needs attention right now.</div>';
  }

  const previousRender = typeof render === "function" ? render : () => {};
  render = function actionCenterRender(...args) {
    const result = previousRender(...args);
    renderDashboardPanel();
    return result;
  };

  function applyQueryActions() {
    const params = new URLSearchParams(location.search);
    const attention = params.get("attention");
    const editId = params.get("edit");
    let changed = false;

    if (attention && ["pending", "stale", "review", "clv"].includes(attention)) {
      ensureAttentionFilter();
      const select = document.querySelector("#attentionFilter");
      if (select) {
        select.value = attention;
        renderTables();
        changed = true;
      }
    }

    if (editId && globalThis.openEdgeLogManualBet) {
      const bet = bets.find((item) => item.id === editId);
      if (bet) {
        globalThis.openEdgeLogManualBet(bet);
        changed = true;
      }
    }

    if (changed) {
      params.delete("attention");
      params.delete("edit");
      const next = `${location.pathname}${params.toString() ? `?${params}` : ""}${location.hash}`;
      history.replaceState({}, "", next);
    }
  }

  ensureAttentionFilter();
  renderDashboardPanel();
  setTimeout(applyQueryActions, 80);
})();