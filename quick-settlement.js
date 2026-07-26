(() => {
  if (globalThis.__edgeLogQuickSettlement || typeof betRow !== "function") return;
  globalThis.__edgeLogQuickSettlement = true;

  const originalBetRow = betRow;
  let lastSettlement = null;

  const style = document.createElement("style");
  style.textContent = `
    .row-actions.row-actions--pending {
      min-width: 248px;
      display: grid;
      gap: 7px;
      justify-content: stretch;
    }
    .quick-settle-group,
    .quick-manage-group {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .quick-settle-group button,
    .quick-manage-group button {
      min-height: 29px;
      padding: 5px 8px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--panel);
      color: var(--muted);
      font-size: .7rem;
      font-weight: 800;
      line-height: 1;
      white-space: nowrap;
    }
    .quick-settle-group button:hover,
    .quick-manage-group button:hover {
      transform: translateY(-1px);
    }
    .quick-settle-group .settle-win,
    .quick-settle-group .settle-half-win {
      border-color: color-mix(in srgb, var(--green) 34%, var(--line));
      background: var(--green-soft);
      color: var(--green);
    }
    .quick-settle-group .settle-loss,
    .quick-settle-group .settle-half-loss {
      border-color: color-mix(in srgb, var(--red) 34%, var(--line));
      background: var(--red-soft);
      color: var(--red);
    }
    .quick-settle-group .settle-void {
      border-color: color-mix(in srgb, var(--blue) 30%, var(--line));
      background: var(--blue-soft);
      color: var(--blue);
    }
    .quick-manage-group {
      padding-top: 2px;
      border-top: 1px solid var(--line);
    }
    .quick-manage-group button[data-action="delete"] { color: var(--red); }
    .toast.quick-settlement-toast {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
    }
    .toast.quick-settlement-toast button {
      padding: 6px 9px;
      border: 1px solid rgba(255,255,255,.22);
      border-radius: 8px;
      background: rgba(255,255,255,.1);
      color: #fff;
      font-weight: 800;
    }
    @media (max-width: 700px) {
      .row-actions.row-actions--pending { min-width: 220px; }
      .quick-settle-group button { flex: 1 1 calc(33.333% - 5px); }
    }
  `;
  document.head.append(style);

  function settlementButtons(bet) {
    return `<td class="row-actions row-actions--pending">
      <div class="quick-settle-group" aria-label="Quick settlement">
        <button type="button" class="settle-win" data-settle-status="win" data-id="${bet.id}" title="Settle as win">Win</button>
        <button type="button" class="settle-half-win" data-settle-status="half-win" data-id="${bet.id}" title="Settle as half win">½ Win</button>
        <button type="button" class="settle-loss" data-settle-status="loss" data-id="${bet.id}" title="Settle as loss">Loss</button>
        <button type="button" class="settle-half-loss" data-settle-status="half-loss" data-id="${bet.id}" title="Settle as half loss">½ Loss</button>
        <button type="button" class="settle-void" data-settle-status="void" data-id="${bet.id}" title="Settle as void">Void</button>
      </div>
      <div class="quick-manage-group">
        <button type="button" data-action="edit" data-id="${bet.id}">Edit</button>
        <button type="button" data-action="delete" data-id="${bet.id}">Delete</button>
      </div>
    </td>`;
  }

  betRow = function quickSettlementBetRow(bet, index, actions = true) {
    const html = originalBetRow(bet, index, actions);
    if (!actions || bet.status !== "pending") return html;
    return html.replace(/<td class="row-actions">[\s\S]*?<\/td>/, settlementButtons(bet));
  };

  function showUndoToast(bet, previous, status) {
    const toastElement = document.querySelector("#toast");
    if (!toastElement) return;
    lastSettlement = { id: bet.id, previous };
    clearTimeout(toast.timer);
    toastElement.classList.add("show", "quick-settlement-toast");
    toastElement.innerHTML = `<span>${escapeHtml(bet.event)} settled as ${escapeHtml(statusLabel(status))}.</span><button type="button" data-undo-settlement>Undo</button>`;
    toast.timer = setTimeout(() => {
      toastElement.classList.remove("show", "quick-settlement-toast");
      lastSettlement = null;
    }, 6000);
  }

  document.addEventListener("click", (event) => {
    const settleButton = event.target.closest("[data-settle-status][data-id]");
    if (settleButton) {
      event.preventDefault();
      const bet = bets.find((item) => item.id === settleButton.dataset.id);
      if (!bet) return;
      const previous = { ...bet };
      const status = settleButton.dataset.settleStatus;
      bet.status = status;
      bet.settledAt = new Date().toISOString();
      if (!bet.result || normalize(bet.result).toLowerCase() === "pending") {
        bet.result = statusLabel(status);
      }
      persist();
      render();
      showUndoToast(bet, previous, status);
      return;
    }

    const undoButton = event.target.closest("[data-undo-settlement]");
    if (!undoButton || !lastSettlement) return;
    event.preventDefault();
    const index = bets.findIndex((item) => item.id === lastSettlement.id);
    if (index >= 0) {
      bets[index] = lastSettlement.previous;
      persist();
      render();
      toast("Settlement undone");
    }
    lastSettlement = null;
  });

  if (typeof renderTables === "function") renderTables();
})();