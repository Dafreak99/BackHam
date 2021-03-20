import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="co-section about-section">
        <div className="container">
          <div className="left-column" />
          <div className="middle-column" />
          <div className="right-column">
            <h1>About</h1>
            <div className="info">
              <h3>Hi! I'm Beckham Muff</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in.
              </p>
              <a href="">Checkout my resume</a>
              <div className="social-media">
                <li>
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </div>
              <h4>Contact me here</h4>
              <ul>
                <li>
                  <p>
                    Email: <span>beckham@gmail.com</span>
                  </p>
                  <p>
                    Phone: <span>(123)-456-789</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
