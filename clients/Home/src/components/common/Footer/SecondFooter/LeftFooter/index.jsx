/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import './style.css';
import Heading from '../../../Heading';

export default function index(props) {
  const { tags } = props;
  return (
    <div>
      <Heading desc="Quick access" />
      <ul>
        {tags && tags.map(element => (element.parent === 0 ? (
          <li key={uuid()} className="nav-item dropdown ">
            <Link to={`/news/${element.seo}`}>{element.name}</Link>
          </li>
        ) : null))}
      </ul>
    </div>
  );
}
