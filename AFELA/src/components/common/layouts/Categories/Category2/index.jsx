/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
    state = {
      title: 'Fashion',
      news: [
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/12.jpg',
          title: 'The Golden Age: How the PR Industry Is Coming Into its Own',
          date: '19 DEC 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          link: '/',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/12.jpg',
          title: 'The Golden Age: How the PR Industry Is Coming Into its Own',
          date: '19 DEC 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          link: '/',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/12.jpg',
          title: 'The Golden Age: How the PR Industry Is Coming Into its Own',
          date: '19 DEC 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          link: '/',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/12.jpg',
          title: 'The Golden Age: How the PR Industry Is Coming Into its Own',
          date: '19 DEC 2015',
          comments: 15,
          description: 'We possess within us two minds. So far I have written only of the conscious mind.',
          link: '/',
        },
      ],
    }

    render() {
      const { news, title } = this.state;
      return (
        <div className="col-md-4 mb-50">
          <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align heading-label-gold">{title}</h2>
          <article>
            <div className="entry-img hover-scale">
              <Link to={news[0].link}>
                <img src={news[0].image} alt="bg" />
              </Link>
            </div>
            <div className="entry mb-0">
              <h2 className="entry-title small"><Link to={news[0].link}>{news[0].title}</Link></h2>
              <ul className="entry-meta list-inline">
                <li className="entry-date">
                  <Link to={news[0].link}>{news[0].date}</Link>
                </li>
                <li className="entry-comments">
                  <i className="fa fa-comments" />
                  <Link to={news[0].link}>15</Link>
                </li>
              </ul>
              <div className="entry-content">
                <p>{news[0].description}</p>
                <Link to={news[0].link} className="read-more dark-link">Read More<i className="fa fa-angle-right" />
                </Link>
              </div>
            </div>
          </article>

          <ul className="posts-list">
            {news.slice(1).map(element => (
              <li>
                <article className="post-small clearfix">
                  <div className="entry">
                    <h3 className="entry-title"><Link to={element.link}>{element.title}</Link></h3>
                    <ul className="entry-meta list-inline">
                      <li className="entry-date">
                        <Link to={element.link}>{element.date}</Link>
                      </li>
                      <li className="entry-comments">
                        <i className="fa fa-comments" />
                        <Link to={element.link}>{element.comments}</Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      );
    }
}
