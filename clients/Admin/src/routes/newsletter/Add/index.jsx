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
import { connect } from 'react-redux';

import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Row,
} from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CKEditor from 'react-ckeditor-component';
import axios from 'axios';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';
import { Editor } from '@tinymce/tinymce-react';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    content: '',
    children: [1, 2, 3, 4, 5, 6, 7],
    data: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  componentDidMount = async () => {
    const allCategories = await axios.get('/api/v1/categories/getAll');
    const heading = await axios.get('/api/v1/heading');
    const { data } = heading;
    const result = await axios.get('/api/v1/newsletter');
    const { data: children } = result;
    const { data: categories } = allCategories;
    this.setState({ categories, heroLength: data.length, children });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const { content } = this.state;
      if (!err) {
        values.content = content;
        axios.post('/api/v1/sendemail', { data: values }).then(result => console.log(result));
      }
    });
  };

  onBlur(evt) {}

  afterPaste(evt) {}

  handleEditorChange = (e) => {
    const content = e.target.getContent();
    this.setState(() => ({ content }));
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  updateContent(newContent) {
    this.setState({
      content: newContent,
    });
  }

  editorChange(evt) {
    const newContent = evt.editor.getData();
    this.setState({
      content: newContent,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { children } = this.state;
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
      <Card className="gx-card" title="Send Email">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Mail List</span>}>
            {getFieldDecorator('list', {
            })(

              <Select
                mode="multiple"
                placeholder="Please select from the list"
                defaultValue={['a10', 'c12']}
                onChange={this.handleChange}
                style={{ width: '100%' }}
                >
                {children.map(value => (
                  <option value={value.email}>{value.email}</option>
                ))}
              </Select>,

            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Subject">
            {getFieldDecorator('subject', {
              rules: [
                {
                  required: true,
                  message: 'Please Enter The Subject',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="Subject" />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span>Description</span>}>
            <Editor
              init={{
                images_upload_url: '/api/v1/uploadFile',

                images_upload_base_path: '/api/v1/uploadFile',
                image_caption: true,

                images_upload_handler: (blobInfo, success, failure) => {
                  const formData = new FormData();
                  formData.append('file', blobInfo.blob());
                  axios.post('/api/v1/uploadFile', formData).then((result) => {
                    const { data: { fullName } } = result;
                    success(`/api/v1/getFile/${fullName}`);
                  }).catch((error) => {
                    failure('error !');
                  });
                },
                height: 700,
                image_title: true,
                automatic_uploads: true,
                file_picker_types: 'file image media',
                images_upload_credentials: true,
                plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed mentions linkchecker',
                toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
              }}
              onChange={this.handleEditorChange}
      />
            ,
          </FormItem>
          <Row>
            <div style={{ marginRight: '17px' }}>
              <Button onClick={this.handleReset}>
              Send To All
              </Button>
              <Button type="primary" htmlType="submit">Send To Selected</Button>
            </div>
          </Row>
        </Form>
        <NotificationContainer />
      </Card>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { authUser, url, role } = auth;
  return {
    authUser,
    url,
    role,
  };
};

const RegistrationForm = Form.create()(Registration);
export default connect(mapStateToProps)(RegistrationForm);
