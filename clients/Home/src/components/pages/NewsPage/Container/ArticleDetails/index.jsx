/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './style.css';

export default function index({ postDetails }) {
  return (
    <div className="post--details">
      {postDetails.length ? ReactHtmlParser(postDetails[0].description) : null}
      <hr className="seperate" />
    </div>
  );
}
