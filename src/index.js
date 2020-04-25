import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utils/react-auth0-spa";
import config from "./utils/auth_config.json";
import history from "./utils/history";

import App from "./components/App";
import { StoreProvider } from "./Store";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    audience={config.audience}
    onRedirectCallback={onRedirectCallback}
  >
    <StoreProvider>
      <App />
    </StoreProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
