import React, { Component, Fragment } from "react";
import uuid from "uuid";

import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: props.plan || { id: uuid(), value: "" },
      time: "",
      showCardInfo: true
    };
  }

  //Asychronous function because of callback
  onPlanChange = e => {
    const value = e.target.value;
    this.setState(prevState => {
      const newPlan = prevState.plan;
      newPlan.value = value;
      return {
        ...prevState,
        plan: newPlan
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { objectiveId, onSubmit } = this.props;
    onSubmit(this.state.plan, objectiveId);
    this.setState({
      plan: {
        id: uuid(),
        value: ""
      }
    });
  };

  handleDelete = e => {
    e.preventDefault();
    const { deleteWeeklyPlan, objectiveId } = this.props;
    deleteWeeklyPlan(objectiveId, this.state.plan.id);
  };

  onUpdate = e => {
    e.preventDefault();
  };

  render() {
    const { showCardInfo, plan } = this.state;

    return (
      <Fragment>
        <div className="card card-body mb-3">
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
              <form onSubmit={this.handleSubmit}>
                {plan.value === "" ? (
                  <input
                    type="submit"
                    value="Add Weekly Plan"
                    className="btn btn-outline-primary"
                  />
                ) : null}

                {plan.value !== "" ? (
                  <a href="#delete">
                    <i
                      className="fas fa-trash-alt "
                      onClick={this.handleDelete}
                    />
                  </a>
                ) : null}

                <TimeStamp />

                <TextInputGroup
                  name="plan"
                  value={plan.value}
                  onChange={this.onPlanChange}
                  placeholder="Write a blog post by end of this week"
                />
              </form>
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

Plan.defaultProps = {
  name: "",
  time: "",
  objectiveId: null
};

export default Plan;
