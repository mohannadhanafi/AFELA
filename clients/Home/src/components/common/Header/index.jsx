import React, { Component } from 'react';
import axios from 'axios';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

export default class Header extends Component {
    state = { data: '' }

    componentWillMount() {
      axios.get('/api/v1/getoptions').then((result) => {
        const { data } = result;
        this.setState(() => ({ data }));
      });
    }

    render() {
      const { data } = this.state;
      return (
        <header className="nav-type-4">
          <Top data={data} />
          <nav className="navbar navbar-static-top">
            <div className="navigation">
              <div className="container-fluid relative">
                <div className="row">
                  <div className="navbar-header container">
                    <div className="row">
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#navbar-collapse"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                  </div>
                  <Middle />
                  <Bottom />

                </div>
              </div>
            </div>
          </nav>
        </header>
      );
    }
}
