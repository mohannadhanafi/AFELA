import React, { Component } from 'react';
import axios from 'axios';
import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';
import './style.css';

export default class index extends Component {
  state = {
    tags: [],
    desc: 'We decided to use this room, on the second floor and overlooking',
    email: '',
    error: false,
    success: false,
  };

  onClick = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    await axios.post('/api/v1/newsletter', { email }).then((result) => {
      this.setState(() => ({ success: true, error: false, successMessage: 'Thank you,' }));
    }).catch((error) => {
      const { data: { message: errorMessage }, statusText: errorText } = error.response;
      this.setState(() => ({ error: true, success: false, errorMessage: errorMessage || errorText }));
    });
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  componentDidMount = async () => {
    const result = await axios('/api/v1/categories/getAll');
    const { data } = result;
    this.setState({ tags: data });
  }


  render() {
    const {
      tags, desc, email, error, errorMessage, success, successMessage,
    } = this.state;
    return (
      <div className="second--footer">
        <LeftFooter tags={tags || null} />
        <RightFooter
          desc={desc}
          onClick={this.onClick}
          email={email}
          onChange={this.onChange}
          error={error}
          errorMessage={errorMessage}
          success={success}
          successMessage={successMessage}
        />
      </div>
    );
  }
}
