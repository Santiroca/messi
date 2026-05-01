const CACHE_NAME = 'messi-v1';

// On install - cache the basic shell
self.addEventListener('install', e => {
  self.skipWaiting();
});

// On activate - clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network first strategy
// Always try network first, fall back to cache if offline
self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Got network response - update cache and return
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => {
        // Network failed - try cache
        return caches.match(e.request);
      })
  );
});
