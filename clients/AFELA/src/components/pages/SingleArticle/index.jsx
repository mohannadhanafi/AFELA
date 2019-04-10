/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import FollowUs from '../../common/FollowUs';
import Popular from '../../common/Popular';
import Weather from '../../common/Weather';
import Ads from '../../common/Ads';
import Galleries from '../../common/Galleries';
import Categoty from '../../common/Category';
import TopRated from '../../common/TopRated';
import Tags from '../../common/Tags';
import PostBody from './Post';
import RelatedPosts from './RelatedPosts';
import Comments from './Comments';
import AddComment from './AddComment';

export default class SigleArtice extends Component {
  state = {
    images: [],
    date: '',
    category: {},
    tags: [],
    author: {},
    title: '',
    body: '',
    nextPost: {},
    prevPost: '',
    relatedPosts: [
      {
        image: 'http://deothemes.com/envato/afela/html/img/blog/1.jpg',
        title: 'The Golden Age: How the PR Industry Is Coming Into its Own',
      },
      {
        image: 'http://deothemes.com/envato/afela/html/img/blog/3.jpg',
        title: '5 Ways to Give Thanks and Give Back at Work',
      },
      {
        image: 'http://deothemes.com/envato/afela/html/img/blog/1.jpg',
        title: '16-Step Blueprint to Master Your Digital Marketing in 2016',
      },
    ],
    AllComments: [
      {
        time: 'May 6, 2014 at 12:48 pm',
        comment: 'This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.',
        user: {
          name: 'Joeby Ragpa',
          avatar: 'http://deothemes.com/envato/afela/html/img/blog/comment_1.jpg',
        },
      },
      {
        time: 'May 6, 2014 at 12:48 pm',
        comment: 'This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.',
        user: {
          name: 'Christopher Robins',
          avatar: 'http://deothemes.com/envato/afela/html/img/blog/comment_3.jpg',
        },
      },
    ],
    name: '',
    email: '',
    comment: '',
  };

  addComment = async (e) => {
    e.preventDefault();
    const {
      comment, name, email, id,
    } = this.state;
    const data = {
      comment,
      username: name,
      email,
      post_id: id,
    };
    await axios.post('/api/v1/comments/addComment', data).then(() => {
      swal.fire({
        title: 'Your comment sent, it will be avaliable after accept from admin',
        type: 'success',
        timer: 3000,
        customClass: {
          popup: 'animated tada',
        },
      });
    });
  };

getData = (props) => {
  const {
    match: {
      params: { seoName, category: cat_seo },
    },
  } = props;
  axios(`/api/v1/post/${cat_seo}/${seoName}`).then((result) => {
    const {
      data: {
        result: postData, nextPost, prevPost, commentsResult: AllComments,
      },
    } = result;

    const {
      header_media: images, tags, user: author, createdAt: date, category, title, description: body, id,
    } = postData[0];
    this.setState({
      images,
      tags,
      author,
      date,
      category,
      title,
      body,
      nextPost,
      prevPost,
      id,
      AllComments,
    });
  });
}

componentDidMount() {
  window.scrollTo(0, 0);
  this.getData(this.props);
}

componentWillReceiveProps(props) {
  window.scrollTo(0, 0);
  this.getData(props);
}

onChange = ({ target: { name, value } }) => {
  this.setState({ [name]: value });
};

render() {
  const {
    images, tags, author, date, category, comments, title, body, relatedPosts, AllComments, nextPost, prevPost, comment, name, email,
  } = this.state;
  return (
    <div className="main-wrapper magazine oh">
      <div className="container">
        <ol className="breadcrumb mt-20">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Single Article</li>
        </ol>
      </div>

      <section className="section-wrap post-single pt-0 pb-50">
        <div className="container">
          <div className="row mt-40">
            <div className="col-md-8 content">
              <PostBody
                images={images}
                tags={tags}
                author={author}
                date={date}
                category={category}
                comments={comments}
                title={title}
                body={body}
                next={nextPost}
                prev={prevPost}
              />
              <RelatedPosts relatedPosts={relatedPosts} />
              <Comments AllComments={AllComments} />
              <AddComment
                onClick={this.addComment}
                comment={comment}
                name={name}
                email={email}
                onChange={this.onChange}
              />
            </div>
            <aside className="col-md-4 sidebar pb-50">
              <FollowUs />
              <Popular />
              <Weather />
              <Ads link="/" />
              <Galleries />
              <Categoty />
              <TopRated />
              <Tags />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
}
