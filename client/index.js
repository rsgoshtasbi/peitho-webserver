import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "components/app";
import store, { history } from "state/store";

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
