import { useEffect } from "react";

function Header() {

    useEffect(() => {
        const header = document.querySelector(".rss-header");
        if (header) {
            const headerHeight = header.getBoundingClientRect().height;
            document.body.style.paddingTop = `${headerHeight}px`;
        }
    }, []);

    return (
        <header className="rss-header">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#rss-navbar">
                            {
                                process.env.NODE_ENV === 'production' ? (<img src={`${import.meta.env.BASE_URL}/icons/toggle-ico.png`} alt="menu-toggler" />) :
                                    (<img src='icons/toggle-ico.png' alt="menu-toggler" />)
                            }
                        </button>
                        {
                            process.env.NODE_ENV === "production" ? ( <a href="/resume" className="navbar-brand font-18-24">Mohamed Nawaz</a> )
                            : ( <a href="/" className="navbar-brand font-18-24">Mohamed Nawaz</a> )
                        }
                    </div>
                    <div className="collapse navbar-collapse" id="rss-navbar">
                        {
                            process.env.NODE_ENV === 'production' ? (
                                <ul className="nav navbar-nav">
                                    <li><a href="/resume">Home</a></li>
                                    <li><a href="/resume/#/about">About</a></li>
                                    <li><a href="/resume/#/projects">Works</a></li>
                                    <li><a href="/resume/#/contact">Contact</a></li>
                                    <li className="rss-navbar__menu__call"><a href="#call"><span className="glyphicon glyphicon-earphone"><p>Connect</p></span></a></li>
                                </ul>
                            ) : (
                                <ul className="nav navbar-nav">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/projects">Works</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li className="rss-navbar__menu__call"><a href="#call"><span className="glyphicon glyphicon-earphone"><p>Connect</p></span></a></li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
