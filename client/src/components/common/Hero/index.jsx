
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './style.css';

export default class Hero extends Component {
  state = {
    hero: [],
  };

  render() {
    return (
      <div className="main-wrapper magazine oh">
        <div className="container">
          <section className="section-wrap main-news pt-30 pb-50">
            <div className="row small-spacing">
              <div className="col-md-7 ">
                <article className="post-1">
                  <div className="entry-img hover-scale">
                    <img className="hero1" src="http://deothemes.com/envato/afela/html/img/magazine/hero_2.jpg" alt="" />
                    <div className="entry-inner">
                      <div className="entry">
                        <h2 className="entry-title color-white">


                          When Are You Actually Ready to Launch a Startup?
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-md-5 ">
                <article className="post-2">
                  <div className="entry-img hover-scale">
                    <img className="hero2" src="http://deothemes.com/envato/afela/html/img/magazine/hero_2.jpg" alt="" />
                    <div className="entry-inner small">
                      <div className="entry">
                        <h2 className="entry-title color-white">


                          How to Use Pastel Colors in Web Design Projects
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="row small-spacing">
                  <div className="col-sm-6 post-3">
                    <article className="">
                      <div className="entry-img hover-scale">
                        <img className="hero3" src="http://deothemes.com/envato/afela/html/img/magazine/hero_3.jpg" alt="" />
                        <div className="entry-inner small">
                          <div className="entry">
                            <h2 className="entry-title color-white">


                              Size Matters: Make Your Business
                            </h2>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-sm-6 post-4">
                    <article className="">
                      <div className="entry-img hover-scale">
                        <img className="hero3" src="http://deothemes.com/envato/afela/html/img/magazine/hero_3.jpg" alt="" />
                        <div className="entry-inner small">
                          <div className="entry">
                            <h2 className="entry-title color-white">


                              Stop Reacting and Start Responding
                            </h2>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
