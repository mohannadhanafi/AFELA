/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid';
import './style.css';

export default function index(props) {
  const { social } = props;
  return (
    <div className="row">
      {social && social.map(value => (
        <div key={uuid()} className="col-sm-4 col-6">
          <div>
            <img className="social--images" src={value.image} alt="facebook" />
            <h3>{value.number}</h3>
            <h6>number</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
