import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import store from './appRedux/store';
import HomePage from './components/pages/HomePage';
import NewsPage from './components/pages/NewsPage';
import Category from './components/pages/Category';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Error from './components/common/ErrorPage';
import Activate from './components/common/Activate';
import './App.css';

class App extends Component {
  state = {};

  componentWillMount() {
    const sessionVisitor = localStorage.getItem('visitor');
    if (!sessionVisitor) {
      const hash = Date.now().toString();
      axios.get('https://json.geoiplookup.io/').then((result) => {
        const { country_code: countryCode } = result.data;
        axios.post('/api/v1/visitorCounter', { country: countryCode }).then((result) => {
          const { country } = result.data;
          localStorage.setItem('visitor', hash);
          localStorage.setItem('country', country);
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/news/:seoName" component={Category} />
              <Route exact path="/news/:category/:seoName" component={NewsPage} />
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/activate/:hash" component={Activate} />
              <Route exact path="/" component={HomePage} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
