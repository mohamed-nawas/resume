import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function BlogsSwiper({ children }: { children: React.ReactNode }) {
    const swiperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiperInstance = new Swiper(swiperRef.current, {
            loop: true,
            slidesPerView: 'auto'
        });

        const resizeHandler = () => swiperInstance.update();
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
