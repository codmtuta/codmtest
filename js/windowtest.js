const go = document.querySelector('.joingame__go'),
    openWindow = document.querySelector('.joingame__window-box'),
    closeWindow = document.querySelector('.joingame__window-back'),
    joingame = document.querySelector('.joingame__window-ok'),
    closeBtn = document.querySelector('.table__info-close'),
    closeBtnWindow = document.querySelector('.table__info-box'),
    openBtnWindow = document.querySelector('.table__info-share')

if (openWindow) {
    go.addEventListener('click', () => {
        openWindow.style.display = 'block';
    });

    joingame.addEventListener('click', () => {
        window.location.href = 'tables.html'
    });

    closeWindow.addEventListener('click', () => {
        openWindow.style.display = 'none';
    });
};

if (closeBtnWindow) {
    closeBtn.addEventListener('click', () => {
        closeBtnWindow.style.display = 'none';
    });
    openBtnWindow.addEventListener('click', () => {
        closeBtnWindow.style.display = 'block';
    });
};
