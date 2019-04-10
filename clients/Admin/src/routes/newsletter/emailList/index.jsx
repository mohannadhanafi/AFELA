/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import axios from 'axios';
import {
  Card,
  Table,
  Popconfirm, Tag,
} from 'antd';
import { NotificationContainer, NotificationManager } from 'react-notifications';


class Dynamic extends React.Component {
  state = {
    data: [],
    columns: [],
  };

  delete = (id) => {
    axios.delete('/api/v1/newsletter/delete', { data: { id } }).then((res) => {
      const {
        data: { message },
        statusText,
      } = res;
      if (res.status === 200) {
        NotificationManager.success(message, 'SUCCESS', 2000);
        setTimeout(() => {
          const { data } = this.state;
          const final = data.filter(element => element.id !== id);
          this.setState({ data: final });
        }, 1000);
      } else {
        NotificationManager.error(message || statusText, 'ERROR', 2000);
      }
    });
  };

  componentWillMount = () => {
    axios.get('/api/v1/newsletter').then((result) => {
      const { data } = result;
      const columns = [
        {
          title: 'email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Status',
          key: 'activated',
          dataIndex: 'activated',
        },
        {
          title: 'Action',
          key: 'action',
          dataIndex: 'action',
          width: 360,
        },
      ];
      this.setState({ columns });
      data.map((element) => {
        element.action = (
          <span>
            <Popconfirm
              title="Are you sure delete this task?"
              onConfirm={() => this.delete(element.id)}
              okText="Yes"
              cancelText="No"
            >
              <a className="gx-mb-3 gx-link" href="/">
                Delete
              </a>
            </Popconfirm>
          </span>
        );
        element.activated = (

          <Tag color={element.activated ? 'green' : 'red'}>{element.activated ? 'ACTIVATED' : 'NOT ACTIVATED'}</Tag>

        );
        return element;
      });
      this.setState(() => ({ data }));
    });
  };

  render() {
    const { data, columns } = this.state;
    return (
      <Card title="News Letter">
        <Table
          className="gx-table-responsive"
          {...this.state}
          columns={columns}
          dataSource={data}
        />
        <NotificationContainer />
      </Card>
    );
  }
}

export default Dynamic;
