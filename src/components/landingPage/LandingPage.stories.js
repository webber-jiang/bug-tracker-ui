import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import LandingPage from "./LandingPage";

storiesOf("Landing page", module)
  .addDecorator((getStory) => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add("default view", () => <LandingPage />);
