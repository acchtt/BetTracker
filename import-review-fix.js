(() => {
  document.addEventListener("input", (event) => {
    const input = event.target.closest("#detectedFields [data-import-field]");
    if (!input || typeof detectedBet === "undefined" || !detectedBet) return;

    event.stopImmediatePropagation();
    const key = input.dataset.importField;
    detectedBet[key] = ["odds", "stakeVnd"].includes(key) ? Number(input.value || 0) : input.value;

    const missing = !input.value || (key === "odds" && Number(input.value) <= 1) || (key === "stakeVnd" && Number(input.value) <= 0);
    if (["event", "bet", "odds", "stakeVnd"].includes(key)) input.closest(".import-review-field")?.classList.toggle("is-missing", missing);

    const add = document.querySelector("#addDetectedBtn");
    if (add) add.disabled = !(detectedBet.event && detectedBet.bet && Number(detectedBet.odds) > 1 && Number(detectedBet.stakeVnd) > 0);
    const status = document.querySelector("#parserStatus");
    if (status) {
      status.textContent = add?.disabled ? "Review fields" : "Ready to add";
      status.className = `status-chip ${add?.disabled ? "warning" : "success"}`;
    }
  }, true);
})();