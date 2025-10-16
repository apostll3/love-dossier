# 🎨 Специфікація кольорів для системи тем

> **Детальна карта CSS змінних та палітри тем**

---

## 📋 Карта CSS змінних

### Існуючі змінні (рядки 40-57)

```css
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --bg: #f8fafc;
  --card: #ffffff;
  --border: #e2e8f0;
  --text: #0f172a;
  --text-muted: #64748b;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --radius: 0.75rem;
  --radius-sm: 0.5rem;
}
```

### Нові змінні що треба додати

```css
:root {
  /* === THEME SYSTEM VARIABLES === */
  
  /* Background Gradients */
  --bg-gradient-start: #667eea;
  --bg-gradient-end: #764ba2;
  --body-bg: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
  
  /* Card Styles */
  --card-gradient-start: #ffffff;
  --card-gradient-end: #f8fafc;
  --card-bg: linear-gradient(135deg, var(--card-gradient-start), var(--card-gradient-end));
  --card-border: rgba(99, 102, 241, 0.1);
  --card-border-hover: rgba(99, 102, 241, 0.12);
  --card-shadow: 0 20px 40px rgba(99, 102, 241, 0.12);
  --card-shadow-hover: 0 24px 48px rgba(99, 102, 241, 0.15);
  
  /* Header Styles */
  --header-bg-start: #ffffff;
  --header-bg-end: #f8fafc;
  --header-border: rgba(99, 102, 241, 0.1);
  --header-border-hover: rgba(99, 102, 241, 0.2);
  --header-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
  --header-shadow-hover: 0 24px 48px rgba(99, 102, 241, 0.2);
  
  /* Sidebar Styles */
  --sidebar-bg: #ffffff;
  --sidebar-item-bg: #f8fafc;
  --sidebar-item-hover-bg: rgba(99, 102, 241, 0.1);
  --sidebar-item-active-bg: #6366f1;
  --sidebar-item-active-text: #ffffff;
  --sidebar-border: rgba(99, 102, 241, 0.1);
  
  /* Field Card Styles */
  --field-card-bg-start: rgba(255, 255, 255, 0.95);
  --field-card-bg-end: rgba(248, 250, 252, 0.95);
  --field-card-border: rgba(99, 102, 241, 0.1);
  --field-card-border-hover: rgba(99, 102, 241, 0.3);
  --field-card-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
  --field-card-shadow-hover: 0 8px 24px rgba(99, 102, 241, 0.15);
  
  /* Button Styles */
  --btn-primary-bg-start: #6366f1;
  --btn-primary-bg-end: #4f46e5;
  --btn-primary-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
  --btn-primary-shadow-hover: 0 4px 12px rgba(99, 102, 241, 0.35);
  
  --btn-success-bg-start: #10b981;
  --btn-success-bg-end: #059669;
  --btn-success-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
  
  --btn-warning-bg-start: #f59e0b;
  --btn-warning-bg-end: #d97706;
  --btn-warning-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
  
  --btn-danger-bg-start: #dc2626;
  --btn-danger-bg-end: #b91c1c;
  --btn-danger-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);
  
  /* Accent Colors */
  --accent-purple: #7c3aed;
  --accent-pink: #ec4899;
  
  /* Primary Opacity Variants */
  --primary-5: rgba(99, 102, 241, 0.05);
  --primary-10: rgba(99, 102, 241, 0.1);
  --primary-15: rgba(99, 102, 241, 0.15);
  --primary-20: rgba(99, 102, 241, 0.2);
  --primary-25: rgba(99, 102, 241, 0.25);
  --primary-30: rgba(99, 102, 241, 0.3);
  --primary-35: rgba(99, 102, 241, 0.35);
  --primary-40: rgba(99, 102, 241, 0.4);
  
  /* Content Area */
  --content-bg-start: #ffffff;
  --content-bg-end: #f8fafc;
  --content-border: rgba(99, 102, 241, 0.08);
  --content-shadow: 0 20px 40px rgba(99, 102, 241, 0.12);
  
  /* Input Fields */
  --input-bg: #ffffff;
  --input-border: #e2e8f0;
  --input-border-hover: #cbd5e1;
  --input-border-focus: var(--primary);
  --input-shadow-focus: 0 0 0 4px rgba(99, 102, 241, 0.1);
  
  /* Progress Bar */
  --progress-bg: #e2e8f0;
  --progress-fill-start: #6366f1;
  --progress-fill-end: #4f46e5;
  --progress-shadow: 0 0 8px rgba(99, 102, 241, 0.4);
  
  /* Search Highlight */
  --search-highlight-bg: #fef08a;
  --search-highlight-text: #854d0e;
  
  /* Badge & Chip */
  --badge-primary-bg: rgba(99, 102, 241, 0.1);
  --badge-primary-text: var(--primary);
  --chip-bg: var(--primary);
  --chip-text: #ffffff;
  
  /* Modal */
  --modal-overlay-bg: rgba(0, 0, 0, 0.5);
  --modal-bg: #ffffff;
  --modal-border: var(--primary);
  --modal-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  /* Toast */
  --toast-success-bg: #10b981;
  --toast-error-bg: #ef4444;
  --toast-warning-bg: #f59e0b;
  --toast-info-bg: #3b82f6;
}
```

---

## 🎨 Палітри тем

### 1. Current (Поточна тема)

```javascript
{
  name: 'Поточна',
  icon: 'fa-palette',
  colors: {
    // Primary
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    
    // Background
    bgGradientStart: '#667eea',
    bgGradientEnd: '#764ba2',
    bg: '#f8fafc',
    
    // Card
    card: '#ffffff',
    cardGradientStart: '#ffffff',
    cardGradientEnd: '#f8fafc',
    
    // Text
    text: '#0f172a',
    textMuted: '#64748b',
    
    // Border
    border: '#e2e8f0',
    
    // Status
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    
    // Accents
    accentPurple: '#7c3aed',
    accentPink: '#ec4899',
    
    // Sidebar
    sidebarBg: '#ffffff',
    sidebarItemBg: '#f8fafc',
    sidebarItemActive: '#6366f1',
    
    // Input
    inputBg: '#ffffff',
    inputBorder: '#e2e8f0'
  }
}
```

### 2. Light (Світла тема)

```javascript
{
  name: 'Світла',
  icon: 'fa-sun',
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    bgGradientStart: '#bfdbfe',
    bgGradientEnd: '#dbeafe',
    bg: '#ffffff',
    card: '#ffffff',
    cardGradientStart: '#ffffff',
    cardGradientEnd: '#f9fafb',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    accentPurple: '#8b5cf6',
    accentPink: '#ec4899',
    sidebarBg: '#ffffff',
    sidebarItemBg: '#f9fafb',
    sidebarItemActive: '#3b82f6',
    inputBg: '#ffffff',
    inputBorder: '#e5e7eb'
  }
}
```

### 3. Dark (Темна тема)

```javascript
{
  name: 'Темна',
  icon: 'fa-moon',
  colors: {
    primary: '#818cf8',
    primaryDark: '#6366f1',
    bgGradientStart: '#1e1b4b',
    bgGradientEnd: '#312e81',
    bg: '#1f2937',
    card: '#111827',
    cardGradientStart: '#1f2937',
    cardGradientEnd: '#111827',
    text: '#f9fafb',
    textMuted: '#9ca3af',
    border: '#374151',
    success: '#34d399',
    warning: '#fbbf24',
    danger: '#f87171',
    accentPurple: '#a78bfa',
    accentPink: '#f472b6',
    sidebarBg: '#111827',
    sidebarItemBg: '#1f2937',
    sidebarItemActive: '#818cf8',
    inputBg: '#1f2937',
    inputBorder: '#374151'
  }
}
```

### 4. Ocean (Океан)

```javascript
{
  name: 'Океан',
  icon: 'fa-water',
  colors: {
    primary: '#06b6d4',
    primaryDark: '#0891b2',
    bgGradientStart: '#0891b2',
    bgGradientEnd: '#0e7490',
    bg: '#ecfeff',
    card: '#ffffff',
    cardGradientStart: '#ffffff',
    cardGradientEnd: '#cffafe',
    text: '#0f172a',
    textMuted: '#475569',
    border: '#a5f3fc',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    accentPurple: '#0284c7',
    accentPink: '#06b6d4',
    sidebarBg: '#ffffff',
    sidebarItemBg: '#ecfeff',
    sidebarItemActive: '#06b6d4',
    inputBg: '#ffffff',
    inputBorder: '#a5f3fc'
  }
}
```

### 5. Sunset (Захід сонця)

```javascript
{
  name: 'Захід сонця',
  icon: 'fa-cloud-sun',
  colors: {
    primary: '#f97316',
    primaryDark: '#ea580c',
    bgGradientStart: '#fb923c',
    bgGradientEnd: '#f97316',
    bg: '#fff7ed',
    card: '#ffffff',
    cardGradientStart: '#ffffff',
    cardGradientEnd: '#ffedd5',
    text: '#0f172a',
    textMuted: '#78716c',
    border: '#fed7aa',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    accentPurple: '#dc2626',
    accentPink: '#f97316',
    sidebarBg: '#ffffff',
    sidebarItemBg: '#fff7ed',
    sidebarItemActive: '#f97316',
    inputBg: '#ffffff',
    inputBorder: '#fed7aa'
  }
}
```

### 6. Forest (Ліс)

```javascript
{
  name: 'Ліс',
  icon: 'fa-tree',
  colors: {
    primary: '#10b981',
    primaryDark: '#059669',
    bgGradientStart: '#059669',
    bgGradientEnd: '#047857',
    bg: '#f0fdf4',
    card: '#ffffff',
    cardGradientStart: '#ffffff',
    cardGradientEnd: '#dcfce7',
    text: '#0f172a',
    textMuted: '#52525b',
    border: '#bbf7d0',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    accentPurple: '#16a34a',
    accentPink: '#10b981',
    sidebarBg: '#ffffff',
    sidebarItemBg: '#f0fdf4',
    sidebarItemActive: '#10b981',
    inputBg: '#ffffff',
    inputBorder: '#bbf7d0'
  }
}
```

---

## 🔄 Карта замін hardcoded значень

### Body (рядок 59-65)

```css
/* Було */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Стало */
background: var(--body-bg);
```

### Header (рядки 184-197)

```css
/* Було */
background: linear-gradient(135deg, var(--card) 0%, var(--bg) 100%);
border: 2px solid rgba(99, 102, 241, 0.1);
box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);

/* Стало */
background: var(--card-bg);
border: 2px solid var(--card-border);
box-shadow: var(--header-shadow);
```

```css
/* Було */
.header:hover {
  box-shadow: 0 24px 48px rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.2);
}

/* Стало */
.header:hover {
  box-shadow: var(--header-shadow-hover);
  border-color: var(--header-border-hover);
}
```

### Content (рядки 1180-1207)

```css
/* Було */
.content {
  background: linear-gradient(135deg, var(--card) 0%, var(--bg) 100%);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.12);
  border: 2px solid rgba(99, 102, 241, 0.08);
}

/* Стало */
.content {
  background: var(--card-bg);
  box-shadow: var(--content-shadow);
  border: 2px solid var(--content-border);
}
```

### Category Item Active (рядки 1006-1010)

```css
/* Було */
.category-item.active {
  background: var(--primary);
  color: white;
}

/* Стало */
.category-item.active {
  background: var(--sidebar-item-active-bg);
  color: var(--sidebar-item-active-text);
}
```

### Field Card (рядки 1487-1518)

```css
/* Було */
.field-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95));
  border: 2px solid rgba(99, 102, 241, 0.1);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
}

.field-card:hover {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
}

/* Стало */
.field-card {
  background: linear-gradient(135deg, var(--field-card-bg-start), var(--field-card-bg-end));
  border: 2px solid var(--field-card-border);
  box-shadow: var(--field-card-shadow);
}

.field-card:hover {
  border-color: var(--field-card-border-hover);
  box-shadow: var(--field-card-shadow-hover);
}
```

---

## 📦 Резюме змін

### Змінні що треба додати в :root
- 50+ нових CSS змінних
- Градієнти для body, cards, buttons
- Opacity варіанти для primary
- Змінні для кожного UI компонента

### CSS що треба змінити
- ~200+ місць де є hardcoded кольори
- Градієнти (30+ місць)
- RGBA значення (100+ місць)
- Hex кольори (70+ місць)

### JavaScript що треба додати
- ThemeManager об'єкт (~500 рядків коду)
- 6 готових тем
- Методи для зміни/збереження/експорту тем
- UI для вибору та редагування тем

---

**Примітка:** Всі зміни мають бути зворотньо сумісними. Після впровадження візуально нічого не повинно змінитись для поточної теми.
