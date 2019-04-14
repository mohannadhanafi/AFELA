import React, { Component } from 'react';
import $ from 'jquery';
import Swal from 'sweetalert2';
import axios from 'axios';
import Background from './Background';
import ContactForm from './ContactForm';

export default class index extends Component {
  state = {
    background:
      'http://deothemes.com/envato/afela/html/img/blog/blog_title_bg.jpg',
    address: 'California CA',
    mobile: '+1 888 5146 3269',
    email2: 'afelasupport@gmail.com',
    email: '',
    name: '',
    message: '',
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

  onClick= async (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,

    });
    const {
      email, name,
      message,
    } = this.state;
    const data = {
      email,
      name,
      message,
    };
    await axios.post('api/v1/contact', data).then((res) => {
      const { data: { message } } = res;
      if (res.err) {
        return Toast.fire({
          type: 'error',
          title: message,

        });
      }
      Toast.fire({
        type: 'success',
        title: message,
      });
      this.setState({
        email: '', name: '', massage: '',
      });
    }).catch((err) => {
      Toast.fire({
        title: 'Somthing Error',
        type: 'error',
      });
    });
  }

  onChange=(e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      background, mobile, address, email, email2, name, massage,
    } = this.state;
    return (
      <>
        <div className="loader-mask">
          <div className="loader">Loading...</div>
        </div>
        <Background background={background} />
        <ContactForm mobile={mobile} address={address} email2={email2} onClick={this.onClick} onChange={this.onChange} email={email} name={name} massage={massage} />
      </>
    );
  }
}
