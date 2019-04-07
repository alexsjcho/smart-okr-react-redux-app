import React, { Component, Fragment } from "react";
import uuid from "uuid";

import TextInputGroup from "../shared/TextInputGroup";

class KeyResults extends Component {
  state = {
    keyresults: ""
  };

  render() {
    const { type } = this.state;
    const { onChange, keyResults, onSubmit, keyResultValue } = this.props;
    return (
      <Fragment>
        {keyResults.map(keyResult => (
          <div key={uuid()} className="card-body">
            <form>
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fas fa-ruler" />
                  <input
                    type="submit"
                    value="Add Key Result"
                    className="btn btn-info"
                  />
                </li>
              </ul>

              <TextInputGroup
                name="keyResult"
                placeholder="Complete 10 customer demos per week!"
                value={keyResult}
                type={type}
                onChange={onChange}
              />
            </form>
          </div>
        ))}
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fas fa-ruler" />
                <input
                  type="submit"
                  value="Add Key Result"
                  className="btn btn-info"
                />
              </li>
            </ul>

            <TextInputGroup
              name="keyResult"
              placeholder="Enter new Key Result!"
              value={keyResultValue}
              type={type}
              onChange={onChange}
            />
          </form>
        </div>
      </Fragment>
    );
  }
}
export default KeyResults;
