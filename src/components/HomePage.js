import React, { Component } from "react";
import Mainnav from "./Mainnav";
import Page from "./Page";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import StatisticPortfolio from "./StatisticPortfolio";
import Footer from "./Footer";

export default class HomePage extends Component {
  render() {
    const { isMainNavShow, onExitMainNav, onMainNavShow } = this.props;
    return (
      <React.Fragment>
        <Mainnav isMainNavShow={isMainNavShow} onExitMainNav={onExitMainNav} />
        <Page onMainNavShow={onMainNavShow} />
        <About />
        <Service />
        <Portfolio />
        <StatisticPortfolio />
        <Footer />
      </React.Fragment>
    );
  }
}
