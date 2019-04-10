/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';

export default function index({ mobile, address, email }) {
  return (
    <section className="section-wrap-lg contact" id="contact">
      <div className="container">

        <div className="row">

          <div className="col-md-4 mb-40">
            <h5 className="uppercase">Information</h5>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon icon_house_alt" />
              </div>
              <p>{address}</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon icon_mobile" />
              </div>
              <span>{mobile}</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon icon_mail_alt" />
              </div>
              <a href="mailto:afelasupport@gmail.com" className="dark-link">{email}</a>
            </div>

          </div>

          <div className="col-md-8">
            <form id="contact-form" action="#">

              <div className="row row-16">
                <div className="col-md-6 contact-name">
                  <input name="name" id="name" type="text" placeholder="Name*" />
                </div>
                <div className="col-md-6 contact-email">
                  <input name="mail" id="mail" type="email" placeholder="E-mail*" />
                </div>
              </div>

              <textarea name="comment" id="comment" placeholder="Message" rows="9" />
              <input type="submit" className="btn btn-lg btn-color btn-submit" value="Send Message" id="submit-message" />
              <div id="msg" className="message" />
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
