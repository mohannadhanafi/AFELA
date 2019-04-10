import React, { Component } from 'react';
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
  }

  render() {
    const {
      background, mobile, address, email,
    } = this.state;
    return (
      <>
        <Background background={background} />
        <ContactForm mobile={mobile} address={address} email={email} />
      </>
    );
  }
}
