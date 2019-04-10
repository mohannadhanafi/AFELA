import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from 'util/asyncComponent';


const NewsLetter = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/view`} component={asyncComponent(() => import('./View'))} />
    <Route path={`${match.url}/Add`} component={asyncComponent(() => import('./Add'))} />
    <Route path={`${match.url}/sendPost/:id`} component={asyncComponent(() => import('./SendPost/index'))} />
  </Switch>
);

export default NewsLetter;
