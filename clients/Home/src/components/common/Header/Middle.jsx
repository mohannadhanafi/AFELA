import React, { Component } from "react";
import Bottom from './Bottom';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <>
                <div className="header-wrap">
                  <div className="container">
                    <div className="row">
                      <div className="logo-container">
                        <div className="logo-wrap text-center">
                          <a href="index.html">
                            <img
                              className="logo"
                              src="https://cdn.logojoy.com/wp-content/uploads/2017/08/freelogodesign2@2x.png"
                              alt="logo"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="header-ad hidden-sm hidden-xs">
                        <a href="http://deothemes.com">
                          <img src="http://deothemes.com/envato/afela/html/img/magazine/728_ad.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              
      </>
    );
  }
}
