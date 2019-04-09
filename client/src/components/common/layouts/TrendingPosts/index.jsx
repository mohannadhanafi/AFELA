/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';

export default class TrendingPosts extends Component {
  state = {
    categories: ['WORLD', 'SPORTS', 'TRAVEL', 'fashion'],
    news: [
      {
        title:
          'WORLD The Golden Age: How the PR Industry Is Coming Into its Own.',
        category: 'sports',
        image: 'http://deothemes.com/envato/afela/html/img/magazine/1.jpg',
        description:
          'We possess within us two minds. So far I have writtenonly of the conscious mind.',
        date: '19 Dec, 2015',
        comments: 15,
      },
      {
        title:
          'WORLD The Golden Age: How the PR Industry Is Coming Into its Own.',
        category: 'sports',
        image: 'http://deothemes.com/envato/afela/html/img/magazine/1.jpg',
        description:
          'We possess within us two minds. So far I have writtenonly of the conscious mind.',
        date: '19 Dec, 2015',
        comments: 15,
      },
      {
        title:
          'WORLD The Golden Age: How the PR Industry Is Coming Into its Own.',
        category: 'sports',
        image: 'http://deothemes.com/envato/afela/html/img/magazine/1.jpg',
        description:
          'We possess within us two minds. So far I have writtenonly of the conscious mind.',
        date: '19 Dec, 2015',
        comments: 15,
      },
      {
        title:
          'WORLD The Golden Age: How the PR Industry Is Coming Into its Own.',
        category: 'fashion',
        image: 'http://deothemes.com/envato/afela/html/img/magazine/1.jpg',
        description:
          'We possess within us two minds. So far I have writtenonly of the conscious mind.',
        date: '19 Dec, 2015',
        comments: 15,
      },
      {
        title:
          'WORLD The Golden Age: How the PR Industry Is Coming Into its Own.',
        category: 'fashion',
        image: 'http://deothemes.com/envato/afela/html/img/magazine/1.jpg',
        description:
          'We possess within us two minds. So far I have writtenonly of the conscious mind.',
        date: '19 Dec, 2015',
        comments: 15,
      },
      {
        title:
          'WORLD The Golden Age: How the PR Industry Is Coming Into its Own.',
        category: 'sports',
        image: 'http://deothemes.com/envato/afela/html/img/magazine/1.jpg',
        description:
          'We possess within us two minds. So far I have writtenonly of the conscious mind.',
        date: '19 Dec, 2015',
        comments: 15,
      },
    ],
  };

  render() {
    const { categories, news } = this.state;
    return (
      <section className="section-wrap relative pb-0 pt-0">
        <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">
          trending news
        </h2>
        <div className="cat-filter tabs">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#tab-all" data-toggle="tab">
                all
              </a>
            </li>
            {categories.map((category) => (
              <li>
                <a href={`#tab-${category}`} data-toggle="tab">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="row">
          <div className="tab-content clearfix nopadding">
            <div className="tab-pane fade in active" id="tab-all">
              <div className="col-md-6 mb-50">
                <article>
                  <div className="entry-img hover-scale">
                    <a
                      href="magazine-single-article.html"
                      className="entry-category-label blue"
                    >
                      {news[0].category}
                    </a>
                    <a href="magazine-single-article.html">
                    <img src={news[0].image} alt="" />
                    </a>
                  </div>
                  <div className="entry mb-0">
                    <h2 className="entry-title">
                      <a href="magazine-single-article.html">
               {news[0].title}
                      </a>
                    </h2>
                    <ul className="entry-meta list-inline">
                      <li className="entry-date">
                        <a href="#">{news[0].date}</a>
                      </li>
                      <li className="entry-comments">
                        <i className="fa fa-comments" />
                        <a href="magazine-single-article.html">15</a>
                      </li>
                    </ul>
                    <div className="entry-content">
                      <p>
{news[0].description}
                      </p>
                      <a
                        href="magazine-single-article.html"
                        className="read-more dark-link"
                      >
                        Read More <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </article>

                <ul className="posts-list">
                  <li>
                    <article className="post-small clearfix">
                      <div className="entry-img hover-scale">
                        <a href="magazine-single-article.html">
                        <img src={news[0].image} alt="" />
                        </a>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title">
                          <a href="magazine-single-article.html">
                           {news[0].title}
                          </a>
                        </h3>
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
                        <img src={news[0].image} alt="" />
                        </a>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title">
                          <a href="magazine-single-article.html">
                            3 Key Lessons for My Kids About Becoming
                            Entrepreneurs
                          </a>
                        </h3>
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
                    <a
                      href="magazine-single-article.html"
                      className="entry-category-label gold"
                    >
                      Fashion
                    </a>
                    <a href="magazine-single-article.html">
                    <img src={news[0].image} alt="" />
                    </a>
                  </div>
                  <div className="entry mb-0">
                    <h2 className="entry-title">
                      <a href="magazine-single-article.html">
                        RadioShack Rescue Deal Dogged by Fights, Demands for New
                        Auction
                      </a>
                    </h2>
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
                      <p>
                        We possess within us two minds. So far I have written
                        only of the conscious mind.
                      </p>
                      <a
                        href="magazine-single-article.html"
                        className="read-more dark-link"
                      >
                        Read More <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </article>

                <ul className="posts-list">
                  <li>
                    <article className="post-small clearfix">
                      <div className="entry-img hover-scale">
                        <a href="magazine-single-article.html">
                        <img src={news[0].image} alt="" />
                        </a>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title">
                          <a href="magazine-single-article.html">
                            Introverts at Work: Why You Withdraw and One Way to
                            Cope
                          </a>
                        </h3>
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
                        <img src={news[0].image} alt="" />
                        </a>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title">
                          <a href="magazine-single-article.html">
                            3 Great Ways to Create an Emotional Bond with
                            Customers
                          </a>
                        </h3>
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
}
