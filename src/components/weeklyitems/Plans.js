import React, { Component, Fragment } from "react";
import TextInputGroup from "../shared/TextInputGroup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import { createPlans } from "../../actions/plans.js";
import AddPlan from "./AddPlan";

const mapStateToProps = ({ plans: { plans } }) => ({
  plans
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPlans }, dispatch);

class Plans extends Component {
  state = {
    plan: "",
    showCardInfo: true
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const {
      addPlan,
      plan: { name }
    } = this.props;
    e.preventDefault();
    if (name) {
      addPlan(this.state.plan);
    }
    this.setState({
      plan: ""
    });
  };

  render() {
    const { showCardInfo, type, plan } = this.state;
    const { planName } = this.props;

    return (
      <Fragment>
        <div key={uuid()} className="card card-body mb-3">
          <h4>
            <i className="fas fa-edit" /> Plans{" "}
            <i
              className="fas fa-sort-down"
              onClick={() =>
                this.setState({ showCardInfo: !this.state.showCardInfo })
              }
            />
          </h4>

          {showCardInfo ? (
            <div className="card-header">
              {" "}
              <input
                type="submit"
                value="Add Weekly Plan"
                className="btn btn-outline-primary"
              />{" "}
              {/* Create Link Modal for editing*/}
              <i className="fas fa-pencil-alt " />
              <i className="fas fa-trash-alt " />
              <form onSubmit={this.onSubmit}>
                <TextInputGroup
                  name="plan"
                  type={type}
                  value={plan}
                  onChange={this.onChange}
                  placeholder="Write a blog post by end of this week"
                />
              </form>
            </div>
          ) : null}
        </div>

        {planName ? (
          <AddPlan
            planName={planName}
            planValue={plan}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plans);
