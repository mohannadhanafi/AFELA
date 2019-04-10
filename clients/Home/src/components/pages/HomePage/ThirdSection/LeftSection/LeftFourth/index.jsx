/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import { Link, withRouter } from 'react-router-dom';
import Heading from '../../../../../common/Heading';
import Title from '../../../../../common/Title';
import './style.css';
import moment from 'moment';

class LeftFourth extends Component {
  state = { loading: true, news: [], count: '' };


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
    const { news, title, count } = this.state;
    const posts = news;
    const topNews = posts && posts.slice(0, 2);
    const bottomNews = posts && posts.slice(2, 8);
    return (
      count !== 0 ? (
        <Fade big>
          <div className="left-fourth">
            <Heading desc={title || ''} />
            <div className="left-fourth-top">
              {topNews.length
                ? topNews.map(element => (
                  <div
                    key={uuid()}
                    className="top-news"
                    style={{
                      backgroundImage: `url(/api/v1/getFile/${
                        element.header_media
                      }`,
                    }}
                  >
                    <div className="top-news-details">
                      <Title title={element.category.category_name} />
                      <Link
                        key={uuid()}
                        to={`/news/${element.category.category_seo}/${
                          element.seo
                        }`}
                      >
                        {element.title}
                      </Link>
                      <span>{moment(element.createdAt).calendar()}</span>
                    </div>
                  </div>
                ))
                : null}
            </div>
            <div className="left-fourth-bottom">
              {bottomNews.length
                ? bottomNews.map(element => (
                  <div key={uuid()} className="fourth-element">
                    <div
                      className="news-img"
                      style={{
                        backgroundImage: `url(/api/v1/getFile/${
                          element.header_media
                        })`,
                      }}
                      alt="main-news "
                    />
                    <div>
                      <Link
                        key={uuid()}
                        to={`/news/${element.category.category_seo}/${
                          element.seo
                        }`}
                      >
                        {element.title}
                      </Link>
                      <span>{moment(element.createdAt).calendar()}</span>
                    </div>
                  </div>
                ))
                : null}
            </div>
          </div>
        </Fade>
      ) : null
    );
  }
}

export default withRouter(LeftFourth);
