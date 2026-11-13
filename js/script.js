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
            
            // Если элемент показался в зоне видимости (с отступом 100px снизу)...
            if (elementTop < windowHeight - 200) {
                // ...добавляем ему класс "active" (он запустит CSS-анимацию)
                element.classList.add("active");
            }
        });
    };

    // Запускаем проверку при скролле (каждый раз, когда двигаем колесико)
    window.addEventListener("scroll", checkScroll);
    
    // Запускаем проверку один раз сразу при загрузке (вдруг элемент уже виден)
    checkScroll();


    // --- 2. Эффект "Матового стекла" для навигации ---

    // Находим нашу черную панель навигации
    const navBar = document.querySelector(".global-nav");

    window.addEventListener("scroll", () => {
        // Если пользователь прокрутил страницу больше чем на 50 пикселей...
        if (window.scrollY > 50) {
            // Делаем шапку полупрозрачной и включаем размытие (через JS)
            navBar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navBar.style.backdropFilter = "blur(10px)";
            navBar.style.webkitBackdropFilter = "blur(10px)"; // Для Safari
        } else {
            // Если мы в самом верху — возвращаем сплошной черный цвет
            navBar.style.backgroundColor = "#000000";
            navBar.style.backdropFilter = "none";
            navBar.style.webkitBackdropFilter = "none";
        }
    });

});