/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import TopSection from './TopSection';
import Results from './Results';
import OurTeam from './OurTeam';
import Testomonials from './Testomonials';
import WhatWeDo from './WhatWeDo';

export default class AboutUs extends Component {
  state = {
    teamTitle: 'Creative Minds With The Extraordinary Skills',
    team: [
      {
        name: 'David Geller',
        jobTitle: 'CEO of Company',
        image: 'http://deothemes.com/envato/afela/html/img/team_2.jpg',
        facebook: 'facebook',
        twitter: 'twitter',
        google: 'google',
        email: 'email',
      },
      {
        name: 'Monica Bing',
        jobTitle: 'Art Director',
        image: 'http://deothemes.com/envato/afela/html/img/team_2.jpg',
        facebook: 'facebook',
        twitter: 'twitter',
        google: 'google',
        email: 'email',
      },
      {
        name: 'Joey Tribbiani',
        jobTitle: 'Lead Designer',
        image: 'http://deothemes.com/envato/afela/html/img/team_2.jpg',
        facebook: 'facebook',
        twitter: 'twitter',
        google: 'google',
        email: 'email',
      },
    ],
    testomonials: [
      {
        name: 'Test Eastwood',
        job: 'Actor',
        text:
          'I’am amazed, I should say thank you so much for your awesome taken care these team are realy amazing and talented! I will work only with this agency.',
      },
      {
        name: 'Sara Simpson',
        job: 'CEO of Company',
        text:
          'I’am amazed, I should say thank you so much for your awesome taken care these team are realy amazing and talented! I will work only with this agency.',
      },
      {
        name: 'John C. Marshall',
        job: 'Art Director',
        text:
          'I’am amazed, I should say thank you so much for your awesome taken care these team are realy amazing and talented! I will work only with this agency.',
      },
    ],
  };

  render() {
    const { teamTitle, team, testomonials } = this.state;
    return (
      <>
        <TopSection />
        <WhatWeDo />
        <Results />
        <OurTeam teamTitle={teamTitle} team={team} />
        <Testomonials testomonials={testomonials} />
      </>
    );
  }
}
