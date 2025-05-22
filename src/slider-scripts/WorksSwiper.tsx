import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { works as worksBreakpoints } from '../data/swiper-space-between-breakpoints';

export default function WorksSwiper({ children, baseClassName }: { children: React.ReactNode, baseClassName: string }) {
    const swiperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        const wrapper = swiperRef.current.querySelector('.swiper-wrapper');
        const slides = wrapper?.querySelectorAll('.swiper-slide') || [];
        const slideCount = slides.length;
        const width = window.innerWidth;
        let shouldLoop = false;
        let shouldAutoplay = false;

        if (slideCount > 3) { shouldLoop = true; shouldAutoplay = true; }
        else if (slideCount === 3 && width < 1440) {  shouldLoop = true; shouldAutoplay = true; }
        else if (slideCount === 2 && width < 768) {  shouldLoop = true; shouldAutoplay = true; }

        Swiper.use([Autoplay]);

        const swiperInstance = new Swiper(swiperRef.current, {
            loop: shouldLoop,
            slidesPerView: 'auto',
            autoplay: shouldAutoplay ? {
                delay: 5000,
                disableOnInteraction: true,
                reverseDirection: true,
            } : false,
            breakpoints: worksBreakpoints,
            pagination: {
                el: '.works-swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.works-swiper-button-next',
                prevEl: '.works-swiper-button-prev',
            },
            scrollbar: {
                el: '.works-swiper-scrollbar',
            },
        });

        const resizeHandler = () => swiperInstance.update();
        window.addEventListener('resize', resizeHandler);

        const currentSwiperElement = swiperRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });
        observer.observe(currentSwiperElement);

        return () => {
            window.removeEventListener('resize', resizeHandler);
            swiperInstance.destroy(true, true);
            if (currentSwiperElement) observer.unobserve(currentSwiperElement);
        };
    }, []);

    return (
        <div className={`swiper works-swiper ${baseClassName}`} ref={swiperRef}>
            {children}
        </div>
    );
}
