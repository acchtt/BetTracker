(() => {
  if (globalThis.__edgeLogMobileHistory || typeof renderTables !== "function") return;
  globalThis.__edgeLogMobileHistory = true;

  const HIDDEN_SYNC_KEY = "edgelog-hidden-sync-ids";
  const originalRenderTables = renderTables;
  let deletedSnapshot = null;

  const style = document.createElement("style");
  style.textContent = `
    .toast.undo-delete-toast,
    .toast.quick-settlement-toast {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      pointer-events: auto;
    }
    .toast.undo-delete-toast button,
    .toast.quick-settlement-toast button {
      flex: 0 0 auto;
      padding: 6px 10px;
      border: 1px solid rgba(255,255,255,.24);
      border-radius: 8px;
      background: rgba(255,255,255,.1);
      color: #fff;
      font-weight: 800;
    }

    @media (max-width: 760px) {
      .table-wrap:has(.mobile-card-table) {
        overflow: visible;
        border: 0;
        background: transparent;
      }
      .mobile-card-table {
        display: block;
        width: 100%;
        min-width: 0 !important;
        border-collapse: separate;
      }
      .mobile-card-table thead {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .mobile-card-table tbody {
        display: grid;
        gap: 12px;
      }
      .mobile-card-table tbody tr {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2px 16px;
        padding: 15px;
        border: 1px solid var(--line);
        border-radius: 16px;
        background: var(--panel);
        box-shadow: var(--shadow-soft);
      }
      .mobile-card-table tbody tr:hover {
        background: var(--panel);
      }
      .mobile-card-table td {
        display: grid;
        min-width: 0;
        gap: 5px;
        padding: 9px 0;
        border: 0;
        align-content: start;
      }
      .mobile-card-table td::before {
        content: attr(data-label);
        color: var(--muted);
        font-size: .64rem;
        font-weight: 850;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      .mobile-card-table td[data-label="#"] {
        position: absolute;
        top: 13px;
        right: 14px;
        display: grid;
        place-items: center;
        width: 27px;
        height: 27px;
        padding: 0;
        border-radius: 9px;
        background: var(--panel-soft);
        color: var(--muted);
        font-size: .72rem;
        font-weight: 850;
      }
      .mobile-card-table td[data-label="#"]::before { display: none; }
      .mobile-card-table td[data-label="Event"],
      .mobile-card-table td[data-label="Bet"],
      .mobile-card-table td[data-label="Actions"] {
        grid-column: 1 / -1;
      }
      .mobile-card-table td[data-label="Event"] {
        padding-top: 0;
        padding-right: 38px;
      }
      .mobile-card-table td[data-label="Bet"] {
        margin: 2px 0 5px;
        padding: 11px 12px;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: var(--panel-soft);
        font-weight: 750;
      }
      .mobile-card-table td[data-label="Actions"] {
        padding-top: 11px;
        border-top: 1px solid var(--line);
      }
      .mobile-card-table .event-cell {
        min-width: 0;
        padding-right: 4px;
      }
      .mobile-card-table .event-copy,
      .mobile-card-table .event-copy strong,
      .mobile-card-table .event-copy small {
        min-width: 0;
        overflow-wrap: anywhere;
      }
      .mobile-card-table .row-actions,
      .mobile-card-table .row-actions.row-actions--pending {
        min-width: 0;
        width: 100%;
      }
      .mobile-card-table .quick-settle-group button,
      .mobile-card-table .quick-manage-group button {
        flex: 1 1 calc(33.333% - 5px);
      }
    }

    @media (max-width: 430px) {
      .mobile-card-table tbody tr {
        grid-template-columns: 1fr;
      }
      .mobile-card-table td,
      .mobile-card-table td[data-label="Event"],
      .mobile-card-table td[data-label="Bet"],
      .mobile-card-table td[data-label="Actions"] {
        grid-column: 1;
      }
    }
  `;
  document.head.append(style);

  function labelsFor(table) {
    return [...table.querySelectorAll("thead th")].map((header, index, headers) => {
      const label = header.textContent.trim();
      return label || (index === headers.length - 1 ? "Actions" : `Column ${index + 1}`);
    });
  }

  function decorateTable(table) {
    if (!table) return;
    table.classList.add("mobile-card-table");
    const labels = labelsFor(table);
    table.querySelectorAll("tbody tr").forEach((row) => {
      [...row.children].forEach((cell, index) => {
        cell.dataset.label = labels[index] || (index === row.children.length - 1 ? "Actions" : "Details");
      });
    });
  }

  function decorateAllTables() {
    document.querySelectorAll("#betsTableBody, #recentBetsBody").forEach((body) => decorateTable(body.closest("table")));
  }

  renderTables = function mobileCardRenderTables(...args) {
    const result = originalRenderTables(...args);
    decorateAllTables();
    return result;
  };

  function hiddenSyncIds() {
    try {
      const parsed = JSON.parse(localStorage.getItem(HIDDEN_SYNC_KEY));
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }

  function setSyncHidden(syncId, hidden) {
    if (!syncId) return;
    const ids = hiddenSyncIds();
    if (hidden) ids.add(syncId);
    else ids.delete(syncId);
    localStorage.setItem(HIDDEN_SYNC_KEY, JSON.stringify([...ids]));
  }

  function showDeleteUndo(snapshot) {
    const toastElement = document.querySelector("#toast");
    if (!toastElement) return;
    deletedSnapshot = snapshot;
    clearTimeout(toast.timer);
    toastElement.classList.remove("quick-settlement-toast");
    toastElement.classList.add("show", "undo-delete-toast");
    toastElement.innerHTML = `<span>${escapeHtml(snapshot.bet.event)} deleted.</span><button type="button" data-undo-delete>Undo</button>`;
    toast.timer = setTimeout(() => {
      toastElement.classList.remove("show", "undo-delete-toast");
      deletedSnapshot = null;
    }, 7000);
  }

  document.addEventListener("click", (event) => {
    const deleteButton = event.target.closest('button[data-action="delete"][data-id]');
    if (deleteButton) {
      const betIndex = bets.findIndex((item) => item.id === deleteButton.dataset.id);
      if (betIndex < 0) return;
      const bet = bets[betIndex];
      if (!confirm(`Delete ${bet.event}?`)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const snapshot = { bet: { ...bet }, index: betIndex };
      bets.splice(betIndex, 1);
      setSyncHidden(bet._syncId, true);
      persist();
      render();
      showDeleteUndo(snapshot);
      return;
    }

    const undoButton = event.target.closest("[data-undo-delete]");
    if (!undoButton || !deletedSnapshot) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const restoreAt = Math.max(0, Math.min(deletedSnapshot.index, bets.length));
    bets.splice(restoreAt, 0, deletedSnapshot.bet);
    setSyncHidden(deletedSnapshot.bet._syncId, false);
    persist();
    render();
    deletedSnapshot = null;
    const toastElement = document.querySelector("#toast");
    toastElement?.classList.remove("undo-delete-toast");
    toast("Bet restored");
  }, true);

  decorateAllTables();
})();