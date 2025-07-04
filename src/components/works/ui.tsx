import * as React from 'react';
import WorksSwiper from '../../scripts/slider-scripts/WorksSwiper';
import shuffleArray from '../../utils/array-shuffle';
import ImagePopupPortal from '../img-popup-portal';

const WorksUI: React.FC<WorksUIProps> = ({ containerRef, baseClassName, swiperBaseClassName, title, slug, items }) => {
    const works = [...items.flat()];
    const shuffledWorks = React.useMemo(() => shuffleArray(works), []);
    const basePath = import.meta.env.BASE_URL;
    const [popupImg, setPopupImg] = React.useState<string | null>(null);
    const [activeImages, setActiveImages] = React.useState<{ [id: string]: string }>({});

    return (

        <div ref={containerRef} className={`rss-works ${baseClassName}`}>
            {popupImg && <ImagePopupPortal src={popupImg} onClose={() => setPopupImg(null)} />}

            <h3 className={`rss-works__title ${baseClassName}__title font-28-48`}>{title}</h3>
            <p className={`rss-works__slug ${baseClassName}__slug font-14-18`}>{slug}</p>

            <WorksSwiper baseClassName={swiperBaseClassName}>
                <div className="swiper-wrapper rss-works__items-container">
                    {shuffledWorks.map((item) => {
                        const activeImageSrc = activeImages[item.id] || (`${basePath}${item.mainImgPath}`);
                        return (
                            <a href={`/detail?${item.title.trim().toLowerCase().replace(/\s+/g, '-')}`} className="swiper-slide rss-works__items-container__item" key={item.id}>
                                <h4 className="rss-works__items-container__item__title font-16-20">{item.title}</h4>
                                <div className="rss-works__items-container__item__banner-image-container">
                                    <img
                                        className='rss-works__items-container__item__banner-image-container__image'
                                        alt={item.imgAlt}
                                        src={activeImageSrc}
                                    />
                                    <div
                                        className="rss-works__items-container__item__banner-image-container__expand-container"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            setPopupImg(activeImageSrc)
                                        }}
                                    >
                                        <div className="rss-works__items-container__item__banner-image-container__expand-container__arrow" />
                                    </div>
                                </div>
                                <div className="rss-works__items-container__item__image-list-container">
                                    {
                                        item.subImgsPath.map((imgPath, index) => {
                                            const thumbnailSrc = basePath + imgPath;
                                            const isActive = activeImageSrc === thumbnailSrc;
                                            return (
                                                <div
                                                className={`rss-works__items-container__item__image-list-container__image${!isActive ? ' rss-works__items-container__item__image-list-container__image-inactive' : ''}`}
                                                    key={index}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        setActiveImages((prev) => ({...prev, [item.id]: thumbnailSrc}));
                                                    }}
                                                >
                                                    <img src={thumbnailSrc} alt={item.imgAlt} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </a>
                        )
                    })}
                </div>
            </WorksSwiper>

            <div className={`rss-works__arrows-container ${baseClassName}__arrows-container`}>
                <div className="rss-works__arrows-container__arrow rss-works__arrows-container__arrow-left works-swiper-button-prev swiper-button-prev"></div>
                <div className="rss-works__arrows-container__line-container">
                    <div className="rss-works__arrows-container__line-container__item" />
                    <div className="rss-works__arrows-container__line-container__item rss-works__arrows-container__line-container__item-active" />
                    <div className="rss-works__arrows-container__line-container__item" />
                </div>
                <div className="rss-works__arrows-container__arrow rss-works__arrows-container__arrow-right works-swiper-button-next swiper-button-next"></div>
            </div>

            <div className={`rss-works__view-btn ${baseClassName}__view-btn`}>
                <a href='/projects'><input type='button' value='View All' /></a>
            </div>
        </div>
    );
};

export default WorksUI;