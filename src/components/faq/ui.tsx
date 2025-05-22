import * as React from 'react';
import { useState } from 'react';
import { items } from '../../data/faq';

const FAQUI: React.FC<FAQUIProps> = ({ containerRef, baseClassName, title, slug, containerHelpIconPath, containerHelpIconAlt, 
    containerHelpTextTitle, containerHelpTextSlug, containerHelpBtnValue }) => {
    const [closedIndex, setClosedIndex] = useState<number>(0);
    const toggleItem = (index: number) => setClosedIndex(index);
    
    return (
        <div ref={containerRef} className={`rss-faq ${baseClassName}`}>
            <h2 className={`rss-faq__title ${baseClassName}__title font-28-48`}>{title}</h2>
            <p className={`rss-faq__slug ${baseClassName}__slug font-14-18`}>{slug}</p>
            <div className={`rss-faq__container ${baseClassName}__container`}>
                <div className={`rss-faq__container__faq-container ${baseClassName}__container__faq-container`}>
                    {items.map((item, index) => {
                        const isClosed = closedIndex === index;
                        const currentSlug = isClosed ? item.slug : "";
                        const currentIconPath = isClosed ? item.crossIconPath : item.plusIconPath;
                        const currentIconAlt = isClosed ? item.crossIconAlt : item.plusIconAlt;

                        const iconSrc = process.env.NODE_ENV === "production"
                            ? `${import.meta.env.BASE_URL}/${currentIconPath}`
                            : currentIconPath;

                        return (
                            <div
                                className={`rss-faq__container__faq-container__item ${baseClassName}__container__faq-container__item`}
                                key={index}
                                onClick={() => toggleItem(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={`rss-faq__container__faq-container__item__text-container ${baseClassName}__container__faq-container__item__text-container`}>
                                    <h4 className={`rss-faq__container__faq-container__item__text-container__title ${baseClassName}__container__faq-container__item__text-container__title font-16-20`}>{item.title}</h4>
                                    <p className={`rss-faq__container__faq-container__item__text-container__slug ${baseClassName}__container__faq-container__item__text-container__slug font-14-18`}>{currentSlug}</p>
                                </div>
                                <div className={`rss-faq__container__faq-container__item__icon-container ${baseClassName}__container__faq-container__item__icon-container`}>
                                    <img
                                        src={iconSrc}
                                        alt={currentIconAlt}
                                        className={`rss-faq__container__faq-container__item__icon-container__icon ${baseClassName}__container__faq-container__item__icon-container__icon`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={`rss-faq__container__help-container ${baseClassName}__container__help-container`}>
                    <div className={`rss-faq__container__help-container__ico-container ${baseClassName}__container__help-container__ico-container`}>
                        <img
                            src={
                                process.env.NODE_ENV === "production"
                                    ? `${import.meta.env.BASE_URL}/${containerHelpIconPath}`
                                    : containerHelpIconPath
                            }
                            alt={containerHelpIconAlt}
                            className={`rss-faq__container__help-container__ico-container__icon ${baseClassName}__container__help-container__ico-container__icon`}
                        />
                    </div>
                    <div className={`rss-faq__container__help-container__text-container ${baseClassName}__container__help-container__text-container`}>
                        <h4 className={`rss-faq__container__help-container__text-container__title ${baseClassName}__container__help-container__text-container__title font-18-24`}>{containerHelpTextTitle}</h4>
                        <p className={`rss-faq__container__help-container__text-container__slug ${baseClassName}__container__help-container__text-container__slug font-14-18`}>{containerHelpTextSlug}</p>
                    </div>
                    {
                        process.env.NODE_ENV === "production" ? (
                            <a href='/resume/#/contact#form'><input type="button" value={containerHelpBtnValue} className={`rss-faq__container__help-container__submit-btn ${baseClassName}__container__help-container__submit-btn`} /></a>
                        ) : (
                            <a href='/contact#form'><input type="button" value={containerHelpBtnValue} className={`rss-faq__container__help-container__submit-btn ${baseClassName}__container__help-container__submit-btn`} /></a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQUI;
