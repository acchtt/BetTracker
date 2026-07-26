(() => {
  if (globalThis.__edgeLogBetsWorkspace || typeof renderTables !== "function") return;
  const body = document.querySelector("#betsTableBody");
  if (!body) return;
  globalThis.__edgeLogBetsWorkspace = true;

  const STORAGE_KEY_WORKSPACE = "edgelog-bets-workspace-v1";
  const FILTER_IDS = [
    "searchInput", "sportFilter", "statusFilter", "bookmakerFilter",
    "marketFilter", "timingFilter", "tagFilter", "reviewFilter"
  ];
  const originalRenderTables = renderTables;
  let state = loadState();
  let controlsReady = false;

  const style = document.createElement("style");
  style.textContent = `
    .bets-workspace-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 12px 14px;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      background: var(--panel-soft);
    }
    .bets-workspace-controls,
    .bets-workspace-pagination {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .bets-workspace-field {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      color: var(--muted);
      font-size: .72rem;
      font-weight: 780;
      white-space: nowrap;
    }
    .bets-workspace-field select {
      min-height: 34px;
      padding: 7px 30px 7px 10px;
      border: 1px solid var(--line);
      border-radius: 9px;
      background: var(--panel);
      color: var(--text);
      font-size: .75rem;
      font-weight: 750;
    }
    .bets-workspace-summary {
      color: var(--muted);
      font-size: .74rem;
      font-weight: 720;
      white-space: nowrap;
    }
    .bets-workspace-pagination button {
      display: grid;
      place-items: center;
      min-width: 34px;
      min-height: 34px;
      padding: 6px 9px;
      border: 1px solid var(--line);
      border-radius: 9px;
      background: var(--panel);
      color: var(--text);
      font-size: .74rem;
      font-weight: 820;
    }
    .bets-workspace-pagination button:hover:not(:disabled) {
      border-color: color-mix(in srgb, var(--blue) 40%, var(--line));
      color: var(--blue);
      transform: translateY(-1px);
    }
    .bets-workspace-pagination button:disabled {
      cursor: not-allowed;
      opacity: .38;
    }
    .bets-workspace-page {
      min-width: 76px;
      color: var(--muted);
      font-size: .72rem;
      font-weight: 780;
      text-align: center;
    }
    @media (max-width: 900px) {
      .bets-workspace-bar {
        align-items: stretch;
        flex-direction: column;
      }
      .bets-workspace-pagination {
        justify-content: space-between;
      }
    }
    @media (max-width: 620px) {
      .bets-workspace-controls {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .bets-workspace-field {
        display: grid;
        gap: 5px;
      }
      .bets-workspace-field select { width: 100%; }
      .bets-workspace-summary {
        grid-column: 1 / -1;
        white-space: normal;
      }
    }
  `;
  document.head.append(style);

  function loadState() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY_WORKSPACE));
      return {
        sort: stored?.sort || "newest",
        pageSize: ["10", "25", "50", "all"].includes(String(stored?.pageSize)) ? String(stored.pageSize) : "25",
        page: Math.max(1, Number(stored?.page) || 1),
        filters: stored?.filters && typeof stored.filters === "object" ? stored.filters : {}
      };
    } catch {
      return { sort: "newest", pageSize: "25", page: 1, filters: {} };
    }
  }

  function saveState() {
    const filters = {};
    FILTER_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) filters[id] = element.value;
    });
    state.filters = filters;
    localStorage.setItem(STORAGE_KEY_WORKSPACE, JSON.stringify(state));
  }

  function restoreFilters() {
    FILTER_IDS.forEach((id) => {
      const element = document.getElementById(id);
      const value = state.filters?.[id];
      if (!element || value === undefined) return;
      if (element.tagName === "SELECT") {
        if ([...element.options].some((option) => option.value === value)) element.value = value;
      } else {
        element.value = value;
      }
    });
  }

  function ensureControls() {
    if (controlsReady) return;
    const tableWrap = body.closest(".table-wrap");
    if (!tableWrap?.parentNode) return;

    const bar = document.createElement("div");
    bar.className = "bets-workspace-bar";
    bar.innerHTML = `
      <div class="bets-workspace-controls">
        <label class="bets-workspace-field">Sort
          <select id="betsWorkspaceSort">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="stake-desc">Highest stake</option>
            <option value="odds-desc">Highest odds</option>
            <option value="pl-desc">Best P/L</option>
            <option value="pl-asc">Worst P/L</option>
            <option value="event-asc">Event A–Z</option>
            <option value="status">Status</option>
          </select>
        </label>
        <label class="bets-workspace-field">Rows
          <select id="betsWorkspacePageSize">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="all">All</option>
          </select>
        </label>
        <span id="betsWorkspaceSummary" class="bets-workspace-summary">Showing all bets</span>
      </div>
      <div class="bets-workspace-pagination" aria-label="Bet history pagination">
        <button id="betsWorkspaceFirst" type="button" aria-label="First page">«</button>
        <button id="betsWorkspacePrevious" type="button" aria-label="Previous page">‹</button>
        <span id="betsWorkspacePage" class="bets-workspace-page">Page 1 of 1</span>
        <button id="betsWorkspaceNext" type="button" aria-label="Next page">›</button>
        <button id="betsWorkspaceLast" type="button" aria-label="Last page">»</button>
      </div>`;
    tableWrap.parentNode.insertBefore(bar, tableWrap);

    const sort = bar.querySelector("#betsWorkspaceSort");
    const pageSize = bar.querySelector("#betsWorkspacePageSize");
    sort.value = state.sort;
    pageSize.value = state.pageSize;

    sort.addEventListener("change", () => {
      state.sort = sort.value;
      state.page = 1;
      saveState();
      renderTables();
    });
    pageSize.addEventListener("change", () => {
      state.pageSize = pageSize.value;
      state.page = 1;
      saveState();
      renderTables();
    });
    bar.querySelector("#betsWorkspaceFirst").addEventListener("click", () => setPage(1));
    bar.querySelector("#betsWorkspacePrevious").addEventListener("click", () => setPage(state.page - 1));
    bar.querySelector("#betsWorkspaceNext").addEventListener("click", () => setPage(state.page + 1));
    bar.querySelector("#betsWorkspaceLast").addEventListener("click", () => setPage(Number(bar.dataset.pageCount || 1)));

    document.addEventListener("input", handleFilterChange, true);
    document.addEventListener("change", handleFilterChange, true);
    document.querySelector("#resetFilters")?.addEventListener("click", () => {
      state.page = 1;
      requestAnimationFrame(saveState);
    });

    controlsReady = true;
  }

  function handleFilterChange(event) {
    if (!FILTER_IDS.includes(event.target?.id)) return;
    state.page = 1;
    requestAnimationFrame(saveState);
  }

  function setPage(page) {
    state.page = Math.max(1, Number(page) || 1);
    saveState();
    applyWorkspace();
  }

  function betForRow(row) {
    const id = row.querySelector("[data-id]")?.dataset.id;
    return id ? bets.find((bet) => bet.id === id) : null;
  }

  function timestampFor(bet, fallbackIndex) {
    const parsed = Date.parse(bet?.eventDate || bet?.settledAt || bet?._syncUpdatedAt || bet?._localEditedAt || "");
    return Number.isFinite(parsed) ? parsed : Date.now() - fallbackIndex;
  }

  function comparator(sort) {
    const statusOrder = { pending: 0, win: 1, "half-win": 2, void: 3, "half-loss": 4, loss: 5 };
    return (a, b) => {
      const betA = betForRow(a);
      const betB = betForRow(b);
      if (!betA || !betB) return 0;
      const indexA = bets.findIndex((bet) => bet.id === betA.id);
      const indexB = bets.findIndex((bet) => bet.id === betB.id);
      if (sort === "oldest") return timestampFor(betA, indexA) - timestampFor(betB, indexB);
      if (sort === "stake-desc") return Number(betB.stakeVnd || 0) - Number(betA.stakeVnd || 0);
      if (sort === "odds-desc") return Number(betB.odds || 0) - Number(betA.odds || 0);
      if (sort === "pl-desc") return Number(profitLoss(betB) || 0) - Number(profitLoss(betA) || 0);
      if (sort === "pl-asc") return Number(profitLoss(betA) || 0) - Number(profitLoss(betB) || 0);
      if (sort === "event-asc") return String(betA.event || "").localeCompare(String(betB.event || ""));
      if (sort === "status") return (statusOrder[betA.status] ?? 99) - (statusOrder[betB.status] ?? 99) || indexA - indexB;
      return timestampFor(betB, indexB) - timestampFor(betA, indexA);
    };
  }

  function applyWorkspace() {
    ensureControls();
    const rows = [...body.querySelectorAll("tr")];
    rows.sort(comparator(state.sort)).forEach((row) => body.append(row));

    const filteredRows = rows.filter((row) => !row.hidden);
    const total = filteredRows.length;
    const pageSize = state.pageSize === "all" ? Math.max(1, total) : Math.max(1, Number(state.pageSize) || 25);
    const pageCount = state.pageSize === "all" ? 1 : Math.max(1, Math.ceil(total / pageSize));
    state.page = Math.min(Math.max(1, state.page), pageCount);
    const start = state.pageSize === "all" ? 0 : (state.page - 1) * pageSize;
    const end = state.pageSize === "all" ? total : Math.min(total, start + pageSize);

    filteredRows.forEach((row, index) => {
      row.hidden = index < start || index >= end;
      row.dataset.workspacePageHidden = row.hidden ? "true" : "false";
      const numberCell = row.querySelector("td");
      if (numberCell) numberCell.textContent = String(index + 1);
    });

    const bar = document.querySelector(".bets-workspace-bar");
    if (bar) bar.dataset.pageCount = String(pageCount);
    const summary = document.querySelector("#betsWorkspaceSummary");
    if (summary) {
      summary.textContent = total
        ? `Showing ${start + 1}–${end} of ${total} filtered bet${total === 1 ? "" : "s"} · ${bets.length} total`
        : `0 filtered bets · ${bets.length} total`;
    }
    const pageLabel = document.querySelector("#betsWorkspacePage");
    if (pageLabel) pageLabel.textContent = `Page ${state.page} of ${pageCount}`;
    const first = document.querySelector("#betsWorkspaceFirst");
    const previous = document.querySelector("#betsWorkspacePrevious");
    const next = document.querySelector("#betsWorkspaceNext");
    const last = document.querySelector("#betsWorkspaceLast");
    if (first) first.disabled = state.page <= 1;
    if (previous) previous.disabled = state.page <= 1;
    if (next) next.disabled = state.page >= pageCount;
    if (last) last.disabled = state.page >= pageCount;

    const empty = document.querySelector("#emptyState");
    if (empty) empty.hidden = total > 0;
    saveState();
  }

  renderTables = function workspaceRenderTables(...args) {
    const result = originalRenderTables(...args);
    applyWorkspace();
    return result;
  };

  ensureControls();
  restoreFilters();
  renderTables();
})();