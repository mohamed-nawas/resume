import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "../App";
import Contact from "../pages/contact";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/resume" component={App} />
                <Route exact path="/resume/contact" component={Contact} />
                {/* <Route path="/login" component={Auth} /> */}
            </Switch>
        </Router>
    )
}