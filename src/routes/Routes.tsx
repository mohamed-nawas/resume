import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import App from '../App';
import About from '../pages/about';
import BlogDetail from '../pages/blog-detail';
import Contact from '../pages/contact';
import Detail from '../pages/detail';
import NotFound from '../pages/NotFound';
import Portfolio from '../pages/portfolio';

export default function Routes() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/blog-detail" component={BlogDetail} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}
