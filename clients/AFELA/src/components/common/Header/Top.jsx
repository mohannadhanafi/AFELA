import React, { Component } from 'react';
import moment from 'moment';

export default class Header extends Component {
  state = {
    links: [
      { name: 'facebook' },
      { name: 'google-plus' },
      { name: 'youtube' },
      { name: 'linkedin' },
      { name: 'vimeo' },
    ],
  };

  render() {
    const { links } = this.state;
    const { data } = this.props;
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
                  {data ? (
                    <li className="social-icons dark">
                      {links.map(link => (
                        <a href={data[0][link.name] ? data[0][link.name] : null}>
                          <i className={`fab fa-${link.name}`} />
                        </a>
                      ))}
                    </li>
                  ) : null}
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
