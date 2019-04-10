/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SingleArticle from './components/pages/SingleArticle';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import About from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import BackToTop from './components/common/BackToTop';


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
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/news/:category/:seoName" component={SingleArticle} />
          </Switch>
          <Footer />
          <BackToTop />

        </Router>
      </div>
    );
  }
}

export default App;
