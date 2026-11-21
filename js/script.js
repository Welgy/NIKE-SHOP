document.addEventListener("DOMContentLoaded", () => {

    // 1. Плавное появление элементов при скролле
    
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

    // Запускаем проверку при скролле
    window.addEventListener("scroll", checkScroll);

    checkScroll();

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

    // 3. Исправление прыжка страницы при перезагрузке
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // 4. Слайдеры картинок 
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

    window.scrollTo(0, 0);

    const productGrid = document.getElementById('product-grid');
    const pageTitle = document.getElementById('shop-page-title');

    if (productGrid) {
         // 1. Полный массив товаров
  const products = [

    { img: 'front2-img.webp', title: 'Nike Air Max Moto 2K Grey', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$130' },
    { img: 'front2-img3.webp', title: 'Nike Air Max Moto 2K', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$130' },
    { img: 'front2-img4.webp', title: 'Nike Air Max Moto 2K Black ', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$140' },
    { img: 'front2-img5.webp', title: 'Nike Air Max Moto 2K Brown', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$150' },
    { img: 'front3-img2.webp', title: 'Nike Air VaporMax Plus Pink', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$210' },
    { img: 'front3-img3.webp', title: 'Nike Air VaporMax Plus Tan', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$210' },
    { img: 'front3-img4.webp', title: 'Nike Air VaporMax Plus White', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$210' },
    { img: 'krossovki-nike-air-max-moto-2k.webp', title: 'Nike Air Max Moto 2K Green', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$130' },
    { img: 'krossovki-nike-air-max-moto-2k-2.webp', title: 'Nike Air Max Moto 2K Black', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$130' },
    { img: 'krossovki-nike-air-max-moto-2k-3.webp', title: 'Nike Air Max Moto 2K Silver', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$130' },
    { img: 'krossovki-nike-air-max-moto-2k-4.webp', title: 'Nike Air Max Moto 2K White', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$130' },
    { img: 'krossovki-nike-air-max-muse.webp', title: 'Nike Air Max Muse White', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$140' },
    { img: 'krossovki-nike-air-max-muse-2.webp', title: 'Nike Air Max Muse Black', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$140' },
    { img: 'krossovki-nike-air-max-muse-3.webp', title: 'Nike Air Max Muse Silver', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$140' },
    { img: 'krossovki-nike-air-max-dn8.webp', title: 'Nike Air Max DN8 Brown', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$180' },
    { img: 'krossovki-nike-air-max-dn8-2.webp', title: 'Nike Air Max DN8 Print', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$180' },
    { img: 'krossovki-nike-air-max-dn8-3.webp', title: 'Nike Air Max DN8 White', categories: ["sneakers", "airmax"], gender: "women", categoryText: "Women's Shoes", price: '$180' },
    { img: 'nike-air-max-90-2.webp', title: 'Nike Air Max 90 SE', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$140' },

    { img: 'front2-img2.webp', title: 'Nike Air Max Moto 2K Red', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$130' },
    { img: 'front3-img.webp', title: 'Nike Air VaporMax Plus Black', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$210' },
    { img: 'front3-img5.webp', title: 'Nike Air VaporMax Plus Triple Black', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$220' },
    { img: 'nike-air-max-90.webp', title: 'Nike Air Max 90 Essential', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$130' },
    { img: 'nike-air-max-90-3.webp', title: 'Nike Air Max 90 Premium', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$150' },
    { img: 'nike-air-max-90-4.webp', title: 'Nike Air Max 90 Leather', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$130' },
    { img: 'krossovki-nike-air-max-dn8-4.webp', title: 'Nike Air Max DN8 Black', categories: ["sneakers", "airmax"], gender: "men", categoryText: "Men's Shoes", price: '$180' },

    { img: 'front-img4.jpg', title: 'Air Jordan 1 Burgundy', categories: ["sneakers", "jordan"], gender: "men", categoryText: "Men's Shoes", price: '$180' },
    { img: 'krossovki-air-jordan-1-mid-se.webp', title: 'Air Jordan 1 Mid SE', categories: ["sneakers", "jordan"], gender: "women", categoryText: "Women's Shoes", price: '$140' },
    { img: 'krossovki-air-jordan-1-mid-se-2.webp', title: 'Air Jordan 1 Mid SE White', categories: ["sneakers", "jordan"], gender: "women", categoryText: "Women's Shoes", price: '$140' },
    { img: 'krossovki-air-jordan-1-mid-se-3.webp', title: 'Air Jordan 1 Mid SE Grey', categories: ["sneakers", "jordan"], gender: "women", categoryText: "Women's Shoes", price: '$140' },
    { img: 'krossovki-nike-dunk-low-4.webp', title: 'Nike Dunk Low Brown', categories: ["sneakers"], gender: "women", categoryText: "Women's Shoes", price: '$110' },

    { img: 'front-img.webp', title: 'Air Jordan 1 Retro High', categories: ["sneakers", "jordan"], gender: "men", categoryText: "Men's Shoes", price: '$180' },
    { img: 'front-img2.jpg', title: 'Air Jordan 1 Retro High OG', categories: ["sneakers", "jordan"], gender: "men", categoryText: "Men's Shoes", price: '$180' },
    { img: 'front-img3.jpg', title: 'Air Jordan 1 Chicago', categories: ["sneakers", "jordan"], gender: "men", categoryText: "Men's Shoes", price: '$200' },
    { img: 'front-img5.jpg', title: 'Air Jordan 1 University Blue', categories: ["sneakers", "jordan"], gender: "men", categoryText: "Men's Shoes", price: '$190' },
    { img: 'krossovki-nike-dunk-low.webp', title: 'Nike Dunk Low White', categories: ["sneakers"], gender: "women", categoryText: "Women's Shoes", price: '$110' },
    { img: 'krossovki-nike-dunk-low-2.webp', title: 'Nike Dunk Low Green', categories: ["sneakers"], gender: "women", categoryText: "Women's Shoes", price: '$110' },
    { img: 'krossovki-nike-dunk-low-3.webp', title: 'Nike Dunk Low Grey', categories: ["sneakers"], gender: "women", categoryText: "Women's Shoes", price: '$110' },

    { img: 'Nike-Air-Force-1-2.webp', title: "Nike Air Force 1 '07 White", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$115' },
    { img: 'krossovki-nike-wmns-air-force-1-07.webp', title: "Nike Wmns Air Force 1 '07", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$115' },
    { img: 'nike-p-6000-2.webp', title: 'Nike P-6000 Premium', categories: ["sneakers"], gender: "women", categoryText: "Women's Shoes", price: '$110' },
    { img: 'krossovki-nike-p-6000-4.webp', title: 'Nike P-6000 Beige', categories: ["sneakers"], gender: "women", categoryText: "Women's Shoes", price: '$110' },
    { img: 'nike-vomero-18-2.webp', title: 'Nike Vomero 18 Green', categories: ["sneakers"], gender: "women", categoryText: "Women's Running", price: '$160' },
    { img: 'krossovki-nike-zoom-vomero-5.webp', title: 'Nike Air Zoom Vomero 5 Beige', categories: ["sneakers"], gender: "women", categoryText: "Women's Running", price: '$160' },
    { img: 'krossovki-nike-zoom-skylon.webp', title: 'Nike Zoom Skylon', categories: ["sneakers"], gender: "women", categoryText: "Women's Shoes", price: '$140' },

    { img: 'Nike-Air-Force-1.webp', title: "Nike Air Force 1 '07", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$115' },
    { img: 'Nike-Air-Force-1-3.webp', title: "Nike Air Force 1 '07 Black", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$115' },
    { img: 'Nike-Air-Force-1-4.webp', title: "Nike Air Force 1 '07 LV8", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$120' },
    { img: 'nike-p-6000.webp', title: 'Nike P-6000', categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$110' },
    { img: 'nike-p-6000-3.webp', title: 'Nike P-6000 SE', categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$115' },
    { img: 'krossovki-nike-p-6000.webp', title: 'Nike P-6000', categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$110' },
    { img: 'krossovki-nike-p-6000-2.webp', title: 'Nike P-6000 Premium', categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$110' },
    { img: 'krossovki-nike-p-6000-3.webp', title: 'Nike P-6000 SE', categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$115' },
    { img: 'nike-air-more-uptempo-96.webp', title: "Nike Air More Uptempo '96 White", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$160' },
    { img: 'nike-air-more-uptempo-96-2.webp', title: "Nike Air More Uptempo '96 Black", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$160' },
    { img: 'nike-air-more-uptempo-96-3.webp', title: "Nike Air More Uptempo '96 SE", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$160' },
    { img: 'nike-air-more-uptempo-96-4.webp', title: "Nike Air More Uptempo '96", categories: ["sneakers"], gender: "men", categoryText: "Men's Shoes", price: '$170' },
    { img: 'nike-air-zoom-pegasus.webp', title: 'Nike Air Zoom Pegasus 40', categories: ["sneakers"], gender: "men", categoryText: "Men's Running", price: '$140' },
    { img: 'nike-air-zoom-pegasus-2.webp', title: 'Nike Air Zoom Pegasus 40 Premium', categories: ["sneakers"], gender: "men", categoryText: "Men's Running", price: '$150' },
    { img: 'nike-vomero-18.webp', title: 'Nike Vomero 18 Black', categories: ["sneakers"], gender: "men", categoryText: "Men's Running", price: '$160' },
    { img: 'nike-vomero-18-3.webp', title: 'Nike Vomero 18 White', categories: ["sneakers"], gender: "men", categoryText: "Men's Running", price: '$160' },
    { img: 'krossovki-nike-zoom-vomero-5-2.webp', title: 'Nike Air Zoom Vomero 5 ', categories: ["sneakers"], gender: "men", categoryText: "Men's Running", price: '$160' },

    { img: 'jordan-city-boots.webp', title: 'Jordan City Boot', categories: ["boots", "jordan"], gender: "men", categoryText: "Men's Boots", price: '$200' },
    { img: 'jordan-city-boots-2.webp', title: 'Jordan Winterized Boot', categories: ["boots", "jordan"], gender: "men", categoryText: "Men's Boots", price: '$220' },

                // --- Дополнительные тапочки (Женские) ---
    { img: 'tapochki-jordan-modero-1.webp', title: 'Jordan Modero 1', categories: ["slides", "jordan"], gender: "women", categoryText: "Women's Slides", price: '$45' },
    { img: 'tapochki-jordan-nola.webp', title: 'Jordan Nola', categories: ["slides", "jordan"], gender: "women", categoryText: "Women's Slides", price: '$40' },
    { img: 'tapochki-jordan-nola-cz.webp', title: 'Jordan Nola Blue', categories: ["slides", "jordan"], gender: "women", categoryText: "Women's Slides", price: '$40' },
    { img: 'tapochki-nike-offcourt-slide.webp', title: 'Nike Offcourt Slide', categories: ["slides"], gender: "women", categoryText: "Women's Slides", price: '$35' },
    { img: 'tapochki-nike-reactx-rejuven8.webp', title: 'Nike ReactX Rejuven8', categories: ["slides"], gender: "women", categoryText: "Women's Slides", price: '$80' },
    { img: 'tapochki-nike-reactx-rejuven8-slide.webp', title: 'Nike ReactX Rejuven8 Slide', categories: ["slides"], gender: "women", categoryText: "Women's Slides", price: '$75' },
    { img: 'tapochki-nike-victori-one-slide-cn.webp', title: 'Nike Victori One Slide', categories: ["slides"], gender: "women", categoryText: "Women's Slides", price: '$30' },

    { img: 'tapochki-jordan.webp', title: 'Jordan Franchise Slides', categories: ["slides", "jordan"], gender: "men", categoryText: "Men's Slides", price: '$45' },
    { img: 'tapochki-jordan-franchise-shower-slides.webp', title: 'Jordan Shower Slides', categories: ["slides", "jordan"], gender: "men", categoryText: "Men's Slides", price: '$40' },
    { img: 'tapochki-jordan-franchise-slide.webp', title: 'Jordan Franchise Slide Black', categories: ["slides", "jordan"], gender: "men", categoryText: "Men's Slides", price: '$45' },
    { img: 'tapochki-nike-offcourt-slide.webp', title: 'Nike Offcourt Slide', categories: ["slides"], gender: "men", categoryText: "Men's Slides", price: '$35' },
    { img: 'tapochki-nike-reactx-rejuven8.webp', title: 'Nike ReactX 8', categories: ["slides"], gender: "men", categoryText: "Men's Recovery", price: '$80' },
    { img: 'tapochki-jordan-franchise-slide-shower.webp', title: 'Jordan Franchise Shower Slides', categories: ["slides"], gender: "men", categoryText: "Men's Slides", price: '$80' },

    // ================= ОДЕЖДА (APPAREL) =================
    // Футболки
    { img: 'futbolka-jordan-break-leisure-graphic.webp', title: 'Jordan Break Graphic T-Shirt', categories: ["apparel", "jordan", "tshirts"], gender: "men", categoryText: "Men's T-Shirt", price: '$35' },
    { img: 'futbolka-jordan-break-sport-love.webp', title: 'Jordan Sport Love T-Shirt', categories: ["apparel", "jordan", "tshirts"], gender: "men", categoryText: "Men's T-Shirt", price: '$35' },
    { img: 'futbolka-jordan-flight.webp', title: 'Jordan Flight T-Shirt', categories: ["apparel", "jordan", "tshirts"], gender: "men", categoryText: "Men's T-Shirt", price: '$30' },
    { img: 'futbolka-jordan-flight-essential.webp', title: 'Jordan Essential T-Shirt', categories: ["apparel", "jordan", "tshirts"], gender: "men", categoryText: "Men's T-Shirt", price: '$30' },
    { img: 'futbolka-nike-club-basketball.webp', title: 'Nike Club Basketball T-Shirt', categories: ["apparel", "tshirts"], gender: "men", categoryText: "Men's T-Shirt", price: '$28' },
    { img: 'futbolka-nike-dri-fit-tee-standard.webp', title: 'Nike Dri-FIT Standard Tee', categories: ["apparel", "tshirts"], gender: "men", categoryText: "Men's T-Shirt", price: '$30' },
    { img: 'futbolka-s-dlin-ruk-jordan.webp', title: 'Jordan Long-Sleeve Tee', categories: ["apparel", "jordan", "tshirts"], gender: "men", categoryText: "Men's Long-Sleeve", price: '$40' },
    
    { img: 'futbolka-nike-ribbed-modified-crop-just-do-it.webp', title: 'Nike Ribbed Modified Crop', categories: ["apparel", "tshirts"], gender: "women", categoryText: "Women's T-Shirt", price: '$35' },
    { img: 'futbolka-nike-sportswear.webp', title: 'Nike Sportswear Classic', categories: ["apparel", "tshirts"], gender: "women", categoryText: "Women's T-Shirt", price: '$30' },
    { img: 'futbolka-nike-sportswear-classic-oversized.webp', title: 'Nike Sportswear Oversized', categories: ["apparel", "tshirts"], gender: "women", categoryText: "Women's T-Shirt", price: '$40' },
    { img: 'futbolka-nike-sportswear-luxe-boxy-t-shirt.webp', title: 'Nike Sportswear Luxe Boxy', categories: ["apparel", "tshirts"], gender: "women", categoryText: "Women's T-Shirt", price: '$35' },
    { img: 'futbolka-nike.webp', title: 'Nike Essential T-Shirt', categories: ["apparel", "tshirts"], gender: "women", categoryText: "Women's T-Shirt", price: '$25' },
    { img: 'futbolka-nike-sport.webp', title: 'Nike Sport Graphic T-Shirt', categories: ["apparel", "tshirts"], gender: "women", categoryText: "Women's T-Shirt", price: '$35' },    
    // Худи и Куртки
    { img: 'tolstovka-jordan-flight-wings-fleece.webp', title: 'Jordan Flight Wings Fleece', categories: ["apparel", "jordan", "hoodies"], gender: "men", categoryText: "Men's Hoodie", price: '$85' },
    { img: 'tolstovka-jordan-rare.webp', title: 'Jordan Rare Air Hoodie', categories: ["apparel", "jordan", "hoodies"], gender: "men", categoryText: "Men's Hoodie", price: '$90' },
    { img: 'tolstovka-nike-sb.webp', title: 'Nike SB Hoodie', categories: ["apparel", "hoodies"], gender: "men", categoryText: "Men's Hoodie", price: '$75' },
    { img: 'tolstovka-jordan-break-sport-crew.webp', title: 'Jordan Break Crew Sweatshirt', categories: ["apparel", "jordan", "hoodies"], gender: "men", categoryText: "Men's Sweatshirt", price: '$70' },
    
    { img: 'tolstovka-jordan.webp', title: 'Jordan Essential Fleece Hoodie', categories: ["apparel", "jordan", "hoodies"], gender: "women", categoryText: "Women's Hoodie", price: '$85' },
    { img: 'tolstovka-jordan-air-jordan-.webp', title: 'Air Jordan Fleece Hoodie', categories: ["apparel", "jordan", "hoodies"], gender: "women", categoryText: "Women's Hoodie", price: '$90' },        { img: 'tolstovka-jordan-break.webp', title: 'Jordan Break Fleece Hoodie', categories: ["apparel", "jordan", "hoodies"], gender: "women", categoryText: "Women's Hoodie", price: '$75' },
    { img: 'tolstovka-jordan-break-.webp', title: 'Jordan Break Pullover Hoodie', categories: ["apparel", "jordan", "hoodies"], gender: "women", categoryText: "Women's Hoodie", price: '$80' },
    { img: 'tolstovka-jordan-brooklyn-fleece.webp', title: 'Jordan Brooklyn Fleece', categories: ["apparel", "jordan", "hoodies"], gender: "women", categoryText: "Women's Hoodie", price: '$85' },
    { img: 'tolstovka-nike-24.webp', title: 'Nike Sportswear Tech Fleece', categories: ["apparel", "hoodies"], gender: "women", categoryText: "Women's Hoodie", price: '$130' },
    { img: 'tolstovka-jordan-.webp', title: 'Jordan Essential Pink Hoodie', categories: ["apparel", "jordan", "hoodies"], gender: "women", categoryText: "Women's Hoodie", price: '$80' },
            
    { img: 'kurtka-jordan-break-leisure-chore.webp', title: 'Jordan Leisure Chore Jacket', categories: ["apparel", "jordan", "jackets"], gender: "men", categoryText: "Men's Jacket", price: '$120' },
    { img: 'kurtka-jordan-midweight-puffer.webp', title: 'Jordan Midweight Puffer', categories: ["apparel", "jordan", "jackets"], gender: "men", categoryText: "Men's Jacket", price: '$150' },
    { img: 'kurtka-jordan-midweight-puffer-with-piping.webp', title: 'Jordan Puffer with Piping', categories: ["apparel", "jordan", "jackets"], gender: "men", categoryText: "Men's Jacket", price: '$160' },
    { img: 'kurtka-nike-sportswear-club-therma.webp', title: 'Nike Sportswear Therma-FIT', categories: ["apparel", "jackets"], gender: "men", categoryText: "Men's Jacket", price: '$130' },

    { img: 'nikecourt-dri-fit-advanced-slam.webp', title: 'NikeCourt Dri-FIT Slam', categories: ["apparel"], gender: "men", categoryText: "Men's Top", price: '$55' },
    { img: 'nikecourt-slam.webp', title: 'NikeCourt Slam Top', categories: ["apparel"], gender: "men", categoryText: "Men's Top", price: '$50' },
    { img: 'nike-dri-fit.webp', title: 'Nike Dri-FIT Tank', categories: ["apparel"], gender: "men", categoryText: "Men's Tank", price: '$30' },
    { img: 'nike-pro-dri-fit-tight.webp', title: 'Nike Pro Dri-FIT Tights', categories: ["apparel"], gender: "men", categoryText: "Men's Tights", price: '$45' },

       // ================= АКСЕССУАРЫ =================
    { img: 'butylka-dlya-vody-nike-big-mouth.webp', title: 'Nike Big Mouth Water Bottle', categories: ["accessories", "bottles"], categoryText: "Water Bottle", price: '$25' },
    { img: 'butylka-nike-recharge-chug.webp', title: 'Nike Recharge Chug Bottle', categories: ["accessories", "bottles"], categoryText: "Water Bottle", price: '$30' },
    { img: 'butylka-nike-refuel-32oz.webp', title: 'Nike Refuel Bottle 32oz', categories: ["accessories", "bottles"], categoryText: "Water Bottle", price: '$35' },
    { img: 'butylka-nike-refuel-bottle.webp', title: 'Nike Refuel Bottle', categories: ["accessories", "bottles"], categoryText: "Water Bottle", price: '$28' },
    { img: 'butylka-nike-refuel-bottle-18.webp', title: 'Nike Refuel Bottle 18oz', categories: ["accessories", "bottles"], categoryText: "Water Bottle", price: '$20' },
    { img: 'butylka-nike-tr-renew-recharge.webp', title: 'Nike TR Renew Recharge', categories: ["accessories", "bottles"], categoryText: "Water Bottle", price: '$32' },
    
    { img: 'ryukzak-jordan-air-raid.webp', title: 'Jordan Air Raid Backpack', categories: ["accessories", "backpacks"], categoryText: "Backpack", price: '$75' },
    { img: 'ryukzak-jordan-air-raid-backpack.webp', title: 'Jordan Air Raid Backpack Black', categories: ["accessories", "backpacks"], categoryText: "Backpack", price: '$75' },
    { img: 'ryukzak-jordan-air-raid-backpack-17l.webp', title: 'Jordan Air Raid Backpack 17L', categories: ["accessories", "backpacks"], categoryText: "Backpack", price: '$70' },
    { img: 'ryukzak-jordan-air-raid-backpack-17l-9a.webp', title: 'Jordan Air Raid Backpack 17L SE', categories: ["accessories", "backpacks"], categoryText: "Backpack", price: '$80' },
    { img: 'ryukzak-jordan-jam-hbr-mesh-backpack.webp', title: 'Jordan Mesh Backpack', categories: ["accessories", "backpacks"], categoryText: "Backpack", price: '$65' },
    { img: 'ryukzak-jordan-jam-mini-air-patrol-pink.webp', title: 'Jordan Air Patrol Mini Pink', categories: ["accessories", "backpacks"], gender: "women", categoryText: "Backpack", price: '$60' },
    { img: 'ryukzak-nike-heritage-2-0-backpack.webp', title: 'Nike Heritage 2.0 Backpack', categories: ["accessories", "backpacks"], categoryText: "Backpack", price: '$45' },
    { img: 'ryukzak-nike-varsity-elite-backpack.webp', title: 'Nike Varsity Elite Backpack', categories: ["accessories", "backpacks"], categoryText: "Backpack", price: '$55' },

    { img: 'sumka-jordan-elemental-duffle.webp', title: 'Jordan Elemental Duffle', categories: ["accessories", "bags"], categoryText: "Duffel Bag", price: '$50' },
    { img: 'sumka-jordan-jam-collectors-gym.webp', title: "Jordan Jam Collector's Gym Bag", categories: ["accessories", "bags"], categoryText: "Gym Bag", price: '$65' },
    { img: 'sumka-nike-brasilia-small.webp', title: 'Nike Brasilia Small Duffel', categories: ["accessories", "bags"], categoryText: "Duffel Bag", price: '$40' },
    { img: 'sumka-nike-utility-power.webp', title: 'Nike Utility Power Duffel', categories: ["accessories", "bags"], categoryText: "Duffel Bag", price: '$60' },
    { img: 'sumka-nike-utility-power-2-0-medium.webp', title: 'Nike Utility Power 2.0 Medium', categories: ["accessories", "bags"], categoryText: "Duffel Bag", price: '$70' }
];

        // 2. Функция создания карточки
        const createCardHTML = (product) => {
            return `
                <a href="#" class="product-card">
                    <div class="product-image">
                        <img src="assets/${product.img}" alt="${product.title}">
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-category">${product.categoryText}</p>
                    <p class="product-price">${product.price}</p>
                </a>
            `;
        };

        // 3. Читаем URL (какой фильтр выбран)
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFilter = urlParams.get('category'); 
        const genderFilter = urlParams.get('gender');

        // 4. Фильтруем товары
        let filteredProducts = products;
        
        // Фильтр по категории
        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(product => product.categories.includes(categoryFilter));
        }
        
        if (genderFilter) {
            filteredProducts = filteredProducts.filter(product => {
                if (product.gender === genderFilter) return true;
                if (!product.gender) return true;
                return false;
            });
        }

            // Меняем заголовок в зависимости от фильтров
        if (pageTitle) {
            let prefix = "";
            if (genderFilter === 'men') prefix = "Men's ";
            else if (genderFilter === 'women') prefix = "Women's ";
            let categoryName = "All Products";

            if (categoryFilter === 'sneakers') categoryName = "Sneakers";
            else if (categoryFilter === 'airmax') categoryName = "Air Max";
            else if (categoryFilter === 'jordan') categoryName = "Air Jordan";
            else if (categoryFilter === 'boots') categoryName = "Boots";
            else if (categoryFilter === 'slides') categoryName = "Slippers";
            else if (categoryFilter === 'tshirts') categoryName = "T-Shirts";
            else if (categoryFilter === 'hoodies') categoryName = "Hoodies";
            else if (categoryFilter === 'jackets') categoryName = "Jackets";
            else if (categoryFilter === 'bottles') categoryName = "Water Bottles";
            else if (categoryFilter === 'backpacks') categoryName = "Backpacks";
            else if (categoryFilter === 'bags') categoryName = "Bags";

            if (categoryFilter === 'bottles' || categoryFilter === 'backpacks' || categoryFilter === 'bags') {
                pageTitle.textContent = categoryName;
            } else {
                pageTitle.textContent = prefix + categoryName;
            }
        }

        // 5. Вставляем карточки
        filteredProducts.forEach((product, index) => {
            const cardHTML = createCardHTML(product);
            productGrid.insertAdjacentHTML('beforeend', cardHTML);
            
            const newCard = productGrid.lastElementChild;

            let delay;
            if (window.innerWidth <= 768) {
                // На телефоне 2 колонки
                delay = (index % 2) * 0.2; 
            } else {
                // На ПК 3 колонки
                delay = (index % 3) * 0.2; 
            }
            
            newCard.style.transitionDelay = `${delay}s`;
        });

        // 6. Запускаем анимацию
        const cards = document.querySelectorAll('.product-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.05 });

        cards.forEach((card) => {
            observer.observe(card);
        });
    }

    // 6. Управление меню и затемнением
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
    const dropdownToggles = document.querySelectorAll('.nav-item-dropdown > a');
    const backdrop = document.querySelector('.menu-backdrop');

    // Функция полного закрытия
    const closeAllMenus = () => {
        document.querySelectorAll('.mega-menu').forEach(menu => menu.classList.remove('open'));
        if (backdrop) backdrop.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    // Логика для пк
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                const menu = item.querySelector('.mega-menu');
                if (menu) menu.classList.add('open');
                if (backdrop) backdrop.classList.add('active');
            }
        });

        item.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                closeAllMenus();
            }
        });
    });

    // Логика для телефона
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // Если это ПК, клик игнорируем
            if (window.innerWidth > 768) return; 

            e.preventDefault();
            e.stopPropagation();

            const menu = toggle.nextElementSibling;
            
            if (menu.classList.contains('open')) {
                closeAllMenus();
            } else {
                closeAllMenus();

                setTimeout(() => {
                    menu.classList.add('open');
                    if (backdrop) backdrop.classList.add('active');
                    document.body.classList.add('no-scroll');
                }, 300); 
            }
        });
    });

    // Закрытие при клике на фон
    if (backdrop) {
        backdrop.addEventListener('click', closeAllMenus);
    }

    // Закрытие при клике на пустое место
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.nav-item-dropdown')) {
                closeAllMenus();
            }
        }
    });
});