import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';


const Table = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/options/main`} />
    <Route path={`${match.url}/main`} component={asyncComponent(() => import('./Main'))} />
    <Route path={`${match.url}/about`} component={asyncComponent(() => import('./about'))} />
    <Route path={`${match.url}/social`} component={asyncComponent(() => import('./Social'))} />
    <Route path={`${match.url}/footer`} component={asyncComponent(() => import('./Footer'))} />
    <Route path={`${match.url}/contact`} component={asyncComponent(() => import('./Contact'))} />
    <Route path={`${match.url}/social_statistic`} component={asyncComponent(() => import('./SocialStatistic'))} />
  </Switch>
);

export default Table;
