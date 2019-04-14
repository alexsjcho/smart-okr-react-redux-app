import React, { Component, Fragment } from "react";

import uuid from "uuid";
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
      setWeeklyAchievement,
      deleteWeeklyAchievement,
      ...props
    } = this.props;
    return (
      <Fragment>
        {achievementsList.map((achievement, i) => (
          <Achievement
            achievementId={i}
            objectiveId={objectiveId}
            key={uuid()}
            achievement={achievement}
            onSubmit={setWeeklyAchievement}
            deleteWeeklyAchievement={deleteWeeklyAchievement}
            {...props}
          />
        ))}

        <Achievement
          objectiveId={objectiveId}
          onSubmit={setWeeklyAchievement}
          isNew
          {...props}
        />
      </Fragment>
    );
  }
}

export default AchievementList;
