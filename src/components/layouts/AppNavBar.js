import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import NotFound from "../shared/NotFound";
import Instructions from "./Instructions";

const AppNavBar = props => {
  const { branding } = props;

  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <Link to="/" className="nav-link navbar-brand">
          {branding}
        </Link>

        <Switch>
          <Link to="/" className="nav-link text-dark  ">
            Instructions{" "}
            <Route exact path="/instructions" component={Instructions} />
          </Link>
          <Route component={NotFound} />
        </Switch>

        <a className="p-2 text-dark" href="/">
          Logout
        </a>
      </nav>
    </Router>
  );
};

AppNavBar.defaultProps = {
  branding: "SOKR"
};

export default AppNavBar;
