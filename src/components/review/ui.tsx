import * as React from 'react';
import { items } from '../../data/reviews';
import ReviewSwiper from '../../scripts/slider-scripts/ReviewSwiper';

const ReviewUI: React.FC<ReviewUIProps> = ({ containerRef, title, slug, count }) => {
    return (
        <div ref={containerRef} className="rss-review">
            <h3 className="rss-review__title font-28-48">{title}</h3>
            <p className="rss-review__slug font-16-18">{slug}</p>
            <div className="rss-review__total-container">
                <h6 className="font-16-20">{count}</h6>
                <div className="rss-review__total-container__arrow-container">
                    <div className="rss-review__total-container__arrow-container__arrow rss-review__total-container__arrow-container__arrow-left review-swiper-button-prev swiper-button-prev" />
                    <div className="rss-review__total-container__arrow-container__arrow rss-review__total-container__arrow-container__arrow-right review-swiper-button-next swiper-button-next" />
                </div>
            </div>
            <div className="rss-review__hr-line" />

            <ReviewSwiper>
                <div className="swiper-wrapper rss-review__review-items-container">
                    {items.map((item, index) => (
                        <div className="swiper-slide rss-review__review-items-container__item" key={index}>
                            <div className="rss-review__review-items-container__item__header-container">
                                <div className="rss-review__review-items-container__item__header-container__info-container">
                                    <h6 className="rss-review__review-items-container__item__header-container__info-container__title font-16-20">{item.name}</h6>
                                    <p className="rss-review__review-items-container__item__header-container__info-container__slug font-14-18">{item.company}</p>
                                </div>
                                <div className="rss-review__review-items-container__item__header-container__profile-container">
                                    <div className="rss-review__review-items-container__item__header-container__profile-container__item-container">
                                        <a href={item.linkedin} target="_blank">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/icons/linkedin-filled-ico.png`} alt="Linkedin Icon" className="rss-review__review-items-container__item__header-container__profile-container__item-container__item" />
                                                ) : (
                                                    <img src='icons/linkedin-filled-ico.png' alt="Linkedin Icon" className="rss-review__review-items-container__item__header-container__profile-container__item-container__item" />
                                                )
                                            }
                                        </a>
                                    </div>
                                    <div className="rss-review__review-items-container__item__header-container__profile-container__item-container">
                                        <a href={item.facebook} target="_blank">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/icons/facebook-filled-ico.png`} alt="Facebook Icon" className="rss-review__review-items-container__item__header-container__profile-container__item-container__item" />
                                                ) : (
                                                    <img src='icons/facebook-filled-ico.png' alt="Facebook Icon" className="rss-review__review-items-container__item__header-container__profile-container__item-container__item" />
                                                )
                                            }
                                        </a>
                                    </div>
                                    <div className="rss-review__review-items-container__item__header-container__profile-container__item-container">
                                        <a href={item.twiter} target="_blank">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/icons/twitter-filled-ico.png`} alt="Twitter Icon" className="rss-review__review-items-container__item__header-container__profile-container__item-container__item" />
                                                ) : (
                                                    <img src='icons/twitter-filled-ico.png' alt="Twitter Icon" className="rss-review__review-items-container__item__header-container__profile-container__item-container__item" />
                                                )
                                            }
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p className="rss-review__review-items-container__item__content font-16-18">{item.review}</p>
                        </div>
                    ))}
                </div>
            </ReviewSwiper>

            <div className="rss-review__arrows-container">
                <div className="rss-review__arrows-container__arrow rss-review__arrows-container__arrow-left review-swiper-button-prev swiper-button-prev"></div>
                <div className="rss-review__arrows-container__line-container">
                    <div className="rss-review__arrows-container__line-container__item" />
                    <div className="rss-review__arrows-container__line-container__item rss-review__arrows-container__line-container__item-active" />
                    <div className="rss-review__arrows-container__line-container__item" />
                </div>
                <div className="rss-review__arrows-container__arrow rss-review__arrows-container__arrow-right review-swiper-button-next swiper-button-next"></div>
            </div>
        </div>
    );
};

export default ReviewUI;