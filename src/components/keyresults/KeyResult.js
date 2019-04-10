import React, { Component, Fragment } from "react";

import TextInputGroup from "../shared/TextInputGroup";

import KeyResultProgressBar from "./KeyResultProgressBar";

import InputSelect from "./InputSelect";
import ToolsImageSelector from "./ToolsImageSelector";

import { toolsImage } from "../../utils/_DATA";

const metricOptions = [
  { value: "dollar", label: "$" },
  { value: "percentage", label: "%" },
  { value: "unit", label: "#" }
];

const toolOptions = [
  {
    id: 1,
    label: "Google Calendar",
    value: "googleCalendar",
    imageURL:
      "https://collegeinfogeek.com/wp-content/uploads/2016/08/Google_Calendar_Logo.png",
    toolURL: "https://www.google.com/calendar"
  },

  {
    id: 2,
    label: "Salesforce",
    value: "salesForce",
    imageURL:
      "https://a.slack-edge.com/7f1a0/plugins/salesforce/assets/service_512.png",
    toolURL: "https://www.salesforce.com/"
  },

  {
    id: 3,
    label: "Zendesk",
    value: "zenDesk",
    imageURL:
      "https://d1eipm3vz40hy0.cloudfront.net/images/social/twitter-zendesk.jpg",
    toolURL: "https://www.zendesk.com/"
  },

  {
    id: 4,
    label: "Mint",
    value: "mint",
    imageURL:
      "https://www.underconsideration.com/brandnew/archives/mint_2018_icon.png",
    toolURL: "https://www.mint.com/"
  },

  {
    id: 5,
    label: "Marketo",
    value: "marketo",
    imageURL:
      "https://seeklogo.com/images/M/marketo-logo-05AEB1316A-seeklogo.com.png",
    toolURL: "https://www.marketo.com/"
  },

  {
    id: 6,
    label: "Github",
    value: "github",
    imageURL:
      "https://github.githubassets.com/images/modules/open_graph/github-mark.png",
    toolURL: "https://github.com/"
  },

  {
    id: 7,
    label: "Trello",
    value: "trello",
    imageURL:
      "https://www.backupery.com/wp-content/uploads/2018/07/trello-logo.png",
    toolURL: "https://trello.com/"
  }
];

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

  handleSelectChange = ({ name, selectedOption }) => {
    this.setState({
      keyResult: {
        ...this.state.keyResult,
        [name]: selectedOption
      }
    });
  };

  render() {
    const { keyResult, tool } = this.props;
    const {
      keyResult: { toolOption }
    } = this.state;

    return (
      <div className="card-body">
        <KeyResultProgressBar />
        <form onSubmit={this.handleSubmit}>
          {toolOption ? (
            <img
              style={{ width: "25px", height: "25px" }}
              src={toolOption.imageURL}
              alt="new"
            />
          ) : null}

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
              <InputSelect
                name="unitCategory"
                options={metricOptions}
                onChange={this.handleSelectChange}
                initialValue={this.state.keyResult.unitCategory}
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
