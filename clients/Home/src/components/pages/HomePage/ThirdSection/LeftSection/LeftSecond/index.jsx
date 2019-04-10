/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import uuid from 'uuid';
import axios from 'axios';
import RemoveTag from 'striptags';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Post from '../../../SecondSection/Post';
import Heading from '../../../../../common/Heading';
import './style.css';

class LeftSecond extends Component {
  state = {
    title: '',
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
    const { title, news, count } = this.state;
    let slidesToShow = 0;
    switch (news.length) {
      case 2:
        slidesToShow = 1;
        break;
      case 3:
        slidesToShow = 2;
        break;
      case 4:
        slidesToShow = 3;
        break;
      default:
        slidesToShow = 4;
    }
    const settings = {
      infinite: true,
      speed: 5000,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 200,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      count !== 0 ? (
        <div className="left--second">
          <div>
            <Heading desc={title} />
            <div className="left-second-slider">
              <Slider {...settings}>
                {news.map(post => (
                  <Post
                    key={uuid()}
                    seoName={post.seo}
                    catSeoName={post.category.category_seo}
                    image={post.header_media}
                    desc={RemoveTag(post.title)}
                    date={moment(post.createdAt).calendar()}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : null
    );
  }
}

export default withRouter(LeftSecond);
