import React, { Component } from "react";

export default class Header extends Component {
  state = {

  };

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
                    <a href="/dlfkd.com">
                      <i className="fas fa-home" />{" "}
                    </a>
                  </li>

                  <li className="hidden-sm">
                    <a
                      href="/gldkf.com"
                    >
                      Home
                    </a>
                  </li>

                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="magazine-categories.html">
                          Magazine Categories
                        </a>
                      </li>
                      <li>
                        <a href="magazine-single-article.html">
                          Magazine Single Article
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="faq.html">F.A.Q</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                    </ul>
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
