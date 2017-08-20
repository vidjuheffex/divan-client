import React, {Component} from 'react';
import ProjectCreatorForm from '../components/ProjectCreatorForm.js';
import {Redirect} from 'react-router';
import {bindActionCreators} from 'redux';
import {StyleSheet, css} from 'aphrodite';
import general from '../css/general.js';
import utils from '../css/utils.js';

import {toggleProjectCreator, sendProjectCreationRequest} from '../actions/index.js';

import {connect} from 'react-redux';

const styles = StyleSheet.create({
  factoryBlocker: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,.8)',
    //backdropFilter: "blur(5px)",
    overflow: 'hidden'
  },
  page: {
    overflow: 'auto',
    height: '100vh',
    width: '100vw',
    padding: '1rem'
  }
});



let ProjectCreator = props => {

  let handleSubmit = (values) => {
    return props.sendProjectCreationRequest(values);
  };
  
  return (
    <div className={css(styles.factoryBlocker)}>
      <div className={css(styles.page)}>
        <div className={css(general.panel, general.panelTop, utils.fullWidth)}>
          <h1>Project Creator</h1>
        </div>
        <div className={css(general.panelBuffer)}></div>
        <div className={css(general.panel, general.panelBottom, utils.fullWidth)}>
          <ProjectCreatorForm onSubmit={handleSubmit} toggleProjectCreator={props.toggleProjectCreator}/>
        </div>
        
      </div>
    </div>
  );
};

let mapStateToProps = state => ({
  
});

let mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleProjectCreator, sendProjectCreationRequest}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreator);
