import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

export default function NotFound() {
    const mainRef = React.useRef<HTMLElement | null>(null);

    React.useEffect(() => {
        function adjustMainHeight() {
            const header = document.querySelector("header");
            const footer = document.querySelector("footer");
            const main = mainRef.current;

            if (!header || !footer || !main) return;

            const height = window.innerHeight - header.offsetHeight - footer.offsetHeight;
            main.style.minHeight = `${height}px`;
        }

        adjustMainHeight();
        window.addEventListener("resize", adjustMainHeight);
        return () => window.removeEventListener("resize", adjustMainHeight);
    }, []);

    return (
        <>
            <Header />
            <section className="rss-notfound" ref={mainRef}>
                <div className="container-fluid">
                    <h2 className="rss-notfound__title font-38-58">404</h2>
                    <p className="rss-notfound__slug font-28-48">Page Not Found</p>
                    <p className="rss-notfound__description font-14-18">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                </div>
            </section>
            <Footer />
        </>
    );
}