import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';


export default function Preview({ categoryLayout }) {
  return (

    <div className="preview-layout">
      {categoryLayout === '2' ? (
        <img
          className="layout-image"
          alt="category"
          src={require('./layouts/list-right.png')}
        />
      ) : (
        <img
          className="layout-image"
          alt="category"
          src={require('./layouts/standard-right.png')}
        />
      )}
    </div>
  );
}
