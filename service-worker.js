// Love Dossier - Service Worker
// Version 2.1.0 - Updated drag & drop system

const CACHE_NAME = 'love-dossier-v2.1.0';
const urlsToCache = [
  './',
  './index.html',
  './LoveDossier.ico',
  './preview.png',
  './manifest.json'
];

// Install event - кешуємо файли
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Кешування файлів');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - видаляємо старі кеші
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log('[SW] Видалення старого кешу:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - стратегія Cache First з Network Fallback
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Пропускаємо запити що не можна кешувати
  if (
    // Chrome extensions
    requestUrl.protocol === 'chrome-extension:' ||
    requestUrl.protocol === 'moz-extension:' ||
    // Google APIs
    requestUrl.hostname.includes('google.com') ||
    requestUrl.hostname.includes('googleapis.com') ||
    requestUrl.hostname.includes('gstatic.com') ||
    // Рекламні мережі
    requestUrl.hostname.includes('googlesyndication.com') ||
    requestUrl.hostname.includes('doubleclick.net') ||
    // Тільки HTTP/HTTPS
    !requestUrl.protocol.startsWith('http')
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Якщо є в кеші - повертаємо з кешу
        if (response) {
          return response;
        }

        // Інакше - робимо запит до мережі
        return fetch(event.request)
          .then((response) => {
            // Перевіряємо чи відповідь валідна
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Клонуємо відповідь
            const responseToCache = response.clone();

            // Додаємо до кешу (без await для швидкості)
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              })
              .catch((err) => {
                console.log('[SW] Помилка кешування:', err);
              });

            return response;
          })
          .catch(() => {
            // Якщо мережа недоступна і нема в кеші
            console.log('[SW] Offline, ресурс не знайдено:', event.request.url);
          });
      })
  );
});

// Message event - обробка повідомлень від клієнта
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME)
      .then(() => {
        console.log('[SW] Кеш очищено');
        event.ports[0].postMessage({ success: true });
      });
  }
});
