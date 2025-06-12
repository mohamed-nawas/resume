import { useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ImgSlider from "../../components/img-slider";
import Projects from "./data";

function Detail() {
    const location = useLocation();
    const id = location.search.startsWith('?') ? location.search.slice(1) : location.search;
    const basePath = import.meta.env.BASE_URL;

    const project = Projects[id];
    return (
        <>
            <Header />
            <section className="rss-works-detail">
                <div className="container-fluid">
                    <div className="rss-works-detail__hero-section" style={{ '--bg-detail-hero': `url('${basePath + project.mainImg}')` } as React.CSSProperties}>
                        <h2 className="rss-works-detail__hero-section__title font-38-58">{project.title}</h2>
                        <p className="rss-works-detail__hero-section__slug font-28-48">{project.slug}</p>
                    </div>
                    <div className="rss-works-detail__overview-section">
                        <h3 className="rss-works-detail__overview-section__title font-18-24">Overview</h3>
                        <ul className="rss-works-detail__overview-section__about">
                            <li className="rss-works-detail__overview-section__about__role font-12-16"><strong>ROLE</strong> <span className="font-12-16">{project.role}</span></li>
                            <li className="rss-works-detail__overview-section__about__team-size font-12-16"><strong>TEAM SIZE</strong> <span className="font-12-16">{project.teamSize}</span></li>
                            <li className="rss-works-detail__overview-section__about__tools font-12-16"><strong>TOOLS</strong>
                                <ul className="rss-works-detail__overview-section__about__tools__list">
                                    {project.tools.map((tool, index) => (
                                        <li className="rss-works-detail__overview-section__about__tools__list__item font-12-16" key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <p className="rss-works-detail__overview-section__description font-14-18">{project.description}</p>
                    </div>
                    <div className="rss-works-detail__gallery-section">
                        <h3 className="rss-works-detail__gallery-section__title font-18-24">Gallery</h3>
                        <ImgSlider data={project.images} />
                    </div>
                    <div className="rss-works-detail__details-section">
                        <h3 className="rss-works-detail__details-section__title font-18-24">Details</h3>
                        <div className="rss-works-detail__details-section__container">
                            <div className="rss-works-detail__details-section__container__problems-section">
                                <h5 className="rss-works-detail__details-section__container__problems-section__title font-14-18"><strong>Problems Solved</strong></h5>
                                <ul className="rss-works-detail__details-section__container__problems-section__list">
                                    {project.problems.map((problem, index) => (
                                        <li className="rss-works-detail__details-section__container__problems-section__list__item font-12-16" key={index}>{problem}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rss-works-detail__details-section__container__decisions-section">
                                <h5 className="rss-works-detail__details-section__container__decisions-section__title font-14-18"><strong>Design Decisions</strong></h5>
                                <ul className="rss-works-detail__details-section__container__decisions-section__list">
                                    {project.decisions.map((decision, index) => (
                                        <li className="rss-works-detail__details-section__container__decisions-section__list__item font-12-16" key={index}>{decision}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rss-works-detail__details-section__container__challenges-section">
                                <h5 className="rss-works-detail__details-section__container__challenges-section__title font-14-18"><strong>Challenges</strong></h5>
                                <ul className="rss-works-detail__details-section__container__challenges-section__list">
                                    {project.challenges.map((challenge, index) => (
                                        <li className="rss-works-detail__details-section__container__challenges-section__list__item font-12-16" key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rss-works-detail__details-section__container__outcomes-section">
                                <h5 className="rss-works-detail__details-section__container__outcomes-section__title font-14-18"><strong>Outcomes</strong></h5>
                                <ul className="rss-works-detail__details-section__container__outcomes-section__list">
                                    {project.outcomes.map((outcome, index) => (
                                        <li className="rss-works-detail__details-section__container__outcomes-section__list__item font-12-16" key={index}>{outcome}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rss-works-detail__cta-section">
                        <div className="rss-works-detail__cta-section__btn-container">
                            <a target="_blank" href={project.demo} className="rss-works-detail__cta-section__btn-container__btn font-14-18">Live Demo</a>
                        </div>
                        <div className="rss-works-detail__cta-section__btn-container rss-works-detail__cta-section__btn-container-shallow" title={!project.repo ? 'Repository is not publicly available' : ''}>
                            <a target="_blank" href={project.repo || '#'} className="rss-works-detail__cta-section__btn-container-shallow__btn font-14-18">Repository{!project.repo && <span style={{ marginLeft: '5px' }}>🚫</span>}</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Detail;