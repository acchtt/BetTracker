(() => {
  if (globalThis.__edgeLogBankrollV2 || typeof bets === "undefined") return;
  globalThis.__edgeLogBankrollV2 = true;

  const TRANSACTION_KEY = "edgelog-bankroll-transactions-v1";
  const originalRender = typeof render === "function" ? render : () => {};
  let deletedTransaction = null;

  function loadTransactions() {
    try {
      const parsed = JSON.parse(localStorage.getItem(TRANSACTION_KEY));
      if (!Array.isArray(parsed)) return [];
      return parsed.map((item) => ({
        id: item.id || uid(),
        type: item.type === "withdrawal" ? "withdrawal" : "deposit",
        amountVnd: Math.max(0, Number(item.amountVnd || 0)),
        date: item.date || "",
        note: String(item.note || "")
      })).filter((item) => item.amountVnd > 0);
    } catch {
      return [];
    }
  }

  let transactions = loadTransactions();

  function persistTransactions() {
    localStorage.setItem(TRANSACTION_KEY, JSON.stringify(transactions));
  }

  function transactionDelta(item) {
    return item.type === "withdrawal" ? -Number(item.amountVnd || 0) : Number(item.amountVnd || 0);
  }

  function cashTotals() {
    const deposits = transactions.filter((item) => item.type === "deposit").reduce((sum, item) => sum + Number(item.amountVnd || 0), 0);
    const withdrawals = transactions.filter((item) => item.type === "withdrawal").reduce((sum, item) => sum + Number(item.amountVnd || 0), 0);
    return { deposits, withdrawals, net: deposits - withdrawals };
  }

  function bankrollPosition() {
    const base = typeof metrics === "function" ? metrics() : { net: 0, pending: 0 };
    const cash = cashTotals();
    const starting = Number(settings.startingBankroll || 0);
    const current = starting + cash.net + Number(base.net || 0);
    const available = current - Number(base.pending || 0);
    return { starting, current, available, cash, net: Number(base.net || 0), pending: Number(base.pending || 0) };
  }

  function setTextValue(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function setTone(id, value) {
    const element = document.getElementById(id);
    if (!element) return;
    element.classList.toggle("positive", value > 0);
    element.classList.toggle("negative", value < 0);
    element.classList.toggle("neutral-text", value === 0);
  }

  function percent(part, whole) {
    return whole > 0 ? (part / whole) * 100 : 0;
  }

  function renderSummaryCards() {
    const position = bankrollPosition();
    setTextValue("startingBankrollDisplay", formatVnd(position.starting));
    setTextValue("cashAdjustmentDisplay", formatVnd(position.cash.net, true));
    setTextValue("cashAdjustmentMeta", `${formatVnd(position.cash.deposits)} deposited · ${formatVnd(position.cash.withdrawals)} withdrawn`);
    setTextValue("currentBankrollDisplay", formatVnd(position.current, true));
    setTextValue("currentBankrollMeta", `${formatVnd(position.net, true)} from settled bets`);
    setTextValue("availableBankrollDisplay", formatVnd(position.available, true));
    setTextValue("availableBankrollMeta", `${formatVnd(position.pending)} currently exposed`);
    setTone("cashAdjustmentDisplay", position.cash.net);
    setTone("currentBankrollDisplay", position.current - position.starting);
    setTone("availableBankrollDisplay", position.available);
  }

  function renderPosition() {
    const position = bankrollPosition();
    const pendingBets = bets.filter((bet) => bet.status === "pending");
    const largestPending = pendingBets.reduce((largest, bet) => Number(bet.stakeVnd || 0) > Number(largest?.stakeVnd || 0) ? bet : largest, null);
    const exposurePct = percent(position.pending, Math.max(position.current, 0));
    const unitPct = percent(Number(settings.unitVnd || 0), Math.max(position.current, 0));
    const reservePct = percent(Math.max(position.available, 0), Math.max(position.current, 0));

    setTextValue("bankrollPendingExposure", formatVnd(position.pending));
    setTextValue("bankrollPendingPercent", position.current > 0 ? `${exposurePct.toFixed(1)}% of current bankroll` : "Set a starting bankroll to calculate the ratio");
    setTextValue("bankrollUnitRatio", position.current > 0 ? `${unitPct.toFixed(1)}%` : "—");
    setTextValue("bankrollUnitRatioMeta", `${formatVnd(settings.unitVnd)} per unit`);
    setTextValue("bankrollLargestPending", largestPending ? formatVnd(largestPending.stakeVnd) : "0 VND");
    setTextValue("bankrollLargestPendingMeta", largestPending ? `${largestPending.event} · ${largestPending.bet}` : "No pending bets");
    setTextValue("bankrollReserveRatio", position.current > 0 ? `${reservePct.toFixed(1)}%` : "—");
    setTextValue("bankrollReserveRatioMeta", `${formatVnd(Math.max(position.available, 0))} remains after pending exposure`);

    const exposureFill = document.querySelector("#bankrollExposureFill");
    if (exposureFill) exposureFill.style.width = `${Math.min(100, Math.max(0, exposurePct))}%`;
  }

  function compactVnd(value) {
    const absolute = Math.abs(Number(value || 0));
    const sign = value < 0 ? "−" : value > 0 ? "+" : "";
    if (absolute >= 1_000_000_000) return `${sign}${(absolute / 1_000_000_000).toFixed(1)}B`;
    if (absolute >= 1_000_000) return `${sign}${(absolute / 1_000_000).toFixed(1)}M`;
    if (absolute >= 1_000) return `${sign}${(absolute / 1_000).toFixed(0)}K`;
    return `${sign}${Math.round(absolute)}`;
  }

  function chartColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
      blue: styles.getPropertyValue("--blue").trim() || "#6674ff",
      green: styles.getPropertyValue("--green").trim() || "#39b96a",
      red: styles.getPropertyValue("--red").trim() || "#ef6071",
      muted: styles.getPropertyValue("--muted").trim() || "#7b859b",
      line: styles.getPropertyValue("--line").trim() || "#e6eaf2",
      panel: styles.getPropertyValue("--panel").trim() || "#ffffff"
    };
  }

  function svgNode(name, attributes = {}, text = "") {
    const node = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
  }

  function timelineEvents() {
    const settled = bets.filter((bet) => bet.status !== "pending").slice().reverse();
    const fallbackBase = Date.now() - (settled.length + transactions.length + 1) * 60_000;
    const betEvents = settled.map((bet, index) => ({
      type: "bet",
      time: Date.parse(bet.settledAt || bet.eventDate || "") || fallbackBase + index * 60_000,
      delta: profitLoss(bet),
      label: bet.event,
      detail: `${bet.bet} · ${formatVnd(profitLoss(bet), true)}`,
      sequence: index
    }));
    const cashEvents = transactions.map((item, index) => ({
      type: item.type,
      time: Date.parse(item.date || "") || fallbackBase + (settled.length + index) * 60_000,
      delta: transactionDelta(item),
      label: item.note || (item.type === "deposit" ? "Deposit" : "Withdrawal"),
      detail: formatVnd(transactionDelta(item), true),
      sequence: settled.length + index
    }));
    return [...betEvents, ...cashEvents].sort((a, b) => a.time - b.time || a.sequence - b.sequence);
  }

  function renderChart() {
    const container = document.querySelector("#bankrollCurveChart");
    if (!container) return;
    container.innerHTML = "";
    const position = bankrollPosition();
    const events = timelineEvents();
    const points = [{ value: position.starting, delta: 0, label: "Starting bankroll", detail: formatVnd(position.starting) }];
    let running = position.starting;
    events.forEach((event) => {
      running += event.delta;
      points.push({ ...event, value: running });
    });

    if (!events.length && position.starting <= 0) {
      container.innerHTML = '<div class="bankroll-chart-empty">Set a starting bankroll or add a cash adjustment to build the bankroll curve.</div>';
      return;
    }

    const width = 900;
    const height = 330;
    const padding = { top: 22, right: 24, bottom: 42, left: 70 };
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const rawMin = Math.min(0, ...points.map((point) => point.value));
    const rawMax = Math.max(1, ...points.map((point) => point.value));
    const range = Math.max(500000, rawMax - rawMin);
    const min = rawMin - range * .1;
    const max = rawMax + range * .1;
    const xFor = (index) => padding.left + (points.length === 1 ? plotWidth / 2 : (index / (points.length - 1)) * plotWidth);
    const yFor = (value) => padding.top + ((max - value) / (max - min)) * plotHeight;
    const colors = chartColors();
    const svg = svgNode("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": "Bankroll history including settled bets, deposits, and withdrawals" });
    const defs = svgNode("defs");
    const gradient = svgNode("linearGradient", { id: "bankrollAreaGradient", x1: "0", y1: "0", x2: "0", y2: "1" });
    gradient.append(svgNode("stop", { offset: "0%", "stop-color": colors.blue, "stop-opacity": ".25" }));
    gradient.append(svgNode("stop", { offset: "100%", "stop-color": colors.blue, "stop-opacity": "0" }));
    defs.append(gradient);
    svg.append(defs);

    for (let step = 0; step <= 4; step += 1) {
      const value = max - ((max - min) * step / 4);
      const y = yFor(value);
      svg.append(svgNode("line", { x1: padding.left, y1: y, x2: width - padding.right, y2: y, stroke: colors.line, "stroke-width": "1" }));
      svg.append(svgNode("text", { x: padding.left - 12, y: y + 4, "text-anchor": "end", fill: colors.muted, "font-size": "12", "font-family": "Inter, sans-serif" }, compactVnd(value)));
    }

    const path = points.map((point, index) => `${index ? "L" : "M"}${xFor(index).toFixed(2)},${yFor(point.value).toFixed(2)}`).join(" ");
    const baseY = yFor(min);
    const areaPath = `${path} L${xFor(points.length - 1)},${baseY} L${xFor(0)},${baseY} Z`;
    svg.append(svgNode("path", { d: areaPath, fill: "url(#bankrollAreaGradient)" }));
    svg.append(svgNode("path", { d: path, fill: "none", stroke: colors.blue, "stroke-width": "4", "stroke-linecap": "round", "stroke-linejoin": "round" }));

    points.forEach((point, index) => {
      const color = index === 0 ? colors.blue : point.delta >= 0 ? colors.green : colors.red;
      const circle = svgNode("circle", { cx: xFor(index), cy: yFor(point.value), r: "5.2", fill: color, stroke: colors.panel, "stroke-width": "3" });
      circle.append(svgNode("title", {}, `${point.label} — ${point.detail} · bankroll ${formatVnd(point.value)}`));
      svg.append(circle);
    });

    const labelIndexes = [...new Set([0, Math.floor((points.length - 1) / 2), points.length - 1])];
    labelIndexes.forEach((index) => {
      svg.append(svgNode("text", {
        x: xFor(index), y: height - 14,
        "text-anchor": index === 0 ? "start" : index === points.length - 1 ? "end" : "middle",
        fill: colors.muted, "font-size": "12", "font-family": "Inter, sans-serif"
      }, index === 0 ? "Start" : `Event ${index}`));
    });
    container.append(svg);
  }

  function formatTransactionDate(value) {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(date);
  }

  function renderLedger() {
    const body = document.querySelector("#bankrollLedgerBody");
    if (!body) return;
    const sorted = transactions.slice().sort((a, b) => (Date.parse(b.date || "") || 0) - (Date.parse(a.date || "") || 0));
    if (!sorted.length) {
      body.innerHTML = '<tr class="bankroll-ledger-empty"><td colspan="5">No deposits or withdrawals recorded yet.</td></tr>';
      return;
    }
    body.innerHTML = sorted.map((item) => {
      const delta = transactionDelta(item);
      return `<tr>
        <td>${escapeHtml(formatTransactionDate(item.date))}</td>
        <td><span class="bankroll-ledger-type bankroll-ledger-type--${item.type}">${item.type === "deposit" ? "Deposit" : "Withdrawal"}</span></td>
        <td>${escapeHtml(item.note || "—")}</td>
        <td class="${delta > 0 ? "positive" : "negative"}"><strong>${formatVnd(delta, true)}</strong></td>
        <td class="bankroll-ledger-actions"><button type="button" data-delete-bankroll-transaction="${item.id}">Delete</button></td>
      </tr>`;
    }).join("");
  }

  function renderBankroll() {
    renderSummaryCards();
    renderPosition();
    renderChart();
    renderLedger();
  }

  function defaultLocalDateTime() {
    const date = new Date();
    const offset = date.getTimezoneOffset() * 60_000;
    return new Date(date.getTime() - offset).toISOString().slice(0, 16);
  }

  function resetTransactionForm() {
    const form = document.querySelector("#bankrollTransactionForm");
    if (!form) return;
    form.reset();
    const date = document.querySelector("#bankrollTransactionDate");
    if (date) date.value = defaultLocalDateTime();
  }

  function showUndoDelete(item, index) {
    const toastElement = document.querySelector("#toast");
    if (!toastElement) return;
    deletedTransaction = { item, index };
    clearTimeout(toast.timer);
    toastElement.classList.add("show", "undo-delete-toast");
    toastElement.innerHTML = `<span>Cash adjustment deleted.</span><button type="button" data-undo-bankroll-transaction>Undo</button>`;
    toast.timer = setTimeout(() => {
      toastElement.classList.remove("show", "undo-delete-toast");
      deletedTransaction = null;
    }, 7000);
  }

  document.querySelector("#bankrollTransactionForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.querySelector("#bankrollTransactionType")?.value === "withdrawal" ? "withdrawal" : "deposit";
    const amountVnd = Math.max(0, Number(document.querySelector("#bankrollTransactionAmount")?.value || 0));
    if (!amountVnd) return;
    transactions.unshift({
      id: uid(),
      type,
      amountVnd,
      date: document.querySelector("#bankrollTransactionDate")?.value || defaultLocalDateTime(),
      note: document.querySelector("#bankrollTransactionNote")?.value.trim() || ""
    });
    persistTransactions();
    resetTransactionForm();
    renderBankroll();
    toast(type === "deposit" ? "Deposit added" : "Withdrawal added");
  });

  document.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-bankroll-transaction]");
    if (deleteButton) {
      const index = transactions.findIndex((item) => item.id === deleteButton.dataset.deleteBankrollTransaction);
      if (index < 0) return;
      const [item] = transactions.splice(index, 1);
      persistTransactions();
      renderBankroll();
      showUndoDelete(item, index);
      return;
    }

    const undo = event.target.closest("[data-undo-bankroll-transaction]");
    if (!undo || !deletedTransaction) return;
    transactions.splice(Math.min(deletedTransaction.index, transactions.length), 0, deletedTransaction.item);
    persistTransactions();
    deletedTransaction = null;
    document.querySelector("#toast")?.classList.remove("undo-delete-toast");
    renderBankroll();
    toast("Cash adjustment restored");
  });

  addEventListener("storage", (event) => {
    if (event.key !== TRANSACTION_KEY) return;
    transactions = loadTransactions();
    renderBankroll();
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => button.addEventListener("click", () => requestAnimationFrame(renderChart)));

  render = function bankrollAwareRender(...args) {
    const result = originalRender(...args);
    renderBankroll();
    return result;
  };

  resetTransactionForm();
  renderBankroll();
})();