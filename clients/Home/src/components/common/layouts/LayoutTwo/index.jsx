/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './style.css';
import uuid from 'uuid';

export default class TrendingPosts extends Component {
  state = {
    categories: ['WORLD', 'SPORTS', 'TRAVEL', 'fashion'],
    news: [

    ],
  };

  componentDidMount() {
    const { seo } = this.props;
    axios.get(`/api/v1/CatWithPosts/${seo}`).then((results) => {
      const { data } = results;
      const { result, catName } = data;
      const { rows } = result;
      this.setState({ news: rows, catName });
    }).catch((error) => {

    });
  }

  render() {
    const { news, catName } = this.state;
    return (
      <section className="section-wrap relative pb-0 pt-0">
        <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">
          {catName}
        </h2>
        <div className="row">
        {console.log(news)
        }
          {news && news.slice(0, 6).map(element => (
            <div className="col-md-4 mb-50" key={uuid()}>
              <article>
                <div className="entry-img hover-scale">
                  <Link
                    to={`/news/${element.category.category_seo}/${element.seo}`}
                    className="entry-category-label blue"
                  >
                    {element.category.category_name}
                  </Link>
                  <Link to={`/news/${element.category.category_seo}/${element.seo}`}>
                    <img src={`/api/v1/getFile/${element.header_media[0]}`} alt="" className="entry__img" />
                  </Link>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title">
                    <Link to={`/news/${element.category.category_seo}/${element.seo}`}>
                      {element.title}
                    </Link>
                  </h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <Link to={`/news/${element.category.category_seo}/${element.seo}`}>{moment(element.createdAt).calendar()}</Link>
                    </li>

                  </ul>
                  <div className="entry-content">

                    <Link to={`/news/${element.category.category_seo}/${element.seo}`} className="read-more dark-link">
                  Read More <i className="fa fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>

          ))}
        </div>


      </section>
    );
  }
}
