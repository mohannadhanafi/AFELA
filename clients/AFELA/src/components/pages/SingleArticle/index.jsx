/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
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
    images: [
      'http://deothemes.com/envato/afela/html/img/blog/gallery_post_img_1.jpg',
      'http://deothemes.com/envato/afela/html/img/blog/gallery_post_img_3.jpg',
      'http://deothemes.com/envato/afela/html/img/blog/gallery_post_img_2.jpg',
    ],
    date: '15 Dec 2015',
    category: {
      name: 'Sport',
    },
    tags: ['Creative', 'Creative', 'Creative', 'Creative'],
    author: {
      image: 'http://deothemes.com/envato/afela/html/img/blog/author.jpg',
      name: 'MARIA RODRIGUES',
      bio:
        'In order to understand how the conscious and subconscious minds. Find me on Facebook, on Twitter or Google +. As a team to create your reality, let me again use an analogy. Your subconscious mind is like fertile soil which accepts any seed you plant within it.',
    },
    comments: 15,
    title: 'Treat Your Employees Well. They Are Your Best Brand Ambassadors',
    body: 'We possess within us two minds. So far I have written only of the conscious mind. It\'s the fastest-funded project and also the most funded - by far. We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged and changed into their physical equivalent.',
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
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      images, tags, author, date, category, comments, title, body, relatedPosts, AllComments,
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
                />
                <RelatedPosts relatedPosts={relatedPosts} />
                <Comments AllComments={AllComments} comments={comments} />
                <AddComment />
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
