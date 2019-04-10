/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import RightSection from '../../../common/RightSection';
import Article from './Article';
import ArticleDetails from './ArticleDetails';
import ArticleTags from './ArticleTags';
import Auther from './Auther';
import Next from './Next';
import Heading from '../../../common/Heading';
import Comment from './Comment';
import Loading from '../../../common/Loading';
import Comments from './Comments';
import './style.css';

class NewsPageContainer extends Component {
  state = {
    social: [],
    right: {
      image:
        'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      heading1: 'Keep In Touch',
      video:
        'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      heading2: 'Videos',
      heading3: 'Popular Posts',
      posts: [
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
        {
          image:
            'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
          title:
            'We decided to use this room, on the second floor and overlooking',
          date: 'Jan 23, 2018',
        },
      ],
      heading4: 'ads',
      adv:
        'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      heading5: 'Popular Posts',
    },
    post: '',
    image:
      'https://f2d44896feb7590bd54d-e0950d08dff9458d7b7fab9e628a3499.ssl.cf2.rackcdn.com/3a5feab5aac01b01e88235c75d458c8b.jpeg',
    tags: [],
    newComment: ['Hello I like this article, best wishes', 'Hello everybody'],
    comment: '',
    username: '',
    email: '',
    next: '',
    prev: '',
    loading: false,
    comments: [],
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    const intervalId = setInterval(this.switchLoading(), 1000);
    setTimeout(() => {
      this.setState({ loading: false }, () => {
        clearInterval(intervalId);
      });
    }, 2000);
    this.getData(this.props);
    axios.get('/api/v1/getoptions').then((optionResult) => {
      const { data: optionData } = optionResult;
      const {
        facebook_number,
        twitter_number,
        instagram_number,
        sound_number,
        snap_number,
        youtub_number,
      } = optionData[0];
      const list = [
        { image: 'https://i.ibb.co/D9Xzh8k/facebook.png', number: facebook_number },
        { image: 'https://i.ibb.co/5xzNkx9/insta.png', number: instagram_number },
        { image: 'https://i.ibb.co/1b4RZ3t/snapchat.png', number: snap_number },
        { image: 'https://i.ibb.co/mGLYcfv/soundcloud.png', number: sound_number },
        { image: 'https://i.ibb.co/bFjNJj0/twitter.png', number: twitter_number },
        { image: 'https://i.ibb.co/fpDLfcr/youtube.png', number: youtub_number },
      ];
      this.setState({ social: list });
    });
  };

  componentWillReceiveProps(props) {
    this.getData(props);
  }

  switchLoading = () => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };

  getData = (props) => {
    window.scroll(0, 0);
    this.switchLoading();
    const intervalId = setInterval(this.switchLoading(), 1000);
    setTimeout(() => {
      this.setState({ loading: false }, () => {
        clearInterval(intervalId);
      });
    }, 1000);
    const {
      match: {
        params: { seoName, category },
      },
    } = props;

    axios(`/api/v1/post/${category}/${seoName}`)
      .then((res) => {
        const {
          data: {
            result: data, nextPost, prevPost, commentsResult: comments,
          },
        } = res;
        const { tags } = data[0];
        this.setState({
          post: data,
          next: nextPost,
          prev: prevPost,
          comments,
          tags,
        });
      })
      .catch((error) => {
        const {
          response: { status },
        } = error;
        if (status === 404) {
          const { history } = this.props;
          history.push('/error');
        }
      });
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addComment = async (e) => {
    e.preventDefault();
    const {
      comment, username, email, post,
    } = this.state;
    const data = {
      comment,
      username,
      email,
      post_id: post[0].id,
    };
    await axios.post('/api/v1/comments/addComment', data).then(() => {
      NotificationManager.success(
        'Your comment sent, it will be avaliable after accept from admin',
        'SUCCESS',
        2000,
      );
    });
  };

  render() {
    const {
      right,
      post,
      image,
      tags,
      comment,
      username,
      email,
      next,
      prev,
      loading,
      comments,
      social,
    } = this.state;
    return (
      <div className="newsPage">
        {loading ? <Loading /> : null}
        <div className="container">
          <div className="NewsContainer">
            <div className="left-section">
              <Article postDetails={post} comments={comments} />
              <img className="adv" src={image} alt="adv" />
              <ArticleDetails postDetails={post} />
              <ArticleTags tags={tags} />
              <Auther details={post.length && post[0].user} />
              <Next next={next} prev={prev} />
              <Heading desc="Leave Comment" />
              <Comment
                users={post.length && post[0].user}
                onChange={this.onChange}
                value={comment}
                onClick={this.addComment}
                postId={post.id}
              />
              <hr className="seperate" />
              <Comments
                users={post.length && post[0].user}
                user={post.length && post[0].user}
                comments={comments}
                name={username}
                email={email}
              />
            </div>
            <RightSection data={right} social={social} />
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default withRouter(NewsPageContainer);
