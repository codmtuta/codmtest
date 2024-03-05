document.addEventListener('DOMContentLoaded', function () {

    const sliderWrapper = document.getElementById("sliderWrapper");
    const sliderDotsContainer = document.getElementById("sliderDots");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Создаем точки для слайдов
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        sliderDotsContainer.appendChild(dot);

        // Добавляем обработчик клика для точек
        dot.addEventListener("click", function () {
            goToSlide(i);
        });
    }

    // Первоначальная активация первой точки
    activateDot(currentSlide);

    // Функция для показа слайда по индексу
    function goToSlide(index) {
        currentSlide = index;
        const transformValue = -index * 100 + "%";
        sliderWrapper.style.transform = "translateX(" + transformValue + ")";
        activateDot(index);
    }

    // Функция для активации точки
    function activateDot(index) {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    // Автоматическое переключение слайдов
    // setInterval(function () {
    //     currentSlide = (currentSlide + 1) % totalSlides;
    //     goToSlide(currentSlide);
    // }, 4000);

    // Добавляем обработчики свайпа
    let startX;

    sliderWrapper.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
    });

    sliderWrapper.addEventListener("touchend", function (e) {
        const deltaX = e.changedTouches[0].clientX - startX;

        if (deltaX > 50) {
            // Свайп влево
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        } else if (deltaX < -50) {
            // Свайп вправо
            currentSlide = (currentSlide + 1) % totalSlides;
        }

        goToSlide(currentSlide);
    });

});