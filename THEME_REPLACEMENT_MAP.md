# 🗺️ Карта замін для впровадження тем

> **Результати аналізу - всі місця з hardcoded кольорами**

---

## 📊 Статистика

- **Градієнтів (linear-gradient):** ~45 місць
- **RGBA з primary кольором:** ~80 місць  
- **Hex кольори:** ~20 місць
- **Всього замін:** ~145 місць

---

## 🎨 Знайдені паттерни

### 1. Background градієнти
- `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` - body background
- `linear-gradient(135deg, var(--card) 0%, var(--bg) 100%)` - header, content
- `linear-gradient(135deg, var(--primary) 0%, #7c3aed 100%)` - text gradients
- `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9))` - buttons

### 2. Primary opacity варіанти
- `rgba(99, 102, 241, 0.05)` → `var(--primary-5)`
- `rgba(99, 102, 241, 0.08)` → `var(--primary-8)`
- `rgba(99, 102, 241, 0.1)` → `var(--primary-10)`
- `rgba(99, 102, 241, 0.12)` → `var(--primary-12)`
- `rgba(99, 102, 241, 0.15)` → `var(--primary-15)`
- `rgba(99, 102, 241, 0.2)` → `var(--primary-20)`
- `rgba(99, 102, 241, 0.25)` → `var(--primary-25)`
- `rgba(99, 102, 241, 0.3)` → `var(--primary-30)`
- `rgba(99, 102, 241, 0.35)` → `var(--primary-35)`
- `rgba(99, 102, 241, 0.4)` → `var(--primary-40)`

### 3. Hex кольори
- `#667eea`, `#764ba2` - background gradient
- `#7c3aed` - accent purple
- `#4f46e5`, `#3730a3` - primary dark variants
- `#10b981`, `#059669` - success/green buttons
- `#f59e0b`, `#d97706` - warning/orange buttons
- `#dc2626`, `#b91c1c`, `#ef4444` - danger/red buttons

---

## ✅ КРОК 1 ЗАВЕРШЕНО

Аналіз виконано. Знайдено всі hardcoded значення.

**Готово до КРОКУ 2**: Розширення :root блоку
