const lvls = document.querySelectorAll('.nav__link');
const startButton = document.querySelector('.button_start');
const navLink = document.querySelectorAll('nav');
navLink[0].firstElementChild.classList.add('selected');
let mainDesk = document.querySelector('.main');


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
};

function reNewGame(card) {
    card.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector('.header').style.display = 'block';
            document.querySelector('.section').style.display = 'flex';
            document.querySelector('.game').innerHTML = '';
            document.querySelector('.main').style.display = 'block';
        })
    })
}

startButton.addEventListener('click', () => {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.section').style.display = 'none';
    for (let i = 0; i < addNumber(); i++) {
        document.querySelector('.main').style.display = 'flex';
        document.querySelector('.game').appendChild(numbCards('card'));
        if (i > 6) {
            document.querySelector('.main').style.height = 100 + '%';
        }
    }

    let card = document.querySelectorAll('.card');
    card.forEach(el => {
        el.appendChild(numbCards('front'));
        el.appendChild(numbCards('back'));
        el.addEventListener('click', () => {
            let number = Math.round(Math.random());
            el.style.transform = 'rotateY(180deg)';
            el.querySelector('.back').transform = 'rotateY(180deg)';
            if (number === 0) {
                el.querySelector('.back').classList.add('back-lose');
            } else {
                el.querySelector('.back').classList.add('back-win');
            }
            reNewGame(card);
        })

    });
});