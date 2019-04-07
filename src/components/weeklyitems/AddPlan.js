import React, { Component, Fragment } from "react";
import uuid from "uuid";
import TextInputGroup from "../shared/TextInputGroup";

class AddPlan extends Component {
  state = {
    plans: ""
  };

  render() {
    const { showCardInfo, type } = this.state;
    const { onChange, onSubmit, addPlans } = this.props;

    return (
      <div>
        <Fragment>
          {addPlans.map(plan => (
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
                  />
                  <form onSubmit={onSubmit}>
                    <TextInputGroup
                      name="plan"
                      type={type}
                      value={plan}
                      onChange={onChange}
                      placeholder="Write a blog post by end of this week"
                    />
                  </form>
                </div>
              ) : null}
            </div>
          ))}
        </Fragment>
      </div>
    );
  }
}

export default AddPlan;
