import React from "react";
import { storiesOf } from "@storybook/react";

import { Auth0Provider } from "../../utils/react-auth0-spa";
import NavBar from "./NavBar";

storiesOf("Navbar", module)
  .addDecorator((storyFn) => <Auth0Provider>{storyFn()}</Auth0Provider>)
  .add("default view", () => <NavBar />);
