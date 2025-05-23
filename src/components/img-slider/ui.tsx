import * as React from 'react';
import ImgSwiper from '../../scripts/slider-scripts/ImgSwiper';

const ImgSliderUI: React.FC<ImgSliderUIProps> = ({ containerRef, data }) => {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = import.meta.env.BASE_URL;
    return (
        <div ref={containerRef} className="rss-slider">
            <ImgSwiper>
                <div className="swiper-wrapper rss-slider__items-container">
                    {data.map((item, index) => (
                        <div className="swiper-slide rss-slider__items-container__item" key={index}>
                            <img className='rss-slider__items-container__item__image' alt={item.alt} src={isProd ? `${basePath}/${item.src}` : item.src}
                            />
                        </div>
                    ))}
                </div>
            </ImgSwiper>
        </div>
    );
};

export default ImgSliderUI;