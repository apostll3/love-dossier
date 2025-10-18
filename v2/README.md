# 💕 Love Dossier - Complete Relationship Management System

> **Version 3.0.0** | A comprehensive PWA for organizing everything about your loved one

![Love Dossier](https://img.shields.io/badge/Version-3.0.0-purple?style=for-the-badge)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-success?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-7-blue?style=for-the-badge)

---

## 🎯 What is Love Dossier?

**Love Dossier** is a modern, offline-first Progressive Web App designed to help you organize, track, and cherish every aspect of your relationship. With 32 specialized types and enhanced features, it's the ultimate companion for couples who want to build lasting memories together.

### ✨ Key Highlights

- 📱 **PWA** - Install on any device, works offline
- 🎨 **Modern UI** - Beautiful design with dark mode & 6 color themes
- 🌍 **Multilingual** - 7 languages (EN, UK, RU, PL, ES, FR, DE)
- 🔐 **Private** - All data stays on your device (localStorage)
- 🎭 **Customizable** - Drag & drop cards, personalize order
- 📊 **Smart Analytics** - Track statistics, progress, patterns
- 💾 **Backup Ready** - Export/import all your data

---

## 📦 Features Overview

### 🌟 Top 5 Priority Types (PRO)
1. **💬 Communication Log PRO** - Voice notes, mood charts, analytics
2. **💰 Finances Together PRO** - Budget tracker, bills, savings
3. **🎯 Relationship Goals PRO** - Achievements, vision board, milestones
4. **🛒 Shopping List PRO** - Barcode scanner, recipe integration
5. **✈️ Travel Planner PRO** - Countdown, weather, budget breakdown

### 📋 32 Total Types
- **Enhanced Types (16)**: Date Ideas, Memory Album, Recipe Book, Gift Registry, Mood Tracker, Books & Movies, Bucket List, Event Countdown, Timeline, Smart Checklist, Progress Tracker, Interactive Map, Smart Date, Social Links, Tags, Rating System
- **Basic Types (11)**: Multi-Select, Currency Manager, Password Vault, Rich Text Editor, Smart Phone, Smart Email, Smart Time, Smart Number, Color Picker, File Attachments, Voice Notes

### 🎨 UI/UX Features
- ✅ Welcome screen with language/theme selection
- ✅ Beautiful loader animation
- ✅ Drag & drop card reordering
- ✅ Advanced search & filters
- ✅ Dark mode toggle
- ✅ 6 color themes (Purple, Blue, Green, Pink, Orange, Teal)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Empty states & helpful hints

### 🔧 Advanced Features
- 🔐 Password protection
- 📥 Import/Export (JSON backup)
- 📄 Export to PDF/TXT
- 🔗 Deep linking (URL params)
- 📱 Share via Twitter, Facebook, Web Share API
- 🔔 Smart reminders (backup, welcome back)
- 📊 Real-time statistics
- 🎯 Last used tracking

---

## 🚀 Quick Start

### Option 1: Local File
1. Download `index-new.html`
2. Open in browser
3. Start using immediately!

### Option 2: Web Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code
# Install "Live Server" extension → Right click → "Open with Live Server"
```

Then navigate to: `http://localhost:8000/index-new.html`

### Option 3: Deploy Online
Deploy to:
- **GitHub Pages** (free)
- **Netlify** (free)
- **Vercel** (free)

PWA features (Service Worker, manifest) will work only on `http://` or `https://` (not `file://`)

---

## 📖 Documentation

- 📘 **[Features Guide](./FEATURES.md)** - Detailed feature list
- 🤖 **[AI Development Guide](./AI-PROMPT.md)** - Prompt for AI assistants
- 📚 **[Docs Folder](./docs/)** - Technical documentation

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling (CSS Variables, Grid, Flexbox)
- **Vanilla JavaScript** - No frameworks, pure ES6+

### PWA
- **Service Worker** - Offline support
- **Web Manifest** - Install prompt
- **LocalStorage API** - Data persistence

### Libraries
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Poppins)** - Typography

---

## 🌍 Internationalization

### Supported Languages
- 🇬🇧 **English (EN)** - Full
- 🇺🇦 **Ukrainian (UK)** - Full
- 🇷🇺 **Russian (RU)** - Full
- 🇵🇱 **Polish (PL)** - Basic
- 🇪🇸 **Spanish (ES)** - Basic
- 🇫🇷 **French (FR)** - Basic
- 🇩🇪 **German (DE)** - Basic

### Adding More Languages
1. Open `index-new.html`
2. Find `i18n` object (~line 1985)
3. Copy EN structure
4. Translate all keys
5. Done! 🎉

---

## 💾 Data & Privacy

### Where is Data Stored?
- **LocalStorage** - All data stays in your browser
- **Your Device Only** - Nothing sent to servers
- **100% Private** - No tracking, no analytics, no cookies

### Backup & Export
- **JSON Export** - Full backup with all data
- **Import** - Restore from backup file
- **PDF/TXT Export** - Summary report

### Security
- **Optional Password** - Lock app with password
- **No Cloud Sync** - Data never leaves your device
- **Open Source** - Inspect all code

---

## 🎨 Customization

### Themes
- 6 color themes: Purple, Blue, Green, Pink, Orange, Teal
- Light/Dark mode toggle
- Saved to LocalStorage

### Layout
- **Edit Mode** - Drag & drop to reorder cards
- **Custom Order** - Saved automatically
- **Reset** - Return to default order

### Filters & Search
- Search by name/description
- Filter by type (Priority, Enhanced, Filled, Empty)
- Sort by name, records, last used

---

## 📱 PWA Installation

### Desktop (Chrome/Edge)
1. Visit site via `http://` or `https://`
2. Look for install icon in address bar
3. Click "Install"
4. App appears in applications menu

### Mobile (iOS/Android)
1. Open in Safari (iOS) or Chrome (Android)
2. Tap Share → "Add to Home Screen"
3. App icon appears on home screen
4. Opens like native app

---

## 🔄 Version History

### Version 3.0.0 (Current)
- ✅ Complete UI/UX redesign
- ✅ 32 types fully integrated
- ✅ PWA ready with offline support
- ✅ 7 languages supported
- ✅ Advanced features (password, export, etc.)
- ✅ Modern animations & transitions

### Version 2.0.0 (Legacy)
- Basic 32 types
- Simple UI
- English only

### Version 1.0.0 (Original)
- Initial concept
- 10 basic types

---

## 🤝 Contributing

### For Developers
1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

### For Translators
1. Open `index-new.html`
2. Find `i18n` object
3. Add new language following EN structure
4. Submit via PR or issue

### For Designers
- Suggest UI improvements
- Create new themes
- Design icons/graphics

---

## 📜 License

**MIT License** - Free to use, modify, distribute

```
Copyright (c) 2025 Love Dossier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

## 💬 Support

### Issues & Bugs
- Report bugs via GitHub Issues
- Include browser version & OS
- Provide steps to reproduce

### Feature Requests
- Suggest new types
- Request enhancements
- Vote on existing requests

### Community
- Share your success stories
- Help other users
- Contribute translations

---

## 🎯 Roadmap

### Upcoming Features
- [ ] Cloud sync (optional, encrypted)
- [ ] Mobile apps (iOS/Android)
- [ ] Voice input
- [ ] AI suggestions
- [ ] Couple mode (sync between partners)
- [ ] More types (40+ total)
- [ ] Advanced analytics
- [ ] Export to more formats

### Long-term Vision
- Build the most comprehensive relationship management tool
- Help millions of couples worldwide
- Always free, always private, always improving

---

## 🌟 Credits

**Created with ❤️ for couples everywhere**

### Special Thanks
- **Font Awesome** - Icons
- **Google Fonts** - Typography
- **All Contributors** - Translations, testing, feedback

---

## 📞 Contact

- **GitHub Issues** - Technical support
- **Email** - [Your email]
- **Twitter** - [@YourHandle]

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with 💜 for lasting love**

[⬆ Back to Top](#-love-dossier---complete-relationship-management-system)

</div>
