# 🔮 Tarot WebApp для GitHub Pages

Этот репозиторий содержит WebApp для выбора карт Таро, который можно развернуть на GitHub Pages.

## 🚀 Развертывание

1. **Создайте новый репозиторий** на GitHub
2. **Загрузите все файлы** из этой папки в репозиторий
3. **Включите GitHub Pages** в настройках репозитория:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
4. **Получите URL**: `https://yourusername.github.io/your-repo-name/`

## 📁 Структура

```
github-pages/
├── index.html          # Главная страница WebApp
├── static/             # Статические файлы
│   ├── css/style.css   # Стили
│   ├── js/app.js       # JavaScript
│   └── cards/          # Изображения карт
└── README.md           # Этот файл
```

## 🔧 Настройка бота

После развертывания обновите `.env` файл бота:

```env
WEBAPP_BASE_URL=https://yourusername.github.io/your-repo-name/
```

## ✨ Особенности

- ✅ **HTTPS поддержка** - работает с Telegram WebApp
- ✅ **Адаптивный дизайн** - для всех устройств
- ✅ **Красивый интерфейс** - звездный фон и анимации
- ✅ **Выбор 3 карт** - интерактивный интерфейс
- ✅ **Telegram интеграция** - отправка данных в бот

## 🎨 Кастомизация

- **CSS**: `static/css/style.css`
- **JavaScript**: `static/js/app.js`
- **HTML**: `index.html`

## 📱 Использование

1. Пользователь нажимает "🃏 Выбрать карты" в боте
2. Открывается WebApp с выбором карт
3. Выбирает 3 карты
4. Нажимает "Продолжить"
5. Данные отправляются в бот для интерпретации
