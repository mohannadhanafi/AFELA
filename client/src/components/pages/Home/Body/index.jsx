import React, { Component } from 'react';
import TrendingPosts from '../../../common/layouts/TrendingPosts';

export default class index extends Component {
    state = {}

    render() {
      return (
        <div className="row">
          <div className="col-md-8 content">
            <TrendingPosts />
          </div>
          <aside className="col-md-4 sidebar pb-50">
            <h1>The asside will be here</h1>
          </aside>
        </div>
      );
    }
}
