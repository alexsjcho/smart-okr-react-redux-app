import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import { setWeeklyChallenge } from "../../actions/objectives.js";
import Challenge from "./Challenge";

const mapStateToProps = ({ challenges: { challenge, challengesList } }) => ({
  challengesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setWeeklyChallenge }, dispatch);

class ChallengeList extends Component {
  onSubmit = submitValue => {
    const { setWeeklyChallenge } = this.props;
    setWeeklyChallenge(submitValue);
  };

  render() {
    const { challengesList, ...props } = this.props;

    return (
      <Fragment>
        {/* {challengesList.map((challenge, i) => (
          <Challenge
            objectiveId={i}
            key={uuid()}
            challenge={challenge}
            onSubmit={this.onSubmit}
            {...props}
          />
        ))} */}

        <Challenge onSubmit={this.onSubmit} {...props} />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeList);
