import Banner from "../../components/banner";
import DynamicGrid from "../../components/dynamic_grid";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Slider from "../../components/slider";
import { items } from "../../data/banner-projects";
import { items as projects } from "../../data/projects";
import { items as articles } from "../../data/articles";
import { items as cases } from "../../data/case-studies";

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
                        <Slider data={projects} sliderTitle="Projects" sliderBtnText="View All Projects" swiperClassName="projects-swiper" />
                        <Slider data={articles} sliderTitle="Articles" sliderBtnText="View All Articles" swiperClassName="articles-swiper" />
                        <Slider data={cases} sliderTitle="Case Studies" sliderBtnText="View All Case Studies" swiperClassName="case-studies-swiper" />
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Portfolio;