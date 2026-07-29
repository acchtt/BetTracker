(() => {
  if (globalThis.__slipTraceLatestBets || typeof bets === "undefined") return;
  globalThis.__slipTraceLatestBets = true;

  const ORDER_MIGRATION_KEY = "sliptrace-added-at-v5";
  let writing = false;
  let timer = 0;

  function timestamp(value) {
    const parsed = Date.parse(value || "");
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function sourceTimestamp(bet) {
    const explicit = timestamp(bet.createdAt)
      || timestamp(bet.placedAt)
      || timestamp(bet.sourceAddedAt)
      || timestamp(bet._createdAt);
    if (explicit) return explicit;

    if (bet._syncId) {
      return timestamp(bet._syncCreatedAt)
        || timestamp(bet.addedAt)
        || timestamp(bet._syncUpdatedAt);
    }

    return timestamp(bet.addedAt)
      || timestamp(bet._localEditedAt);
  }

  function repairExistingOrder() {
    if (localStorage.getItem(ORDER_MIGRATION_KEY) === "complete") return false;

    const known = bets.map((bet) => {
      if (bet._syncId) {
        return timestamp(bet._syncCreatedAt) || timestamp(bet._syncUpdatedAt);
      }
      return timestamp(bet.createdAt)
        || timestamp(bet.placedAt)
        || timestamp(bet._createdAt)
        || timestamp(bet._localEditedAt);
    });
    const positive = known.filter(Boolean);
    const fallbackBase = positive.length ? Math.min(...positive) - 1000 : Date.now();

    bets.forEach((bet, index) => {
      const derived = known[index] || fallbackBase - index;
      bet.addedAt = new Date(derived).toISOString();
      bet._addedAtSource = known[index]
        ? (bet._syncId ? "sync-record" : "local-record")
        : "legacy-order";
    });

    if (typeof persist === "function") persist();
    localStorage.setItem(ORDER_MIGRATION_KEY, "complete");
    return true;
  }

  function ensureAddedTimes() {
    let changed = false;
    const newestExisting = bets.reduce((latest, bet) => Math.max(latest, sourceTimestamp(bet)), 0);
    const base = Math.max(Date.now(), newestExisting + bets.length + 1);

    bets.forEach((bet, index) => {
      const syncCreated = bet._syncId ? timestamp(bet._syncCreatedAt) : 0;
      if (syncCreated && timestamp(bet.addedAt) !== syncCreated) {
        bet.addedAt = new Date(syncCreated).toISOString();
        bet._addedAtSource = "sync-record";
        changed = true;
        return;
      }

      if (timestamp(bet.addedAt)) return;
      const localCreated = !bet._syncId && timestamp(bet._localEditedAt);
      const derived = localCreated || base - index;
      bet.addedAt = new Date(derived).toISOString();
      bet._addedAtSource = localCreated ? "local-record" : "new-record";
      changed = true;
    });

    if (changed && typeof persist === "function") persist();
    return changed;
  }

  function latestBets() {
    const originalOrder = new Map(bets.map((bet, index) => [bet.id, index]));
    return bets.slice().sort((a, b) => {
      const timeDifference = sourceTimestamp(b) - sourceTimestamp(a);
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
    setTimeout(renderLatest, 150);
  }

  repairExistingOrder();

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
  document.addEventListener("visibilitychange", () => { if (!document.hidden) scheduleRender(); });

  globalThis.SlipTraceLatestBets = { render: renderLatest, ensureAddedTimes, repairExistingOrder };
  scheduleRender();
})();