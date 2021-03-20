import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="co-about-section timeline-section">
        <div className="container">
          <h3 className="title">{title}</h3>
          {children}
        </div>
      </div>
    );
  }
}
