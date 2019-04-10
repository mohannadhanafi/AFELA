import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../common/Header';
import Breadcrumb from '../../common/breadcrumb';
import Body from './Body';
import Footer from '../../common/Footer';
import CopyRights from '../../common/CopyRights';
import Loading from '../../common/Loading';

export default class index extends Component {
    state = {
      statistics: [
      ],
      background: 'https://blogs.forbes.com/glennllopis/files/2018/02/shutterstock_1253381451.jpg',
      loading: false,
    }


    componentWillMount() {
      this.setState({ loading: true });
      const intervalId = setInterval(this.switchLoading(), 1000);
      setTimeout(() => {
        this.setState({ loading: false }, () => {
          clearInterval(intervalId);
        });
      }, 2000);
      axios.get('/api/v1/frontCount').then((result) => {
        const { data: { result: countResult } } = result;
        this.setState(() => ({ statistics: countResult }));
      });
    }

    switchLoading = () => {
      this.setState({ loading: !this.state.loading });
    }


    render() {
      const {
        statistics, background, loading,
      } = this.state;
      return (
        <>
          {loading ? <Loading /> : null}
          <Header />
          <div className="container">
            <Breadcrumb data="About us" />
          </div>
          <Body
            statistics={statistics}
            background={background}
          />
          <Footer />
          <CopyRights />
        </>
      );
    }
}
