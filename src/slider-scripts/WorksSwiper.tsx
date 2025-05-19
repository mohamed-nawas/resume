import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function WorksSwiper({ children }: { children: React.ReactNode }) {
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
            spaceBetween: 10,
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
        return () => {
            window.removeEventListener('resize', resizeHandler);
            swiperInstance.destroy(true, true);
        };
    }, []);

    return (
        <div className="swiper works-swiper" ref={swiperRef}>
            {children}
        </div>
    );
}
