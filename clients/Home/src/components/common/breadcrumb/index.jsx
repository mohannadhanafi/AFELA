/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function index({ data }) {
  return (
    <div className="breadcrumb--container">
      <h2>{data}</h2>
      <ul className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li>{data}</li>
      </ul>
    </div>
  );
}
