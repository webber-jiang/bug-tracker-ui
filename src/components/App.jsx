import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import LandingPage from "./landingPage/LandingPage";
import DashBoard from "./dashBoard/DashBoard";
import MainPage from "./mainPage/MainPage";
import IssuePage from "./issuePage/IssuePage";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Route path="/" exact component={DashBoard} />
        <Route path="/landingPage" exact component={LandingPage} />
        <Route path="/mainPage" exact component={MainPage} />
        <Route path="/issuePage" exact component={IssuePage} />
      </div>
    </Router>
  );
};

export default App;
