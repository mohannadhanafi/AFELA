/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import FirstFotter from './FirstFooter';
import SecondFooter from './SecondFooter';
import './style.css';

class index extends Component {
  state = {
    first: '',
    mobile: '',
    email: '',
    logo: '',
  };

  goToHome = () => {
    const { history } = this.props;
    history.push('/');
  }

componentDidMount =async () => {
  const result = await axios('/api/v1/getoptions');
  const { data } = result;
  const {
    footer_description, mobile, email, second_logo, logo,
  } = data[0];
  this.setState({
    first: footer_description, mobile, email, second_logo, logo,
  });
}

render() {
  const {
    first, mobile, email, second_logo, logo,
  } = this.state;
  return (
    <div className="footer">
      <div className="container">
        <div className="footer--container">
          <FirstFotter
            first={first}
            mobile={mobile}
            email={email}
            logo={logo}
            second_logo={second_logo}
            onClick={this.goToHome}
          />
          <SecondFooter />
        </div>
      </div>
    </div>
  );
}
}

export default withRouter(index);
