import React, { Component, Fragment } from "react";
import uuid from "uuid";

import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: props.plan || { id: uuid(), value: "" },
      showCardInfo: true,
      errors: ""
    };
  }

  //Asychronous function because of callback
  onPlanChange = e => {
    e.preventDefault();
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
    const { plan } = this.state;
    const { isNew } = this.props;
    if (!isNew) return;
    let planError = "";
    if (plan.value === "") {
      planError = "Plan description is required. Yo";
    } else {
      planError = "";
    }

    this.setState({ errors: planError });

    if (planError === "") {
      const { objectiveId, onSubmit } = this.props;
      onSubmit(plan, objectiveId);
      this.setState({
        plan: {
          id: uuid(),
          value: ""
        }
      });
    }
  };

  handleDelete = e => {
    e.preventDefault();
    const { deleteWeeklyPlan, objectiveId } = this.props;
    deleteWeeklyPlan(objectiveId, this.state.plan.id);
  };

  render() {
    const { showCardInfo, plan, errors } = this.state;
    const { isNew } = this.props;

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
                {isNew ? (
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    onClick={this.handleSubmit}>
                    {" "}
                    Add Weekly Plan{" "}
                  </button>
                ) : null}

                {!isNew && plan.value !== "" ? (
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
                  error={errors}
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
  objectiveId: null
};

export default Plan;
