import React, { Component } from "react";
import avatar from "../images/person_1.jpg";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div class="container">
            <div class="logo">
              <Link to="/">
                <img src={avatar} alt="" />
                <span>BECKHAM MUFF</span>
              </Link>
            </div>
            <div class="toggle" onClick={this.props.onMainNavShow}>
              <div />
              <div />
              <div />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
