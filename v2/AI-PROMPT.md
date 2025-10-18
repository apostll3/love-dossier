# 🤖 AI Development Assistant Prompt

**For AI Assistants working on Love Dossier project**

---

## 📋 Quick Reference

**Project:** Love Dossier v3.0.0  
**Type:** Progressive Web App (PWA)  
**Stack:** Vanilla HTML/CSS/JavaScript  
**Purpose:** Relationship management system with 32 specialized types

---

## 🎯 Your Role

You are an expert AI coding assistant helping to develop and maintain **Love Dossier** - a comprehensive relationship management PWA. Your expertise includes:

- Modern vanilla JavaScript (ES6+)
- Progressive Web App development
- UI/UX best practices
- Internationalization (i18n)
- LocalStorage data management
- Accessibility standards

---

## 📁 Project Structure

```
v2/
├── index-new.html          # Main app (single-file architecture)
├── README.md               # Project overview
├── FEATURES.md             # Detailed features guide
├── AI-PROMPT.md           # This file
├── LoveDossier.ico        # Favicon
├── manifest.json          # PWA manifest
├── service-worker.js      # Service worker for offline
└── docs/                  # Technical documentation
    ├── IMPROVEMENTS-SUMMARY.md
    ├── BUGFIX-SUMMARY.md
    ├── I18N-CHANGES-SUMMARY.md
    └── [other docs]
```

---

## 🏗️ Architecture Overview

### Single-File Architecture
- **Everything in `index-new.html`** (HTML + CSS + JS)
- ~3,400 lines total
- Sections clearly marked with comments
- No external dependencies (except Font Awesome CDN)

### Code Structure

```javascript
// Line ~1-1500: HTML & CSS
// Line ~1500-1820: HTML body & modals
// Line ~1820-3400: JavaScript

// JavaScript Sections:
// 0. Config & Debug (1828-1832)
// 1. Loader & Welcome Flow (1834-1983)
// 2. Internationalization (1985-2334)
// 3. Types List (2336-2354)
// 4. Rendering (2356-2470)
// 5. Search & Filters (2472-2610)
// 6. Statistics (2612-2675)
// 7. Themes (2677-2742)
// 8. Service Worker (2734-2741)
// 9. Color Themes (2743-2768)
// 10. Language (2770-2788)
// 11. Settings (2773-2826)
// 12. Export/Import (2828-2900)
// 13. Modal Helpers (2902-3000)
// 14. Notifications (3002-3032)
// 15. Reminders (3034-3064)
// 16. Deep Linking (3066-3110)
// 17. Share (3112-3136)
// 18. PDF Export (3138-3156)
// 19. Password (3158-3232)
// 20. Drag & Drop (3234-3312)
// 21. Initialization (3314-3380)
```

---

## 🎨 Design System

### CSS Variables

```css
/* Colors */
--primary: #667eea;
--secondary: #764ba2;
--success: #48bb78;
--warning: #ed8936;
--danger: #f56565;
--text: #2d3748;
--text-secondary: #718096;
--bg: #f7fafc;
--card-bg: white;
--border: #e2e8f0;

/* Theme variants */
[data-color-theme="blue"] { --primary: #4299e1; }
[data-color-theme="green"] { --primary: #48bb78; }
/* ... etc */

/* Dark mode */
[data-theme="dark"] {
    --text: #e2e8f0;
    --bg: #1a202c;
    /* ... etc */
}
```

### Typography
- **Font:** Poppins (Google Fonts)
- **Sizes:** 0.75rem - 2rem
- **Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- Base unit: `0.25rem` (4px)
- Common: `0.5rem, 1rem, 1.5rem, 2rem`

---

## 🌍 Internationalization System

### How it Works

```javascript
// 1. Define translations
const i18n = {
    en: { keyName: 'English text' },
    uk: { keyName: 'Українcький текст' }
};

// 2. Get translation
function t(key) {
    return i18n[currentLang][key] || i18n.en[key] || key;
}

// 3. Use in code
showNotification(t('success'), t('dataExported'), 'success');
```

### Translation Keys (74 total)

**Categories:**
- General (16): title, subtitle, search, etc.
- Buttons (8): cancel, confirm, ok, save, etc.
- Modals (12): titles & messages for dialogs
- Notifications (18): success/error messages
- Empty States (4): no results messages
- Reminders (4): backup & welcome messages
- PDF Export (2): generation messages
- Password (2): status texts

### Supported Languages
- **Full:** EN, UK, RU (74 keys each)
- **Basic:** PL, ES, FR, DE (16 keys each)

---

## 💾 Data Management

### LocalStorage Structure

```javascript
// Settings
localStorage.setItem('language', 'en');
localStorage.setItem('theme', 'dark');
localStorage.setItem('colorTheme', 'purple');
localStorage.setItem('typesOrder', JSON.stringify([...]));

// Type data
localStorage.setItem('type_communication-log', JSON.stringify({
    records: [...],
    lastModified: Date.now()
}));

// Meta
localStorage.setItem('lastVisit', Date.now().toString());
localStorage.setItem('lastBackup', Date.now().toString());
localStorage.setItem('appPassword', 'hashed');
```

### Data Patterns

```javascript
// Read
const data = JSON.parse(localStorage.getItem('key') || '[]');

// Write
localStorage.setItem('key', JSON.stringify(data));

// Delete
localStorage.removeItem('key');

// Clear all
localStorage.clear();
```

---

## 🎯 Development Guidelines

### Code Style

#### JavaScript
```javascript
// Use const/let (never var)
const items = [];
let count = 0;

// Arrow functions
const func = () => { ... };

// Template literals
const text = `Hello ${name}`;

// Async/await (not callbacks)
const result = await fetchData();

// Optional chaining
const value = obj?.prop?.nested;

// Nullish coalescing
const val = data ?? 'default';
```

#### Naming Conventions
```javascript
// Variables: camelCase
const userName = 'John';

// Functions: camelCase
function updateStats() { }

// Classes: PascalCase
class DataManager { }

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 100;

// Private (convention): _prefix
const _privateVar = 'internal';
```

#### Comments
```javascript
// Single-line for brief notes
const x = 5; // Counter

// Multi-line for complex logic
/**
 * Renders types grid with filters
 * @param {Array} types - List of types to render
 * @param {string} query - Search query
 */
function renderGrid(types, query) { }

// Section markers
// ============================================
// SECTION NAME
// ============================================
```

### HTML Patterns

#### Structure
```html
<!-- Semantic HTML -->
<header class="header">...</header>
<nav class="nav">...</nav>
<main class="main">...</main>
<footer class="footer">...</footer>

<!-- BEM-like naming -->
<div class="type-card">
    <div class="type-card__icon">💬</div>
    <h3 class="type-card__title">Title</h3>
    <p class="type-card__description">Text</p>
</div>
```

#### Accessibility
```html
<!-- ARIA labels -->
<button aria-label="Close modal">×</button>

<!-- Semantic roles -->
<nav role="navigation">...</nav>

<!-- Alt text -->
<img src="..." alt="Description">

<!-- Keyboard support -->
<div tabindex="0" role="button">...</div>
```

### CSS Best Practices

```css
/* Use CSS Variables */
color: var(--primary);

/* Mobile-first media queries */
.element { /* Mobile styles */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }

/* Flexbox/Grid over floats */
display: flex;
display: grid;

/* Smooth transitions */
transition: all 0.3s ease;

/* No !important (unless absolutely necessary) */
```

---

## 🔧 Common Tasks

### Adding a New Feature

1. **Update HTML** (if needed)
   ```html
   <button id="newFeatureBtn">New Feature</button>
   ```

2. **Add CSS**
   ```css
   .new-feature { ... }
   ```

3. **Write JavaScript**
   ```javascript
   window.newFeature = function() {
       // Implementation
   };
   ```

4. **Add event listener in init()**
   ```javascript
   document.getElementById('newFeatureBtn')
       .addEventListener('click', newFeature);
   ```

5. **Add translations**
   ```javascript
   i18n.en.newFeature = 'New Feature';
   i18n.uk.newFeature = 'Нова функція';
   ```

### Adding a New Type

1. **Add to TYPES_LIST**
   ```javascript
   const TYPES_LIST = [
       { 
           id: 'new-type',
           icon: '🆕',
           title: 'New Type',
           description: 'Description',
           path: './types/new-type.html',
           priority: false // or true
       }
   ];
   ```

2. **Create type HTML file**
   ```html
   <!-- types/new-type.html -->
   <!-- Follow existing type structure -->
   ```

3. **Update count in README**
   - Change from 32 to 33 types

### Adding a New Language

1. **Copy EN structure**
   ```javascript
   i18n.xx = { 
       // Copy all keys from en
       // Translate each value
   };
   ```

2. **Add to language select**
   ```html
   <option value="xx">Language Name</option>
   ```

3. **Update docs**
   - Add to supported languages list

---

## 🐛 Debugging Guidelines

### Debug Mode

```javascript
// Enable debug logging
const DEBUG = true; // Line ~1829

// Use log() instead of console.log()
log('Debug message'); // Only shows when DEBUG = true
error('Error message'); // Always shows
```

### Common Issues

#### Issue: LocalStorage full
```javascript
// Check size
let size = 0;
for (let key in localStorage) {
    size += localStorage[key].length;
}
console.log(`Storage: ${(size / 1024).toFixed(2)} KB`);

// Solution: Clear old data or use compression
```

#### Issue: Async function not working
```javascript
// Make sure parent is async
async function parent() {
    const result = await asyncFunc();
}

// Not just
function parent() {
    const result = await asyncFunc(); // Error!
}
```

#### Issue: Event listener not working
```javascript
// Make sure element exists
const el = document.getElementById('btn');
if (!el) {
    error('Element not found!');
    return;
}
el.addEventListener('click', handler);

// Or wait for init()
```

---

## ✅ Testing Checklist

### Before Committing

#### Functionality
- [ ] All buttons work
- [ ] Modals open/close
- [ ] Data saves to LocalStorage
- [ ] Export/Import works
- [ ] Search & filters work
- [ ] Edit mode drag & drop works

#### UI/UX
- [ ] No visual glitches
- [ ] Animations smooth
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode works
- [ ] All themes work

#### Internationalization
- [ ] New text has translation keys
- [ ] All languages updated (at least EN)
- [ ] Language switch works
- [ ] No hardcoded English text

#### Performance
- [ ] No console errors
- [ ] No console warnings
- [ ] Page loads fast
- [ ] Smooth scrolling

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] ARIA labels present

---

## 📝 Documentation Standards

### Code Comments

```javascript
// ✅ Good
// Calculate total price with discount
const total = price * (1 - discount);

// ❌ Bad
// Do math
const total = price * (1 - discount);

// ✅ Good
/**
 * Renders the types grid with optional filtering
 * @param {Array} types - Array of type objects
 * @param {string} filter - Filter criterion ('all', 'filled', etc.)
 * @param {string} query - Search query string
 */
function renderTypesGrid(types, filter, query) { }

// ❌ Bad
// Render grid
function renderTypesGrid(types, filter, query) { }
```

### Commit Messages

```bash
# Format: <type>: <description>

feat: Add dark mode toggle
fix: Fix export button not working
docs: Update README with new features
style: Improve card hover animation
refactor: Simplify search logic
test: Add validation tests
chore: Update dependencies
```

### File Updates

When making changes, update relevant docs:
- **README.md** - If user-facing changes
- **FEATURES.md** - If new features added
- **docs/** - Create summary of changes

---

## 🎯 Best Practices Summary

### DO ✅
- Use semantic HTML
- Follow existing code style
- Add comments for complex logic
- Use CSS variables for colors
- Make features responsive
- Support keyboard navigation
- Add ARIA labels
- Use async/await
- Validate user input
- Handle errors gracefully
- Test on multiple browsers
- Update documentation

### DON'T ❌
- Use inline styles (except dynamic)
- Use `var` (use const/let)
- Use callbacks (use async/await)
- Hardcode text (use i18n)
- Use `!important` in CSS
- Ignore console errors
- Skip accessibility
- Forget mobile users
- Leave debug code
- Break existing features

---

## 🔮 Future Considerations

### When Adding Features

Consider:
1. **Performance** - Will it slow down the app?
2. **Storage** - Will it use too much LocalStorage?
3. **Compatibility** - Works in all browsers?
4. **Mobile** - Touch-friendly?
5. **Accessibility** - Keyboard & screen reader?
6. **i18n** - Translatable?
7. **PWA** - Works offline?
8. **Security** - Any vulnerabilities?

### Scalability

Plan for:
- More types (40+)
- More data per type
- Cloud sync (future)
- Mobile apps (future)
- API integration (future)

---

## 📞 Getting Help

### Resources
1. **README.md** - Start here
2. **FEATURES.md** - Feature details
3. **docs/** - Technical docs
4. **Code comments** - Inline explanations
5. **GitHub Issues** - Known issues
6. **This file** - Development guide

### Questions to Ask
- "Where should this feature go?"
- "How do I add a new type?"
- "How do translations work?"
- "Why is this not working?"
- "How do I test this?"

---

## 💡 Final Tips

1. **Read existing code first** - Understand patterns
2. **Follow conventions** - Keep consistent
3. **Test thoroughly** - On all devices
4. **Document changes** - Help future developers
5. **Ask questions** - No question is dumb
6. **Be patient** - Large codebase takes time
7. **Have fun** - You're building something beautiful! 💜

---

<div align="center">

**Made with 💜 for AI assistants helping build Love Dossier**

### Good luck coding! 🚀

[⬆ Back to Top](#-ai-development-assistant-prompt)

</div>
