/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';

export default function index() {
  return (
    <div className="entry-prev-next">
      <div className="row">
        <div className="col-sm-6 prev-entry">
          <span>
            <i className="fa fa-angle-left" />
            Previous Post
          </span>
          <h4>
            <a href="blog-single.html">
              The New Development Bank will have an African regional branch
            </a>
          </h4>
        </div>
        <div className="col-sm-6 next-entry">
          <span>
            Next Post
            <i className="fa fa-angle-right" />
          </span>
          <h4>
            <a href="blog-single.html">
              Afela theme is multi-purpose solution for any kind of business
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
