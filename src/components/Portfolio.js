import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Maintitle from "./Maintitle";
import PortfolioRows from "./PortfolioRows";

export default class Portfolio extends Component {
  render() {
    return (
      <div class="co-section portfolio-section">
        <div class="container">
          <Maintitle title="Portfolio" text="Checkout a few of my works" />
          <PortfolioRows />
        </div>
      </div>
    );
  }
}
