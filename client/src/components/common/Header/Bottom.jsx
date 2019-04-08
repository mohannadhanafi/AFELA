import React, { Component } from "react";

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
                    <a href="/dlfkd.com">
                      <i className="fas fa-home" />{" "}
                    </a>
                  </li>

                  <li className="active">
                    <a
                      href="/gldkf.com"
                      target="_blank"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
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

                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Portfolio
                    </a>
                    <ul className="dropdown-menu megamenu">
                      <li>
                        <div className="megamenu-wrap">
                          <div className="row">
                            <div className="col-md-3 megamenu-item">
                              <h6>Grids</h6>
                              <ul className="menu-list">
                                <li>
                                  <a href="portfolio-4-col.html">4 Columns</a>
                                </li>
                                <li>
                                  <a href="portfolio-3-col.html">3 Columns</a>
                                </li>
                                <li>
                                  <a href="portfolio-2-col.html">2 Columns</a>
                                </li>
                                <li>
                                  <a href="portfolio-single.html">
                                    Single Project
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-3 megamenu-item">
                              <h6>Wide</h6>
                              <ul className="menu-list">
                                <li>
                                  <a href="portfolio-5-col-wide.html">
                                    5 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-4-col-wide.html">
                                    4 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-3-col-wide.html">
                                    3 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-2-col-wide.html">
                                    2 Columns
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-3 megamenu-item">
                              <h6>Masonry</h6>
                              <ul className="menu-list">
                                <li>
                                  <a href="portfolio-5-col-masonry.html">
                                    5 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-4-col-masonry.html">
                                    4 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-3-col-masonry.html">
                                    3 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-2-col-masonry.html">
                                    2 Columns
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-3 megamenu-item">
                              <h6>With Title</h6>
                              <ul className="menu-list">
                                <li>
                                  <a href="portfolio-5-col-title.html">
                                    5 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-4-col-title.html">
                                    4 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-3-col-title.html">
                                    3 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-2-col-title.html">
                                    2 Columns
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog-standard.html">Standard</a>
                      </li>
                      <li>
                        <a href="blog-masonry.html">Masonry</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Single Post</a>
                      </li>
                      <li>
                        <a href="blog-no-sidebar.html">No Sidebar</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="shop-catalog-grid.html">Catalog Grid</a>
                      </li>
                      <li>
                        <a href="shop-catalog-list.html">Catalog List</a>
                      </li>
                      <li>
                        <a href="shop-single-product.html">Single Product</a>
                      </li>
                      <li>
                        <a href="shop-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="shop-checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Features
                    </a>
                    <ul className="dropdown-menu megamenu">
                      <li>
                        <div className="megamenu-wrap">
                          <div className="row">
                            <div className="col-md-3 megamenu-item no-headings">
                              <ul className="menu-list">
                                <li>
                                  <a href="accordions.html">
                                    Accordions &amp; Toggles
                                  </a>
                                </li>
                                <li>
                                  <a href="alert-boxes.html">Alert Boxes</a>
                                </li>
                                <li>
                                  <a href="animations.html">Animations</a>
                                </li>
                                <li>
                                  <a href="buttons.html">Buttons</a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-3 megamenu-item no-headings">
                              <ul className="menu-list">
                                <li>
                                  <a href="columns.html">Columns</a>
                                </li>
                                <li>
                                  <a href="counters.html">Counters</a>
                                </li>
                                <li>
                                  <a href="forms.html">Form Elements</a>
                                </li>
                                <li>
                                  <a href="lightboxes.html">Lightboxes</a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-3 megamenu-item no-headings">
                              <ul className="menu-list">
                                <li>
                                  <a href="icon-boxes.html">Icon Boxes</a>
                                </li>
                                <li>
                                  <a href="pie-skills.html">
                                    Pies &amp; Skills
                                  </a>
                                </li>
                                <li>
                                  <a href="pricing-tables.html">
                                    Pricing Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="sliders.html">Sliders</a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-3 megamenu-item no-headings">
                              <ul className="menu-list">
                                <li>
                                  <a href="socials.html">Social Icons</a>
                                </li>
                                <li>
                                  <a href="tabs.html">Tabs</a>
                                </li>
                                <li>
                                  <a href="tables.html">Tables</a>
                                </li>
                                <li>
                                  <a href="typography.html">Typography</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-search type-2 hidden-sm hidden-xs">
                    <form method="get">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Searcdsfsdfh here"
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
