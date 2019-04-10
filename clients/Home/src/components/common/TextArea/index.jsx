import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function index(props) {
  const {
    value, onChange, name, placeholder, required,
  } = props;
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        className="area-field"
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

index.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
