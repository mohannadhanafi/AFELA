/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        time: '14:13',
        text: '7 Traits That Define Work Productivity Superstars',
      },
    ],
  };

  render() {
    const { breaking } = this.state;
    return (
      <div className="breaking-news mt-30 clearfix">
        <span className="uppercase">Breaking News:</span>
        <div id="ticker" className="flexslider">
          <ul className="slides clearfix">
            {breaking.map(value => (
              <li>
                <Link to={value.link}>
                  <time>{value.time}</time>{value.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
