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

                    <div className="rss-portfolio__banner">
                        <img src={`${import.meta.env.BASE_URL}/icons/starrs-ico.png`} alt="Stars Icon" className="rss-portfolio__banner__ico" />
                        <div className="rss-portfolio__banner__content">
                            <h2 className="rss-portfolio__banner__content__title font-28-48">My Creative Portfolios</h2>
                            <p className="rss-portfolio__banner__content__slug font-14-20">Here's what some of my satisfied clients have to say about my work</p>
                        </div>
                        <DynamicGrid className="rss-portfolio__banner__list-container" gap={14}>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="rss-portfolio__banner__list-container__item"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.alt}
                                        className="rss-portfolio__banner__list-container__item__ico"
                                    />
                                    <p className="rss-portfolio__banner__list-container__item__content font-14-18">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </DynamicGrid>
                    </div>
                    <div className="rss-portfolio__contents-container">

                        <div className="rss-portfolio__contents-container__projects-container">
                            <div className="rss-portfolio__contents-container__projects-container__title-container">
                                <h3 className="font-18-24">Projects</h3>
                                <div className="rss-portfolio__contents-container__projects-container__title-container__arrow-container">arrows mid</div>
                            </div>
                            <div className="rss-portfolio__contents-container__projects-container__hr-line" />
                            <div className="rss-portfolio__contents-container__projects-container__items-container">
                                <div className="rss-portfolio__contents-container__projects-container__items-container__item">
                                    <h4 className="rss-portfolio__contents-container__projects-container__items-container__item__title font-16-20">Charity Website</h4>
                                    <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container">
                                        <img src={`${import.meta.env.BASE_URL}/images/charity-image-main.png`} alt="Charity Web Project Image" className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__image" />
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container">
                                            <div className="rss-portfolio__contents-container__projects-container__items-container__item__banner-image-container__expand-container__arrow" />
                                        </div>
                                    </div>
                                    <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container">
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image">
                                            <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image rss-portfolio__contents-container__projects-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/charity-image-sub.png`} alt="Charity Small Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__projects-container__arrows-container">
                                <div className="rss-portfolio__contents-container__projects-container__arrows-container__arrow rss-portfolio__contents-container__projects-container__arrows-container__arrow-left" />
                                <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container">
                                    <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container__item" />
                                    <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container__item rss-portfolio__contents-container__projects-container__arrows-container__line-container__item-active" />
                                    <div className="rss-portfolio__contents-container__projects-container__arrows-container__line-container__item" />
                                </div>
                                <div className="rss-portfolio__contents-container__projects-container__arrows-container__arrow rss-portfolio__contents-container__projects-container__arrows-container__arrow-right" />
                            </div>
                            <div className="rss-portfolio__contents-container__projects-container__view-btn">
                                <input type="button" value="View All Projects" />
                            </div>
                        </div>

                        <div className="rss-portfolio__contents-container__articles-container">
                            <div className="rss-portfolio__contents-container__articles-container__title-container">
                                <h3 className="font-18-24">Articles</h3>
                                <div className="rss-portfolio__contents-container__articles-container__title-container__arrow-container">arrows mid</div>
                            </div>
                            <div className="rss-portfolio__contents-container__articles-container__hr-line" />
                            <div className="rss-portfolio__contents-container__articles-container__items-container">
                                <div className="rss-portfolio__contents-container__articles-container__items-container__item">
                                    <h4 className="rss-portfolio__contents-container__articles-container__items-container__item__title font-16-20">Fit Fusion</h4>
                                    <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container">
                                        <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-main.png`} alt="Fit Fusion" className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__image" />
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container">
                                            <div className="rss-portfolio__contents-container__articles-container__items-container__item__banner-image-container__expand-container__arrow" />
                                        </div>
                                    </div>
                                    <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container">
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image">
                                            <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="Fit Fusion Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="Fit Fusion Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="Fit Fusion Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image rss-portfolio__contents-container__articles-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/fitfusion-image-sub.png`} alt="Fit Fusion Small Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__articles-container__arrows-container">
                                <div className="rss-portfolio__contents-container__articles-container__arrows-container__arrow rss-portfolio__contents-container__articles-container__arrows-container__arrow-left" />
                                <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container">
                                    <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container__item" />
                                    <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container__item rss-portfolio__contents-container__articles-container__arrows-container__line-container__item-active" />
                                    <div className="rss-portfolio__contents-container__articles-container__arrows-container__line-container__item" />
                                </div>
                                <div className="rss-portfolio__contents-container__articles-container__arrows-container__arrow rss-portfolio__contents-container__articles-container__arrows-container__arrow-right" />
                            </div>
                            <div className="rss-portfolio__contents-container__articles-container__view-btn">
                                <input type="button" value="View All Articles" />
                            </div>
                        </div>

                        <div className="rss-portfolio__contents-container__case-studies-container">
                            <div className="rss-portfolio__contents-container__case-studies-container__title-container">
                                <h3 className="font-18-24">Case Studies</h3>
                                <div className="rss-portfolio__contents-container__case-studies-container__title-container__arrow-container">arrows mid</div>
                            </div>
                            <div className="rss-portfolio__contents-container__case-studies-container__hr-line" />
                            <div className="rss-portfolio__contents-container__case-studies-container__items-container">
                                <div className="rss-portfolio__contents-container__case-studies-container__items-container__item">
                                    <h4 className="rss-portfolio__contents-container__case-studies-container__items-container__item__title font-16-20">Your Bank</h4>
                                    <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container">
                                        <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-main.png`} alt="Your Bank" className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__image" />
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container">
                                            <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__banner-image-container__expand-container__arrow" />
                                        </div>
                                    </div>
                                    <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container">
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image">
                                            <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                        </div>
                                        <div className="rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image rss-portfolio__contents-container__case-studies-container__items-container__item__image-list-container__image-inactive">
                                            <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rss-portfolio__contents-container__case-studies-container__arrows-container">
                                <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__arrow rss-portfolio__contents-container__case-studies-container__arrows-container__arrow-left" />
                                <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container">
                                    <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item" />
                                    <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item-active" />
                                    <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__line-container__item" />
                                </div>
                                <div className="rss-portfolio__contents-container__case-studies-container__arrows-container__arrow rss-portfolio__contents-container__case-studies-container__arrows-container__arrow-right" />
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