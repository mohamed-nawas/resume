import { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {

  useEffect(() => {
    const header = document.querySelector(".rss-header");
    if (header) {
      const headerHeight = header.getBoundingClientRect().height;
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  }, []);

  return (
    <>
      <Header />
      {/* <Contact /> */}
      <About />
      <Footer />
    </>
  )
}

export default App;
