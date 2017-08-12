import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import {withRouter} from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Dashboard from './containers/Dashboard.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { routerActions } from 'react-router-redux';

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.user.currentUser !== null,
  wrapperDisplayName: 'UserIsAuthenticated'
});


const Routes = ({user}) => (
  <App>
      <Route exact path="/(index.html)?" render={ ()  =>(
          user === null ? <Redirect to="/login" push/> : <Redirect to="/dashboard" push /> 
      )} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={userIsAuthenticated(Dashboard)} />
  
  </App>
);

let mapStateToProps = state => {
  return {
    user: state.user.currentUser
  };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
