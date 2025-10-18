// Love Dossier - Service Worker
// Version 3.0.0 - All 32 types with full JavaScript functionality

const CACHE_NAME = 'love-dossier-v3.0.0';
const urlsToCache = [
  './',
  './index.html',
  './LoveDossier.ico',
  './preview.png',
  './manifest.json',
  
  // Top-5 Priority Types (Enhanced)
  './types/enhanced-communication-log.html',
  './types/enhanced-finances.html',
  './types/enhanced-relationship-goals.html',
  './types/enhanced-shopping-list.html',
  './types/enhanced-travel-planner.html',
  
  // Enhanced Types (6-21)
  './types/enhanced-date-ideas.html',
  './types/enhanced-memory-album.html',
  './types/enhanced-recipe-book.html',
  './types/enhanced-gift-registry.html',
  './types/enhanced-mood-tracker.html',
  './types/enhanced-books-movies.html',
  './types/enhanced-bucket-list.html',
  './types/enhanced-event-countdown.html',
  './types/enhanced-timeline.html',
  './types/enhanced-smart-checklist.html',
  './types/enhanced-progress.html',
  './types/enhanced-interactive-map.html',
  './types/enhanced-smart-date.html',
  './types/enhanced-social-links.html',
  './types/enhanced-tags.html',
  './types/enhanced-rating.html',
  
  // Basic Types (22-32)
  './types/enhanced-multi-select.html',
  './types/enhanced-currency-manager.html',
  './types/enhanced-password-vault.html',
  './types/enhanced-rich-text.html',
  './types/enhanced-smart-phone.html',
  './types/enhanced-smart-email.html',
  './types/enhanced-smart-time.html',
  './types/enhanced-smart-number.html',
  './types/enhanced-color-picker.html',
  './types/enhanced-document-vault.html',
  './types/enhanced-image-gallery.html'
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
