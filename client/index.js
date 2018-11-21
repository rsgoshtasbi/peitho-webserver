import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "components/App";
import store, { history } from "state/store";

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
