import React from 'react';

export default function PrevArrow(props) {
  const { onClick, className } = props;

  return (
    <div
      className={className}
      type="button"
      onClick={onClick}
    >
      <i className="fas fa-chevron-right" />
    </div>

  );
}
