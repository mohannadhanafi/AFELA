import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';


const Table = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/hero/view`} />
    <Route path={`${match.url}/view`} component={asyncComponent(() => import('./View'))} />
    <Route path={`${match.url}/add`} component={asyncComponent(() => import('./Add'))} />
  </Switch>
);

export default Table;
