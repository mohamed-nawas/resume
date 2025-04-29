//calculating swiper items space dynamically
function calculateSpaceBetween() {
    const width = window.innerWidth;
    if (width >= 1440) return Math.max(20, Math.min((width * 1.38) / 100, 30));
    else if (width >= 768) return Math.max(10, Math.min((width * 1.3) / 100, 20));
    else return 10;
}

//swiper initialization
function initSwiper() {
    const reviewSwiperExists = document.querySelector('.review-swiper');

    if (reviewSwiperExists) {
        new Swiper('.review-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: calculateSpaceBetween(),
            pagination: {
                el: '.review-swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.review-swiper-button-next',
                prevEl: '.review-swiper-button-prev',
            },
            scrollbar: {
                el: '.review-swiper-scrollbar'
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
            },
        });
    } else {
        setTimeout(initSwiper, 100); // retry
    }
}

initSwiper();





window.addEventListener('resize', () => {
    document.querySelectorAll('.swiper').forEach(swiperEl => {
        if (swiperEl.swiper) {
            swiperEl.swiper.params.spaceBetween = calculateSpaceBetween();
            swiperEl.swiper.update();
        }
    });
});