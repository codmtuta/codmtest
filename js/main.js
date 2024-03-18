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

    try {
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

        const spinnerImage = new Image();
        spinnerImage.src = '../images/icons/spinner.svg';

        const buttons = document.querySelectorAll('.spiner__btn');

        buttons.forEach((button) => {
            button.addEventListener('click', function () {
                buttons.forEach((btn) => {
                    btn.disabled = true;
                });
                button.classList.add('loading');
                const innerDiv = button.querySelector('div');
                if (innerDiv) {
                    innerDiv.classList.add('spinner__container');
                }
                // window.location.href = 'tables.html'
            });
        });
    } catch (e) { }


    // Open / Close BURGER and no scroll
    // try {
    //     const menuBtn = document.querySelector('.navbar__nav');
    //     if (menuBtn) {
    //         const btn = document.querySelector('.menu__btn');
    //         const nav = document.querySelector('.menu__items');
    //         btn.addEventListener('click', () => {
    //             nav.classList.toggle('menu__open');
    //             btn.classList.toggle('active');
    //             if (nav.classList.contains('menu__open')) {
    //                 document.body.style.overflow = 'hidden';
    //             } else {
    //                 document.body.style.overflow = "";
    //             }
    //         });
    //     };
    // } catch (e) { }

});


