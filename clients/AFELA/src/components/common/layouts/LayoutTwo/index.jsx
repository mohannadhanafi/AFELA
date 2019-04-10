/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';

export default class TrendingPosts extends Component {
  state = {
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

  render() {
    const { categories, news } = this.state;
    return (
      <section className="section-wrap relative pb-0 pt-0">
        <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">
          category name
        </h2>

        <div className="row">
          {news.map(element => (
            <div className="col-md-4 mb-50">

              <article>
                <div className="entry-img hover-scale">
                  <a
                    href="magazine-single-article.html"
                    className="entry-category-label blue"
                  >
                    {element.category}
                  </a>
                  <a href="magazine-single-article.html">
                    <img src={element.image} alt="" />
                  </a>
                </div>
                <div className="entry mb-0">
                  <h2 className="entry-title">
                    <a href="magazine-single-article.html">
                      {element.title}
                    </a>
                  </h2>
                  <ul className="entry-meta list-inline">
                    <li className="entry-date">
                      <a href="#">{element.date}</a>
                    </li>
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <a href="magazine-single-article.html">15</a>
                    </li>
                  </ul>
                  <div className="entry-content">
                    <a
                      href="magazine-single-article.html"
                      className="read-more dark-link"
                    >
                  Read More <i className="fa fa-angle-right" />
                    </a>
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
