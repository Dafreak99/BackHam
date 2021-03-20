import React, { Component } from "react";
import logo from "./logo.svg";
import "./stylesheets/App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import ServicePage from "./components/ServicePage";
import PortfolioPage from "./components/PortfolioPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMainNavShow: false
    };
  }
  onMainNavShow = () => {
    this.setState({ isMainNavShow: true });
  };

  onExitMainNav = () => {
    this.setState({ isMainNavShow: false });
  };

  render() {
    const { isMainNavShow } = this.state;
    return (
      <div className="fullpage">
        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              isMainNavShow={isMainNavShow}
              onExitMainNav={this.onExitMainNav}
              onMainNavShow={this.onMainNavShow}
            />
          )}
        />

        <Route
          path="/resume"
          render={() => (
            <ResumePage
              isMainNavShow={isMainNavShow}
              onExitMainNav={this.onExitMainNav}
              onMainNavShow={this.onMainNavShow}
            />
          )}
        />

        <Route
          path="/service"
          render={() => (
            <ServicePage
              isMainNavShow={isMainNavShow}
              onExitMainNav={this.onExitMainNav}
              onMainNavShow={this.onMainNavShow}
            />
          )}
        />
        <Route
          path="/portfolio"
          render={() => (
            <PortfolioPage
              isMainNavShow={isMainNavShow}
              onExitMainNav={this.onExitMainNav}
              onMainNavShow={this.onMainNavShow}
            />
          )}
        />
        <Route
          path="/blog"
          render={() => (
            <BlogPage
              isMainNavShow={isMainNavShow}
              onExitMainNav={this.onExitMainNav}
              onMainNavShow={this.onMainNavShow}
            />
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <ContactPage
              isMainNavShow={isMainNavShow}
              onExitMainNav={this.onExitMainNav}
              onMainNavShow={this.onMainNavShow}
            />
          )}
        />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let portfolio = document.querySelector(".co-section.portfolio-section");
      let currentHeight = document.documentElement.scrollTop;
      let eachrows = document.querySelectorAll(".co-section .rows .each-row");
      let portfolioThumb = document.querySelector(".co-section.portfolio");
      let thumbnail = document.querySelectorAll(".container .each-thumbnail");

      if (portfolio && eachrows) {
        // check if query successful
        if (currentHeight - 50 > portfolio.offsetTop) {
          for (let i = 0; i < eachrows.length; i++) {
            setTimeout(() => {
              eachrows[i].classList.add("show");
            }, 800 * i);
          }
        }
      } else if (thumbnail && portfolioThumb) {
        if (currentHeight - 50 > portfolioThumb.offsetTop) {
          for (let i = 0; i < thumbnail.length; i++) {
            setTimeout(() => {
              thumbnail[i].classList.add("show");
            }, 500 * i);
          }
        }
      }
    });
  }
}

export default App;
