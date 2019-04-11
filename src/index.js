import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";

import Home from "./components/landingpage/Home";
import AppNavBar from "./components/layouts/AppNavBar";
import App from "./components/App";
import reducer from "./reducers";
import NotFound from "./components/shared/NotFound";

const store = createStore(reducer, middleware);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppNavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/dashboard" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
