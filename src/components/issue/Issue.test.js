import React from "react";
import ReactDOM from "react-dom";

import Issue from "./Issue";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Issue />, div);
});
