import React, { Component, Fragment } from "react";

// import uuid from "uuid";
import Achievement from "./Achievement";

class AchievementList extends Component {
  onSubmit = (submitValue, index) => {
    const { setWeeklyAchievement } = this.props;
    setWeeklyAchievement(submitValue, index);
  };

  render() {
    const {
      achievementsList,
      objectiveId,
      deleteWeeklyAchievement,
      ...props
    } = this.props;
    return (
      <Fragment>
        {/* {achievementsList.map((achievement, i) => (
          <Achievement
            achievementId={i}
            objectiveId={objectiveId}
            key={uuid()}
            achievement={achievement}
            onSubmit={this.onSubmit}
            deleteWeeklyAchievement={deleteWeeklyAchievement}
            {...props}
          />
        ))} */}

        <Achievement
          onSubmit={this.onSubmit}
          objectiveId={objectiveId}
          {...props}
        />
      </Fragment>
    );
  }
}

export default AchievementList;
