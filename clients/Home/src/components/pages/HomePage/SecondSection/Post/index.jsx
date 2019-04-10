import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

export default function index(props) {
  const {
    image, desc, date, seoName, catSeoName,
  } = props;
  return (
    <div key={uuid()} className="post-component">
      <img src={`/api/v1/getFile/${image}`} alt="slider" />
      <Link key={uuid()} to={`/news/${catSeoName}/${seoName}`}>
        {desc}
      </Link>
      <span>{date}</span>
    </div>
  );
}

index.propTypes = {
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
