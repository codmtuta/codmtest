document.addEventListener('DOMContentLoaded', function () {



    window.addEventListener('load', function () {
        let preloader = document.querySelector('.preloader__scene');
        if (preloader) {
            preloader.style.display = 'none';
        }
    });

    const playersButtons = document.querySelectorAll('.players-btn');
    const limitButtons = document.querySelectorAll('.limit-btn');
    playersButtons.forEach(button => {
        button.addEventListener('click', function () {
            playersButtons.forEach(btn => btn.classList.remove('clicked'));
            this.classList.add('clicked');
        });
    });
    limitButtons.forEach(button => {
        button.addEventListener('click', function () {
            limitButtons.forEach(btn => btn.classList.remove('clicked'));
            this.classList.add('clicked');
        });
    });


    // Fomat Nambers
    const formNumbers = document.querySelectorAll('.format__number');
    function formatNumber(number) {
        const suffixes = ["", "k", "M", "B", "T"];
        let suffixIndex = 0;
        if (number >= 10000) {
            while (number >= 1000) {
                number /= 1000;
                suffixIndex++;
            }
        }
        return { number, suffix: suffixes[suffixIndex] };
    }

    formNumbers.forEach(element => {
        const number = parseInt(element.textContent);
        const { number: formattedNumber, suffix } = formatNumber(number);
        element.textContent = formattedNumber + suffix;
    });

    // Спинер
    const buttons = document.querySelectorAll('.spiner__btn');
    const spinners = document.querySelectorAll('.spinner__img');
    const spinerCont = document.querySelectorAll('.spinner__container');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            button.disabled = true;
            spinerCont.classList.add('active');
            spinners[index].style.display = 'inline-block';

            window.addEventListener('beforeunload', function () {
                button.disabled = true;
                spinners[index].style.display = 'inline-block';
            });
        });
    });







    // Open/Close BURGER and no scroll
    // const menuBtn = document.querySelector('.navbar__nav');
    // if (menuBtn) {
    //     const btn = document.querySelector('.menu__btn');
    //     const nav = document.querySelector('.menu__items');
    //     btn.addEventListener('click', () => {
    //         nav.classList.toggle('menu__open');
    //         btn.classList.toggle('active');
    //         if (nav.classList.contains('menu__open')) {
    //             document.body.style.overflow = 'hidden';
    //         } else {
    //             document.body.style.overflow = "";
    //         }
    //     });
    // };

});

