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
    if (objective === "") {
      this.setState({
        errors: { objective: "Objective description is required" }
      });
      return;
    }

    if (date === "") {
      this.setState({
        errors: { date: "Objective start and end date required" }
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
    const { category, type, date, errors, showCardInfo } = this.state;

    const {
      objective: { name: objectiveName, keyResults },
      onSubmit,

      ...props
    } = this.props;

    return (
      <Fragment>
        <div className="card card-body mb-3">
          <h1>
            <i className="fas fa-bullseye" /> KRs{" "}
            <i
              className="fas fa-sort-down"
              onClick={() =>
                this.setState({ showCardInfo: !this.state.showCardInfo })
              }
            />
            <ObjectiveProgressBar />
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
                      <Fragment>
                        <input
                          type="submit"
                          value="Add Objective"
                          className="btn btn-primary btn-inline-block"
                        />
                      </Fragment>
                    ) : null}

                    {/* Input fields are muted until pencil icon is clicked for edit*/}
                    {objectiveName !== "" ? (
                      <Fragment>
                        <i className="fas fa-pencil-alt " />
                        <i className="fas fa-trash-alt " />
                      </Fragment>
                    ) : null}
                    <ObjectiveCategory
                      category={category}
                      onChange={this.handleCategoryChange}
                    />
                  </li>
                </ul>
                <TextInputGroup
                  name="objective"
                  type={type}
                  placeholder="Overachieve quota this quarter!"
                  value={this.state.objective}
                  onChange={this.onChange}
                  error={errors.objective}
                />
              </form>
            </div>
          ) : null}

          {objectiveName ? (
            <KeyResultsList
              objectiveId={this.state.id}
              keyResults={keyResults}
              {...props}
            />
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
    }
  }
};

export default Objective;
