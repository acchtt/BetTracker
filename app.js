const STORAGE_KEY = "bet-tracker-v2";
const SETTINGS_KEY = "bet-tracker-settings-v1";

const uid = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const DEFAULT_BETS = [
  {
    id: uid(), event: "Tigres match", league: "", bet: "Under 3.5", odds: 1.72,
    stakeVnd: 594000, status: "loss", result: "2–2", eventDate: "", notes: "Imported tracker entry"
  },
  {
    id: uid(), event: "LAFC vs Sporting Kansas City", league: "", bet: "Under 4.25", odds: 2.09,
    stakeVnd: 500000, status: "half-win", result: "Half win", eventDate: "", notes: "Imported tracker entry"
  },
  {
    id: uid(), event: "Weston Workers Bears vs Melbourne City FC", league: "Australia Cup",
    bet: "Under 1.75 (live at 0–1)", odds: 1.65, stakeVnd: 773000, status: "loss",
    result: "0–3", eventDate: "2026-07-26T11:00", notes: "Parsed from Vietnamese betslip"
  },
  {
    id: uid(), event: "NIP vs LNG — Game 1", league: "LPL", bet: "LNG +9.5 kills",
    odds: 1.94, stakeVnd: 500000, status: "loss", result: "Loss",
    eventDate: "2026-07-26T14:00", notes: "Settled as loss"
  }
];

const $ = (selector) => document.querySelector(selector);
const els = {
  slipInput: $("#slipInput"), thousandsMode: $("#thousandsMode"), clearSlipBtn: $("#clearSlipBtn"),
  parserStatus: $("#parserStatus"), confidenceLabel: $("#confidenceLabel"), detectedFields: $("#detectedFields"),
  addDetectedBtn: $("#addDetectedBtn"), openManualBtn: $("#openManualBtn"), unitValue: $("#unitValue"),
  resetDataBtn: $("#resetDataBtn"), searchInput: $("#searchInput"), statusFilter: $("#statusFilter"),
  betsTableBody: $("#betsTableBody"), emptyState: $("#emptyState"), manualDialog: $("#manualDialog"),
  manualForm: $("#manualForm"), closeDialogBtn: $("#closeDialogBtn"), cancelDialogBtn: $("#cancelDialogBtn"),
  dialogTitle: $("#dialogTitle"), editingId: $("#editingId"), eventField: $("#eventField"),
  leagueField: $("#leagueField"), betField: $("#betField"), oddsField: $("#oddsField"),
  stakeField: $("#stakeField"), statusField: $("#statusField"), dateField: $("#dateField"),
  resultField: $("#resultField"), notesField: $("#notesField"), exportJsonBtn: $("#exportJsonBtn"),
  exportCsvBtn: $("#exportCsvBtn"), importJsonInput: $("#importJsonInput"), toast: $("#toast")
};

let bets = loadJson(STORAGE_KEY, DEFAULT_BETS);
let unitVnd = Number(loadJson(SETTINGS_KEY, { unitVnd: 500000 }).unitVnd) || 500000;
let detectedBet = null;

const lngBet = bets.find((bet) =>
  bet.event === "NIP vs LNG — Game 1" &&
  bet.bet === "LNG +9.5 kills" &&
  Number(bet.stakeVnd) === 500000 &&
  Number(bet.odds) === 1.94
);
if (lngBet?.status === "pending") {
  lngBet.status = "loss";
  lngBet.result = lngBet.result || "Loss";
  lngBet.notes = "Settled as loss";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bets));
}

els.unitValue.value = unitVnd;

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bets));
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({ unitVnd }));
}

function normalize(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/gi, "d")
    .replace(/\u00a0/g, " ")
    .trim();
}

function parseNumber(value = "") {
  const match = String(value).replace(/,/g, ".").match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function parseMoney(value = "", thousandsMode = true) {
  const amount = parseNumber(String(value).replace(/\s/g, ""));
  return Number.isFinite(amount) ? Math.round(amount * (thousandsMode ? 1000 : 1)) : 0;
}

function statusFrom(value = "") {
  const text = normalize(value).toLowerCase();
  if (/nua\s*thang|half\s*win/.test(text)) return "half-win";
  if (/nua\s*thua|half\s*loss/.test(text)) return "half-loss";
  if (/hoan\s*tien|hoa|void|push|refund/.test(text)) return "void";
  if (/dang\s*cho|cho\s*xu\s*ly|pending|open|chua\s*ket\s*thuc/.test(text)) return "pending";
  if (/thang|won|win/.test(text)) return "win";
  if (/thua|lost|loss/.test(text)) return "loss";
  return "pending";
}

function toLocalDate(value = "") {
  const match = value.match(/(\d{4})[\/-](\d{1,2})[\/-](\d{1,2})(?:\s+|T)(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const [, y, m, d, h, min] = match;
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}T${h.padStart(2, "0")}:${min}`;
}

function lineEntries(text) {
  const lines = text.split(/\r?\n/).map((raw) => raw.trim()).filter(Boolean);
  return { lines, normalized: lines.map((line) => normalize(line).toLowerCase()) };
}

function valueFor(entries, labels) {
  const wanted = labels.map((label) => normalize(label).toLowerCase());
  for (let i = 0; i < entries.lines.length; i += 1) {
    const current = entries.normalized[i];
    for (const label of wanted) {
      if (current === label || current === `${label}:` || current.startsWith(`${label}:`)) {
        const colon = entries.lines[i].indexOf(":");
        const inline = colon >= 0 ? entries.lines[i].slice(colon + 1).trim() : "";
        if (inline) return inline;
        return entries.lines[i + 1] || "";
      }
    }
  }
  return "";
}

function detectSelection(entries) {
  const labeled = valueFor(entries, ["Cược", "Lựa chọn", "Kèo", "Bet", "Selection", "Market"]);
  if (labeled) return labeled;

  const labels = [
    "ty le cuoc", "loai cuoc", "cuoc truc tiep tai/xiu", "su kien", "ngay su kien",
    "giai dau", "tien cuoc", "tien tra ve", "trang thai", "ket qua", "odds", "event",
    "date", "league", "stake", "return", "status", "result"
  ];

  for (let i = 0; i < entries.lines.length; i += 1) {
    const line = entries.normalized[i];
    if (labels.some((label) => line === label || line.startsWith(`${label}:`))) {
      if (!entries.lines[i].includes(":")) i += 1;
      continue;
    }
    if (/^(tai|xiu|over|under|handicap|moneyline|ml|draw|team|tong|kill)/i.test(line)) {
      return entries.lines[i];
    }
  }
  return "";
}

function parseBetslip(text, thousandsMode) {
  const entries = lineEntries(text);
  if (!entries.lines.length) return { bet: null, confidence: 0 };

  const event = valueFor(entries, ["Sự kiện", "Event", "Match"]);
  const league = valueFor(entries, ["Giải đấu", "League", "Competition"]);
  const selection = detectSelection(entries);
  const odds = parseNumber(valueFor(entries, ["Tỷ lệ cược", "Odds", "Price"]));
  const stakeVnd = parseMoney(valueFor(entries, ["Tiền cược", "Stake", "Wager"]), thousandsMode);
  const payoutVnd = parseMoney(valueFor(entries, ["Tiền trả về", "Return", "Payout", "To win"]), thousandsMode);
  const rawStatus = valueFor(entries, ["Trạng thái", "Status"]);
  const result = valueFor(entries, ["Kết quả", "Result", "Score"]);
  const rawDate = valueFor(entries, ["Ngày sự kiện", "Event date", "Date"]);
  const betType = valueFor(entries, ["Loại cược", "Bet type", "Market type"]);

  const bet = {
    id: uid(), event, league, bet: selection, odds, stakeVnd, payoutVnd,
    status: statusFrom(rawStatus), result, eventDate: toLocalDate(rawDate),
    notes: betType ? `Slip type: ${betType}` : "Auto-detected from pasted betslip"
  };

  const confidence = Math.min(100,
    (event ? 24 : 0) + (selection ? 20 : 0) + (odds > 1 ? 16 : 0) +
    (stakeVnd > 0 ? 16 : 0) + (rawStatus ? 10 : 0) + (league ? 5 : 0) +
    (bet.eventDate ? 5 : 0) + (result ? 4 : 0)
  );
  return { bet, confidence };
}

function profitLoss(bet) {
  const stake = Number(bet.stakeVnd) || 0;
  const odds = Number(bet.odds) || 0;
  const payout = Number(bet.payoutVnd) || 0;
  if (["pending", "void"].includes(bet.status)) return 0;
  if (payout > 0 && ["win", "half-win"].includes(bet.status)) return payout - stake;
  if (bet.status === "win") return stake * Math.max(0, odds - 1);
  if (bet.status === "half-win") return stake * Math.max(0, odds - 1) / 2;
  if (bet.status === "half-loss") return -stake / 2;
  if (bet.status === "loss") return -stake;
  return 0;
}

function formatVnd(value, signed = false) {
  const sign = value < 0 ? "−" : value > 0 && signed ? "+" : "";
  return `${sign}${new Intl.NumberFormat("en-US").format(Math.round(Math.abs(value)))} VND`;
}

function formatUnits(value, signed = false) {
  const amount = unitVnd ? value / unitVnd : 0;
  const sign = amount < 0 ? "−" : amount > 0 && signed ? "+" : "";
  return `${sign}${Math.abs(amount).toFixed(3)}u`;
}

function statusLabel(status) {
  return ({
    pending: "Pending", win: "Win", "half-win": "Half win", loss: "Loss",
    "half-loss": "Half loss", void: "Void"
  })[status] || status;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;"
  })[char]);
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat("en-GB", {
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
  }).format(date);
}

function renderDetected(confidence = 0) {
  const values = detectedBet ? [
    ["Event", detectedBet.event], ["Bet", detectedBet.bet], ["Odds", detectedBet.odds || ""],
    ["Stake", detectedBet.stakeVnd ? `${formatVnd(detectedBet.stakeVnd)} · ${formatUnits(detectedBet.stakeVnd)}` : ""],
    ["Status", statusLabel(detectedBet.status)], ["Result", detectedBet.result],
    ["League", detectedBet.league], ["Date", formatDate(detectedBet.eventDate)]
  ] : [];

  els.detectedFields.innerHTML = values.length
    ? values.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value || "Not detected")}</dd></div>`).join("")
    : `<div class="detected-placeholder">Paste a slip to preview detected fields.</div>`;

  els.confidenceLabel.textContent = `${confidence}% confidence`;
  els.addDetectedBtn.disabled = !(detectedBet?.event && detectedBet?.bet && detectedBet?.odds > 1 && detectedBet?.stakeVnd > 0);
  els.parserStatus.textContent = confidence >= 80 ? "Ready to add" : confidence > 0 ? "Review fields" : "Waiting for input";
  els.parserStatus.className = `status-chip ${confidence >= 80 ? "success" : confidence > 0 ? "warning" : "neutral"}`;
}

function render() {
  const query = normalize(els.searchInput.value).toLowerCase();
  const filter = els.statusFilter.value;
  const visible = bets.filter((bet) => {
    const matchesStatus = filter === "all" || bet.status === filter;
    const haystack = normalize(`${bet.event} ${bet.league} ${bet.bet} ${bet.result}`).toLowerCase();
    return matchesStatus && (!query || haystack.includes(query));
  });

  els.betsTableBody.innerHTML = visible.map((bet, index) => {
    const pl = profitLoss(bet);
    const plClass = pl > 0 ? "positive" : pl < 0 ? "negative" : "neutral-text";
    return `<tr>
      <td>${index + 1}</td>
      <td><strong>${escapeHtml(bet.event)}</strong><small>${escapeHtml(bet.league || "")}${bet.eventDate ? ` · ${escapeHtml(formatDate(bet.eventDate))}` : ""}</small></td>
      <td>${escapeHtml(bet.bet)}</td>
      <td>${Number(bet.odds).toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}</td>
      <td><strong>${formatUnits(bet.stakeVnd)}</strong><small>${formatVnd(bet.stakeVnd)}</small></td>
      <td><span class="status-pill ${bet.status}">${statusLabel(bet.status)}</span></td>
      <td>${escapeHtml(bet.result || "—")}</td>
      <td class="${plClass}"><strong>${bet.status === "pending" ? "—" : formatUnits(pl, true)}</strong><small>${bet.status === "pending" ? "" : formatVnd(pl, true)}</small></td>
      <td class="row-actions"><button type="button" data-action="edit" data-id="${bet.id}">Edit</button><button type="button" data-action="delete" data-id="${bet.id}">Delete</button></td>
    </tr>`;
  }).join("");
  els.emptyState.hidden = visible.length > 0;

  const settled = bets.filter((bet) => bet.status !== "pending").map(profitLoss);
  const winnings = settled.filter((value) => value > 0).reduce((sum, value) => sum + value, 0);
  const losses = settled.filter((value) => value < 0).reduce((sum, value) => sum + value, 0);
  const net = winnings + losses;
  const pending = bets.filter((bet) => bet.status === "pending").reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);

  $("#netUnits").textContent = formatUnits(net, true);
  $("#netVnd").textContent = formatVnd(net, true);
  $("#winningsUnits").textContent = formatUnits(winnings, true);
  $("#winningsVnd").textContent = formatVnd(winnings, true);
  $("#lossesUnits").textContent = formatUnits(losses, true);
  $("#lossesVnd").textContent = formatVnd(losses, true);
  $("#pendingUnits").textContent = formatUnits(pending);
  $("#pendingVnd").textContent = formatVnd(pending);
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function openDialog(bet = null) {
  els.dialogTitle.textContent = bet ? "Edit bet" : "Add bet";
  els.editingId.value = bet?.id || "";
  els.eventField.value = bet?.event || "";
  els.leagueField.value = bet?.league || "";
  els.betField.value = bet?.bet || "";
  els.oddsField.value = bet?.odds || "";
  els.stakeField.value = bet?.stakeVnd || "";
  els.statusField.value = bet?.status || "pending";
  els.dateField.value = bet?.eventDate || "";
  els.resultField.value = bet?.result || "";
  els.notesField.value = bet?.notes || "";
  els.manualDialog.showModal();
}

function download(filename, content, type) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type }));
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

els.slipInput.addEventListener("input", () => {
  const parsed = parseBetslip(els.slipInput.value, els.thousandsMode.checked);
  detectedBet = parsed.bet;
  renderDetected(parsed.confidence);
});
els.thousandsMode.addEventListener("change", () => els.slipInput.dispatchEvent(new Event("input")));
els.clearSlipBtn.addEventListener("click", () => { els.slipInput.value = ""; detectedBet = null; renderDetected(); });
els.addDetectedBtn.addEventListener("click", () => {
  bets.unshift({ ...detectedBet, id: uid() });
  persist(); render(); toast("Detected bet added");
  els.slipInput.value = ""; detectedBet = null; renderDetected();
});
els.openManualBtn.addEventListener("click", () => openDialog());
els.closeDialogBtn.addEventListener("click", () => els.manualDialog.close());
els.cancelDialogBtn.addEventListener("click", () => els.manualDialog.close());
els.manualForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = {
    id: els.editingId.value || uid(), event: els.eventField.value.trim(), league: els.leagueField.value.trim(),
    bet: els.betField.value.trim(), odds: Number(els.oddsField.value), stakeVnd: Number(els.stakeField.value),
    status: els.statusField.value, eventDate: els.dateField.value, result: els.resultField.value.trim(),
    notes: els.notesField.value.trim()
  };
  const index = bets.findIndex((bet) => bet.id === item.id);
  if (index >= 0) bets[index] = item; else bets.unshift(item);
  persist(); render(); els.manualDialog.close(); toast(index >= 0 ? "Bet updated" : "Bet added");
});
els.betsTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const bet = bets.find((item) => item.id === button.dataset.id);
  if (!bet) return;
  if (button.dataset.action === "edit") openDialog(bet);
  if (button.dataset.action === "delete" && confirm(`Delete ${bet.event}?`)) {
    bets = bets.filter((item) => item.id !== bet.id); persist(); render(); toast("Bet deleted");
  }
});
els.unitValue.addEventListener("change", () => {
  unitVnd = Math.max(1, Number(els.unitValue.value) || 500000); els.unitValue.value = unitVnd;
  persist(); render(); renderDetected(detectedBet ? 80 : 0);
});
els.searchInput.addEventListener("input", render);
els.statusFilter.addEventListener("change", render);
els.resetDataBtn.addEventListener("click", () => {
  if (!confirm("Reset all tracker data to the four starter bets?")) return;
  bets = DEFAULT_BETS.map((bet) => ({ ...bet, id: uid() })); persist(); render(); toast("Tracker reset");
});
els.exportJsonBtn.addEventListener("click", () => download("bet-tracker-backup.json", JSON.stringify({ unitVnd, bets }, null, 2), "application/json"));
els.exportCsvBtn.addEventListener("click", () => {
  const rows = [["Event", "League", "Bet", "Odds", "Stake VND", "Stake Units", "Status", "Result", "P/L VND", "P/L Units"]];
  bets.forEach((bet) => rows.push([bet.event, bet.league, bet.bet, bet.odds, bet.stakeVnd, bet.stakeVnd / unitVnd, bet.status, bet.result, profitLoss(bet), profitLoss(bet) / unitVnd]));
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  download("bet-tracker.csv", csv, "text/csv;charset=utf-8");
});
els.importJsonInput.addEventListener("change", async () => {
  const file = els.importJsonInput.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const imported = Array.isArray(data) ? data : data.bets;
    if (!Array.isArray(imported)) throw new Error("Invalid backup");
    bets = imported.map((bet) => ({ ...bet, id: bet.id || uid() }));
    if (Number(data.unitVnd) > 0) unitVnd = Number(data.unitVnd);
    els.unitValue.value = unitVnd; persist(); render(); toast("Backup imported");
  } catch {
    alert("This file is not a valid Bet Tracker JSON backup.");
  } finally {
    els.importJsonInput.value = "";
  }
});

renderDetected();
render();
