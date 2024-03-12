const closeBtn = document.querySelector('.table__info-close'),
    closeBtnWindow = document.querySelector('.table__info-box'),
    openBtnWindow = document.querySelector('.table__info-share')

if (closeBtnWindow) {
    closeBtn.addEventListener('click', () => {
        closeBtnWindow.style.display = 'none';
    });
    openBtnWindow.addEventListener('click', () => {
        closeBtnWindow.style.display = 'block';
    });
};

