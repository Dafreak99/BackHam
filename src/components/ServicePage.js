import React, { Component } from "react";
import Mainnav from "./Mainnav";
import Page from "./Page";
import Service from "./Service";
import Footer from "./Footer";

export default class ServicePage extends Component {
  render() {
    const { isMainNavShow, onExitMainNav, onMainNavShow } = this.props;
    return (
      <React.Fragment>
        <Mainnav isMainNavShow={isMainNavShow} onExitMainNav={onExitMainNav} />
        <Page onMainNavShow={onMainNavShow} />
        <Service />
        <Footer />
      </React.Fragment>
    );
  }
}
