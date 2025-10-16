# 💝 Love Dossier

> **A privacy-focused web application for organizing and remembering everything important about your loved one**

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://apostll3.github.io/love-dossier)
[![Version](https://img.shields.io/badge/version-2.0_BETA-blue?style=for-the-badge)](https://github.com/apostll3/love-dossier)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

![Preview](./preview.png)

## 🌍 Translations

- **English** (you are here)
- [Українська](./readmeTranslate/README_uk.md) 🇺🇦
- [Русский](./readmeTranslate/README_ru.md) 🇷🇺
- [Polski](./readmeTranslate/README_pl.md) 🇵🇱

---

## 📖 Table of Contents

- [What is Love Dossier?](#-what-is-love-dossier)
- [Key Features](#-key-features)
- [Quick Start](#-quick-start)
- [Technology Stack](#-technology-stack)
- [Security & Privacy](#-security--privacy)
- [Use Cases](#-use-cases)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 What is Love Dossier?

**Love Dossier** is a comprehensive web application designed to help you remember and organize all the important details about your loved one. From their favorite foods and gift preferences to psychological traits and intimate moments — everything in one beautiful, private, and secure place.

### Why Love Dossier?

- **Remember what matters** — Never forget important details about your partner
- **Be more thoughtful** — Use stored information to plan better dates, gifts, and support
- **Strengthen your relationship** — Show that you truly care by remembering the little things
- **Stay organized** — Systematic approach to relationship knowledge management
- **Complete privacy** — All data stays on your device or encrypted in your Google Sheets

---

## ✨ Key Features

### 🌍 **Multilingual Interface**
- **4 languages supported**: English, Ukrainian, Russian, Polish
- Instant language switching with persistent preferences
- Full localization of all UI elements and messages
- Automatic translation of default categories and fields

### 📂 **16 Categories & 64+ Fields**
Comprehensive information structure covering:
- **Base Info**: Name, birthday, contacts, location
- **Character**: Personality traits, attachment style, humor
- **Preferences**: Favorite foods, activities, aesthetics, colors
- **Anti-preferences**: Dislikes, triggers, allergies, uncomfortable situations
- **Gifts**: Wishlist, sizes, favorite brands, gift history
- **Psychology**: Love language, core values, conflict style
- **Psych Details**: Anxiety triggers, motivators, calming words
- **Logistics**: Favorite places, social circle, daily routines
- **Goals**: Short-term and long-term aspirations, bucket list
- **Communication**: Communication style, preferred topics
- **Finance**: Financial habits, attitudes, shared goals
- **Intimacy**: Intimate preferences and boundaries (private category)
- **Family**: Family information, important people, traditions
- **Career**: Professional goals, work schedule, dreams
- **Culture**: Religious views, political beliefs, principles
- **Custom**: Personal notes and custom fields

### ✏️ **Rich Text Formatting**
- **Markdown-like syntax**: `**bold**`, `*italic*`, `~~strikethrough~~`, `[link](url)`
- **Context menu**: Select text to see formatting toolbar
- **Keyboard shortcuts**: `Ctrl+B` (bold), `Ctrl+I` (italic), `Ctrl+K` (link)
- **Works everywhere**: All field types support formatting

### 🔍 **Powerful Search & Filters**
- **Global search**: Search across all fields, categories, and tags
- **Smart filtering**: Filter by completion status (filled/empty/all)
- **Importance levels**: Filter by high/medium/low priority
- **Real-time results**: Instant search with highlighted matches
- **Search statistics**: See how many results found

### 📊 **Progress Tracking**
- **Visual progress bars**: See completion percentage for each category
- **Overall statistics**: Total fields, filled fields, completion rate
- **Category-specific progress**: Track progress per category
- **Motivational feedback**: Visual encouragement to fill more fields

### ☁️ **Flexible Sync Options**
Three storage modes to fit your needs:

1. **💾 Local Storage** (Default)
   - Data stored in browser's localStorage
   - Fast and private
   - Works completely offline
   - Accessible only from this device

2. **☁️ Google Sheets Sync**
   - Sync data across multiple devices
   - Automatic background synchronization
   - Configurable sync intervals (1-60 minutes)
   - Optional AES-256 encryption
   - Rate limiting to prevent API quota issues
   - Your data, your Google account

3. **📁 Manual File Backup**
   - Export data as JSON file
   - Import from previously exported files
   - Full control over backups
   - Easy data migration

### 🔐 **Enterprise-Grade Security**
- **AES-GCM 256-bit encryption** for Google Sheets sync
- **Password-based encryption** (password never stored)
- **PBKDF2 key derivation** (100,000 iterations)
- **Session-only tokens** (cleared on browser close)
- **No backend servers** (client-side only)
- **No analytics or tracking**

### 📱 **PWA & Responsive Design**
- **Progressive Web App**: Install on mobile and desktop
- **Offline support**: Service Worker for offline functionality
- **Mobile-first approach**: Optimized for smartphones
- **Tablet support**: Perfect layout for tablets
- **Desktop experience**: Full-featured desktop interface
- **Touch-friendly**: Large tap targets, swipe gestures
- **Adaptive layouts**: Dynamic grid system
- **Smooth animations**: CSS transitions for all interactions

### 🎨 **Modern UI/UX & Themes**
- **Beautiful gradients**: Eye-catching color schemes
- **6 Built-in themes**: Current, Light, Dark, Ocean, Sunset, Forest
- **Theme system**: Live preview, import/export custom themes
- **Smooth animations**: Polished user experience with optimized transitions
- **Custom components**: Dropdowns, modals, toasts, selectors
- **Accessibility**: Keyboard navigation, ARIA labels
- **Intuitive navigation**: Easy category switching

### 🧪 **Built-in Testing**
- **Test Drive feature**: 40+ automated tests
- **Component testing**: Tests for all major features
- **Copy logs**: Easy bug reporting with log export
- **Real-time feedback**: Visual test results

---

## 🚀 Quick Start

### Option 1: Online (Recommended)

Visit the live demo: **[https://apostll3.github.io/love-dossier](https://apostll3.github.io/love-dossier)**

That's it! The app runs entirely in your browser.

### Option 2: Local Installation

```bash
# Clone the repository
git clone https://github.com/apostll3/love-dossier.git

# Navigate to the directory
cd love-dossier

# Open in browser
open index.html
# or
start index.html  # Windows
xdg-open index.html  # Linux
```

**No build process required!** Just open `index.html` in any modern browser.

### First Time Setup

1. **Choose your language** from the welcome screen
2. **Select categories** you want to use (you can change this later)
3. **Start filling in information** about your loved one
4. **Optional**: Set up Google Sheets sync for cross-device access

---

## 🛠 Technology Stack

### Core Technologies
- **HTML5** — Semantic markup
- **CSS3** — Modern styling with CSS Grid, Flexbox, Variables
- **Vanilla JavaScript (ES6+)** — No frameworks, pure JS

### Architecture
- **Single-file application** — Everything in `index.html` (14,971 lines)
- **Modular code structure** — Logically separated sections
- **State management** — Centralized `State` object
- **Event delegation** — Efficient event handling
- **Local-first** — Works offline by default
- **PWA-ready** — Installable with Service Worker
- **Theme system** — Dynamic theming with CSS variables

### External Dependencies
- **Font Awesome 6.5.0** — Icons
- **Google API** — Optional, for Sheets sync only
- **Google Identity Services** — OAuth authentication

### File Structure
```
love-dossier/
├── index.html          # Main application (576KB, development version)
├── manifest.json       # PWA manifest
├── service-worker.js   # Service Worker for offline support
├── LoveDossier.ico     # Favicon
├── preview.png         # Screenshot
├── README.md           # This file
├── DEVELOPER_GUIDE.md  # Technical documentation
├── AI_PROMPT.md        # AI assistant instructions
└── readmeTranslate/    # Translated README files
    ├── README_uk.md    # Ukrainian
    ├── README_ru.md    # Russian
    └── README_pl.md    # Polish
```

### Code Statistics
- **Total lines**: 14,971
- **HTML**: ~500 lines
- **CSS**: ~4,800 lines
- **JavaScript**: ~9,600 lines
- **File size**: 576KB (uncompressed)

### Performance
- **Lighthouse Desktop**: 100/100 (Performance, Accessibility, Best Practices), 100/100 (SEO)
- **Lighthouse Mobile**: 96/100 (Performance), 100/100 (Accessibility, Best Practices, SEO)
- **LCP**: 2.8s on mobile, optimized with preconnect hints
- **CLS**: 0 (perfect layout stability)

---

## 🔒 Security & Privacy

### Data Storage
- **Default**: All data stored in browser's `localStorage`
- **Your device only**: Data never leaves your device unless you enable sync
- **No backend**: No servers, no databases, no data collection

### Google Sheets Sync (Optional)
- **Your Google account**: Data stored in YOUR Google Sheets
- **We don't see your data**: No access to your information
- **Encrypted option**: AES-256 encryption with your password
- **Revocable access**: You can revoke access anytime from Google settings

### Encryption Details
When encryption is enabled:
- **Algorithm**: AES-GCM (Galois/Counter Mode)
- **Key size**: 256 bits
- **Key derivation**: PBKDF2 with SHA-256
- **Iterations**: 100,000
- **Salt**: Random 16-byte salt per encryption
- **IV**: Random 12-byte initialization vector per encryption

### Best Practices
1. **Use encryption** if syncing to Google Sheets
2. **Choose strong password** (min. 6 characters, but longer is better)
3. **Write down your password** — it's never stored and can't be recovered
4. **Regular backups**: Export JSON files periodically
5. **Clear data** when using shared devices

---

## 💡 Use Cases

### 🎁 Gift Planning
- Check wishlist in "Gifts" category
- Review clothing sizes
- See gift history to avoid duplicates
- Note favorite brands and stores

### ❤️ Date Planning
- "Preferences" → favorite foods, drinks, activities
- "Anti-preferences" → allergies, dislikes, triggers
- "Logistics" → favorite places, peak activity hours
- "Goals" → ideal cozy evening ideas

### 🧘 Emotional Support
- "Psych" → anxiety triggers, stress relief methods
- "Psychology" → conflict style, love language
- "Communication" → calming words and phrases
- "Character" → personal boundaries

### 🎂 Special Occasions
- "Base" → birthday, anniversary dates
- "Gifts" → wishlist and gift ideas
- "Goals" → dreams and aspirations
- "Family" → important people and traditions

### 🗣️ Better Communication
- "Communication" → preferred topics, communication style
- "Anti-preferences" → uncomfortable topics
- "Psychology" → how they like to receive compliments
- "Character" → humor style

---

## 📚 Documentation

### For Users
- **README.md** (this file) — Overview and quick start
- **In-app help** — Tooltips and hints throughout the interface
- **Welcome modal** — First-time setup guide

### For Developers
- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** — Technical documentation
  - Architecture overview
  - Code structure
  - Component details
  - Extension guide
  - Best practices

- **[AI_PROMPT.md](./AI_PROMPT.md)** — AI assistant instructions
  - Project context
  - Code conventions
  - Common patterns
  - Development workflow

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues
1. Check if the issue already exists
2. Create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

### Suggesting Features
1. Open an issue with `[Feature Request]` prefix
2. Describe the feature and its benefits
3. Provide use cases
4. Consider implementation complexity

### Submitting Pull Requests
```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Test thoroughly

# Commit with clear message
git commit -m "Add: amazing feature description"

# Push to your fork
git push origin feature/amazing-feature

# Open a Pull Request
```

### Development Guidelines
- Follow existing code style
- Add comments in English
- Test on mobile and desktop
- Ensure no breaking changes
- Update documentation if needed

---

## 🌟 Roadmap

### Recently Added (v2.0) ✅
- [✓] Theme system with 6 built-in themes
- [✓] PWA support (installable app)
- [✓] Service Worker for offline functionality
- [✓] SEO optimization (100/100 score)
- [✓] Performance optimization (96-100/100 score)
- [✓] Theme import/export functionality
- [✓] Live theme preview

### Planned Features
- [ ] Custom theme editor with color picker
- [ ] Export to PDF
- [ ] Import from other formats
- [ ] More field types (number, rating, checklist)
- [ ] Field templates
- [ ] Reminders and notifications
- [ ] Photo attachments
- [ ] Timeline view
- [ ] Relationship milestones tracker

### Under Consideration
- [ ] Mobile app (React Native)
- [ ] Browser extension
- [ ] Telegram bot integration
- [ ] Shared dossiers (for couples)
- [ ] AI-powered suggestions

---

## 📄 License

This project is open-source and available under the **MIT License**.

You are free to:
- ✅ Use for personal purposes
- ✅ Modify and adapt
- ✅ Share with others
- ✅ Use commercially (with attribution)

See [LICENSE](LICENSE) file for details.

---

## 💌 Author

**Created with love by [apostll3](https://github.com/apostll3)**

### Connect
- 📧 Telegram: [@apostll3](https://t.me/apostll3)
- 👥 Community: [@apostlenote](https://t.me/apostlenote)
- 📷 Instagram: [@apostll3](https://instagram.com/apostll3)
- 💻 GitHub: [@apostll3](https://github.com/apostll3)

---

## ⭐ Show Your Support

If you find Love Dossier useful, please consider:
- ⭐ **Starring the repository** on GitHub
- 🐛 **Reporting bugs** and suggesting features
- 📢 **Sharing with friends** who might benefit
- 💝 **Contributing** to the project

---

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- Google for Sheets API
- All contributors and users
- Everyone who believes in the power of remembering

---

<div align="center">

**Made with 💝 for those who care about the details**

[⬆ Back to Top](#-love-dossier)

</div>
