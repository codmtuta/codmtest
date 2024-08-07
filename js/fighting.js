document.addEventListener('DOMContentLoaded', () => {
    const dropdownOpen = document.querySelector('.dropdownopen');
    const dropdownBtn = document.querySelector('.dropdown__games');
    const fightingChoice = document.querySelector('.fighting__choice');
    const fightingBody = document.querySelector('.fighting__body');
    const newGameClose = document.querySelectorAll('.modal-cancel');
    const newGameBtn = document.querySelector('.plus__new-game--btn');
    const newGameFight = document.querySelector('.newfighting');
    const windowPassword = document.querySelector('.window-password');
    const windowOk = document.querySelector('.window-ok');
    const playGame = document.querySelector('.play-game');

    function showContent(trigger, content) {
        trigger.addEventListener('click', function () {
            content.style.display = "block";
        });
    }
    showContent(newGameBtn, newGameFight);
    showContent(playGame, windowPassword);

    newGameClose.forEach(item => {
        item.addEventListener('click', function () {
            newGameFight.style.display = "none";
            windowPassword.style.display = "none";
        });
    });

    function hiddenContent(trigger, content) {
        trigger.addEventListener('click', function () {
            content.style.display = "none";
            fightingChoice.style.display = "block";
            fightingBody.style.display = "none";
        });
    }
    hiddenContent(windowOk, windowPassword);

    dropdownBtn.addEventListener('click', function () {
        dropdownOpen.classList.toggle('visible');
    });
});