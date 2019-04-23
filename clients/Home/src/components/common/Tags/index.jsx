import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Tags extends Component {
  state={
    tags: [
      {
        link: '/',
        name: 'Multi-purpose',
      },
      {
        link: '/',
        name: 'Creative',
      }, {
        link: '/',
        name: 'Elegant',
      }, {
        link: '/',
        name: 'Clean',
      }, {
        link: '/',
        name: 'Modern',
      }, {
        link: '/',
        name: 'Responsive',
      }, {
        link: '/',
        name: 'E-commerce',
      }, {
        link: '/',
        name: 'WordPress',
      }, {
        link: '/',
        name: 'Woocommerce',
      }, {
        link: '/',
        name: 'Store',
      }, {
        link: '/',
        name: 'Business',
      },
    ],
  }

  render() {
    const { tags } = this.state;

    return (
      <div className="widget tags clearfix">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">Tags</h3>
        { tags && tags.map(({ link, name }) => (
          <Link to={link}>{name}</Link>
        )) }
      </div>
    );
  }
}
