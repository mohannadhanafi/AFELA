/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Fragment, Component } from 'react';
import uuid from 'uuid';
import { Link, withRouter } from 'react-router-dom';
import removeTags from 'striptags';
import axios from 'axios';
import BreadCrumb from '../../../../common/breadcrumb';
import Title from '../../../../common/Title';
import './style.css';

class TopSection extends Component {
  state = {
    photoLink: '', details: '', title: '', loading: false, data: '', ads: [],
  }

  componentDidMount() {
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
      .get('/api/v1/getAds', { params: { page, type: 'horizontal' } })
      .then((result) => {
        const { data, status } = result;
        if (status === 200) {
          this.setState(() => ({ ads: data }));
        }
      });
  }


  static getDerivedStateFromProps(nextProps) {
    const { data: { result: data, catName } } = nextProps;
    return { data, title: catName };
  }


  render() {
    const { photoLink, title, ads } = this.state;
    const { data } = this.state;

    const {
      rows,
    } = data;

    const finalPosts = rows;
    const first = finalPosts.slice(0, 1);
    const second = finalPosts.slice(1, 5);

    return (
      <>
        <div className="top--section">
          <BreadCrumb data={title} />
          <div className="last--posts">
            {finalPosts.length
              ? (
                <>
                  <div className="first--photo">
                    <img src={`/api/v1/getFile/${first[0].header_media[0]}`} alt="post" />
                    <div className="photo--data">
                      <Title title={first[0].category.category_name} />
                      <p>
                        <Link to={`/news/${first[0].category.category_seo}/${first[0].seo}`}>
                          {first[0].title}
                        </Link>
                      </p>
                    </div>
                    <div className="gradient" />
                  </div>
                  <div className="second--photos">
                    {second.map(post => (
                      <Fragment key={uuid()}>
                        <div className="container--images">
                          <img
                            src={`/api/v1/getFile/${post.header_media[0]}`}
                            alt="post"
                          />
                          <div className="photo--data">
                            <Title title={post.category.category_name} />
                            <p>
                              <Link to={`/news/${post.category.category_seo}/${post.seo}`}>
                                {post.title}
                              </Link>
                            </p>
                          </div>
                          <div className="gradient" />
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </>
              )
              : <h1>category is Empty</h1> }
          </div>
          {ads.length ? (
            ads[0].link ? <a href={`http://${ads[0].link}`} target="_blank"><img className="adv" src={`/api/v1/getFile/${ads[0].media}`} alt="img" /></a>
              : (
                <Link to={`/news/${ads[0].category}/${ads[0].posts ? 'posts' : ''}`}>
                  {' '}
                  <img className="adv" src={`/api/v1/getFile/${ads[0].media}`} alt="img" />
                </Link>
              )
          ) : (
            <img className="adv" src="/api/v1/getFile/horizontal.jpg" alt="d" />
          )}
          {' '}

        </div>
      </>
    );
  }
}

export default withRouter(TopSection);
