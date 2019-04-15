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
    e.preventDefault();
    const { challenge } = this.state;
    const { onSubmit, objectiveId } = this.props;

    const { isNew } = this.props;
    if (!isNew) return;

    let challengeError = "";
    if (challenge.value === "") {
      challengeError = "Challenge description is required. yo";
    } else {
      challengeError = "";
    }

    this.setState({ errors: challengeError });

    if (challengeError === "") {
      onSubmit(this.state.challenge, objectiveId);
      this.setState({
        challenge: {
          id: uuid(),
          value: ""
        }
      });
    }
  };

  handleDelete = e => {
    e.preventDefault();
    const { deleteWeeklyChallenge, objectiveId } = this.props;
    deleteWeeklyChallenge(objectiveId, this.state.challenge.id);
  };

  render() {
    const { showCardInfo, challenge, errors } = this.state;
    const { isNew } = this.props;

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
              <form onSubmit={this.handleSubmit}>
                {isNew ? (
                  <button
                    type="submit"
                    className="btn btn-outline-warning"
                    onClick={this.handleSubmit}>
                    {" "}
                    Add Challenge{" "}
                  </button>
                ) : null}
                {!isNew && challenge.value !== "" ? (
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
                  value={challenge.value}
                  onChange={this.onChallengeChange}
                  placeholder="Didn't get enough sleep..."
                  error={errors}
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
