/* eslint-disable react/jsx-no-target-blank */
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';
import uuid from 'uuid';
import axios from 'axios';
import moment from 'moment';
import './style.css';
import { connect } from 'react-redux';
import { setPageAds } from '../../../../appRedux/actions/ads';

class FirstNav extends Component {
  state = {
    date: 'Tuesday, 5 FEB, 2019',
    nav: [
      {
        desc: 'about',
        link: '/aboutus',
      },
      {
        desc: 'contact',
        link: '/contact',
      },
      {
        desc: 'Archieves',
        link: '/',
      },
    ],
    facebook: '',
    whats: '',
    google: '',
  };

  componentDidMount = async () => {
    const result = await axios('/api/v1/getoptions');
    const { data } = result;
    const {
      facebook, twitter, whats, google,
    } = data[0];
    const date = moment().format('dddd, D MMMM YYYY');
    this.setState({
      facebook,
      twitter,
      whats,
      google,
      date,
    });
  };

  whatsNum = (message) => {
    NotificationManager.info(message, 'DONE', 2000);
  };

  render() {
    const {
      date, nav, facebook, twitter, google, whats,
    } = this.state;
    return (
      <>
        <div className="first--nav">
          <div className="container">
            <div className="first--nav--data">
              <div className="first--left">
                <span>{date}</span>
                {nav.map(element => (
                  <span key={uuid()}>
                    <Link to={element.link}>{element.desc}</Link>
                  </span>
                ))}
              </div>
              <div className="first--right">
                <a target="_blank" href={facebook}>
                  <i className="fab fa-facebook-f" />
                </a>
                <a target="_blank" href={twitter}>
                  <i className="fab fa-twitter" />
                </a>

                <CopyToClipboard
                  text={whats}
                  onCopy={() => this.whatsNum(`Copied ${whats}`)}
                >
                  <i className="fab fa-whatsapp" />
                </CopyToClipboard>

                <a target="_blank" href={google}>
                  <i className="fab fa-google-plus-g" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </>
    );
  }
}

export default connect(
  null,
  { setPageAds },
)(FirstNav);
