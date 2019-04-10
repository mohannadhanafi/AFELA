/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid';
import Heading from '../../../../common/Heading';
import './style.css';

export default function index({ social }) {
  return (
    <div className="col-md-4 offset-md-1 col-sm-12 right">
      <Heading desc="Keep In Touch" />
      <div className="row">
        {social.map(value => (
          <div key={uuid()} className="col-sm-4 col-6">
            <div>
              <img src={value.image} alt="facebook" />
              <h3>{value.number}</h3>
              <h6>number</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
