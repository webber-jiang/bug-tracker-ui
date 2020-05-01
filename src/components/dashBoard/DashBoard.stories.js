import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import DashBoard from "./DashBoard";

storiesOf("Dash board", module)
  .addDecorator((getStory) => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add("default view", () => <DashBoard />);
