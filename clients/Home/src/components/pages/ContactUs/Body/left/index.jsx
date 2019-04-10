/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import Input from '../../../../common/Input';
import TextArea from '../../../../common/TextArea';
import Button from '../../../../common/Button';
import './style.css';

export default function index({
  form, onChange, sendEmail, contact,
}) {
  return (
    <div className="col-md-7 col-sm-12 contact--left">
      <p>
        {contact}
      </p>
      <Input
        name="name"
        value={form.name}
        className="spec--input"
        placeholder="Full Name"
        onChange={onChange}
      />
      <Input
        name="email"
        value={form.email}
        className="spec--input"
        placeholder="email"
        onChange={onChange}
      />
      <Input
        name="subject"
        value={form.subject}
        className="spec--input"
        placeholder="subject"
        onChange={onChange}
      />
      <TextArea
        name="message"
        value={form.message}
        className="spec--input"
        placeholder="message"
        onChange={onChange}
      />
      <Button
        value="Send"
        onClick={sendEmail}
      />
    </div>
  );
}
