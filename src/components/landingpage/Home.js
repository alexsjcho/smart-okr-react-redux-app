import React, { Fragment } from "react";

import HomeNav from "./HomeNav";
import Intro from "./Intro";
import Problem from "./Problem";
import Solution from "./Solution";

const Home = () => {
  return (
    <Fragment>
      <HomeNav />
      <Intro />
      <Problem />
      <Solution />
    </Fragment>
  );
};

export default Home;
