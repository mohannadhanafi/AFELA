/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import TabCats from './TabCats';

class TrendingPosts extends Component {
  state = {
    finalData: [],
    Trending: [],
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

  componentDidMount() {
    axios('/api/v1/posts/trendingPosts').then((result) => {
      const { data: { Trending, finalData } } = result;
      console.log(result.data);

      this.setState(() => ({ Trending, finalData }));
    });
    const { seo } = this.props;
    // axios.get(`/api/v1/CatWithPosts/${seo}`).then((results) => {
    //   const { data } = results;
    //   const { result } = data;
    //   const { rows } = result;

    //   this.setState({ news: rows });
    // });
  }

  render() {
    const {
      categories, news, Trending, finalData,
    } = this.state;
    return (
      news.length ? (
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
              {finalData.length && finalData.map(category => (
                <li>
                  <a href={`#tab-${category.categoryDetails.name}`} data-toggle="tab">
                    {category.categoryDetails.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="row">
            <div className="tab-content clearfix nopadding">
              <div className="tab-pane fade in active" id="tab-all">
                <div className="col-md-6 mb-50">
                  {Trending.length && Trending[0] ? (
                    <article>
                      <div className="entry-img hover-scale">
                        <a
                          href="magazine-single-article.html"
                          className="entry-category-label blue"
                        >
                          {Trending[0].category.category_name}
                        </a>
                        <a href="magazine-single-article.html">
                          <img src={`/api/v1/getFile/${Trending[0].header_media[0]}`} alt="" />
                        </a>
                      </div>
                      <div className="entry mb-0">
                        <h2 className="entry-title">
                          <a href="magazine-single-article.html">
                            {Trending[0].title}
                          </a>
                        </h2>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <Link to={`/news/${Trending[0].category.category_seo}/${Trending[0].seo}`}>{moment(Trending[0].createdAt).calendar()}</Link>
                          </li>
                        </ul>
                        <div className="entry-content">
                          <p>
                            {ReactHtmlParser(Trending[0].description)}
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
                  ) : null}
                  <ul className="posts-list">

                    {Trending.length ? Trending.slice(1, 3).map(post => (
                      <li>
                        <article className="post-small clearfix">
                          <div className="entry-img hover-scale">
                            <a href="magazine-single-article.html">
                              <img src={`/api/v1/getFile/${post.header_media[0]}`} alt="" />
                            </a>
                          </div>
                          <div className="entry">
                            <h3 className="entry-title">
                              <a href="magazine-single-article.html">
                                {post.title}
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
                    )) : null}
                  </ul>

                </div>
                <div className="col-md-6 mb-50">
                  {Trending.length && Trending[4] ? (
                    <article>
                      <div className="entry-img hover-scale">
                        <a
                          href="magazine-single-article.html"
                          className="entry-category-label blue"
                        >
                          {Trending[4].category.category_name}
                        </a>
                        <a href="magazine-single-article.html">
                          <img src={`/api/v1/getFile/${Trending[4].header_media[0]}`} alt="" />
                        </a>
                      </div>
                      <div className="entry mb-0">
                        <h2 className="entry-title">
                          <a href="magazine-single-article.html">
                            {Trending[4].title}
                          </a>
                        </h2>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <Link to={`/news/${Trending[4].category.category_seo}/${Trending[4].seo}`}>{moment(Trending[4].createdAt).calendar()}</Link>
                          </li>
                        </ul>
                        <div className="entry-content">
                          <p>
                            {ReactHtmlParser(Trending[4].description)}
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
                  ) : null}
                  <ul className="posts-list">

                    {Trending.length ? Trending.slice(3, 6).map(post => (
                      <li>
                        <article className="post-small clearfix">
                          <div className="entry-img hover-scale">
                            <a href="magazine-single-article.html">
                              <img src={`/api/v1/getFile/${post.header_media[0]}`} alt="" />
                            </a>
                          </div>
                          <div className="entry">
                            <h3 className="entry-title">
                              <a href="magazine-single-article.html">
                                {post.title}
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
                    )) : null}
                  </ul>

                </div>

              </div>
              {finalData.length ? finalData.map(category => (<TabCats data={category} />)) : null}
            </div>

          </div>
        </section>
      ) : null
    );
  }
}

export default withRouter(TrendingPosts);
