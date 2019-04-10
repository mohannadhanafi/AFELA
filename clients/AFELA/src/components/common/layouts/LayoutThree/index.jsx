/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import './style.css';
import moment from 'moment';

export default class index extends Component {
    state = {
      title: 'category name',
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

            <ul className="posts-list">
              {news.slice(1).map(element => (
                <div className="col-md-6 mb-50">

                  <li>
                    <article className="post-small clearfix">
                      <div className="entry-img hover-scale">
                        <a href="magazine-single-article.html">
                          <img src={element.image} alt="" />
                        </a>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title">
                          <a href="magazine-single-article.html">
                            {element.title}
                          </a>
                        </h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <a href="#">{moment(element.date).calendar()}</a>
                          </li>
                          <li className="entry-comments">
                            <i className="fa fa-comments" />
                            <a href="magazine-single-article.html">15</a>
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
