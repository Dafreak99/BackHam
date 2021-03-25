import React, { Component } from "react";
import Mainnav from "./Mainnav";
import Footer from "./Footer";
import Header from "./Header";
import Maintitle from "./Maintitle";
import Thumbnail from "./Thumbnail";

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
        <div className="pagination">
          <div className="container">
            <div>
              <a href="#">
                <i class="fa fa-caret-left" />
              </a>
            </div>
            <div className="active">
              <a href="#">1</a>
            </div>
            <div>
              <a href="#">2</a>
            </div>
            <div>
              <a href="#">3</a>
            </div>
            <div>
              <a href="#">4</a>
            </div>
            <div>
              <a href="#">5</a>
            </div>
            <div>
              <a href="#">
                <i class="fa fa-caret-right" />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
