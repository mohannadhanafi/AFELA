import React, { Component } from 'react';
import CryptoNewsItemCat from './NewsItemsCat';
import CryptoNewsItemPost from './NewsItemsPost';
import CryptoNewsItemUser from './NewsItemsUser';

export default class index extends Component {
    state = {
      categoryResults: [],
      postsResult: [],
      usersResult: [],
    }

componentDidMount = () => {
  const data = localStorage.getItem('searchData');
  const finalData = JSON.parse(data);
  if (finalData !== null) {
    const { categoryResults, postsResult, usersResult } = finalData;
    this.setState({ categoryResults, postsResult, usersResult }, () => {
      localStorage.clear();
    });
  }
}

render() {
  const { categoryResults, postsResult, usersResult } = this.state;
  return (
    <>
      {categoryResults.length || postsResult.length || usersResult.length ? (
        <>
          { categoryResults.map(category => (
            <CryptoNewsItemCat data={category} />
          ))}
          { postsResult.map(post => (
            <CryptoNewsItemPost data={post} />
          ))}
          { usersResult.map(user => (
            <CryptoNewsItemUser data={user} />
          ))}
        </>
      )
        : <h1>There is no data</h1>
      }
    </>
  );
}
}
