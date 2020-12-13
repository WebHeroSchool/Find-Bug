const threeCards = document.getElementById('threeCards');
const sixCards = document.getElementById('sixCards');
const nineCards = document.getElementById('nineCards');
const startButton = document.getElementById('startBtn');
const menuDifficulty = document.getElementById('navMenu');
const gameMode = document.getElementById('gameMode');


threeCards.addEventListener('click', () => {
    threeCards.classList.add('selected');
    sixCards.classList.remove('selected');
    nineCards.classList.remove('selected');
});
sixCards.addEventListener('click', () => {
    sixCards.classList.add('selected');
    threeCards.classList.remove('selected');
    nineCards.classList.remove('selected');
});
nineCards.addEventListener('click', () => {
    nineCards.classList.add('selected');
    threeCards.classList.remove('selected');
    sixCards.classList.remove('selected');
});
