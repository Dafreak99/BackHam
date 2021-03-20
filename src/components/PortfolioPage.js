import React, { Component } from "react";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Header from "./Header";
import Mainnav from "./Mainnav";
export default class PortfolioPage extends Component {
  render() {
    const { isMainNavShow, onExitMainNav, onMainNavShow } = this.props;
    return (
      <React.Fragment>
        <Mainnav isMainNavShow={isMainNavShow} onExitMainNav={onExitMainNav} />
        <Header onMainNavShow={onMainNavShow} />
        <Portfolio />
        <Footer />
      </React.Fragment>
    );
  }
}
