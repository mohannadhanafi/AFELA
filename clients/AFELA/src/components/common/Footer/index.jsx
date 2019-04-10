/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import axios from 'axios';

export default class Footer extends Component {
  state = {
    categories: [],
    options: [],
    links: [{ name: 'facebook', link: '#' }, { name: 'google-plus', link: '#' }, { name: 'youtube', link: '#' }, { name: 'linkedin', link: '#' }, { name: 'vimeo', link: '#' }],
    copyrights: '© 2015 Afela Theme | Made by DeoThemes',
    recentPosts: [
      {
        title: '6 Ways to Be More Productive by Working Less',
        date: '19 Dec, 2015',
        comments: 15,
        image: 'http://deothemes.com/envato/afela/html/img/magazine/thumb_11.jpg',
      },
      {
        title: '3 Tips to Align Your Startup\'s \'Core Value\' With Customers',
        date: '19 Dec, 2015',
        comments: 15,
        image: 'http://deothemes.com/envato/afela/html/img/magazine/thumb_12.jpg',
      },
    ],
    aboutUs:
      'Afela Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme. We possess within us two minds. So far I have written only of the conscious mind.',
  };

  componentWillMount() {
    axios.get('/api/v1/categories/allWithCount').then((result) => {
      const { data } = result;
      this.setState(() => ({ categories: data }));
    }).then(() => {
      axios.get('/api/v1/getoptions').then((result) => {
        const { data } = result;
        console.log(data);

        this.setState(() => ({ options: data }));
      });
    });
  }

  render() {
    const {
      aboutUs, recentPosts, categories, links, options,
    } = this.state;
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
                  <form className="relative newsletter-form style-2">
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder="Enter your email"
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
                      {recentPosts.map(post => (
                        <li className="footer-entry">
                          <article className="post-small clearfix">
                            <div className="entry-img hover-scale">
                              <a href="magazine-single-article.html">
                                <img src={post.image} alt="" />
                              </a>
                            </div>
                            <div className="entry">
                              <h3 className="entry-title">
                                <a href="magazine-single-article.html">
                                  {post.title}
                                </a>
                              </h3>
                              <ul className="entry-meta list-inline">
                                <li className="entry-date">
                                  <a href="#">{post.date}</a>
                                </li>
                                <li className="entry-comments">
                                  <i className="fa fa-comments" />
                                  <a href="magazine-single-article.html">{post.comments}</a>
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
