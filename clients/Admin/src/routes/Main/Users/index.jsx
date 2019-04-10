/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import axios from 'axios';
import Widget from '../../../components/Widget';
import CircularProgress from '../../../components/CircularProgress';


export default class index extends Component {
    state = {
      columns: [],
      data: [],
    }

    componentDidMount = async () => {
      const result = await axios('/api/v1/lastusers');
      const { data } = result;
      const columns = [
        {
          title: 'Holder Name',
          dataIndex: 'name',
          render: (text, record) => (
            <div className="gx-flex-row gx-align-items-center">
              <img
                className="gx-rounded-circle gx-size-30 gx-mr-2"
                src={`/api/v1/getFile/${record.pic}`}
                alt=""
              />
              <p className="gx-mb-0">{record.name}</p>
            </div>
          ),
        },
        {
          title: 'rule',
          dataIndex: 'rule',
        },
        {
          title: 'Action',
          dataIndex: 'status',
          render: (text, record) => (
            <span className="gx-text-primary gx-pointer">
              <Link to={`/admin/users/${record.id}`}>
                <i className="icon icon-forward gx-fs-sm gx-mr-2" /> Edit
              </Link>
            </span>
          ),
        },
      ];
      this.setState({ data, columns });
    }


    render() {
      const { data, columns } = this.state;
      return (
        data.length ? (
          <Widget
            title={<h2 className="h4 gx-text-capitalize gx-mb-0">Last Users</h2>}
            extra={(
              <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
                <Link to="/admin/users/adduser">
                  <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" /> Add New User
                </Link>
              </p>
)}
          >
            <div className="gx-table-responsive">
              <Table
                className="gx-table-no-bordered"
                columns={columns}
                dataSource={data}
                pagination={false}
                size="small"
              />
            </div>
            <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3">
              <Link to="/admin/users/adduser">
                <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" /> Add New Account
              </Link>
            </p>
          </Widget>
        ) : null
      );
    }
}
