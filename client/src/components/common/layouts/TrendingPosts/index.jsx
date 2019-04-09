/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

export default function TrendingPosts() {
  return (
    <section className="section-wrap relative pb-0 pt-0">
      <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">trending news</h2>
      <div className="cat-filter tabs">
        <ul className="nav nav-tabs">
          <li className="active"><a href="#tab-all" data-toggle="tab">all</a></li>
          <li><a href="#tab-world" data-toggle="tab">world</a></li>
          <li><a href="#tab-travel" data-toggle="tab">travel</a></li>
          <li><a href="#tab-sport" data-toggle="tab">sport</a></li>
          <li><a href="#tab-fashion" data-toggle="tab">fashion</a></li>
        </ul>
      </div>

      <div className="row">

        <div className="tab-content clearfix nopadding">

          <div className="tab-pane fade in active" id="tab-all">

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html" className="entry-category-label blue">World</a>
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/1.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">The Golden Age: How the PR Industry Is Coming Into its Own.</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">6 Ways to Be More Productive by Working Less</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Key Lessons for My Kids About Becoming Entrepreneurs</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html" className="entry-category-label gold">Fashion</a>
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/2.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">RadioShack Rescue Deal Dogged by Fights, Demands for New Auction</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">Introverts at Work: Why You Withdraw and One Way to Cope</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Great Ways to Create an Emotional Bond with Customers</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>
          </div>

          <div className="tab-pane fade" id="tab-world">

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/3.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">5 Questions to Help You Determine the Right Franchise for You</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_6.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">6 Ways to Be More Productive by Working Less</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_7.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Key Lessons for My Kids About Becoming Entrepreneurs</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/4.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">How to Make Your Startup Introduction Email Simple, Clear and Awesome</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_9.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">Introverts at Work: Why You Withdraw and One Way to Cope</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_8.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Great Ways to Create an Emotional Bond with Customers</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>
          </div>

          <div className="tab-pane fade" id="tab-travel">

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/5.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">5 Ways to Give Thanks and Give Back at Work</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_10.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">6 Ways to Be More Productive by Working Less</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_11.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Key Lessons for My Kids About Becoming Entrepreneurs</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/6.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">5 Ways to Earn the Business of Customers Who'd Rather Shop on Cyber Monday</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_12.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">Introverts at Work: Why You Withdraw and One Way to Cope</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Great Ways to Create an Emotional Bond with Customers</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>
          </div>
          <div className="tab-pane fade" id="tab-sport">

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/7.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">5 Online Payment Tips That Improve Conversion</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">6 Ways to Be More Productive by Working Less</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_7.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Key Lessons for My Kids About Becoming Entrepreneurs</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/8.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">12 Founders on the Business Advice They Are Most Thankful For</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_6.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">Introverts at Work: Why You Withdraw and One Way to Cope</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Great Ways to Create an Emotional Bond with Customers</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>
          </div>

          <div className="tab-pane fade" id="tab-fashion">

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/9.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">The Entrepreneurship of Building the Best Wine Cellar</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_8.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">6 Ways to Be More Productive by Working Less</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Key Lessons for My Kids About Becoming Entrepreneurs</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>

            <div className="col-md-6 mb-50">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html">
                    <img src="img/magazine/10.jpg" alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title"><a href="magazine-single-article.html">16-Step Blueprint to Master Your Digital Marketing in 2016</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">19 Dec, 2015</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">


Read More
                      {' '}
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>

              <ul className="posts-list">
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_10.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">Introverts at Work: Why You Withdraw and One Way to Cope</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="post-small clearfix">
                    <div className="entry-img hover-scale">
                      <a href="magazine-single-article.html">
                        <img src="img/magazine/thumb_9.jpg" alt="" />
                      </a>
                    </div>
                    <div className="entry">
                      <h3 className="entry-title"><a href="magazine-single-article.html">3 Great Ways to Create an Emotional Bond with Customers</a></h3>
                      <ul className="entry-meta list-inline">
                        <li className="entry-date">
                          <a href="#">19 Dec, 2015</a>
                        </li>
                        <li className="entry-comments">
                          <i className="fa fa-comments" />
                          <a href="magazine-single-article.html">15</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>

            </div>
          </div>

        </div>


      </div>
    </section>

  );
}
