




function About() {
    return (
        <section className="rss-about">
            <div className="container-fluid">



                <div className="rss-about__details-section">
                    <img src={`${import.meta.env.BASE_URL}/icons/profile-image__mobile.png`} alt="Profile Image" className="rss-about__details-section__banner-image" />
                    {/* <div className="rss-about__details-section__banner-image" /> */}
                    <div className="rss-about__details-section__content-container">
                        <h4 className="rss-about__details-section__content-container__slug font-14-24">Welcome to the world of captivating web design!</h4>
                        <h2 className="rss-about__details-section__content-container__title font-38-58">Mohamed Nawas</h2>
                        <p className="rss-about__details-section__content-container__content font-14-18">A skilled web designer with a passion for creating visually stunning and user-friendly websites. With a keen eye for detail and a commitment to excellence, I specialize in crafting online experiences that leave a lasting impression. From concept to launch, I collaborate closely with clients to bring their visions to life and ensure their digital presence stands out from the crowd. With my expertise and dedication, I am here to help you elevate your online presence and make a powerful impact in the digital landscape.</p>
                        <div className="rss-about__details-section__content-container__status-container">
                            <div className="rss-about__details-section__content-container__status-container__item-container">
                                <h6 className="rss-about__details-section__content-container__status-container__item-container__count">55<span className="rss-about__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
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



            </div>
        </section>
    )
}

export default About;
