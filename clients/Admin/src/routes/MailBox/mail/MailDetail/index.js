import axios from 'axios';
import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import moment from 'moment';
import CustomScrollbars from '../../../../util/CustomScrollbars';
import labels from '../../data/labels';

const options = ['Reply', 'Forward', 'Print'];

class MailDetail extends React.Component {
  state = {
    showDetail: false,
  };

  optionMenu = () => (
    <Menu id="long-menu">
      {options.map(option => (
        <Menu.Item key={option}>{option}</Menu.Item>
      ))}
    </Menu>
  );

  componentWillMount() {
    const {
      mail: { id },
    } = this.props;

    axios.post('/api/v1/edit/read', { id });
  }

  render() {
    const { mail, onStartSelect, onImportantSelect } = this.props;
    return (
      <div className="gx-module-detail gx-mail-detail">
        <CustomScrollbars className="gx-module-content-scroll">
          <div className="gx-mail-detail-inner">
            <div className="gx-mail-header">
              <div className="gx-mail-header-content gx-col gx-pl-0">
                <div className="gx-subject">{mail.subject}</div>

                <div className="gx-labels">
                  {mail.label
                    ? labels.map(
                      (label, index) => mail.label.includes(label.id) && (
                      <div
                              key={index}
                              className={`gx-badge gx-text-white gx-bg-${
                                label.color
                              }`}
                            >
                              {label.title}
                            </div>
                      ),
                    )
                    : null}
                </div>
              </div>

              <div className="gx-mail-header-actions">
                <div
                  onClick={() => {
                    onStartSelect(mail);
                  }}
                >
                  {mail.starred ? (
                    <i className="icon icon-star gx-icon-btn" />
                  ) : (
                    <i className="icon icon-star-o gx-icon-btn" />
                  )}
                </div>
                <div
                  onClick={() => {
                    onImportantSelect(mail);
                  }}
                >
                  {mail.important ? (
                    <i className="icon icon-important gx-icon-btn" />
                  ) : (
                    <i className="icon icon-important-o gx-icon-btn" />
                  )}
                </div>
              </div>
            </div>
            <hr />

            <div className="gx-mail-user-info gx-ml-0 gx-mb-3">
              <Avatar className="gx-avatar gx-bg-blue gx-size-40 gx-mr-3">
                {' '}
                {mail.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="gx-sender-name">
                {mail.name}
                <div className="gx-send-to gx-text-grey">to me</div>
              </div>

              <Dropdown trigger={['click']} overlay={this.optionMenu()}>
                <span className="gx-ml-auto">
                  <i className="icon icon-ellipse-v gx-icon-btn" />
                </span>
              </Dropdown>
            </div>

            <div
              className="gx-show-link"
              onClick={() => {
                this.setState({ showDetail: !this.state.showDetail });
              }}
            >
              {this.state.showDetail ? 'Hide Detail' : 'Show Detail'}
            </div>
            {this.state.showDetail && (
              <div className="gx-show-detail">
                <div>
                  <strong>From: </strong>
                  {mail.email}
                </div>
                <div>
                  <strong> To: </strong>
                  {mail.to.map((to, index) => (
                    <span>
                      {index > 0 && ', '}
                      {' '}
                      {to.email}
                    </span>
                  ))}
                </div>
                <div>
                  <strong>Date: </strong>
                  {moment(mail.createdAt).calendar()}
                  {' '}
                </div>
              </div>
            )}

            <p>{mail.message}</p>
          </div>
        </CustomScrollbars>
      </div>
    );
  }
}

export default MailDetail;
