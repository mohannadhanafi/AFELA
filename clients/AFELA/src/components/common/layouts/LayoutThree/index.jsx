/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import './style.css';
import moment from 'moment';
import axios from 'axios';

export default class index extends Component {
    state = {
      title: 'category name',
      news: [

      ],
    }

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
          <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">{catName}</h2>
          <div className="row">

            <ul className="posts-list">
              {news.map(element => (
                <div className="col-md-6 mb-50">

                  <li>
                    <article className="post-small clearfix">
                      <div className="entry-img hover-scale">
                        <Link to={`/news/${element.category.category_seo}/${element.seo}`} >
                          <img src={`/api/v1/getFile/${element.header_media[0]}`} alt="" />
                        </Link>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title">
                          <Link to={`/news/${element.category.category_seo}/${element.seo}`}>
                            {element.title}
                          </Link>
                        </h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <Link to={`/news/${element.category.category_seo}/${element.seo}`}>
                              {moment(news.createdAt).format('DD MMM YYYY')}
                            </Link>
                          </li>

                        </ul>
                      </div>
                    </article>
                  </li>
                </div>

              ))}
            </ul>

          </div>
        </section>
      );
    }
}
