/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

class index extends Component {
  state = {
    photoLink: '',
    title: '',
    details: '',
    logo: '',
    data: [],
  };

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
    if (path === 'aboutus') {
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
      .get('/api/v1/getAds', { params: { page, type: 'horizontal' } })
      .then((result) => {
        const { data, status } = result;
        if (status === 200) {
          this.setState(() => ({ data }));
        }
      });
  }

  componentDidMount = async () => {
    const result = await axios('/api/v1/getoptions');
    const { data } = result;
    const { logo } = data[0];
    this.setState({ logo });
  };

  goToHome = () => {
    const {
      history: { push },
    } = this.props;
    push('/');
  };

  render() {
    const { logo, data } = this.state;
    return (
      <div className="second--nav container">
        <img onClick={this.goToHome} className="logo" src={`/api/v1/getFile/${logo}`} alt="logo" />
        {data.length ? (
          data[0].link ? <a href={`http://${data[0].link}`} target="_blank"><img src={`/api/v1/getFile/${data[0].media}`} alt="img" /></a>
            : (
              <Link to={`/news/${data[0].category}/${data[0].posts ? data[0].posts : ''}`}>
                {' '}
                <img src={`/api/v1/getFile/${data[0].media}`} alt="img" />
              </Link>
            )
        ) : (
          <img className="first--adv" src="/api/v1/getFile/horizontal.jpg" alt="d" />
        )}
      </div>
    );
  }
}

export default withRouter(index);
