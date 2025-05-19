import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

// function calculateSpaceBetween() {
//     const width = window.innerWidth;
//     if (width >= 1440) return Math.max(20, Math.min((width * 1.38) / 100, 30));
//     if (width >= 768) return Math.max(10, Math.min((width * 1.3) / 100, 20));
//     else return 10;
// }

export default function BlogsSwiper({ children }: { children: React.ReactNode }) {
    const swiperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!swiperRef.current) return;
        // const spaceBetweenValue = calculateSpaceBetween();
        // document.documentElement.style.setProperty('--swiper-slide-gap', `${spaceBetweenValue}px`);

        const swiperInstance = new Swiper(swiperRef.current, {
            loop: true,
            slidesPerView: 'auto'
            // spaceBetween: spaceBetweenValue,
            // slidesPerView: 1,
            // breakpoints: {
                // 768: { slidesPerView: 2 },
                // 1440: { slidesPerView: 3 },
            // }
        });

        const resizeHandler = () => {
            // const newSpaceBetween = calculateSpaceBetween();
            // swiperInstance.params.spaceBetween = newSpaceBetween;
            // document.documentElement.style.setProperty('--swiper-slide-gap', `${newSpaceBetween}px`);
            swiperInstance.update();
        }
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
            swiperInstance.destroy(true, true);
        };
    }, []);

    return (
        <div className="swiper blogs-swiper" ref={swiperRef}>
            {children}
        </div>
    );
}
