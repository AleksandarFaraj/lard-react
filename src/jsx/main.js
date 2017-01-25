import React from "react";
import ReactDOM from "react-dom";
import {LardEngine} from "./LardEngine";
import Link from "react-router/lib/Link";
import browserHistory from "react-router/lib/browserHistory";
import Router from "react-router/lib/Router";
import Route from "react-router/lib/Route";
require('../scss/main.scss');
class Welcome extends React.Component {
    render() {
        return <div>
            This is lard!
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZzEz5e4yqX8" frameborder="0" allowfullscreen></iframe>
            <Link to={"LardEngine"}>
                <button>Click here to go further!</button>
            </Link>
        </div>;
    }
}
class NoMatch extends React.Component {
    render() {
        return <div>
            Could not find page :(
        </div>
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Welcome}/>
        <Route path="/LardEngine" component={LardEngine}/>
        <Route path="/*" component={NoMatch}/>
    </Router>,
    document.getElementById('entry')
);
