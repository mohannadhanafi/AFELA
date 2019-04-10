/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';
import moment from 'moment';
import Post from './Post';
import Heading from '../../../common/Heading';
import Loading from '../../../common/Loading';
import './style.css';

class index extends Component {
  state = {
    image:
      'https://f2d44896feb7590bd54d-e0950d08dff9458d7b7fab9e628a3499.ssl.cf2.rackcdn.com/3a5feab5aac01b01e88235c75d458c8b.jpeg',
    posts: [],
    loading: false,
  };

  componentDidMount() {
    axios('/api/v1/getRelatedPosts')
      .then((result) => {
        const { data } = result;
        this.setState(() => ({
          posts: data,
        }));
      })
      .catch(() => {});
  }

  render() {
    const {
      image, posts, title, loading,
    } = this.state;
    let slidesToShow = 0;
    if (posts.length === 1) {
      posts.push(posts[0]);
      posts.push(posts[0]);
      posts.push(posts[0]);
      posts.push(posts[0]);
    }
    if (posts.length === 2) {
      posts.push(posts[0]);
      posts.push(posts[1]);
      posts.push(posts[0]);
      posts.push(posts[1]);
    }
    if (posts.length === 3) {
      posts.push(posts[0]);
      posts.push(posts[1]);
    }
    if (posts.length === 4) {
      posts.push(posts[0]);
    }
    switch (posts.length) {
      case 1:
        slidesToShow = 2;
        break;
      case 2:
        slidesToShow = 1;
        break;
      case 3:
        slidesToShow = 3;
        break;
      case 4:
        slidesToShow = 4;
        break;
      default:
        slidesToShow = 4;
    }

    const settings = {
      infinite: true,
      speed: 5000,
      slidesToShow,
      centerMode: true,
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

    return loading ? (
      <Loading />
    ) : (
      <div className="second--secion">
        <div className="container">
          <img className="adv" src={image} alt="adv" />
          <Heading desc="Breaking News" />
          <Slider {...settings}>
            {posts.map(post => (
              <Post
                key={uuid()}
                seoName={post.seo}
                catSeoName={post.category.seo}
                image={post.header_media[0]}
                desc={post.title}
                date={moment(post.createdAt).calendar()}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withRouter(index);
