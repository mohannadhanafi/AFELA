import React, { Component } from 'react';
import './style.css';

export default class Popular extends Component {
  state = {
    Popular: [
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/hero_1.jpg',
        title:
      '6 Ways to Be More Productive by Working Less',
        date: '19 Dec, 201',
        comments: 15,
      },
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/hero_2.jpg',
        title:
      '3 Key Lessons for My Kids About Becoming Entrepreneurs',
        date: '19 Dec, 201',
        comments: 15,
      },
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/thumb_7.jpg',
        title:
      '7 Traits That Define Work Productivity Superstars',
        date: '19 Dec, 201',
        comments: 15,
      },
    ],
    comments: [
      {
        title: 'Afela is a simple and flexible',
        name: 'Michael Scofield',

      }, {
        title: 'It\'s an awesome solution for your business. Try it.',
        name: 'Linkoln Burrows<',

      },
      {
        title: 'Clean and well documented code',
        name: 'Fernando Sucre',

      },
    ],
  };

  render() {
    const { Popular, comments } = this.state;
    return (
      <div className="widget popular-latest">
        <div className="tabs">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#popular-news" data-toggle="tab">Popular</a>
            </li>
            <li>
              <a href="#recent-news" data-toggle="tab">Recent</a>
            </li>
            <li>
              <a href="#recent-comments" data-toggle="tab">Comments</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade in active" id="popular-news">
              <ul className="posts-list no-top-pad">
                {Popular && Popular.map(({
                  image, date, comments, title,
                }) => (
                  <li>
                    <article className="post-small clearfix">
                      <div className="entry-img hover-scale">
                        <a href="#">
                          <img src={image} alt="" className="popular__image" />
                        </a>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title"><a href="#">{title}</a></h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <a href="#">{date}</a>
                          </li>
                          <li className="entry-comments">
                            <i className="fa fa-comments" />
                            <a href="#">{comments}</a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-pane fade" id="recent-news">
              <ul className="posts-list no-top-pad">
                {Popular && Popular.map(({
                  image, date, comments, title,
                }) => (
                  <li>
                    <article className="post-small clearfix">
                      <div className="entry-img hover-scale">
                        <a href="magazine-single-article.html">
                          <img src={image} alt="" className="popular__image"/>
                        </a>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title"><a href="#">{title}</a></h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <a href="#">{date}</a>
                          </li>
                          <li className="entry-comments">
                            <i className="fa fa-comments" />
                            <a href="#">{comments}</a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-pane fade" id="recent-comments">
              <ul className="posts-list no-top-pad mt-0">
                {comments && comments.map(({ title, name }) => (
                  <li>
                    <a href="#">{title}</a>
                    <ul className="entry-meta">
                      <li>
                        <a href="#">
                          {name}
                        </a>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}