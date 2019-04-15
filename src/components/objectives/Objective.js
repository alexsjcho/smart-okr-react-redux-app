import React, { Component, Fragment } from "react";

import ObjectiveProgressBar from "./ObjectiveProgressBar";
import TextInputGroup from "../shared/TextInputGroup";
import KeyResultsList from "../keyresults/KeyResultsList";
import ObjectiveCategory from "./ObjectiveCategory";
import ObjectiveDates from "./ObjectiveDates";

class Objective extends Component {
  constructor(props) {
    super(props);
    const {
      objective: {
        name,
        category,
        date: { startDate, endDate }
      },
      objectiveId
    } = this.props;
    this.state = {
      showCardInfo: true,
      showCardKeyResultInfo: true,
      objective: name,
      id: objectiveId,
      category,
      date: {
        startDate,
        endDate
      },
      errors: {}
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { objective, category, date } = this.state;

    //Check for Errors, Form Validation
    let objectiveError = "";
    let dateError = "";
    if (objective === "") {
      objectiveError = "Objective description is required";
    } else {
      objectiveError = "";
    }

    if (date === "") {
      dateError = "Objective start and end date required";
    } else {
      dateError = "";
    }

    if (objectiveError.length > 0 || dateError.length > 0) {
      this.setState({
        errors: {
          objective: objectiveError,
          date: dateError
        }
      });
      return;
    }

    onSubmit({ objective, category, date });
    this.setState({
      objective: "",
      category: null,
      date: {
        startDate: null,
        endDate: null
      },
      errors: {}
    });
  };

  handleDelete = e => {
    e.preventDefault();
    const { onDelete, objectiveId } = this.props;
    onDelete(objectiveId);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCategoryChange = category => {
    this.setState({
      category
    });
  };

  handleStartDate = startDate => {
    this.setState({
      date: {
        ...this.state.date,
        startDate
      }
    });
  };

  handleEndDate = endDate => {
    this.setState({
      date: {
        ...this.state.date,
        endDate
      }
    });
  };

  render() {
    const {
      category,
      type,
      date,
      errors,
      showCardInfo,
      showCardKeyResultInfo
    } = this.state;

    const {
      objective: { name: objectiveName, keyResults },
      onSubmit,

      ...props
    } = this.props;

    let targetObjectiveProgressStatus = keyResults.reduce(
      (accumulator, keyResult) => accumulator + parseInt(keyResult.targetUnit),
      0
    );
    let currentObjectiveProgressStatus = keyResults.reduce(
      (accumulator, keyResult) => accumulator + parseInt(keyResult.unit),
      0
    );

    return (
      <Fragment>
        <div className="card card-body mb-3">
          <h1>
            <i className="fas fa-bullseye fa-2x text-gray-300" />
            bjectives
            <i
              className="fas fa-sort-down"
              onClick={() =>
                this.setState({ showCardInfo: !this.state.showCardInfo })
              }
            />
            <ObjectiveProgressBar
              value={currentObjectiveProgressStatus}
              targetValue={targetObjectiveProgressStatus}
            />
          </h1>

          <ObjectiveDates
            saveStartDate={this.handleStartDate}
            saveEndDate={this.handleEndDate}
            selected={date}
            error={errors.date}
          />

          {showCardInfo ? (
            <div className="card-header">
              <form onSubmit={this.handleSubmit}>
                <ul className="list-group">
                  <li className="list-group-item">
                    {objectiveName === "" ? (
                      <input
                        type="submit"
                        value="Add Objective"
                        className="btn btn-primary btn-inline-block"
                      />
                    ) : (
                      <a href="#delete" onClick={this.handleDelete}>
                        <i className="fas fa-trash-alt " />
                      </a>
                    )}
                    <TextInputGroup
                      name="objective"
                      type={type}
                      placeholder="Overachieve quota this quarter!"
                      value={this.state.objective}
                      onChange={this.onChange}
                      error={errors.objective}
                    />

                    {/* Input fields are muted until pencil icon is clicked for edit*/}
                    <ObjectiveCategory
                      category={category}
                      onChange={this.handleCategoryChange}
                    />
                  </li>
                </ul>
              </form>
            </div>
          ) : null}

          {objectiveName !== "" ? (
            <Fragment>
              <h4>
                Key Results
                <i
                  className="fas fa-sort-down"
                  onClick={() =>
                    this.setState({
                      showCardKeyResultInfo: !this.state.showCardKeyResultInfo
                    })
                  }
                />
              </h4>
              {showCardKeyResultInfo ? (
                <Fragment>
                  {objectiveName ? (
                    <KeyResultsList
                      objectiveId={this.state.id}
                      keyResults={keyResults}
                      {...props}
                    />
                  ) : null}
                </Fragment>
              ) : null}
            </Fragment>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

//Use this to give default value to props
Objective.defaultProps = {
  objective: {
    name: "",
    keyResults: [],
    id: null,
    category: null,
    date: {
      startDate: null,
      endDate: null
    },
    error: {}
  }
};

export default Objective;
