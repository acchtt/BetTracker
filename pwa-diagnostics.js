(() => {
  if (globalThis.__slipTracePwaDiagnostics) return;
  globalThis.__slipTracePwaDiagnostics = true;

  const REQUIRED_PAGES = [
    "index.html",
    "bets.html",
    "analytics.html",
    "calendar.html",
    "reports.html",
    "bankroll.html",
    "settings.html",
    "help.html"
  ];

  const style = document.createElement("style");
  style.textContent = `
    .pwa-diagnostics{margin-top:12px}.pwa-diagnostics__top{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.pwa-diagnostics__summary{margin-top:14px;padding:12px 14px;border:1px solid var(--line);border-radius:13px;background:var(--panel-soft);font-size:.82rem;font-weight:750}.pwa-diagnostics__summary.pass{color:var(--green)}.pwa-diagnostics__summary.warn{color:var(--amber)}.pwa-diagnostics__summary.fail{color:var(--red)}.pwa-diagnostics__list{display:grid;gap:8px;margin-top:12px}.pwa-diagnostics__item{display:grid;grid-template-columns:82px minmax(0,1fr);gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:var(--panel)}.pwa-diagnostics__badge{font-size:.72rem;font-weight:850;text-transform:uppercase}.pwa-diagnostics__item.pass .pwa-diagnostics__badge{color:var(--green)}.pwa-diagnostics__item.warn .pwa-diagnostics__badge{color:var(--amber)}.pwa-diagnostics__item.fail .pwa-diagnostics__badge{color:var(--red)}.pwa-diagnostics__copy strong{display:block;font-size:.82rem}.pwa-diagnostics__copy small{display:block;margin-top:3px;color:var(--muted);line-height:1.45}@media(max-width:640px){.pwa-diagnostics__top{display:grid}.pwa-diagnostics__item{grid-template-columns:68px minmax(0,1fr)}}
  `;
  document.head.append(style);

  function result(level, name, detail) {
    return { level, name, detail };
  }

  function withTimeout(promise, milliseconds, message) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error(message)), milliseconds))
    ]);
  }

  async function findSlipTraceCache() {
    if (!("caches" in globalThis)) return null;
    const keys = await caches.keys();
    const name = keys.filter((key) => key.startsWith("sliptrace-shell-")).sort().at(-1);
    return name ? caches.open(name) : null;
  }

  async function runDiagnostics() {
    const checks = [];
    checks.push(result(isSecureContext ? "pass" : "fail", "Secure context", isSecureContext ? "HTTPS security requirements are available." : "PWA installation requires HTTPS or localhost."));

    try {
      const response = await fetch("manifest.webmanifest", { cache: "no-store" });
      const manifest = await response.json();
      const iconSizes = (manifest.icons || []).map((icon) => icon.sizes).join(", ");
      checks.push(result(response.ok && manifest.short_name === "SlipTrace" ? "pass" : "fail", "Web app manifest", response.ok ? `${manifest.name || manifest.short_name} · icons ${iconSizes || "not declared"}` : `Manifest returned HTTP ${response.status}.`));
    } catch (error) {
      checks.push(result("fail", "Web app manifest", error.message || "Manifest could not be loaded."));
    }

    if (!("serviceWorker" in navigator)) {
      checks.push(result("fail", "Service worker support", "This browser does not support service workers."));
    } else {
      try {
        const registration = await withTimeout(navigator.serviceWorker.ready, 8000, "Service worker did not become ready within 8 seconds.");
        checks.push(result(registration.active ? "pass" : "warn", "Service worker", registration.active ? `Active with scope ${registration.scope}` : "Registered but not active yet."));
        checks.push(result(navigator.serviceWorker.controller ? "pass" : "warn", "Page control", navigator.serviceWorker.controller ? "The current page is controlled for offline requests." : "Reload once so the active worker can control this page."));
      } catch (error) {
        checks.push(result("fail", "Service worker", error.message || "Registration did not become ready."));
      }
    }

    try {
      const cache = await findSlipTraceCache();
      if (!cache) {
        checks.push(result("fail", "Offline cache", "No SlipTrace application-shell cache was found."));
      } else {
        const missing = [];
        for (const page of REQUIRED_PAGES) {
          const match = await cache.match(page) || await cache.match(`./${page}`);
          if (!match) missing.push(page);
        }
        checks.push(result(missing.length ? "warn" : "pass", "Offline pages", missing.length ? `Not cached yet: ${missing.join(", ")}` : "All primary pages are available in the app-shell cache."));
      }
    } catch (error) {
      checks.push(result("warn", "Offline cache", error.message || "Cache contents could not be inspected."));
    }

    const standalone = globalThis.SlipTracePWA?.isStandalone?.() || matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
    const installVisible = document.querySelector(".pwa-install.is-visible");
    checks.push(result(standalone ? "pass" : installVisible ? "pass" : "warn", "Installation state", standalone ? "SlipTrace is running as an installed app." : installVisible ? "The browser installation prompt is available." : "Install prompts depend on browser support and may appear after another visit."));
    checks.push(result(navigator.onLine ? "pass" : "warn", "Network state", navigator.onLine ? "Browser reports an online connection." : "Browser reports offline mode; cached pages should remain available."));

    return checks;
  }

  function renderChecks(container, checks) {
    const failures = checks.filter((check) => check.level === "fail").length;
    const warnings = checks.filter((check) => check.level === "warn").length;
    const level = failures ? "fail" : warnings ? "warn" : "pass";
    const summary = failures ? `${failures} PWA check${failures === 1 ? "" : "s"} failed` : warnings ? `Core PWA checks passed with ${warnings} warning${warnings === 1 ? "" : "s"}` : "All available PWA checks passed";
    container.querySelector(".pwa-diagnostics__summary").className = `pwa-diagnostics__summary ${level}`;
    container.querySelector(".pwa-diagnostics__summary").textContent = summary;
    container.querySelector(".pwa-diagnostics__list").innerHTML = checks.map((check) => `<div class="pwa-diagnostics__item ${check.level}"><span class="pwa-diagnostics__badge">${check.level}</span><div class="pwa-diagnostics__copy"><strong>${check.name}</strong><small>${check.detail}</small></div></div>`).join("");
  }

  async function execute(container) {
    const button = container.querySelector("[data-run-pwa-test]");
    button.disabled = true;
    button.textContent = "Testing…";
    container.querySelector(".pwa-diagnostics__summary").className = "pwa-diagnostics__summary";
    container.querySelector(".pwa-diagnostics__summary").textContent = "Running browser and offline-cache checks…";
    try {
      renderChecks(container, await runDiagnostics());
    } finally {
      button.disabled = false;
      button.textContent = "Run PWA test";
    }
  }

  function mount() {
    if (!document.body.classList.contains("settings-page") && !/settings\.html$/i.test(location.pathname)) return;
    if (document.querySelector(".pwa-diagnostics")) return;
    const main = document.querySelector("main.app-shell");
    if (!main) return;
    const panel = document.createElement("section");
    panel.className = "panel pwa-diagnostics";
    panel.innerHTML = `<div class="pwa-diagnostics__top"><div><p class="panel-kicker">PWA DIAGNOSTICS</p><h2>Installation and offline readiness</h2><p class="panel-copy">Checks the manifest, service worker, cached pages, install state, and current connection.</p></div><button class="button secondary" data-run-pwa-test type="button">Run PWA test</button></div><div class="pwa-diagnostics__summary">Test has not been run in this browser.</div><div class="pwa-diagnostics__list"></div>`;
    main.append(panel);
    panel.querySelector("[data-run-pwa-test]").addEventListener("click", () => execute(panel));
  }

  globalThis.SlipTracePWA = { ...(globalThis.SlipTracePWA || {}), runDiagnostics };
  mount();
})();

(() => {
  if (globalThis.__slipTraceRecentAdded || typeof bets === "undefined") return;
  globalThis.__slipTraceRecentAdded = true;

  function timestamp(value) {
    const parsed = Date.parse(value || "");
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function stampMissingAddedTimes() {
    const base = Date.now();
    let changed = false;
    bets.forEach((bet, index) => {
      if (timestamp(bet.addedAt)) return;
      bet.addedAt = new Date(base - index).toISOString();
      changed = true;
    });
    if (changed && typeof persist === "function") persist();
    return changed;
  }

  function reportingDate(bet) {
    const value = bet.settledAt || bet.eventDate || bet._localEditedAt || bet._syncUpdatedAt;
    const date = value ? new Date(value) : null;
    return date && !Number.isNaN(date.getTime()) ? date : null;
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function rangeStart(key, now = new Date()) {
    if (key === "today") return startOfDay(now);
    if (key === "7") {
      const start = startOfDay(now);
      start.setDate(start.getDate() - 6);
      return start;
    }
    if (key === "30") {
      const start = startOfDay(now);
      start.setDate(start.getDate() - 29);
      return start;
    }
    if (key === "month") return new Date(now.getFullYear(), now.getMonth(), 1);
    return null;
  }

  function visibleForDashboardRange(bet) {
    const key = document.querySelector("#dashboardRange")?.value || "all";
    const start = rangeStart(key);
    if (!start) return true;
    const date = reportingDate(bet);
    return Boolean(date && date >= start && date <= new Date());
  }

  function renderLatestAddedBets() {
    const body = document.querySelector("#recentBetsBody");
    if (!body || typeof betRow !== "function") return;
    stampMissingAddedTimes();
    const latest = bets
      .filter(visibleForDashboardRange)
      .slice()
      .sort((a, b) => timestamp(b.addedAt) - timestamp(a.addedAt))
      .slice(0, 5);
    body.innerHTML = latest.map((bet, index) => betRow(bet, index, false)).join("");
  }

  stampMissingAddedTimes();

  if (typeof render === "function") {
    const previousRender = render;
    render = function slipTraceAddedTimeRender(...args) {
      const result = previousRender(...args);
      renderLatestAddedBets();
      return result;
    };
  }

  document.addEventListener("change", (event) => {
    if (event.target?.id === "dashboardRange") setTimeout(renderLatestAddedBets, 0);
  });
  addEventListener("storage", (event) => {
    if (typeof STORAGE_KEY !== "undefined" && event.key === STORAGE_KEY) setTimeout(renderLatestAddedBets, 0);
  });

  globalThis.SlipTraceRecent = { render: renderLatestAddedBets, stampMissingAddedTimes };
  renderLatestAddedBets();
})();