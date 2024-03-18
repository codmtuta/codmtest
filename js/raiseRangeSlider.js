const connectSlider = document.getElementById('raiseInSlider');
const buyInValue = document.getElementById('raiseInValue');
const buyInValue2 = document.getElementById('raiseInValue-2');
const tableBtnRange = document.querySelector('.table__buttons-range');
const tableRaiseClick = document.querySelector('.table__raise');

try {
    function important(el, i) {
        document.addEventListener('DOMContentLoaded', function () {
            const changeStyles = document.querySelector(el);
            changeStyles.classList.add(i);
        });
    }
} catch (e) { }
important('.noUi-base', 'table__button-base');
important('.noUi-handle', 'table__button-handle');
important('.noUi-target', 'table__button-target');
important('.noUi-connect', 'table__button-connect');
important('.noUi-horizontal .noUi-handle', 'table__button-horizontal');
important('.noUi-horizontal .noUi-handle-upper', 'table__button-upper');

if (connectSlider) {
    noUiSlider.create(connectSlider, {
        start: 200,
        connect: 'lower',
        range: {
            'min': 200,
            'max': 1000
        }
    });

    connectSlider.noUiSlider.on('update', function (values, handle) {
        buyInValue.innerText = Math.round(values[handle]);
    });

    connectSlider.noUiSlider.on('update', function (values, handle) {
        buyInValue2.innerText = Math.round(values[handle]);
    });
}

buyInValue2.style.display = 'none';
tableRaiseClick.addEventListener('click', function () {
    if (tableBtnRange.style.display !== 'block') {
        tableBtnRange.style.display = 'block';
        buyInValue2.style.display = 'block';
    } else {
        tableBtnRange.style.display = 'none';
        buyInValue2.style.display = 'none';
    }
});
