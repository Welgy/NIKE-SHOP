document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Плавное появление элементов при скролле ---
    
    // Находим все элементы на странице, у которых есть класс "reveal"
    const revealElements = document.querySelectorAll(".reveal");

    // Функция, которая проверяет, доскроллил ли пользователь до элемента
    const checkScroll = () => {
        // Получаем высоту окна браузера
        const windowHeight = window.innerHeight;
        
        // Проходимся по каждому элементу с классом "reveal"
        revealElements.forEach((element) => {
            // Узнаем, на каком расстоянии от верха экрана находится элемент
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 200) {
                element.classList.add("active");
            }
        });
    };

    // Запускаем проверку при скролле (каждый раз, когда двигаем колесико)
    window.addEventListener("scroll", checkScroll);
    
    // Запускаем проверку один раз сразу при загрузке (вдруг элемент уже виден)
    checkScroll();


        // --- 2. Эффект "Матового стекла" для навигации ---
    const navBar = document.querySelector(".global-nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navBar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navBar.style.backdropFilter = "blur(10px)";
            navBar.style.webkitBackdropFilter = "blur(10px)";
        } else {
            navBar.style.backgroundColor = "#000000";
            navBar.style.backdropFilter = "none";
            navBar.style.webkitBackdropFilter = "none";
        }
    });

    // --- 3. Исправление прыжка страницы при перезагрузке ---
    // Отключаем восстановление скролла браузером
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // --- 4. Слайдеры картинок (плавная смена) ---
    const initSlider = (className) => {
        const slides = document.querySelectorAll(className);
        if (slides.length === 0) return;
        
        let currentSlide = 0;

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000);
    };

    initSlider('.slide');
    
    initSlider('.slide2');

    initSlider('.slide3');

    // Принудительно скроллим в самый верх при загрузке
    window.scrollTo(0, 0);

});