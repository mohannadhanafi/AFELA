import React, { Component } from 'react';
import TrendingPosts from '../../../common/layouts/TrendingPosts';
import LatestNews from '../../../common/layouts/LatestNews';
import NewsInPicture from '../../../common/layouts/NewsInPicture';
import Categories from '../../../common/layouts/Categories';
import FollowUs from '../../../common/FollowUs';
import Popular from '../../../common/Popular';
import Weather from '../../../common/Weather';

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
              <Categories />
            </div>
            <aside className="col-md-4 sidebar pb-50">
              <FollowUs />
              <Popular />
              <Weather />
            </aside>
          </div>
        </div>

      );
    }
}
