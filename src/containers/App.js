import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {getGlobalSettings} from '../actions/index.js';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getGlobalSettings();
  }
  
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  globalSettings: state.settings.globalSettings
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getGlobalSettings
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
