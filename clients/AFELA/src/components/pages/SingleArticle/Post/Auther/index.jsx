/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';

export default function index({ author }) {
  return (
    <div className="entry-author-box clearfix">
      <img src={author.image} className="author-img" alt="img" />
      <div className="author-info">
        <h6 className="author-name uppercase">by{` ${author.name}`}
        </h6>
        <p className="mb-0">{author.bio}</p>
      </div>
    </div>
  );
}
