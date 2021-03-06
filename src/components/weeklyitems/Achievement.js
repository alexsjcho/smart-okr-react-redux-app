import React, { Component, Fragment } from "react";
import uuid from "uuid";
import TextInputGroup from "../shared/TextInputGroup";
import TimeStamp from "./TimeStamp";

class Achievement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      achievement: props.achievement || { id: uuid(), value: "" },
      showCardInfo: true,
      errors: ""
    };
  }

  //Asychronous function because of callback
  onAchievementChange = e => {
    e.preventDefault();

    const value = e.target.value;
    this.setState(prevState => {
      const newAchievement = prevState.achievement;
      newAchievement.value = value;
      return {
        ...prevState,
        achievement: newAchievement
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { isNew } = this.props;
    if (!isNew) return;

    const { achievement } = this.state;
    let achievementError = "";
    if (achievement.value === "") {
      achievementError = "Achievement description is required. Yo";
    } else {
      achievementError = "";
    }
    this.setState({ errors: achievementError });

    if (achievementError === "") {
      const { onSubmit, objectiveId } = this.props;
      onSubmit(this.state.achievement, objectiveId);
      e.preventDefault();
      this.setState({
        achievement: {
          id: uuid(),
          value: ""
        }
      });
    }
  };

  handleDelete = e => {
    e.preventDefault();
    const { deleteWeeklyAchievement, objectiveId } = this.props;
    deleteWeeklyAchievement(objectiveId, this.state.achievement.id);
  };

  render() {
    const { showCardInfo, achievement, errors } = this.state;
    const { isNew } = this.props;

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
              <form onSubmit={this.handleSubmit}>
                {isNew ? (
                  <button
                    type="submit"
                    className="btn btn-outline-success"
                    onClick={this.handleSubmit}>
                    {" "}
                    Add Achievement{" "}
                  </button>
                ) : null}

                {!isNew && achievement.value !== "" ? (
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
                  name="achievement"
                  value={achievement.value}
                  onChange={this.onAchievementChange}
                  placeholder="Built a React CRUD app in a week!"
                  error={errors}
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
  objectiveId: null
};

export default Achievement;
