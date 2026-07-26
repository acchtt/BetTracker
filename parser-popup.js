(() => {
  document.querySelectorAll(".sidebar-nav a[href='parser.html']").forEach((link) => link.remove());
  document.querySelectorAll(".avatar-pill").forEach((avatar) => avatar.remove());

  const style = document.createElement("style");
  style.textContent = `
    #parserDialog {
      width: min(980px, calc(100vw - 28px));
      max-height: calc(100vh - 28px);
      padding: 0;
      border: 0;
      border-radius: 22px;
      overflow: auto;
      background: transparent;
    }
    #parserDialog::backdrop {
      background: rgba(4, 10, 22, .68);
      backdrop-filter: blur(7px);
    }
    .parser-dialog-shell {
      padding: 20px;
      border: 1px solid var(--line);
      border-radius: 22px;
      background: var(--panel);
      color: var(--text);
      box-shadow: var(--shadow);
    }
    .parser-dialog-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 16px;
    }
    .parser-dialog-heading h2 { margin: 0; font-size: 1.22rem; letter-spacing: -.03em; }
    .parser-dialog-heading p:not(.panel-kicker) { margin: 6px 0 0; color: var(--muted); font-size: .88rem; }
    .parser-dialog-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(310px, .75fr);
      gap: 14px;
    }
    .parser-dialog-pane {
      padding: 15px;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: var(--panel-soft);
    }
    .parser-dialog-pane textarea { min-height: 250px; }
    .parser-dialog-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-top: 15px;
    }
    .parser-dialog-footer__right { display: flex; gap: 9px; }
    @media (max-width: 760px) {
      .parser-dialog-grid { grid-template-columns: 1fr; }
      .parser-dialog-footer { flex-direction: column; align-items: stretch; }
      .parser-dialog-footer__right { display: grid; }
    }
  `;
  document.head.append(style);

  const dialog = document.createElement("dialog");
  dialog.id = "parserDialog";
  dialog.innerHTML = `
    <div class="parser-dialog-shell">
      <div class="parser-dialog-heading">
        <div>
          <p class="panel-kicker">IMPORT BETSLIP</p>
          <h2>Paste sportsbook text</h2>
          <p>EdgeLog will detect the event, market, odds, stake, result, and status.</p>
        </div>
        <button id="closeParserDialogBtn" class="icon-button" type="button" aria-label="Close">×</button>
      </div>

      <div class="parser-dialog-grid">
        <section class="parser-dialog-pane">
          <div class="panel-heading">
            <div>
              <p class="panel-kicker">BETSLIP TEXT</p>
              <h2>Paste your slip</h2>
            </div>
            <span id="parserStatus" class="status-chip neutral">Waiting for input</span>
          </div>
          <label for="slipInput" class="field-label">Raw sportsbook text</label>
          <textarea id="slipInput" rows="13" placeholder="Paste the full betslip here…"></textarea>
          <div class="option-row">
            <label class="switch-row"><input id="thousandsMode" type="checkbox" checked><span>Money values are shown in thousands of VND</span></label>
            <button id="clearSlipBtn" class="text-button" type="button">Clear</button>
          </div>
        </section>

        <aside class="parser-dialog-pane">
          <div class="detected-header">
            <div>
              <p class="panel-kicker">PREVIEW</p>
              <h3>Detected fields</h3>
              <p>Review the extracted values before saving.</p>
            </div>
            <span id="confidenceLabel">0% confidence</span>
          </div>
          <dl id="detectedFields" class="detected-grid"></dl>
        </aside>
      </div>

      <div class="parser-dialog-footer">
        <a class="button secondary" href="bets.html?add=1">Manual entry instead</a>
        <div class="parser-dialog-footer__right">
          <button id="cancelParserDialogBtn" class="button secondary" type="button">Cancel</button>
          <button id="addDetectedBtn" class="button primary" type="button" disabled>Add detected bet</button>
        </div>
      </div>
    </div>
  `;
  document.body.append(dialog);

  const slipInput = dialog.querySelector("#slipInput");
  const thousandsMode = dialog.querySelector("#thousandsMode");

  function clearParser() {
    slipInput.value = "";
    detectedBet = null;
    renderDetected();
  }

  function openParser() {
    if (!dialog.open) dialog.showModal();
    renderDetected(detectedBet ? 80 : 0);
    requestAnimationFrame(() => slipInput.focus());
  }

  function closeParser() {
    if (dialog.open) dialog.close();
  }

  slipInput.addEventListener("input", () => {
    const parsed = parseBetslip(slipInput.value, thousandsMode.checked);
    detectedBet = parsed.bet;
    renderDetected(parsed.confidence);
  });
  thousandsMode.addEventListener("change", () => slipInput.dispatchEvent(new Event("input")));
  dialog.querySelector("#clearSlipBtn").addEventListener("click", clearParser);
  dialog.querySelector("#closeParserDialogBtn").addEventListener("click", closeParser);
  dialog.querySelector("#cancelParserDialogBtn").addEventListener("click", closeParser);
  dialog.querySelector("#addDetectedBtn").addEventListener("click", () => {
    if (!detectedBet) return;
    const now = new Date().toISOString();
    bets.unshift({
      ...detectedBet,
      id: uid(),
      settledAt: detectedBet.status && detectedBet.status !== "pending" ? (detectedBet.settledAt || now) : detectedBet.settledAt,
      _localEditedAt: now
    });
    persist();
    render();
    toast("Detected bet added");
    clearParser();
    closeParser();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeParser();
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-parser], a[href='parser.html'], a[href$='/parser.html']");
    if (!trigger) return;
    event.preventDefault();
    openParser();
  });

  [
    "bet-metadata.js?v=20260727-1",
    "bet-metadata-fixes.js?v=20260727-1",
    "clv-tracking.js?v=20260727-1",
    "backup-v2.js?v=20260727-1",
    "csv-export-v2.js?v=20260727-3",
    "risk-guardrails.js?v=20260727-1",
    "sport-detection-patch.js?v=20260727-1",
    "live-sync.js?v=20260727-5",
    "manual-popup.js?v=20260727-7",
    "logo-home-link.js?v=20260727-1",
    "bet-review.js?v=20260727-1",
    "quick-settlement.js?v=20260727-2",
    "mobile-history.js?v=20260727-1",
    "parser-image-ocr.js"
  ].forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.body.append(script);
  });

  const params = new URLSearchParams(location.search);
  if (params.get("parser") === "1") {
    openParser();
    params.delete("parser");
    const next = `${location.pathname}${params.toString() ? `?${params}` : ""}${location.hash}`;
    history.replaceState({}, "", next);
  }
})();