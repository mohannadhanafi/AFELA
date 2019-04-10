import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FirstNav from './FirstNav';
import SecondNav from './SecondNav';
import ThirdNav from './ThirdNav';

class Header extends Component {
  state = {};

componentDidMount = () => {
  window.scrollTo(0, 0);
}

render() {
  return (
    <Fragment>
      <FirstNav />
      <SecondNav />
      <ThirdNav />
    </Fragment>
  );
}
}

const mapStateToProps = ({ ads }) => {
  const { pageName } = ads;
  return { pageName };
};

export default connect(mapStateToProps)(Header);
