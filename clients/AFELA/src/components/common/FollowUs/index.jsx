import React, { Component } from 'react';

export default class FollowUs extends Component {
  state={
    social: [
      { name: 'facebook', link: '/', className: 'fab fa-facebook-f' },
      { name: 'twitter', link: '/', className: 'fab fa-twitter' },
      { name: 'google-plus', link: '/', className: 'fab fa-google-plus-g' },
      { name: 'instagram', link: '/', className: 'fab fa-instagram' },
      { name: 'youtube', link: '/', className: 'fab fa-youtube' },
      { name: 'rss', link: '/', className: 'fa fa-rss' },
    ],
  }

  render() {
    const { social } = this.state;
    return (
      <div className="widget follow-us">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">Follow Us</h3>
        <div className="social-icons colored large">
          {social && social.map(({ name, link, className }) => (
            <a href={link} className={`social-${name}`} data-toggle="tooltip" data-placement="top" title={name}><i className={className} /></a>
          ))}
        </div>
      </div>
    );
  }
}
