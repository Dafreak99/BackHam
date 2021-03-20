import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="co-about-section skills-section">
        <div className="container">
          <div className="title">My Skills</div>
          <div className="progress-bars">
            <div className="progress-bar">
              <h5>Html</h5>
              <div className="bar">
                <div className="sub-bar" value="80">
                  <span />
                  <p />
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <h5>Css</h5>
              <div className="bar">
                <div className="sub-bar" value="76">
                  <span />
                  <p />
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <h5>Javascript</h5>
              <div className="bar">
                <div className="sub-bar" value="30">
                  <span />
                  <p />
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <h5>React</h5>
              <div className="bar">
                <div className="sub-bar" value="50">
                  <span />
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let subBar = document.querySelectorAll(".sub-bar");
    let p = document.querySelectorAll(".sub-bar p");
    for (let i = 0; i < subBar.length; i++) {
      let value = subBar[i].getAttribute("value");
      subBar[i].style.width = `${value + "%"}`;
      p[i].textContent = `${value + "%"}`;
    }
  }
}
