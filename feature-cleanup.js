(() => {
  if (globalThis.__edgeLogFeatureCleanup) return;
  globalThis.__edgeLogFeatureCleanup = true;

  const reviewFieldIds = [
    "confidenceField",
    "processGradeField",
    "mistakeTypeField",
    "thesisField",
    "postReviewField"
  ];

  function hideReviewFields() {
    reviewFieldIds.forEach((id) => {
      const field = document.getElementById(id);
      const wrapper = field?.closest("label");
      if (wrapper) wrapper.remove();
    });
    document.querySelectorAll(".review-form-help").forEach((element) => element.remove());
  }

  function removeAssessedUi() {
    hideReviewFields();
    document.querySelectorAll([
      "#dashboardActionCenter",
      "#reviewAnalyticsPanel",
      "#clvAnalyticsPanel",
      "#reviewFilter",
      "#attentionFilter",
      ".review-filter-field",
      ".attention-filter-field",
      ".review-action",
      ".bet-meta-chip--confidence",
      ".bet-meta-chip--process-good",
      ".bet-meta-chip--process-mixed",
      ".bet-meta-chip--process-poor",
      ".bet-meta-chip--mistake"
    ].join(",")).forEach((element) => element.remove());
  }

  const observer = new MutationObserver(removeAssessedUi);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  removeAssessedUi();
})();