# 🧠 Developer Guide — Love Dossier v2.0

> **Technical documentation for developers who want to understand, maintain, or extend the Love Dossier project**

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Core Components](#-core-components)
- [State Management](#-state-management)
- [Data Flow](#-data-flow)
- [Storage & Sync](#-storage--sync)
- [Security Implementation](#-security-implementation)
- [UI Components](#-ui-components)
- [Internationalization](#-internationalization)
- [Event Handling](#-event-handling)
- [Testing](#-testing)
- [Extension Guide](#-extension-guide)
- [Best Practices](#-best-practices)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Overview

**Love Dossier** is a single-file web application built with pure HTML, CSS, and Vanilla JavaScript. It runs entirely in the browser with no backend infrastructure required.

### Key Characteristics

- **Single-file architecture**: Everything in `index.html` (11,767 lines, 432KB)
- **No build process**: Open and run directly in browser
- **No dependencies**: Pure Vanilla JS (except Font Awesome for icons)
- **Local-first**: Works offline by default
- **Progressive enhancement**: Optional cloud sync via Google Sheets

### Technology Stack

```
HTML5          → Semantic markup
CSS3           → Modern styling (Grid, Flexbox, Variables)
JavaScript ES6+ → Pure Vanilla JS, no frameworks
Font Awesome 6 → Icon library
Google API     → Optional, for Sheets sync only
```

---

## 📁 Project Structure

### File Organization

```
love-dossier/
├── index.html          # Main application (432KB)
├── LoveDossier.ico     # Favicon
├── preview.png         # Screenshot for README
├── README.md           # User documentation
├── DEVELOPER_GUIDE.md  # This file
├── AI_PROMPT.md        # AI assistant instructions
└── readmeTranslate/    # Translated README files
    ├── README_uk.md
    ├── README_ru.md
    └── README_pl.md
```

### index.html Structure

```
Lines 1-33      → HTML head (meta, title, external resources)
Lines 34-2755   → <style> section (all CSS)
Lines 2756-3028 → HTML body (UI structure)
Lines 3029-11767 → <script> section (all JavaScript)
```

### Code Organization in JavaScript

```javascript
// Lines 3029-3860: Constants and Configuration
DELAYS = {...}           // Animation timing constants
TRANSLATIONS = {...}     // i18n translations (4 languages)

// Lines 3861-3900: State Management
State = {...}            // Global application state

// Lines 5696-5900: Default Configuration
DefaultConfig = {...}    // Default categories and fields

// Lines 5901-6450: Core Modules
i18n = {...}            // Internationalization system
GoogleSheetsSync = {...} // Google Sheets integration
Storage = {...}          // Data persistence layer
SyncManager = {...}      // Sync orchestration

// Lines 6625-7200: UI Utilities
TelegramWebApp = {...}   // Telegram integration
FormatMenu = {...}       // Text formatting toolbar
Toast = {...}            // Notification system
Modal = {...}            // Modal dialog system
CustomSelect = {...}     // Custom dropdown component

// Lines 7200-8800: Business Logic
Progress = {...}         // Progress calculation
Search = {...}           // Search functionality
Renderer = {...}         // UI rendering
CategorySettings = {...} // Category management
WelcomeModal = {...}     // Onboarding flow

// Lines 8800-9700: Testing
TestDrive = {...}        // Automated testing system

// Lines 9700-11767: Application Controller
App = {...}              // Main application logic
App.init()               // Application entry point
```

---

## 🏗 Architecture

### Layered Architecture

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│  (UI Components, Modals, Toasts)    │
├─────────────────────────────────────┤
│         Business Logic Layer        │
│  (Search, Progress, Renderer)       │
├─────────────────────────────────────┤
│         Data Management Layer       │
│  (State, Storage, SyncManager)      │
├─────────────────────────────────────┤
│         Integration Layer           │
│  (GoogleSheetsSync, i18n)           │
└─────────────────────────────────────┘
```

### Design Patterns Used

1. **Module Pattern**: Each component is an object with methods
2. **Observer Pattern**: Event delegation for dynamic elements
3. **Singleton Pattern**: Single State object for global state
4. **Strategy Pattern**: Multiple storage strategies (local, sheets, file)
5. **Factory Pattern**: Dynamic field and category creation

---

## 🧩 Core Components

### 1. State Management

```javascript
const State = {
  config: {
    categories: [],  // Array of category objects
    fields: []       // Array of field objects
  },
  values: {},        // Field values (fieldId: value)
  language: 'uk',    // Current language
  ui: {
    activeCategory: null,
    searchQuery: '',
    filters: {...}
  },
  sync: {
    mode: 'localStorage',
    status: 'local',
    googleSheets: {...}
  }
};
```

### 2. Field Types

```javascript
// Supported field types:
'text'     → Single-line text input
'textarea' → Multi-line text area
'date'     → Date picker
'tags'     → Comma-separated tags
'nested'   → Hierarchical categories with subcategories
```

### 3. Category Structure

```javascript
{
  id: 'base',                    // Unique identifier
  label: 'Basic Information',    // Display name
  icon: 'fa-id-card',           // Font Awesome icon
  isPrivate: false              // Optional privacy flag
}
```

### 4. Field Structure

```javascript
{
  id: 'fullName',               // Unique identifier
  label: 'Full Name',           // Display name
  type: 'text',                 // Field type
  category: 'base',             // Parent category
  importance: 'high',           // Priority level
  required: false,              // Optional flag
  nestedCategories: []          // For nested type only
}
```

---

## 🔄 State Management

### State Object

The `State` object is the single source of truth for the application.

```javascript
// Reading state
const activeCategory = State.ui.activeCategory;
const fieldValue = State.values['fullName'];

// Updating state
State.ui.searchQuery = 'chocolate';
State.values['fullName'] = 'John Doe';

// Persisting state
await Storage.save();  // Saves to localStorage or Google Sheets
```

### State Persistence

```javascript
// Save current state
await Storage.save();

// Load saved state
const saved = await Storage.load();
if (saved) {
  State.config = saved.config;
  State.values = saved.values;
}

// Clear all data
Storage.clear();
```

---

## 🔀 Data Flow

### User Action → State Update → UI Render

```
User clicks "Save"
    ↓
Event handler updates State.values
    ↓
Storage.save() persists to localStorage
    ↓
SyncManager syncs to Google Sheets (if enabled)
    ↓
Toast notification confirms success
    ↓
Progress bar updates
```

### Search Flow

```
User types in search box
    ↓
Search.performSearch() filters fields
    ↓
Renderer.renderContent() shows results
    ↓
Search highlights matching text
```

---

## 💾 Storage & Sync

### Storage Modes

#### 1. Local Storage (Default)

```javascript
// Save to localStorage
localStorage.setItem('love_dossier_v2', JSON.stringify({
  config: State.config,
  values: State.values,
  savedAt: new Date().toISOString()
}));

// Load from localStorage
const data = JSON.parse(localStorage.getItem('love_dossier_v2'));
```

#### 2. Google Sheets Sync

```javascript
// Upload to Google Sheets
await GoogleSheetsSync.uploadData(
  State.config,
  State.values,
  encryptionPassword  // Optional
);

// Download from Google Sheets
const result = await GoogleSheetsSync.downloadData(
  encryptionPassword  // Optional
);
```

#### 3. File Export/Import

```javascript
// Export to JSON file
Storage.exportToFile();

// Import from JSON file
// User selects file → FileReader → JSON.parse → State update
```

### Sync Manager

```javascript
// Start auto-sync (every N minutes)
SyncManager.startAutoSync(5);  // 5 minutes

// Manual sync
await SyncManager.manualSync();

// Stop auto-sync
SyncManager.stopAutoSync();

// Mark changes for sync
SyncManager.markDirty();

// Refresh status display
SyncManager.refreshStatus();
```

---

## 🔐 Security Implementation

### AES-GCM Encryption

```javascript
// Encryption process
const { encrypted, salt, iv } = await GoogleSheetsSync.encryption.encrypt(
  dataString,
  password
);

// Decryption process
const decrypted = await GoogleSheetsSync.encryption.decrypt(
  encryptedHex,
  password,
  saltHex,
  ivHex
);
```

### Key Derivation

```javascript
// PBKDF2 with 100,000 iterations
const key = await crypto.subtle.deriveKey(
  {
    name: 'PBKDF2',
    salt: saltBuffer,
    iterations: 100000,
    hash: 'SHA-256'
  },
  keyMaterial,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt', 'decrypt']
);
```

### Security Best Practices

1. **Password never stored**: Only used for encryption, then discarded
2. **Session tokens**: Google OAuth tokens in sessionStorage only
3. **Random salt/IV**: New random values for each encryption
4. **No backend**: All processing client-side
5. **HTTPS only**: Enforce secure connections for Google API

---

## 🎨 UI Components

### Modal System

```javascript
// Open modal
Modal.open(
  'Edit Field',              // Title
  '<div>Content HTML</div>', // Body HTML
  {
    onSave: async () => {    // Save callback
      // Handle save logic
      return true;           // Return false to prevent close
    },
    icon: 'fa-edit',         // Title icon
    size: 'medium',          // 'small', 'medium', 'large'
    onOpen: () => {          // After open callback
      // Focus first input, etc.
    }
  }
);

// Close modal
Modal.close();

// Confirm dialog
const confirmed = await Modal.confirm('Delete this field?');

// Prompt dialog
const value = await Modal.prompt('Enter name:', 'placeholder', 'default');
```

### Toast Notifications

```javascript
// Show toast with message
Toast.show('Data saved successfully!', 'success');

// Show toast with translation key
Toast.t('messages.saved', 'success');

// Toast types: 'success', 'error', 'warning', 'info'
// Duration: 3s (success), 6s (error), 5s (warning), 4s (info)
```

### Custom Select

```javascript
CustomSelect.init(selectElement, [
  { value: 'high', label: 'High', icon: 'fa-star', selected: true },
  { value: 'medium', label: 'Medium', icon: 'fa-star-half' },
  { value: 'low', label: 'Low', icon: 'fa-star-o' }
]);
```

### Format Menu

```javascript
// Automatically appears when text is selected in input/textarea
// Supports: bold, italic, strikethrough, link, chip
// Keyboard shortcuts: Ctrl+B, Ctrl+I, Ctrl+K
```

---

## 🌍 Internationalization

### Translation System

```javascript
// Get translation
const text = i18n.t('ui.save');  // Returns: "Зберегти" (if Ukrainian)

// Change language
i18n.setLanguage('en');  // Switches to English

// Apply translations to DOM
i18n.applyTranslations();  // Updates all [data-i18n] elements
```

### Adding New Translations

```javascript
// In TRANSLATIONS object
TRANSLATIONS.en.messages.newKey = 'New message';
TRANSLATIONS.uk.messages.newKey = 'Нове повідомлення';
TRANSLATIONS.ru.messages.newKey = 'Новое сообщение';
TRANSLATIONS.pl.messages.newKey = 'Nowa wiadomość';

// Use in code
Toast.t('messages.newKey');
```

### Translation Structure

```javascript
TRANSLATIONS = {
  uk: { app: {...}, ui: {...}, messages: {...}, ... },
  en: { app: {...}, ui: {...}, messages: {...}, ... },
  ru: { app: {...}, ui: {...}, messages: {...}, ... },
  pl: { app: {...}, ui: {...}, messages: {...}, ... }
};
```

---

## ⚡ Event Handling

### Event Delegation

```javascript
// Global event delegation for data-action attributes
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  
  const action = target.dataset.action;  // e.g., "App.deleteField"
  const param = target.dataset.param;    // e.g., "field_id"
  
  // Parse and execute
  const [object, method] = action.split('.');
  window[object][method](param);
});
```

### Common Event Patterns

```javascript
// Button click
<button data-action="App.saveField" data-param="fullName">Save</button>

// Category selection
<div class="category-item" data-action="App.selectCategory" data-param="base">

// Field menu
<button data-action="App.toggleFieldMenu" data-field-id="fullName">
```

---

## 🧪 Testing

### Test Drive System

```javascript
// Run all tests
TestDrive.run();

// Test structure
TestDrive.tests.push({
  name: 'Test name',
  fn: async () => {
    TestDrive.assert(condition, 'Error message');
    // Test logic
  }
});
```

### Manual Testing Checklist

- [ ] Create/edit/delete fields
- [ ] Create/edit/delete categories
- [ ] Search functionality
- [ ] Filter by completion/importance
- [ ] Progress calculation
- [ ] Language switching
- [ ] Local storage save/load
- [ ] Google Sheets sync
- [ ] File export/import
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Text formatting

---

## 🔧 Extension Guide

### Adding a New Field Type

```javascript
// 1. Add to field type options in showFieldModal()
<option value="newtype">New Type</option>

// 2. Add rendering logic in Renderer.renderField()
case 'newtype':
  return `<div class="field-newtype">...</div>`;

// 3. Add value handling in saveFieldValue()
if (field.type === 'newtype') {
  // Custom save logic
}
```

### Adding a New Category

```javascript
// Add to DefaultConfig.categories
{
  id: 'newcategory',
  label: 'New Category',
  icon: 'fa-icon-name'
}

// Add translations
TRANSLATIONS.en.categories.newcategory = 'New Category';
TRANSLATIONS.uk.categories.newcategory = 'Нова категорія';
// ... other languages
```

### Adding a New Storage Backend

```javascript
// Implement adapter pattern
const NewStorageBackend = {
  async save(config, values) {
    // Save logic
  },
  
  async load() {
    // Load logic
    return { config, values };
  }
};

// Integrate in Storage.save() and Storage.load()
```

---

## ✅ Best Practices

### Code Style

```javascript
// Use const/let, not var
const value = State.values[fieldId];
let counter = 0;

// Use template literals
const html = `<div class="${className}">${content}</div>`;

// Use arrow functions
fields.map(field => field.id);

// Use async/await, not callbacks
async function saveData() {
  await Storage.save();
}
```

### Performance

```javascript
// Cache DOM queries
const container = document.getElementById('content');

// Use event delegation
document.addEventListener('click', handleClick);

// Batch DOM updates
const fragment = document.createDocumentFragment();
// Add elements to fragment
container.appendChild(fragment);

// Debounce expensive operations
let searchTimeout;
input.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(performSearch, 300);
});
```

### Security

```javascript
// Sanitize user input
const sanitized = Sanitizer.escapeHtml(userInput);

// Validate data
if (!validateId(fieldId)) {
  throw new Error('Invalid field ID');
}

// Use textContent, not innerHTML for user data
element.textContent = userInput;  // Safe
element.innerHTML = userInput;    // Dangerous
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Data not saving
- Check browser console for errors
- Verify localStorage quota not exceeded
- Check if sync is enabled but not authorized

**Issue**: Google Sheets sync failing
- Verify Client ID is correct
- Check if user authorized the app
- Verify spreadsheet ID is set
- Check browser console for API errors

**Issue**: UI not updating
- Check if State was updated
- Verify Renderer.renderContent() was called
- Check for JavaScript errors in console

**Issue**: Translations not working
- Verify language is set correctly
- Check if translation key exists
- Ensure i18n.applyTranslations() was called

### Debug Mode

```javascript
// Enable debug logging
localStorage.setItem('debug', 'true');

// View debug logs
Debug.log('Message');  // Only shows if debug enabled
Debug.error('Error');  // Always shows

// Disable debug
localStorage.removeItem('debug');
```

### Browser Compatibility

**Minimum Requirements**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Required Features**:
- ES6+ JavaScript
- CSS Grid and Flexbox
- LocalStorage API
- Crypto API (for encryption)
- Fetch API (for Google Sheets)

---

## 📞 Support

### Getting Help

1. **Check documentation**: README.md, this guide, AI_PROMPT.md
2. **Search issues**: GitHub Issues tab
3. **Create new issue**: Provide details, steps to reproduce, screenshots
4. **Community**: Telegram group [@apostlenote](https://t.me/apostlenote)

### Contributing

See [Contributing section in README.md](./README.md#-contributing)

---

## 📚 Additional Resources

- **MDN Web Docs**: https://developer.mozilla.org/
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Google Sheets API**: https://developers.google.com/sheets/api
- **Web Crypto API**: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API

---

<div align="center">

**Happy Coding! 💻💝**

Made with love by [apostll3](https://github.com/apostll3)

</div>
