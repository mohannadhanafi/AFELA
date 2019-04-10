import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class RightAdv extends React.Component {
  state = { data: [] }

  componentWillMount() {
    const {
      history: {
        location: { pathname },
      },
    } = this.props;
    const path = pathname.split('/')[1];
    let page = '';
    if (!path.trim()) {
      page = 'home';
    }
    if (path === 'contact') {
      page = 'contact';
    }
    if (path === 'about') {
      page = 'about';
    }
    if (path === 'news') {
      if (pathname.split('/')[3]) {
        page = 'post';
      } else {
        page = 'category';
      }
    }
    axios
      .get('/api/v1/getAds', { params: { page, type: 'vertical' } })
      .then((result) => {
        const { data, status } = result;
        if (status === 200) {
          this.setState(() => ({ data }));
        }
      });
  }

  render() {
    const { image } = this.props;
    const { data } = this.state;
    return (
      data.length ? (
        data[0].link ? (
          <a href={`http://${data[0].link}`} target="_blank">
            {' '}
            <div className="right--adv" style={{ backgroundImage: `url(/api/v1/getFile/${data[0].media})` }} />
          </a>
        )
          : (
            <Link to={`/news/${data[0].category}/${data[0].posts ? data[0].posts : ''}`}>
              {' '}
              <div className="right--adv" style={{ backgroundImage: `url(/api/v1/getFile/${data[0].media})` }} />

            </Link>
          )
      ) : (
        <div className="right--adv" style={{ backgroundImage: 'url(/api/v1/getFile/vertical.png)' }} />
      )
    );
  }
}

RightAdv.propTypes = {
  image: PropTypes.string.isRequired,
};

export default withRouter(RightAdv);
