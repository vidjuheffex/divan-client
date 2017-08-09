import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/Login';

export default () => (
  <App>
    <Switch>
      <Route exact path="/(index.html)?" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    </Switch>
  </App>
);
