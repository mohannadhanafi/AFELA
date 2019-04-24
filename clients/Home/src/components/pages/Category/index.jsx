import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

class index extends Component {
  state = {
    background:
      'http://deothemes.com/envato/afela/html/img/blog/blog_title_bg.jpg',
    posts: [],
  };


  componentDidMount() {
    this.getData(this.props);
  }

  closeLoading = () => {
    $(document).ready(() => {
      (function ($) {
        $('.loader')
          .delay(1000)
          .fadeOut();
        $('.loader-mask')
          .delay(1500)
          .fadeOut('slow');
        $(window).trigger('resize');
      }(window.jQuery));
    });
  }

  componentWillReceiveProps(props) {
    this.getData(props);
  }

runLoading = () => {
  $(document).ready(() => {
    (function ($) {
      $('.loader').show();
      $('.loader-mask').show();
    }(window.jQuery));
  });
}

  getData = (props) => {
    this.runLoading();
    this.closeLoading();
    window.scrollTo(0, 0);

    const {
      history: {
        location: { pathname },
      },
    } = props;
    const seo = pathname.split('/')[2];
    axios
      .get(`/api/v1/CatWithPosts/${seo}`, {
        params: {
          limit: 5,
          offset: 0,
        },
      })
      .then((results) => {
        const { data } = results;
        const { result, catName } = data;
        const { rows, count } = result;
        this.setState({ posts: rows, catName, total: count });
      })
      .catch((error) => {});
  };


  changeData = (current) => {
    const { history: { location: { pathname } } } = this.props;
    const seo = pathname.split('/')[2];
    axios(
      `/api/v1/CatWithPosts/${seo}`, {
        params: {
          limit: 5,
          offset: current - 1,
        },
      },
    ).then((result) => {
      const {
        data: {
          result: { rows },
        },
      } = result;

      this.setState(() => ({ posts: rows }), () => window.scrollTo(0, 0));
    });
  };


  render() {
    const { background, posts, total } = this.state;
    return (
      <>
        <div className="loader-mask">
          <div className="loader">Loading...</div>
        </div>
        <TopSection background={background} posts={posts} />
        <BottomSection posts={posts} changeData={current => this.changeData(current)} total={total} />
      </>
    );
  }
}

export default withRouter(index);
