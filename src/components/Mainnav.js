import React, { Component } from "react";
import { timingSafeEqual } from "crypto";
import { Link } from "react-router-dom";

export default class Mainnav extends Component {
  render() {
    const { isMainNavShow, onExitMainNav } = this.props;

    return (
      <div className={isMainNavShow ? "main-nav appear" : "main-nav"}>
        <div class="left-column" />
        <div class="right-column">
          <h3>Beckham Muff</h3>
          <ul>
            <li>
              <Link to="/" onClick={onExitMainNav}>
                <span>01</span> HOME
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={onExitMainNav}>
                <span>02</span> RESUME
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={onExitMainNav}>
                <span>03</span> SERVICES
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={onExitMainNav}>
                <span>04</span> PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={onExitMainNav}>
                <span>05</span> BLOG
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={onExitMainNav}>
                <span>06</span> CONTACT
              </Link>
            </li>
          </ul>
          <div class="exit" onClick={onExitMainNav}>
            X
          </div>
        </div>
      </div>
    );
  }
}
