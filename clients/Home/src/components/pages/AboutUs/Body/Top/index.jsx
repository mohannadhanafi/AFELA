/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import uuid from 'uuid';
import './style.css';

export default function index({ boxes, title, desc }) {
  return (
    <div className="top--about">
      <div className="container">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="row">
          {boxes.map(box => (
            <div key={uuid()} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="box--about">
                <i className="material-icons md">{box.icon}</i>
                <h6>{box.title}</h6>
                <p>{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
