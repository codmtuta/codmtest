const connectSlider = document.getElementById('buyInSlider');
const buyInValue = document.getElementById('buyInValue');
const go = document.querySelector('.joingame__go');
const openWindow = document.querySelector('.joingame__window-box');
const closeWindow = document.querySelector('.joingame__window-back');
const joingame = document.querySelector('.joingame__window-ok');

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
            'max': 1037
        },
        padding: [0, 37]
    });

    connectSlider.noUiSlider.on('update', function (values, handle) {
        buyInValue.innerText = Math.round(values[handle]);
    });
}
