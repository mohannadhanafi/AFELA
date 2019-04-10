/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import moment from 'moment';
import {
  FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton,
} from 'react-share';

export default function index(props) {
  const { postDetails, comments } = props;
  const { href } = window.location;

  return (
    <div className="article">
      <img
        src={postDetails.length ? `/api/v1/getFile/${postDetails[0].header_media[0]}` : null}
        alt="article"
      />
      <h2>{postDetails.length && postDetails[0].title}</h2>
      <div className="info">
        <div className="user">
          <img
            src={postDetails.length ? `/api/v1/getFile/${postDetails[0].user.pic}` : null}
            alt="pro"
          />
          <h5>
            {moment(postDetails.createdAt).calendar()}{'  -  By'}  <span>{postDetails.length ? postDetails[0].user.name : null}</span>
          </h5>
        </div>
        <div className="comments">
          <div>
            <i className="fas fa-comment" />
            <h6>{comments.length} comments</h6>
          </div>
          <i className="fas fa-print" />
        </div>
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
              className="button"
              url={href}
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
    </div>
  );
}
