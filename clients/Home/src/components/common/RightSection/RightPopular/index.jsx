import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function index(props) {
  const {
    header_media, title, createdAt, category, seo,
  } = props;

  return (
    <div className="pop--post">
      <div className="image--post">
        <img src={`/api/v1/getFile/${header_media[0]}`} alt="post" />
      </div>
      <div className="post--data">
        <Link to={`/news/${category.seo}/${seo}`}>
          <h3>{title}</h3>
        </Link>

        <span>{moment(createdAt).calendar()}</span>

      </div>
    </div>
  );
}
index.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
