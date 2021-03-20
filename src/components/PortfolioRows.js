import React, { Component } from "react";
import PortfolioRow from "./PortfolioRow";

export default class PortfolioRows extends Component {
  render() {
    return (
      <div className="rows">
        <PortfolioRow title="ILLUSTRATION" />
        <PortfolioRow title="APPLICATION" />
        <PortfolioRow title="WEB DESIGN" />
        <PortfolioRow title="APPLICATION" />
        <PortfolioRow title="ANIMATION" />
        <PortfolioRow title="BRANDING" />
      </div>
    );
  }
}
