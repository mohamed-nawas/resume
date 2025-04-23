import DynamicGrid from "../../components/dynamic_grid";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { items } from "../../data/features";

function Contact() {
    return (
        <>
            <Header />
            <section className="rss-contact">
                <div className="container-fluid">
                    <div className="rss-contact__banner">
                        <img src={`${import.meta.env.BASE_URL}/icons/chat-ico.png`} alt="Chat Icon" className="rss-contact__banner__ico" />
                        <div className="rss-contact__banner__content">
                            <h2 className="rss-contact__banner__content__title font-28-48">We'd love to here from you.</h2>
                            <p className="rss-contact__banner__content__slug font-14-20">Here's what some of my clients have to say about my work</p>
                        </div>
                        <DynamicGrid className="rss-contact__banner__list-container" gap={14}>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="rss-contact__banner__list-container__item"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.alt}
                                        className="rss-contact__banner__list-container__item__ico"
                                    />
                                    <p className="rss-contact__banner__list-container__item__content font-14-18">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </DynamicGrid>
                    </div>
                    <div className="rss-contact__form-container">
                        <div className="rss-contact__form-container__form">
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
                                        <img src={`${import.meta.env.BASE_URL}/icons/arrow-ico.png`} alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                    </div>
                                </div>
                                <div className="rss-contact__form-container__content-container__contents__item">
                                    <div className="rss-contact__form-container__content-container__contents__item__text-container">
                                        <h5 className="rss-contact__form-container__content-container__contents__item__text-container__title font-14-18">Give Me a Call on</h5>
                                        <p className="rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20">+94 77 455 2663</p>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__contents__item__arrow-container">
                                        <img src={`${import.meta.env.BASE_URL}/icons/arrow-ico.png`} alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                    </div>
                                </div>
                                <div className="rss-contact__form-container__content-container__contents__item">
                                    <div className="rss-contact__form-container__content-container__contents__item__text-container">
                                        <h5 className="rss-contact__form-container__content-container__contents__item__text-container__title font-14-18">Location</h5>
                                        <p className="rss-contact__form-container__content-container__contents__item__text-container__slug font-16-20">Colombo, Sri Lanka</p>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__contents__item__arrow-container">
                                        <img src={`${import.meta.env.BASE_URL}/icons/arrow-ico.png`} alt="Arrow Icon" className="rss-contact__form-container__content-container__contents__item__arrow-container__arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="rss-contact__form-container__content-container__profiles">
                                <h5 className="rss-contact__form-container__content-container__profiles__title font-16-20">My Social Profiles</h5>
                                <div className="rss-contact__form-container__content-container__profiles__icons-container">
                                    <div className="rss-contact__form-container__content-container__profiles__icons-container__item">
                                        <a href="https://www.linkedin.com/in/mohamed-nawaz/" target="_blank">
                                            <img src={`${import.meta.env.BASE_URL}/icons/linkedin-ico.png`} alt="Linkedin Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                        </a>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__profiles__icons-container__item">
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <img src={`${import.meta.env.BASE_URL}/icons/twitter-ico.png`} alt="Twitter Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                        </a>
                                    </div>
                                    <div className="rss-contact__form-container__content-container__profiles__icons-container__item">
                                        <a href="https://github.com/mohamed-nawas/" target="_blank">
                                            <img src={`${import.meta.env.BASE_URL}/icons/web-ico.png`} alt="Web Icon" className="rss-contact__form-container__content-container__profiles__icons-container__item__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rss-contact__faq">
                        <h2 className="rss-contact__faq__title font-28-48">Frequently Asked Questions</h2>
                        <p className="rss-contact__faq__slug font-14-18">Here are answers to some common questions</p>
                        <div className="rss-contact__faq__container">
                            <div className="rss-contact__faq__container__faq-container">
                                <div className="rss-contact__faq__container__faq-container__item">
                                    <div className="rss-contact__faq__container__faq-container__item__text-container">
                                        <h4 className="rss-contact__faq__container__faq-container__item__text-container__title active font-16-20">Can you work with clients remotely?</h4>
                                        <p className="rss-contact__faq__container__faq-container__item__text-container__slug font-14-18">Absolutely!. I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools. I ensure seamless collaboration regardless of geographical location.</p>
                                    </div>
                                    <div className="rss-contact__faq__container__faq-container__item__icon-container">
                                        <img src={`${import.meta.env.BASE_URL}/icons/cross-ico.png`} alt="Cross Icon" className="rss-contact__faq__container__faq-container__item__icon-container__icon" />
                                    </div>
                                </div>
                                <div className="rss-contact__faq__container__faq-container__item">
                                    <div className="rss-contact__faq__container__faq-container__item__text-container">
                                        <h4 className="rss-contact__faq__container__faq-container__item__text-container__title font-16-20">How long does it typically take to complete a web design project?</h4>
                                    </div>
                                    <div className="rss-contact__faq__container__faq-container__item__icon-container">
                                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-contact__faq__container__faq-container__item__icon-container__icon" />
                                    </div>
                                </div>
                                <div className="rss-contact__faq__container__faq-container__item">
                                    <div className="rss-contact__faq__container__faq-container__item__text-container">
                                        <h4 className="rss-contact__faq__container__faq-container__item__text-container__title font-16-20">Do you offer website maintenance services?</h4>
                                    </div>
                                    <div className="rss-contact__faq__container__faq-container__item__icon-container">
                                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-contact__faq__container__faq-container__item__icon-container__icon" />
                                    </div>
                                </div>
                                <div className="rss-contact__faq__container__faq-container__item">
                                    <div className="rss-contact__faq__container__faq-container__item__text-container">
                                        <h4 className="rss-contact__faq__container__faq-container__item__text-container__title font-16-20">Can you optimize my website for search engines?</h4>
                                    </div>
                                    <div className="rss-contact__faq__container__faq-container__item__icon-container">
                                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-contact__faq__container__faq-container__item__icon-container__icon" />
                                    </div>
                                </div>
                                <div className="rss-contact__faq__container__faq-container__item">
                                    <div className="rss-contact__faq__container__faq-container__item__text-container">
                                        <h4 className="rss-contact__faq__container__faq-container__item__text-container__title font-16-20">Can you integrate third-party tools or platforms into my website?</h4>
                                    </div>
                                    <div className="rss-contact__faq__container__faq-container__item__icon-container">
                                        <img src={`${import.meta.env.BASE_URL}/icons/plus-ico.png`} alt="Plus Icon" className="rss-contact__faq__container__faq-container__item__icon-container__icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="rss-contact__faq__container__help-container">
                                <div className="rss-contact__faq__container__help-container__ico-container">
                                    <img src={`${import.meta.env.BASE_URL}/icons/star-ico.png`} alt="Star Icon" className="rss-contact__faq__container__help-container__ico-container__icon" />
                                </div>
                                <div className="rss-contact__faq__container__help-container__text-container">
                                    <h4 className="rss-contact__faq__container__help-container__text-container__title font-18-24">Still have any questions?</h4>
                                    <p className="rss-contact__faq__container__help-container__text-container__slug font-14-18">Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss you web design needs and bring your digital vision to life!</p>
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

export default Contact;
