/*
 * When a new service worker replaces the legacy single-page build, claim
 * existing tabs and let their next navigation use the new prerendered pages.
 * The worker intentionally does not navigate tabs during activation: doing so
 * can interrupt an in-progress form or create a reload loop in some browsers.
 */
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
