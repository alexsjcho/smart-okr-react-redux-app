import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import uuid from "uuid";

import { setWeeklyAchievement } from "../../actions/objectives.js";
import Achievement from "./Achievement";

const mapStateToProps = ({
  achievements: { achivement, achievementsList }
}) => ({
  achievementsList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setWeeklyAchievement }, dispatch);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AchievementList);
