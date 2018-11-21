import { createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";

import reducer from "state/reducers";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;
