import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NotFound from "../shared/NotFound";
import Home from "../landingpage/Home";

const AppNavBar = props => {
  const { branding } = props;

  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="nav-link navbar-brand"> {branding} </div>

        <Switch>
          <Route exact path="/home" component={Home} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </nav>
    </Router>
  );
};

AppNavBar.defaultProps = {
  branding: "SOKR"
};

export default AppNavBar;
