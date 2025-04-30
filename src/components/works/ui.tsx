import * as React from 'react';
import { items as projects } from '../../data/projects';
import { items as articles } from '../../data/articles';
import { items as cases } from '../../data/case-studies';
import WorksSwiper from '../../slider-scripts/WorksSwiper';
import shuffleArray from '../../utils/array-shuffle';

const works = [...projects, ...articles, ...cases];

const WorksUI: React.FC<WorksUIProps> = ({ containerRef, title, slug }) => {
    return (
        <div ref={containerRef} className="rss-works">
            <h3 className="rss-works__title font-28-48">{title}</h3>
            <p className="rss-works__slug font-14-18">{slug}</p>

            <WorksSwiper>
                <div className="swiper-wrapper rss-works__items-container">
                    {shuffleArray(works).map((item, index) => (
                        <div className="swiper-slide rss-works__items-container__item" key={index}>
                            <h4 className="rss-works__items-container__item__title font-16-20">{item.title}</h4>
                            <div className="rss-works__items-container__item__banner-image-container">
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/${item.mainImgPath}`} alt={item.imgAlt} className="rss-works__items-container__item__banner-image-container__image" />
                                    ) : (
                                        <img src={`${item.subImgPath}`} alt={item.imgAlt} className="rss-works__items-container__item__banner-image-container__image" />
                                    )
                                }
                                <div className="rss-works__items-container__item__banner-image-container__expand-container">
                                    <div className="rss-works__items-container__item__banner-image-container__expand-container__arrow" />
                                </div>
                            </div>
                            <div className="rss-works__items-container__item__image-list-container">
                                <div className="rss-works__items-container__item__image-list-container__image">
                                    {
                                        process.env.NODE_ENV === "production" ? (
                                            <img src={`${import.meta.env.BASE_URL}/${item.subImgPath}`} alt={item.imgAlt} />
                                        ) : (
                                            <img src={`${item.subImgPath}`} alt={item.imgAlt} />
                                        )
                                    }
                                </div>
                                <div className="rss-works__items-container__item__image-list-container__image rss-works__items-container__item__image-list-container__image-inactive">
                                    {
                                        process.env.NODE_ENV === "production" ? (
                                            <img src={`${import.meta.env.BASE_URL}/${item.subImgPath}`} alt={item.imgAlt} />
                                        ) : (
                                            <img src={`${item.subImgPath}`} alt={item.imgAlt} />
                                        )
                                    }
                                </div>
                                <div className="rss-works__items-container__item__image-list-container__image rss-works__items-container__item__image-list-container__image-inactive">
                                    {
                                        process.env.NODE_ENV === "production" ? (
                                            <img src={`${import.meta.env.BASE_URL}/${item.subImgPath}`} alt={item.imgAlt} />
                                        ) : (
                                            <img src={`${item.subImgPath}`} alt={item.imgAlt} />
                                        )
                                    }
                                </div>
                                <div className="rss-works__items-container__item__image-list-container__image rss-works__items-container__item__image-list-container__image-inactive">
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
              <input type="button" value="View All" />
            </div>
        </div>
    );
};

export default WorksUI;