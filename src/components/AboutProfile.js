import React, { Component } from "react";

export default class AboutProfile extends Component {
  render() {
    return (
      <div className="co-about-section about-profile-section">
        <div className="container">
          <div className="left-column" />
          <div className="right-column">
            <h4>Profile</h4>
            <h5>
              I'm a UI/UX Designer and Frontend Developer from London, UK. I aim
              to make a difference through my creative solution.
            </h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="information">
              <div className="left-column">
                <h4>
                  Name: <span>Beckham Muff</span>
                </h4>
                <h4>
                  Address:
                  <span> 88 West 21th Street, Suite 721 New York NY 10016</span>
                </h4>
                <h4>
                  Phone: <span> (123)-456-789</span>
                </h4>
              </div>
              <div className="right-column">
                <h4>
                  Name: <span>Beckham Muff</span>
                </h4>
                <h4>
                  Address:
                  <span> 88 West 21th Street, Suite 721 New York NY 10016</span>
                </h4>
                <h4>
                  Phone: <span> (123)-456-789</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
