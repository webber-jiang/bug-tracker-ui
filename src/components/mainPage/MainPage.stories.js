import React from "react";
import { storiesOf } from "@storybook/react";

import { StoreProvider } from "../../Store";
import MainPage from "./MainPage";

storiesOf("Main page", module)
  .addDecorator((storyFn) => <StoreProvider>{storyFn()}</StoreProvider>)
  .add("default view", () => <MainPage />);
