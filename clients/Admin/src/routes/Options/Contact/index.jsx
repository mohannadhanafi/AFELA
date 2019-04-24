import React, { Component } from 'react';
import {
  Button, Card, Form, Input,
} from 'antd';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    contact: '',
    mobile: '',
    email: '',
    address:'',
  };

  componentDidMount = async () => {
    const res = await axios.get('/api/v1/getoptions');
    const { data } = res;

    const { contact, mobile, email ,address} = data[0];
    this.setState({ contact, mobile, email ,address});
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
              history.push('/admin/options/contact');
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
    const { contact, mobile, email, address } = this.state;
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
      <Card className="gx-card" title="Contact Us">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Contact</span>}>
            {getFieldDecorator('contact', {
              initialValue: contact,
              rules: [
                {
                  max: 500,
                  message: 'Max Contact is 500',
                  whitespace: true,
                },
                {
                  required: true,
                  message: 'Please Enter Contact',
                  whitespace: true,
                },
              ],
            })(
              <Input.TextArea
                placeholder="Enter a Contact "
                autosize={{ minRows: 2, maxRows: 6 }}
              />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
              initialValue: email,
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Mobile</span>}>
            {getFieldDecorator('mobile', {
              initialValue: mobile,
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Address</span>}>
            {getFieldDecorator('address', {
              initialValue: address,
            })(<Input />)}
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
