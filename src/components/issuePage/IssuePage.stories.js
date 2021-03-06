import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import { StoreProvider } from "../../Store";
import { Auth0Provider } from "../../utils/react-auth0-spa";
import IssuePage from "./IssuePage";

storiesOf("Issue page", module)
  .addDecorator((storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>)
  .addDecorator((storyFn) => <StoreProvider>{storyFn()}</StoreProvider>)
  .addDecorator((storyFn) => <Auth0Provider>{storyFn()}</Auth0Provider>)
  .add("default view", () => <IssuePage />);
