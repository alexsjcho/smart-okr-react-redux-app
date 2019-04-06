import React, { Component } from "react";

import TextInputGroup from "../shared/TextInputGroup";

class Accomplishments extends Component {
  state = {
    accomplishments: ""
  };
  render() {
    const { name, type } = this.state;
    return (
      <div className="card card-body mb-3">
        <h3>
          Accomplishments <i className="fas fa-sort-down" />
        </h3>
        <div className="card-header">
          {" "}
          <i className="fas fa-plus" />{" "}
          <input
            type="submit"
            value="Add Accomplishment"
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
