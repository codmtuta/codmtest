const elDiceOne = document.getElementById('dice1'),
    elDiceTwo = document.getElementById('dice2'),
    elComeOut = document.getElementById('roll'),
    userBody = document.querySelector('.bones__body'),
    result = document.querySelector('.bones__result'),
    bonesWin = document.querySelector('.bones__result-win'),
    bonesDraw = document.querySelector('.bones__result-draw'),
    bonesDefeat = document.querySelector('.bones__result-defeat'),
    bonesNewBox = document.querySelector('.newbones'),
    bonesNewGame = document.querySelector('.plus__new-game'),
    bonesNewCancel = document.querySelector('.modal-cancel');
const sortOpen = document.querySelector('.sortopen');
const sortBtn = document.querySelector('.sort__games');

sortBtn.addEventListener('click', function () {
    sortOpen.classList.toggle('visible');
});

bonesNewGame.addEventListener('click', () => {
    bonesNewBox.style.display = 'block';
});

bonesNewCancel.addEventListener('click', () => {
    bonesNewBox.style.display = 'none';
});

function displayNone(el) {
    el.style.display = 'none';
}
displayNone(bonesNewBox);
displayNone(bonesWin);
displayNone(bonesDraw);
displayNone(bonesDefeat);

elComeOut.addEventListener('click', () => {
    userBody.style.display = 'none';
    result.style.display = 'flex';

    elDiceOne.classList.add('spin');
    elDiceTwo.classList.add('spin');

    setTimeout(() => {
        elDiceOne.classList.remove('spin');
        elDiceTwo.classList.remove('spin');
        rollDice();
    }, 1000);
});

let diceOne = 1;
let diceTwo = 1;

function rollDice() {
    diceOne = Math.floor((Math.random() * 6) + 1);
    diceTwo = Math.floor((Math.random() * 6) + 1);

    console.log(diceOne + ' ' + diceTwo);

    for (let i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    for (let k = 1; k <= 6; k++) {
        elDiceTwo.classList.remove('show-' + k);
        if (diceTwo === k) {
            elDiceTwo.classList.add('show-' + k);
        };
    };

    if (diceOne > diceTwo) {
        bonesWin.style.display = 'block';
    } else if (diceOne < diceTwo) {
        bonesDefeat.style.display = 'block';
    } else {
        bonesDraw.style.display = 'block';
    };
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
