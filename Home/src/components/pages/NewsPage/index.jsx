import React, { Component } from 'react';
import Header from '../../common/Header';
import Container from './Container';
import Footer from '../../common/Footer';
import CopyRights from '../../common/CopyRights';

export default class NewsPage extends Component {
    state = {}

    render() {
      return (
        <div>
          <Header />
          <Container />
          <Footer />
          <CopyRights />
        </div>
      );
    }
}
