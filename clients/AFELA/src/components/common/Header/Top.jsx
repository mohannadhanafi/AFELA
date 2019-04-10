import React, { Component } from 'react';
import moment from 'moment';

export default class Header extends Component {
  state = { links: [{ name: 'facebook', link: '#' }, { name: 'google-plus', link: '#' }, { name: 'youtube', link: '#' }, { name: 'linkedin', link: '#' }, { name: 'vimeo', link: '#' }] };

  render() {
    const { links } = this.state;
    return (
      <>
        <div className="top-bar hidden-xs">
          <div className="container">
            <div className="row">
              <div className="top-bar-links">
                <ul className="col-sm-6">
                  <li className="top-bar-date">
                    <span>{moment().format('dddd, MMMM D, YYYY')}</span>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">advertise</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">buy now</a>
                  </li>
                </ul>

                <ul className="col-sm-6 top-bar-acc text-right">
                  <li className="social-icons dark">
                    {links.map(link => (
                      <a href={link.link}>
                        <i className={`fab fa-${link.name}`} />
                      </a>
                    ))}
                  </li>
                  <li className="top-bar-link">
                    <a href="#">Join</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
