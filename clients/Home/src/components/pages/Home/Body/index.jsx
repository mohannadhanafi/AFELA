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
  state = { array: [] };

  componentDidMount() {
    axios.get('/api/v1/home/layouts').then((result) => {
      const { data } = result;
      this.setState(() => ({ array: data }));
    });
  }

  setLayout = (category) => {
    const {
      type, layout_number, show, name, threecatsseo,
    } = category;
    if (type === 'category') {
      switch (layout_number) {
        case 5:
          if (show) return <LayoutOne seo={category.seo} />;
          break;
        case 6:
          if (show) return <LayoutTwo seo={category.seo} />;
          break;

        case 2:
          if (show) return <LayoutThree seo={category.seo} />;
          break;

        case 8:
          if (show) return <LayoutFour seo={category.seo} />;
          break;

        case 7:
          if (show) return <LayoutFive seo={category.seo} />;
          break;

        default:
          return null;
      }
    } else if (type === 'component') {
      console.log(name, 555555551545);

      switch (name) {
        case 'trending':
          if (show) return <TrendingPosts />;
          break;
        case 'three':
          if (show) {
            return (
              <Categories
                cat1={threecatsseo[0]}
                cat2={threecatsseo[1]}
                cat3={threecatsseo[2]}
              />
            );
          }
          break;
        default:
          return null;
      }
    }
    return null;
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
