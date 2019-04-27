/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Col, Row, Card, Button, Form, Select, Spin, Popconfirm, Modal, Radio,

} from 'antd';
import './style.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
export default class Modall extends Component {
  render() {
    const { visible, handleCancel } = this.props;
    return (
      <Modal
        visible={visible}
        title="Layouts List"
        onOk={this.handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>

            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>

            Submit
          </Button>,
        ]}
      >
        <div>
          <RadioGroup
            onChange={this.radioChange}
            className="layouts-group"
            // defaultValue={`${layout}`}
          >
            <RadioButton value="1" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/first.JPG')}
              />
              {' '}
              <p className="img__description">Click To Choose</p>
            </RadioButton>
            <RadioButton value="2" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/second.JPG')}
              />
              {' '}
              <p className="img__description">Horizontal Slider</p>
            </RadioButton>
            <RadioButton value="3" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/third.JPG')}
              />
              {' '}
              <p className="img__description">Click To Choose</p>
            </RadioButton>
            <RadioButton value="4" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/fourth.JPG')}
              />
              {' '}
              <p className="img__description">Click To Choose</p>
            </RadioButton>
            <RadioButton value="5" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/fifth.JPG')}
              />
              {' '}
              <p className="img__description">Slider</p>
            </RadioButton>
            <RadioButton value="6" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/sixth.JPG')}
              />
              {' '}
              <p className="img__description">Click To Choose</p>
            </RadioButton>
            <RadioButton value="6" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/seventh.jpg')}
              />
              {' '}
              <p className="img__description">Click To Choose</p>
            </RadioButton>
            <RadioButton value="6" className="image__wrap">
              <img
                className="layout-image"
                alt=""
                src={require('./layouts/eighth.jpg')}
              />
              {' '}
              <p className="img__description">Click To Choose</p>
            </RadioButton>
          </RadioGroup>
        </div>
      </Modal>
    );
  }
}
