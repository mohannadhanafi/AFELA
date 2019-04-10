/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default class index extends Component {
  state = {
    breaking: [
      {
        link: '/',
        time: '14:13',
        text: '7 Traits That Define Work Productivity Superstars',
      },
      {
        link: '/',
        time: '16:07',
        text: 'new new new new',
      },
    ],
  };

  componentDidMount() {
    axios('/api/v1/getRelatedPosts').then((result) => {
      const { data } = result;
      this.setState({ breaking: data });
    });
  }


  render() {
    const { breaking } = this.state;
    return (
      <div className="container">
        <div className="breaking-news mt-30 clearfix">
          <span className="uppercase">Breaking News:</span>
          <div id="ticker" className="flexslider">
            <ul className="slides clearfix">
              {breaking.map(post => (
                <li>
                  <Link to={post.category && `/news/${post.category.seo}/${post.seo}`}>
                    <time>{moment(post.createdAt).format('HH:mm')}</time>
                    {` ${post.title}`}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
