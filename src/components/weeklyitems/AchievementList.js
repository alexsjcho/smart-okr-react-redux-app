import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import uuid from "uuid";

import { createAchievements } from "../../actions/achievements.js";
import Achievement from "./Achievement";

const mapStateToProps = ({
  achievements: { achivement, achievementList }
}) => ({
  achievementList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createAchievements }, dispatch);

class AchievementList extends Component {
  render() {
    return (
      <Fragment>
        <Achievement />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AchievementList);
