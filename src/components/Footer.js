import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div class="co-section footer-section">
        <div class="container">
          <div class="social-media">
            <li>
              <a href="">
                <i class="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-instagram" />
              </a>
            </li>
          </div>
          <div class="text">
            <h3>Contact Us</h3>
            <h4>info@email.com</h4>
          </div>
        </div>
      </div>
    );
  }
}
