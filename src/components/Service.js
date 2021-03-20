import React, { Component } from "react";
import img1 from "../images/001-layers.png";
import img2 from "../images/002-settings.png";
import img3 from "../images/003-html-coding.png";

export default class Service extends Component {
  render() {
    return (
      <div class="co-section service-section">
        <div class="container">
          <div class="main-title">
            <h4>WHAT I DO</h4>
            <h3>My services</h3>
          </div>

          <div class="showcase">
            <div class="each-showcase">
              <img src={img1} />
              <p>UI/UX Design</p>
              <p>Mobile App Design</p>
              <p>Responsive Design</p>
            </div>
            <div class="each-showcase">
              <img src={img2} />
              <p>Product Strategy</p>
              <p>Design Sprints</p>
              <p>UX Strategy</p>
            </div>
            <div class="each-showcase">
              <img src={img3} />
              <p>HTML/CSS</p>
              <p>Prototyping</p>
              <p>User Testing</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
