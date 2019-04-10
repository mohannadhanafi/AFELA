import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../../common/Header';
import HeroSection from './HeroSection';
import ThirdSection from './ThirdSection';
import SecondSection from './SecondSection';
import Footer from '../../common/Footer';
import CopyRights from '../../common/CopyRights';
import Loading from '../../common/Loading';
import { setPageAds } from '../../../appRedux/actions/ads';
import { getHomeLayout } from '../../../appRedux/actions/layout';

class HomePage extends Component {
  state = { loading: false };

  componentWillMount() {
    this.setState({ loading: true });
    const intervalId = setInterval(this.switchLoading(), 1000);
    setTimeout(() => {
      this.setState({ loading: false }, () => {
        clearInterval(intervalId);
      });
    }, 3000);

    this.props.getHomeLayout();
  }

  switchLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    const { loading } = this.state;
    const { homeLayout } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <HeroSection />
            <SecondSection />
            <ThirdSection />
            <Footer />
            <CopyRights />
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ layout }) => {
  const { homeLayout } = layout;
  return { homeLayout };
};
export default connect(
  mapStateToProps,
  { setPageAds, getHomeLayout },
)(HomePage);
