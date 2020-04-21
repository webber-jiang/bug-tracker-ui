import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import LandingPage from "./landingPage/LandingPage";
import DashBoard from "./dashBoard/DashBoard";
import MainPage from "./mainPage/MainPage";
import IssuePage from "./issuePage/IssuePage";
import Navbar from "./navbar/Navbar";
import { useAuth0 } from "../react-auth0-spa";
import Profile from "./profile";
import PrivateRoute from "./privateRoute";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          {/* TODO: make other paths PrivateRoute as well */}
          <Route path="/" exact component={DashBoard} />
          <Route path="/landingPage" component={LandingPage} />
          <Route path="/mainPage" component={MainPage} />
          <Route path="/issuePage" component={IssuePage} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
