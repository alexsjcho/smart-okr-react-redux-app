import React, { Component } from "react";

import TextInputGroup from "../shared/TextInputGroup";

class KeyResults extends Component {
  state = {
    keyresults: ""
  };

  render() {
    const { name, type } = this.state;
    const { onChange } = this.props;
    return (
      <div className="card-body">
        <form>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fas fa-plus" />{" "}
              <input
                type="submit"
                value="Add Key Result"
                className="btn btn-info"
              />
            </li>
          </ul>

          <TextInputGroup
            name="keyresults"
            placeholder="Complete 10 customer demos per week!"
            value={name}
            type={type}
            onChange={onChange}
          />
        </form>
      </div>
    );
  }
}
export default KeyResults;
