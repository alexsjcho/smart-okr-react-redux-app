import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import { setWeeklyPlan } from "../../actions/objectives.js";
import Plan from "./Plan.js";

const mapStateToProps = ({ plans: { plan, plansList } }) => ({
  plansList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setWeeklyPlan }, dispatch);

class PlanList extends Component {
  onSubmit = (submitValue, index) => {
    const { setWeeklyPlan } = this.props;
    setWeeklyPlan(submitValue, index);
  };

  render() {
    const { plansList, objectiveId, ...props } = this.props;
    console.log("objectiveId", objectiveId);
    return (
      <Fragment>
        {plansList.map((plan, i) => (
          <Plan
            objectiveId={objectiveId}
            key={uuid()}
            plan={plan}
            onSubmit={this.onSubmit}
            {...props}
          />
        ))}

        <Plan onSubmit={this.onSubmit} objectiveId {...props} />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanList);
