import React, { Component, Fragment } from "react";

import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: "",
      time: "",
      showCardInfo: true
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state.plan);
    this.setState({
      plan: ""
    });
  };

  render() {
    const { showCardInfo } = this.state;
    const { plan } = this.props;

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
              {plan !== "" ? (
                <input
                  type="submit"
                  value="Add Weekly Plan"
                  className="btn btn-outline-primary"
                />
              ) : null}

              {/* Input fields are muted until pencil icon is clicked for edit*/}
              {plan === "" ? (
                <Fragment>
                  <i className="fas fa-pencil-alt " />
                  <i className="fas fa-trash-alt " />
                </Fragment>
              ) : null}

              <TimeStamp />
              <form onSubmit={this.handleSubmit}>
                <TextInputGroup
                  name="plan"
                  value={plan}
                  onChange={this.onChange}
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
  time: ""
};

export default Plan;
