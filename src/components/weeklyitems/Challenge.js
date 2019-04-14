import React, { Component, Fragment } from "react";
import uuid from "uuid";
import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: props.challenge || { id: uuid(), value: "" },
      showCardInfo: true
    };
  }

  //Asychronous function because of callback
  onChallengeChange = e => {
    const value = e.target.value;
    this.setState(prevState => {
      const newChallenge = prevState.challenge;
      newChallenge.value = value;
      return {
        ...prevState,
        challenge: newChallenge
      };
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

  handleDelete = e => {
    e.preventDefault();
    const { deleteWeeklyChallenge, objectiveId } = this.props;
    deleteWeeklyChallenge(objectiveId, this.state.challenge.id);
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
                {challenge === "" ? (
                  <input
                    type="submit"
                    value="Add Challange"
                    className="btn btn-outline-warning"
                  />
                ) : null}
                {challenge !== "" ? (
                  <Fragment>
                    <a href="#delete">
                      {" "}
                      <i
                        className="fas fa-trash-alt "
                        onClick={this.handleDelete}
                      />
                    </a>
                  </Fragment>
                ) : null}

                <TimeStamp />
                <TextInputGroup
                  name="challenge"
                  value={challenge}
                  onChange={this.onChallengeChange}
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
  objectiveId: null
};

export default Challenge;
