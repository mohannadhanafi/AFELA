/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import CoypRights from '../../common/CopyRights';
import Loading from '../../common/Loading';

import CategotyContainer from './Container';
import './style.css';

export default class index extends Component {
    state = { news: '', loading: false }


    componentDidMount() {
      const { match: { params: { seoName } } } = this.props;
      this.setState({ loading: true });
      const intervalId = setInterval(this.switchLoading(), 1000);
      setTimeout(() => {
        this.setState({ loading: false }, () => {
          clearInterval(intervalId);
        });
      }, 1000);
      this.getData(seoName);
    }

    componentWillUpdate(prevProps) {
      const { match: { params: { seoName: newSeoName } } } = prevProps;
      const { match: { params: { seoName } } } = this.props;
      if (newSeoName !== seoName) {
        this.getData(newSeoName);
      }
    }

    getData = (seoName) => {
      this.switchLoading();
      const intervalId = setInterval(this.switchLoading(), 1000);
      setTimeout(() => {
        this.setState({ loading: false }, () => {
          clearInterval(intervalId);
        });
      }, 1000);
      const seo_name = seoName;
      axios.get(`/api/v1/CatWithPosts/${seo_name}`, {
        params: {
          limit: 10,
          offset: 0,
        },
      })
        .then((result) => {
          const { data } = result;

          this.setState(() => ({
            data,
          }));
        })
        .catch((error) => {
          const { response: { status } } = error;
          if (status === 404) {
            this.props.history.push('/error');
          }
        });
    }

    switchLoading = () => {
      this.setState({ loading: !this.state.loading });
    }

    render() {
      const { data, loading } = this.state;
      return (
        <React.Fragment>
          {loading ? <Loading /> : null}
          <Header />
          <CategotyContainer switchLoading={this.switchLoading} loading={loading} news={data || ''} />
          <Footer />
          <CoypRights />
        </React.Fragment>
      );
    }
}
