import React, { Component } from "react";
import "../stylesheets/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="co-section contact-section">
        <div className="container">
          <div className="contact-title">Contact Information</div>
          <div className="contact-info">
            <div className="each-contact-column">
              <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="each-contact-column">
              <p>
                Phone: <span>+ 1235 2355 98</span>
              </p>
            </div>
            <div className="each-contact-column">
              <p>
                Email: <span>info@yoursite.com</span>
              </p>
            </div>
            <div className="each-contact-column">
              <p>
                Website: <span>yoursite.com</span>
              </p>
            </div>
          </div>
          {/* end contact info */}
          <div className="contact-form">
            <div className="column-left">
              <form>
                <div className="list-group">
                  <input type="text" name="name" placeholder="Your name" />
                </div>
                <div className="list-group">
                  <input type="text" name="email" placeholder="Your email" />
                </div>
                <div className="list-group">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="list-group special">
                  <input type="textarea" name="message" placeholder="Message" />
                </div>
                <div className="list-group">
                  <button>Send Message</button>
                </div>
              </form>
            </div>
            <div className="column-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15714.98626526312!2d105.78794855!3d10.0377599!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1556031407717!5m2!1svi!2s"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
