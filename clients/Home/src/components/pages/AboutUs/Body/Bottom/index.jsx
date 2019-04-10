/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import uuid from 'uuid';
import './style.css';

export default function index({
  statistics, background, title, desc,
}) {
  return (
    <div className="bottom--about">
      <div className="container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div
        className="about--bg"
        style={{
          backgroundImage:
            `url(${background})`,
        }}
      >
        <div className="about--bg--overlay">
          <div className="container">
            <div className="content">
              {statistics.length && statistics.map(statistic => (
                <div key={uuid()}>
                  <h3>{statistic.prize}</h3>
                  <h6>{statistic.title === 'users' ? 'Authors' : statistic.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
