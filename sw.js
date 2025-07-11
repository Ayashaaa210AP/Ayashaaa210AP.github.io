// sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pwa-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icons/1chrome-192x192.png',
        './icons/1chrome-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
