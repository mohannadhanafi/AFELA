import React from 'react';
import Popular from '../../../common/Popular';
import Galleries from '../../../common/Galleries';
import Category from '../../../common/Category';
import Tags from '../../../common/Tags';
import Continer from './Continer';
import './style.css';

export default function index({ posts, total, changeData }) {
  return (
    <div className="container margin-content">
      <div className="row">
        <div className="col-md-8 content ">
          <Continer posts={posts} changeData={changeData} total={total} />
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
