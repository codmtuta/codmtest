const transactions = document.querySelectorAll('.wallet__transaction');

transactions.forEach(el => {
    el.addEventListener('click', () => {
        transactions.forEach(event => {
            if (event != el) {
                event.classList.remove('activeDetails');
            }
        });
        el.classList.add('activeDetails');
    });
});

const openConclusion = document.querySelector('.wallet__conclusion'),
    openRefill = document.querySelector('.wallet__refill'),
    btnConclusion = document.querySelector('.wallet__btn-conclusion'),
    btnRefill = document.querySelector('.wallet__btn-refill'),
    closeWindow = document.querySelectorAll('.wallet__new-cancel');

function openWindowWallet(el, btn, closeBtn) {
    el.style.display = 'none';
    btn.addEventListener('click', () => {
        el.style.display = 'block';
    });

    closeBtn.forEach(close => {
        close.addEventListener('click', () => {
            el.style.display = 'none';
        });
    });
};

openWindowWallet(openConclusion, btnConclusion, closeWindow);
openWindowWallet(openRefill, btnRefill, closeWindow);
