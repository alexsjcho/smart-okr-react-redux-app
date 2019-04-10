import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ObjectiveDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    const { saveStartDate, saveEndDate, selected } = this.props;
    return (
      <Fragment>
        <div className="container">
          Start Date
          <DatePicker
            selected={selected.startDate}
            selectsStart
            startDate={selected.startDate}
            endDate={selected.endDate}
            onChange={saveStartDate}
          />
        </div>

        <div className="container">
          End Date
          <DatePicker
            selected={selected.endDate}
            selectsEnd
            startDate={selected.startDate}
            endDate={selected.endDate}
            onChange={saveEndDate}
          />
        </div>
      </Fragment>
    );
  }
}
export default ObjectiveDates;
