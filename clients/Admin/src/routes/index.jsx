import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';


const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}/Categories`} component={asyncComponent(() => import('./Categories/index.jsx'))} />
      <Route path={`${match.url}/Posts`} component={asyncComponent(() => import('./Posts'))} />
      <Route path={`${match.url}/users`} component={asyncComponent(() => import('./Users'))} />
      <Route path={`${match.url}/options`} component={asyncComponent(() => import('./Options'))} />
      <Route path={`${match.url}/newsletter`} component={asyncComponent(() => import('./newsletter'))} />
      <Route path={`${match.url}/newsletter`} component={asyncComponent(() => import('./newsletter'))} />
      <Route path={`${match.url}/comments/:status`} component={asyncComponent(() => import('./Comments'))} />
      <Route path={`${match.url}/main`} component={asyncComponent(() => import('./Main'))} />
      <Route path={`${match.url}/ads`} component={asyncComponent(() => import('./Ads'))} />
      <Route path={`${match.url}/hero`} component={asyncComponent(() => import('./Hero'))} />
      <Route path={`${match.url}/services`} component={asyncComponent(() => import('./Services'))} />
      <Route path={`${match.url}/layouts`} component={asyncComponent(() => import('./Layouts'))} />
      <Route path={`${match.url}/mailBox`} component={asyncComponent(() => import('./MailBox'))} />
      <Route path={`${match.url}/profile`} component={asyncComponent(() => import('./Profile'))} />
      <Route path={`${match.url}/search`} component={asyncComponent(() => import('./SearchResult'))} />
      <Route path={`${match.url}/teams`} component={asyncComponent(() => import('./Teams'))} />
      <Route path={`${match.url}/testimonials`} component={asyncComponent(() => import('./Testimonials'))} />
      <Route path={`${match.url}/gallery`} component={asyncComponent(() => import('./Gallery'))} />
      <Route path={`${match.url}/statistics`} component={asyncComponent(() => import('./Statistics'))} />
      <Route path={`${match.url}/layout`} component={asyncComponent(() => import('./Layout/index'))} />

      <Route
        path="*"
        render={() => (
          <Redirect to={`${match.url}/main`} />
        )}
      />
    </Switch>
  </div>
);

export default App;
