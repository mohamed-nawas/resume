import Banner from "../../components/banner";
import DynamicGrid from "../../components/dynamic_grid";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { items } from "../../data/banner-projects";
import { items as projects } from "../../data/projects";
import { items as articles } from "../../data/articles";
import { items as cases } from "../../data/case-studies";
import Works from "../../components/works";

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
                        <Works title="Projects" slug="" items={[projects]} />
                        <Works title="Articles" slug="" items={[articles]} />
                        <Works title="Case Studies" slug="" items={[cases]} />
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Portfolio;