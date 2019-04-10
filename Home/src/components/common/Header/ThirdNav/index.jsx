/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import NavItem from './NavItems';

export default class index extends Component {
  state = {
    display: true,
    links: [],
  };

  componentDidMount = () => {
    axios('/api/v1/categories/getAll')
      .then((result) => {
        const { data } = result;
        this.setState(
          () => ({
            links: data,
          }),
          () => {},
        );
      })
      .catch(() => {});
  };

  render() {
    const { display, links } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
          <div className="container">
            <button
              className="navbar-toggler mr-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <NavItem className="nav-no-media" links={links || null} />
        </nav>
        <NavItem className="nav-media" links={links || null} />
      </>
    );
  }
}
