import { Route, HashRouter, BrowserRouter, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Contact from "../pages/contact";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";

export default function Routes() {
    const isProd = import.meta.env.PROD;
    return isProd ? (
        // HashRouter is used for production to avoid issues with routing
        // when the app is served from a subdirectory
        // HashRouter uses the hash portion of the URL (window.location.hash)
        // to keep the UI in sync with the URL
        <HashRouter>
            <Switch>
                <Route exact path="/"><Redirect to="/resume" /></Route>
                <Route exact path="/resume" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </HashRouter>
    ) : (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                {/* <Route path="/login" component={Auth} /> */}
            </Switch>
        </BrowserRouter>
    )
}