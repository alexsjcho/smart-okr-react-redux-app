import React, { Component, Fragment } from "react";
import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: "",
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
    const { type, showCardInfo } = this.state;
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
                <input
                  type="submit"
                  value="Add Challange"
                  className="btn btn-outline-warning"
                />
                {/* Create Link Modal for editing*/}
                <i className="fas fa-pencil-alt " />
                <i className="fas fa-trash-alt " />
                <TimeStamp />
                <TextInputGroup
                  name="challenge"
                  type={type}
                  placeholder="Didn't get enough sleep..."
                  value={challenge}
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
  type: ""
};

export default Challenge;
