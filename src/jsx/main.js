import React from "react";
import ReactDOM from "react-dom";
import {Note} from "./Note";
import {Router, Route, Link, browserHistory} from "react-router";


class Welcome extends React.Component {
    render() {
        return <div>
            This is the starting page
            <Link to={"note"}>
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
        <Route path="/note" component={Note}/>
        <Route path="/*" component={NoMatch}/>
    </Router>,
    document.getElementById('entry')
);
