/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const WelComeCard = ({
  data: { pendengComments, pendengPosts, unreadNotifications },
  name,
}) => (
  <div className="gx-wel-ema gx-pt-xl-2">
    <h1 className="gx-mb-3">Welcome {name}!</h1>
    <p className="gx-fs-sm gx-text-uppercase">You Have</p>
    <ul className="gx-list-group">
      <li>
        <Icon type="mail" />
        <span>5 Unread messages</span>
      </li>
      <li>
        <Icon type="bell" />
        <span>
          <span
            style={{ color: `${unreadNotifications > 0 ? 'red' : 'black'}` }}
          >
            {unreadNotifications}
          </span>{' '}
          Unread Notifications
        </span>
      </li>
      <li>
        <Link to="/admin/Posts/viewPosts/notApproved">
          <Icon type="profile" />
          <span>
            <span style={{ color: `${pendengPosts > 0 ? 'red' : 'black'}` }}>
              {pendengPosts}
            </span>{' '}
            Pending Posts
          </span>
        </Link>
      </li>
      <li>
        <Link to="/admin/comments/notApproved">
          <Icon type="message" />
          <span>
            <span style={{ color: `${pendengComments > 0 ? 'red' : 'black'}` }}>
              {pendengComments}
            </span>{' '}
          Pending Comments
          </span></Link>
      </li>
    </ul>
  </div>
);

export default WelComeCard;
