/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { connect } from 'react-redux/es';

class Footer extends Component {
  state = {
    categories: [],
    email: '',
    options: [],

    links: [{ name: 'facebook', link: '#' }, { name: 'google-plus', link: '#' }, { name: 'youtube', link: '#' }, { name: 'linkedin', link: '#' }, { name: 'vimeo', link: '#' }],
    copyrights: '© 2015 Afela Theme | Made by DeoThemes',
    recentPosts: [

    ],
    aboutUs:
      'Afela Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme. We possess within us two minds. So far I have written only of the conscious mind.',
  };

  componentWillMount() {
    axios.get('/api/v1/categories/allWithCount').then((result) => {
      const { data } = result;
      this.setState(() => ({ categories: data }));
    }).then(async () => {
      const result = await axios('/api/v1/lastposts');
      const { data } = result;
      this.setState({ recentPosts: data });
    });
  }


  addNewletter= async (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    });
    const { email } = this.state;
    const data = { email };
    await axios.post('api/v1/newsletter', data).then((res) => {
      const { data: { message } } = res;
      if (res.err) {
        return Toast.fire({
          type: 'error',
          title: message,

        });
      }
      Toast.fire({
        type: 'success',
        title: message,
      });
      this.setState({
        email: '',
      });
    }).catch((err) => {
      Toast.fire({
        title: 'Somthing Error',
        type: 'error',
      });
    });
  }

  onChange=(e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      aboutUs, recentPosts, categories, links, email,
    } = this.state;

    const { options } = this.props;
    return (
      <footer className="footer footer-type-4">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="widget footer-about-us">
                  <h5 className="uppercase">About Us</h5>
                  <p className="mb-20">
                    {aboutUs}
                  </p>

                  <p>Subscribe to our newsletter:</p>
                  <form className="relative newsletter-form style-2" onSubmit={this.addNewletter}>
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder="Enter your email"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      required
                    />
                    <i className="icon_mail" />
                    <input
                      type="submit"
                      className="btn btn-md btn-dark newsletter-submit"
                      value="Subscribe"
                    />
                  </form>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="widget footer-posts with-thumbs">
                  <h5 className="uppercase">Recent Posts</h5>
                  <div className="footer-entry-list">
                    <ul className="posts-list no-top-pad">
                      {recentPosts.slice(0, 2).map(post => (
                        <li className="footer-entry">
                          <article className="post-small clearfix">
                            <div className="entry-img hover-scale">
                              <a href={`/news/${post.seo}`}>
                                <img src={`/api/v1/getFile/${post.header_media[0]}`} alt="" />
                              </a>
                            </div>
                            <div className="entry">
                              <h3 className="entry-title">
                                <a href={`/news/${post.seo}`}>
                                  {post.title}
                                </a>
                              </h3>
                              <ul className="entry-meta list-inline">
                                <li className="entry-date">
                                  <a href={`/news/${post.seo}`}>{moment(post.createdAt).calendar()}</a>
                                </li>
                              </ul>
                            </div>
                          </article>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="widget footer-links small-space">
                  <h5 className="uppercase">Useful Links</h5>
                  <ul>
                    {categories.length ? categories.slice(0.5).map(category => (
                      <li><a href="#">{category.name}</a></li>
                    )) : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xs-12 copyright">
                <span>

                  {options.length ? <a href="/">{options[0].copyrights}</a>
                    : null}
                </span>
              </div>

              <div className="col-md-5 col-xs-12">
                <ul className="bottom-footer-links style-2">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Advertisement</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-xs-12 footer-socials mt-mdm-10 text-right">
                <div className="social-icons dark">
                  {options.length ? (
                    links.map(link => (
                      <a href={options[0][link.name] ? options[0][link.name] : null}>
                        <i className={`fab fa-${link.name}`} />
                      </a>
                    ))
                  ) : null}

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = ({ options }) => options;

export default connect(mapStateToProps, null)(Footer);
