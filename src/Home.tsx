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

          <div className="rss-home__benefits-section">
            <div className="rss-home__benefits-section__heading-container">
              <h3 className="rss-home__benefits-section__heading-container__title font-28-48">Benefits</h3>
              <p className="rss-home__benefits-section__heading-container__slug font-14-18">By choosing my web design service, you'll enjoy the following benefits</p>
            </div>
            <div className="rss-home__benefits-section__list-container">
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Customized Designs Tailored to Your Brand</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand's personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Creative Excellence that Captivates Visitors</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand's credibility and professionalism.</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">User-Centric Approach for Optimal Experience</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Mobile-Friendly Designs for Broad Accessibilit</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Expertise in Cutting-Edge Technologies</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.</p>
              </div>
            </div>
          </div>

          <div className="rss-home__portfolio-section">
            <h3 className="rss-home__portfolio-section__title font-28-48">My Works</h3>
            <p className="rss-home__portfolio-section__slug font-14-18">Here's what some of my satisfied clients have to say about my work</p>
            <div className="swiper works-swiper">
              <div className="rss-home__portfolio-section__items-container swiper-wrapper">
                <div className="rss-home__portfolio-section__items-container__item swiper-slide">
                  <h4 className="rss-home__portfolio-section__items-container__item__title font-16-20">Little Learners</h4>
                  <div className="rss-home__portfolio-section__items-container__item__banner-image-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/images/learners-image-main.png`} alt="Little Learners Big Image" className="rss-home__portfolio-section__items-container__item__banner-image-container__image" />
                      ) : (
                        <img src='images/learners-image-main.png' alt="Little Learners Big Image" className="rss-home__portfolio-section__items-container__item__banner-image-container__image" />
                      )
                    }
                    <div className="rss-home__portfolio-section__items-container__item__banner-image-container__expand-container">
                      <div className="rss-home__portfolio-section__items-container__item__banner-image-container__expand-container__arrow" />
                    </div>
                  </div>
                  <div className="rss-home__portfolio-section__items-container__item__image-list-container">
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                        ) : (
                          <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                        ) : (
                          <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                        ) : (
                          <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/learners-image-sub.png`} alt="Little Learners Small Image" />
                        ) : (
                          <img src='images/learners-image-sub.png' alt="Little Learners Small Image" />
                        )
                      }
                    </div>
                  </div>
                </div>

                <div className="rss-home__portfolio-section__items-container__item swiper-slide">
                  <h4 className="rss-home__portfolio-section__items-container__item__title font-16-20">Stream Vibe</h4>
                  <div className="rss-home__portfolio-section__items-container__item__banner-image-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-main.png`} alt="Stream Vibe Big Image" className="rss-home__portfolio-section__items-container__item__banner-image-container__image" />
                      ) : (
                        <img src='images/streamvibe-image-main.png' alt="Stream Vibe Big Image" className="rss-home__portfolio-section__items-container__item__banner-image-container__image" />
                      )
                    }
                    <div className="rss-home__portfolio-section__items-container__item__banner-image-container__expand-container">
                      <div className="rss-home__portfolio-section__items-container__item__banner-image-container__expand-container__arrow" />
                    </div>
                  </div>
                  <div className="rss-home__portfolio-section__items-container__item__image-list-container">
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                        ) : (
                          <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                        ) : (
                          <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                        ) : (
                          <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/streamvibe-image-sub.png`} alt="Stream Vibe Small Image" />
                        ) : (
                          <img src='images/streamvibe-image-sub.png' alt="Stream Vibe Small Image" />
                        )
                      }
                    </div>
                  </div>
                </div>

                <div className="rss-home__portfolio-section__items-container__item swiper-slide">
                  <h4 className="rss-home__portfolio-section__items-container__item__title font-16-20">Your Bank</h4>
                  <div className="rss-home__portfolio-section__items-container__item__banner-image-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-main.png`} alt="Your Bank Big Image" className="rss-home__portfolio-section__items-container__item__banner-image-container__image" />
                      ) : (
                        <img src='images/yourbank-image-main.png' alt="Your Bank Big Image" className="rss-home__portfolio-section__items-container__item__banner-image-container__image" />
                      )
                    }
                    <div className="rss-home__portfolio-section__items-container__item__banner-image-container__expand-container">
                      <div className="rss-home__portfolio-section__items-container__item__banner-image-container__expand-container__arrow" />
                    </div>
                  </div>
                  <div className="rss-home__portfolio-section__items-container__item__image-list-container">
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                        ) : (
                          <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                        ) : (
                          <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                        ) : (
                          <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                        )
                      }
                    </div>
                    <div className="rss-home__portfolio-section__items-container__item__image-list-container__image rss-home__portfolio-section__items-container__item__image-list-container__image-inactive">
                      {
                        process.env.NODE_ENV === "production" ? (
                          <img src={`${import.meta.env.BASE_URL}/images/yourbank-image-sub.png`} alt="Your Bank Small Image" />
                        ) : (
                          <img src='images/yourbank-image-sub.png' alt="Your Bank Small Image" />
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rss-home__portfolio-section__arrows-container">
              <div className="rss-home__portfolio-section__arrows-container__arrow rss-home__portfolio-section__arrows-container__arrow-left works-swiper-button-prev swiper-button-prev"></div>
              <div className="rss-home__portfolio-section__arrows-container__line-container">
                <div className="rss-home__portfolio-section__arrows-container__line-container__item" />
                <div className="rss-home__portfolio-section__arrows-container__line-container__item rss-portfolio__contenthome__portfolio-section__line-container__item-active" />
                <div className="rss-home__portfolio-section__arrows-container__line-container__item" />
              </div>
              <div className="rss-home__portfolio-section__arrows-container__arrow rss-home__portfolio-section__arrows-container__arrow-right works-swiper-button-next swiper-button-next"></div>
            </div>
            <div className="rss-home__portfolio-section__view-btn">
              <input type="button" value="View All" />
            </div>
          </div>

          <div className="rss-home__review-section">
            <h3 className="rss-home__review-section__title font-38-48">What My Clients say About Me</h3>
            <p className="rss-home__review-section__slug font-16-18">Here's what some of my satisfied clients have to say about my work</p>
            <div className="rss-home__review-section__total-container">
              <h6 className="font-16-20">37 Total Reviews</h6>
              <div className="rss-home__review-section__total-container__arrow-container">
                <div className="rss-home__review-section__total-container__arrow-container__arrow rss-home__review-section__total-container__arrow-container__arrow-left swiper-button-prev" />
                <div className="rss-home__review-section__total-container__arrow-container__arrow rss-home__review-section__total-container__arrow-container__arrow-right swiper-button-next" />
              </div>
            </div>
            <div className="rss-home__review-section__hr-line" />
            <div className="swiper review-swiper">
              <div className="rss-home__review-section__review-items-container swiper-wrapper">
                <div className="rss-home__review-section__review-items-container__item swiper-slide">
                  <div className="rss-home__review-section__review-items-container__item__header-container">
                    <div className="rss-home__review-section__review-items-container__item__header-container__info-container">
                      <h6 className="rss-home__review-section__review-items-container__item__header-container__info-container__title font-16-20">Sarah Thompson</h6>
                      <p className="rss-home__review-section__review-items-container__item__header-container__info-container__slug font-14-18">produce-ui.com</p>
                    </div>
                    <div className="rss-home__review-section__review-items-container__item__header-container__profile-container">
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/linkedin-filled-ico.png`} alt="Linkedin Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/linkedin-filled-ico.png' alt="Linkedin Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/facebook-filled-ico.png`} alt="Facebook Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/facebook-filled-ico.png' alt="Facebook Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/twitter-filled-ico.png`} alt="Twitter Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/twitter-filled-ico.png' alt="Twitter Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <p className="rss-home__review-section__review-items-container__item__content font-16-18">Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence.</p>
                </div>
                <div className="rss-home__review-section__review-items-container__item swiper-slide">
                  <div className="rss-home__review-section__review-items-container__item__header-container">
                    <div className="rss-home__review-section__review-items-container__item__header-container__info-container">
                      <h6 className="rss-home__review-section__review-items-container__item__header-container__info-container__title font-16-20">Emily Roberts</h6>
                      <p className="rss-home__review-section__review-items-container__item__header-container__info-container__slug font-14-18">produce-ui.com</p>
                    </div>
                    <div className="rss-home__review-section__review-items-container__item__header-container__profile-container">
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/linkedin-filled-ico.png`} alt="Linkedin Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/linkedin-filled-ico.png' alt="Linkedin Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/facebook-filled-ico.png`} alt="Facebook Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/facebook-filled-ico.png' alt="Facebook Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/twitter-filled-ico.png`} alt="Twitter Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/twitter-filled-ico.png' alt="Twitter Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <p className="rss-home__review-section__review-items-container__item__content font-16-18">I am thrilled with the website that Jeffery Cannon designed for my business. His ability to translate my vision into a visually stunning and user-friendly website was impressive. Jeffery's expertise in web design and user experience truly shines through in his work. He was responsive, professional, and delivered the project on time. I couldn't be happier with the outcome and highly recommend Jeffery to anyone in need of a top-notch web designer.</p>
                </div>
                <div className="rss-home__review-section__review-items-container__item swiper-slide">
                  <div className="rss-home__review-section__review-items-container__item__header-container">
                    <div className="rss-home__review-section__review-items-container__item__header-container__info-container">
                      <h6 className="rss-home__review-section__review-items-container__item__header-container__info-container__title font-16-20">Laura Adams</h6>
                      <p className="rss-home__review-section__review-items-container__item__header-container__info-container__slug font-14-18">produce-ui.com</p>
                    </div>
                    <div className="rss-home__review-section__review-items-container__item__header-container__profile-container">
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/linkedin-filled-ico.png`} alt="Linkedin Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/linkedin-filled-ico.png' alt="Linkedin Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/facebook-filled-ico.png`} alt="Facebook Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/facebook-filled-ico.png' alt="Facebook Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                      <div className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container">
                        {
                          process.env.NODE_ENV === "production" ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/twitter-filled-ico.png`} alt="Twitter Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          ) : (
                            <img src='icons/twitter-filled-ico.png' alt="Twitter Icon" className="rss-home__review-section__review-items-container__item__header-container__profile-container__item-container__item" />
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <p className="rss-home__review-section__review-items-container__item__content font-16-18">I had the pleasure of collaborating with Jeffery Cannon on a web design project, and I am beyond impressed with the results. Jeffery's creativity and technical expertise transformed our website into a visually stunning and highly functional platform. His understanding of user experience design and attention to detail made a significant impact on our website's performance and user engagement. Jeffery's professionalism, timely delivery.</p>
                </div>
              </div>
            </div>
            <div className="rss-home__review-section__arrows-container">
              <div className="rss-home__review-section__arrows-container__arrow rss-home__review-section__arrows-container__arrow-left review-swiper-button-prev swiper-button-prev"></div>
              <div className="rss-home__review-section__arrows-container__line-container">
                <div className="rss-home__review-section__arrows-container__line-container__item" />
                <div className="rss-home__review-section__arrows-container__line-container__item rss-home__review-section__arrows-container__line-container__item-active" />
                <div className="rss-home__review-section__arrows-container__line-container__item" />
              </div>
              <div className="rss-home__review-section__arrows-container__arrow rss-home__review-section__arrows-container__arrow-right review-swiper-button-next swiper-button-next"></div>
            </div>
          </div>

          <div className="rss-home__faq-section">
            <h2 className="rss-home__faq-section__title font-28-48">Frequently Asked Questions</h2>
            <p className="rss-home__faq-section__slug font-14-18">Here are answers to some common questions</p>
            <div className="rss-home__faq-section__container">
              <div className="rss-home__faq-section__container__faq-container">
                <div className="rss-home__faq-section__container__faq-container__item">
                  <div className="rss-home__faq-section__container__faq-container__item__text-container">
                    <h4 className="rss-home__faq-section__container__faq-container__item__text-container__title active font-16-20">Can you work with clients remotely?</h4>
                    <p className="rss-home__faq-section__container__faq-container__item__text-container__slug font-14-18">Absolutely!. I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools. I ensure seamless collaboration regardless of geographical location.</p>
                  </div>
                  <div className="rss-home__faq-section__container__faq-container__item__icon-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/icons/cross-ico.png`} alt="Cross Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      ) : (
                        <img src='icons/cross-ico.png' alt="Cross Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      )
                    }
                  </div>
                </div>
                <div className="rss-home__faq-section__container__faq-container__item">
                  <div className="rss-home__faq-section__container__faq-container__item__text-container">
                    <h4 className="rss-home__faq-section__container__faq-container__item__text-container__title font-16-20">How long does it typically take to complete a web design project?</h4>
                  </div>
                  <div className="rss-home__faq-section__container__faq-container__item__icon-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      ) : (
                        <img src='icons/plus-ico.png' alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      )
                    }
                  </div>
                </div>
                <div className="rss-home__faq-section__container__faq-container__item">
                  <div className="rss-home__faq-section__container__faq-container__item__text-container">
                    <h4 className="rss-home__faq-section__container__faq-container__item__text-container__title font-16-20">Do you offer website maintenance services?</h4>
                  </div>
                  <div className="rss-home__faq-section__container__faq-container__item__icon-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      ) : (
                        <img src='icons/plus-ico.png' alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      )
                    }
                  </div>
                </div>
                <div className="rss-home__faq-section__container__faq-container__item">
                  <div className="rss-home__faq-section__container__faq-container__item__text-container">
                    <h4 className="rss-home__faq-section__container__faq-container__item__text-container__title font-16-20">Can you optimize my website for search engines?</h4>
                  </div>
                  <div className="rss-home__faq-section__container__faq-container__item__icon-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      ) : (
                        <img src='icons/plus-ico.png' alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      )
                    }
                  </div>
                </div>
                <div className="rss-home__faq-section__container__faq-container__item">
                  <div className="rss-home__faq-section__container__faq-container__item__text-container">
                    <h4 className="rss-home__faq-section__container__faq-container__item__text-container__title font-16-20">Can you integrate third-party tools or platforms into my website?</h4>
                  </div>
                  <div className="rss-home__faq-section__container__faq-container__item__icon-container">
                    {
                      process.env.NODE_ENV === "production" ? (
                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      ) : (
                        <img src='icons/plus-ico.png' alt="Plus Icon" className="rss-home__faq-section__container__faq-container__item__icon-container__icon" />
                      )
                    }
                  </div>
                </div>
              </div>
              <div className="rss-home__faq-section__container__help-container">
                <div className="rss-home__faq-section__container__help-container__ico-container">
                  {
                    process.env.NODE_ENV === "production" ? (
                      <img src={`${import.meta.env.BASE_URL}/icons/star-ico.png`} alt="Star Icon" className="rss-home__faq-section__container__help-container__ico-container__icon" />
                    ) : (
                      <img src='icons/star-ico.png' alt="Star Icon" className="rss-home__faq-section__container__help-container__ico-container__icon" />
                    )
                  }
                </div>
                <div className="rss-home__faq-section__container__help-container__text-container">
                  <h4 className="rss-home__faq-section__container__help-container__text-container__title font-18-24">Still have any questions?</h4>
                  <p className="rss-home__faq-section__container__help-container__text-container__slug font-14-18">Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss you web design needs and bring your digital vision to life!</p>
                </div>
                <input type="button" value="Contact Me" className="rss-contact__faq__container__help-container__submit-btn" />
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
