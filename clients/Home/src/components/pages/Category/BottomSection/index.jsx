import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import Popular from '../../../common/Popular';
import Galleries from '../../../common/Galleries';
import Category from '../../../common/Category';
import Tags from '../../../common/Tags';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';


import './style.css';

class index extends Component {
  state={}

  setLayout = () => {
    const { posts, total, changeData, options } = this.props;
    if (options.length) {
      const {category_layout} = options[0];
          switch (category_layout) {
            case '1':
              return <LayoutOne posts={posts} changeData={changeData} total={total} />;
            case '2':
              return <LayoutTwo posts={posts} changeData={changeData} total={total} />;
            default:
              return null;
          }
    }
  };

  render() {
    return (
      <div className="container margin-content">
        <div className="row">
          <div className="col-md-8 post-content mb-50 ">
            { this.setLayout()}

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

const mapStateToProps = ({ options }) => options;
export default connect(mapStateToProps, null)(index);