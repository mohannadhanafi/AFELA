/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid';
import './style.css';
import moment from 'moment';

export default class Comments extends React.Component {
  state={ comments: [] }

  componentWillReceiveProps() {
    const { comments } = this.props;
    this.setState(() => ({ comments }));
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="comments">
        {comments && comments.map(element => (
          <div key={uuid()} className="single--comment">
            <img src={element.username ? '/api/v1/getFile/vertical.png' : null} alt="profile" />
            <div className="comment--content">
              <h5>{element.username}</h5>
              <p>{element.title}</p>
              <span>{moment(element.createdAt).calendar()}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
