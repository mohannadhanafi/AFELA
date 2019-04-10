import React from 'react';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import ChartCard from './ChartCard';

export const citiesData = [
  { name: 'Page A', cities: 200 },
  { name: 'Page B', cities: 1200 },
  { name: 'Page C', cities: 600 },
  { name: 'Page D', cities: 1600 },
  { name: 'Page D', cities: 1000 },
  { name: 'Page H', cities: 2260 },
  { name: 'Page K', cities: 800 },
];

export const increamentRevenueData = [
  { name: 'Page A', revenue: 200 },
  { name: 'Page B', revenue: 1200 },
  { name: 'Page C', revenue: 600 },
  { name: 'Page D', revenue: 1600 },
  { name: 'Page D', revenue: 1000 },
  { name: 'Page H', revenue: 2260 },
  { name: 'Page K', revenue: 800 },
];
const TotalRevenueCard = ({ width, cards }) => (
  cards.map(card => (
    <Col xl={6} lg={12} md={12} sm={12} xs={24}>
      <ChartCard
        chartProperties={{
          title: card.title,
          prize: card.prize,
          icon: 'stats',
          bgColor: card.bgColor,
        }}
        children={(
          <ResponsiveContainer width="100%" height={75}>
            <AreaChart
              data={citiesData}
              margin={{
                top: 0, right: 0, left: 0, bottom: 0,
              }}
            >
              <Tooltip />
              <Area
                dataKey="cities"
                type="monotone"
                strokeWidth={0}
              />
            </AreaChart>
          </ResponsiveContainer>
  )}
      />
    </Col>
  ))
);


const mapStateToProps = ({ settings }) => {
  const { width } = settings;
  return { width };
};
export default connect(mapStateToProps)(TotalRevenueCard);
