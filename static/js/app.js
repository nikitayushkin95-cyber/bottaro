// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Состояние приложения
let selectedCards = [];
const maxCards = 3;

// Доступные карты
const availableCards = [
    'the_fool',
    'the_magician', 
    'the_high_priestess',
    'the_empress',
    'the_emperor',
    'the_hierophant'
];

// Названия карт на русском
const cardNames = {
    'the_fool': 'Дурак',
    'the_magician': 'Маг',
    'the_high_priestess': 'Жрица',
    'the_empress': 'Императрица',
    'the_emperor': 'Император',
    'the_hierophant': 'Иерофант'
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Настраиваем Telegram WebApp
    tg.ready();
    tg.expand();
    
    // Инициализируем карты
    initializeCards();
    
    // Обновляем интерфейс
    updateUI();
}

function initializeCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    const cards = cardsGrid.querySelectorAll('.card');
    
    cards.forEach((cardElement, index) => {
        const cardSlug = availableCards[index];
        cardElement.setAttribute('data-card', cardSlug);
        
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
