import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home.js';
import Project from './Project.js';
import {withRouter} from 'react-router-dom';


const Dashboard = ({user, match}) => (
  <div>
    <Link to ={`${match.url}/project`}>What up D</Link>
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
