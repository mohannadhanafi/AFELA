/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import uuid from 'uuid';
import axios from 'axios';
import RemoveTag from 'striptags';
import Fade from 'react-reveal/Fade';
import { Link, withRouter } from 'react-router-dom';
import Arrow from './Arrow';
import Heading from '../../../../../common/Heading';
import Title from '../../../../../common/Title';

import './style.css';

class ThirdFifth extends Component {
  state = {
    settings: {
      prevArrow: <Arrow />,
      nextArrow: <Arrow />,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    },
    loading: false,
    news: [],
    count: '',
  };

  componentDidMount() {
    const { sectionSeoName } = this.props;
    axios(`/api/v1/CatWithPosts/${sectionSeoName}`, {
      params: {
        limit: 10,
        offset: 0,
      },
    })
      .then((result) => {
        const {
          data: { result: { rows: data, count }, catName },
        } = result;
        this.setState(() => ({
          news: data,
          title: catName,
          count,
        }));
      })
      .catch(() => {});
  }

  render() {
    const {
      title, settings, news, count,
    } = this.state;
    const posts = news.slice(0, 5);
    return (
      count !== 0 ? (
        <>
          <div className="third-fifth">
            <Heading desc={title || ''} />
            <Slider {...settings}>
              {posts.length ? posts.map(element => (
                <Fragment key={uuid()}>
                  <Fade>
                    <div>
                      <div
                        className="fifth-image-slider"
                        style={{ backgroundImage: `url(/api/v1/getFile/${element.header_media})` }}
                      >
                        <div className="fifth-slider-overlay">
                          <div className="container">
                            <Title title={element.category.category_name} />
                            <Link to={`/news/${element.category.category_seo}/${element.seo}`}>
                              <span className="news">
                                {element.title}
                              </span>
                            </Link>
                            <span className="news-details">{RemoveTag(element.post_intro)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Fragment>
              )) : null}
            </Slider>
          </div>
        </>
      ) : null
    );
  }
}

export default withRouter(ThirdFifth);
