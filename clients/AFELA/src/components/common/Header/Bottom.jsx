/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="nav-wrap">
          <div className="container">
            <div className="row">
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav">
                  <li id="mobile-search" className="hidden-lg hidden-md">
                    <form method="get" className="mobile-search relative">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button type="submit" className="search-button">
                        <i className="icon icon_search" />
                      </button>
                    </form>
                  </li>

                  <li className="nav-home hidden-sm hidden-xs">
                    <Link to="/">
                      <i className="fas fa-home" />{' '}
                    </Link>
                  </li>

                  <li className="hidden-sm">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hidden-sm">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="hidden-sm">
                    <Link to="/about">About Us</Link>
                  </li>

                  <li className="nav-search type-2 hidden-sm hidden-xs">
                    <form method="get">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <button type="submit" className="search-button">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </li>

                  <li className="mobile-links hidden-lg hidden-md">
                    <ul>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Join</a>
                      </li>
                      <li>
                        <a href="#">Advertise</a>
                      </li>
                      <li>
                        <a href="#">Buy Now</a>
                      </li>
                    </ul>
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
