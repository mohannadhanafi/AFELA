
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Col, Row } from 'antd';

import WelcomeCard from './Welcome';
import SiteAudience from './SiteAudience';
import SiteVisit from './SiteVisit';

const WelComeCard = ({ data, name }) => (
  <>
    <Col span={24}>
      <div className="gx-card">
        <div className="gx-card-body">
          <Row>
            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
              <WelcomeCard data={data} name={name} />
            </Col>

            <Col
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="gx-audi-col"
            >
              <SiteAudience data={data} />
            </Col>
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="gx-visit-col"
            >
              <SiteVisit data={data} />
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  </>
);

export default WelComeCard;
