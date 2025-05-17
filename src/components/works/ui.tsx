import * as React from 'react';
import WorksSwiper from '../../slider-scripts/WorksSwiper';
import shuffleArray from '../../utils/array-shuffle';
import ImagePopupPortal from '../img-popup-portal';

const WorksUI: React.FC<WorksUIProps> = ({ containerRef, title, slug, items }) => {
    const works = [...items.flat()];
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = import.meta.env.BASE_URL;
    const [popupImg, setPopupImg] = React.useState<string | null>(null);

    return (

        <div ref={containerRef} className="rss-works">
            {popupImg && <ImagePopupPortal src={popupImg} onClose={() => setPopupImg(null)} />}

            <h3 className="rss-works__title font-28-48">{title}</h3>
            <p className="rss-works__slug font-14-18">{slug}</p>

            <WorksSwiper>
                <div className="swiper-wrapper rss-works__items-container">
                    {shuffleArray(works).map((item, index) => (
                        <div className="swiper-slide rss-works__items-container__item" key={index}>
                            <h4 className="rss-works__items-container__item__title font-16-20">{item.title}</h4>
                            <div className="rss-works__items-container__item__banner-image-container">
                                {
                                    <img className='rss-works__items-container__item__banner-image-container__image' alt={item.imgAlt} src={isProd ? `${basePath}/${item.mainImgPath}` : `${item.mainImgPath}`} />
                                }
                                <div className="rss-works__items-container__item__banner-image-container__expand-container" onClick={() => setPopupImg(isProd ? `${basePath}/${item.mainImgPath}` : item.mainImgPath)}>
                                    <div className="rss-works__items-container__item__banner-image-container__expand-container__arrow" />
                                </div>
                            </div>
                            <div className="rss-works__items-container__item__image-list-container">
                                {
                                    item.subImgsPath.map((imgPath, index) => (
                                        <div
                                            className={`rss-works__items-container__item__image-list-container__image${index !== 0 ? ' rss-works__items-container__item__image-list-container__image-inactive' : ''}`}
                                            key={index}
                                            onClick={(e) => {
                                                const currentImgDiv = e.currentTarget;
                                                const parent = currentImgDiv.parentElement;
                                                if (parent) {
                                                    const allItems = parent.querySelectorAll('.rss-works__items-container__item__image-list-container__image');
                                                    allItems.forEach(el => {
                                                        el.classList.add('rss-works__items-container__item__image-list-container__image-inactive');
                                                    });
                                                    currentImgDiv.classList.remove('rss-works__items-container__item__image-list-container__image-inactive');
                                                    const itemContainer = parent.closest('.rss-works__items-container__item');
                                                    const mainImg = itemContainer?.querySelector('.rss-works__items-container__item__banner-image-container__image') as HTMLImageElement;
                                                    if (mainImg) { mainImg.src = currentImgDiv.querySelector('img')?.src || mainImg.src }
                                                }
                                            }}
                                        >
                                            <img src={isProd ? `${basePath}/${imgPath}` : imgPath} alt={item.imgAlt} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </WorksSwiper>

            <div className="rss-works__arrows-container">
                <div className="rss-works__arrows-container__arrow rss-works__arrows-container__arrow-left works-swiper-button-prev swiper-button-prev"></div>
                <div className="rss-works__arrows-container__line-container">
                    <div className="rss-works__arrows-container__line-container__item" />
                    <div className="rss-works__arrows-container__line-container__item rss-works__arrows-container__line-container__item-active" />
                    <div className="rss-works__arrows-container__line-container__item" />
                </div>
                <div className="rss-works__arrows-container__arrow rss-works__arrows-container__arrow-right works-swiper-button-next swiper-button-next"></div>
            </div>

            <div className="rss-works__view-btn">
                {isProd ? <a href='/resume/#/projects'><input type='button' value='View All' /></a> : <a href='/projects'><input type='button' value='View All' /></a>}
            </div>
        </div>
    );
};

export default WorksUI;