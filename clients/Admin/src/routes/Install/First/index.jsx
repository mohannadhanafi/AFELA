import React, { Component } from 'react';
import './style.css';
import {
  AutoComplete,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Form,
  Icon,
  Input,
  Row,
  Select,
  Tooltip,
} from 'antd';
import { connect } from 'react-redux';
import { setInstall } from '../../../appRedux/actions/install';

const FormItem = Form.Item;
const { Option } = Select;
class Registration extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Promise.resolve(this.props.setInstall(values)).then(() => {
          this.props.next();
        });
      }
    });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`,
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { values } = this.props;
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

    return (
      <Card className="gx-card fisrt-step">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="NAME OF WEBSITE">
            {getFieldDecorator('name', {
              initialValue: values.name,
              rules: [
                {
                  required: true,
                  message: 'Please enter the name',
                },
              ],
            })(<Input id="name" />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>TYPE</span>}>
            {getFieldDecorator('type', {
              initialValue: values.type,
              rules: [
                {
                  required: true,
                  message: 'Please choose type',
                  whitespace: true,
                },
              ],
            })(
              <Select>
                <Option value="1">NEWS WEBSITE</Option>
                <Option value="2">INFORMATIVE WEBSITE</Option>
                <Option value="3">E-COMMERCE</Option>
              </Select>,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="GOAL OF USING CMS">
            {getFieldDecorator('goal', {
              initialValue: values.goal,

              rules: [
                {
                  required: true,
                  message: 'Please enter the GOAL',
                },
              ],
            })(<Input id="name" />)}
          </FormItem>
          <Button
            type="primary"
            htmlType="submit"
            style={{ float: 'right', marginRight: 2 }}
          >
            {' '}

            Next
{" "}
          </Button>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = ({ install }) => {
  const { values } = install;
  return { values };
};
const RegistrationForm = Form.create()(Registration);
export default connect(
  mapStateToProps,
  { setInstall },
)(RegistrationForm);
