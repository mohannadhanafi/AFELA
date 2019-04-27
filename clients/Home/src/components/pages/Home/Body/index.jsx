import React, { Component } from 'react';
import axios from 'axios';
import TrendingPosts from '../../../common/layouts/TrendingPosts';
import LayoutThree from '../../../common/layouts/LayoutThree';
import LayoutFour from '../../../common/layouts/LayoutFour';
import Categories from '../../../common/layouts/Categories';
import FollowUs from '../../../common/FollowUs';
import Popular from '../../../common/Popular';
import Weather from '../../../common/Weather';
import LayoutFive from '../../../common/layouts/LayoutFive';
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
      const {
        type, layout_number, show, name,
      } = category;
      if (type === 'component') {
        switch (name) {
          case 'trending':
            if (show) return <TrendingPosts />;
            break;
          default:
            return null;
        }
      }
      if (type === 'category') {
        switch (layout_number) {
          case 1:
            return <LayoutOne seo={category.name} />;
          case 2:
            return <LayoutTwo seo={category.name} />;
          case 3:
            return <LayoutThree seo={category.name} />;
          case 4:
            return <LayoutFour seo={category.name} />;
          case 7:
            return <LayoutFour seo={category.name} />;
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

              {/* <Categories /> */}
              {array.map(element => this.setLayout(element))}

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
