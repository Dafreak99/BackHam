import React, { Component } from "react";
import Mainnav from "./Mainnav";
import Page from "./Page";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import StatisticPortfolio from "./StatisticPortfolio";
import Footer from "./Footer";
import Header from "./Header";
import Maintitle from "./Maintitle";
import Thumbnail from "./Thumbnail";
import Pagination from "./Pagination";

export default class HomePage extends Component {
  render() {
    const { isMainNavShow, onExitMainNav, onMainNavShow } = this.props;
    return (
      <React.Fragment>
        <Mainnav isMainNavShow={isMainNavShow} onExitMainNav={onExitMainNav} />
        <Header onMainNavShow={onMainNavShow} />
        <div className="co-section portfolio">
          <div className="container">
            <Maintitle title="Portfolio" text="Checkout a few of my works" />
            <Thumbnail />
          </div>
        </div>
        <Pagination />
        <Footer />
      </React.Fragment>
    );
  }
}
