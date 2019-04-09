import React, { Component } from 'react';
import TopSection from './TopSection';
import WhatWeDo from './WhatWeDo';
import OurTeam from './OurTeam';

export default class AboutUs extends Component {
  state = {};

  render() {
    return (
      <>
        <TopSection />
        <WhatWeDo />
        <OurTeam />
      </>
    );
  }
}
