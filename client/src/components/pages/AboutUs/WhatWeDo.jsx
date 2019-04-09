/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

export default function WhatWeDo() {
  return (
    <section className="section-wrap" id="intro">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="about-description">
              <h4>What We Do</h4>
              <p>

                Our Theme is a very slick and clean e-commerce template with
                endless possibilities. Creating an awesome website with this
                Theme is easy than you can imagine. Our Theme is a very slick
                and clean e-commerce template with endless possibilities.
</p>
              <p>

                We possess within us two minds. So far I have written only of
                the conscious mind. I would now like to introduce you to your
                second mind, the hidden and mysterious subconscious. Our
                subconscious mind contains such power and complexity that it
                literally staggers the imagination. We know that this
                subconscious mind controls and orchestrates our bodily
                functions.
</p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="progress-bars skills-progress">
              <h6>

                Web Design
{' '}
<span>88%</span>
              </h6>
              <div className="progress meter">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="88"
                  className="progress-bar"
                  role="progressbar"
                >
                  <span className="sr-only">88% Complete</span>
                </div>
              </div>

              <h6>

                Marketing
{' '}
<span>92%</span>
              </h6>
              <div className="progress meter">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="92"
                  className="progress-bar"
                  role="progressbar"
                >
                  <span className="sr-only">92% Complete</span>
                </div>
              </div>

              <h6>

                WordPress
{' '}
<span>94%</span>
              </h6>
              <div className="progress meter">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="94"
                  className="progress-bar"
                  role="progressbar"
                >
                  <span className="sr-only">94% Complete</span>
                </div>
              </div>

              <h6>

                Photography
{' '}
<span>78%</span>
              </h6>
              <div className="progress meter" id="animated-skills">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="78"
                  className="progress-bar"
                  role="progressbar"
                >
                  <span className="sr-only">78% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
