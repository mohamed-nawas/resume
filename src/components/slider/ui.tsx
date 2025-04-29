import * as React from 'react';

const SliderUI: React.FC<SliderUIProps> = ({ containerRef, sliderTitle, swiperClassName, sliderBtnText, data }) => {
    return (
        <div ref={containerRef} className="rss-slider">
            <div className="rss-slider__title-container">
                <h3 className="font-18-24">{sliderTitle}</h3>
                <div className="rss-slider__title-container__arrow-container">
                    <div className="rss-slider__title-container__arrow-container__arrow rss-slider__title-container__arrow-container__arrow-left swiper-button-prev" />
                    <div className="rss-slider__title-container__arrow-container__arrow rss-slider__title-container__arrow-container__arrow-right swiper-button-next" />
                </div>
            </div>
            <div className="rss-slider__hr-line" />
            <div className={`swiper ${swiperClassName}`}>
                <div className="rss-slider__items-container swiper-wrapper">
                    {data.map((item, index) => (
                        <div className="rss-slider__items-container__item swiper-slide">
                            <h4 className="rss-slider__items-container__item__title font-16-20">{item.title}</h4>
                            <div className="rss-slider__items-container__item__banner-image-container">
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/${item.mainImgPath}`} alt={item.imgAlt} className="rss-slider__items-container__item__banner-image-container__image" />
                                    ) : (
                                        <img src={`${item.mainImgPath}`} alt={item.imgAlt} className="rss-slider__items-container__item__banner-image-container__image" />
                                    )
                                }
                                <div className="rss-slider__items-container__item__banner-image-container__expand-container">
                                    <div className="rss-slider__items-container__item__banner-image-container__expand-container__arrow" />
                                </div>
                            </div>
                            <div className="rss-slider__items-container__item__image-list-container">
                                <div className="rss-slider__items-container__item__image-list-container__image">
                                    {
                                        process.env.NODE_ENV === "production" ? (
                                            <img src={`${import.meta.env.BASE_URL}/${item.subImgPath}`} alt={item.imgAlt} />
                                        ) : (
                                            <img src={`${item.subImgPath}`} alt={item.imgAlt} />
                                        )
                                    }
                                </div>
                                <div className="rss-slider__items-container__item__image-list-container__image rss-slider__items-container__item__image-list-container__image-inactive">
                                    {
                                        process.env.NODE_ENV === "production" ? (
                                            <img src={`${import.meta.env.BASE_URL}/${item.subImgPath}`} alt={item.imgAlt} />
                                        ) : (
                                            <img src={`${item.subImgPath}`} alt={item.imgAlt} />
                                        )
                                    }
                                </div>
                                <div className="rss-slider__items-container__item__image-list-container__image rss-slider__items-container__item__image-list-container__image-inactive">
                                    {
                                        process.env.NODE_ENV === "production" ? (
                                            <img src={`${import.meta.env.BASE_URL}/${item.subImgPath}`} alt={item.imgAlt} />
                                        ) : (
                                            <img src={`${item.subImgPath}`} alt={item.imgAlt} />
                                        )
                                    }
                                </div>
                                <div className="rss-slider__items-container__item__image-list-container__image rss-slider__items-container__item__image-list-container__image-inactive">
                                    {
                                        process.env.NODE_ENV === "production" ? (
                                            <img src={`${import.meta.env.BASE_URL}/${item.subImgPath}`} alt={item.imgAlt} />
                                        ) : (
                                            <img src={`${item.subImgPath}`} alt={item.imgAlt} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rss-slider__arrows-container">
                <div className={`rss-slider__arrows-container__arrow rss-slider__arrows-container__arrow-left ${swiperClassName}-button-prev swiper-button-prev`}></div>
                <div className="rss-slider__arrows-container__line-container">
                    <div className="rss-slider__arrows-container__line-container__item" />
                    <div className="rss-slider__arrows-container__line-container__item rss-slider__arrows-container__line-container__item-active" />
                    <div className="rss-slider__arrows-container__line-container__item" />
                </div>
                <div className={`rss-slider__arrows-container__arrow rss-slider__arrows-container__arrow-right ${swiperClassName}-button-next swiper-button-next`}></div>
            </div>
            <div className="rss-slider__view-btn">
                <input type="button" value={sliderBtnText} />
            </div>
        </div>
    );
};

export default SliderUI;