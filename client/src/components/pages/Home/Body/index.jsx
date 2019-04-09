import React, { Component } from 'react';
import FollowUs from '../../../common/FollowUs';
import Popular from '../../../common/Popular';
import Weather from '../../../common/Weather';
import LatestNews from '../../../common/Layouts/LatestNews';
import NewsInPicture from '../../../common/Layouts/NewsInPicture';

export default class index extends Component {
    state = {}

    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 content">
              <LatestNews />
              <NewsInPicture />
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
