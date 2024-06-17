const connectSlider = document.getElementById('buyInSlider');
const buyInValue = document.getElementById('buyInValue');
const go = document.querySelector('.joingame__go');
const openWindow = document.querySelector('.modal');
const closeWindow = document.querySelector('.modal-cancel');
const joingame = document.querySelector('.modal-create');

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

if (connectSlider) {
    noUiSlider.create(connectSlider, {
        start: 500,
        connect: 'lower',
        range: {
            'min': 100,
            'max': 1000
        },
    });

    connectSlider.noUiSlider.on('update', function (values, handle) {
        buyInValue.innerText = Math.round(values[handle]);
    });
}
