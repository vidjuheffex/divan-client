import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home.js';
import Project from './Project.js';
import NavBar from '../components/NavBar.js';
import {withRouter} from 'react-router-dom';




const Dashboard = ({user, match}) => (
  <div>
    <NavBar />
    <Route exact path = {`${match.url}`} component={Home} />
    <Route path={`${match.url}/project`} component={Project} />
  </div>
);

let mapStateToProps = state => {
  return {
    user: state.user.currentUser
  };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
