# 🚀 Инструкция по развертыванию на GitHub Pages

## ❌ Проблема
Сейчас файлы загружены в папку `github-pages/`, но GitHub Pages ожидает файлы в корне репозитория.

## ✅ Решение

### 1. Загрузите файлы в корень репозитория:
```
your-repo/
├── index.html          # ← В корень!
├── static/             # ← В корень!
│   ├── css/
│   ├── js/
│   └── cards/
└── README.md
```

### 2. НЕ создавайте папку `github-pages/` в репозитории!

### 3. Структура должна быть:
```
nikitayushkin95-cyber.github.io/bottaro/
├── index.html
├── static/
│   ├── css/style.css
│   ├── js/app.js
│   └── cards/card_back.png
└── README.md
```

## 🔧 Что нужно сделать:

1. **Удалите папку `github-pages/`** из репозитория
2. **Загрузите файлы** из папки `github-pages/` в корень репозитория
3. **Проверьте URL**: https://nikitayushkin95-cyber.github.io/bottaro/

## 📁 Файлы для загрузки:

- `index.html` → в корень
- `static/` → в корень
- `README.md` → в корень

**После этого WebApp будет работать правильно!**
