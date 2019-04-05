import React, { Component } from "react";
import TextInputGroup from "../shared/TextInputGroup";

class Plans extends Component {
  state = {
    plan: ""
  };

  render() {
    const { name, type } = this.state;
    return (
      <div className="card mb-3">
        <h1>Plans</h1>
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
      </div>
    );
  }
}

export default Plans;
