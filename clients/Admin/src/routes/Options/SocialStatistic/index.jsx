/* eslint-disable camelcase */
import React, { Component } from 'react';
import {
  Button, Card, Form, Input,
} from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    facebook_number: '',
    twitter_number: '',
    instagram_number: '',
    sound_number: '',
    snap_number: '',
    youtub_number: '',
  };

  componentDidMount = async () => {
    const res = await axios.get('/api/v1/getoptions');
    const { data } = res;

    const {
      facebook_number,
      twitter_number,
      instagram_number,
      sound_number,
      snap_number,
      youtub_number,
    } = data[0];

    this.setState({
      facebook_number,
      twitter_number,
      instagram_number,
      sound_number,
      snap_number,
      youtub_number,
    });
  };

  handleSubmit = (e) => {
    const { form, history } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios.post('/api/v1/option', values).then((result) => {
          const {
            data: { message },
            statusText,
          } = result;
          if (result.status === 200) {
            NotificationManager.success(message, 'SUCCESS', 2000);
            setTimeout(() => {
              history.push('/admin/options/social_statistic');
            }, 3000);
          } else {
            NotificationManager.error(message || statusText, 'ERROR', 2000);
          }
        });
      }
    });
  };

  render() {
    const { form } = this.props;
    const {
      facebook_number,
      twitter_number,
      instagram_number,
      sound_number,
      snap_number,
      youtub_number,
    } = this.state;
    const { getFieldDecorator } = form;
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
      <Card className="gx-card" title="Social Statistic">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Facebook Number</span>}>
            {getFieldDecorator('facebook_number', {
              initialValue: facebook_number,
              rules: [
              
                { max: 8, message: 'Only 8 Digite is allowed here' },
                {
                  required: true,
                  message: 'Please Enter Digite',
                  whitespace: true,
                },
              ],
            })(<Input />)}
          </FormItem>


          <FormItem {...formItemLayout} label={<span>Twitter Number</span>}>
            {getFieldDecorator('twitter_number', {
              initialValue: twitter_number,
              rules: [{ max: 8, message: 'Only 8 Digite is allowed here' }, {
                required: true,
                message: 'Please Enter Digite',
                whitespace: true,
              }],
            })(<Input type="number" />)}
          </FormItem>

          <FormItem {...formItemLayout} label={<span>Instagram Number</span>}>
            {getFieldDecorator('instagram_number', {
              initialValue: instagram_number,
              rules: [{ max: 8, message: 'Only 8 Digite is allowed here' }, {
                required: true,
                message: 'Please Enter Contact',
                whitespace: true,
              }],
            })(<Input />)}
          </FormItem>

          <FormItem {...formItemLayout} label={<span>SoundCloud Number</span>}>
            {getFieldDecorator('sound_number', {
              initialValue: sound_number,
              rules: [{ max: 8, message: 'Only 8 Digite is allowed here' }, {
                required: true,
                message: 'Please Enter Digite',
                whitespace: true,
              }],
            })(<Input type="number" />)}
          </FormItem>

          <FormItem {...formItemLayout} label={<span>Snapchat Number</span>}>
            {getFieldDecorator('snap_number', {
              initialValue: snap_number,
              rules: [{ max: 8, message: 'Only 8 Digite is allowed here' }, {
                required: true,
                message: 'Please Enter Digite',
                whitespace: true,
              }],
            })(<Input type="number" />)}
          </FormItem>

          <FormItem {...formItemLayout} label={<span>YouTube Number</span>}>
            {getFieldDecorator('youtub_number', {
              initialValue: youtub_number,
              rules: [{ max: 8, message: 'Only 8 Digite is allowed here' }, {
                required: true,
                message: 'Please Enter Digite',
                whitespace: true,
              }],
            })(<Input type="number" />)}
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
