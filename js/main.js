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
        spinnerImage.src = './images/icons/spinner.svg';

        const buttons = document.querySelectorAll('.spiner__btn');

        buttons.forEach((button) => {
            button.addEventListener('click', function () {

                buttons.forEach((btn) => {
                    btn.disabled = true;
                });
                button.classList.add('loading');
                const innerDiv = button.querySelector('div');
                if (innerDiv) {
                    innerDiv.classList.add('spiner__container');
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

    function checkboxes(checkboxSelector, hiddenInputSelector) {
        const checkboxes = document.querySelectorAll(checkboxSelector),
            hiddenInput = document.querySelector(hiddenInputSelector);

        hiddenInput.style.display = 'none';

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {

                if (checkbox.checked) {
                    hiddenInput.style.display = 'block';
                } else {
                    hiddenInput.style.display = 'none';
                }
            });
        });
    }

    checkboxes('.toggleCheckbox', '.hidden-input');

    function hidden(checkboxSelector, textOneSelector, textTitleSumSelector, headersImgSelector, InputSelector, textTwoSelector, textRandomSelector) {
        const checkboxes = document.querySelectorAll(checkboxSelector),
            textTitle1 = textOneSelector ? document.querySelector(textOneSelector) : null,
            textTitleSum = document.querySelector(textTitleSumSelector),
            headersImg = document.querySelector(headersImgSelector),
            inputSum = document.querySelector(InputSelector),
            textTitle2 = document.querySelector(textTwoSelector),
            textTitle3 = document.querySelector(textRandomSelector);

        if (textTitleSum) textTitleSum.style.display = 'none';
        if (inputSum) inputSum.style.display = 'none';
        if (textTitle2) textTitle2.style.display = 'none';

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    if (textTitleSum) textTitleSum.style.display = 'block';
                    if (inputSum) inputSum.style.display = 'block';
                    if (textTitle3) textTitle3.style.display = 'block';
                    if (textTitle1) textTitle1.style.display = 'none';
                    if (textTitle2) textTitle2.style.display = 'none';
                    if (headersImg) headersImg.style.display = 'none';
                } else {
                    if (textTitleSum) textTitleSum.style.display = 'none';
                    if (inputSum) inputSum.style.display = 'none';
                    if (textTitle3) textTitle3.style.display = 'none';
                    if (textTitle1) textTitle1.style.display = 'block';
                    if (textTitle2) textTitle2.style.display = 'block';
                    if (headersImg) headersImg.style.display = 'flex';

                }
            });
        });
    }

    hidden('.toggleInput', '.textTitleOne', '.textTitleSum', '.knb__new-imgs', '.inputSum', '.textTitleTwo', '.textTitleThree');

    hidden('.toggleInput', null, '.textTitleSum', '.bones__new-img', '.inputSum', '.textTitleTwo', '.textTitleThree');

    hidden('.toggleInput', '.textTitleOne', '.textTitleSum', '.fighting__choice-padding', '.inputSum', '.textTitleTwo', '.textTitleThree');

});


