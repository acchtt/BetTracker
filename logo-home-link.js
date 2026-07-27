(() => {
  if (globalThis.__slipTraceLogoHomeLink) return;
  globalThis.__slipTraceLogoHomeLink = true;

  const style = document.createElement("style");
  style.textContent = `
    .sidebar-brand__home {
      display: block;
      color: inherit;
      text-decoration: none;
      border-radius: 12px;
      cursor: pointer;
      transition: transform .16s ease, opacity .16s ease;
    }
    .sidebar-brand__home:hover {
      transform: translateY(-1px);
      opacity: .9;
    }
    .sidebar-brand__home:focus-visible {
      outline: 2px solid var(--blue);
      outline-offset: 4px;
    }
  `;
  document.head.append(style);

  document.querySelectorAll(".sidebar-brand").forEach((brand) => {
    if (brand.querySelector(":scope > .sidebar-brand__home")) return;
    const link = document.createElement("a");
    link.className = "sidebar-brand__home";
    link.href = "index.html";
    link.setAttribute("aria-label", "Go to SlipTrace dashboard");
    while (brand.firstChild) link.append(brand.firstChild);
    brand.append(link);
  });
})();