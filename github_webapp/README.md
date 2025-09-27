# 🔮 Tarot Bot WebApp

WebApp для выбора карт Таро в Telegram боте.

## Что это?

Это мини-приложение для Telegram, которое позволяет пользователям выбирать карты Таро с красивым интерфейсом.

## Как использовать:

1. Загрузите все файлы в ваш GitHub репозиторий
2. Включите GitHub Pages в настройках репозитория
3. Получите URL вида: `https://your-username.github.io/repo-name/`
4. Используйте этот URL в вашем Telegram боте

## Файлы:

- `index.html` - главная страница WebApp
- `static/style.css` - стили
- `static/cards/` - изображения карт Таро
- `README.md` - эта инструкция

## Настройка в боте:

В файле `keyboards.py` замените URL:
```python
web_app={"url": "https://your-username.github.io/repo-name/"}
```

## Готово! 🎉