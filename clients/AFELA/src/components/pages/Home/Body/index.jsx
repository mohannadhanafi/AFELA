import React, { Component } from 'react';
import TrendingPosts from '../../../common/layouts/TrendingPosts';
import LayoutThree from '../../../common/layouts/LayoutThree';
import NewsInPicture from '../../../common/layouts/NewsInPicture';
import Categories from '../../../common/layouts/Categories';
import FollowUs from '../../../common/FollowUs';
import Popular from '../../../common/Popular';
import Weather from '../../../common/Weather';
import EditorPicks from '../../../common/layouts/EditorPicks';
import Ads from '../../../common/Ads';
import Galleries from '../../../common/Galleries';
import Category from '../../../common/Category';
import Feather from '../../../common/Feather';
import TopRated from '../../../common/TopRated';
import Tags from '../../../common/Tags';
import LayoutOne from '../../../common/layouts/LayoutOne';
import LayoutTwo from '../../../common/layouts/LayoutTwo';

export default class index extends Component {
    state = {}

    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 content">
              <TrendingPosts seo="main"/>
              <LayoutOne seo="main" />
              <NewsInPicture seo="main" />
              <Categories seo="main" />
              <LayoutTwo seo="main" />
              <LayoutThree seo="main" />
              <EditorPicks />
            </div>
            <aside className="col-md-4 sidebar pb-50">
              <FollowUs />
              <Popular />
              <Weather />
              <Ads link="/" />
              <Galleries />
              <Category />
              <Feather />
              <TopRated />
              <Tags />
            </aside>
          </div>
        </div>

      );
    }
}
