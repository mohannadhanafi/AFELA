import React, { Component } from 'react';
import Popular from '../../../common/Popular';
import Galleries from '../../../common/Galleries';
import Category from '../../../common/Category';
import Tags from '../../../common/Tags';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';


import './style.css';

class index extends Component {
  state={}

  setLayout = (layout) => {
    const { posts, total, changeData } = this.props;

    switch (layout) {
      case 'One':
        return <LayoutOne posts={posts} changeData={changeData} total={total} />;
      case 'Two':
        return <LayoutTwo posts={posts} changeData={changeData} total={total} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="container margin-content">
        <div className="row">
          <div className="col-md-8 post-content mb-50 ">
            { this.setLayout('Two')}

          </div>
          <aside className="col-md-4 sidebar pb-50">
            <Category />
            <Popular />
            <Galleries />
            <Tags />
          </aside>
        </div>
      </div>
    );
  }
}

export default index;
