// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready();

// Константы
const maxCards = 3;
let selectedCards = [];

// Названия карт
const CARD_NAMES = {
    'the_fool': 'Дурак',
    'the_magician': 'Маг',
    'the_high_priestess': 'Верховная Жрица',
    'the_empress': 'Императрица',
    'the_emperor': 'Император',
    'the_hierophant': 'Иерофант',
    'the_lovers': 'Влюбленные',
    'the_chariot': 'Колесница'
};

// DOM элементы
const cardsGrid = document.getElementById('cardsGrid');
const selectedCardsDiv = document.getElementById('selectedCards');
const selectedList = document.getElementById('selectedList');
const continueBtn = document.getElementById('continueBtn');

// Инициализация карт
function initCards() {
    const cards = cardsGrid.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            toggleCard(card);
        });
    });
}

// Переключение карты
function toggleCard(card) {
    const cardSlug = card.dataset.card;
    
    if (card.classList.contains('selected')) {
        // Убираем карту из выбранных
        card.classList.remove('selected');
        selectedCards = selectedCards.filter(id => id !== cardSlug);
    } else if (selectedCards.length < maxCards) {
        // Добавляем карту в выбранные
        card.classList.add('selected');
        selectedCards.push(cardSlug);
    }
    
    updateContinueButton();
}

// Обновление кнопки продолжения
function updateContinueButton() {
    if (selectedCards.length === maxCards) {
        continueBtn.style.display = 'block';
        continueBtn.textContent = `Продолжить (${selectedCards.length}/${maxCards})`;
        console.log('Кнопка показана');
    } else {
        continueBtn.style.display = 'none';
        console.log('Кнопка скрыта');
    }
}

// Обработка кнопки продолжения
continueBtn.addEventListener('click', () => {
    if (selectedCards.length === maxCards) {
        // Просто переворачиваем выбранные карты
        const cards = cardsGrid.querySelectorAll('.card');
        cards.forEach((card, index) => {
            const cardSlug = card.dataset.card;
            if (selectedCards.includes(cardSlug)) {
                const img = card.querySelector('.card-image');
                
                setTimeout(() => {
                    card.classList.add('flipping');
                    setTimeout(() => {
                        img.src = `static/cards/images/${cardSlug}.jpg`;
                        img.alt = CARD_NAMES[cardSlug];
                    }, 300);
                    setTimeout(() => {
                        card.classList.remove('flipping');
                    }, 600);
                }, index * 200);
            }
        });
        
        // Показываем названия карт
        setTimeout(() => {
            selectedCardsDiv.style.display = 'block';
            selectedList.innerHTML = '';
            
            selectedCards.forEach(cardSlug => {
                const cardName = CARD_NAMES[cardSlug];
                const cardItem = document.createElement('div');
                cardItem.className = 'selected-card-item';
                cardItem.innerHTML = `<span>${cardName}</span>`;
                selectedList.appendChild(cardItem);
            });
            
            // Отправляем данные
            setTimeout(() => {
                tg.sendData(JSON.stringify(selectedCards));
                setTimeout(() => {
                    tg.close();
                }, 500);
            }, 1000);
        }, 1500);
    }
});

// Инициализация фона
function initBackground() {
    const backgroundImg = new Image();
    backgroundImg.onload = function() {
        document.body.style.backgroundImage = `url('static/backgrounds/background.jpg')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    };
    backgroundImg.src = 'static/backgrounds/background.jpg';
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initCards();
    initBackground();
    updateContinueButton();
});

// Показываем кнопку "Назад"
tg.BackButton.show();