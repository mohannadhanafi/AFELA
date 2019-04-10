import React from 'react';

export default function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      type="button"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left" />
    </div>
  );
}
