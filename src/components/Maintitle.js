import React, { Component } from "react";

export default class Maintitle extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <div class="main-title">
        <h4>{title}</h4>
        <h3>{text}</h3>
      </div>
    );
  }
}
