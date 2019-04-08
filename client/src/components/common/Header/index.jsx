import React, { Component } from 'react';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

export default class Header extends Component {
    state = {}

    render() {
      return (
        <header className="nav-type-4">
          <Top />

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
