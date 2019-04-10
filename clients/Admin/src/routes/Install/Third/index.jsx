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
import axios from 'axios';
import { setInstall } from '../../../appRedux/actions/install';

const FormItem = Form.Item;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

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
          const data = this.props.values;
          axios.post('/api/v1/install', data).then(result => {
            console.log(result);
            
          })
        })
      }
    });
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
          <FormItem {...formItemLayout} label={<span>Layout</span>}>
            {getFieldDecorator('layout', {
              initialValue: values.layout,
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
          <Button
            type="primary"
            htmlType="submit"
            style={{ float: 'right', marginRight: 2 }}
          >
            {' '}

            Next
{" "}
          </Button>
          <Button
            style={{ float: 'right', marginRight: 12 }}
            onClick={() => this.props.prev()}
          >

            Previous
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
