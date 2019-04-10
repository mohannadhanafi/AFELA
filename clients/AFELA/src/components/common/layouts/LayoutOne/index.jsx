/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import uuid from 'uuid';
import { Link, withRouter } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import moment from 'moment';


class index extends Component {
    state = {
      catName: 'Category Name',
      news: [],
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
        news.length ? (
          <section className="section-wrap relative pb-0 pt-0">
            <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">{catName}</h2>
            <div className="row">
              <div className="col-md-7 mb-20">
                <article>
                  <div className="entry-img hover-scale">
                    <a href="magazine-single-article.html" className="entry-category-label green">{
                    news[0].category.category_name
                  }
                    </a>
                    <a href="magazine-single-article.html">
                      <img className="latest--image" src={`/api/v1/getFile/${news[0].header_media[0]}`} alt="" />
                    </a>
                  </div>
                  <div className="entry">
                    <h2 className="entry-title"><a href="magazine-single-article.html">{this.state && news[0].title}</a></h2>
                    <ul className="entry-meta list-inline">
                      <li className="entry-date">
                        <Link to={`/news/${news[0].category.category_seo}/${news[0].seo}`}>{moment(news[0].createdAt).format('DD MMM YYYY')}</Link>
                      </li>

                    </ul>
                    <div className="entry-content">
                      <p>{news[0].post_intro}</p>
                      <a href="magazine-single-article.html" className="read-more dark-link">Read More<i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-5 mb-50">
                <ul className="posts-list no-top-pad">
                  {news && news.slice(1, 5).map(element => (
                    <li key={uuid()}>
                      <article className="post-small clearfix">
                        <div className="entry">
                          <h3 className="entry-title">
                            <Link
                              to={`/news/${element.category.category_seo}/${element.seo}`}
                            >{element.title}
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
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null);
    }
}

export default withRouter(index);
