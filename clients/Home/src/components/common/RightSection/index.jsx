/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Heading from '../Heading';
import RightFirst from './RightFirst';
import RightSecond from './RightSecond';
import RightThird from './RightThird';
import RightAdv from './RightAdv';
import RightPopular from './RightPopular';
import './style.css';
import { getRelated } from '../../../appRedux/actions';

class RightSection extends React.Component {
  state={
    social: [],
  }

  componentWillMount() {
    this.props.getRelated();
  }
  

  render() {
    const {
      video,
      heading1,
      heading2,
      heading3,
      heading4,
      heading5,
      adv,
    } = this.props.data;
    const {social} = this.props;
    const { relatedPosts } = this.props;
    return (
      <div className="right-section">
        <Heading desc={heading1} />
        <RightFirst social={social && social} />
         <Heading desc={heading2} />
        <RightSecond video={video} />
        <Heading desc={heading3} />
        <div className="popular--posts">
          {relatedPosts && relatedPosts.map(post => (
            <RightThird key={uuid()} {...post} />
          ))}
        </div>
        <Heading desc={heading4} />
        <RightAdv image={adv} />
        <Heading desc={heading5} />
        <div className="popular--posts">
          {relatedPosts && relatedPosts.map(post => (
            <RightPopular key={uuid()} {...post} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ related }) => {
  const {
    relatedPosts,
  } = related;
  return {
    relatedPosts,
  };
};
const Right = connect(mapStateToProps, { getRelated })(RightSection);
export default Right;
