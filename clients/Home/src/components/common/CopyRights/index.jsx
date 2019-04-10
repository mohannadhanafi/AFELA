import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import './style.css';

export default class index extends Component {
  state = {
    left: 'All rights reserved MEDSE - 2019',
    right: [
      'fab fa-facebook-f',
      'fab fa-twitter',
      'fab fa-whatsapp',
      'fab fa-google-plus-g',
    ],
  };

  componentDidMount = async () => {
    const result = await axios('/api/v1/getoptions');
    const { data } = result;
    const {
      copyrights,
    } = data[0];
    this.setState({ left: copyrights });
  }


  render() {
    const { right, left } = this.state;
    return (
      <div className="copy--rights">
        <div className="container">
          <div className="copy--footer">
            <h5>{left}</h5>
            <div>
              {right.map(value => (
                <i key={uuid()} className={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
