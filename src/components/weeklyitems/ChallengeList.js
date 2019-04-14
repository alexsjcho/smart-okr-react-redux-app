import React, { Component, Fragment } from "react";
// import uuid from "uuid";
import Challenge from "./Challenge";

class ChallengeList extends Component {
  onSubmit = (submitValue, index) => {
    const { setWeeklyChallenge } = this.props;
    setWeeklyChallenge(submitValue, index);
  };

  render() {
    const {
      challengesList,
      objectiveId,
      deleteWeeklyChallenge,
      ...props
    } = this.props;

    return (
      <Fragment>
        {/* {challengesList.map((challenge, i) => (
          <Challenge
            challengeId={i}
            objectiveId={objectiveId}
            key={uuid()}
            challenge={challenge}
            onSubmit={this.onSubmit}
            deleteWeeklyChallenge={deleteWeeklyChallenge}
            {...props}
          />
        ))} */}

        <Challenge
          onSubmit={this.onSubmit}
          objectiveId={objectiveId}
          {...props}
        />
      </Fragment>
    );
  }
}

export default ChallengeList;
