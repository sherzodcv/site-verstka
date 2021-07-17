import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./components/HomePage";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route exact path={'/home'} component={HomePage}/>
                </Router>
            </>
        );
    }
}

export default App;