(() => {
  if (globalThis.__slipTraceLatestBets || typeof bets === "undefined") return;
  globalThis.__slipTraceLatestBets = true;

  const initialIds = new Set(bets.map((bet) => bet.id));
  let writing = false;
  let timer = 0;

  function timestamp(value) {
    const parsed = Date.parse(value || "");
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function ensureAddedTimes() {
    const missing = bets.filter((bet) => !timestamp(bet.addedAt));
    if (!missing.length) return false;

    const base = Date.now();
    let changed = false;
    missing.forEach((bet, index) => {
      const isNewAfterLoad = !initialIds.has(bet.id);
      const offset = isNewAfterLoad ? index : 86400000 + bets.indexOf(bet);
      bet.addedAt = new Date(base - offset).toISOString();
      changed = true;
    });

    if (changed && typeof persist === "function") persist();
    return changed;
  }

  function latestBets() {
    const originalOrder = new Map(bets.map((bet, index) => [bet.id, index]));
    return bets.slice().sort((a, b) => {
      const timeDifference = timestamp(b.addedAt) - timestamp(a.addedAt);
      return timeDifference || (originalOrder.get(a.id) ?? 0) - (originalOrder.get(b.id) ?? 0);
    }).slice(0, 5);
  }

  function renderLatest() {
    if (writing || typeof betRow !== "function") return;
    const body = document.querySelector("#recentBetsBody");
    if (!body) return;

    ensureAddedTimes();
    const html = latestBets().map((bet, index) => betRow(bet, index, false)).join("");
    if (body.innerHTML === html) return;

    writing = true;
    body.innerHTML = html;
    writing = false;
  }

  function scheduleRender() {
    clearTimeout(timer);
    queueMicrotask(renderLatest);
    timer = setTimeout(renderLatest, 0);
    setTimeout(renderLatest, 120);
  }

  if (typeof render === "function") {
    const previousRender = render;
    render = function slipTraceLatestBetRender(...args) {
      const result = previousRender(...args);
      scheduleRender();
      return result;
    };
  }

  if (typeof renderTables === "function") {
    const previousTables = renderTables;
    renderTables = function slipTraceLatestBetTables(...args) {
      const result = previousTables(...args);
      scheduleRender();
      return result;
    };
  }

  const observer = new MutationObserver((mutations) => {
    if (writing) return;
    if (mutations.some((mutation) => mutation.target.closest?.("#recentBetsBody") || mutation.target.id === "recentBetsBody")) {
      scheduleRender();
    }
  });

  const recentBody = document.querySelector("#recentBetsBody");
  if (recentBody) observer.observe(recentBody, { childList: true, subtree: true });

  addEventListener("storage", (event) => {
    if (typeof STORAGE_KEY !== "undefined" && event.key === STORAGE_KEY) scheduleRender();
  });
  addEventListener("focus", scheduleRender);
  addEventListener("sliptrace:pwa-controller-change", scheduleRender);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) scheduleRender(); });

  globalThis.SlipTraceLatestBets = { render: renderLatest, ensureAddedTimes };
  scheduleRender();
})();
