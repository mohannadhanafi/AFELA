/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SingleArticle from './components/pages/SingleArticle';
import Header from './components/common/Header';
import './App.scss';
import Footer from './components/common/Footer';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={SingleArticle} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
