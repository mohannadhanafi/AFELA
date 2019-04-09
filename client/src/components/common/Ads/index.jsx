import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Ads extends Component {
  state={}

  render() {
    return (
      <div className="widget ad-336x280 text-center">
        <Link to="#">
          <img src="http://deothemes.com/envato/afela/html/img/magazine/336_ad.jpg" alt="" className="image__Ads" />
        </Link>
      </div>
    );
  }
}
