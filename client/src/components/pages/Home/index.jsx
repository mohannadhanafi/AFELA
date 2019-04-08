import React, { Component } from 'react';
import Header from '../../common/Header';
import Breaking from '../../common/Breaking';

export default class index extends Component {
    state = {}
  render() {
    return (
        <>
        <Header />
        <div className="container">
          <Breaking />
        </div>
      </>
    )
  }
}
