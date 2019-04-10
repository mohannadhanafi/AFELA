import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
  state = {}

  render() {
    return (
      <div className="navbar-brand">
        <div className="profile">
          <i className="fas fa-search" />
          <i className="fas fa-user-circle" />
        </div>
      </div>
    );
  }
}
