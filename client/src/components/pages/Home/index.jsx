import React, { Component } from 'react';
import Breaking from '../../common/Breaking';
import Hero from '../../common/Hero';
import BackToTop from '../../common/BackToTop';
import Body from './Body';

export default class index extends Component {
    state = {}

    render() {
      return (
        <>
            <Breaking />
            <Hero />
            <Body />
            <BackToTop />
        </>
      );
    }
}
