import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../Heading';
import Button from '../../../Button';
import Input from '../../../Input';
import './style.css';
import { fadeOutEnabled } from 'react-reveal/globals';

export default function index(props) {
  const {
    desc, email, onClick, onChange, error, errorMessage, success, successMessage,
  } = props;
  return (
    <div>
      <Heading desc="News Letter" />
      <div className="form--data">
        <p>{desc}</p>
        <form onSubmit={onClick}>
          <Input
            value={email}
            onChange={onChange}
            placeholder="enter your email"
            name="email"
            type="email"
            required
          />
          <Input
            type="submit"
            value="Send"
            className="newsletter-submit"
          />
          {error ? (
            <span style={{
              transitionDuration: '0.4s',
              color: '#f36161',
              fontSize: '12px',
              marginLeft: '5px',
            }}
            >
              {errorMessage}

            </span>
          ) : null}
          {success ? (
            <span style={{
              transitionDuration: '0.4s',
              color: '#a5f361',
              fontSize: '12px',
              marginLeft: '5px',
            }}
            >
              {successMessage}

            </span>
          ) : null}
        </form>
      </div>
    </div>
  );
}

index.propTypes = {
  desc: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
