/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import './style.css';
import Left from './left';
import Right from './right';


export default function index({
  form, onChange, social, sendEmail, contact,
}) {
  return (
    <div className="contact">
      <div className="row">
        <Left
          form={form}
          onChange={onChange}
          sendEmail={sendEmail}
          contact={contact}
        />
        <Right
          social={social}
        />
      </div>
    </div>
  );
}
