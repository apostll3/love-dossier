
# 🧠 DEVELOPER_GUIDE.md v2.0

## 🇬🇧 Overview
This document provides a technical overview of the **"Love Dossier"** web application v2.0.  
It is intended for developers who wish to understand, maintain, or extend the project.

The app is a **single-file HTML + CSS + JavaScript** web application (9245 lines, 338KB) that runs entirely in the browser — no server or database is required.

---

## 🇺🇦 Огляд
Цей документ надає технічний огляд веб-додатку **«Досьє коханої людини»**.  
Він призначений для розробників, які хочуть зрозуміти, підтримувати або розширювати проект.

Додаток є **автономним HTML + CSS + JavaScript** рішенням, що повністю працює у браузері — без серверної частини чи бази даних.

---

## 🇬🇧 Project Architecture
- **index.html** — contains all UI markup, embedded CSS, and inline JS logic.
- **Core layers:**
  - **UI Layer:** interactive layout (header, sidebar, content, modals).
  - **Logic Layer:** handles CRUD operations for fields and categories.
  - **Storage Layer:** manages saving/loading from LocalStorage or Google Sheets.
- **Design:** responsive, modular CSS system with consistent component styling.
- **Icons:** Font Awesome 6.

---

## 🇺🇦 Архітектура проекту
- **index.html** — містить усю розмітку UI, вбудовані стилі CSS та JavaScript-логіку.
- **Основні шари:**
  - **UI шар:** відображення інтерфейсу (header, sidebar, content, modals).
  - **Логічний шар:** CRUD-операції з полями та категоріями.
  - **Шар збереження:** керує LocalStorage та інтеграцією з Google Sheets.
- **Дизайн:** адаптивний, модульний CSS із уніфікованим стилем компонентів.
- **Іконки:** Font Awesome 6.

---

## 🇬🇧 Core Functionality
- Dynamic creation and management of **categories** and **fields**.
- Text formatting using markdown-like syntax (**bold**, *italic*, ~~strike~~, [links](#)).
- **Modal windows** for editing/creating fields.
- **Search and filtering** by importance, completion, and keywords.
- **Progress tracking** with animated progress bars.
- **Toasts** for notifications and actions feedback.

---

## 🇺🇦 Основна логіка
- Динамічне створення та керування **категоріями** й **полями**.
- Форматування тексту через markdown-синтаксис (**жирний**, *курсив*, ~~закреслений~~, [посилання](#)).
- **Модальні вікна** для редагування або створення полів.
- **Пошук і фільтри** за важливістю, заповненістю та ключовими словами.
- **Відстеження прогресу** через анімовані прогрес-бари.
- **Toast-повідомлення** для результатів дій.

---

## 🇬🇧 UI Components
- **Header:** title, search bar, filters, sync status.
- **Sidebar:** category navigation and management.
- **Content area:** fields grid, action buttons, nested subcategories.
- **Modal windows:** edit/create dialogs, settings, confirmation dialogs.
- **Toasts:** lightweight notification system.
- **Custom selects, filters, and format menus** for rich UX.

---

## 🇺🇦 Компоненти інтерфейсу
- **Header:** заголовок, пошук, фільтри, статус синхронізації.
- **Sidebar:** навігація по категоріях та керування ними.
- **Content:** сітка полів, кнопки дій, вкладені підкатегорії.
- **Модальні вікна:** редагування, створення, налаштування, підтвердження.
- **Toast:** система сповіщень.
- **Кастомні селекти, фільтри та меню форматування** для покращеного UX.

---

## 🇬🇧 Data Storage & Sync
- Default storage: **localStorage** (browser-based).
- Optional: **Google Sheets synchronization** using Google API.
- Supports **manual export/import** (JSON or encrypted files).
- Autosave and periodic sync supported.
- Local-first principle: works offline after first load.

---

## 🇺🇦 Збереження та синхронізація
- За замовчуванням використовується **localStorage** у браузері.
- Опційно доступна **синхронізація з Google Sheets** через Google API.
- Підтримується **експорт/імпорт** (JSON або зашифровані файли).
- Є **автозбереження** та **періодична синхронізація**.
- Принцип **Local-first**: працює офлайн після першого запуску.

---

## 🇬🇧 Security & Encryption
- AES-GCM 256-bit encryption for Google Sheets sync.
- Password never stored locally.
- Tokens stored in session (not in localStorage).
- Optional encryption layer for manual backups.

---

## 🇺🇦 Безпека та шифрування
- Використовується AES-GCM 256-бітне шифрування при синхронізації з Google Sheets.
- Пароль **не зберігається** локально.
- Токени зберігаються лише в **session**, не в localStorage.
- Можна використовувати шифрування при ручному експорті даних.

---

## 🇬🇧 Extending the App
- Add new categories by defining new field sets in JS.
- Extend UI using consistent CSS class naming (`.field-card`, `.modal`, etc.).
- To add new storage backends — implement adapter functions (`saveData`, `loadData`).
- For localization — wrap UI strings in translation objects.

---

## 🇺🇦 Розширення додатку
- Додати нові категорії можна, створивши нові набори полів у JS.
- Розширюйте UI, дотримуючись системи іменування класів (`.field-card`, `.modal` тощо).
- Щоб додати нове сховище — реалізуйте адаптерні функції (`saveData`, `loadData`).
- Для локалізації — оберніть рядки інтерфейсу в об’єкти перекладів.

---

## 🇬🇧 Developer Notes
- All animations use CSS transitions — no external libraries.
- Avoid DOM-heavy operations; use caching where possible.
- Testing: open `index.html` directly in browser.
- Debugging: use browser DevTools console.

---

## 🇺🇦 Примітки розробника
- Усі анімації реалізовано через CSS transitions — без сторонніх бібліотек.
- Уникайте важких DOM-операцій, використовуйте кешування.
- Для тестування достатньо відкрити `index.html` у браузері.
- Для налагодження використовуйте консоль DevTools.
