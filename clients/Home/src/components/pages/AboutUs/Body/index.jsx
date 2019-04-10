/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import Top from './Top';
import Bottom from './Bottom';
import './style.css';

export default class index extends Component {
  state = {
    about_title: '',
    about_desc: '',
    about_story: '',
    about_story_desc: '',
    boxes: [],
  }

  componentDidMount = () => {
    axios.get('/api/v1/getoptions').then((res) => {
      const { data } = res;
      const {
        about_title, about_desc, about_story, about_story_desc,
      } = data[0];
      axios.get('/api/v1/services').then((result) => {
        this.setState({
          about_title, about_desc, about_story, about_story_desc, boxes: result.data,
        });
      });
    });
  }

  render() {
    const { statistics, background } = this.props;
    const {
      about_title, about_desc, about_story, about_story_desc, boxes,
    } = this.state;
    return (
      <div className="about--us">
        <Top
          boxes={boxes}
          title={about_title}
          desc={about_desc}
        />
        <Bottom
          statistics={statistics}
          background={background}
          title={about_story}
          desc={about_story_desc}
        />
      </div>
    );
  }
}
