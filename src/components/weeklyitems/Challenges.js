import React, { Component } from "react";
import TextInputGroup from "../shared/TextInputGroup";

class Challenges extends Component {
  state = {
    challenges: ""
  };

  render() {
    const { name, type } = this.state;
    return (
      <div className="card mb-3">
        <h1>Challenges</h1>
        <div className="card-header">
          {" "}
          <input
            type="submit"
            value="Add A Challange"
            className="btn btn-outline-warning"
          />
          <form>
            <TextInputGroup
              name="challenge"
              type={type}
              placeholder="Didn't get enough sleep..."
              value={name}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Challenges;
