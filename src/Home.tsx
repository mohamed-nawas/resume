import Header from "./components/header";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Review from "./components/review";
import Works from "./components/works";
import { items as projects } from "./data/completed-projects";
import { items as articles } from "./data/ongoing-projects";
import shuffleArray from "./utils/array-shuffle";
import { useCounterUp } from "./hooks/useCounterUp";

function Home() {
  const works = shuffleArray([...projects, ...articles]);

  return (
    <>
      <Header />
      <section className="rss-home">
        <div className="container-fluid">

          <div className="rss-home__details-section">
            <div className="rss-home__details-section__banner-image" />
            <div className="rss-home__details-section__content-container">
              <h4 className="rss-home__details-section__content-container__slug font-18-28">Hello There &#129303;</h4>
              <h2 className="rss-home__details-section__content-container__title font-38-58">Nawaz - Full Stack Dev Here</h2>
              <p className="rss-home__details-section__content-container__content font-14-18">A dedicated full-stack developer experienced in building robust and user-friendly web solutions. My expertise spans from crafting engaging user interfaces to developing powerful server-side logic and managing databases and deployments. Browse my portfolio to see what I can do</p>
              <div className="rss-home__details-section__content-container__contact-container">
                <div className="rss-home__details-section__content-container__contact-container__btn">
                  {
                    process.env.NODE_ENV === 'production' ? (
                      <a href="/resume/#/contact#form">
                        <span className="glyphicon glyphicon-earphone"></span>
                        <p className="font-14-18">Let's Connect</p>
                      </a>
                    ) : (
                      <a href="/contact#form">
                        <span className="glyphicon glyphicon-earphone"></span>
                        <p className="font-14-18">Let's Connect</p>
                      </a>
                    )
                  }
                </div>
                {
                  process.env.NODE_ENV === 'production' ? (
                    <a href="/resume/#/projects" className="rss-home__details-section__content-container__contact-container__link font-14-18">View Portfolio</a>
                  ) : (
                    <a href="/projects" className="rss-home__details-section__content-container__contact-container__link font-14-18">View Portfolio</a>
                  )
                }
              </div>
              <div className="rss-home__details-section__content-container__status-container">
                <div className="rss-home__details-section__content-container__status-container__item-container rss-home__details-section__content-container__status-container__item-container-full">
                  <h6 className="rss-home__details-section__content-container__status-container__item-container__count">{useCounterUp(25, 2100)}<span className="rss-home__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                  <p className="rss-home__details-section__content-container__status-container__item-container__text font-14-18">Completed Projects</p>
                </div>
                <div className="rss-home__details-section__content-container__status-container__item-container">
                  <h6 className="rss-home__details-section__content-container__status-container__item-container__count">{useCounterUp(10, 2150)}<span className="rss-home__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                  <p className="rss-home__details-section__content-container__status-container__item-container__text font-14-18">Happy Customers</p>
                </div>
                <div className="rss-home__details-section__content-container__status-container__item-container">
                  <h6 className="rss-home__details-section__content-container__status-container__item-container__count">{useCounterUp(4, 2200)}<span className="rss-home__details-section__content-container__status-container__item-container__count-sy">+</span></h6>
                  <p className="rss-home__details-section__content-container__status-container__item-container__text font-14-18">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rss-home__skills-section">
            <div className="rss-home__skills-section__heading-container">
              <h3 className="rss-home__skills-section__heading-container__title font-28-48">Technical Skills</h3>
              <p className="rss-home__skills-section__heading-container__slug font-14-18">As a web developer, I bring a comprehensive skillset encompassing front-end and back-end development, database management, and deployment strategies to build impactful web applications</p>
            </div>
            <div className="rss-home__skills-section__list-container">
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/web-design-ico.png` : 'icons/web-design-ico.png'} alt="web-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Client-Side Expertise</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Proficient in building interactive and responsive user interfaces using modern JavaScript frameworks like React, along with core web technologies such as HTML, CSS, and TypeScript. Experienced in state management, component-based architecture, and UI/UX best practices (leveraging Figma for design understanding)</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/ui-design-ico.png` : 'icons/ui-design-ico.png'} alt="ui-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Server-Side Expertise</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Experienced in developing robust and scalable server-side applications using Java (Spring Boot), Node.js, and PHP. Proficient in designing and developing RESTful APIs and integrating with third-party services. Focused on creating efficient, secure, and well-documented back-end solutions to power web applications</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/ux-design-ico.png` : 'icons/ux-design-ico.png'} alt="ux-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Database Management</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Skilled in designing, implementing, and managing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Experienced in data modeling, query optimization, and ensuring data integrity</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/responsive-design-ico.png` : 'icons/responsive-design-ico.png'} alt="responsive-design" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Cloud & DevOps</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Experienced in deploying web applications to various environments, including cloud platforms like AWS. Familiar with setting up and managing CI/CD pipelines using tools such as Jenkins, GitHub Actions, or Bitbucket Pipelines for automated building, testing, and deployment and containerizations using Docker</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/wireframing-ico.png` : 'icons/wireframing-ico.png'} alt="wireframing" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Quality Assurance</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Committed to delivering high-quality software through thorough testing and quality analysis. Experienced with tools like SonarQube for code quality checks and various testing methodologies</p>
              </div>
              <div className="rss-home__skills-section__list-container__item">
                <div className="rss-home__skills-section__list-container__item__icon-container">
                  <img src={process.env.NODE_ENV === 'production' ? `${import.meta.env.BASE_URL}/icons/optimization-ico.png` : 'icons/optimization-ico.png'} alt="optimization" />
                </div>
                <h5 className="rss-home__skills-section__list-container__item__title font-18-24">Version Control & Collaboration</h5>
                <p className="rss-home__skills-section__list-container__item__slug font-14-18">Experienced in using Git for version control and collaborating effectively with teams through platforms like GitHub and Bitbucket. Familiar with branching strategies, pull requests, and code reviews to ensure code quality and efficient teamwork</p>
              </div>
            </div>
          </div>

          <div className="rss-home__benefits-section">
            <div className="rss-home__benefits-section__heading-container">
              <h3 className="rss-home__benefits-section__heading-container__title font-28-48">Why Choose Me?</h3>
              <p className="rss-home__benefits-section__heading-container__slug font-14-18">By choosing my services, you'll enjoy the following benefits</p>
            </div>
            <div className="rss-home__benefits-section__list-container">
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Scalable and Robust Solutions</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">I understand the importance of building applications that can grow with your needs. I focus on creating scalable architectures and robust back-end systems that are tailored to your specific business requirements and long-term goals</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">High-Performance and Efficient Solutions</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">With a strong focus on writing clean, efficient, and well-documented code, I ensure optimal performance and maintainability of your web applications. This leads to faster loading times, improved user experience, and easier future updates and enhancements</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Intuitive and Engaging Applications</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">I prioritize the end-user experience by building intuitive and functional web applications. By focusing on clear navigation, efficient workflows, and responsive design, I ensure your users have a seamless and engaging interaction with your platform</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Accessible Across Devices</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">In today's multi-device landscape, ensuring your web application works flawlessly across all screen sizes and devices is crucial. I specialize in building responsive and adaptive applications that provide a consistent and optimal experience for all users, whether they are on desktop, tablet, or mobile</p>
              </div>
              <div className="rss-home__benefits-section__list-container__item">
                <h5 className="rss-home__benefits-section__list-container__item__title font-18-24">Skills & Technologies</h5>
                <p className="rss-home__benefits-section__list-container__item__slug font-14-18">I possess a strong command of core web technologies including JavaScript, TypeScript, HTML, and CSS, and expertise in modern front-end frameworks like React. My skills extend to back-end development using Java (Spring Boot), Node.js, and PHP, along with database management (MySQL, PostgreSQL, MongoDB) and cloud technologies (AWS). I focus on building scalable, efficient, and high-performing web applications</p>
              </div>
            </div>
          </div>

          <Works baseClassName='rss-works__home' swiperBaseClassName='rss-works__home__swiper' title="Featured Works" slug="Here's are some of my featured works" items={[works]} />

          <Review title="Recommendations" slug="Here's what some of my satisfied clients have to say about my work" count="3 Total Reviews" />

          <FAQ baseClassName='rss-faq__home' title="Frequently Asked Questions" slug="Here are answers to some common questions" containerHelpBtnValue="Contact Me" containerHelpIconPath="icons/star-ico.png" containerHelpIconAlt="Star Icon" containerHelpTextTitle="Let's Discuss Your Project" containerHelpTextSlug="Have a web development project in mind? I'm eager to learn more and discuss how my skills can contribute to your success. Reach out to start the conversation!" />

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home;
