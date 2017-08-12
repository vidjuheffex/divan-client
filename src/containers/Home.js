import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Home = ({user, children}) => (
  <div>
    <Helmet>
      <title>Divan</title>
    </Helmet>
    <h1>Home</h1>
    <h2>Welcome {user.username}</h2>
    {children}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
