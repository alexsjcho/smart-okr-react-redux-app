import React, { Component } from "react";
import TextInputGroup from "../shared/TextInputGroup";

class Challenges extends Component {
  state = {
    challenges: "",
    showCardInfo: true
  };

  render() {
    const { name, type } = this.props;
    const { showCardInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h3>
          Challenges <i className="fas fa-sort-down" />
        </h3>
        <div className="card-header">
          {" "}
          <i
            onClick={() =>
              this.setState({ showCardInfo: !this.state.showCardInfo })
            }
            className="fas fa-plus"
          />{" "}
          {showCardInfo ? (
            <form>
              <input
                type="submit"
                value="Add Challange"
                className="btn btn-outline-warning"
              />
              <TextInputGroup
                name="challenge"
                type={type}
                placeholder="Didn't get enough sleep..."
                value={name}
              />
            </form>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Challenges;
