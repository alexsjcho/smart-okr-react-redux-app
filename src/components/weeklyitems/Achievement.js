import React, { Component, Fragment } from "react";

import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Achievement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      achievement: "",
      time: "",
      showCardInfo: true
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state.achievement);
    this.setState({
      achievement: ""
    });
  };

  render() {
    const { showCardInfo } = this.state;
    const { achievement } = this.props;

    return (
      <Fragment>
        <div className="card card-body mb-3">
          <h4>
            <i className="fas fa-grin-squint-tears" /> Achievements{" "}
            <i
              className="fas fa-sort-down"
              onClick={() =>
                this.setState({ showCardInfo: !this.state.showCardInfo })
              }
            />
          </h4>

          {showCardInfo ? (
            <div className="card-header">
              {achievement !== "" ? (
                <input
                  type="submit"
                  value="Add Achievement"
                  className="btn btn-outline-success"
                />
              ) : null}

              {achievement === "" ? (
                <Fragment>
                  {/* Input fields are muted until pencil icon is clicked for edit*/}
                  <i className="fas fa-pencil-alt " />
                  <i className="fas fa-trash-alt " />
                </Fragment>
              ) : null}

              <TimeStamp />
              <form>
                <TextInputGroup
                  name="achievement"
                  value={achievement}
                  onChange={this.onChange}
                  placeholder="Built a React CRUD app in a week!"
                />
              </form>
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

Achievement.defaultProps = {
  name: "",
  time: ""
};

export default Achievement;
