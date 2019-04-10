/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import Profile from './profile';
import SubCat from './SubCat';

export default class navItems extends Component {
  state = {};


  componentDidMount() {
    document.addEventListener('mousedown', this.handleClose, false);
  }

  componentWillReceiveProps() {
    if (this.node) {
      this.node.classList.remove('show');
    }
  }

  checkChildren = (id, cats) => {
    let result = false;
    if (cats) {
      cats.map((element) => {
        if (element.parent === id) {
          result = true;
        }
      });
    }
    return result;
  };

  handleClose = (e) => {
    if (this.node && !this.node.contains(e.target) && this.node.classList.contains('show')) {
      if (!e.target.classList.contains('fa-bars')) {
        this.node.classList.remove('show');
      }
    }
  };

  render() {
    const { links, className } = this.props;
    return (
      <div className={`${className}`}>
        <div className="container">
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={node => (this.node = node)}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {links && links.map(element => (
                element.parent === 0
                  ? (
                    <li key={uuid()} className="nav-item dropdown ">
                      <Link
                        className={`nav-link ${
                          this.checkChildren(element.id, links)
                            ? 'dropdown-toggle'
                            : null
                        }`}
                        to={`/news/${element.seo}`}
                        id="navbarDropdown"
                      >
                        {element.name}
                      </Link>
                      <SubCat cats={links} id={element.id} />
                    </li>
                  )
                  : null))}
            </ul>
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}
