import React from 'react';

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    />
  );
};

export default NextArrow;
