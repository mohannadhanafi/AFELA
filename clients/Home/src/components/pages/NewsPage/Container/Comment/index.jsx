/* eslint-disable react/prop-types */
import React from 'react';
import TextArea from '../../../../common/TextArea';
import Input from '../../../../common/Input';
import Button from '../../../../common/Button';
import './style.css';

export default function index(props) {
  const {
    value, onChange, name, email, onClick,
  } = props;
  return (

    <div>
      <form onSubmit={onClick} className="add--comment">
        <TextArea
          name="comment"
          value={value}
          placeholder="Your Comment*"
          onChange={onChange}
          required
        />
        <div>
          <Input
            required
            value={name}
            onChange={onChange}
            name="username"
            placeholder="Your name*"
            className="spec--input"
            type="text"
          />
          <Input
            required
            value={email}
            onChange={onChange}
            name="email"
            placeholder="Your email*"
            className="spec--input"
            type="email"
          />
          <Input
            type="submit"
            className="add-comment-button"
            value="Submit Comment"
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
}
