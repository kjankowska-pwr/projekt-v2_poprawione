import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Page404 from "./pages/Page404";
import RegularPage from "./pages/Regular";
import HotPage from "./pages/Hot";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="Routes">
            <Switch>
              <Route exact path="/">
                <Redirect to="/main" />
              </Route>
              <Route path="/main">
                <Main />
              </Route>
              <Route path="/regular">
                <RegularPage />
              </Route>
              <Route path="/hot">
                <HotPage />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
