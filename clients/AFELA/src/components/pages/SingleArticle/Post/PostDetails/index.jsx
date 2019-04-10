/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './style.css';

export default function index({
  images, date, category, author, title,
}) {
  return (
    <>
      <h1 className="entry-title">{title}</h1>
      <ul className="entry-meta list-inline mb-30">
        <li className="entry-date">
          <i className="fa fa-clock-o" />
          <Link to="/">{moment(date).format('DD MMM, YYYY')}</Link>
        </li>
        <li className="entry-category">
          <i className="fa fa-folder-open" />
          <Link to="/">{category.name}</Link>
        </li>
        <li className="entry-author">
          <i className="fa fa-user" />
          <Link to="/">{author.name}</Link>
        </li>
      </ul>

      <div className="entry-slider">
        {/* {images.length > 1 ? (
          <div className="flexslider" id="flexslider">
            <ul className="slides clearfix">
              {images.map(image => (
                <li>
                  <img className="post-image-slider" src={`/api/v1/getFile/${image}`} alt="" />
                </li>
              ))}
            </ul>
          </div>
        ) : ( */}
        <img className="post-image-slider" src={`/api/v1/getFile/${images[0]}`} alt="" />
        {/* )} */}
      </div>
    </>
  );
}
