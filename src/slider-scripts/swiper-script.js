//calculating swiper items space dynamically
function calculateSpaceBetween() {
  const width = window.innerWidth;
  if (width >= 1440) return Math.max(20, Math.min((width * 1.38) / 100, 30));
  else if (width >= 768) return Math.max(10, Math.min((width * 1.3) / 100, 20));
  else return 10;
}

//swiper initialization
function initSwiper() {
  const projectsSwiperExists = document.querySelector('.projects-swiper');
  const articlesSwiperExists = document.querySelector('.articles-swiper');
  const caseStudiesSwiperExists = document.querySelector('.case-studies-swiper');

  if (projectsSwiperExists || articlesSwiperExists || caseStudiesSwiperExists) {
    if (projectsSwiperExists) {
      new Swiper('.projects-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: calculateSpaceBetween(),
        pagination: {
          el: '.projects-swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.projects-swiper-button-next',
          prevEl: '.projects-swiper-button-prev',
        },
        scrollbar: {
          el: '.projects-swiper-scrollbar'
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        },
      });
    }
  
    if (articlesSwiperExists) {
      new Swiper('.articles-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: calculateSpaceBetween(),
        pagination: {
          el: '.articles-swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.articles-swiper-button-next',
          prevEl: '.articles-swiper-button-prev',
        },
        scrollbar: {
          el: '.articles-swiper-scrollbar'
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        },
      });
    }

    if (caseStudiesSwiperExists) {
      new Swiper('.case-studies-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: calculateSpaceBetween(),
        pagination: {
          el: '.case-studies-swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.case-studies-swiper-button-next',
          prevEl: '.case-studies-swiper-button-prev',
        },
        scrollbar: {
          el: '.case-studies-swiper-scrollbar'
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        },
      });
    }
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