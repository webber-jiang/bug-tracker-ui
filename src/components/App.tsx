import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";

import history from "../utils/history";
import LandingPage from "./landingPage/LandingPage";
import DashBoard from "./dashBoard/DashBoard";
import MainPage from "./mainPage/MainPage";
import IssuePage from "./issuePage/IssuePage";
import NavBar from "./navbar/Navbar";
import { useAuth0 } from "../utils/react-auth0-spa";
import Profile from "./profile";
import PrivateRoute from "./privateRoute";

const App = (): JSX.Element => {
  const { loading } = useAuth0();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={history}>
      <div>
        <div>
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
          )}

          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

          {isAuthenticated && (
            <span>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/profile">Profile</Link>
              <Link to="/external-api">External API</Link>
            </span>
          )}
        </div>
        <NavBar />
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
