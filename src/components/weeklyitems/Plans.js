import React, { Component } from "react";
import TextInputGroup from "../shared/TextInputGroup";

class Plans extends Component {
  state = {
    plan: "",
    showCardInfo: true
  };

  render() {
    const { name, type } = this.state;
    const { showCardInfo } = this.state;

    return (
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
            {" "}
            <input
              type="submit"
              value="Add Weekly Plan"
              className="btn btn-outline-primary"
            />
            <form>
              <TextInputGroup
                name="plan"
                type={type}
                w
                placeholder="Write a blog post by end of this week"
                value={name}
              />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Plans;
