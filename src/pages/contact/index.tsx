import Banner from "../../components/banner";
import DynamicGrid from "../../components/dynamic_grid";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { items } from "../../data/banner-features";

function Contact() {
    return (
        <>
            <Header />
            <section className="rss-contact">
                <div className="container-fluid">

                    <Banner iconPath="icons/chat-ico.png" iconAlt="Chat Icon" contentTitle="We'd love to here from you" contentSlug="Reach out — I’m excited to hear what you’re working on">
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

                    <div className="rss-contact__form-container">
                        <div className="rss-contact__form-container__form" id="form">
                            <input type="text" className="rss-contact__form-container__form__input font-14-18" placeholder="First Name" />
                            <input type="text" className="rss-contact__form-container__form__input font-14-18" placeholder="Last Name" />
                            <input type="email" className="rss-contact__form-container__form__input font-14-18" placeholder="Email" />
                            <input type="tel" className="rss-contact__form-container__form__input font-14-18" placeholder="Phone Number" />
                            <div className="rss-contact__form-container__form__checkbox-container">
                                <h4 className="rss-contact__form-container__form__checkbox-container__title font-16-18">Why are you contacting us?</h4>
                                <label htmlFor="web-design" className="rss-contact__form-container__form__checkbox-container__item">
                                    <input type="checkbox" className="rss-contact__form-container__form__checkbox-container__item-input" id="web-design" name="Web Design" /><span className="rss-contact__form-container__form__checkbox-container__item-label font-14-18">Web Design</span>
                                </label>
                                <label htmlFor="collab" className="rss-contact__form-container__form__checkbox-container__item">
                                    <input type="checkbox" className="rss-contact__form-container__form__checkbox-container__item-input" id="collab" name="Collaboration" /><span className="rss-contact__form-container__form__checkbox-container__item-label font-14-18">Collaboration</span>
                                </label>
                                <label htmlFor="mobile-design" className="rss-contact__form-container__form__checkbox-container__item">
                                    <input type="checkbox" className="rss-contact__form-container__form__checkbox-container__item-input" id="mobile-design" name="Mobile App Design" /><span className="rss-contact__form-container__form__checkbox-container__item-label font-14-18">Mobile App Design</span>
                                </label>
                                <label htmlFor="other" className="rss-contact__form-container__form__checkbox-container__item">
                                    <input type="checkbox" className="rss-contact__form-container__form__checkbox-container__item-input" id="other" name="Others" /><span className="rss-contact__form-container__form__checkbox-container__item-label font-14-18">Others</span>
                                </label>
                            </div>
                            <textarea name="message" className="rss-contact__form-container__form__text-area font-14-18" placeholder="Your Message here..." />
                            <input type="button" value="Send" className="rss-contact__form-container__form__submit-btn font-14-18" />
                        </div>
                        <div className="rss-contact__form-container__content-container">
                            <div className="rss-contact__form-container__content-container__contents">
                                <div className="rss-contact__form-container__content-container__contents__item">
                                    <div className="rss-contact__form-container__content-container__contents__item__text-container">
                                        <h5 className="rss-contact__form-container__content-container__contents__item__text-container__title font-14-18">You can Email Me Here</h5>
                                        <p className="rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20">mgmnawas@gmail.com</p>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__contents__item__arrow-container">
                                        {
                                            process.env.NODE_ENV === "production" ? (
                                                <img src={`${import.meta.env.BASE_URL}/icons/arrow-ico.png`} alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                            ) : (
                                                <img src='icons/arrow-ico.png' alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="rss-contact__form-container__content-container__contents__item">
                                    <div className="rss-contact__form-container__content-container__contents__item__text-container">
                                        <h5 className="rss-contact__form-container__content-container__contents__item__text-container__title font-14-18">Give Me a Call on</h5>
                                        <p className="rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20">+94 77 455 2663</p>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__contents__item__arrow-container">
                                        {
                                            process.env.NODE_ENV === "production" ? (
                                                <img src={`${import.meta.env.BASE_URL}/icons/arrow-ico.png`} alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                            ) : (
                                                <img src='icons/arrow-ico.png' alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="rss-contact__form-container__content-container__contents__item">
                                    <div className="rss-contact__form-container__content-container__contents__item__text-container">
                                        <h5 className="rss-contact__form-container__content-container__contents__item__text-container__title font-14-18">Location</h5>
                                        <p className="rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20">Colombo, Sri Lanka</p>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__contents__item__arrow-container">
                                        {
                                            process.env.NODE_ENV === "production" ? (
                                                <img src={`${import.meta.env.BASE_URL}/icons/arrow-ico.png`} alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                            ) : (
                                                <img src='icons/arrow-ico.png' alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="rss-contact__form-container__content-container__profiles">
                                <h5 className="rss-contact__form-container__content-container__profiles__title font-16-20">My Social Profiles</h5>
                                <div className="rss-contact__form-container__content-container__profiles__icons-container">
                                    <div className="rss-contact__form-container__content-container__profiles__icons-container__item">
                                        <a href="https://www.linkedin.com/in/mohamed-nawaz/" target="_blank">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/icons/linkedin-ico.png`} alt="Linkedin Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                                ) : (
                                                    <img src='icons/linkedin-ico.png' alt="Linkedin Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                                )
                                            }
                                        </a>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__profiles__icons-container__item">
                                        <a href="https://www.twitter.com/" target="_blank">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/icons/twitter-ico.png`} alt="Twitter Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                                ) : (
                                                    <img src='icons/twitter-ico.png' alt="Twitter Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                                )
                                            }
                                        </a>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__profiles__icons-container__item">
                                        <a href="https://github.com/mohamed-nawas/" target="_blank">
                                            {
                                                process.env.NODE_ENV === "production" ? (
                                                    <img src={`${import.meta.env.BASE_URL}/icons/web-ico.png`} alt="Web Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                                ) : (
                                                    <img src='icons/web-ico.png' alt="Web Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                                )
                                            }
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FAQ baseClassName='rss-faq__contact' title="Frequently Asked Questions" slug="Here are answers to some common questions" containerHelpIconPath="icons/star-ico.png" containerHelpIconAlt="Star Icon" containerHelpTextTitle="Still have any Questions ?" containerHelpTextSlug="Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!" containerHelpBtnValue="Contact Me" />

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;
