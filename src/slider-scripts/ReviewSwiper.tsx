import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
// import { Autoplay } from 'swiper/modules';

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
        // Swiper.use([Autoplay]);

        const swiperInstance = new Swiper(swiperRef.current, {
            loop: true,
            slidesPerView: 'auto',
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            // spaceBetween: calculateSpaceBetween(),
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
            // breakpoints: {
            //     768: { slidesPerView: 2 },
            //     1440: { slidesPerView: 3 },
            // },
        });

        const resizeHandler = () => {
            // swiperInstance.params.spaceBetween = calculateSpaceBetween();
            swiperInstance.update();
        };

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
