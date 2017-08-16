import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, css} from 'aphrodite';

import general from '../css/general.js';
import {navBarHeight} from '../components/NavBar.js';

import GlobalSettings from '../components/GlobalSettings.js';

const styles = StyleSheet.create({
  page: {
    padding: '1rem',
    height: `calc(100vh - ${navBarHeight})`,
    overflow: 'auto'
  },
  fullWidth: {
    width: '100%'
  },
  //Panel overides
  panelTop:{
    borderRadius: '.25rem .25rem 0 0'
  },
  panelCore:{
    borderRadius: '0 0 0 0',
    padding: '1rem',
    backgroundColor: 'white'
  },
  panelBottom:{
    borderRadius: '0 0 .25rem .25rem'
    },
  panelBuffer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
    height: '1rem',
    opacity: '.5',
    borderRadius: '0 0 0 0'
  }
});

class Admin extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
  <div className={css(styles.page)}>
    <div className={css(general.panel, styles.panelTop, styles.fullWidth)}>
      <h1>Admin Area</h1>
    </div>
    <div className={css(styles.panelBuffer, styles.fullWidth)}/>
    <div className={css(general.panel, styles.panelCore, styles.fullWidth)}>
      <h2> Global Settings</h2>
      <GlobalSettings globalSettings={this.props.globalSettings}/>
    </div>
    <div className={css(styles.panelBuffer, styles.fullWidth)}/>
    <div className={css(general.panel, styles.panelCore, styles.fullWidth)}>
      <h2>Projects</h2>
    </div>
    <div className={css(styles.panelBuffer, styles.fullWidth)}/>
    <div className={css(general.panel, styles.panelBottom, styles.fullWidth)}>
      <h2>Users</h2>
    </div>
  </div>
    );
  };
};




let mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    globalSettings: state.settings.globalSettings
  };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
