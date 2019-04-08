import React, { Component, Fragment } from "react";
import uuid from "uuid";

import TextInputGroup from "../shared/TextInputGroup";

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: ""
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
    const { type, showCardInfo } = this.state;
    const { plan } = this.props;

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
              <form onSubmit={this.handleSubmit}>
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
      </Fragment>
    );
  }
}

Plan.defaultProps = {
  type: "",
  name: ""
};

export default Plan;
