/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

export default class index extends Component {
    state = {
      title: 'Editors Picks',
      news: [
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/15.jpg',
          title: 'The Golden Age: How the PR Industry Is Coming Into its Own',
          desc: 'We possess within us two minds. So far I have written only of the conscious mind. Involve them in new product launches and keep them "in the loop. Ironically, scheduling breaks and walks outside actually helps you.',
          date: '19 Dec, 2015',
          comments: '15',
          auther: 'John Doe',
          category: 'World',
          link: '/',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/16.jpg',
          title: 'Indiana Governor Signs Religious Freedom Law, Sparking Debates That Echo the Hobby Lobby Dispute',
          desc: 'We possess within us two minds. So far I have written only of the conscious mind. Involve them in new product launches and keep them "in the loop. Ironically, scheduling breaks and walks outside actually helps you.',
          date: '19 Dec, 2015',
          comments: '15',
          auther: 'John Doe',
          category: 'Tech',
          link: '/',
        },
        {
          image: 'http://deothemes.com/envato/afela/html/img/magazine/17.jpg',
          title: 'The One Simple Communications Solution That Can Help Your Startup Win Against the Big Guys',
          desc: 'We possess within us two minds. So far I have written only of the conscious mind. Involve them in new product launches and keep them "in the loop. Ironically, scheduling breaks and walks outside actually helps you.',
          date: '19 Dec, 2015',
          comments: '15',
          auther: 'John Doe',
          category: 'World',
          link: '/',
        },
      ],
    }

    render() {
      const { title, news } = this.state;
      return (
        <section className="section-wrap relative pb-70 pt-0">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align">{title}</h2>
              <ul className="posts-list no-top-pad clearfix">
                {news.map(element => (
                  <li key={uuid()} className="clearfix">
                    <article>
                      <div className="entry-img hover-scale">
                        <Link to={element.link} className="entry-category-label green">{element.category}</Link>
                        <Link to={element.link}>
                          <img src={element.image} alt="bg" />
                        </Link>
                      </div>
                      <div className="entry">
                        <h2 className="entry-title"><Link to={element.link}>{element.title}</Link></h2>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <Link to={element.link}>{element.date}</Link>
                          </li>
                          <li className="entry-author">
                            <i className="fa fa-user" />
                            <Link to={element.link}>{element.auther}</Link>
                          </li>
                          <li className="entry-comments">
                            <i className="fa fa-comments" />
                            <Link to={element.link}>{element.comments}</Link>
                          </li>
                        </ul>
                        <div className="entry-content">
                          <p>{element.desc}</p>
                          <Link to={element.link} className="read-more dark-link">Read More<i className="fa fa-angle-right" />
                          </Link>
                        </div>
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
