import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, css} from 'aphrodite';

import general from '../css/general.js';
import utils from '../css/utils.js';
import inputs from '../css/inputs.js';

import {navBarHeight} from '../components/NavBar.js';

import GlobalSettings from '../components/GlobalSettings.js';
import AdminProjectList from '../components/AdminProjectList.js';

import ProjectCreator from './ProjectCreator.js';

import {toggleProjectCreator} from '../actions';

const styles = StyleSheet.create({
  page: {
    padding: '1rem',
    height: `calc(100vh - ${navBarHeight})`,
    overflow: 'auto'
  }
});

let Admin = props => {
  return (
    <div>
      <div className={css(styles.page)}>
        <div className={css(general.panel, general.panelTop, utils.fullWidth)}>
          <h1>Admin Area</h1>
        </div>
        <div className={css(general.panelBuffer, utils.fullWidth)}/>
        <div className={css(general.panel, general.panelCore, utils.fullWidth)}>
          <h2>Global Settings</h2>
          <GlobalSettings globalSettings={props.globalSettings}/>
        </div>
        <div className={css(general.panelBuffer, utils.fullWidth)}/>
        <div className={css(general.panel, general.panelCore, utils.fullWidth)}>
          <h2>Projects</h2>
          <div onClick= {props.toggleProjectCreator} className={css(inputs.button, inputs.confirmButton)}>Add a Project</div>
          <AdminProjectList/>
        </div>
        <div className={css(general.panelBuffer, utils.fullWidth)}/>
        <div className={css(general.panel, general.panelBottom, utils.fullWidth)}>
          <h2>Users</h2>
        </div>
      </div>
      {!props.isProjectCreatorVisible ? null : <ProjectCreator /> }
    </div>
  );
};




let mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    globalSettings: state.settings.globalSettings,
    isProjectCreatorVisible: state.ui.isProjectCreatorVisible
  };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleProjectCreator }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
