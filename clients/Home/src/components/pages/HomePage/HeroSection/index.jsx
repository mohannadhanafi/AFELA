import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import uuid from 'uuid';
import RemoveTags from 'striptags';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Title from '../../../common/Title';

import './style.css';

class HeroSection extends Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    },
    data: [],
    noHeadLines: {
      image: '/storage/500_F_25419840_5AgSkR6y0fpsu1T1Chl4W7M0hBRFmb4h.jpeg',
    },
  };

  componentDidMount() {
    axios('/api/v1/heading')
      .then((result) => {
        const { data } = result;
        this.setState(() => ({ data }));
      })
      .catch(() => {});
  }

  render() {
    const { data, settings } = this.state;
    const finalData = data.slice(0, 4);
    return (
      <div className="hero-slider">
        <Slider {...settings}>
          {finalData.length ? (
            finalData.map(element => (
              <Fragment key={uuid()}>
                <Fade>
                  <div>
                    <div
                      className="image-slider"
                      style={{ backgroundImage: `url(/api/v1/getFile/${element.header_media[0]}` }}
                    >
                      <div className="slider-overlay">
                        <div className="container">
                          <Title title={element.category.name} />
                          <Link
                            to={`/news/${element.category.seo}/${
                              element.seo
                            }`}
                          >
                            <span className="news">{element.title}</span>
                            <span className="news-details">
                              {RemoveTags(element.post_intro)}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Fragment>
            ))
          ) : (
            <div>
              <div
                className="image-slider"
                style={{ backgroundImage: 'url(/storage/noHealLines.jpg)' }}
              >
                <div className="slider-overlay">
                  <div className="container" />
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    );
  }
}

export default HeroSection;
