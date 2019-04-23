import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

class TabCats extends Component {
state = {}

render() {
  const { data: { categoryDetails: { name }, categoryPosts } } = this.props;
  return (
    <div className="tab-pane fade in" id={`tab-${name}`}>

      <div className="col-md-6 mb-50">
        {categoryPosts.length && categoryPosts[0] ? (
          <article>
            <div className="entry-img hover-scale">
              <a
                href="magazine-single-article.html"
                className="entry-category-label blue"
              >
                {categoryPosts[0].category.category_name}
              </a>
              <a href="magazine-single-article.html">
                <img src={`/api/v1/getFile/${categoryPosts[0].header_media[0]}`} alt="" />
              </a>
            </div>
            <div className="entry mb-0">
              <h2 className="entry-title">
                <a href="magazine-single-article.html">
                  {categoryPosts[0].title}
                </a>
              </h2>
              <ul className="entry-meta list-inline">
                <li className="entry-date">
                  <Link to={`/news/${categoryPosts[0].category.seo}/${categoryPosts[0].seo}`}>{moment(categoryPosts[0].createdAt).calendar()}</Link>
                </li>
              </ul>
              <div className="entry-content">
                <p>
                  {ReactHtmlParser(categoryPosts[0].description)}
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

          {categoryPosts.length ? categoryPosts.slice(1, 3).map(post => (
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
        {categoryPosts.length && categoryPosts[4] ? (
          <article>
            <div className="entry-img hover-scale">
              <a
                href="magazine-single-article.html"
                className="entry-category-label blue"
              >
                {categoryPosts[4].category.category_name}
              </a>
              <a href="magazine-single-article.html">
                <img src={`/api/v1/getFile/${categoryPosts[4].header_media[0]}`} alt="" />
              </a>
            </div>
            <div className="entry mb-0">
              <h2 className="entry-title">
                <a href="magazine-single-article.html">
                  {categoryPosts[4].title}
                </a>
              </h2>
              <ul className="entry-meta list-inline">
                <li className="entry-date">
                  <Link to={`/news/${categoryPosts[4].category.category_seo}/${categoryPosts[4].seo}`}>{moment(categoryPosts[4].createdAt).calendar()}</Link>
                </li>
              </ul>
              <div className="entry-content">
                <p>
                  {ReactHtmlParser(categoryPosts[4].description)}
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

          {categoryPosts.length ? categoryPosts.slice(3, 6).map(post => (
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
  );
}
}
export default withRouter(TabCats);
