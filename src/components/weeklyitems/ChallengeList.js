import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import uuid from "uuid";

import { createChallenges } from "../../actions/challenges.js";
import Challenge from "./Challenge";

const mapStateToProps = ({ challenges: { challenge, challengeList } }) => ({
  challengeList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createChallenges }, dispatch);

class ChallengeList extends Component {
  render() {
    return (
      <Fragment>
        <Challenge />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeList);
