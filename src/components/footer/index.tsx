function Footer() {
    return (
        <footer className="rss-footer">
            <div className="rss-footer__brand-container">
                <h5 className="rss-footer__brand-container__title font-18-24">Mohamed Nawas.</h5>
                <div className="rss-footer__brand-container__link-container">
                    <a href="/">
                        <p className="rss-footer__brand-container__link-container__link font-14-18">Home</p>
                    </a>
                    <a href="/about">
                        <p className="rss-footer__brand-container__link-container__link font-14-18">About Me</p>
                    </a>
                    <a href="/resume">
                        <p className="rss-footer__brand-container__link-container__link font-14-18">Portfolio</p>
                    </a>
                    <a href="/contact">
                        <p className="rss-footer__brand-container__link-container__link font-14-18">Contact Me</p>
                    </a>
                </div>
                <div className="rss-footer__brand-container__icons-container">
                    <div className="rss-footer__brand-container__icons-container__ico-container">
                        <a href="https://www.linkedin.com/in/mohamed-nawaz/" target="_blank">
                            <img src="icons/linkedin-ico.png" alt="Linkedin Icon" className="rss-footer__brand-container__icons-container__ico-container__icon" />
                        </a>
                    </div>
                    <div className="rss-footer__brand-container__icons-container__ico-container">
                        <a href="https://www.twitter.com" target="_blank">
                            <img src="icons/twitter-ico.png" alt="Linkedin Icon" className="rss-footer__brand-container__icons-container__ico-container__icon" />
                        </a>
                    </div>
                    <div className="rss-footer__brand-container__icons-container__ico-container">
                        <a href="https://github.com/mohamed-nawas/" target="_blank">
                            <img src="icons/web-ico.png" alt="Linkedin Icon" className="rss-footer__brand-container__icons-container__ico-container__icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="rss-footer__info-container">
                <div className="rss-footer__info-container__item-container">
                    <img src="icons/envelope-ico.png" alt="Envelope Icon" className="rss-footer__info-container__item-container__icon" />
                    <p className="rss-footer__info-container__item-container__content font-16-18">mgmnawas@gmail.com</p>
                </div>
                <div className="rss-footer__info-container__vertical-ruler" />
                <div className="rss-footer__info-container__item-container">
                    <img src="icons/call-ico.png" alt="Call Icon" className="rss-footer__info-container__item-container__icon" />
                    <p className="rss-footer__info-container__item-container__content font-16-18">+94 77 455 2663</p>
                </div>
                <div className="rss-footer__info-container__vertical-ruler" />
                <div className="rss-footer__info-container__item-container">
                    <img src="icons/marker-ico.png" alt="Marker Icon" className="rss-footer__info-container__item-container__icon" />
                    <p className="rss-footer__info-container__item-container__content font-16-18">Colombo, Sri Lanka</p>
                </div>
            </div>

            <p className="rss-footer__copyright font-12-16">Copyright &#169; 2024 Mohamed Nawas. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
