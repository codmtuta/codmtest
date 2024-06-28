const knbChoice = document.querySelector('.knb__choice');
const knbResult = document.querySelector('.knb__result');
const knbStart = document.querySelector('.knb__body');
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
const newGameBtn = document.querySelector('.plus__new-game--btn');
const newGameClose = document.querySelectorAll('.modal-cancel');
const userResult = document.querySelector(".user_result");
const cpuResult = document.querySelector(".cpu_result");
const dropdownOpen = document.querySelector('.dropdownopen');
const dropdownBtn = document.querySelector('.dropdown__games');
const knbBody = document.querySelector('.knb__body');
const newGameKnb = document.querySelector('.newknb');
const windowPassword = document.querySelector('.window-password');
const windowOk = document.querySelector('.window-ok');
const playGame = document.querySelector('.play-game');


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
newGameKnb.style.display = "none";

function showContent(trigger, content) {
    trigger.addEventListener('click', function () {
        content.style.display = "block";
    });
}
showContent(newGameBtn, newGameKnb);
showContent(playGame, windowPassword);

function hiddenContent(trigger, content) {
    trigger.addEventListener('click', function () {
        content.style.display = "none";
        knbChoice.style.display = "block";
        knbBody.style.display = "none";
    });
}
hiddenContent(windowOk, windowPassword);

newGameClose.forEach(item => {
    item.addEventListener('click', function () {
        newGameKnb.style.display = "none";
        windowPassword.style.display = "none";
    });
});

dropdownBtn.addEventListener('click', function () {
    dropdownOpen.classList.toggle('visible');
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
        resultTime(userResult);
        resultTime(cpuResult);
    });
});

function showResult() {
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

function resultTime(el) {
    el.style.display = 'block';
    let time = setTimeout(() => {
        el.style.display = 'none';
        showResult();
    }, 1500);
};

const windowHeight = document.querySelectorAll('.window-height');
const inputFields = document.querySelectorAll('.input-field');
let initialWindowHeight = window.innerHeight;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    inputFields.forEach(inputField => {
        inputField.addEventListener('focus', () => {
            windowHeight.forEach(item => {
                if (window.innerHeight < 800) {
                    item.style.top = '40%';
                }
            });
        });

        inputField.addEventListener('blur', () => {
            setTimeout(() => {
                if (window.innerHeight === initialWindowHeight) {
                    windowHeight.forEach(item => {
                        item.style.top = '50%';
                    });
                }
            }, 100);
        });
    });
}