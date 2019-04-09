/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import FollowUs from '../../common/FollowUs';
import Popular from '../../common/Popular';

export default class SigleArtice extends Component {
  state = {
    images: [
      'http://deothemes.com/envato/afela/html/img/blog/gallery_post_img_1.jpg',
      'http://deothemes.com/envato/afela/html/img/blog/gallery_post_img_3.jpg',
      'http://deothemes.com/envato/afela/html/img/blog/gallery_post_img_2.jpg',
    ],
  };

  render() {
    const { images } = this.state;
    return (
      <div className="main-wrapper magazine oh">
        <div className="container">
          <ol className="breadcrumb mt-20">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Pages</a>
            </li>
            <li className="active">Magazine Single</li>
          </ol>
        </div>

        <section className="section-wrap post-single pt-0 pb-50">
          <div className="container">
            <div className="row mt-40">
              <div className="col-md-8 content">
                <div className="entry-item">
                  <h1 className="entry-title">
                    Treat Your Employees Well. They Are Your Best Brand
                    Ambassadors
                  </h1>
                  <ul className="entry-meta list-inline mb-30">
                    <li className="entry-date">
                      <i className="fab fa-clock-o" />
                      <a href="#">19 July, 2015</a>
                    </li>
                    <li className="entry-category">
                      <i className="fab fa-folder-open" />
                      <a href="#">Fashion</a>
                    </li>
                    <li className="entry-author">
                      <i className="fab fa-user" />
                      <a href="#">Admin</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fab fa-comments" />
                      <a href="blog-single.html">15</a>
                    </li>
                  </ul>

                  <div className="entry-slider">
                    <div className="flexslider" id="flexslider">
                      <ul className="slides clearfix">
                        {images.map(image => (
                          <li>
                            <a href="#">
                              <img src={image} alt="" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
        
                </div>
              </div>
              <aside className="col-md-4 sidebar pb-50">
                <FollowUs />
                <Popular />
              </aside>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
