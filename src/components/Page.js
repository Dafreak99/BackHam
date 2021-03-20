import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";

export default class Page extends Component {
  render() {
    return (
      <div className="page">
        <Header onMainNavShow={this.props.onMainNavShow} />
        <Carousel />
      </div>
    );
  }
}
