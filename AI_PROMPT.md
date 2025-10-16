# 🤖 AI Assistant Prompt — Love Dossier Project

> **Instructions for AI assistants working on the Love Dossier codebase**

---

## 📋 Project Overview

**Love Dossier** is a privacy-focused, single-file web application for organizing personal information about a loved one. Built with pure HTML, CSS, and Vanilla JavaScript.

### Quick Facts
- **Tech Stack**: HTML5 + CSS3 + Vanilla JS (ES6+)
- **File Size**: 14,971 lines, 576KB
- **Architecture**: Single-file application (`index.html`) + PWA files
- **Storage**: LocalStorage (default), Google Sheets (optional), File export/import
- **Security**: AES-GCM 256-bit encryption
- **Languages**: 4 languages supported (Ukrainian, English, Russian, Polish)
- **Themes**: 6 built-in themes with import/export support
- **PWA**: Installable app with Service Worker for offline use
- **Version**: 2.0

### Key Features
1. **16 Categories**: Base, Character, Preferences, Anti-preferences, Gifts, Psychology, Psych, Logistics, Goals, Custom, Communication, Finance, Intimacy, Family, Career, Culture
2. **64+ Fields**: Comprehensive field set with 5 types (text, textarea, date, tags, nested)
3. **Rich Text Formatting**: Markdown-like syntax with context menu and hotkeys
4. **Smart Search & Filters**: Real-time search across all fields
5. **Progress Tracking**: Visual progress bars for each category
6. **Sync Modes**: Local storage, Google Sheets, manual file backup
7. **Responsive Design**: Mobile-first, fully adaptive
8. **Built-in Testing**: 40+ automated tests

---

## 🏗 Code Structure

### File Layout
```
Lines 1-48      → HTML head (includes PWA manifest, SEO meta tags)
Lines 49-4760   → <style> CSS (includes theme system styles)
Lines 4761-5035 → HTML body
Lines 5036-14971 → <script> JavaScript (includes ThemeManager)
```

### Additional Files
- `manifest.json` — PWA manifest for app installation
- `service-worker.js` — Service Worker for offline functionality

### JavaScript Organization
```javascript
// Constants & Config (3029-3860)
DELAYS, TRANSLATIONS

// State (3861-3900)
State = {config, values, language, ui, sync}

// Default Config (5696-5900)
DefaultConfig = {categories, fields}

// Core Modules (5901-6450)
i18n, GoogleSheetsSync, Storage, SyncManager

// UI Utilities (6625-7200)
TelegramWebApp, FormatMenu, Toast, Modal, CustomSelect

// Business Logic (7200-8800)
Progress, Search, Renderer, CategorySettings, WelcomeModal

// Testing (8800-9700)
TestDrive

// Theme System (9700-12750)
ThemeManager

// App Controller (12750-14971)
App.init()
Service Worker registration
```

---

## 💻 Development Guidelines

### Code Conventions

**CSS**:
- Use CSS variables: `var(--primary)`, `var(--card)`, etc.
- BEM-like naming: `.field-card`, `.modal-overlay`
- Mobile-first responsive design
- CSS transitions only (no animation libraries)

**JavaScript**:
- Pure Vanilla JS (ES6+), no frameworks
- Modular objects with methods
- Event delegation for dynamic elements
- Async/await for asynchronous operations
- Comments in Ukrainian (for code)

**HTML**:
- Semantic markup
- Data attributes for actions: `data-action="App.method"`
- Translation attributes: `data-i18n="key"`

### Naming Patterns

```javascript
// Objects (PascalCase for modules)
const State = {...};
const Modal = {...};

// Functions (camelCase)
function renderContent() {...}
async function saveData() {...}

// Constants (UPPER_CASE)
const DELAYS = {...};

// CSS classes (kebab-case)
.field-card
.modal-backdrop
.custom-select-dropdown
```

---

## 🎯 Common Tasks

### 1. Adding a New Translation

```javascript
// In TRANSLATIONS object
TRANSLATIONS.en.messages.newKey = 'New message';
TRANSLATIONS.uk.messages.newKey = 'Нове повідомлення';
TRANSLATIONS.ru.messages.newKey = 'Новое сообщение';
TRANSLATIONS.pl.messages.newKey = 'Nowa wiadomość';

// Use in code
Toast.t('messages.newKey');
i18n.t('messages.newKey');
```

### 2. Creating a Modal

```javascript
Modal.open(
  'Title',
  `<div>Content HTML</div>`,
  {
    onSave: async () => {
      // Save logic
      return true; // or false to prevent close
    },
    icon: 'fa-icon',
    size: 'medium', // small, medium, large
    onOpen: () => {
      // After open callback
    }
  }
);
```

### 3. Showing a Toast

```javascript
Toast.show('Message', 'success'); // success, error, warning, info
Toast.t('messages.saved', 'success'); // With translation key
```

### 4. Updating State

```javascript
// Update state
State.values[fieldId] = newValue;
State.ui.activeCategory = categoryId;

// Save state
await Storage.save();

// Re-render UI
Renderer.renderContent();
Progress.update();
```

### 5. Adding Event Handler

```javascript
// In HTML
<button data-action="App.methodName" data-param="value">Click</button>

// In App.bindEvents()
// Event delegation handles it automatically
```

---

## 🔍 Key Components Reference

### State Object
```javascript
State = {
  config: {
    categories: [],  // Category objects
    fields: []       // Field objects
  },
  values: {},        // {fieldId: value}
  language: 'uk',
  ui: {
    activeCategory: null,
    searchQuery: '',
    filters: {fillStatus: 'all', importance: []}
  },
  sync: {
    mode: 'localStorage',
    status: 'local',
    googleSheets: {...}
  }
};
```

### Modal System
```javascript
Modal.open(title, html, options)
Modal.close()
Modal.confirm(message)
Modal.prompt(message, placeholder, defaultValue)
```

### Toast System
```javascript
Toast.show(message, type)
Toast.t(translationKey, type)
// Types: 'success', 'error', 'warning', 'info'
```

### i18n System
```javascript
i18n.t(key)                    // Get translation
i18n.setLanguage(lang)         // Change language
i18n.applyTranslations()       // Update DOM
```

### Storage System
```javascript
await Storage.save()           // Save to localStorage/Sheets
const data = await Storage.load() // Load data
Storage.clear()                // Clear all data
Storage.exportToFile()         // Export JSON
```

### Sync Manager
```javascript
SyncManager.startAutoSync(minutes)
SyncManager.stopAutoSync()
SyncManager.manualSync()
SyncManager.markDirty()
SyncManager.refreshStatus()
```

---

## 🐛 Debugging

### Enable Debug Mode
```javascript
localStorage.setItem('debug', 'true');
// Now Debug.log() will show messages
```

### Common Debug Points
- Check `State` object in console
- Verify `localStorage` data
- Check browser console for errors
- Use `TestDrive.run()` for automated tests

---

## 📱 Mobile Considerations

### Viewport-Aware Positioning
```javascript
const rect = trigger.getBoundingClientRect();
const viewportWidth = window.innerWidth;
const padding = 8;

let left = rect.left - 16;
left = Math.max(padding, Math.min(left, viewportWidth - dropdownWidth - padding));
dropdown.style.left = `${left}px`;
```

### Responsive Breakpoints
- Mobile: `max-width: 768px`
- Tablet: `769px - 1024px`
- Desktop: `1025px+`

---

## ✅ Best Practices

### DO:
- ✅ Use `grep_search` to find existing code
- ✅ Read surrounding code for context
- ✅ Follow existing patterns and naming
- ✅ Test on mobile viewport (375px-768px)
- ✅ Use CSS variables for colors
- ✅ Add Ukrainian comments for complex logic
- ✅ Use event delegation
- ✅ Sanitize user input

### DON'T:
- ❌ Create separate CSS/JS files
- ❌ Use external libraries (jQuery, React, etc.)
- ❌ Hardcode values when variables exist
- ❌ Break existing functionality
- ❌ Ignore mobile considerations
- ❌ Mix coding styles
- ❌ Use `innerHTML` for user data (XSS risk)

---

## 🚀 Workflow

When user requests work:

1. **Investigate** → Use `grep_search` to find relevant code
2. **Read** → Use `read_file` to understand context
3. **Plan** → Think through solution and edge cases
4. **Implement** → Use `edit` or `multi_edit`
5. **Verify** → Mental test for common scenarios
6. **Confirm** → Brief summary of changes

---

## 💬 Communication Style

- **Language**: Respond in the language user uses (usually Ukrainian)
- **Tone**: Professional but casual
- **Format**: Brief, clear, actionable
- **Length**: Keep it concise unless explaining complex issues

### Response Template
```
✅ [What was done]
🔍 [What was found/changed]
📱 [Mobile considerations if relevant]
```

---

## 🎓 Understanding the Codebase

### Critical Files to Know
- `index.html` — Everything is here
- `DEVELOPER_GUIDE.md` — Technical documentation
- `README.md` — User documentation

### Key Objects to Understand
- `State` — Global application state
- `TRANSLATIONS` — i18n translations
- `DefaultConfig` — Default categories and fields
- `App` — Main application controller
- `Storage` — Data persistence
- `SyncManager` — Sync orchestration
- `Renderer` — UI rendering
- `Modal` — Dialog system
- `Toast` — Notifications
- `ThemeManager` — Theme system (6 built-in themes, import/export)

### Common Patterns
- Module pattern for components
- Event delegation for dynamic elements
- Async/await for operations
- CSS variables for theming
- Data attributes for actions

---

## 🔧 Extension Examples

### Add New Field Type
```javascript
// 1. Add option in showFieldModal()
<option value="newtype">New Type</option>

// 2. Add rendering in Renderer.renderField()
case 'newtype':
  return `<div class="field-newtype">...</div>`;

// 3. Add save logic
if (field.type === 'newtype') {
  // Custom logic
}
```

### Add New Category
```javascript
// 1. Add to DefaultConfig.categories
{id: 'newcat', label: 'New Category', icon: 'fa-icon'}

// 2. Add translations
TRANSLATIONS.en.categories.newcat = 'New Category';
TRANSLATIONS.uk.categories.newcat = 'Нова категорія';
// ... other languages
```

---

## 🏁 Ready to Work

You are now briefed on the Love Dossier project. When given a task:

1. Acknowledge briefly
2. Investigate using tools
3. Implement following conventions
4. Confirm completion

**Remember**: You're a senior developer who knows this codebase. Work independently, anticipate issues, deliver production-ready code.

---

<div align="center">

**Let's build something amazing! 🚀💝**

Made with love by [apostll3](https://github.com/apostll3)

</div>
