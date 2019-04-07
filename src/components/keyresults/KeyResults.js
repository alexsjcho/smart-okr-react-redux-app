import React, { Component, Fragment } from "react";
import uuid from "uuid";

import TextInputGroup from "../shared/TextInputGroup";
import KeyResultProgressBar from "./KeyResultProgressBar";

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
          <div striped animated key={uuid()} className="card-body">
            <KeyResultProgressBar />
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
          <KeyResultProgressBar />
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
