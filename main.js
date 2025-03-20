$(document).ready(function () {
    function initSlick() {
        if ($(window).width() < 769) {
            const mainOffers = document.querySelector('.main__offers');
            const prices = mainOffers.querySelectorAll('.main__price');
            prices.forEach((price) => {
                price.style.marginBottom = '0';
                price.style.marginRight = '40px';
            });
            $('.main__offers').slick({
                dots: true, // Включаем точки (dots)
                arrows: false, // Отключаем стрелки
                infinite: true, // Бесконечная прокрутка
                speed: 300, // Скорость анимации
                slidesToShow: 1, // Показывать по одному слайду
                slidesToScroll: 1, // Листать по одному слайду
                adaptiveHeight: true, // Автоматическая высота слайда
                centerMode: false, // Отключаем центрирование слайдов
                variableWidth: false, // Отключаем переменную ширину слайдов
            });
        } else {
            // Уничтожаем слайдер, если он был инициализирован
            if ($('.main__offers').hasClass('slick-initialized')) {
                $('.main__offers').slick('unslick');
            }
        }
    }

    // Инициализация при загрузке страницы
    initSlick();

    // Инициализация при изменении размера окна
    $(window).on('resize', function () {
        initSlick();
    });
});