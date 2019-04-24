import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import './style.css';
import Pagination from 'rc-pagination';

export default class index extends Component {
  state={}


  render() {
    const { posts, total, changeData } = this.props;
    return (
      <div>
        {posts
          && posts.map(element => (
            <article className="entry-item" key={uuid()}>
              <div className="entry-img hover-scale">
                <Link
                  to={`/news/${element.category.category_seo}/${element.seo}`}
                >
                  <img
                    src={`/api/v1/getFile/${element.header_media[0]}`}
                    alt=""
                  />
                </Link>
              </div>

              <div className="entry">
                <h2 className="entry-title">
                  <Link
                    to={`/news/${element.category.category_seo}/${element.seo}`}
                  >
                    {element.title}
                  </Link>
                </h2>
                <ul className="entry-meta list-inline">
                  <li className="entry-date">
                    <i className="fa fa-clock-o" />
                    {moment(element.createdAt).calendar()}
                  </li>
                  <li className="entry-category">
                    <i className="fa fa-folder-open" />
                    {element.category.category_name}
                  </li>
                  <li className="entry-author">
                    <i className="fa fa-user" />
                    {element.user.name}
                  </li>
                </ul>
                <div className="entry-content">
                  <p>{element.post_intro}</p>
                  <Link
                    to={`/news/${element.category.category_seo}/${element.seo}`}
                    className="read-more dark-link"
                  >
                    Read More
                    <i className="fa fa-angle-right" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        <div className="pagination">
          <Pagination
            hideOnSinglePage
            total={total}
            defaultPageSize={5}
            onChange={changeData}
          />
        </div>
      </div>

    );
  }
}
