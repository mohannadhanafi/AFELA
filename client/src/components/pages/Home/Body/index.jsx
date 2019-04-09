import React, { Component } from 'react';
import TrendingPosts from '../../../common/layouts/TrendingPosts';
import LatestNews from '../../../common/layouts/LatestNews';
import NewsInPicture from '../../../common/layouts/NewsInPicture';

export default class index extends Component {
    state = {}

    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 content">
              <TrendingPosts />

              <LatestNews />
              <NewsInPicture />
            </div>
            <aside className="col-md-4 sidebar pb-50">
              <h1>The asside will be here</h1>
            </aside>
          </div>
        </div>
      );
    }
}
