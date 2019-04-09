import React, { Component } from 'react';
import TopSection from './TopSection';
import WhatWeDo from './WhatWeDo';
import OurTeam from './OurTeam';

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
  };

  render() {
    const { teamTitle, team } = this.state;
    return (
      <>
        <TopSection />
        <WhatWeDo />
        <OurTeam teamTitle={teamTitle} team={team} />
      </>
    );
  }
}
