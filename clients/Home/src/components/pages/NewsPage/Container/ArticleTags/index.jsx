/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid';
import './style.css';
import {
  FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton,
} from 'react-share';

export default function index({ tags }) {
  const { href } = window.location;
  return (
    <>
      <div className="tags">
        {tags.map(tag => <span key={uuid()}>{tag}</span>) || null}
      </div>
      <div className="social--post">
        <h4>
          100 <span>shares</span>
        </h4>
        <div className="social--icons">
          <div className="facebook">
            <FacebookShareButton
              url={href}
              className="button"
            >
              <img src="https://i.ibb.co/0Fpmjxd/Shape-3.png" alt="facebook" />
              <span>Share On Facebook</span>
            </FacebookShareButton>
          </div>
          <div className="twitter">
            <TwitterShareButton
              url={href}
              className="button"
            >
              <img
                className="twitter"
                src="https://i.ibb.co/cNJzvH1/Shape-4.png"
                alt="twitter"
              />
              <span>Tweet</span>
            </TwitterShareButton>

          </div>
          <WhatsappShareButton
            url={href}
            className="button"
          >
            <img
              src="https://i.ibb.co/YbvXz3J/Vector-Smart-Object1.png"
              alt="whatsapp"
            />
          </WhatsappShareButton>
          <LinkedinShareButton
            url={href}
            className="button"
          >
            <img
              src="https://i.ibb.co/vLmQ0QL/Vector-Smart-Object.png"
              alt="linkedin"
            />
          </LinkedinShareButton>

        </div>
        <div className="share">
          <i className="fas fa-share-alt" />
          <p>http://medse.co/255x3</p>
        </div>
      </div>
      <hr className="seperate" />
    </>
  );
}
