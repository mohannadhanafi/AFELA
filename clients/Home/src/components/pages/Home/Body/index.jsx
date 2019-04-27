import React, { Component } from 'react';
import axios from 'axios';
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
import TopRated from '../../../common/TopRated';
import Tags from '../../../common/Tags';
import LayoutOne from '../../../common/layouts/LayoutOne';
import LayoutTwo from '../../../common/layouts/LayoutTwo';

export default class index extends Component {
    state = { array: [] }

    componentDidMount() {
      axios.get('/api/v1/home/layouts').then((result) => {
        const { data } = result;
        this.setState(() => ({ array: data }));
      });
    }

    setLayout = (category) => {      
      const { type, layout_number } = category;      
      if (type === 'category') {
        switch (layout_number) {
          case 0:
            return <NewsInPicture seo={category.name} />;
          case 1:
            return <LayoutTwo seo={category.name} />;
          default:
            return null;
        }
      } return null;
    };

    render() {
      const { array } = this.state;
      return (
        <div className="container pt-50">
          <div className="row">
            <div className="col-md-8 content">
              <TrendingPosts seo="main" />
              <Categories seo="main" />
              {array.map(element => this.setLayout(element))}
              {/* <NewsInPicture seo="main" />
              <LayoutOne seo="main" />
              <LayoutTwo seo="main" />
              <LayoutThree seo="main" />
              <EditorPicks /> */}

            </div>
            <aside className="col-md-4 sidebar pb-50">
              <FollowUs />
              <Popular />
              <Weather />
              <Ads link="/" />
              <Galleries />
              <Category />
              {/* <TopRated /> */}
              <Tags />
            </aside>
          </div>
        </div>

      );
    }
}
