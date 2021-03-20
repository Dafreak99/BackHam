import React, { Component } from "react";

export default class PortfolioRow extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="each-row">
        <div className="left-column" />
        <div className="right-column">
          <h4>{title}</h4>
          <h3>Even the all-powerful Pointing has no control</h3>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text.
          </p>
          <a href="#">View Project</a>
        </div>
      </div>
    );
  }
}
