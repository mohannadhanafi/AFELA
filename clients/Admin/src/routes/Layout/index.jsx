import React, { Component } from 'react';
import { Tabs } from 'antd';
import HomePage from './HomePage';

const { TabPane } = Tabs;

export default class index extends Component {
    state = {}

    render() {
      return (
        <Tabs defaultActiveKey="1">
          <TabPane tab="Home Page" key="1" style={{ color: 'red' }}>
            <HomePage />
          </TabPane>
          <TabPane tab="Category Page" key="2">
            <HomePage />
          </TabPane>
        </Tabs>
      );
    }
}
