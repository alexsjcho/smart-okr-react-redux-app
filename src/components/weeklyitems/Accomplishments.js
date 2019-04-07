import React, { Component } from "react";

import TextInputGroup from "../shared/TextInputGroup";

class Accomplishments extends Component {
  state = {
    accomplishments: "",
    showCardInfo: true
  };
  render() {
    const { name, type } = this.state;
    const { showCardInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          <i className="fas fa-grin-squint-tears" /> Accomplishments{" "}
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
        ) : null}
      </div>
    );
  }
}

export default Accomplishments;
