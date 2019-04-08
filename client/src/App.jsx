/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import Header from './components/common/Header';
import Hero from './components/common/Hero';
import './App.scss';


class App extends Component {
  state = {};

  render() {
    return (
<>
      <Header />
      <Hero />
      </>
    );
  }
}

export default App;
