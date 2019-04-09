import React, { Component, Fragment } from "react";

import TextInputGroup from "../shared/TextInputGroup";

class Achievement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      achievement: "",
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
    onSubmit(this.state.achievement);
    this.setState({
      achievement: ""
    });
  };

  render() {
    const { showCardInfo, type } = this.state;
    const { accomplishment } = this.props;
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
              {" "}
              <input
                type="submit"
                value="Add Achievement"
                className="btn btn-outline-success"
              />
              {/* Create Link Modal for editing*/}
              <i className="fas fa-pencil-alt " />
              <i className="fas fa-trash-alt " />
              <form>
                <TextInputGroup
                  name="objectives"
                  type={type}
                  placeholder="Built a React CRUD app in a week!"
                  value={accomplishment}
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
  type: ""
};

export default Achievement;
