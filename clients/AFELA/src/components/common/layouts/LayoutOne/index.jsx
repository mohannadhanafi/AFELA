/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import './style.css';

export default class index extends Component {
    state = {
      title: 'Category Name',
      news: [
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/11.jpg',
          title: 'Treat Your Employees Well. They Are Your Best Brand Ambassadors',
          date: '19 Dec 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          category: 'travel',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/11.jpg',
          title: 'Treat Your Employees Well. They Are Your Best Brand Ambassadors',
          date: '19 Dec 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          category: 'travel',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/11.jpg',
          title: 'Treat Your Employees Well. They Are Your Best Brand Ambassadors',
          date: '19 Dec 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          category: 'travel',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/11.jpg',
          title: 'Treat Your Employees Well. They Are Your Best Brand Ambassadors',
          date: '19 Dec 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          category: 'travel',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/11.jpg',
          title: 'Treat Your Employees Well. They Are Your Best Brand Ambassadors',
          date: '19 Dec 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          category: 'travel',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/11.jpg',
          title: 'Treat Your Employees Well. They Are Your Best Brand Ambassadors',
          date: '19 Dec 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          category: 'travel',
        },
      ],
    }

    render() {
      const { news, title } = this.state;
      return (
        <section className="section-wrap relative pb-0 pt-0">
          <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">{title}</h2>
          <div className="row">
            <div className="col-md-7 mb-20">
              <article>
                <div className="entry-img hover-scale">
                  <a href="magazine-single-article.html" className="entry-category-label green">{news[0].category}</a>
                  <a href="magazine-single-article.html">
                    <img className="latest--image" src="http://deothemes.com/envato/afela/html/img/magazine/11.jpg" alt="" />
                  </a>
                </div>
                <div className="entry">
                  <h2 className="entry-title"><a href="magazine-single-article.html">{news[0].title}</a></h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <Link to="/">{news[0].date}</Link>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">{news[0].comments}</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <p>{news[0].description}</p>
                    <a href="magazine-single-article.html" className="read-more dark-link">Read More<i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-5 mb-50">
              <ul className="posts-list no-top-pad">
                {news.slice(1).map(element => (
                  <li key={uuid()}>
                    <article className="post-small clearfix">
                      <div className="entry">
                        <h3 className="entry-title"><a href="magazine-single-article.html">{element.title}</a></h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <Link to="/">{element.date}</Link>
                          </li>
                          <li className="entry-comments">
                            <i className="fa fa-comments" />
                            <a href="magazine-single-article.html">{element.comments}</a>
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
      );
    }
}
