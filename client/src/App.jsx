/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Router>
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
