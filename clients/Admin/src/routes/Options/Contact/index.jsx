/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  Card,
  Table,
} from 'antd';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';

class Dynamic extends React.Component {
  state = {
    data: [],
    columns: [],
  };

  delete = (id) => {
    axios
      .delete('/api/v1/posts/delete', { data: { id } })
      .then((res) => {
        const {
          data: { message },
          statusText,
        } = res;
        if (res.status === 200) {
          const { items } = this.state;
          const final = items.filter(element => element.id !== id);
          this.setState(
            () => ({ items: final }),
            () => {
              NotificationManager.success(message, 'SUCCESS', 2000);
            },
          );
        } else {
          NotificationManager.error(message || statusText, 'ERROR', 2000);
        }
      })
      .catch((error) => {
        const {
          data: { message: errorMessage },
          statusText: errorText,
        } = error.response;
        NotificationManager.error(errorMessage || errorText, 'ERROR', 2000);
      });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  componentWillMount = () => {
    axios.get('/api/v1/contactus').then((result) => {
      const { data } = result;
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          sorter: (a, b) => a.email.length - b.email.length,
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
          sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
          title: 'Message',
          dataIndex: 'message',
          key: 'message',
          sorter: (a, b) => a.message.length - b.message.length,
        },
      ];
      this.setState({ columns, items: data });
    });
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const { data } = this.state;
    let list = data;
    list = list.filter(
      item => item.title.props.children[0].toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );

    if (list.length !== 0) {
      this.setState({ items: list });
    } else {
      this.setState({ items: null });
    }
  };

  render() {
    const { columns, items } = this.state;
    return (
      <Card title="Contact Us">
        <Table
          className="gx-table-responsive"
          {...this.state}
          columns={columns}
          dataSource={items}
        />
      </Card>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { role } = auth;
  return {
    role,
  };
};
export default connect(mapStateToProps)(Dynamic);
