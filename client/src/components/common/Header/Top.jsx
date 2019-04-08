import React, { Component } from "react";

export default class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="top-bar hidden-xs">
          <div className="container">
            <div className="row">
              <div className="top-bar-links">
                <ul className="col-sm-6">
                  <li className="top-bar-date">
                    <span>Thursday, December 26, 2015</span>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">advertise</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">buy now</a>
                  </li>
                </ul>

                <ul className="col-sm-6 top-bar-acc text-right">
                  <li className="social-icons dark">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">Join</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
