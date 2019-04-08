import React, { Component } from 'react';

export default class Header extends Component {
    state = {}

    render() {
      return (

        <header className="nav-type-4">
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
                      <a href="#"><i className="fab fa-twitter" /></a>
                      <a href="#"><i className="fab fa-facebook" /></a>
                      <a href="#"><i className="fab fa-google-plus" /></a>
                      <a href="#"><i className="fab fa-vimeo" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                    </li>
                    <li className="top-bar-link"><a href="#">Join</a></li>
                    <li className="top-bar-link"><a href="#">Login</a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-static-top">
			<div className="navigation">
				<div className="container-fluid relative">
        <div className="row">

<div className="navbar-header container">
  <div className="row">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  </div>
</div>

                  <div className="header-wrap">

                    <div className="container">
                      <div className="row">

                        <div className="logo-container">
              <div className="logo-wrap text-center">
              <a href="index.html">
              <img className="logo" src="img/logo_dark.png" alt="logo" />
            </a>
            </div>
            </div>

                        <div className="header-ad hidden-sm hidden-xs">
              <a href="http://deothemes.com">
              <img src="img/magazine/728_ad.jpg" alt="" />
            </a>
            </div>

                      </div>
                    </div>

                  </div>

                  <div className="nav-wrap">
                    <div className="container">
                      <div className="row">
                      <div class="collapse navbar-collapse" id="navbar-collapse">

              <ul className="nav navbar-nav">

              <li id="mobile-search" className="hidden-lg hidden-md">
              <form method="get" className="mobile-search relative">
              <input type="search" className="form-control" placeholder="Search..." />
              <button type="submit" className="search-button">
              <i className="icon icon_search" />
            </button>
            </form>
            </li>

              <li className="nav-home hidden-sm hidden-xs">
              <a href="index-magazine.html"><i className="icon_house" /></a>
            </li>

              <li className="dropdown active">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
              <ul className="dropdown-menu">
              <li><a href="index.html">Home Multi-page</a></li>
              <li><a href="index-onepage.html">Home Onepage</a></li>
              <li><a href="index-agency.html">Home Agency</a></li>
              <li><a href="index-shop.html">Home Shop</a></li>
              <li><a href="index-magazine.html">Home Magazine</a></li>
              <li><a href="index-photography.html">Home Photography</a></li>
              <li><a href="index-photography-2.html">Home Photography v2</a></li>
              <li><a href="index-photography-3.html">Home Photography v3</a></li>
            </ul>
            </li>

              <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages</a>
              <ul className="dropdown-menu">
              <li><a href="services.html">Services</a></li>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="magazine-categories.html">Magazine Categories</a></li>
              <li><a href="magazine-single-article.html">Magazine Single Article</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="faq.html">F.A.Q</a></li>
              <li><a href="404.html">404</a></li>
            </ul>
            </li>

              <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio</a>
              <ul className="dropdown-menu megamenu">
              <li>
              <div className="megamenu-wrap">
              <div className="row">

              <div className="col-md-3 megamenu-item">
              <h6>Grids</h6>
              <ul className="menu-list">
              <li><a href="portfolio-4-col.html">4 Columns</a></li>
              <li><a href="portfolio-3-col.html">3 Columns</a></li>
              <li><a href="portfolio-2-col.html">2 Columns</a></li>
              <li><a href="portfolio-single.html">Single Project</a></li>
            </ul>
            </div>

              <div className="col-md-3 megamenu-item">
              <h6>Wide</h6>
              <ul className="menu-list">
              <li><a href="portfolio-5-col-wide.html">5 Columns</a></li>
              <li><a href="portfolio-4-col-wide.html">4 Columns</a></li>
              <li><a href="portfolio-3-col-wide.html">3 Columns</a></li>
              <li><a href="portfolio-2-col-wide.html">2 Columns</a></li>
            </ul>
            </div>

              <div className="col-md-3 megamenu-item">
              <h6>Masonry</h6>
              <ul className="menu-list">
              <li><a href="portfolio-5-col-masonry.html">5 Columns</a></li>
              <li><a href="portfolio-4-col-masonry.html">4 Columns</a></li>
              <li><a href="portfolio-3-col-masonry.html">3 Columns</a></li>
              <li><a href="portfolio-2-col-masonry.html">2 Columns</a></li>
            </ul>
            </div>

              <div className="col-md-3 megamenu-item">
              <h6>With Title</h6>
              <ul className="menu-list">
              <li><a href="portfolio-5-col-title.html">5 Columns</a></li>
              <li><a href="portfolio-4-col-title.html">4 Columns</a></li>
              <li><a href="portfolio-3-col-title.html">3 Columns</a></li>
              <li><a href="portfolio-2-col-title.html">2 Columns</a></li>
            </ul>
            </div>

            </div>
            </div>
            </li>
            </ul>
            </li>

              <li className="dropdown">
              <a href="#" className="dropdown-toggle">Blog</a>
              <ul className="dropdown-menu">
              <li><a href="blog-standard.html">Standard</a></li>
              <li><a href="blog-masonry.html">Masonry</a></li>
              <li><a href="blog-single.html">Single Post</a></li>
              <li><a href="blog-no-sidebar.html">No Sidebar</a></li>
            </ul>
            </li>

              <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Shop</a>
              <ul className="dropdown-menu">
              <li><a href="shop-catalog-grid.html">Catalog Grid</a></li>
              <li><a href="shop-catalog-list.html">Catalog List</a></li>
              <li><a href="shop-single-product.html">Single Product</a></li>
              <li><a href="shop-cart.html">Cart</a></li>
              <li><a href="shop-checkout.html">Checkout</a></li>
            </ul>
            </li>

              <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Features</a>
              <ul className="dropdown-menu megamenu">
              <li>
              <div className="megamenu-wrap">
              <div className="row">

              <div className="col-md-3 megamenu-item no-headings">
              <ul className="menu-list">
              <li><a href="accordions.html">Accordions &amp; Toggles</a></li>
              <li><a href="alert-boxes.html">Alert Boxes</a></li>
              <li><a href="animations.html">Animations</a></li>
              <li><a href="buttons.html">Buttons</a></li>
            </ul>
            </div>

              <div className="col-md-3 megamenu-item no-headings">
              <ul className="menu-list">
              <li><a href="columns.html">Columns</a></li>
              <li><a href="counters.html">Counters</a></li>
              <li><a href="forms.html">Form Elements</a></li>
              <li><a href="lightboxes.html">Lightboxes</a></li>
            </ul>
            </div>

              <div className="col-md-3 megamenu-item no-headings">
              <ul className="menu-list">
              <li><a href="icon-boxes.html">Icon Boxes</a></li>
              <li><a href="pie-skills.html">Pies &amp; Skills</a></li>
              <li><a href="pricing-tables.html">Pricing Tables</a></li>
              <li><a href="sliders.html">Sliders</a></li>
            </ul>
            </div>

              <div className="col-md-3 megamenu-item no-headings">
              <ul className="menu-list">
              <li><a href="socials.html">Social Icons</a></li>
              <li><a href="tabs.html">Tabs</a></li>
              <li><a href="tables.html">Tables</a></li>
              <li><a href="typography.html">Typography</a></li>
            </ul>
            </div>

            </div>
            </div>
            </li>
            </ul>
            </li>

              <li className="nav-search type-2 hidden-sm hidden-xs">
              <form method="get">
              <input type="search" className="form-control" placeholder="Searcdsfsdfh here" />
              <button type="submit" className="search-button">
              <i className="icon icon_search" />
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

                </div>
              </div>
            </div>
          </nav>
        </header>
      );
    }
}
