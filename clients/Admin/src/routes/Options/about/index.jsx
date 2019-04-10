/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
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
  Button,
  Card,
  Form,
  Input,
} from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    about_title: '',
    about_desc: '',
    about_story: '',
    about_story_desc: '',
  };


componentDidMount = async () => {
  const res = await axios.get('/api/v1/getoptions');
  const { data } = res;
  const {
    about_title, about_desc, about_story, about_story_desc,
  } = data[0];
  this.setState({
    about_title, about_desc, about_story, about_story_desc,
  });
}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios.post('/api/v1/option', values).then((result) => {
          const {
            data: { message },
            statusText,
          } = result;
          if (result.status === 200) {
            NotificationManager.success(message, 'SUCCESS', 2000);
            setTimeout(() => {
              this.props.history.push('/admin/options/about');
            }, 3000);
          } else {
            NotificationManager.error(message || statusText, 'ERROR', 2000);
          }
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      about_title,
      about_desc,
      about_story,
      about_story_desc,
    } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Card className="gx-card" title="About Us">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Title</span>}>
            {getFieldDecorator('about_title', { initialValue: about_title, rules: [{ max: 40, message: 'Only 40 Letter is allowed here' }] })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>description</span>}>
            {getFieldDecorator('about_desc', { initialValue: about_desc })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Story Title</span>}>
            {getFieldDecorator('about_story', { initialValue: about_story, rules: [{ max: 40, message: 'Only 40 Letter is allowed here' }] })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Story description</span>}>
            {getFieldDecorator('about_story_desc', { initialValue: about_story_desc })(<Input />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </FormItem>
        </Form>
        <NotificationContainer />
      </Card>
    );
  }
}

const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;
