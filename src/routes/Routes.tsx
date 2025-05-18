import * as React from 'react';
import { Route, HashRouter, BrowserRouter, Switch } from "react-router-dom";
import App from "../App";
import Contact from "../pages/contact";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Detail from "../pages/detail";
import NotFound from '../pages/NotFound';


const isProd = import.meta.env.PROD;
const Router = isProd ? HashRouter : BrowserRouter;

export default function Routes() {
    // HashRouter is used for production to avoid issues with routing
    // when the app is served from a subdirectory
    // HashRouter uses the hash portion of the URL (window.location.hash)
    // to keep the UI in sync with the URL
    return React.createElement(Router, {}, (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/detail" component={Detail} />
            <Route path="*" component={NotFound} />
        </Switch>
    ));
}