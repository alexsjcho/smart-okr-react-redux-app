import React, { Component, Fragment } from "react";
import Moment from "react-moment";

class TimeStamp extends Component {
  render() {
    let todayTimeStamp = new Date();

    return (
      <Fragment>
        <Moment format="dddd MM/DD/YYYY HH:mm">{todayTimeStamp}</Moment>
      </Fragment>
    );
  }
}

export default TimeStamp;
