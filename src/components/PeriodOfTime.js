import React, { Component } from "react";

export default class PeriodOfTime extends Component {
  render() {
    const { occupation, company, period, place } = this.props;
    return (
      <div className="period-of-time">
        <div className="occupation-period">
          <h3>
            {occupation} <span>- {company}</span>
          </h3>
          <p>{period}</p>
        </div>
        <div clasName="place">
          <p>{place}</p>
        </div>
      </div>
    );
  }
}
