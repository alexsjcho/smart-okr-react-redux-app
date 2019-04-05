import React from "react";

const AppNavBar = props => {
  const { branding } = props;

  let navStyles = {
    backgroundColor: "#e3f2fd"
  };

  return (
    <nav
      className="navbar navbar-expand-lg mb-3 py-0 navbar-light"
      style={navStyles}>
      <div className="container">
        <a href="/"> {branding} </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/"> Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

AppNavBar.defaultProps = {
  branding: "SOKR"
};

export default AppNavBar;
