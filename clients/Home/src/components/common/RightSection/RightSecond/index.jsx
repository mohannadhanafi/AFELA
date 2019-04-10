import React from 'react';
import PropTypes from 'prop-types';

export default function index(props) {
  const { video } = props;
  return (

    <div className="adv-video" style={{ backgroundImage: `url(${video})` }} />
  );
}

index.propTypes = {
  video: PropTypes.string.isRequired,
};
