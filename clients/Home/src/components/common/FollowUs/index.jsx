import React, { Component } from 'react';
import { connect } from 'react-redux/es';

class FollowUs extends Component {
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
    const { options: data } = this.props;
    return (
      <div className="widget follow-us">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">

          Follow Us
        </h3>
        <div className="social-icons colored large">
          {data.length
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
const mapStateToProps = ({ options }) => options;

export default connect(mapStateToProps, null)(FollowUs);
