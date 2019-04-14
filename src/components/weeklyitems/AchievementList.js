import React, { Component, Fragment } from "react";

// import uuid from "uuid";
import Achievement from "./Achievement";

class AchievementList extends Component {
  onSubmit = submitValue => {
    const { setWeeklyAchievement } = this.props;
    setWeeklyAchievement(submitValue);
  };

  render() {
    const { achievementsList, ...props } = this.props;
    return (
      <Fragment>
        {/* {achievementsList.map((achievement, i) => (
          <Achievement
            objectiveId={i}
            key={uuid()}
            achievement={achievement}
            onSubmit={this.onSubmit}
            {...props}
          />
        ))} */}

        <Achievement onSubmit={this.onSubmit} {...props} />
      </Fragment>
    );
  }
}

export default AchievementList;
