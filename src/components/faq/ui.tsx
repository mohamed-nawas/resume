import * as React from 'react';
import { items } from '../../data/faq';

const FAQUI: React.FC<FAQUIProps> = ({ containerRef, title, slug, containerHelpIconPath, containerHelpIconAlt, containerHelpTextTitle, containerHelpTextSlug, containerHelpBtnValue }) => {
    return (
        <div ref={containerRef} className="rss-faq">
            <h2 className="rss-faq__title font-28-48">{title}</h2>
            <p className="rss-faq__slug font-14-18">{slug}</p>
            <div className="rss-faq__container">
                <div className="rss-faq__container__faq-container">
                    {items.map((item, index) => (
                        <div className="rss-faq__container__faq-container__item" key={index}>
                            <div className="rss-faq__container__faq-container__item__text-container">
                                {/* <h4 className={`${containerFaqItemTextTitleClassName} active font-16-20`}>{item.title}</h4> */}
                                <h4 className="rss-faq__container__faq-container__item__text-container__title font-16-20">{item.title}</h4>
                                <p className="rss-faq__container__faq-container__item__text-container__slug font-14-18">{item.slug}</p>
                            </div>
                            <div className="rss-faq__container__faq-container__item__icon-container">
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/${item.iconPath}`} alt={item.iconAlt} className="rss-faq__container__faq-container__item__icon-container__icon" />
                                    ) : (
                                        <img src={item.iconPath} alt={item.iconAlt} className="rss-faq__container__faq-container__item__icon-container__icon" />
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rss-faq__container__help-container">
                    <div className="rss-faq__container__help-container__ico-container">
                        {
                            process.env.NODE_ENV === "production" ? (
                                <img src={`${import.meta.env.BASE_URL}/${containerHelpIconPath}`} alt={containerHelpIconAlt} className="rss-faq__container__help-container__ico-container__icon" />
                            ) : (
                                <img src={containerHelpIconPath} alt={containerHelpIconAlt} className="rss-faq__container__help-container__ico-container__icon" />
                            )
                        }
                    </div>
                    <div className="rss-faq__container__help-container__text-container">
                        <h4 className="rss-faq__container__help-container__text-container__title font-18-24">{containerHelpTextTitle}</h4>
                        <p className="rss-faq__container__help-container__text-container__slug font-14-18">{containerHelpTextSlug}</p>
                    </div>
                    <input type="button" value={containerHelpBtnValue} className="rss-faq__container__help-container__submit-btn" />
                </div>
            </div>
        </div>
    );
};

export default FAQUI;