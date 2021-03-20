import React, { Component } from "react";
import SmallThumbnail from "./SmallThumbnail";
import img1 from "../images/image_1.jpg";
import img2 from "../images/image_2.jpg";
import img3 from "../images/image_3.jpg";
import img4 from "../images/image_4.jpg";
import img5 from "../images/image_5.jpg";
import img6 from "../images/image_6.jpg";
export default class Thumbnail extends Component {
  render() {
    return (
      <React.Fragment>
        <SmallThumbnail image={img1} />
        <SmallThumbnail image={img2} />
        <SmallThumbnail image={img3} />
        <SmallThumbnail image={img4} />
        <SmallThumbnail image={img5} />
        <SmallThumbnail image={img6} />
      </React.Fragment>
    );
  }
}
