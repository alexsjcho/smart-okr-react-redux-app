import React from "react";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0 navbar-fixed-top">
      <div className="nav-link navbar-brand"> SOKR </div>
      <Link to="/"> Home </Link>
      <Link to="/demo"> Demo </Link>
    </nav>
  );
};

export default AppNavBar;
