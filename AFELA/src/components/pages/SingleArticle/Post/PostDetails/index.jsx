import React from 'react';
import { Link } from 'react-router-dom';

export default function index({
  images, date, category, comments, author, title,
}) {
  return (
    <>
      <h1 className="entry-title">{title}</h1>
      <ul className="entry-meta list-inline mb-30">
        <li className="entry-date">
          <i className="fa fa-clock-o" />
          <Link to="/">{date}</Link>
        </li>
        <li className="entry-category">
          <i className="fa fa-folder-open" />
          <Link to="/">{category.name}</Link>
        </li>
        <li className="entry-author">
          <i className="fa fa-user" />
          <Link to="/">{author.name}</Link>
        </li>
        <li className="entry-comments">
          <i className="fa fa-comments" />
          <a href="blog-single.html">15</a>
        </li>
      </ul>

      <div className="entry-slider">
        <div className="flexslider" id="flexslider">
          <ul className="slides clearfix">
            {images.map(image => (
              <li>
                <a href="#">
                  <img src={image} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
