/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import Heading from '../../../../../common/Heading';
import './style.css';

class LeftThird extends Component {
  state = {
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
    const posts = news && news;
    const rightNews = posts.slice(3, 6);
    const leftNews = posts.slice(0, 3);
    return (
      count !== 0 ? (
        <Fade big>
          <div className="left-third">
            <Heading desc={title || ''} />
            <div className="left-third-container">
              <div className="left-third-left">
                {leftNews.length
                  ? leftNews.map(element => (
                    <div key={uuid()} className="left-element">
                      <div
                        className="main-news-img"
                        style={{
                          backgroundImage: `url(/api/v1/getFile/${
                            element.header_media
                          })`,
                        }}
                        alt="main-news "
                      />
                      <div>
                        <Link key={uuid()} to={`/news/${element.category.category_seo}/${element.seo}`}>
                          {element.title}
                        </Link>
                        <span>{moment(element.createdAt).calendar()}</span>
                      </div>
                    </div>
                  ))
                  : null}
              </div>
              <div className="left-third-right">
                {rightNews.length
                  ? rightNews.map(element => (
                    <div key={uuid()} className="right-element">
                      <div
                        className="main-news-img"
                        style={{
                          backgroundImage: `url(/api/v1/getFile/${
                            element.header_media
                          })`,
                        }}
                        alt="main-news "
                      />
                      <div>
                        <Link key={uuid()} to={`/news/${element.category.category_seo}/${element.seo}`}>
                          {element.title}
                        </Link>
                        <span>{moment(element.createdAt).calendar()}</span>
                      </div>
                    </div>
                  ))
                  : null}
              </div>
            </div>
          </div>
        </Fade>
      ) : null
    );
  }
}

export default withRouter(LeftThird);
