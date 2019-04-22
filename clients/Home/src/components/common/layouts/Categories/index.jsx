import React, { Component } from 'react';
import axios from 'axios';
import Category1 from './Category1';
import Category2 from './Category2';
import Category3 from './Category3';
import './style.css';

export default class index extends Component {
    state = {
      title: '',
      news: '',
    }

    componentDidMount() {
      const { seo } = this.props;
      axios(`/api/v1/CatWithPosts/${seo}`).then((result) => {
        const { data: { catName: title, result: { rows } } } = result;
        this.setState(() => ({ title, news: rows }));
      });
    }

    render() {
      const { title, news } = this.state;
      return (
        <section className="section-wrap relative pb-0 pt-0 categories">
          <div className="row">
            <Category1
              title={title}
              news={news}
            />
            <Category2
              title={title}
              news={news}
            />
            <Category3
              title={title}
              news={news}
            />
          </div>
        </section>
      );
    }
}
