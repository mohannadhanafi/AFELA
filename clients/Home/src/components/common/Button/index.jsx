import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function index(props) {
  const { value, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}
index.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
