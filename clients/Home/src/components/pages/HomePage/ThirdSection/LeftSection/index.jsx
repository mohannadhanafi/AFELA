/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import LeftFirst from './LeftFirst';
import LeftSecond from './LeftSecond';
import LeftThird from './LeftThird';
import LeftFourth from './LeftFourth';
import LeftFifth from './LeftFifth';
import LeftSixth from './LeftSixth';

import './style.css';

class LeftSection extends React.Component {
  state = { homeLayout: [] };

  componentWillMount() {
    const { homeLayout } = this.props;
    this.setState(() => ({ homeLayout }));
  }

  setLayout = (layouts, position) => {
    const category = layouts.find(
      categoryElement => categoryElement.position === position,
    );

    if (category) {
      const { layout_name } = category;
      switch (layout_name) {
        case '1':
          return <LeftFirst sectionSeoName={category.category.seo} />;
        case '2':
          return <LeftSecond sectionSeoName={category.category.seo} />;
        case '3':
          return <LeftThird sectionSeoName={category.category.seo} />;
        case '4':
          return <LeftFourth sectionSeoName={category.category.seo} />;
        case '5':
          return <LeftFifth sectionSeoName={category.category.seo} />;
        case '6':
          return <LeftSixth sectionSeoName={category.category.seo} />;
        default:
          return null;
      }
    } return null;
  };

  render() {
    const { homeLayout } = this.state;
    return (
      <div className="left-section">
        {this.setLayout(homeLayout, 1)}
        {this.setLayout(homeLayout, 2)}
        {this.setLayout(homeLayout, 3)}
        {this.setLayout(homeLayout, 4)}
        {this.setLayout(homeLayout, 5)}
        {this.setLayout(homeLayout, 6)}
      </div>
    );
  }
}

const mapStateToProps = ({ layout }) => {
  const { homeLayout } = layout;
  return { homeLayout };
};
export default connect(mapStateToProps)(LeftSection);
