import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function index({ relatedPosts }) {
  return (
    <div className="related-posts mt-40">
      <h3 className="heading relative heading-small uppercase bottom-line style-2 left-align mb-30">Related Posts</h3>
      <div className="row">
        {relatedPosts.map(post => (
          <div className="col-sm-4">
            <article>
              <div className="entry-img hover-scale">
                <Link to="/">
                  <img src={post.image} alt="" />
                </Link>
              </div>
              <div className="entry">
                <h4 className="entry-title"><Link to="/">{post.title}</Link></h4>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
