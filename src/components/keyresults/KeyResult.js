import React, { Component, Fragment } from "react";

import TextInputGroup from "../shared/TextInputGroup";

import KeyResultProgressBar from "./KeyResultProgressBar";

import MetricMenu from "./MetricMenu";
import ToolsImageSelector from "./ToolsImageSelector";

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
      objectiveId: objectiveId
    };
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { keyResult, objectiveId } = this.state;
    e.preventDefault();
    onSubmit(keyResult, objectiveId);
    this.setState({
      keyResult: {
        name: "",
        unit: "",
        unitCategory: null,
        toolOption: null
      },
      objectiveId: null
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

  handleMetricCategoryChange = selectedOption => {
    this.setState({
      keyResult: {
        ...this.state.keyResult,
        unitCategory: selectedOption
      }
    });
  };

  handleToolChange = selectedTool => {
    this.setState({
      keyResult: {
        ...this.state.keyResult,
        toolOption: selectedTool
      }
    });
  };

  render() {
    const { keyResult, tool } = this.props;
    console.log("this.state", this.state.keyResult);
    return (
      <div className="card-body">
        <KeyResultProgressBar />
        <form onSubmit={this.handleSubmit}>
          <ul className="list-group">
            <li className="list-group-item">
              {keyResult.name === "" ? (
                <Fragment>
                  <input
                    value="Add Key Result"
                    onChange={this.onChange}
                    className="btn btn-info"
                  />
                </Fragment>
              ) : null}

              {/* Create Link Modal for editing*/}
              <i className="fas fa-pencil-alt " />
              <i className="fas fa-trash-alt " />

              {/* KeyResults Metrics Section */}
              <TextInputGroup
                name="unit"
                placeholder="Amount"
                value={this.state.keyResult.unit}
                onChange={this.onChange}
              />
              <MetricMenu
                onChange={this.handleMetricCategoryChange}
                unitCategory={this.state.keyResult.unitCategory}
              />
              {/* Add Tool Selector Section */}
              <ToolsImageSelector
                tool={tool}
                value={tool}
                onChange={this.handleToolChange}
              />
            </li>
          </ul>

          <TextInputGroup
            name="name"
            placeholder="Complete 10 customer demos per week!"
            value={this.state.keyResult.name}
            onChange={this.onChange}
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
    toolOption: null
  }
};

export default KeyResult;
