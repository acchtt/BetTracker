const CACHE_NAME = "edgelog-shell-20260727-1";
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
  "./dashboard.css",
  "./dashboard-home.css?v=20260727-1",
  "./analytics-v2.css",
  "./bankroll-v2.css",
  "./app-v3.js",
  "./parser-popup.js",
  "./reporting-suite.js?v=20260727-1",
  "./bets-productivity.js?v=20260727-1",
  "./bankroll-goals.js?v=20260727-1",
  "./pwa.js?v=20260727-1",
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