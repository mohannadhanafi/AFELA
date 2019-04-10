/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import './style.css';
import uuid from 'uuid';
import RemoveTags from 'striptags';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'rc-pagination';
import Heading from '../../../../common/Heading';
import RightSection from '../../../../common/RightSection';
import Loading from '../../../../common/Loading';
import Title from '../../../../common/Title';
import './pagination.css';
import moment from 'moment';

export default class BottomSection extends Component {
  state = {
    social: [],
    right: {
      image:
        'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      heading1: 'Keep In Touch',
      video:
        'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      heading2: 'Videos',
      heading3: 'Popular Posts',
      posts: [
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
      ],
      heading4: 'ads',
      adv:
        'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      heading5: 'Popular Posts',
    },
    currentPage: '',
    loading: false,
    allNews: [],
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data: { result: { rows, count }, catName: name } } = nextProps;

    if (prevState.name !== name) {
      return {
        allNews: rows,
        name,
        total: count,
      };
    }
    return null;
  }

  componentDidMount = () => {
    axios.get('/api/v1/getoptions').then((optionResult) => {
      const { data: optionData } = optionResult;
      const {
        facebook_number,
        twitter_number,
        instagram_number,
        sound_number,
        snap_number,
        youtub_number,
      } = optionData[0];
      const list = [
        { image: 'https://i.ibb.co/D9Xzh8k/facebook.png', number: facebook_number },
        { image: 'https://i.ibb.co/5xzNkx9/insta.png', number: instagram_number },
        { image: 'https://i.ibb.co/1b4RZ3t/snapchat.png', number: snap_number },
        { image: 'https://i.ibb.co/mGLYcfv/soundcloud.png', number: sound_number },
        { image: 'https://i.ibb.co/bFjNJj0/twitter.png', number: twitter_number },
        { image: 'https://i.ibb.co/fpDLfcr/youtube.png', number: youtub_number },
      ];
      this.setState({ social: list });
    });
  }
  
  changeData = (current) => {
    const { name } = this.state;
    axios(
      `/api/v1/CatWithPosts/${name}`, {
        params: {
          limit: 5,
          offset: current - 1,
        },
      },
    ).then((result) => {
      const {
        data: {
          result: { rows },
        },
      } = result;

      this.setState(() => ({ allNews: rows }), () => window.scrollTo(0, 0));
    });
  };


  render() {
    const {
      right, allNews, total, name, social,
    } = this.state;
    return (
      allNews.length ? (
        <div className="category-bottom-section">
          <div>
            <div className="bottom-left">
              <Heading desc="All News" />
              {allNews
                ? allNews.map(element => (
                  <Fragment key={uuid()}>
                    <div className="post">
                      <div className="post-img">
                        <img
                          src={`/api/v1/getFile/${element.header_media[0]}`}
                          alt=""
                        />
                      </div>
                      <div className="post-details">
                        <div className="category-name-spec">
                          <Title title={name} />
                        </div>
                        <Link
                          to={`/news/${element.category.category_seo}/${element.seo}`}
                        >
                          {element.title}
                        </Link>
                        <span className="category-post-details">

                          {RemoveTags(element.post_intro)}
                        </span>
                        <span className="category-post-date">
                          {moment(element.createdAt).calendar()}
                        </span>
                      </div>
                    </div>
                  </Fragment>
                )) : null
            }
            </div>

            <div className="category-pagingg">
              <Pagination
                hideOnSinglePage
                total={total}
                defaultPageSize={10}
                onChange={current => this.changeData(current)
              }
              />
            </div>
          </div>
          <RightSection data={right} social={social} />
        </div>
      ) : null
    );
  }
}
