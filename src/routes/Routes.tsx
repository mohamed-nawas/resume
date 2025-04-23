import { Route, HashRouter, BrowserRouter, Switch } from "react-router-dom";
import App from "../App";
import Contact from "../pages/contact";

export default function Routes() {
    const isProd = import.meta.env.PROD;

    // return (
    //     <RouterWrapper>
    //         <Switch>
    //             <Route exact path="/" component={App} />
    //             <Route exact path="/contact" component={Contact} />
    //             {/* <Route path="/login" component={Auth} /> */}
    //         </Switch>
    //     </RouterWrapper>
    // )
    return isProd ? (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </HashRouter>
    ) : (
        <BrowserRouter>
            <Switch>
                <Route exact path="/resume" component={App} />
                <Route exact path="/resume/contact" component={Contact} />
                {/* <Route path="/login" component={Auth} /> */}
            </Switch>
        </BrowserRouter>
    )
}