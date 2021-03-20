import React, { Component } from "react";
import "../stylesheets/Pagination.css";

export default class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        <div className="container">
          <div>
            <a href="#">
              <i class="fa fa-caret-left" />
            </a>
          </div>
          <div className="active">
            <a href="#">1</a>
          </div>
          <div>
            <a href="#">2</a>
          </div>
          <div>
            <a href="#">3</a>
          </div>
          <div>
            <a href="#">4</a>
          </div>
          <div>
            <a href="#">5</a>
          </div>
          <div>
            <a href="#">
              <i class="fa fa-caret-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
