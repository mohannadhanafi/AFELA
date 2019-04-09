import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import './style.css';

export default class index extends Component {
    state ={
      title: 'News In Picture',
      news: [
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'When Are You Actually Ready to Launch a Startup?',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/11.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
        {
          link: '/',
          image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_2.jpg',
          title: 'hello',
        },
      ],
    }

    render() {
      const { title, news } = this.state;
      return (
        <section className="section-wrap relative news-pictures pb-50 pt-0">
          <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">{title}</h2>
          <div className="row small-spacing">
            <div className="col-sm-6">
              <article className="entry-img hover-scale post-1">
                <Link to={news[0].link} className="gradient">
                  <img className="news--in--pictures-first" src={news[0].image} alt="bg" />
                </Link>
                <div className="entry-inner small">
                  <div className="entry">
                    <h2 className="entry-title color-white mb-0"><Link to={news[0].link}>{news[0].title}</Link></h2>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-sm-6">
              <ul className="gallery-list clearfix">
                {news.slice(1).map(element => (
                  <li key={uuid()}>
                    <article className="entry-img hover-scale">
                      <Link to={element.link}>
                        <img className="news--in--pictures" src={element.image} alt="bg" />
                      </Link>
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
