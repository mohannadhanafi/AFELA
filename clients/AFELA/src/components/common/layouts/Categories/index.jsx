import React, { Component } from 'react';
import Category1 from './Category1';
import Category2 from './Category2';
import Category3 from './Category3';
import './style.css';

export default class index extends Component {
    state = {}

    render() {
      return (
        <section className="section-wrap relative pb-0 pt-0 categories">
          <div className="row">
            <Category1 />
            <Category2 />
            <Category3 />
          </div>
        </section>
      );
    }
}
