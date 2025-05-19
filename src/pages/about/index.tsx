import Footer from "../../components/footer";
import Header from "../../components/header";

function About() {
    return (
        <>
            <Header />
            <section className="rss-about">
                <div className="container-fluid">


                    <div className="rss-about__details-section">
                        <div className="rss-about__details-section__banner-image" />
                        <div className="rss-about__details-section__content-container">
                            <h4 className="rss-about__details-section__content-container__slug font-14-24">Crafting Robust and Scalable Web Solutions</h4>
                            <h2 className="rss-about__details-section__content-container__title font-38-58">Mohamed Nawaz</h2>
                            <p className="rss-about__details-section__content-container__content font-14-18">A versatile web developer passionate about building efficient, scalable, and high-quality web applications. With a strong foundation in both front-end and back-end technologies, I am committed to delivering robust solutions tailored to meet specific needs. I thrive on solving complex challenges and collaborating effectively to bring digital visions to life</p>
                            <div className="rss-about__details-section__content-container__status-container">
                                <div className="rss-about__details-section__content-container__status-container__item-container">
                                    <h6 className="rss-about__details-section__content-container__status-container__item-container__count">25<span className="rss-about__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                                    <p className="rss-about__details-section__content-container__status-container__item-container__text font-14-18">Completed Projects</p>
                                </div>
                                <div className="rss-about__details-section__content-container__status-container__hr-line" />
                                <div className="rss-about__details-section__content-container__status-container__item-container">
                                    <h6 className="rss-about__details-section__content-container__status-container__item-container__count">10<span className="rss-about__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                                    <p className="rss-about__details-section__content-container__status-container__item-container__text font-14-18">Happy Customers</p>
                                </div>
                                <div className="rss-about__details-section__content-container__status-container__hr-line" />
                                <div className="rss-about__details-section__content-container__status-container__item-container">
                                    <h6 className="rss-about__details-section__content-container__status-container__item-container__count">04<span className="rss-about__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                                    <p className="rss-about__details-section__content-container__status-container__item-container__text font-14-18">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="rss-about__timeline-section">
                        <div className="rss-about__timeline-section__heading-container">
                            <h2 className="rss-about__timeline-section__heading-container__title font-28-48">Key Milestones</h2>
                            <p className="rss-about__timeline-section__heading-container__content font-14-18">The journey to becoming a well-rounded developer has been marked by continuous learning and diverse experiences. Here are some key milestones that have shaped my skills and expertise</p>
                        </div>
                        <div className="rss-about__timeline-section__content-container">

                            <p className="rss-about__timeline-section__content-container__time font-16-20">Now</p>
                            <div className="rss-about__timeline-section__content-container__line" />
                            <h6 className="rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-1 font-16-20">Continued Growth and Specialization</h6>
                            <div className="rss-about__timeline-section__content-container__line-styled" />
                            <div className="rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-1">
                                <p className="rss-about__timeline-section__content-container__details-container__content font-14-18">Continuing on my path of growth and exploration, I've expanded my skill set by delving into cloud technologies (AWS), advanced front-end frameworks (TypeScript). I'm focused on building scalable microservices, performant single-page applications and expanding my knowledge in the area of <span className="rss-about__timeline-section__content-container__details-container__content-strong">Software Engineering</span></p>
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/icons/timeline_purple-ico.png`} alt="Timeline Purple" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    ) : (
                                        <img src='icons/timeline_purple-ico.png' alt="Timeline Purple" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    )
                                }
                            </div>

                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-green" />
                            <p className="rss-about__timeline-section__content-container__time font-16-20">2024</p>
                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-green" />
                            <h6 className="rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-2 font-16-20">Maytech Technologies Pvt Ltd</h6>
                            <div className="rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-green" />
                            <div className="rss-about__timeline-section__content-container__details-container-left rss-about__timeline-section__content-container__details-container-left-1">
                                <p className="rss-about__timeline-section__content-container__details-container__content font-14-18">At <span className="rss-about__timeline-section__content-container__details-container__content-strong">Maytech</span>, I was involved in building and maintaing front-end and CMS based web applications with React for their clients while also gaining experience on handling projects fully from planning to delivery</p>
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/icons/timeline_green-ico.png`} alt="Timeline Green" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    ) : (
                                        <img src='icons/timeline_green-ico.png' alt="Timeline Green" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    )
                                }
                            </div>

                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-yellow" />
                            <p className="rss-about__timeline-section__content-container__time font-16-20">2022</p>
                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-yellow" />
                            <h6 className="rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-3 font-16-20">Swivel Tech Pvt Ltd</h6>
                            <div className="rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-yellow" />
                            <div className="rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-2">
                                <p className="rss-about__timeline-section__content-container__details-container__content font-14-18">During my time at <span className="rss-about__timeline-section__content-container__details-container__content-strong">Swivel Tech</span>, I focused on building Restful APIs using Java and Spring Boot with microservice architectures, was able to gain hands on experience on industry best practices, tools and processes to building robust and scalable applications</p>
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/icons/timeline_yellow-ico.png`} alt="Timeline Yellow" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    ) : (
                                        <img src='icons/timeline_yellow-ico.png' alt="Timeline Yellow" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    )
                                }
                            </div>

                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-orange" />
                            <p className="rss-about__timeline-section__content-container__time font-16-20">2022</p>
                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-orange" />
                            <h6 className="rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-4 font-16-20">Graduation</h6>
                            <div className="rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-orange" />
                            <div className="rss-about__timeline-section__content-container__details-container-left rss-about__timeline-section__content-container__details-container-left-2">
                                <p className="rss-about__timeline-section__content-container__details-container__content font-14-18">Graduated in <span className="rss-about__timeline-section__content-container__details-container__content-strong">Information and Communication Engineering</span> from <span className="rss-about__timeline-section__content-container__details-container__content-strong">SLTC Research University</span>, This academic foundation provided me with a strong understanding of skills like determination, persistence, data structures and algorithms, etc</p>
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/icons/timeline_orange-ico.png`} alt="Timeline Orange" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    ) : (
                                        <img src='icons/timeline_orange-ico.png' alt="Timeline Orange" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    )
                                }
                            </div>

                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-pink" />
                            <p className="rss-about__timeline-section__content-container__time font-16-20">2017</p>
                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-pink" />
                            <h6 className="rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-5 font-16-20">Freelancing</h6>
                            <div className="rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-pink" />
                            <div className="rss-about__timeline-section__content-container__details-container-right rss-about__timeline-section__content-container__details-container-right-3">
                                <p className="rss-about__timeline-section__content-container__details-container__content font-14-18">As a freelanceer, I undertook various projects involving graphic design, data entry, digital marketing, social media handling, as well as some small development tasks, These experiences honed my skills in these areas as well as things like client communication, project management, and independent problem solving<span className="rss-about__timeline-section__content-container__details-container__content-strong"></span></p>
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/icons/timeline_pink-ico.png`} alt="Timeline Pink" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    ) : (
                                        <img src='icons/timeline_pink-ico.png' alt="Timeline Pink" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    )
                                }
                            </div>

                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-blue" />
                            <p className="rss-about__timeline-section__content-container__time font-16-20">2016</p>
                            <div className="rss-about__timeline-section__content-container__line rss-about__timeline-section__content-container__line-blue" />
                            <h6 className="rss-about__timeline-section__content-container__title rss-about__timeline-section__content-container__title-last font-16-20">Foundations</h6>
                            <div className="rss-about__timeline-section__content-container__line-styled rss-about__timeline-section__content-container__line-styled-blue" />
                            <div className="rss-about__timeline-section__content-container__details-container-top">
                                <div>
                                    <h6 className="rss-about__timeline-section__content-container__details-container-top__title font-16-20">Foundations</h6>
                                    <p className="rss-about__timeline-section__content-container__details-container__content font-14-18">My intial journey into development involved building a strong foundation in the core technologies like HTML, CSS, and JS. This stage was crucial for understanding key foundations of digitalization and development<span className="rss-about__timeline-section__content-container__details-container__content-strong"></span></p>
                                </div>
                                {
                                    process.env.NODE_ENV === "production" ? (
                                        <img src={`${import.meta.env.BASE_URL}/icons/timeline_blue-ico.png`} alt="Timeline Blue" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    ) : (
                                        <img src='icons/timeline_blue-ico.png' alt="Timeline Blue" className="rss-about__timeline-section__content-container__details-container__ico" />
                                    )
                                }
                            </div>

                        </div>
                    </div>


                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;