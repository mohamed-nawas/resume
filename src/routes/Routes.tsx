import { Route, HashRouter, BrowserRouter, Switch } from "react-router-dom";
import App from "../App";
import Contact from "../pages/contact";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";

export default function Routes() {
    const isProd = import.meta.env.PROD;
    return isProd ? (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </HashRouter>
    ) : (
        <BrowserRouter>
            <Switch>
                <Route exact path="/resume" component={App} />
                <Route exact path="/resume/about" component={About} />
                <Route exact path="/resume/projects" component={Portfolio} />
                <Route exact path="/resume/contact" component={Contact} />
                {/* <Route path="/login" component={Auth} /> */}
            </Switch>
        </BrowserRouter>
    )
}