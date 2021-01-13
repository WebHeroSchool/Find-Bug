const lvls = document.querySelectorAll('.nav__link');
const startButton = document.querySelector('.button_start');


lvls.forEach(el => {
    el.addEventListener('click', () => {
        lvls.forEach(el => el.classList.remove('selected'));
        el.classList.add('selected');
    });
});

function addNumber() {
    const value = document.querySelector('.selected').innerHTML;
    switch (value) {
        case 'Простой':
            return 3;
            break;
        case 'Средний':
            return 6;
            break;
        case 'Сложный':
            return 9;
            break;
    }
};

function numbCards(card) {
    let div = document.createElement('div');
    div.className = card;
    return div;
}

startButton.addEventListener('click', () => {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.section').style.display = 'none';
    for (let i = 0; i < addNumber(); i++) {
        document.querySelector('.main').style.display = 'flex';
        document.querySelector('.game').appendChild(numbCards('card'));
    }
});



