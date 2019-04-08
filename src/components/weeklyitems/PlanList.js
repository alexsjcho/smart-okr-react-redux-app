import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import uuid from "uuid";

import { createPlans } from "../../actions/plans.js";
import Plan from "./Plan.js";

const mapStateToProps = ({ plans: { plan, planList } }) => ({
  planList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPlans }, dispatch);

class PlanList extends Component {
  render() {
    return (
      <Fragment>
        <Plan />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanList);
