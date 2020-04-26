import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import IssuePage from "./IssuePage";

storiesOf("Issue page", module)
  .addDecorator((getStory) => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add("default view", () => <IssuePage />);
