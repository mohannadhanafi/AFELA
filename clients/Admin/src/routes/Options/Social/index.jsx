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
    confirmDirty: false,
    autoCompleteResult: [],
    fileList: [],
    previewVisible: false,
    previewImage: '',
    categories: [],
    fileName: '',
    facebook: '',
    twitter: '',
    whats: '',
    google: '',
    copyrights: '',
    logo: '',
  };

  handleCancel = () => this.setState({ previewVisible: false });

componentDidMount = async () => {
  const res = await axios.get('/api/v1/getoptions');
  const { data } = res;
  const {
    facebook, twitter, whats, google, copyrights, logo,
  } = data[0];
  this.setState({
    facebook, twitter, copyrights, logo, whats, google,
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
              this.props.history.push('/admin/options/social');
            }, 3000);
          } else {
            NotificationManager.error(message || statusText, 'ERROR', 2000);
          }
        }).catch((error) => {
          this.setState({ loading: false }, () => {
            const {
              data: { message: errorMessage },
              statusText: statusMessage,
            } = error.response;
            NotificationManager.error(errorMessage || statusMessage, 'ERROR', 2000);
          });
        });
      }
    });
  };


  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  removeFile = async (file) => {
    if ((file.status = 'removed')) {
      const {
        response: { fullName: pic },
      } = file;
      await axios.post('/api/v1/removeFile', { pic }).then(() => {
        this.setState({ fileName: '' });
      });
    }
  };

  handleChange = ({ file, fileList }) => {
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJPG && !isPNG) {
      NotificationManager.error('You can only upload image files!', 'ERROR', 2000);
    } else if (!isLt2M) {
      NotificationManager.error('Image must smaller than 2MB!', 'ERROR', 2000);
    } else {
      this.setState({ fileList });
      const { status } = file;
      if (status === 'done') {
        const {
          response: { fullName },
        } = file;
        this.setState({ fileName: fullName });
      }
    }
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      facebook, twitter, whats, google,
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
      <Card className="gx-card" title="Social Media">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Facebook</span>}>
            {getFieldDecorator('facebook', { initialValue: facebook })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>twitter</span>}>
            {getFieldDecorator('twitter', { initialValue: twitter })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>whatsapp</span>}>
            {getFieldDecorator('whats', {
              initialValue: whats,
              rules: [
                {
                  max: 20,
                  message: 'The input is not valid Mobile',
                },
              ],
            })(<Input type="number" />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>google</span>}>
            {getFieldDecorator('google', { initialValue: google })(<Input />)}
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
