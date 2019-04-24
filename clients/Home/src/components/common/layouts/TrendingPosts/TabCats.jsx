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
                href={`/news/${categoryPosts[0].category.seo}/${categoryPosts[0].seo}`}
                className="entry-category-label blue"
              >
                {categoryPosts[0].category.name}
              </a>
              <a href={`/news/${categoryPosts[0].category.seo}/${categoryPosts[0].seo}`}>
                <img src={`/api/v1/getFile/${categoryPosts[0].header_media[0]}`} alt="" />
              </a>
            </div>
            <div className="entry mb-0">
              <h2 className="entry-title">
                <a href={`/news/${categoryPosts[0].category.seo}/${categoryPosts[0].seo}`}>
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
                  href={`/news/${categoryPosts[0].category.seo}/${categoryPosts[0].seo}`}
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
                  <a href={`/news/${post.category.seo}/${post.seo}`}>
                    <img src={`/api/v1/getFile/${post.header_media[0]}`} alt="" />
                  </a>
                </div>
                <div className="entry">
                  <h3 className="entry-title">
                    <a href={`/news/${post.category.seo}/${post.seo}`}>
                      {post.title}
                    </a>
                  </h3>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      {moment(post.createdAt).calendar()}
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
                href={`/news/${categoryPosts[4].category.seo}/${categoryPosts[4].seo}`}
                className="entry-category-label blue"
              >
                {categoryPosts[4].category.name}
              </a>
              <a href={`/news/${categoryPosts[4].category.seo}/${categoryPosts[4].seo}`}>
                <img src={`/api/v1/getFile/${categoryPosts[4].header_media[0]}`} alt="" />
              </a>
            </div>
            <div className="entry mb-0">
              <h2 className="entry-title">
                <a href={`/news/${categoryPosts[4].category.seo}/${categoryPosts[4].seo}`}>
                  {categoryPosts[4].title}
                </a>
              </h2>
              <ul className="entry-meta list-inline">
                <li className="entry-date">
                  <Link to={`/news/${categoryPosts[4].category.seo}/${categoryPosts[4].seo}`}>{moment(categoryPosts[4].createdAt).calendar()}</Link>
                </li>
              </ul>
              <div className="entry-content">
                <p>
                  {ReactHtmlParser(categoryPosts[4].description)}
                </p>
                <a
                  href={`/news/${categoryPosts[4].category.seo}/${categoryPosts[4].seo}`}
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
                  <a href={`/news/${post.category.seo}/${post.seo}`}>
                    <img src={`/api/v1/getFile/${post.header_media[0]}`} alt="" />
                  </a>
                </div>
                <div className="entry">
                  <h3 className="entry-title">
                    <a href={`/news/${post.category.seo}/${post.seo}`}>
                      {post.title}
                    </a>
                  </h3>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      {moment(post.createdAt).calendar()}
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
