import React from "react";
import { storiesOf } from "@storybook/react";

import { Auth0Provider } from "../../utils/react-auth0-spa";
import Navbar from "./Navbar";

storiesOf("Navbar", module)
  .addDecorator((storyFn) => <Auth0Provider>{storyFn()}</Auth0Provider>)
  .add("default view", () => <Navbar />);
