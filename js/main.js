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

    // Open/Close BURGER and no scroll
    const btn = document.querySelector('.menu__btn');
    const nav = document.querySelector('.menu__items');
    btn.addEventListener('click', () => {
        nav.classList.toggle('menu__open');
        btn.classList.toggle('active');
        if (nav.classList.contains('menu__open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "";
        }
    });

});

