document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Плавное появление элементов при скролле ---
    
    // Функция, которая заново собирает все элементы с классом "reveal"
    const updateRevealElements = () => {
        return document.querySelectorAll(".reveal");
    };
    
    let revealElements = updateRevealElements();

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

    // --- 5. Генерация каталога товаров (shop.html) ---
    const productGrid = document.getElementById('product-grid');

    if (productGrid) {
 const products = [
// --- Jordan 1 ---
            { img: 'front-img.webp', title: 'Air Jordan 1 Retro High', category: "Men's Shoes", price: '$180' },
            { img: 'front-img2.jpg', title: 'Air Jordan 1 Retro High OG', category: "Men's Shoes", price: '$180' },
            { img: 'front-img3.jpg', title: 'Air Jordan 1 Chicago', category: "Men's Shoes", price: '$200' },
            { img: 'front-img4.jpg', title: 'Air Jordan 1 Burgundy', category: "Men's Shoes", price: '$180' },
            { img: 'front-img5.jpg', title: 'Air Jordan 1 University Blue', category: "Men's Shoes", price: '$190' },
            
            // --- Air Max 90 ---
            { img: 'front2-img.webp', title: 'Nike Air Max 90 White', category: "Men's Shoes", price: '$130' },
            { img: 'front2-img2.webp', title: 'Nike Air Max 90 Black', category: "Men's Shoes", price: '$130' },
            { img: 'front2-img3.webp', title: 'Nike Air Max 90 Grey', category: "Men's Shoes", price: '$130' },
            { img: 'front2-img4.webp', title: 'Nike Air Max 90 Silver', category: "Men's Shoes", price: '$140' },
            { img: 'front2-img5.webp', title: 'Nike Air Max 90 Premium', category: "Men's Shoes", price: '$150' },

            // --- Air VaporMax ---
            { img: 'front3-img.webp', title: 'Nike Air VaporMax Plus Black', category: "Men's Shoes", price: '$210' },
            { img: 'front3-img2.webp', title: 'Nike Air VaporMax Plus Pink', category: "Men's Shoes", price: '$210' },
            { img: 'front3-img3.webp', title: 'Nike Air VaporMax Plus Tan', category: "Men's Shoes", price: '$210' },
            { img: 'front3-img4.webp', title: 'Nike Air VaporMax Plus White', category: "Men's Shoes", price: '$210' },
            { img: 'front3-img5.webp', title: 'Nike Air VaporMax Plus Triple Black', category: "Men's Shoes", price: '$220' },

            // --- Air Force 1 ---
            { img: 'Nike-Air-Force-1.webp', title: "Nike Air Force 1 '07", category: "Men's Shoes", price: '$115' },
            { img: 'Nike-Air-Force-1-2.webp', title: "Nike Air Force 1 '07 White", category: "Men's Shoes", price: '$115' },
            { img: 'Nike-Air-Force-1-3.webp', title: "Nike Air Force 1 '07 Black", category: "Men's Shoes", price: '$115' },
            { img: 'Nike-Air-Force-1-4.webp', title: "Nike Air Force 1 '07 LV8", category: "Men's Shoes", price: '$120' },

            // --- P-6000 ---
            { img: 'nike-p-6000.webp', title: 'Nike P-6000', category: "Men's Shoes", price: '$110' },
            { img: 'nike-p-6000-2.webp', title: 'Nike P-6000 Premium', category: "Men's Shoes", price: '$110' },
            { img: 'nike-p-6000-3.webp', title: 'Nike P-6000 SE', category: "Men's Shoes", price: '$115' },
            { img: 'nike-p-6000-4.webp', title: 'Nike P-6000 White', category: "Men's Shoes", price: '$110' },

            // --- Другие кроссовки ---
            { img: 'nike-air-max-90.webp', title: 'Nike Air Max 90 Essential', category: "Men's Shoes", price: '$130' },
            { img: 'nike-air-max-90-2.webp', title: 'Nike Air Max 90 SE', category: "Men's Shoes", price: '$140' },
            { img: 'nike-air-max-90-3.webp', title: 'Nike Air Max 90 Premium', category: "Men's Shoes", price: '$150' },
            { img: 'nike-air-max-90-4.webp', title: 'Nike Air Max 90 Leather', category: "Men's Shoes", price: '$130' },

            { img: 'nike-air-more-uptempo-96.webp', title: "Nike Air More Uptempo '96", category: "Men's Shoes", price: '$160' },
            { img: 'nike-air-more-uptempo-96-2.webp', title: "Nike Air More Uptempo '96 White", category: "Men's Shoes", price: '$160' },
            { img: 'nike-air-more-uptempo-96-3.webp', title: "Nike Air More Uptempo '96 Black", category: "Men's Shoes", price: '$160' },
            { img: 'nike-air-more-uptempo-96-4.webp', title: "Nike Air More Uptempo '96 SE", category: "Men's Shoes", price: '$170' },

            { img: 'nike-air-zoom-pegasus.webp', title: 'Nike Air Zoom Pegasus 40', category: "Men's Running", price: '$140' },
            { img: 'nike-vomero-18.webp', title: 'Nike Vomero 18', category: "Men's Running", price: '$160' },
            { img: 'nike-vomero-18-2.webp', title: 'Nike Vomero 18 White', category: "Men's Running", price: '$160' },
            { img: 'nike-vomero-18-3.webp', title: 'Nike Vomero 18 Green', category: "Men's Running", price: '$160' },

            // --- Ботинки и тапочки ---
            { img: 'jordan-city-boots.webp', title: 'Jordan City Boot', category: "Men's Boots", price: '$200' },
            { img: 'jordan-city-boots-2.webp', title: 'Jordan Winterized Boot', category: "Men's Boots", price: '$220' },
            
            { img: 'tapochki-jordan.webp', title: 'Jordan Franchise Slides', category: "Men's Slides", price: '$45' },
            { img: 'tapochki-jordan-franchise-shower-slides.webp', title: 'Jordan Shower Slides', category: "Men's Slides", price: '$40' },
            { img: 'tapochki-jordan-franchise-slide.webp', title: 'Jordan Franchise Slide Black', category: "Men's Slides", price: '$45' },
            { img: 'tapochki-nike-offcourt-slide.webp', title: 'Nike Offcourt Slide', category: "Men's Slides", price: '$35' },
            { img: 'tapochki-nike-reactx-rejuven8.webp', title: 'Nike ReactX Rejuven8', category: "Men's Recovery", price: '$80' }
        ];

        const createCardHTML = (product) => {
            return `
                <a href="#" class="product-card">
                    <div class="product-image">
                        <img src="assets/${product.img}" alt="${product.title}">
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">${product.price}</p>
                </a>
            `;
        };
        
        // Вставляем карточки и сразу задаем им задержку
        products.forEach((product, index) => {
            const cardHTML = createCardHTML(product);
            productGrid.insertAdjacentHTML('beforeend', cardHTML);
            
            const newCard = productGrid.lastElementChild;
            
            // ФИКС: Вычисляем задержку.
            // Если индекс 0 -> 0s, если 1 -> 0.15s, если 2 -> 0.3s...
            // Ограничиваем до 3 карточек в ряду (чтобы не ждать слишком долго на 2-м ряду)
            const delay = (index % 3) * 0.2; 
            newCard.style.transitionDelay = `${delay}s`;
        });

        // Находим все созданные карточки
        const cards = document.querySelectorAll('.product-card');

        // Запускаем плавное появление
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            // Уменьшаем threshold, чтобы карточки начинали появляться чуть раньше
            threshold: 0.05 
        });

        cards.forEach((card) => {
            observer.observe(card);
        });
    }
});