import React from 'react';

import Widget from './Wiget';

class ChartCard extends React.Component {
  state = {
    isHide: false,
    children: '',
    chartProperties: {
      prize: '',
      title: '',
      bgColor: '',
      styleName: '',
      desc: '',
      percent: '',
    },
  }


  componentDidMount() {
    this.setState(previousState => ({
      chartProperties: this.props.chartProperties,
      children: this.props.children,
    }));
  }

  handleToggle() {
    this.setState(previousState => ({
      isHide: !previousState.isHide,
    }));
  }

  render() {
    const { chartProperties, isHide, children } = this.state;
    const {
      prize, title, styleName, desc, bgColor, percent,
    } = chartProperties;
    return (
      <Widget styleName="gx-card-full">
        <div
          className={isHide === true ? `gx-fillchart gx-bg-${bgColor} gx-fillchart-nocontent` : `gx-fillchart gx-bg-${bgColor} gx-overlay-fillchart`}
        >
          {children}
          <div className="gx-fillchart-content">
            <div className="ant-card-head-title gx-mb-3">{title}</div>
            <h2 className="gx-mb-2 gx-fs-xxxl gx-font-weight-medium">{prize}</h2>
            {percent > 0}
            <p className="gx-mb-0 gx-fs-sm">
              <span
                className={`gx-font-weight-medium gx-fs-md gx-chart-${styleName}`}
              >
                {percent}
                {percent > 0 ? <i className="icon icon-menu-up gx-fs-sm" /> : null}

              </span>

            </p>
          </div>
        </div>
      </Widget>
    );
  }
}

export default ChartCard;
