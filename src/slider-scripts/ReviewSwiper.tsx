import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// function calculateSpaceBetween() {
//     const width = window.innerWidth;
//     if (width >= 1440) return Math.max(20, Math.min((width * 1.38) / 100, 30));
//     else if (width >= 768) return Math.max(10, Math.min((width * 1.3) / 100, 20));
//     else return 10;
// }

export default function ReviewSwiper({ children }: { children: React.ReactNode }) {
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
            autoplay: shouldAutoplay ? {
                delay: 15000,
                disableOnInteraction: true,
                reverseDirection: true,
            } : false,
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.review-swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.review-swiper-button-next',
                prevEl: '.review-swiper-button-prev',
            },
            scrollbar: {
                el: '.review-swiper-scrollbar',
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
        <div className="swiper review-swiper" ref={swiperRef}>
            {children}
        </div>
    );
}
