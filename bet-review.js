(() => {
  if (globalThis.__edgeLogBetReview || typeof bets === "undefined") return;
  globalThis.__edgeLogBetReview = true;

  const PROCESS_GRADES = {
    good: "Good decision",
    mixed: "Mixed decision",
    poor: "Poor decision"
  };

  const MISTAKES = {
    none: "No mistake",
    "bad-read": "Bad read",
    "bad-price": "Bad price",
    "late-entry": "Late entry",
    overstake: "Overstaked",
    chasing: "Chasing",
    tilt: "Tilt",
    execution: "Execution error",
    other: "Other mistake"
  };

  const style = document.createElement("style");
  style.textContent = `
    .bet-meta-chip--confidence {
      border-color: color-mix(in srgb, var(--blue) 30%, var(--line));
      background: var(--blue-soft);
      color: var(--blue);
    }
    .bet-meta-chip--process-good {
      border-color: color-mix(in srgb, var(--green) 34%, var(--line));
      background: var(--green-soft);
      color: var(--green);
    }
    .bet-meta-chip--process-mixed {
      border-color: color-mix(in srgb, var(--amber) 34%, var(--line));
      background: color-mix(in srgb, var(--amber) 12%, var(--panel));
      color: var(--amber);
    }
    .bet-meta-chip--process-poor,
    .bet-meta-chip--mistake {
      border-color: color-mix(in srgb, var(--red) 34%, var(--line));
      background: var(--red-soft);
      color: var(--red);
    }
    .review-action {
      color: var(--purple) !important;
    }
    .review-filter-field { min-width: 150px; }
    .review-form-help {
      grid-column: 1 / -1;
      margin: -3px 0 0;
      color: var(--muted);
      font-size: .75rem;
      line-height: 1.45;
    }
    @media (max-width: 760px) {
      .review-filter-field { width: 100%; min-width: 0; }
    }
  `;
  document.head.append(style);

  function confidenceValue(value) {
    const parsed = Number(value || 0);
    return Number.isInteger(parsed) && parsed >= 1 && parsed <= 5 ? parsed : null;
  }

  function canonicalGrade(value) {
    const text = normalize(value || "").toLowerCase();
    if (!text) return "";
    if (/good|strong|correct process|tot|good decision/.test(text)) return "good";
    if (/mixed|average|acceptable|trung binh/.test(text)) return "mixed";
    if (/poor|bad decision|weak|kem/.test(text)) return "poor";
    return Object.prototype.hasOwnProperty.call(PROCESS_GRADES, text) ? text : "";
  }

  function canonicalMistake(value) {
    const text = normalize(value || "").toLowerCase();
    if (!text) return "";
    if (/none|no mistake|khong/.test(text)) return "none";
    if (/bad read|read|phan tich sai/.test(text)) return "bad-read";
    if (/bad price|price|odds|gia xau/.test(text)) return "bad-price";
    if (/late|vao tre/.test(text)) return "late-entry";
    if (/over.?stake|stake too high|qua tay/.test(text)) return "overstake";
    if (/chas|duoi/.test(text)) return "chasing";
    if (/tilt|cam xuc/.test(text)) return "tilt";
    if (/execution|nhap sai|thuc thi/.test(text)) return "execution";
    if (/other|khac/.test(text)) return "other";
    return Object.prototype.hasOwnProperty.call(MISTAKES, text) ? text : "other";
  }

  function reviewFor(bet = {}) {
    const confidence = confidenceValue(bet.confidence);
    const processGrade = canonicalGrade(bet.processGrade);
    const mistakeType = canonicalMistake(bet.mistakeType);
    const thesis = String(bet.thesis || "").trim();
    const postReview = String(bet.postReview || "").trim();
    const reviewed = Boolean(processGrade || postReview || (mistakeType && mistakeType !== "none"));
    return { confidence, processGrade, mistakeType, thesis, postReview, reviewed };
  }

  globalThis.EdgeLogReview = {
    PROCESS_GRADES,
    MISTAKES,
    confidenceValue,
    canonicalGrade,
    canonicalMistake,
    reviewFor
  };

  if (typeof parseBetslip === "function") {
    const originalParseBetslip = parseBetslip;
    parseBetslip = function reviewParseBetslip(text, thousandsMode) {
      const parsed = originalParseBetslip(text, thousandsMode);
      if (!parsed?.bet) return parsed;
      const entries = typeof lineEntries === "function" ? lineEntries(text) : null;
      if (!entries || typeof valueFor !== "function") return parsed;
      const confidence = valueFor(entries, ["Confidence", "Confidence score", "Độ tin cậy", "Do tin cay"]);
      const thesis = valueFor(entries, ["Thesis", "Bet thesis", "Reason", "Lý do", "Ly do"]);
      const grade = valueFor(entries, ["Process grade", "Decision quality", "Process quality", "Chất lượng quyết định", "Chat luong quyet dinh"]);
      const mistake = valueFor(entries, ["Mistake", "Mistake type", "Error type", "Sai lầm", "Sai lam"]);
      const postReview = valueFor(entries, ["Post-bet review", "Bet review", "Review", "Đánh giá", "Danh gia"]);
      parsed.bet.confidence = confidenceValue(String(confidence || "").match(/[1-5]/)?.[0]);
      parsed.bet.thesis = String(thesis || "").trim();
      parsed.bet.processGrade = canonicalGrade(grade);
      parsed.bet.mistakeType = canonicalMistake(mistake);
      parsed.bet.postReview = String(postReview || "").trim();
      return parsed;
    };
  }

  if (typeof renderDetected === "function") {
    const originalRenderDetected = renderDetected;
    renderDetected = function reviewRenderDetected(confidence = 0) {
      const result = originalRenderDetected(confidence);
      const list = document.querySelector("#detectedFields");
      if (!list || !detectedBet) return result;
      const review = reviewFor(detectedBet);
      const values = [
        ["Confidence", review.confidence ? `${review.confidence}/5` : ""],
        ["Thesis", review.thesis],
        ["Decision quality", PROCESS_GRADES[review.processGrade] || ""],
        ["Mistake", MISTAKES[review.mistakeType] || ""],
        ["Post-bet review", review.postReview]
      ].filter(([, value]) => value);
      values.forEach(([label, value]) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`;
        list.append(wrapper);
      });
      return result;
    };
  }

  function chip(label, className, title = "") {
    return `<span class="bet-meta-chip ${className}"${title ? ` title="${escapeHtml(title)}"` : ""}>${escapeHtml(label)}</span>`;
  }

  if (typeof betRow === "function") {
    const originalBetRow = betRow;
    betRow = function reviewBetRow(bet, index, actions = true) {
      let html = originalBetRow(bet, index, actions);
      const review = reviewFor(bet);
      const chips = [];
      if (review.confidence) chips.push(chip(`Confidence ${review.confidence}/5`, "bet-meta-chip--confidence", review.thesis));
      if (review.processGrade) chips.push(chip(PROCESS_GRADES[review.processGrade], `bet-meta-chip--process-${review.processGrade}`, review.postReview));
      if (review.mistakeType && review.mistakeType !== "none") chips.push(chip(MISTAKES[review.mistakeType], "bet-meta-chip--mistake"));

      if (chips.length) {
        const markup = chips.join("");
        if (html.includes('<div class="bet-meta">')) {
          html = html.replace('<div class="bet-meta">', `<div class="bet-meta">${markup}`);
        } else {
          const marker = `<td><div class="bet-copy"><strong>${escapeHtml(bet.bet)}</strong>`;
          if (html.includes(marker)) html = html.replace(marker, `${marker}<div class="bet-meta">${markup}</div>`);
        }
      }

      html = html.replace("<tr", `<tr data-review-grade="${escapeHtml(review.processGrade || "unreviewed")}" data-reviewed="${review.reviewed ? "true" : "false"}" data-has-mistake="${review.mistakeType && review.mistakeType !== "none" ? "true" : "false"}" data-confidence="${review.confidence || ""}"`);

      if (actions && bet.status !== "pending") {
        html = html.replace('<td class="row-actions">', `<td class="row-actions"><button type="button" class="review-action" data-action="edit" data-id="${bet.id}" data-review-focus="${bet.id}">Review</button>`);
      }
      return html;
    };
  }

  function ensureReviewFilter() {
    const filters = document.querySelector(".filters");
    if (!filters || document.querySelector("#reviewFilter")) return;
    const reset = document.querySelector("#resetFilters");
    const label = document.createElement("label");
    label.className = "filter-field review-filter-field";
    label.innerHTML = `<select id="reviewFilter" aria-label="Filter by review status">
      <option value="all">All reviews</option>
      <option value="unreviewed">Needs review</option>
      <option value="reviewed">Reviewed</option>
      <option value="good">Good decisions</option>
      <option value="mixed">Mixed decisions</option>
      <option value="poor">Poor decisions</option>
      <option value="mistake">Mistake flagged</option>
    </select>`;
    filters.insertBefore(label, reset || null);
    label.querySelector("select").addEventListener("change", renderTables);
    reset?.addEventListener("click", () => {
      const filter = document.querySelector("#reviewFilter");
      if (filter) filter.value = "all";
      renderTables();
    });
  }

  function applyReviewFilter() {
    const body = document.querySelector("#betsTableBody");
    if (!body) return;
    const filter = document.querySelector("#reviewFilter")?.value || "all";
    let visibleIndex = 0;
    [...body.querySelectorAll("tr")].forEach((row) => {
      const reviewed = row.dataset.reviewed === "true";
      const grade = row.dataset.reviewGrade || "unreviewed";
      const hasMistake = row.dataset.hasMistake === "true";
      const visible = filter === "all"
        || (filter === "unreviewed" && !reviewed)
        || (filter === "reviewed" && reviewed)
        || (["good", "mixed", "poor"].includes(filter) && grade === filter)
        || (filter === "mistake" && hasMistake);
      row.hidden = !visible;
      if (visible) {
        visibleIndex += 1;
        const firstCell = row.querySelector("td");
        if (firstCell) firstCell.textContent = String(visibleIndex);
      }
    });
    const empty = document.querySelector("#emptyState");
    if (empty) empty.hidden = visibleIndex > 0;
  }

  if (typeof renderTables === "function") {
    const previousRenderTables = renderTables;
    renderTables = function reviewAwareTables(...args) {
      const result = previousRenderTables(...args);
      ensureReviewFilter();
      applyReviewFilter();
      return result;
    };
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-review-focus]");
    if (!button) return;
    requestAnimationFrame(() => {
      const title = document.querySelector("#dialogTitle");
      if (title) title.textContent = "Review bet";
      const reviewField = document.querySelector("#postReviewField");
      reviewField?.focus();
    });
  });

  ensureReviewFilter();
  if (typeof renderTables === "function") renderTables();
})();