/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-children-prop */
import React from 'react';
import './style.css';
import moment from 'moment';

function CryptoNewsItem({ data }) {
  const {
    header_media, title, post_intro, id, createdAt, seo, category,
  } = data;
  return (
    <div className="gx-news-item">
      <div className="gx-news-thumb"><img className="gx-width-115 gx-rounded-lg" src={`/api/v1/getFile/${header_media[0]}`} alt="..." /></div>
      <div className="gx-news-content">
        <h4 className="gx-mt-0">{title}</h4>
        <p className="gx-mb-2">{post_intro}</p>
        <div className="gx-news-tags-row">
          <div className="gx-news-tags-left">
            <p className="gx-text-grey gx-mb-0 gx-text-truncate"><i
              className="icon icon-tag-new gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle gx-text-light-grey"
            />{moment(createdAt).calendar()}
            </p>
          </div>
          <div className="gx-news-tags-right">
            <p className="gx-text-primary gx-pointer gx-mb-0">
              <a target="_blank" href={`/news/${category.seo}/${seo}`}>
              Read Full Post
                <i className="icon icon-long-arrow-right gx-fs-xl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoNewsItem;
