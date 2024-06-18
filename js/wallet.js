const transactions = document.querySelectorAll('.wallet__transaction');

transactions.forEach(el => {
    el.addEventListener('click', () => {

        if (event.target.classList.contains('wallet__transaction-status-btn')) {
            event.stopPropagation();
            return;
        }

        transactions.forEach(event => {
            if (event != el) {
                event.classList.remove('activeDetails');
            }
        });
        el.classList.toggle('activeDetails');
    });
});

const openConclusion = document.querySelector('.wallet__conclusion'),
    openRefill = document.querySelector('.wallet__refill'),
    btnConclusion = document.querySelector('.wallet__btn-conclusion'),
    btnRefill = document.querySelector('.wallet__btn-refill'),
    closeWindow = document.querySelectorAll('.modal-cancel');

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

// Эмулируем открытие окна через 3 секунды
const notificationClose = document.querySelectorAll('.wallet__notification-close'),
    notificationConclusionWindows = document.querySelector('.wallet__notification-conclusion'),
    notificationRefillWindows = document.querySelector('.wallet__notification-refill');

function emulationOpen(open, close) {
    setTimeout(() => {
        open.style.display = 'block';
        document.querySelector('.checkmark').classList.add('animate');
    }, 3000);

    close.forEach(item => {
        item.addEventListener('click', () => {
            open.style.display = 'none';
        });
    });
};
emulationOpen(notificationConclusionWindows, notificationClose);
// emulationOpen(notificationRefillWindows, notificationClose);


