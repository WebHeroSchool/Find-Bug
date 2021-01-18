const lvls = document.querySelectorAll('.nav__link');
const startButton = document.querySelector('.button_start');
const navLink = document.querySelectorAll('nav');
navLink[0].firstElementChild.classList.add('selected');
let mainDesk = document.querySelector('.main');
let card = document.getElementsByClassName('card');




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



card.addEventListener("click", () => card.style.transform = 'rotate(180deg)');


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
});

// for (let i = 0; i < value.length; i++) {
//     value[i].addEventListener('click', addNumber(), false);
// }