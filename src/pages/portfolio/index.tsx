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

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Portfolio;