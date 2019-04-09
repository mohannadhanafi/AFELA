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
    tags: ['Creative', 'Creative', 'Creative', 'Creative'],
    author: {
      image: 'http://deothemes.com/envato/afela/html/img/blog/author.jpg',
      name: 'BY MARIA RODRIGUES',
      bio:
        'In order to understand how the conscious and subconscious minds. Find me on Facebook, on Twitter or Google +. As a team to create your reality, let me again use an analogy. Your subconscious mind is like fertile soil which accepts any seed you plant within it.',
    },
  };

  render() {
    const { images, tags, author } = this.state;
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
                      <i className="fa fa-clock-o" />
                      <a href="#">19 July, 2015</a>
                    </li>
                    <li className="entry-category">
                      <i className="fa fa-folder-open" />
                      <a href="#">Fashion</a>
                    </li>
                    <li className="entry-author">
                      <i className="fa fa-user" />
                      <a href="#">Admin</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
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
                  <div className="entry">
                    <div className="entry-content">
                      <p>
                        We possess within us two minds. So far I have written
                        only of the conscious mind. It's the fastest-funded
                        project and also the most funded - by far. We possess
                        within us two minds. So far I have written only of the
                        conscious mind. I would now like to introduce you to
                        your second mind. And finally the subconscious is the
                        mechanism through which thought impulses which are
                        repeated regularly with feeling and emotion are
                        quickened, charged and changed into their physical
                        equivalent.
                      </p>

                      <blockquote className="blockquote-style-2 mt-30 mb-30">
                        <p>
                          Be who you are and say what you feel, because those
                          who mind don't matter, and those who matter don't
                          mind.
                        </p>
                        <span>Bernard M. Baruch</span>
                      </blockquote>

                      <p>
                        Afela Theme is a very slick and clean e-commerce
                        template with endless possibilities. Creating an awesome
                        clothes store with this Theme is easy than you can
                        imagine. We possess within us two minds. So far I have
                        written only of the conscious mind. I would now like to
                        introduce you to your second mind, the hidden and
                        mysterious subconscious. Our subconscious mind contains
                        such power and complexity that it literally staggers the
                        imagination.
                      </p>

                      <h5>Afela is the best flexible theme on themeforest</h5>

                      <p>
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. And finally the
                        subconscious is the mechanism through which thought
                        impulses which are repeated regularly with feeling and
                        emotion are quickened, charged. And finally the
                        subconscious is the mechanism through which thought
                        impulses which are repeated regularly with feeling and
                        emotion are quickened, charged and changed into their
                        physical equivalent.
                      </p>
                      <div className="entry-tags tags mb-30 mt-40 clearfix">
                        <span className="uppercase left">Tags : </span>
                        {tags.map(tag => (
                          <a href="#">{tag}</a>
                        ))}
                      </div>
                      <div className="entry-share">
                        <div className="socials-share clearfix">
                          <span className="uppercase">Share:</span>
                          <div className="social-icons colored">
                            <a
                              href="#"
                              className="social-twitter"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Twitter"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              href="#"
                              className="social-facebook"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Facebook"
                            >
                              <i className="fab fa-facebook" />
                            </a>
                            <a
                              href="#"
                              className="social-google-plus"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Google +"
                            >
                              <i className="fab fa-google-plus" />
                            </a>
                            <a
                              href="#"
                              className="social-pinterest"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Pinterest"
                            >
                              <i className="fab fa-pinterest-p" />
                            </a>
                            <a
                              href="#"
                              className="social-instagram"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Instagram"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              href="#"
                              className="social-email"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Email"
                            >
                              <i className="fa fa-envelope" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="entry-author-box clearfix">
                        <img src={author.image} className="author-img" alt="img" />
                        <div className="author-info">
                          <h6 className="author-name uppercase">
                            by {author.name}{' '}
                          </h6>

                          <p className="mb-0">{author.bio}</p>
                        </div>
                      </div>
                      <div className="entry-prev-next">
                        <div className="row">
                          <div className="col-sm-6 prev-entry">
                            <span>
                              <i className="fa fa-angle-left" />Previous Post
                            </span>
                            <h4>
                              <a href="blog-single.html">
                                The New Development Bank will have an African
                                regional branch
                              </a>
                            </h4>
                          </div>
                          <div className="col-sm-6 next-entry">
                            <span>
                              Next Post<i className="fa fa-angle-right" />
                            </span>
                            <h4>
                              <a href="blog-single.html">
                                Afela theme is multi-purpose solution for any
                                kind of business
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
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
