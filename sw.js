const CACHE_NAME = "edgelog-shell-20260727-4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./bets.html",
  "./analytics.html",
  "./calendar.html",
  "./reports.html",
  "./bankroll.html",
  "./settings.html",
  "./help.html",
  "./manifest.webmanifest",
  "./dashboard.css",
  "./dashboard-home.css?v=20260727-1",
  "./analytics-v2.css",
  "./bankroll-v2.css",
  "./app-v3.js",
  "./parser-popup.js",
  "./bet-metadata.js?v=20260727-1",
  "./bet-metadata-fixes.js?v=20260727-1",
  "./backup-v2.js?v=20260727-1",
  "./csv-export-v2.js?v=20260727-4",
  "./risk-guardrails.js?v=20260727-1",
  "./duplicate-check.js?v=20260727-1",
  "./sport-detection-patch.js?v=20260727-1",
  "./live-sync.js?v=20260727-6",
  "./manual-popup.js?v=20260727-8",
  "./logo-home-link.js?v=20260727-1",
  "./quick-settlement.js?v=20260727-2",
  "./mobile-history.js?v=20260727-1",
  "./reporting-suite.js?v=20260727-1",
  "./bets-productivity.js?v=20260727-1",
  "./bankroll-goals.js?v=20260727-1",
  "./bets-workspace.js?v=20260727-1",
  "./pwa.js?v=20260727-1",
  "./import-review-fix.js?v=20260727-1",
  "./parser-image-ocr.js",
  "./bankroll-v2.js",
  "./analytics-v2.js",
  "./analytics-dimensions.js?v=20260727-2",
  "./assets/edgelog-horizontal-dark.svg?v=1",
  "./assets/edgelog-app-icon.svg?v=4"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isDocument = event.request.mode === "navigate";
  const isLedger = url.pathname.endsWith("/ledger.json");

  if (isDocument || isLedger) {
    event.respondWith(fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html"))));
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
    }
    return response;
  })));
});