function Header() {
    return (
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#rss-navbar">
                            <img src="icons/toggle-ico.png" alt="menu-toggler" />
                        </button>
                        <a href="/" className="navbar-brand font-18-24">Mohamed Nawas.</a>
                    </div>
                    <div className="collapse navbar-collapse" id="rss-navbar">
                        <ul className="nav navbar-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Me</a></li>
                            <li className="active"><a href="/resume">Portfolio</a></li>
                            <li><a href="/contact">Contact Me</a></li>
                            <li className="rss-navbar__menu__call"><a href="#call"><span className="glyphicon glyphicon-earphone"><p>Book-Call</p></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
