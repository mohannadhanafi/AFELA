import React, { Component } from 'react';
import FollowUs from '../../../common/FollowUs';
import Popular from '../../../common/Popular';

export default class index extends Component {
    state = {}

    render() {
      return (
        <div className="row">
          <div className="col-md-8 content">
            <h1>The content will be here</h1>
          </div>
          <aside className="col-md-4 sidebar pb-50">
            <FollowUs />
            <Popular />
          </aside>
        </div>
      );
    }
}
