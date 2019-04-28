/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Card, Button, Radio,
} from 'antd';
import './style.css';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { withRouter } from 'react-router-dom';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class DragNDrop extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('/api/v1/getoptions').then((result) => {
      const { data } = result;
      const { category_layout } = data[0];
      this.setState(() => ({ category_layout, loading: false }));
    });
  }


  handleSave = () => {
    const { category_layout } = this.state;
    axios.post('/api/v1/option', { category_layout }).then((result) => {
      const {
        data: { message },
        statusText,
      } = result;
      if (result.status === 200) {
        NotificationManager.success(message, 'SUCCESS', 2000);
      } else {
        NotificationManager.error(message || statusText, 'ERROR', 2000);
      }
    });
  };


  radioChange = (e) => {
    this.setState({
      category_layout: e.target.value,
    });
  };

  render() {
    const {
      loading,
      category_layout,
    } = this.state;
    return (
      <>
        <Card loading={loading}>
          {category_layout ? (
            <div className="gx-main-content gx-mb-4">
              <RadioGroup
                onChange={this.radioChange}
                className="layouts-group"
                defaultValue={category_layout}
              >
                <RadioButton value="1" className="image__wrap">
                  <img
                    className="layout-image"
                    alt="category"
                    src={require('./layouts/cat2.jpg')}
                  />
                  {' '}
                  <p className="img__description">Click To Choose</p>
                </RadioButton>
                <RadioButton value="2" className="image__wrap">
                  <img
                    className="layout-image"
                    alt="category"
                    src={require('./layouts/cat1.jpg')}
                  />
                  {' '}
                  <p className="img__description">Click To Choose</p>
                </RadioButton>
              </RadioGroup>
            </div>
          ) : null}
          <Button type="primary" className="layout-button" onClick={this.handleSave} style={{ float: 'right' }}>SAVE</Button>
          <NotificationContainer />
        </Card>
      </>
    );
  }
}

export default withRouter(DragNDrop);
