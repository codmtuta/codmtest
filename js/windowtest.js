const closeBtn = document.querySelector('.table__info-close'),
    closeBtnWindow = document.querySelector('.table__info-box'),
    openBtnWindow = document.querySelector('.table__info-share'),
    exitBtn = document.querySelector('.tables__exit'),
    windowExit = document.querySelector('.table__exit-box'),
    cancelWindow = document.querySelector('.table__exit-cancel'),
    tableExitOk = document.querySelector('.table__exit-ok');

if (closeBtnWindow) {
    closeBtn.addEventListener('click', () => {
        closeBtnWindow.style.display = 'none';
    });
    openBtnWindow.addEventListener('click', () => {
        closeBtnWindow.style.display = 'block';
    });
};

exitBtn.addEventListener('click', () => {
    windowExit.style.display = 'block';
});

cancelWindow.addEventListener('click', () => {
    windowExit.style.display = 'none';
});

tableExitOk.addEventListener('click', function () {
    window.location.href = 'poker.html';
});