/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import './style.css';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import Heading from '../../../../../common/Heading';

class LeftSixth extends Component {
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
    const { news, title, count } = this.state;
    const posts = news.slice(0, 6);
    return (
      count !== 0 ? (
        <div className="left-sixth">
          <Heading desc={title || ''} />
          <div className="left-sixth-container">
            {posts.length
              ? posts.map(element => (
                <Fragment key={uuid()}>
                  <Fade>
                    <div className="sixth-element">
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
                        <Link to={`/news/${element.category.category_seo}/${element.seo}`}>
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
      ) : null
    );
  }
}

export default withRouter(LeftSixth);
