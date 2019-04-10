/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function index(props) {
  const {
    first, mobile, email, onClick, second_logo, logo,
  } = props;
  return (
    <div className="first--footer">
      {second_logo ? (
        <img className="logo" onClick={onClick} src={`/api/v1/getFile/${second_logo}`} alt="final" />
      ) : (
        <img className="logo" onClick={onClick} src={`/api/v1/getFile/${logo}`} alt="final" />

      )}
      <p>{first}</p>
      <div className="footer--mobile">
        <i className="fas fa-phone" />
        {' '}
        <h6>Mobile:{' '}<span>{mobile}</span></h6>
      </div>
      <div className="footer--email">
        <i className="fas fa-envelope" />
        {' '}
        <h6>
          Email:
          {' '}
          <span>{email}</span>
        </h6>
      </div>
    </div>
  );
}

index.propTypes = {
  first: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  second_logo: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
