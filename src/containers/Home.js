import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, css} from 'aphrodite';

import general from '../css/general.js';
import utils from '../css/utils.js';
import {navBarHeight} from '../components/NavBar.js';

const styles = StyleSheet.create({
  page: {
    padding: '1rem',
    height: `calc(100vh - ${navBarHeight})`,
    overflow: 'auto'
  }
});

const Home = ({user, children}) => (
  <div className={css(styles.page)}>
    <div className={css(general.panel, general.panelTop, utils.fullWidth)}>
      <h1>Welcome {user.username}</h1>
    </div>
    <div className={css(general.panelBuffer, utils.fullWidth)}/>
    <div className={css(general.panel, general.panelCore, utils.fullWidth)}>
      <h2>Projects</h2>
    </div>
    <div className={css(general.panelBuffer, utils.fullWidth)}/>
    <div className={css(general.panel, general.panelBottom, utils.fullWidth)}>
      <h2>Tasks</h2>
    </div>
  </div>
);

let mapStateToProps = state => {
  return {
    user: state.user.currentUser
  };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
