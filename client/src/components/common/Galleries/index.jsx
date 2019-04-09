import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Galleries extends Component {
  state={
    galleries: [
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_11.jpg',
        link: '/',
      },
      {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_11.jpg',
        link: '/',
      }, {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_11.jpg',
        link: '/',
      }, {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_11.jpg',
        link: '/',
      }, {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_11.jpg',
        link: '/',
      }, {
        image: 'http://deothemes.com/envato/afela/html/img/magazine/gallery_11.jpg',
        link: '/',
      },

    ],
  }

  render() {
    const { galleries } = this.state;
    return (
      <div className="widget weather">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">Galleries</h3>
        <ul className="gallery-list clearfix">
          {galleries && galleries.map(({ link, image }) => (
            <li>
              <article className="entry-img hover-scale">
                <Link to={link}>
                  <img src={image} alt="" className="image__gallery"/>
                </Link>
              </article>
            </li>

          ))}
        </ul>
      </div>
    );
  }
}
