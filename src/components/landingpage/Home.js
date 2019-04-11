import React, { Fragment } from "react";

import Info from "./Info";
import Intro from "./Intro";
import Problem from "./Problem";
import Solution from "./Solution";

const Home = () => {
  return (
    <Fragment>
      <Intro />
      <Problem />
      <Solution />
      <Info />
    </Fragment>
  );
};

export default Home;
