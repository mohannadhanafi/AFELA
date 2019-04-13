import React, { Component } from 'react';
import axios from 'axios';

export default class FollowUs extends Component {
  state = {
    data: '',
    links: [
      { name: 'facebook' },
      { name: 'google-plus' },
      { name: 'youtube' },
      { name: 'linkedin' },
      { name: 'vimeo' },
    ],
  };

  componentDidMount() {
    axios.get('/api/v1/getoptions').then((result) => {
      const { data } = result;
      this.setState(() => ({ data }));
    });
  }

  render() {
    const { data, links } = this.state;
    return (
      <div className="widget follow-us">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">

          Follow Us
</h3>
        <div className="social-icons colored large">
          {data
            && links.map(link => (
              <a
                href={data[0][link.name] ? data[0][link.name] : null}
                className={`social-${link.name}`}
                data-toggle="tooltip"
                data-placement="top"
                title={link.name}
              >
                <i className={`fab fa-${link.name}`} />
              </a>
            ))}
        </div>
      </div>
    );
  }
}
