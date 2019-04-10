import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Category extends Component {
  state={
    category: [{
      name: 'Business',
      link: '/      ',
      count: 106,
    },
    {
      name: 'Science',
      link: '/      ',
      count: 77,
    }, {
      name: 'Sport',
      link: '/      ',
      count: 68,
    }, {
      name: 'Politics',
      link: '/      ',
      count: 125,
    }, {
      name: 'Lifestyle',
      link: '/      ',
      count: 161,
    }, {
      name: 'World',
      link: '/      ',
      count: 100,
    }, {
      name: 'Travel',
      link: '/      ',
      count: 200,
    },
    ],
  }

  render() {
    const { category } = this.state;
    return (
      <div className="widget categories">
        <h3 className="widget-title heading relative heading-small uppercase bottom-line style-2 left-align">Categories</h3>
        <ul className="list-dividers">
          {category && category.map(({name, link, count}) => (

            <li>
              <Link to={link}>
                {name}
                <span>{count}</span>
              </Link>
            </li>
          ))}

        </ul>
      </div>
    );
  }
}
