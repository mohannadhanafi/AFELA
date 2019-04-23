/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import TopSection from './TopSection';
import Results from './Results';
import OurTeam from './OurTeam';
import Testomonials from './Testomonials';
import WhatWeDo from './WhatWeDo';

export default class AboutUs extends Component {
  state = {
    about_title: '',
    about_desc: '',
    about_story: '',
    about_story_desc: '',
    teamTitle: 'Creative Minds With The Extraordinary Skills',
    team: [],
    testomonials: [
     
    ],
  };


  componentDidMount() {
    axios.get('/api/v1/getoptions').then((res) => {
      axios.get('/api/v1/team/getAll').then((result) => {
        const { data } = result;
        this.setState({ team: data });
      });
      axios.get('/api/v1/clients/getAll').then((testomonials) => {
        const { data } = testomonials;
        this.setState({ testomonials: data });
      });
      const { data } = res;
      const {
        about_title, about_desc, about_story, about_story_desc,
      } = data[0];
      this.setState({
        about_title, about_desc, about_story, about_story_desc,
      });
    });
    window.scrollTo(0, 0);
    $(document).ready(() => {
      (function ($) {
        $('.local-scroll').localScroll({ offset: { top: -60 }, duration: 1500, easing: 'easeInOutExpo' });
        $('.statistic').appear(() => {
          $('.timer').countTo({
            speed: 4000,
            refreshInterval: 60,
            formatter(value, options) {
              return value.toFixed(options.decimals);
            },
          });
        });
        const $section = $('#animated-skills').appear(function () {
          const bar = $('.progress-bar');
          let bar_width = $(this);

          function loadDaBars() {
            $(bar).each(function () {
              bar_width = $(this).attr('aria-valuenow');
              $(this).width(`${bar_width}%`);
            });
          }
          loadDaBars();
        });
        $('#owl-testimonials').owlCarousel({

          navigation: false,
          autoHeight: true,
          slideSpeed: 300,
          pagination: true,
          paginationSpeed: 400,
          singleItem: true,
          stopOnHover: true,

        });
        $('.loader').delay(1000).fadeOut();
        $('.loader-mask').delay(1500).fadeOut('slow');
        $(window).trigger('resize');
      }(window.jQuery));
    });
  }

  render() {
    const {
      teamTitle, team, testomonials, about_title, about_desc,
    } = this.state;
    return (
      <>
        <div className="loader-mask">
          <div className="loader">Loading...</div>
        </div>
        <TopSection about_title={about_title} />
        <WhatWeDo about_desc={about_desc} />
        <Results />
        <OurTeam teamTitle={teamTitle} team={team} />
        <Testomonials testomonials={testomonials} />
      </>
    );
  }
}
