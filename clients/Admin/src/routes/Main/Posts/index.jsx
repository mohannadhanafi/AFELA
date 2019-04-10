/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-children-prop */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Widget from '../../../components/Widget/index';
import CryptoNewsItem from './CryptoNewsItem.jsx';


class CryptoNews extends React.Component {
  state = {
    allNews: [],
    loader: false,
  };

componentDidMount = async () => {
  const result = await axios('/api/v1/lastposts');
  const { data } = result;
  this.setState({ allNews: data });
}


render() {
  const { allNews } = this.state;
  return (
    <Widget className="last-posts-table">
      <div className="ant-row-flex gx-justify-content-between gx-mb-3 gx-dash-search">
        <h2 className="h4 gx-mb-3 gx-mb-sm-1 gx-mr-2">Last News</h2>
        <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
          <Link to="/admin/Posts/addPost">
            <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" /> Add New Post
          </Link>
        </p>
      </div>
      {allNews.length ? allNews.map(data => <CryptoNewsItem data={data} />) : null}
    </Widget>
  );
}
}

export default CryptoNews;
