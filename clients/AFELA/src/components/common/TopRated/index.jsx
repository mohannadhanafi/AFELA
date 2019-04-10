import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class TopRated extends Component {
  state={
    topRated: [
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/thumb_8.jpg',
        title: '6 Ways to Be More Productive by Working Less',
        date: '19 Dec, 2015',
        link: '/',
      },
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/hero_2.jpg',
        title: '3 Key Lessons for My Kids About Becoming Entrepreneurs',
        date: '19 Dec, 2015',
        link: '/',

      },
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/thumb_10.jpg',
        title: '3 Key Lessons for My Kids About Becoming Entrepreneurs',
        date: '19 Dec, 2015',
        link: '/',

      },
    ],
  }

  render() {
    const { topRated } = this.state;

    return (
      <div className="widget top-rated">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">top rated</h3>
        <ul className="posts-list no-top-pad">
          {topRated && topRated.map(({
            image, title, link, date,
          }) => (
            <li>
              <article className="post-small clearfix">
                <div className="entry-img hover-scale">
                  <Link to={link}>
                    <img src={image} alt="" className="image__top" />
                  </Link>
                </div>
                <div className="entry">
                  <h3 className="entry-title"><a href={link}>{title}</a></h3>
                  <ul className="entry-meta list-inline">
                    <li className="rating" />
                    <li className="entry-date">
                      <a href="#">{date}</a>
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
