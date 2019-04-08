/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/common/Header';
import './App.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="*" component={Error} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
