import React, { Component, Fragment } from "react";

import TextInputGroup from "../shared/TextInputGroup";
import KeyResultProgressBar from "./KeyResultProgressBar";
import InputSelect from "./InputSelect";
import { metricOptions, toolOptions } from "../../utils/option_data";

class KeyResult extends Component {
  constructor(props) {
    super(props);
    const {
      keyResult: { name, unit, unitCategory, toolOption },
      objectiveId
    } = this.props;

    this.state = {
      keyResult: {
        name,
        unit,
        unitCategory,
        toolOption
      },
      objectiveId: objectiveId,
      errors: {}
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { keyResult, objectiveId, name, unit, unitCategory } = this.state;

    //Check for Errors, Form Validation
    if (name === "") {
      this.setState({
        errors: { name: "Key Result description is required" }
      });
      return;
    }

    if (unit === "") {
      this.setState({
        errors: { unit: "Unit description is required" }
      });
      return;
    }

    if (unitCategory === "") {
      this.setState({
        errors: { unitCategory: "unitCategory description is required" }
      });
      return;
    }

    onSubmit(keyResult, objectiveId);
    this.setState({
      keyResult: {
        name: "",
        unit: "",
        unitCategory: null,
        toolOption: null
      },
      objectiveId: null,
      errors: {}
    });
  };

  onChange = e => {
    this.setState({
      keyResult: {
        ...this.state.keyResult,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSelectChange = ({ name, selectedOption }) => {
    this.setState({
      keyResult: {
        ...this.state.keyResult,
        [name]: selectedOption
      }
    });
  };

  render() {
    const { keyResult } = this.props;
    const {
      keyResult: { toolOption },
      errors
    } = this.state;

    return (
      <div className="card-body">
        {toolOption ? (
          <KeyResultProgressBar toolOption={toolOption} />
        ) : (
          <KeyResultProgressBar />
        )}

        <form onSubmit={this.handleSubmit}>
          <ul className="list-group">
            <li className="list-group-item">
              {keyResult.name === "" ? (
                <Fragment>
                  <input
                    value="Add Key Result"
                    type="submit"
                    className="btn btn-info"
                  />
                </Fragment>
              ) : null}

              {/* Input fields are muted until pencil icon is clicked for edit*/}
              {keyResult.name !== "" ? (
                <Fragment>
                  <i className="fas fa-pencil-alt " />
                  <i className="fas fa-trash-alt " />
                </Fragment>
              ) : null}

              {toolOption ? (
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={toolOption.imageURL}
                  alt="new"
                />
              ) : null}

              {/* KeyResults Metrics Section */}
              <TextInputGroup
                name="unit"
                placeholder="Amount"
                value={this.state.keyResult.unit}
                onChange={this.onChange}
                error={errors.unit}
              />
              <InputSelect
                name="unitCategory"
                options={metricOptions}
                onChange={this.handleSelectChange}
                initialValue={this.state.keyResult.unitCategory}
                error={errors.unitCategory}
              />
              {/* Add Tool Selector Section */}
              <InputSelect
                name="toolOption"
                initialValue={this.state.keyResult.toolOption}
                options={toolOptions}
                onChange={this.handleSelectChange}
              />
            </li>
          </ul>

          <TextInputGroup
            name="name"
            placeholder="Complete 10 customer demos per week!"
            value={this.state.keyResult.name}
            onChange={this.onChange}
            error={errors.name}
          />
        </form>
      </div>
    );
  }
}

KeyResult.defaultProps = {
  keyResult: {
    name: "",
    unit: "",
    unitCategory: null,
    toolOption: null,
    error: {}
  }
};

export default KeyResult;
