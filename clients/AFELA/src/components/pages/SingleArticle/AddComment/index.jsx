import React from 'react';

export default function index() {
  return (
    <div className="comment-form mt-60 mb-50">
      <h3 className="heading relative heading-small uppercase bottom-line style-2 left-align">leave a reply</h3>
      <form id="form" method="post" action="#">
        <div className="row row-16">
          <div className="col-md-4">
            <input name="name" id="name" type="text" placeholder="Name*" />
          </div>
          <div className="col-md-4">
            <input name="mail" id="mail" type="email" placeholder="E-mail*" />
          </div>
          <div className="col-md-4">
            <input name="Website" id="Website" type="text" placeholder="Website" />
          </div>
          <div className="col-md-12">
            <textarea name="comment" id="comment" placeholder="Comment" rows="8" />
          </div>
        </div>

        <input type="submit" className="btn btn-md btn-color" value="Post Comment" id="submit-message" />
      </form>
    </div>
  );
}
