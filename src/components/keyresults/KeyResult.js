import React, { Component, Fragment } from "react";
import uuid from "uuid";

import TextInputGroup from "../shared/TextInputGroup";
import KeyResultProgressBar from "./KeyResultProgressBar";
import InputSelect from "./InputSelect";
import { metricOptions, toolOptions } from "../../utils/option_data";

class KeyResult extends Component {
  constructor(props) {
    super(props);
    const {
      keyResult: { id, name, unit, target, unitCategory, toolOption },
      objectiveId
    } = this.props;

    this.state = {
      keyResult: {
        name,
        target,
        unit,
        unitCategory,
        toolOption,
        id: id || uuid(),
        objectiveId
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
        target: "",
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

  handleDelete = e => {
    e.preventDefault();
    const {
      keyResult: { id, objectiveId }
    } = this.state;
    const { onKeyDelete } = this.props;
    onKeyDelete(id, objectiveId);
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

              {keyResult.name !== "" ? (
                <Fragment>
                  <a href="#delete" onClick={this.handleDelete}>
                    {" "}
                    <i className="fas fa-trash-alt " />{" "}
                  </a>
                </Fragment>
              ) : null}

              {toolOption ? (
                <Fragment>
                  <span>
                    <p>
                      <b>Your KeyResult is Automated with</b>{" "}
                    </p>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={toolOption.imageURL}
                      alt="new"
                    />
                  </span>
                </Fragment>
              ) : null}

              {/* KeyResults Metrics Section */}
              <TextInputGroup
                name="unit"
                placeholder="Current Amount"
                value={this.state.keyResult.unit}
                onChange={this.onChange}
                error={errors.unit}
              />
              <TextInputGroup
                name="target"
                placeholder="Target Amount"
                value={this.state.keyResult.unit}
                onChange={this.onChange}
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
