/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

export default function OurTeam() {
  return (
    <section className="section-wrap-lg our-team pb-80">
      <div className="container">
        <div className="row heading">
          <div className="col-md-6 col-md-offset-3 text-center">
            <h2 className="bottom-line">Our Team</h2>
            <p className="subheading style-2">
              Creative Minds With The Extraordinary Skills
            </p>
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-4 col-sm-6 team-wrap mb-40 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay=".1s"
          >
            <div className="team-member text-center">
              <div className="team-img" onClick="return true">
                <img src="http://deothemes.com/envato/afela/html/img/team_2.jpg" alt="" />
                <div className="overlay">
                  <div className="team-details text-center">
                    <div className="social-icons rounded">
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="team-title">David Geller</h4>
              <span>CEO of Company</span>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-6 team-wrap mb-40 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay=".2s"
          >
            <div className="team-member text-center">
              <div className="team-img">
                <img src="http://deothemes.com/envato/afela/html/img/team_2.jpg" alt="" />
                <div className="overlay">
                  <div className="team-details text-center">
                    <div className="social-icons rounded">
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="team-title">Monica Bing</h4>
              <span>Art Director</span>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-6 team-wrap wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay=".3s"
          >
            <div className="team-member last text-center">
              <div className="team-img">
                <img src="http://deothemes.com/envato/afela/html/img/team_2.jpg" alt="" />
                <div className="overlay">
                  <div className="team-details text-center">
                    <div className="social-icons rounded">
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="team-title">Joey Tribbiani</h4>
              <span>Lead Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
