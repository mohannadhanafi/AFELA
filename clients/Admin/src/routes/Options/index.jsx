import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import asyncComponent from 'util/asyncComponent';


const Table = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/options/contact`} />
    <Route path={`${match.url}/contact`} component={asyncComponent(() => import('./Contact'))} />
    <Route path={`${match.url}/newsletter`} component={asyncComponent(() => import('./NewsLetter'))} />
    <Route path={`${match.url}/settings`} component={asyncComponent(() => import('./Settings'))} />
  </Switch>
);

export default Table;
