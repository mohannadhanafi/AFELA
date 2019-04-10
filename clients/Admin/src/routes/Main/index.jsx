/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Spin } from 'antd';
import Auxiliary from '../../util/Auxiliary';
import Top from './Top';
import UsersData from './Users';
import PostsData from './Posts';
import CircularProgress from '../../components/CircularProgress';
import TotalCard from './TotalCards';

class Listing extends Component {
  state = { lodaing: true };

  componentDidMount = () => {
    axios.get('/api/v1/getCounts').then((result) => {
      const { data } = result;
      axios('/api/v1/getName').then((nameRes) => {
        const { data: dataName } = nameRes;
        const { name } = dataName[0];
        this.setState({ data, name });
      });
    });
    setTimeout(() => {
      this.setState(() => ({ lodaing: false }));
    }, 500);
  };


  render() {
    const { data, name } = this.state;
    return (
      this.state.lodaing ? <CircularProgress className="gx-loader-400" /> : (
        <Auxiliary>
          <Row>
            { data ? <Top data={data} name={name} /> : null }
          </Row>
          <Row>
            { data ? <TotalCard cards={data.result} name={name} /> : null }
          </Row>
          <Row>
            <Col xl={15} lg={24} md={24} sm={24} xs={24}>
              <PostsData />
            </Col>
            <Col xl={9} lg={24} md={24} sm={24} xs={24}>
              <UsersData />
            </Col>
          </Row>
        </Auxiliary>
      )
    );
  }
}
export default Listing;
