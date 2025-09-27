// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Состояние приложения
let selectedCards = [];
const maxCards = 3;

// Все доступные карты Таро
const allCards = [
    'the_fool', 'the_magician', 'the_high_priestess', 'the_empress', 'the_emperor', 'the_hierophant',
    'the_lovers', 'the_chariot', 'strength', 'the_hermit', 'wheel_of_fortune', 'justice',
    'the_hanged_man', 'death', 'temperance', 'the_devil', 'the_tower', 'the_star',
    'the_moon', 'the_sun', 'judgement', 'the_world',
    'ace_of_wands', 'two_of_wands', 'three_of_wands', 'four_of_wands', 'five_of_wands', 'six_of_wands',
    'seven_of_wands', 'eight_of_wands', 'nine_of_wands', 'ten_of_wands', 'page_of_wands', 'knight_of_wands',
    'queen_of_wands', 'king_of_wands', 'ace_of_cups', 'two_of_cups', 'three_of_cups', 'four_of_cups',
    'five_of_cups', 'six_of_cups', 'seven_of_cups', 'eight_of_cups', 'nine_of_cups', 'ten_of_cups',
    'page_of_cups', 'knight_of_cups', 'queen_of_cups', 'king_of_cups', 'ace_of_swords', 'two_of_swords',
    'three_of_swords', 'four_of_swords', 'five_of_swords', 'six_of_swords', 'seven_of_swords', 'eight_of_swords',
    'nine_of_swords', 'ten_of_swords', 'page_of_swords', 'knight_of_swords', 'queen_of_swords', 'king_of_swords',
    'ace_of_pentacles', 'two_of_pentacles', 'three_of_pentacles', 'four_of_pentacles', 'five_of_pentacles',
    'six_of_pentacles', 'seven_of_pentacles', 'eight_of_pentacles', 'nine_of_pentacles', 'ten_of_pentacles',
    'page_of_pentacles', 'knight_of_pentacles', 'queen_of_pentacles', 'king_of_pentacles'
];

// Названия карт на русском
const cardNames = {
    'the_fool': 'Дурак', 'the_magician': 'Маг', 'the_high_priestess': 'Жрица', 'the_empress': 'Императрица',
    'the_emperor': 'Император', 'the_hierophant': 'Иерофант', 'the_lovers': 'Влюблённые', 'the_chariot': 'Колесница',
    'strength': 'Сила', 'the_hermit': 'Отшельник', 'wheel_of_fortune': 'Колесо Фортуны', 'justice': 'Справедливость',
    'the_hanged_man': 'Повешенный', 'death': 'Смерть', 'temperance': 'Умеренность', 'the_devil': 'Дьявол',
    'the_tower': 'Башня', 'the_star': 'Звезда', 'the_moon': 'Луна', 'the_sun': 'Солнце', 'judgement': 'Суд',
    'the_world': 'Мир',
    'ace_of_wands': 'Туз Жезлов', 'two_of_wands': '2 Жезлов', 'three_of_wands': '3 Жезлов', 'four_of_wands': '4 Жезлов',
    'five_of_wands': '5 Жезлов', 'six_of_wands': '6 Жезлов', 'seven_of_wands': '7 Жезлов', 'eight_of_wands': '8 Жезлов',
    'nine_of_wands': '9 Жезлов', 'ten_of_wands': '10 Жезлов', 'page_of_wands': 'Паж Жезлов', 'knight_of_wands': 'Рыцарь Жезлов',
    'queen_of_wands': 'Королева Жезлов', 'king_of_wands': 'Король Жезлов',
    'ace_of_cups': 'Туз Кубков', 'two_of_cups': '2 Кубков', 'three_of_cups': '3 Кубков', 'four_of_cups': '4 Кубков',
    'five_of_cups': '5 Кубков', 'six_of_cups': '6 Кубков', 'seven_of_cups': '7 Кубков', 'eight_of_cups': '8 Кубков',
    'nine_of_cups': '9 Кубков', 'ten_of_cups': '10 Кубков', 'page_of_cups': 'Паж Кубков', 'knight_of_cups': 'Рыцарь Кубков',
    'queen_of_cups': 'Королева Кубков', 'king_of_cups': 'Король Кубков',
    'ace_of_swords': 'Туз Мечей', 'two_of_swords': '2 Мечей', 'three_of_swords': '3 Мечей', 'four_of_swords': '4 Мечей',
    'five_of_swords': '5 Мечей', 'six_of_swords': '6 Мечей', 'seven_of_swords': '7 Мечей', 'eight_of_swords': '8 Мечей',
    'nine_of_swords': '9 Мечей', 'ten_of_swords': '10 Мечей', 'page_of_swords': 'Паж Мечей', 'knight_of_swords': 'Рыцарь Мечей',
    'queen_of_swords': 'Королева Мечей', 'king_of_swords': 'Король Мечей',
    'ace_of_pentacles': 'Туз Пентаклей', 'two_of_pentacles': '2 Пентаклей', 'three_of_pentacles': '3 Пентаклей',
    'four_of_pentacles': '4 Пентаклей', 'five_of_pentacles': '5 Пентаклей', 'six_of_pentacles': '6 Пентаклей',
    'seven_of_pentacles': '7 Пентаклей', 'eight_of_pentacles': '8 Пентаклей', 'nine_of_pentacles': '9 Пентаклей',
    'ten_of_pentacles': '10 Пентаклей', 'page_of_pentacles': 'Паж Пентаклей', 'knight_of_pentacles': 'Рыцарь Пентаклей',
    'queen_of_pentacles': 'Королева Пентаклей', 'king_of_pentacles': 'Король Пентаклей'
};

// Случайно выбираем 6 карт для показа
let availableCards = [];

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Настраиваем Telegram WebApp
    tg.ready();
    tg.expand();
    
    // Случайно выбираем 6 карт из всех доступных
    selectRandomCards();
    
    // Инициализируем карты
    initializeCards();
    
    // Обновляем интерфейс
    updateUI();
}

function selectRandomCards() {
    // Перемешиваем массив и берем первые 6 карт
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    availableCards = shuffled.slice(0, 6);
}

function initializeCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    const cards = cardsGrid.querySelectorAll('.card');
    
    cards.forEach((cardElement, index) => {
        const cardSlug = availableCards[index];
        const cardName = cardNames[cardSlug] || cardSlug;
        
        cardElement.setAttribute('data-card', cardSlug);
        cardElement.setAttribute('data-name', cardName);
        
        // Устанавливаем изображение карты
        const cardImage = cardElement.querySelector('.card-image');
        if (cardImage) {
            cardImage.src = `static/cards/images/${cardSlug}.jpg`;
            cardImage.alt = cardName;
            cardImage.onerror = function() {
                // Если изображение не найдено, показываем заглушку
                this.src = 'static/cards/card_back.png';
            };
        }
        
        cardElement.addEventListener('click', () => {
            toggleCard(cardSlug);
        });
    });
}

function toggleCard(cardSlug) {
    const cardIndex = selectedCards.indexOf(cardSlug);
    
    if (cardIndex > -1) {
        // Убираем карту из выбранных
        selectedCards.splice(cardIndex, 1);
    } else {
        // Добавляем карту, если не превышен лимит
        if (selectedCards.length < maxCards) {
            selectedCards.push(cardSlug);
        } else {
            // Заменяем первую карту, если лимит превышен
            selectedCards.shift();
            selectedCards.push(cardSlug);
        }
    }
    
    updateUI();
}

function updateUI() {
    // Обновляем визуальное состояние карт
    updateCardsVisualState();
    
    // Обновляем список выбранных карт
    updateSelectedCardsList();
    
    // Обновляем кнопку "Продолжить"
    updateContinueButton();
}

function updateCardsVisualState() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(cardElement => {
        const cardSlug = cardElement.getAttribute('data-card');
        
        if (selectedCards.includes(cardSlug)) {
            cardElement.classList.add('selected');
        } else {
            cardElement.classList.remove('selected');
        }
    });
}

function updateSelectedCardsList() {
    const selectedList = document.getElementById('selectedList');
    selectedList.innerHTML = '';
    
    selectedCards.forEach(cardSlug => {
        const cardItem = document.createElement('div');
        cardItem.className = 'selected-card-item';
        cardItem.textContent = cardNames[cardSlug] || cardSlug;
        selectedList.appendChild(cardItem);
    });
}

function updateContinueButton() {
    const continueBtn = document.getElementById('continueBtn');
    
    if (selectedCards.length === maxCards) {
        continueBtn.disabled = false;
        continueBtn.classList.add('enabled');
        continueBtn.textContent = 'Продолжить';
    } else {
        continueBtn.disabled = true;
        continueBtn.classList.remove('enabled');
        continueBtn.textContent = `Выберите ${maxCards - selectedCards.length} карт`;
    }
}

// Обработчик кнопки "Продолжить"
document.getElementById('continueBtn').addEventListener('click', function() {
    if (selectedCards.length === maxCards) {
        sendDataToBot();
    }
});

function sendDataToBot() {
    // Формируем данные для отправки
    const cardsData = selectedCards.map(cardSlug => ({
        slug: cardSlug,
        reversed: Math.random() < 0.3 // 30% шанс перевернутой карты
    }));
    
    const data = {
        cards: cardsData
    };
    
    // Отправляем данные в Telegram
    tg.sendData(JSON.stringify(data));
    
    // Закрываем WebApp
    tg.close();
}

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('WebApp error:', e);
});

// Предотвращаем случайное закрытие
tg.onEvent('viewportChanged', function() {
    tg.expand();
});
