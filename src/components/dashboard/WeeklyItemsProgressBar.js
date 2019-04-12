import React, { Component, Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class WeeklyItemsProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: "",
      achievements: "",
      challenges: "",
      status: "🤔"
    };
  }

  // weeklyStatus = () => {
  //   const {plans, achievements, challenges, status}
  //   if (achievements > challenges) {
  //     return "😁";
  //   } else if (challenges > achievements) {
  //     return " 😰";
  //   } else if (plans > achievements){
  //     return "😱"
  //   } else {
  //     return "🤔";
  //   }
  // };

  render() {
    const { plans, achievements, challenges, weeklyStatus } = this.props;

    return (
      <Fragment>
        <div className="col-xl-10 col-md-12 mb-5">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    All Weekly Items{" "}
                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div
                        className="h5 mb-0 mr-3 "
                        style={{ fontWeight: "bold-text-gray-800" }}>
                        {weeklyStatus}
                      </div>
                    </div>{" "}
                    {}
                    <div className="col">
                      <ProgressBar
                        variant="primary"
                        now={plans}
                        key={3}
                        label={`#${plans}`}
                      />
                      <ProgressBar
                        variant="success"
                        now={achievements}
                        key={1}
                        label={`#${achievements}`}
                      />
                      <ProgressBar
                        variant="warning"
                        now={challenges}
                        key={2}
                        label={`#${challenges}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

WeeklyItemsProgressBar.defaultProps = {
  plans: 30,
  achievements: 50,
  challenges: 25,
  weeklyStatus: "🤔"
};

export default WeeklyItemsProgressBar;
