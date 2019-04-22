import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';

export default class Feather extends Component {
  state={
    feather: [{
      image: 'http://deothemes.com/envato/afela/html/img/magazine/hero_3.jpg',
    },
    {
      image: 'http://deothemes.com/envato/afela/html/img/magazine/featured_img_1.jpg',
    }, {
      image: 'http://deothemes.com/envato/afela/html/img/magazine/featured_img_2.jpg',
    },
    ],
  }

  componentDidMount() {
    $(document).ready(() => {
      (function ($) {

        $('#flexslider').flexslider({
          animation: 'slide',
          directionNav: true,
          touch: true,
          slideshow: false,
          prevText: ["<i class='fa fa-angle-left'></i>"],
          nextText: ["<i class='fa fa-angle-right'></i>"],
          start() {
            const $container = $('.masonry');
            $container.imagesLoaded(() => {
              $container.isotope({
                itemSelector: '.masonry-item',
                layoutMode: 'masonry',
              });
            });
          },
        });
      }(window.jQuery));
    });
  }

  render() {
    const { feather } = this.state;
    return (
      <div className="widget featured-photos">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">Featured Photos</h3>

        <div id="flexslider" className="flexslider">
          <ul className="slides clearfix">
            {feather && feather.map(({ image }) => (
              <li>
                <img src={image} alt="" className="image__feather" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
