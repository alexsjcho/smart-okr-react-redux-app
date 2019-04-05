import React, { Component } from "react";

import TextInputGroup from "../shared/TextInputGroup";

class Accomplishments extends Component {
  state = {
    accomplishments: ""
  };
  render() {
    const { name, type } = this.state;
    return (
      <div className="card mb-3">
        <h1>Accomplishments</h1>
        <div className="card-header">
          {" "}
          <input
            type="submit"
            value="Add Objective"
            className="btn btn-outline-success"
          />
          <form>
            <TextInputGroup
              name="objectives"
              type={type}
              placeholder="Built a React CRUD app in a week!"
              value={name}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Accomplishments;
