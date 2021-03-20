import React, { Component } from "react";

export default class SmallThumbnail extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="each-thumbnail">
        <img src={image} />
        <div className="time-mark">
          <p>July 12, 2018</p>
          <p>Admin</p>
          <p>
            <i className="fa fa-comments" /> 3
          </p>
        </div>

        <div className="thumbnail-title">
          <h4>
            Even the all-powerful Pointing has no control about the blind texts
          </h4>
        </div>
      </div>
    );
  }
}
