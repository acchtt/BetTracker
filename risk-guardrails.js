(() => {
  if (globalThis.__edgeLogRiskGuardrails || typeof bets === "undefined") return;
  globalThis.__edgeLogRiskGuardrails = true;

  const TRANSACTION_KEY = "edgelog-bankroll-transactions-v1";
  const DEFAULTS = {
    riskWarningsEnabled: true,
    riskMaxStakeUnits: 2,
    riskMaxExposurePct: 25,
    riskDailyLossUnits: 3
  };

  let initializedSettings = false;
  Object.entries(DEFAULTS).forEach(([key, value]) => {
    if (settings[key] === undefined || settings[key] === null || settings[key] === "") {
      settings[key] = value;
      initializedSettings = true;
    }
  });
  if (initializedSettings && typeof persist === "function") persist();

  const style = document.createElement("style");
  style.textContent = `
    .risk-status {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      min-height: 34px;
      padding: 7px 10px;
      border: 1px solid var(--line);
      border-radius: 10px;
      background: var(--panel);
      color: var(--muted);
      font-size: .75rem;
      font-weight: 780;
      white-space: nowrap;
    }
    .risk-status::before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--green);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--green) 14%, transparent);
    }
    .risk-status[data-state="warning"]::before {
      background: var(--amber);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--amber) 14%, transparent);
    }
    .risk-status[data-state="alert"] {
      border-color: color-mix(in srgb, var(--red) 32%, var(--line));
      color: var(--red);
    }
    .risk-status[data-state="alert"]::before {
      background: var(--red);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--red) 14%, transparent);
    }
    .risk-dashboard-panel {
      margin-bottom: 16px;
      padding: 20px 22px;
    }
    .risk-dashboard-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 15px;
    }
    .risk-dashboard-heading h2 { margin: 3px 0 0; }
    .risk-dashboard-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 11px;
    }
    .risk-dashboard-metric {
      min-width: 0;
      padding: 14px 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
    }
    .risk-dashboard-metric span {
      display: block;
      color: var(--muted);
      font-size: .66rem;
      font-weight: 820;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .risk-dashboard-metric strong {
      display: block;
      margin-top: 8px;
      overflow: hidden;
      font-size: 1.04rem;
      letter-spacing: -.025em;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .risk-dashboard-metric small {
      display: block;
      margin-top: 5px;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.4;
    }
    .risk-settings-panel {
      margin-top: 12px;
      padding: 21px 22px;
      scroll-margin-top: 18px;
    }
    .risk-settings-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 16px;
    }
    .risk-setting-card {
      display: grid;
      gap: 8px;
      padding: 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
    }
    .risk-setting-card span {
      color: var(--text);
      font-size: .79rem;
      font-weight: 800;
    }
    .risk-setting-card small {
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.45;
    }
    .risk-setting-input {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .risk-setting-input input {
      width: 100%;
      min-width: 0;
    }
    .risk-setting-input em {
      color: var(--muted);
      font-size: .74rem;
      font-style: normal;
      font-weight: 760;
      white-space: nowrap;
    }
    .risk-warning-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-top: 15px;
      padding: 14px 15px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--panel-soft);
    }
    .risk-warning-toggle strong { display: block; font-size: .82rem; }
    .risk-warning-toggle small {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.45;
    }
    .risk-warning-toggle input { width: 18px; height: 18px; }
    .risk-settings-note {
      margin: 13px 0 0;
      color: var(--muted);
      font-size: .72rem;
      line-height: 1.5;
    }
    @media (max-width: 1100px) {
      .risk-dashboard-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .risk-settings-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 700px) {
      .risk-status { display: none; }
      .risk-dashboard-panel,
      .risk-settings-panel { padding: 17px; }
      .risk-dashboard-heading { flex-direction: column; }
      .risk-dashboard-grid { grid-template-columns: 1fr; }
      .risk-warning-toggle { align-items: flex-start; }
    }
  `;
  document.head.append(style);

  function unitValue() {
    return Math.max(1, Number(settings.unitVnd || 500000));
  }

  function limitValue(key) {
    return Math.max(0, Number(settings[key] ?? DEFAULTS[key]) || 0);
  }

  function cashAdjustment() {
    try {
      const items = JSON.parse(localStorage.getItem(TRANSACTION_KEY));
      if (!Array.isArray(items)) return 0;
      return items.reduce((sum, item) => {
        const amount = Math.max(0, Number(item?.amountVnd || 0));
        return sum + (item?.type === "withdrawal" ? -amount : amount);
      }, 0);
    } catch {
      return 0;
    }
  }

  function settledNet() {
    return bets.filter((bet) => bet.status !== "pending").reduce((sum, bet) => sum + Number(profitLoss(bet) || 0), 0);
  }

  function currentBankroll() {
    return Number(settings.startingBankroll || 0) + cashAdjustment() + settledNet();
  }

  function pendingExposure(excludeId = "") {
    return bets.reduce((sum, bet) => {
      if (bet.status !== "pending" || (excludeId && bet.id === excludeId)) return sum;
      return sum + Number(bet.stakeVnd || 0);
    }, 0);
  }

  function largestPendingStake() {
    return bets.filter((bet) => bet.status === "pending").reduce((largest, bet) => Math.max(largest, Number(bet.stakeVnd || 0)), 0);
  }

  function sameLocalDay(value, today = new Date()) {
    if (!value) return false;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return false;
    return date.getFullYear() === today.getFullYear()
      && date.getMonth() === today.getMonth()
      && date.getDate() === today.getDate();
  }

  function dailyPl(today = new Date()) {
    return bets.reduce((sum, bet) => {
      if (bet.status === "pending") return sum;
      const dateValue = bet.settledAt || bet.eventDate;
      return sameLocalDay(dateValue, today) ? sum + Number(profitLoss(bet) || 0) : sum;
    }, 0);
  }

  function formatPercent(value) {
    if (!Number.isFinite(value)) return "—";
    return `${value.toFixed(1)}%`;
  }

  function riskSnapshot() {
    const unit = unitValue();
    const bankroll = currentBankroll();
    const pending = pendingExposure();
    const largest = largestPendingStake();
    const todayPl = dailyPl();
    const maxStakeUnits = limitValue("riskMaxStakeUnits");
    const maxExposurePct = limitValue("riskMaxExposurePct");
    const dailyLossUnits = limitValue("riskDailyLossUnits");
    const exposurePct = bankroll > 0 ? (pending / bankroll) * 100 : null;
    const largestUnits = largest / unit;
    const dailyLossUsedUnits = Math.max(0, -todayPl / unit);
    const alerts = [];
    const warnings = [];

    if (maxStakeUnits > 0 && largestUnits > maxStakeUnits) alerts.push("largest pending stake");
    else if (maxStakeUnits > 0 && largestUnits >= maxStakeUnits * .8) warnings.push("largest pending stake");

    if (maxExposurePct > 0 && exposurePct !== null && exposurePct > maxExposurePct) alerts.push("pending exposure");
    else if (maxExposurePct > 0 && exposurePct !== null && exposurePct >= maxExposurePct * .8) warnings.push("pending exposure");

    if (dailyLossUnits > 0 && dailyLossUsedUnits >= dailyLossUnits) alerts.push("daily loss stop");
    else if (dailyLossUnits > 0 && dailyLossUsedUnits >= dailyLossUnits * .8) warnings.push("daily loss stop");

    return {
      unit,
      bankroll,
      pending,
      exposurePct,
      largest,
      largestUnits,
      todayPl,
      dailyLossUsedUnits,
      maxStakeUnits,
      maxExposurePct,
      dailyLossUnits,
      alerts,
      warnings
    };
  }

  function assessBet(candidate = {}, existing = null) {
    if (settings.riskWarningsEnabled === false || candidate.status !== "pending") return [];
    const snapshot = riskSnapshot();
    const stake = Math.max(0, Number(candidate.stakeVnd || 0));
    const stakeUnits = stake / snapshot.unit;
    const projectedPending = pendingExposure(existing?.id || "") + stake;
    const projectedExposurePct = snapshot.bankroll > 0 ? (projectedPending / snapshot.bankroll) * 100 : null;
    const messages = [];

    if (snapshot.maxStakeUnits > 0 && stakeUnits > snapshot.maxStakeUnits) {
      messages.push(`Stake ${stakeUnits.toFixed(3)}u exceeds the ${snapshot.maxStakeUnits.toFixed(3)}u per-bet limit.`);
    }
    if (snapshot.maxExposurePct > 0 && projectedExposurePct !== null && projectedExposurePct > snapshot.maxExposurePct) {
      messages.push(`Pending exposure would become ${projectedExposurePct.toFixed(1)}%, above the ${snapshot.maxExposurePct.toFixed(1)}% bankroll limit.`);
    }
    if (snapshot.dailyLossUnits > 0 && snapshot.dailyLossUsedUnits >= snapshot.dailyLossUnits) {
      messages.push(`Today's settled loss has reached ${snapshot.dailyLossUsedUnits.toFixed(3)}u, meeting the ${snapshot.dailyLossUnits.toFixed(3)}u daily stop.`);
    }
    return messages;
  }

  function confirmBet(candidate, existing = null) {
    const messages = assessBet(candidate, existing);
    if (!messages.length) return true;
    return window.confirm(`Risk guardrail warning:\n\n${messages.map((message) => `• ${message}`).join("\n")}\n\nSave this pending bet anyway?`);
  }

  globalThis.EdgeLogRisk = {
    riskSnapshot,
    assessBet,
    confirmBet,
    dailyPl,
    currentBankroll,
    pendingExposure
  };

  function ensureRiskStatus() {
    let element = document.querySelector(".risk-status");
    if (element) return element;
    const actions = document.querySelector(".topbar-actions");
    if (!actions) return null;
    element = document.createElement("button");
    element.type = "button";
    element.className = "risk-status";
    element.title = "Open risk guardrail settings";
    element.addEventListener("click", () => {
      location.href = "settings.html#risk-guardrails";
    });
    actions.prepend(element);
    return element;
  }

  function ensureDashboardPanel() {
    const shell = document.querySelector(".dashboard-shell");
    if (!shell) return null;
    let panel = document.querySelector("#riskDashboardPanel");
    if (panel) return panel;
    panel = document.createElement("section");
    panel.id = "riskDashboardPanel";
    panel.className = "panel risk-dashboard-panel";
    panel.innerHTML = `
      <div class="risk-dashboard-heading">
        <div>
          <p class="panel-kicker">RISK DISCIPLINE</p>
          <h2>Guardrail status</h2>
          <p class="panel-copy">Warnings compare open exposure and today's settled results with your configured limits.</p>
        </div>
        <a class="button secondary" href="settings.html#risk-guardrails">Configure limits</a>
      </div>
      <div class="risk-dashboard-grid">
        <div class="risk-dashboard-metric"><span>Status</span><strong id="riskDashboardStatus">Within limits</strong><small id="riskDashboardStatusMeta">No active guardrail alerts</small></div>
        <div class="risk-dashboard-metric"><span>Largest pending stake</span><strong id="riskDashboardLargest">0.000u</strong><small id="riskDashboardLargestMeta">Limit 2.000u</small></div>
        <div class="risk-dashboard-metric"><span>Pending exposure</span><strong id="riskDashboardExposure">—</strong><small id="riskDashboardExposureMeta">Set a starting bankroll to calculate</small></div>
        <div class="risk-dashboard-metric"><span>Today's settled P/L</span><strong id="riskDashboardDaily">0.000u</strong><small id="riskDashboardDailyMeta">Daily loss limit 3.000u</small></div>
      </div>`;
    const summary = shell.querySelector(".summary-grid");
    if (summary?.nextSibling) shell.insertBefore(panel, summary.nextSibling);
    else shell.prepend(panel);
    return panel;
  }

  function ensureSettingsPanel() {
    const shell = document.querySelector("main.app-shell");
    if (!shell || !location.pathname.endsWith("settings.html")) return null;
    let panel = document.querySelector("#risk-guardrails");
    if (panel) return panel;
    panel = document.createElement("section");
    panel.id = "risk-guardrails";
    panel.className = "panel risk-settings-panel";
    panel.innerHTML = `
      <div class="panel-heading">
        <div>
          <p class="panel-kicker">RISK GUARDRAILS</p>
          <h2>Stake, exposure, and daily-loss warnings</h2>
          <p class="panel-copy">These limits create warnings before a pending bet is saved. EdgeLog never places bets or blocks access to your data.</p>
        </div>
      </div>
      <div class="risk-settings-grid">
        <label class="risk-setting-card">
          <span>Maximum stake per bet</span>
          <div class="risk-setting-input"><input id="riskMaxStakeUnits" type="number" min="0" step="0.1"><em>units</em></div>
          <small>Warn when one pending bet exceeds this many units.</small>
        </label>
        <label class="risk-setting-card">
          <span>Maximum pending exposure</span>
          <div class="risk-setting-input"><input id="riskMaxExposurePct" type="number" min="0" step="1"><em>% bankroll</em></div>
          <small>Uses starting bankroll, cash adjustments, and settled P/L.</small>
        </label>
        <label class="risk-setting-card">
          <span>Daily loss limit</span>
          <div class="risk-setting-input"><input id="riskDailyLossUnits" type="number" min="0" step="0.1"><em>units</em></div>
          <small>Warn before another pending entry once today's settled loss reaches this amount.</small>
        </label>
      </div>
      <label class="risk-warning-toggle">
        <span><strong>Warn before saving limit-breaking bets</strong><small>Warnings require confirmation but remain non-blocking. Set an individual value to 0 to disable that limit.</small></span>
        <input id="riskWarningsEnabled" type="checkbox">
      </label>
      <p class="risk-settings-note">Daily P/L uses each bet's settlement timestamp, falling back to the event date when a settlement time is unavailable.</p>`;
    const settlementPanel = [...shell.querySelectorAll(".panel")].find((item) => item.textContent.includes("SETTLEMENT RULES"));
    if (settlementPanel) shell.insertBefore(panel, settlementPanel);
    else shell.append(panel);

    ["riskMaxStakeUnits", "riskMaxExposurePct", "riskDailyLossUnits"].forEach((id) => {
      panel.querySelector(`#${id}`)?.addEventListener("change", (event) => {
        settings[id] = Math.max(0, Number(event.target.value) || 0);
        persist();
        renderRisk();
      });
    });
    panel.querySelector("#riskWarningsEnabled")?.addEventListener("change", (event) => {
      settings.riskWarningsEnabled = Boolean(event.target.checked);
      persist();
      renderRisk();
    });
    if (location.hash === "#risk-guardrails") requestAnimationFrame(() => panel.scrollIntoView({ behavior: "smooth", block: "start" }));
    return panel;
  }

  function setText(id, value, tone = null) {
    const element = document.querySelector(`#${id}`);
    if (!element) return;
    element.textContent = value;
    if (tone !== null) {
      element.classList.toggle("positive", tone > 0);
      element.classList.toggle("negative", tone < 0);
      element.classList.toggle("neutral-text", tone === 0);
    }
  }

  function renderRisk() {
    const snapshot = riskSnapshot();
    const status = ensureRiskStatus();
    if (status) {
      status.dataset.state = snapshot.alerts.length ? "alert" : snapshot.warnings.length ? "warning" : "ok";
      status.textContent = snapshot.alerts.length
        ? `Risk: ${snapshot.alerts.length} alert${snapshot.alerts.length === 1 ? "" : "s"}`
        : snapshot.warnings.length ? "Risk near limit" : "Risk within limits";
    }

    ensureDashboardPanel();
    const stateLabel = snapshot.alerts.length ? "Limit exceeded" : snapshot.warnings.length ? "Approaching limit" : "Within limits";
    setText("riskDashboardStatus", stateLabel, snapshot.alerts.length ? -1 : snapshot.warnings.length ? 0 : 1);
    setText("riskDashboardStatusMeta", snapshot.alerts.length
      ? snapshot.alerts.join(" · ")
      : snapshot.warnings.length ? snapshot.warnings.join(" · ") : "No active guardrail alerts");
    setText("riskDashboardLargest", `${snapshot.largestUnits.toFixed(3)}u`, snapshot.maxStakeUnits > 0 && snapshot.largestUnits > snapshot.maxStakeUnits ? -1 : 0);
    setText("riskDashboardLargestMeta", snapshot.maxStakeUnits > 0 ? `Limit ${snapshot.maxStakeUnits.toFixed(3)}u` : "Per-bet limit disabled");
    setText("riskDashboardExposure", snapshot.exposurePct === null ? "—" : formatPercent(snapshot.exposurePct), snapshot.exposurePct !== null && snapshot.maxExposurePct > 0 && snapshot.exposurePct > snapshot.maxExposurePct ? -1 : 0);
    setText("riskDashboardExposureMeta", snapshot.bankroll > 0
      ? `${formatVnd(snapshot.pending)} pending · limit ${snapshot.maxExposurePct ? `${snapshot.maxExposurePct.toFixed(1)}%` : "disabled"}`
      : "Set a positive bankroll to calculate");
    setText("riskDashboardDaily", formatUnits(snapshot.todayPl, true), snapshot.todayPl);
    const dailyRemaining = snapshot.dailyLossUnits > 0 ? Math.max(0, snapshot.dailyLossUnits - snapshot.dailyLossUsedUnits) : null;
    setText("riskDashboardDailyMeta", dailyRemaining === null ? "Daily loss limit disabled" : `${dailyRemaining.toFixed(3)}u loss capacity remaining`);

    const panel = ensureSettingsPanel();
    if (panel) {
      const maxStake = panel.querySelector("#riskMaxStakeUnits");
      const maxExposure = panel.querySelector("#riskMaxExposurePct");
      const dailyLimit = panel.querySelector("#riskDailyLossUnits");
      const enabled = panel.querySelector("#riskWarningsEnabled");
      if (maxStake && document.activeElement !== maxStake) maxStake.value = snapshot.maxStakeUnits;
      if (maxExposure && document.activeElement !== maxExposure) maxExposure.value = snapshot.maxExposurePct;
      if (dailyLimit && document.activeElement !== dailyLimit) dailyLimit.value = snapshot.dailyLossUnits;
      if (enabled) enabled.checked = settings.riskWarningsEnabled !== false;
    }

    dispatchEvent(new CustomEvent("edgelog:risk-updated", { detail: snapshot }));
  }

  document.addEventListener("submit", (event) => {
    if (event.target?.id !== "manualForm") return;
    const field = (id) => event.target.querySelector(`#${id}`);
    const existing = bets.find((bet) => bet.id === field("editingId")?.value) || null;
    const candidate = {
      status: field("statusField")?.value || "pending",
      stakeVnd: Number(field("stakeField")?.value || 0)
    };
    if (confirmBet(candidate, existing)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);

  document.addEventListener("click", (event) => {
    const button = event.target.closest("#addDetectedBtn");
    if (!button || !detectedBet) return;
    if (confirmBet(detectedBet)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);

  const previousRender = typeof render === "function" ? render : () => {};
  render = function riskAwareRender(...args) {
    const result = previousRender(...args);
    renderRisk();
    return result;
  };

  addEventListener("storage", (event) => {
    if (![STORAGE_KEY, SETTINGS_KEY, TRANSACTION_KEY].includes(event.key)) return;
    renderRisk();
  });
  addEventListener("edgelog:backup-restored", renderRisk);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) renderRisk(); });
  setInterval(renderRisk, 60_000);

  renderRisk();
})();