import React, { Component } from "react";
import PortfolioRow from "./PortfolioRow";
import Maintitle from "./Maintitle";
import CountTo from "react-count-to";

export default class StatisticPortfolio extends Component {
  render() {
    return (
      <div className="co-section statistic-portfolio-section">
        <div className="container">
          <Maintitle title="Portfolio" text="I love to share my achievements" />
          <div class="rows">
            <div class="each-row">
              <div class="number-wrapper">
                <h3>CLIENTS</h3>
                <CountTo to={400} speed={1234} />
              </div>
            </div>
            <div class="each-row">
              <div class="number-wrapper">
                <h3>PROJECT DONE</h3>
                <CountTo to={30} speed={1234} />
              </div>
            </div>
            <div class="each-row">
              <div class="number-wrapper">
                <h3>CUPS OF COFFEE</h3>
                <CountTo to={1000} speed={1234} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
