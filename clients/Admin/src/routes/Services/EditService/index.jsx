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
import MaterialUiIconPicker from 'react-material-ui-icon-picker';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    title: '',
    desc: '',
    icon: '',
  };


componentDidMount = async () => {
  const {
    match: {
      params: { id },
    },
  } = this.props;
  const result = await axios(`/api/v1/service/${id}`);
  const { data } = result;
  const { title, desc, icon } = data[0];
  this.setState({ title, desc, icon });
}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {
          match: {
            params: { id },
          },
        } = this.props;
        const { icon } = this.state;
        values.icon = icon;
        axios.post('/api/v1/services/update', {
          data: values,
          params: { id },
        }).then((result) => {
          const {
            data: { message },
            statusText,
            status,
          } = result;
          if (status === 200) {
            this.setState({ loading: false }, () => {
              NotificationManager.success(message, 'SUCCESS', 2000);
              setTimeout(() => {
                this.props.history.push('/admin/services/viewServices');
              }, 3000);
            });
          } else {
            this.setState({ loading: false }, () => {
              NotificationManager.error(message || statusText, 'ERROR', 2000);
            });
          }
        }).catch((error) => {
          this.setState({ loading: false }, () => {
            const {
              data: { message },
              statusText,
            } = error.response;
            NotificationManager.error(message || statusText, 'ERRRO', 2000);
          });
        });
      }
    });
  };

  showPickedIcon = (icon) => {
    const { name } = icon;
    this.setState({ icon: name });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { title, desc, icon } = this.state;
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
      <Card className="gx-card" title="Services">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Icon</span>}>
            {getFieldDecorator('icon')(
              <>
                <MaterialUiIconPicker onPick={this.showPickedIcon} />
                {icon !== ''
                && <i className="material-icons md special--icon">{icon}</i>
              }
              </>,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Title</span>}>
            {getFieldDecorator('title', {
              initialValue: title || null,
              rules: [
                {
                  max: 20,
                  message: 'Max is 20 letter',

                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>description</span>}>
            {getFieldDecorator('desc', {
              initialValue: desc || null,
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
