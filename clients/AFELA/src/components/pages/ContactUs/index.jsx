import React, { Component } from 'react';
import $ from 'jquery';
import Background from './Background';
import ContactForm from './ContactForm';

export default class index extends Component {
  state = {
    background:
      'http://deothemes.com/envato/afela/html/img/blog/blog_title_bg.jpg',
    address: 'California CA',
    mobile: '+1 888 5146 3269',
    email: 'afelasupport@gmail.com',
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    $(document).ready(() => {
      (function ($) {
        $('.loader').delay(1000).fadeOut();
        $('.loader-mask').delay(1500).fadeOut('slow');
        $(window).trigger('resize');
      }(window.jQuery));
    });
  }

  render() {
    const {
      background, mobile, address, email,
    } = this.state;
    return (
      <>
        <div className="loader-mask">
          <div className="loader">Loading...</div>
        </div>
        <Background background={background} />
        <ContactForm mobile={mobile} address={address} email={email} />
      </>
    );
  }
}
