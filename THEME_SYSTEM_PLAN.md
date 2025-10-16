# 🎨 План впровадження системи тем для Love Dossier

> **Детальний план для AI по реалізації системи тем з можливістю кастомізації**

---

## 📋 Огляд завдання

Реалізувати повноцінну систему тем з можливістю:
- ✅ Перемикання між готовими темами (темна, світла, поточна, + 3 додаткові)
- ✅ Створення кастомної теми користувачем
- ✅ Попередній перегляд теми
- ✅ Збереження в localStorage
- ✅ Плавні переходи між темами

---

## 🎯 Технічні вимоги

1. Використовувати існуючу архітектуру проекту
2. Інтегруватися з системою State
3. Використовувати CSS змінні (:root)
4. Слідувати існуючим патернам коду
5. Адаптивність для мобільних

---

## 📝 Покрокова реалізація

### ⚠️ ВАЖЛИВО: Порядок дій критично важливий!

Не переходити до наступного кроку, поки попередній не завершено.

---

## КРОК 1: Аналіз CSS та створення карти змінних

**Мета:** Знайти всі hardcoded кольори та градієнти

**Дії:**
1. Знайти всі `background: linear-gradient(...)` в CSS (рядки 34-2755)
2. Знайти всі hex-кольори (#ffffff, #6366f1, тощо)
3. Знайти всі rgba() з фіксованими кольорами
4. Створити список ВСІХ унікальних кольорів
5. Групувати за призначенням (background, text, borders, shadows)

**Інструменти:** 
- `grep_search` для пошуку паттернів
- `read_file` для аналізу коду

**Результат:** 
Документ `THEME_COLORS_MAP.md` з переліком:
- Існуючі CSS змінні (40-57 рядки)
- Нові змінні що треба додати
- Карта замін (старе значення → нова змінна)

**Критерій завершення:** 
Маємо повний список з мінімум 40+ CSS змінних для всіх кольорів

---

## КРОК 2: Розширення блоку :root

**Мета:** Додати нові CSS змінні

**Дії:**
1. Розширити блок `:root` (рядок 40-57)
2. Додати змінні для градієнтів фону body
3. Додати змінні для градієнтів карток
4. Додати змінні для градієнтів кнопок
5. Додати змінні для акцентних кольорів
6. Додати змінні для прозорості primary кольору
7. Додати змінні для тіней з кольорами

**Приклад додавання:**
```css
:root {
  /* Existing... */
  
  /* Theme System - Background */
  --bg-gradient-start: #667eea;
  --bg-gradient-end: #764ba2;
  --body-bg: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
  
  /* Theme System - Cards */
  --card-gradient-start: #ffffff;
  --card-gradient-end: #f8fafc;
  
  /* Theme System - Accents */
  --accent-purple: #7c3aed;
  --accent-pink: #ec4899;
}
```

**Файл:** `index.html` рядки 40-57

**Критерій завершення:** 
Блок :root містить всі необхідні змінні (40+ змінних)

---

## КРОК 3: Рефакторинг CSS - заміна hardcoded значень

**Мета:** Замінити hardcoded кольори на CSS змінні

**Дії:**
1. Замінити `background: linear-gradient(135deg, #667eea, #764ba2)` → `background: var(--body-bg)`
2. Замінити rgba(99, 102, 241, 0.X) → відповідні змінні
3. Замінити hex-кольори → змінні
4. Замінити тіні з кольорами → змінні
5. Перевірити візуально що нічого не зламалось

**Приклади замін:**

**Body (рядок 59-65):**
```css
/* Було */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Стало */
background: var(--body-bg);
```

**Header (рядок 184-197):**
```css
/* Було */
background: linear-gradient(135deg, var(--card) 0%, var(--bg) 100%);
border: 2px solid rgba(99, 102, 241, 0.1);
box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);

/* Стало */
background: linear-gradient(135deg, var(--card-gradient-start), var(--card-gradient-end));
border: 2px solid var(--primary-10);
box-shadow: var(--header-shadow);
```

**Інструменти:** `multi_edit` для множинних замін

**Критерій завершення:** 
В CSS немає hardcoded кольорів (крім блоку :root)

---

## КРОК 4: Створення об'єкта ThemeManager - Частина 1 (Структура)

**Мета:** Створити базову структуру ThemeManager

**Місце:** Після TestDrive (~рядок 9700), перед App

**Код:**
```javascript
// === THEME MANAGER ===
const ThemeManager = {
  currentThemeName: 'current',
  
  themes: {
    current: { name: 'Поточна', icon: 'fa-palette', colors: {...} },
    light: { name: 'Світла', icon: 'fa-sun', colors: {...} },
    dark: { name: 'Темна', icon: 'fa-moon', colors: {...} },
    ocean: { name: 'Океан', icon: 'fa-water', colors: {...} },
    sunset: { name: 'Захід', icon: 'fa-cloud-sun', colors: {...} },
    forest: { name: 'Ліс', icon: 'fa-tree', colors: {...} },
    custom: null
  },
  
  init() {},
  loadTheme() {},
  saveTheme() {},
  applyTheme(themeName, animate) {},
  getTheme(themeName) {},
  updateDerivedVariables(colors) {},
  showThemeModal() {},
  showCustomThemeEditor() {},
  exportTheme(themeName) {},
  importTheme(file) {}
};
```

**Критерій завершення:** 
Об'єкт ThemeManager створено з усіма методами (навіть порожніми)

---

## КРОК 5: Реалізація методів ThemeManager - Базові

**Мета:** Реалізувати базові методи init, load, save, apply

**Методи для реалізації:**
1. `init()` - ініціалізація, виклик loadTheme()
2. `loadTheme()` - завантаження з localStorage
3. `saveTheme()` - збереження в localStorage
4. `applyTheme(themeName, animate)` - застосування теми через CSS змінні
5. `getTheme(themeName)` - отримання об'єкта теми
6. `updateDerivedVariables(colors)` - оновлення opacity варіантів

**Ключові моменти:**
- localStorage key: `'love_dossier_theme'`
- Зберігати: `{ themeName, customTheme }`
- applyTheme використовує `document.documentElement.style.setProperty()`

**Критерій завершення:**
Можна викликати `ThemeManager.applyTheme('dark')` і тема міняється

---

## КРОК 6: CSS анімація переходу між темами

**Мета:** Додати плавний перехід між темами

**Дії:**
1. Додати CSS клас `.theme-transitioning`
2. Додати transition для CSS змінних
3. У applyTheme() додавати/видаляти клас

**CSS (додати в секцію <style>):**
```css
:root {
  transition: background 0.3s ease, color 0.3s ease;
}

html.theme-transitioning,
html.theme-transitioning * {
  transition: 
    background 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease !important;
}
```

**Критерій завершення:**
При зміні теми колір плавно переходить (300ms)

---

## КРОК 7: UI - Модальне вікно вибору теми

**Мета:** Створити красиве модальне вікно для вибору теми

**Структура HTML:**
```html
<div class="theme-modal-grid">
  <div class="theme-option active" data-theme="current">
    <div class="theme-preview">
      <!-- мініатюрний preview кольорів теми -->
    </div>
    <div class="theme-option-info">
      <i class="fa fa-palette"></i>
      <span>Поточна</span>
    </div>
  </div>
  <!-- інші теми... -->
</div>
```

**CSS для модального вікна:**
- Grid 2-3 колонки
- Hover ефекти
- Активна тема виділена
- Preview box показує кольори теми

**Критерій завершення:**
Модальне вікно відкривається, показує всі теми, можна вибрати

---

## КРОК 8: UI - Редактор кастомної теми

**Мета:** Створити інтерфейс для налаштування кольорів

**Функціонал:**
- Color picker для кожного кольору
- Секції: Background, Cards, Text, Buttons тощо
- Live preview (змінюється на льоту)
- Кнопки: Зберегти, Скасувати, Скинути

**HTML структура:**
```html
<div class="custom-theme-editor">
  <div class="theme-preview-panel">
    <!-- Live preview теми -->
  </div>
  
  <div class="theme-color-groups">
    <div class="theme-color-group">
      <h4>Фон</h4>
      <div class="theme-color-input">
        <label>Градієнт (початок)</label>
        <input type="color" id="bgGradientStart" value="#667eea">
      </div>
      <!-- інші кольори... -->
    </div>
  </div>
</div>
```

**Критерій завершення:**
Можна відкрити редактор, змінити кольори, побачити preview, зберегти

---

## КРОК 9: Інтеграція в App

**Мета:** Додати кнопку теми в UI

**Дії:**
1. Додати кнопку "Теми" в header-menu-dropdown
2. Викликати `ThemeManager.showThemeModal()` при кліку
3. Додати `ThemeManager.init()` в `App.init()`

**HTML (додати в header-menu-dropdown, рядок ~2900):**
```html
<button class="btn" data-action="ThemeManager.showThemeModal">
  <i class="fa fa-palette"></i>
  <span data-i18n="ui.themes">Теми</span>
</button>
```

**JS (додати в App.init(), рядок ~11600):**
```javascript
// Ініціалізація системи тем
ThemeManager.init();
```

**Критерій завершення:**
Кнопка "Теми" з'явилась в меню, при кліку відкривається модальне вікно

---

## КРОК 10: Додавання перекладів

**Мета:** Додати переклади для UI тем

**Додати в TRANSLATIONS (~рядок 3100-3800):**
```javascript
TRANSLATIONS.uk.theme = {
  selectTheme: 'Оберіть тему',
  createCustom: 'Створити кастомну',
  editCustom: 'Редагувати кастомну',
  import: 'Імпортувати',
  export: 'Експортувати',
  reset: 'Скинути',
  preview: 'Попередній перегляд',
  // ... інші
};

// Для en, ru, pl також
```

**Критерій завершення:**
Всі тексти інтерфейсу тем перекладені на 4 мови

---

## КРОК 11: Експорт/Імпорт тем

**Мета:** Додати можливість експорту та імпорту тем

**Реалізувати:**
1. `exportTheme(themeName)` - завантажити JSON файл
2. `importTheme(file)` - прочитати JSON, валідувати, застосувати
3. Кнопки в UI модального вікна

**Формат JSON:**
```json
{
  "name": "Моя тема",
  "icon": "fa-palette",
  "colors": {
    "primary": "#6366f1",
    ...
  }
}
```

**Критерій завершення:**
Можна експортувати тему в файл та імпортувати з файлу

---

## КРОК 12: Тестування

**Мета:** Перевірити всю систему

**Тест-кейси:**
1. ✅ Зміна між усіма готовими темами
2. ✅ Створення кастомної теми
3. ✅ Збереження теми (перезавантажити сторінку)
4. ✅ Експорт/імпорт кастомної теми
5. ✅ Адаптивність на мобільних
6. ✅ Плавні переходи
7. ✅ Переклади на всіх мовах

**Критерій завершення:**
Всі тест-кейси пройдені успішно

---

## КРОК 13: Документація

**Мета:** Оновити документацію

**Файли для оновлення:**
1. `README.md` - додати розділ про систему тем
2. `DEVELOPER_GUIDE.md` - додати технічну документацію ThemeManager
3. `AI_PROMPT.md` - додати інформацію про ThemeManager

**Критерій завершення:**
Документація оновлена, зрозуміло описано як користуватись темами

---

## 📦 Файли що будуть змінені

1. `index.html` - основний файл
   - CSS секція (рядки 34-2755) - додати змінні, замінити hardcode
   - HTML body (рядки 2756-3028) - додати кнопку тем
   - JavaScript (рядки 3029-11767) - додати ThemeManager

2. `README.md` - додати розділ про теми

3. `DEVELOPER_GUIDE.md` - технічна документація

4. `AI_PROMPT.md` - інструкції для AI

---

## 🎨 Палітри готових тем

### Current (Поточна)
- Primary: #6366f1, #4f46e5
- Background: #667eea → #764ba2
- Text: #0f172a, #64748b
- Card: #ffffff, #f8fafc

### Light (Світла)
- Primary: #3b82f6, #2563eb
- Background: #bfdbfe → #dbeafe
- Text: #111827, #6b7280
- Card: #ffffff, #f9fafb

### Dark (Темна)
- Primary: #818cf8, #6366f1
- Background: #1e1b4b → #312e81
- Text: #f9fafb, #9ca3af
- Card: #111827, #1f2937

### Ocean (Океан)
- Primary: #06b6d4, #0891b2
- Background: #0891b2 → #0e7490
- Text: #0f172a, #475569
- Card: #ffffff, #cffafe

### Sunset (Захід)
- Primary: #f97316, #ea580c
- Background: #fb923c → #f97316
- Text: #0f172a, #78716c
- Card: #ffffff, #ffedd5

### Forest (Ліс)
- Primary: #10b981, #059669
- Background: #059669 → #047857
- Text: #0f172a, #52525b
- Card: #ffffff, #dcfce7

---

## ✅ Контрольний список

- [ ] Крок 1: Аналіз CSS та створення карти змінних
- [ ] Крок 2: Розширення блоку :root
- [ ] Крок 3: Рефакторинг CSS
- [ ] Крок 4: Створення ThemeManager структури
- [ ] Крок 5: Реалізація базових методів
- [ ] Крок 6: CSS анімація переходів
- [ ] Крок 7: UI модального вікна
- [ ] Крок 8: UI редактора кастомної теми
- [ ] Крок 9: Інтеграція в App
- [ ] Крок 10: Додавання перекладів
- [ ] Крок 11: Експорт/Імпорт
- [ ] Крок 12: Тестування
- [ ] Крок 13: Документація

---

## 🚨 Важливі примітки для AI

1. **Порядок виконання критично важливий** - не пропускати кроки
2. **Після кожного кроку перевіряти** що нічого не зламалось
3. **Зберігати існуючий стиль коду** - український коментарі, camelCase, тощо
4. **Тестувати на мобільних** - система має бути адаптивною
5. **Не забути про переклади** - українська, англійська, російська, польська
6. **Використовувати існуючі компоненти** - Modal, Toast, CustomSelect
7. **Додавати Debug.log()** для відстеження процесів

---

**Створено для проекту Love Dossier v2.0**  
**Дата:** 16 жовтня 2025
