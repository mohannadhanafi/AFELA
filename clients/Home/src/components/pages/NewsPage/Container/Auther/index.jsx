/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './style.css';

export default function index({ details }) {
  return (
    <div className="auther--details">
      <img
        src={details ? `/api/v1/getFile/${details.pic}` : null}
        alt="profile"
      />
      <div>
        <h5>Written By</h5>
        <h4>{details ? details.name : null}</h4>
        <p>{details ? details.bio : null}</p>
      </div>
    </div>
  );
}
