import React, { Component } from 'react';
import axios from 'axios';
import LeftSection from './LeftSection';
import RightSection from '../../../common/RightSection';

import './style.css';

export default class ThirdSection extends Component {
    state = {
      social: [],
      right: {
        social: [
          { image: 'https://i.ibb.co/D9Xzh8k/facebook.png', number: '' },
          { image: 'https://i.ibb.co/5xzNkx9/insta.png', number: '' },
          { image: 'https://i.ibb.co/1b4RZ3t/snapchat.png', number: '' },
          { image: 'https://i.ibb.co/mGLYcfv/soundcloud.png', number: '' },
          { image: 'https://i.ibb.co/bFjNJj0/twitter.png', number: '' },
          { image: 'https://i.ibb.co/fpDLfcr/youtube.png', number: '' },
        ],
        heading1: 'Keep In Touch',
        video:
      'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
        heading2: 'Videos',
        heading3: 'Popular Posts',
        posts: [
          {
            image:
          'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
            title:
          'We decided to use this room, on the second floor and overlooking',
            date: 'Jan 23, 2018',
          },
          {
            image:
          'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
            title:
          'We decided to use this room, on the second floor and overlooking',
            date: 'Jan 23, 2018',
          },
          {
            image:
          'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
            title:
          'We decided to use this room, on the second floor and overlooking',
            date: 'Jan 23, 2018',
          },
          {
            image:
          'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
            title:
          'We decided to use this room, on the second floor and overlooking',
            date: 'Jan 23, 2018',
          },
          {
            image:
          'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
            title:
          'We decided to use this room, on the second floor and overlooking',
            date: 'Jan 23, 2018',
          },
        ],
        heading4: 'ads',
        adv:
      'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
        heading5: 'Popular Posts',
      },
    }

    componentDidMount() {
      axios.get('/api/v1/getoptions').then((result) => {
        const { data } = result;
        const {
          contact,
          facebook_number,
          twitter_number,
          instagram_number,
          sound_number,
          snap_number,
          youtub_number,
        } = data[0];

        const list = [
          { image: 'https://i.ibb.co/D9Xzh8k/facebook.png', number: facebook_number },
          { image: 'https://i.ibb.co/5xzNkx9/insta.png', number: instagram_number },
          { image: 'https://i.ibb.co/1b4RZ3t/snapchat.png', number: snap_number },
          { image: 'https://i.ibb.co/mGLYcfv/soundcloud.png', number: sound_number },
          { image: 'https://i.ibb.co/bFjNJj0/twitter.png', number: twitter_number },
          { image: 'https://i.ibb.co/fpDLfcr/youtube.png', number: youtub_number },
        ];
        this.setState(() => ({ contact, social: list }));
      });
    }

    render() {
      const { right, social } = this.state;
      return (
        <div className="third-section">
          <div className="container">
            <div className="third-section-container">
              <LeftSection />
              <RightSection data={right} social={social} />
            </div>
          </div>
        </div>
      );
    }
}
