import Banner from "../../components/banner";
import DynamicGrid from "../../components/dynamic_grid";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { items } from "../../data/banner-projects";
import { items as projects } from "../../data/completed-projects";
import { items as articles } from "../../data/ongoing-projects";
import { items as blogs } from "../../data/blogs";
import Works from "../../components/works";
import Blogs from "../../components/blogs";

function Portfolio() {
    return (
        <>
            <Header />
            <section className="rss-portfolio">
                <div className="container-fluid">

                    <Banner iconPath="icons/starrs-ico.png" iconAlt="Stars Icon" contentTitle="My Works"  contentSlug="Some of my best works and technical blogs">
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
                        <Works baseClassName='' swiperBaseClassName='' title="Completed Projects" slug="" items={[projects]} />
                        <Works baseClassName='' swiperBaseClassName='' title="Ongoing Projects" slug="" items={[articles]} />
                        <Blogs blogs={blogs} />
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Portfolio;