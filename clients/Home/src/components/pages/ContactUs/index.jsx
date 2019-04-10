import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Copyrights from '../../common/CopyRights';
import Breadcrumb from '../../common/breadcrumb';
import Body from './Body';
import Loading from '../../common/Loading';
import { setPageAds } from '../../../appRedux/actions/ads';

class ContactUs extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    contact: '',
    social: [
      { image: 'https://i.ibb.co/D9Xzh8k/facebook.png', number: '' },
      { image: 'https://i.ibb.co/5xzNkx9/insta.png', number: '' },
      { image: 'https://i.ibb.co/1b4RZ3t/snapchat.png', number: '' },
      { image: 'https://i.ibb.co/mGLYcfv/soundcloud.png', number: '' },
      { image: 'https://i.ibb.co/bFjNJj0/twitter.png', number: '' },
      { image: 'https://i.ibb.co/fpDLfcr/youtube.png', number: '' },
    ],
    loading: false,
  }

  componentWillMount() {
    this.props.setPageAds('contact');
    this.setState({ loading: true });
    const intervalId = setInterval(this.switchLoading(), 1000);
    setTimeout(() => {
      this.setState({ loading: false }, () => {
        clearInterval(intervalId);
      });
    }, 2000);
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

  switchLoading = () => {
    this.setState({ loading: !this.state.loading });
  }


  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  sendEmail = async () => {
    const {
      email, name, subject, message,
    } = this.state;
    const data = {
      email, name, subject, message,
    };
    axios.post('/api/v1/sendEmail', data).then((result) => {
    });
  }

  render() {
    const { social, loading, contact } = this.state;
    return (
      <>
        {loading ? <Loading /> : null}
        <Header />
        <div className="container">
          <Breadcrumb data="Contact" />
          <Body
            onChange={this.onChange}
            form={this.state}
            social={social}
            contact={contact}
            sendEmail={this.sendEmail}
          />
        </div>
        <Footer />
        <Copyrights />
      </>
    );
  }
}
export default connect(null, { setPageAds })(ContactUs);
