import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function index(props) {
  const {
    value, onChange, name, placeholder, className, type, required,
  } = props;
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        className={className || 'input-field'}
        value={value}
        type={type}
        onChange={onChange}
        required="true"
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
