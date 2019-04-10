/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-children-prop */
import {
  Select, Card, Form, Button, Row, Col, Icon, Spin,
} from 'antd';
import React from 'react';
import axios from 'axios';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';

const { Option } = Select;
const FormItem = Form.Item;

class SendPost extends React.Component {
  state = { size: 'default', loading: false };

  componentWillMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({ postId: id });
    axios.get('/api/v1/newsletter').then((result) => {
      const { data } = result;
      this.setState({ mailList: data });
    });
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  sendToAll = () => {
    const { postId } = this.state;
    this.setState({ loading: true }, () => {
      axios.post('/api/v1/sendPostToEmails', { postId }).then((result) => {
        const {
          data: { message },
        } = result;
        this.setState(() => ({ loading: false }), () => {
          NotificationManager.success(message, 'SUCCESS', 2000);
        });
      }).catch((error) => {
        this.setState({ loading: false }, () => {
          const {
            data: { message: errorMessage },
            statusText: statusMessage,
          } = error.response;
          NotificationManager.error(errorMessage || statusMessage, 'ERROR', 2000);
        });
      });
    });
  }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          const { list } = values;
          if (list && list.length) {
            this.setState({ loading: true }, () => {
              const { postId } = this.state;
              axios.post('/api/v1/sendPostToEmails', { list, postId }).then((result) => {
                const {
                  data: { message },
                } = result;
                this.setState(() => ({ loading: false }), () => {
                  NotificationManager.success(message, 'SUCCESS', 2000);
                });
              }).catch((error) => {
                const {
                  data: { message: errorMessage },
                  statusText: statusMessage,
                } = error.response;
                NotificationManager.error(errorMessage || statusMessage, 'ERROR', 2000);
              });
            });
          } else {
            NotificationManager.error('Please Choose at least one email', 'error', 2000);
          }
        }
      });
    }

    render() {
      const { size, mailList, loading } = this.state;

      const { getFieldDecorator } = this.props.form;
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
        <Card title="Send Post to Mail List">
          <Spin spinning={loading}>

            <Form onSubmit={this.handleSubmit}>

              <FormItem {...formItemLayout} label={<span>Mail List</span>}>
                {getFieldDecorator('list', {
                })(

                  <Select
                    mode="multiple"
                    size={size}
                    placeholder="Please select from the list"
                    onChange={this.handleChange}
                    style={{ width: '100%' }}
                  >
                    {mailList ? mailList.map(mail => <Option key={mail.email}>{mail.email}</Option>) : null}
                  </Select>,

                )}
              </FormItem>
              <Row>
                <div style={{ marginRight: '17px' }}>
                  <Button onClick={this.sendToAll}>
              Send To All
                  </Button>
                  <Button type="primary" htmlType="submit">Send To Selected</Button>
                </div>

              </Row>
            </Form>
            <NotificationContainer />
          </Spin>
        </Card>
      );
    }
}
const SendPostForm = Form.create()(SendPost);
export default SendPostForm;
