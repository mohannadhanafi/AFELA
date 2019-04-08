import React, { Component } from 'react';
import Breaking from '../../common/Breaking';
import Hero from '../../common/Hero';

export default class index extends Component {
    state = {}

    render() {
      return (
        <>
          <div className="container">
            <Breaking />
            <Hero />
          </div>
        </>
      );
    }
}
