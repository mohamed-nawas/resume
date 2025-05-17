import Footer from "../../components/footer";
import Header from "../../components/header";
import { items as projects } from "../../data/projects";
import { items as articles } from "../../data/articles";
import { items as cases } from "../../data/case-studies";
import shuffleArray from "../../utils/array-shuffle";
import Works from "../../components/works";

function Detail() {
    const heroBgPath = 'images/order-uk-image-3.png';
    const works = shuffleArray([...projects, ...articles, ...cases]);
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = import.meta.env.BASE_URL;
    return (
        <>
            <Header />
            <section className="rss-works-detail">
                <div className="container-fluid">
                    <div className="rss-works-detail__hero-section" style={{ '--bg-detail-hero': `url('${isProd ? basePath + heroBgPath : heroBgPath}')` } as React.CSSProperties}>
                        <h2 className="rss-works-detail__hero-section__title font-38-58">Order UK</h2>
                        <p className="rss-works-detail__hero-section__slug font-28-48">E-Commerce | Fullstack</p>
                    </div>
                    <div className="rss-works-detail__overview-section">
                        <h3 className="rss-works-detail__overview-section__title font-18-24">Overview</h3>
                        <ul className="rss-works-detail__overview-section__about">
                            <li className="rss-works-detail__overview-section__about__role font-12-16"><strong>ROLE</strong> <span className="font-12-16">Fullstack Engineer</span></li>
                            <li className="rss-works-detail__overview-section__about__team-size font-12-16"><strong>TEAM SIZE</strong> <span className="font-12-16">Solo Project</span></li>
                            <li className="rss-works-detail__overview-section__about__tools font-12-16"><strong>TOOLS</strong>
                                <ul className="rss-works-detail__overview-section__about__tools__list">
                                    <li className="rss-works-detail__overview-section__about__tools__list__item font-12-16">React</li>
                                    <li className="rss-works-detail__overview-section__about__tools__list__item font-12-16">TypeScript</li>
                                    <li className="rss-works-detail__overview-section__about__tools__list__item font-12-16">Nodejs</li>
                                    <li className="rss-works-detail__overview-section__about__tools__list__item font-12-16">Figma</li>
                                    <li className="rss-works-detail__overview-section__about__tools__list__item font-12-16">AWS</li>
                                    <li className="rss-works-detail__overview-section__about__tools__list__item font-12-16">Docker</li>
                                </ul>
                            </li>
                        </ul>
                        <p className="rss-works-detail__overview-section__description font-14-18">Order UK is a convenient online service that helps customers in Sri Lanka order products directly from the United Kingdom. It simplifies the process of shopping for UK goods by allowing users to place orders through the website, after which the items are sourced, shipped, and delivered locally. The service is designed to make UK brands and products more accessible to Sri Lankan customers, saving them time and effort while offering trusted delivery. It’s ideal for those seeking international quality without the hassle of international logistics</p>
                    </div>
                    <div className="rss-works-detail__gallery-section">
                        <Works title="" slug="" items={[works]} />
                    </div>
                    <div className="rss-works-detail__details-section">
                        <h3 className="rss-works-detail__details-section__title font-18-24">Details</h3>
                        <div className="rss-works-detail__details-section__container">
                            <div className="rss-works-detail__details-section__container__problems-section">
                                <h5 className="rss-works-detail__details-section__container__problems-section__title font-14-18"><strong>Problems Solved</strong></h5>
                                <ul className="rss-works-detail__details-section__container__problems-section__list">
                                    <li className="rss-works-detail__details-section__container__problems-section__list__item font-12-16">Simplified the grocery ordering process</li>
                                    <li className="rss-works-detail__details-section__container__problems-section__list__item font-12-16">Improved accessibility for mobile users</li>
                                </ul>
                            </div>
                            <div className="rss-works-detail__details-section__container__decisions-section">
                                <h5 className="rss-works-detail__details-section__container__decisions-section__title font-14-18"><strong>Design Decisions</strong></h5>
                                <ul className="rss-works-detail__details-section__container__decisions-section__list">
                                    <li className="rss-works-detail__details-section__container__decisions-section__list__item font-12-16">Focused on a clean layout and prominent call to actions</li>
                                </ul>
                            </div>
                            <div className="rss-works-detail__details-section__container__challenges-section">
                                <h5 className="rss-works-detail__details-section__container__challenges-section__title font-14-18"><strong>Challenges</strong></h5>
                                <ul className="rss-works-detail__details-section__container__challenges-section__list">
                                    <li className="rss-works-detail__details-section__container__challenges-section__list__item font-12-16">Optimizing the UI for both desktop and mobile devices</li>
                                    <li className="rss-works-detail__details-section__container__challenges-section__list__item font-12-16">Created responsive layouts and conducted usability testing</li>
                                </ul>
                            </div>
                            <div className="rss-works-detail__details-section__container__outcomes-section">
                                <h5 className="rss-works-detail__details-section__container__outcomes-section__title font-14-18"><strong>Outcomes</strong></h5>
                                <ul className="rss-works-detail__details-section__container__outcomes-section__list">
                                    <li className="rss-works-detail__details-section__container__outcomes-section__list__item font-12-16">Decreased drop off rate</li>
                                    <li className="rss-works-detail__details-section__container__outcomes-section__list__item font-12-16">Increased conversion rate by 20%</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rss-works-detail__cta-section">
                        <div className="rss-works-detail__cta-section__btn-container">
                            <a target="_blank" href='https://mohamed-nawas.github.io/order-uk' className="rss-works-detail__cta-section__btn-container__btn font-14-18">Live Demo</a>
                        </div>
                        <div className="rss-works-detail__cta-section__btn-container rss-works-detail__cta-section__btn-container-shallow">
                            <a target="_blank" href='https://github.com/mohamed-nawas/order-uk' className="rss-works-detail__cta-section__btn-container-shallow__btn font-14-18">Repository</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Detail;