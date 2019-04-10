/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

export default function index({ comments, AllComments }) {
  return (
    <div className="entry-comments mt-20">
      <h3 className="heading relative heading-small uppercase bottom-line style-2 left-align mb-40">
        {`${comments} `}comments
      </h3>
      <ul className="comment-list">
      {AllComments.map(comment => (
        <li>
          <div className="comment-body">
            <img src={comment.user.avatar} className="comment-avatar" alt="bg" />
            <div className="comment-content">
              <span className="comment-author">{comment.user.name}</span>
              <span><Link to="/">{comment.time}</Link></span>
              <p>{comment.comment}</p>
              <Link to="/">Reply</Link>
            </div>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}
