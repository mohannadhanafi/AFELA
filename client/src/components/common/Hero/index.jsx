import React, { Component } from 'react';
import hero1 from './hero_1.jpg';
import hero2 from './hero_2.jpg';
import hero3 from './hero_3.jpg';
import hero4 from './hero_4.jpg';

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
              <div className="col-md-7 post-1">
                <div className="entry-img hover-scale">
                  <img src={hero1} alt="" />
                  <div className="entry-inner">
                    <div className="entry">
                      <h2 className="entry-title color-white">
                        <span>
                          When Are You Actually Ready to Launch a Startup?
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 ">
                <article className="post-2">
                  <div className="entry-img hover-scale">
                    <img src={hero2} alt="" />
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
                        <img src={hero3} alt="" />
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
                        <img src={hero4} alt="" />
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
