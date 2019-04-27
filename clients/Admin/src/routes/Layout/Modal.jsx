/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-constant-condition */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  Col, Row, Card, Button, Form, Select, Spin, Popconfirm, Modal, Radio,

} from 'antd';
import './style.css';
import axios from 'axios';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Option } = Select;

const FormItem = Form.Item;

class Modall extends Component {
  state ={
    categories: [], type: '', threeCats: [], catName: '',
  }

  componentDidMount() {
    axios.get('/api/v1/categories/getAll').then((result) => {
      const { data } = result;
      this.setState(() => ({ categories: data }));
    });
  }

  handleChange = (value) => {
    this.setState(() => ({ type: value }));
  }

  setCatName = (value) => {
    this.setState(() => ({ catName: value }));
  }

  threeCats = (threeCats) => {
    this.setState(() => ({ threeCats }));
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible, handleCancel } = this.props;
    const { categories, type, threeCats } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        visible={visible}
        title="Layouts List"
        onOk={this.handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>

            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>

            Submit
          </Button>,
        ]}
      >


        <FormItem {...formItemLayout} label={<span>Type</span>}>
          {getFieldDecorator('Hero')(
            <Select defaultValue="category" style={{ width: '100%' }} onChange={this.handleChange}>
              <Option value="category">Specific Category</Option>
              <Option value="three">Three Columns</Option>
            </Select>,
          )}
        </FormItem>
        {type === 'category' ? (
          <div>
            <FormItem {...formItemLayout} label="Cat. Name">
              {getFieldDecorator('catName')(
                <Select defaultValue="category" style={{ width: '100%' }} onChange={this.setCatName}>
                  {categories.map(category => (
                    <Option value={category.seo}>{category.name}</Option>
                  ))}
                </Select>,
              )}
            </FormItem>
            <RadioGroup
              onChange={this.radioChange}
              className="layouts-group"
          >
              <RadioButton value="1" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/1.JPG')}
              />
                {' '}
                <p className="img__description">Click To Choose</p>
              </RadioButton>
              <RadioButton value="2" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/2.JPG')}
              />
                {' '}
                <p className="img__description">Horizontal Slider</p>
              </RadioButton>
              <RadioButton value="3" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/3.JPG')}
              />
                {' '}
                <p className="img__description">Click To Choose</p>
              </RadioButton>
              <RadioButton value="4" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/4.JPG')}
              />
                {' '}
                <p className="img__description">Click To Choose</p>
              </RadioButton>
              <RadioButton value="5" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/5.JPG')}
              />
                {' '}
                <p className="img__description">Slider</p>
              </RadioButton>
              <RadioButton value="6" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/6.JPG')}
              />
                {' '}
                <p className="img__description">Click To Choose</p>
              </RadioButton>
              <RadioButton value="6" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/4.JPG')}
              />
                {' '}
                <p className="img__description">Click To Choose</p>
              </RadioButton>
              <RadioButton value="6" className="image__wrap">
                <img
                  className="layout-image"
                  alt=""
                  src={require('./layouts/4.JPG')}
              />
                {' '}
                <p className="img__description">Click To Choose</p>
              </RadioButton>
            </RadioGroup>
          </div>
        )
          : null}
        {type === 'three' ? (
          <>
            <FormItem {...formItemLayout} label="First Cat">
              {getFieldDecorator('first')(
                <Select
                  style={{ width: '100%' }}
                  placeholder="First Category"
                >
                  {categories.map(category => (
                    <Option value={category.seo}>{category.name}</Option>
                  ))}
                </Select>,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Second Cat">
              {getFieldDecorator('second')(
                <Select
                  style={{ width: '100%' }}
                  placeholder="Second Category"
                        >
                  {categories.map(category => (
                    <Option value={category.seo}>{category.name}</Option>
                  ))}
                </Select>,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Third Cat">
              {getFieldDecorator('third')(
                <Select
                  style={{ width: '100%' }}
                  placeholder="Third Category"
                                >
                  {categories.map(category => (
                    <Option value={category.seo}>{category.name}</Option>
                  ))}
                </Select>,
              )}
              <img
                className="layout-image-threeC"
                alt=""
                src={require('./layouts/threeC.jpg')}
              />
            </FormItem>
          </>
        ) : null}

      </Modal>
    );
  }
}
const FormModal = Form.create()(Modall);
export default FormModal;
