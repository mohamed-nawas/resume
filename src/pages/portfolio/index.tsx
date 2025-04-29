import Banner from "../../components/banner";
import DynamicGrid from "../../components/dynamic_grid";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { items } from "../../data/projects";

function Portfolio() {
    return (
        <>
            <Header />
            <section className="rss-portfolio">
                <div className="container-fluid">

                    <Banner iconPath="icons/starrs-ico.png" iconAlt="Stars Icon" contentTitle="My Creative Portfolios"  contentSlug="Here's what some of my satisfied clients have to say about my work">
                        <DynamicGrid className="rss-banner__list-container" gap={14}>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="rss-banner__list-container__item"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.alt}
                                        className="rss-banner__list-container__item__ico"
                                    />
                                    <p className="rss-banner__list-container__item__content font-14-18">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </DynamicGrid>
                    </Banner>

                    <div className="rss-portfolio__contents-container">

                        <div className="rss-portfolio__contents-container__projects-container">
                            <div className="rss-portfolio__contents-container__projects-container__title-container">
                                <h3 className="font-18-24">Projects</h3>
                                <div className="rss-portfolio__contents-container__projects-container__title-container__arrow-container">
                                    <div className="rss-portfolio__contents-container__projects-container__title-container__arrow-container__arrow rss-portfolio__contents-container__projects-container__title-container__arrow-container__arrow-left swiper-button-prev"></div>
                                    <div className="rss-portfolio__contents-container__projects-container__title-container__arrow-container__arrow rss-portfolio__contents-container__projects-container__title-container__arrow-container__arrow-right swiper-button-next"></div>
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__projects-container__hr-line" />

                            <div className="swiper projects-swiper">
                                {/* <div className="swiper-items-wrapper"></div> */}
                                <div className="rss-portfolio__contents-container__projects-container__items-container swiper-wrapper">
                                    <div className="rss-portfolio__contents-container__projects-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__projects-container__items-container__item__title font-16-20">Z-Aura Perfume</h4>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/aura-image-main.png`} alt="Aura Big Image" className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/aura-image-main.png' alt="Aura Big Image" className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/aura-image-sub.png`} alt="Aura Small Image" />
                                                    ) : (
                                                        <img src='images/aura-image-sub.png' alt="Aura Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/aura-image-sub.png`} alt="Aura Small Image" />
                                                    ) : (
                                                        <img src='images/aura-image-sub.png' alt="Aura Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/aura-image-sub.png`} alt="Aura Small Image" />
                                                    ) : (
                                                        <img src='images/aura-image-sub.png' alt="Aura Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/aura-image-sub.png`} alt="Aura Small Image" />
                                                    ) : (
                                                        <img src='images/aura-image-sub.png' alt="Aura Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rss-portfolio__contents-container__projects-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__projects-container__items-container__item__title font-16-20">Forhelp Charity</h4>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/charity-image-main.png`} alt="Charity Big Image" className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/charity-image-main.png' alt="Charity Big Image" className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                                    ) : (
                                                        <img src='images/charity-image-sub.png' alt="Charity Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                                    ) : (
                                                        <img src='images/charity-image-sub.png' alt="Charity Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                                    ) : (
                                                        <img src='images/charity-image-sub.png' alt="Charity Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                                    ) : (
                                                        <img src='images/charity-image-sub.png' alt="Charity Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rss-portfolio__contents-container__projects-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__projects-container__items-container__item__title font-16-20">Skill Bridge</h4>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/bridge-image-main.png`} alt="Bridge Big Image" className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/bridge-image-main.png' alt="Bridge Big Image" className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/bridge-image-sub.png`} alt="Bridge Small Image" />
                                                    ) : (
                                                        <img src='images/bridge-image-sub.png' alt="Bridge Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/bridge-image-sub.png`} alt="Bridge Small Image" />
                                                    ) : (
                                                        <img src='images/bridge-image-sub.png' alt="Bridge Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/bridge-image-sub.png`} alt="Bridge Small Image" />
                                                    ) : (
                                                        <img src='images/bridge-image-sub.png' alt="Bridge Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/bridge-image-sub.png`} alt="Bridge Small Image" />
                                                    ) : (
                                                        <img src='images/bridge-image-sub.png' alt="Bridge Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rss-portfolio__contents-container__projects-container__arrows-container">
                                <div className="rss-portfolio__contents-container__projects-container__arrows-container__arrow rss-portfolio__contents-container__projects-container__arrows-container__arrow-left projects-swiper-button-prev swiper-button-prev"></div>
                                <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container">
                                    <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container__item" />
                                    <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container__item rss-portfolio__contents-container__projects-container__arrows-container__line-container__item-active" />
                                    <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container__item" />
                                </div>
                                <div className="rss-portfolio__contents-container__projects-container__arrows-container__arrow rss-portfolio__contents-container__projects-container__arrows-container__arrow-right projects-swiper-button-next swiper-button-next"></div>
                            </div>
                            <div className="rss-portfolio__contents-container__projects-container__view-btn">
                                <input type="button" value="View All Projects" />
                            </div>
                        </div>

                        <div className="rss-portfolio__contents-container__articles-container">
                            <div className="rss-portfolio__contents-container__articles-container__title-container">
                                <h3 className="font-18-24">Articles</h3>
                                <div className="rss-portfolio__contents-container__articles-container__title-container__arrow-container">
                                    <div className="rss-portfolio__contents-container__articles-container__title-container__arrow-container__arrow rss-portfolio__contents-container__articles-container__title-container__arrow-container__arrow-left swiper-button-prev" />
                                    <div className="rss-portfolio__contents-container__articles-container__title-container__arrow-container__arrow rss-portfolio__contents-container__articles-container__title-container__arrow-container__arrow-right swiper-button-next" />
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__articles-container__hr-line" />
                            <div className="swiper articles-swiper">
                                <div className="rss-portfolio__contents-container__articles-container__items-container swiper-wrapper">
                                    <div className="rss-portfolio__contents-container__articles-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__articles-container__items-container__item__title font-16-20">Current Vandi</h4>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/vandi-image-main.png`} alt="Vandi Big Image" className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/vandi-image-main.png' alt="Vandi Big Image" className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/vandi-image-sub.png`} alt="Vandi Small Image" />
                                                    ) : (
                                                        <img src='images/vandi-image-sub.png' alt="Vandi Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/vandi-image-sub.png`} alt="Vandi Small Image" />
                                                    ) : (
                                                        <img src='images/vandi-image-sub.png' alt="Vandi Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/vandi-image-sub.png`} alt="Vandi Small Image" />
                                                    ) : (
                                                        <img src='images/vandi-image-sub.png' alt="Vandi Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/vandi-image-sub.png`} alt="Vandi Small Image" />
                                                    ) : (
                                                        <img src='images/vandi-image-sub.png' alt="Vandi Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rss-portfolio__contents-container__articles-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__articles-container__items-container__item__title font-16-20">Fit Fusion Gym</h4>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-main.png`} alt="FitFusion Big Image" className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/fitfusion-image-main.png' alt="FitFusion Big Image" className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="FitFusion Small Image" />
                                                    ) : (
                                                        <img src='images/fitfusion-image-sub.png' alt="FitFusion Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="FitFusion Small Image" />
                                                    ) : (
                                                        <img src='images/fitfusion-image-sub.png' alt="FitFusion Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="FitFusion Small Image" />
                                                    ) : (
                                                        <img src='images/fitfusion-image-sub.png' alt="FitFusion Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="FitFusion Small Image" />
                                                    ) : (
                                                        <img src='images/fitfusion-image-sub.png' alt="FitFusion Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rss-portfolio__contents-container__articles-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__articles-container__items-container__item__title font-16-20">DX Digital Agency</h4>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/dxdigital-image-main.png`} alt="DX Digital Big Image" className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/dxdigital-image-main.png' alt="DX Digital Big Image" className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/dxdigital-image-sub.png`} alt="DX Digital Small Image" />
                                                    ) : (
                                                        <img src='images/dxdigital-image-sub.png' alt="DX Digital Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/dxdigital-image-sub.png`} alt="DX Digital Small Image" />
                                                    ) : (
                                                        <img src='images/dxdigital-image-sub.png' alt="DX Digital Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/dxdigital-image-sub.png`} alt="DX Digital Small Image" />
                                                    ) : (
                                                        <img src='images/dxdigital-image-sub.png' alt="DX Digital Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/dxdigital-image-sub.png`} alt="DX Digital Small Image" />
                                                    ) : (
                                                        <img src='images/dxdigital-image-sub.png' alt="DX Digital Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__articles-container__arrows-container">
                                <div className="rss-portfolio__contents-container__articles-container__arrows-container__arrow rss-portfolio__contents-container__articles-container__arrows-container__arrow-left articles-swiper-button-prev swiper-button-prev"></div>
                                <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container">
                                    <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container__item" />
                                    <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container__item rss-portfolio__contents-container__articles-container__arrows-container__line-container__item-active" />
                                    <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container__item" />
                                </div>
                                <div className="rss-portfolio__contents-container__articles-container__arrows-container__arrow rss-portfolio__contents-container__articles-container__arrows-container__arrow-right articles-swiper-button-next swiper-button-next"></div>
                            </div>
                            <div className="rss-portfolio__contents-container__articles-container__view-btn">
                                <input type="button" value="View All Articles" />
                            </div>
                        </div>

                        <div className="rss-portfolio__contents-container__case-studies-container">
                            <div className="rss-portfolio__contents-container__case-studies-container__title-container">
                                <h3 className="font-18-24">Case Studies</h3>
                                <div className="rss-portfolio__contents-container__case-studies-container__title-container__arrow-container">
                                    <div className="rss-portfolio__contents-container__case-studies-container__title-container__arrow-container__arrow rss-portfolio__contents-container__case-studies-container__title-container__arrow-container__arrow-left swiper-button-prev" />
                                    <div className="rss-portfolio__contents-container__case-studies-container__title-container__arrow-container__arrow rss-portfolio__contents-container__case-studies-container__title-container__arrow-container__arrow-right swiper-button-next" />
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__case-studies-container__hr-line" />
                            <div className="swiper case-studies-swiper">
                                <div className="rss-portfolio__contents-container__case-studies-container__items-container swiper-wrapper">
                                    <div className="rss-portfolio__contents-container__case-studies-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__case-studies-container__items-container__item__title font-16-20">Little Learners</h4>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/learners-image-main.png`} alt="Little Learners Big Image" className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/learners-image-main.png' alt="Little Learners Big Image" className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                                                    ) : (
                                                        <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                                                    ) : (
                                                        <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                                                    ) : (
                                                        <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                                                    ) : (
                                                        <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rss-portfolio__contents-container__case-studies-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__case-studies-container__items-container__item__title font-16-20">Stream Vibe</h4>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-main.png`} alt="Stream Vibe Big Image" className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/streamvibe-image-main.png' alt="Stream Vibe Big Image" className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                                                    ) : (
                                                        <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                                                    ) : (
                                                        <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                                                    ) : (
                                                        <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                                                    ) : (
                                                        <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rss-portfolio__contents-container__case-studies-container__items-container__item swiper-slide">
                                        <h4 className="rss-portfolio__contents-container__case-studies-container__items-container__item__title font-16-20">Your Bank</h4>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-main.png`} alt="Your Bank Big Image" className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__image" />
                                                ) : (
                                                    <img src='images/yourbank-image-main.png' alt="Your Bank Big Image" className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__image" />
                                                )
                                            }
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container">
                                                <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container__arrow" />
                                            </div>
                                        </div>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container">
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                                    ) : (
                                                        <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                                    ) : (
                                                        <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                                    ) : (
                                                        <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                                                    )
                                                }
                                            </div>
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                                {
                                                    process.env.NODE_ENV === "production" ? (
                                                        <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                                    ) : (
                                                        <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__case-studies-container__arrows-container">
                                <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__arrow rss-portfolio__contents-container__case-studies-container__arrows-container__arrow-left case-studies-swiper-button-prev swiper-button-prev"></div>
                                <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container">
                                    <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item" />
                                    <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item-active" />
                                    <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item" />
                                </div>
                                <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__arrow rss-portfolio__contents-container__case-studies-container__arrows-container__arrow-right case-studies-swiper-button-next swiper-button-next"></div>
                            </div>
                            <div className="rss-portfolio__contents-container__case-studies-container__view-btn">
                                <input type="button" value="View All Case Studies" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Portfolio;