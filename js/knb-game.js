const knbChoice = document.querySelector('.knb__choice');
const knbResult = document.querySelector('.knb__result');
const knbStart = document.querySelector('.knb__items');
const knbBtn = document.querySelector('.knb__btn');
const choiceHands = document.querySelectorAll('.knb__choice-img');
const knbWin = document.querySelector('.knb__result-win');
const knbDraw = document.querySelector('.knb__result-draw');
const knbDefeat = document.querySelector('.knb__result-defeat');
const paperRival = document.querySelector('.knb__result-rival--paper');
const scissorsRival = document.querySelector('.knb__result-rival--scissors');
const stoneRival = document.querySelector('.knb__result-rival--stone');
const paperMy = document.querySelector('.knb__result-my--paper');
const scissorsMy = document.querySelector('.knb__result-my--scissors');
const stoneMy = document.querySelector('.knb__result-my--stone');
const newGameKnb = document.querySelector('.knb__new-box');
const newGameBtn = document.querySelector('.knb__new-game--btn');
const newGameClose = document.querySelector('.knb__new-cancel');

knbChoice.style.display = "none";
knbResult.style.display = "none";
knbWin.style.display = "none";
knbDraw.style.display = "none";
knbDefeat.style.display = "none";
paperRival.style.display = "none";
scissorsRival.style.display = "none";
stoneRival.style.display = "none";
paperMy.style.display = "none";
scissorsMy.style.display = "none";
stoneMy.style.display = "none";
newGameKnb.style.display = "none"

newGameBtn.addEventListener('click', function () {
    newGameKnb.style.display = "";
});

newGameClose.addEventListener('click', function () {
    newGameKnb.style.display = "none";
});

knbBtn.addEventListener('click', function () {
    knbStart.style.display = "none";
    knbChoice.style.display = "block";
});

choiceHands.forEach(function (button) {
    button.addEventListener('click', function () {
        knbChoice.style.display = "none";
        knbResult.style.display = "";
    });
});


// ------------------------------------------------------

let myChoice = "";
let rivalChoice = "";

function getRivalChoice() {
    const choices = ['paper', 'scissors', 'stone'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(myChoice, rivalChoice) {
    if (myChoice === rivalChoice) {
        return 'draw';
    } else if (
        (myChoice === 'paper' && rivalChoice === 'stone') ||
        (myChoice === 'scissors' && rivalChoice === 'paper') ||
        (myChoice === 'stone' && rivalChoice === 'scissors')
    ) {
        return 'win';
    } else {
        return 'defeat';
    }
}

choiceHands.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('knb__choice-paper')) {
            myChoice = 'paper';
        } else if (button.classList.contains('knb__choice-scissors')) {
            myChoice = 'scissors';
        } else if (button.classList.contains('knb__choice-stone')) {
            myChoice = 'stone';
        }
        rivalChoice = getRivalChoice();
        showResult();
    });
});

function showResult() {
    paperRival.style.display = "none";
    scissorsRival.style.display = "none";
    stoneRival.style.display = "none";
    paperMy.style.display = "none";
    scissorsMy.style.display = "none";
    stoneMy.style.display = "none";

    if (myChoice === 'paper') paperMy.style.display = "block";
    else if (myChoice === 'scissors') scissorsMy.style.display = "block";
    else stoneMy.style.display = "block";

    if (rivalChoice === 'paper') paperRival.style.display = "block";
    else if (rivalChoice === 'scissors') scissorsRival.style.display = "block";
    else stoneRival.style.display = "block";

    const result = determineWinner(myChoice, rivalChoice);
    if (result === 'win') {
        knbWin.style.display = "block";
    } else if (result === 'draw') {
        knbDraw.style.display = "block";
    } else {
        knbDefeat.style.display = "block";
    }
}
