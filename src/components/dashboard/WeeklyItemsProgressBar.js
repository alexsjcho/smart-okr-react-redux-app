import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class WeeklyItemsProgressBar extends Component {
  render() {
    return (
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  All Weekly Items
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div
                      className="h5 mb-0 mr-3 "
                      style={{ fontWeight: "bold-text-gray-800" }}>
                      65%
                    </div>
                  </div>
                  <div className="col">
                    <ProgressBar>
                      <ProgressBar
                        animated
                        striped
                        variant="success"
                        now={35}
                        key={1}
                      />
                      <ProgressBar
                        animated
                        variant="warning"
                        now={20}
                        key={2}
                      />
                      <ProgressBar
                        animated
                        striped
                        variant="danger"
                        now={10}
                        key={3}
                      />
                    </ProgressBar>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyItemsProgressBar;
