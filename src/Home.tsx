import Header from "./components/header";
import Footer from "./components/footer";

function Home() {

  return (
    <>
      <Header />
      <section className="rss-home">
        <div className="container-fluid">

          <div className="rss-home__details-section">
            <div className="rss-home__details-section__banner-image" />
            <div className="rss-home__details-section__content-container">
              <h4 className="rss-home__details-section__content-container__slug font-18-28">Hello There &#129303;</h4>
              <h2 className="rss-home__details-section__content-container__title font-38-58">Nawas Welcome's You!</h2>
              <p className="rss-home__details-section__content-container__content font-14-18">I am a passionate and experienced web designer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action</p>
              <div className="rss-home__details-section__content-container__contact-container">
                <div className="rss-home__details-section__content-container__contact-container__btn">
                  <a href="#call">
                    <span className="glyphicon glyphicon-earphone"></span>
                    <p className="font-14-18">Book-Call</p>
                  </a>
                </div>
                <a href="/projects" className="rss-home__details-section__content-container__contact-container__link font-14-18">View Portfolio</a>
              </div>
              <div className="rss-home__details-section__content-container__status-container">
                <div className="rss-home__details-section__content-container__status-container__item-container rss-home__details-section__content-container__status-container__item-container-full">
                  <h6 className="rss-home__details-section__content-container__status-container__item-container__count">55<span className="rss-home__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                  <p className="rss-home__details-section__content-container__status-container__item-container__text font-14-18">Completed Projects</p>
                </div>
                <div className="rss-home__details-section__content-container__status-container__item-container">
                  <h6 className="rss-home__details-section__content-container__status-container__item-container__count">20<span className="rss-home__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                  <p className="rss-home__details-section__content-container__status-container__item-container__text font-14-18">Happy Customers</p>
                </div>
                <div className="rss-home__details-section__content-container__status-container__item-container">
                  <h6 className="rss-home__details-section__content-container__status-container__item-container__count">08<span className="rss-home__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                  <p className="rss-home__details-section__content-container__status-container__item-container__text font-14-18">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rss-home__skills-section">
            <div className="rss-home__skills-section__heading-container">
              <h3 className="rss-home__skills-section__heading-container__title font-28-48">Creative Skills</h3>
              <p className="rss-home__skills-section__heading-container__slug font-14-18">As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life</p>
            </div>
            <div className="rss-home__skills-section__list-container">
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/web-design-ico.png` : 'icons/web-design-ico.png'} alt="web-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Web Design Principles</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/ui-design-ico.png` : 'icons/ui-design-ico.png'} alt="ui-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">User Interface - UI Design</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/ux-design-ico.png` : 'icons/ux-design-ico.png'} alt="ux-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">User Experience - UX Design</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Understanding of user behavior and psychology to design seamless and enjoyable user experiences that meet user needs and goals.</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/responsive-design-ico.png` : 'icons/responsive-design-ico.png'} alt="responsive-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Responsive Web Design</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/wireframing-ico.png` : 'icons/wireframing-ico.png'} alt="wireframing" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Wireframing and Prototyping</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/optimization-ico.png` : 'icons/optimization-ico.png'} alt="optimization" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Mobile-Friendly Optimization</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home;
