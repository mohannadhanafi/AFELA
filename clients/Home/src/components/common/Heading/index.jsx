import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function index(props) {
  const { desc } = props;
  return (
    <div className="heading">
      <h2>{desc}</h2>
    </div>
  );
}

index.propTypes = {
  desc: PropTypes.string.isRequired,
};
