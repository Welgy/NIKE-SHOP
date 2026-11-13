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

        // --- 4. Слайдер картинок (плавная смена) ---
    
    // Находим все картинки с классом slide
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0; // Индекс текущей картинки

    // Функция переключения
    const nextSlide = () => {
        // Убираем класс active у текущей картинки (она начинает растворяться)
        slides[currentSlide].classList.remove('active');
        
        // Вычисляем индекс следующей картинки. 
        // Если дошли до конца, начинаем сначала (с 0)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Добавляем класс active следующей картинке (она начинает проявляться)
        slides[currentSlide].classList.add('active');
    };

    // Запускаем функцию каждые 3 секунды (3000 миллисекунд)
    setInterval(nextSlide, 3000);

    // Принудительно скроллим в самый верх при загрузке
    window.scrollTo(0, 0);

});