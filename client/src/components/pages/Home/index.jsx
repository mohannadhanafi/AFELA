import React, { Component } from 'react';
import Breaking from '../../common/Breaking';
import Hero from '../../common/Hero';
import BackToTop from '../../common/BackToTop';

export default class index extends Component {
    state = {}

    render() {
      return (
        <>
          <div className="container">
            <Breaking />
            <Hero />
            <BackToTop />
          </div>
        </>
      );
    }
}
