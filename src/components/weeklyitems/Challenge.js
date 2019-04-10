import React, { Component, Fragment } from "react";

import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: "",
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
    onSubmit(this.state.challenge);
    this.setState({
      challenge: ""
    });
  };

  render() {
    const { showCardInfo } = this.state;
    const { challenge } = this.props;

    return (
      <Fragment>
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
                {challenge !== "" ? (
                  <input
                    type="submit"
                    value="Add Challange"
                    className="btn btn-outline-warning"
                  />
                ) : null}
                {challenge === "" ? (
                  <Fragment>
                    {/* Input fields are muted until pencil icon is clicked for edit*/}
                    <i className="fas fa-pencil-alt " />
                    <i className="fas fa-trash-alt " />
                  </Fragment>
                ) : null}

                <TimeStamp />
                <TextInputGroup
                  name="challenge"
                  value={challenge}
                  onChange={this.onChange}
                  placeholder="Didn't get enough sleep..."
                />
              </form>
            ) : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

Challenge.defaultProps = {
  name: "",
  time: ""
};

export default Challenge;
