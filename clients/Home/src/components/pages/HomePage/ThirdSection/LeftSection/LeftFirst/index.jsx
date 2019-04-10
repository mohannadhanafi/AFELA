/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import RemoveTags from 'striptags';
import Fade from 'react-reveal/Fade';
import moment from 'moment';
import Heading from '../../../../../common/Heading';
import Title from '../../../../../common/Title';
import './style.css';

class LeftFirst extends Component {
  state = {
    news: [],
    count: '',
  };

  componentDidMount() {
    const { sectionSeoName } = this.props;
    axios(`/api/v1/CatWithPosts/${sectionSeoName}`, {
      params: {
        limit: 5,
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
    const otherNews = posts && posts.slice(1, 5);
    return (
      count !== 0 ? (
        <>

          <Heading desc={title || ''} />
          <div className="left-first">
            {posts.length ? (
              <Fade>
                <div className="main-news">
                  <div
                    className="main-news-img"
                    style={{
                      backgroundImage: `url(/api/v1/getFile/${posts
                      && posts[0].header_media})`,
                    }}
                    alt="main-news "
                  />
                  <div>
                    <Title title={posts[0].category.category_name} />
                  </div>
                  <Link
                    to={`/news/${posts[0].category.category_seo}/${
                      posts[0].seo
                    }`}
                  >
                    {posts[0].title}
                  </Link>
                  <p>{RemoveTags(posts[0].post_intro)}</p>
                  <span>{moment(posts[0].createdAt).calendar()}</span>
                </div>
              </Fade>
            ) : null}

            <div className="other-news">
              {otherNews.length
                ? otherNews.map(element => (
                  <Fragment key={uuid()}>
                    <Fade>
                      <div className="other-news-element">
                        <div
                          className="news-img"
                          style={{
                            backgroundImage: `url(/api/v1/getFile/${
                              element.header_media[0]
                            })`,
                          }}
                          alt="main-news "
                        />
                        <div>
                          <Link
                            key={uuid()}
                            to={`/news/${posts[0].category.category_seo}/${element.seo}`}
                          >
                            {element.title}
                          </Link>
                          <span>{moment(element.createdAt).calendar()}</span>
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))
                : null}
            </div>
          </div>
        </>
      ) : null

    );
  }
}

export default withRouter(LeftFirst);
