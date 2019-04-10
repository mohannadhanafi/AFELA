/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class index extends Component {
  state = {};

  onClick = (catName, seoName) => {
    this.props.history.push(`/news/${catName}/${seoName}`);
  };

  render() {
    const { next, prev: previous } = this.props;
    return previous.length || next.length ? (
      <div className="next--posts">
        <div>
          <h5>Previous</h5>
          {previous.length ? (
            <span
              onClick={() => this.onClick(previous[0].cat_seo, previous[0].seo)}
            >
              {`${previous[0].title.slice(0, 50)} ...`}
            </span>
          ) : (
            <span className="disable">This is the first one</span>
          )}
        </div>
        <div>
          <h5>Next</h5>
          {next.length ? (
            <span
              onClick={() => this.onClick(next[0].cat_seo, next[0].seo)}
            >
              {`${next[0].title.slice(0, 50)} ...`}

            </span>
          ) : (
            <span className="disable">This is the last one</span>
          )}
        </div>
      </div>
    ) : null;
  }
}

export default withRouter(index);
