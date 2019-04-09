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
  onSubmit = submitValue => {
    const { setWeeklyPlan } = this.props;
    setWeeklyPlan(submitValue);
  };
  render() {
    const { plansList, ...props } = this.props;
    return (
      <Fragment>
        {plansList.map((plan, i) => (
          <Plan
            objectiveId={i}
            key={uuid()}
            plan={plan}
            onSubmit={this.onSubmit}
            {...props}
          />
        ))}

        <Plan onSubmit={this.onSubmit} {...props} />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanList);
