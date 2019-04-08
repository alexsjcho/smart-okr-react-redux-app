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
        <h4>
          <i className="fas fa-frown-open" /> Challenges{" "}
          <i
            className="fas fa-sort-down"
            onClick={() =>
              this.setState({ showCardInfo: !this.state.showCardInfo })
            }
          />
        </h4>
        <div className="card-header">
          {showCardInfo ? (
            <form>
              <input
                type="submit"
                value="Add Challange"
                className="btn btn-outline-warning"
              />
              {/* Create Link Modal for editing*/}
              <i className="fas fa-pencil-alt " />
              <i className="fas fa-trash-alt " />
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
