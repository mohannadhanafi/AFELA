/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal';
import TopSection from './TopSection';
import './style.css';
import BottomSection from './BottomSection';

class CategoryContainer extends Component {
  state = {};


  static getDerivedStateFromProps(nextProps) {
    const { news } = nextProps;
    return { news };
  }

  render() {
    const { news } = this.state;
    return news ? (
      <div className="category">
        <Fade bottom>
          <div className="container">
            <TopSection data={news || null} />
            <BottomSection data={news} />
          </div>
        </Fade>
      </div>
    ) : null;
  }
}

export default withRouter(CategoryContainer);
